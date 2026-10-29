// Captures deterministic screenshots of the home page for visual regression.
// Usage: node scripts/visual/snapshot.mjs <outDir> [baseUrl]
import { chromium } from "playwright"
import { mkdir } from "node:fs/promises"
import path from "node:path"

const outDir = process.argv[2] ?? ".visual/current"
const baseUrl = process.argv[3] ?? "http://localhost:3000"

const viewports = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
}

// Test-harness only: kill transitions so hover/scroll states settle instantly.
const FREEZE_CSS = `
  *, *::before, *::after { transition: none !important; caret-color: transparent !important; }
  html { scroll-behavior: auto !important; }
  /* Not part of the design: Next.js dev indicator and the v0 badge (removed later). */
  nextjs-portal, [id^="v0-built-with-button"] { display: none !important; }
`

async function preparePage(page) {
  await page.goto(baseUrl, { waitUntil: "networkidle" })
  await page.addStyleTag({ content: FREEZE_CSS })
  await page.evaluate(async () => {
    await document.fonts.ready
    // Walk the page once so lazy content and observers fire, then return to top.
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 30))
    }
    window.scrollTo(0, 0)
    await Promise.all(
      [...document.images].map((img) => (img.complete ? null : new Promise((r) => (img.onload = img.onerror = r)))),
    )
    // Pin every reveal section in its visible state, even if the observer toggles it off.
    // Only touch elements missing the class, otherwise the observer re-triggers itself forever.
    const pin = () =>
      document.querySelectorAll(".section-reveal:not(.is-visible)").forEach((el) => el.classList.add("is-visible"))
    pin()
    new MutationObserver(pin).observe(document.body, { subtree: true, attributes: true, attributeFilter: ["class"] })
  })
  await page.waitForTimeout(300)
}

const shot = (page, name, opts = {}) =>
  page.screenshot({ path: path.join(outDir, `${name}.png`), animations: "disabled", ...opts })

const browser = await chromium.launch()
await mkdir(outDir, { recursive: true })

for (const [device, viewport] of Object.entries(viewports)) {
  const context = await browser.newContext({ viewport, deviceScaleFactor: 1 })
  const page = await context.newPage()
  await preparePage(page)

  await shot(page, `${device}-full`, { fullPage: true })

  // Header after scrolling away from the hero.
  await page.evaluate(() => window.scrollTo(0, 1200))
  await page.waitForTimeout(200)
  await shot(page, `${device}-header-scrolled`, { clip: { x: 0, y: 0, width: viewport.width, height: 140 } })

  // "How I Work" with its scroll-triggered is-active state.
  await page.locator(".how-i-work").scrollIntoViewIfNeeded()
  await page.waitForTimeout(300)
  await shot(page, `${device}-how-i-work-active`)

  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(200)

  if (device === "desktop") {
    // Hero inspector overlay on hover.
    await page.hover(".hero-title .hero-text-measure")
    await page.waitForTimeout(200)
    await shot(page, `${device}-hero-inspect`)
    await page.mouse.move(0, 0)
  } else {
    await page.click(".menu-trigger")
    await page.waitForTimeout(200)
    await shot(page, `${device}-menu-open`)
  }

  await context.close()
}

await browser.close()
console.log(`Saved screenshots to ${outDir}`)

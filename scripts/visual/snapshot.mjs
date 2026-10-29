// Captures deterministic home-page screenshots for visual regression.
// Usage: node scripts/visual/snapshot.mjs <outDir outside the repo> [baseUrl]
import { chromium } from "playwright"
import { mkdir } from "node:fs/promises"
import path from "node:path"

// Keep outDir outside the project: files written inside it trigger dev-server recompiles.
const outDir = process.argv[2]
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

// Lets the harness mute IntersectionObserver callbacks. A full-page capture resizes the
// viewport, which would otherwise toggle .is-visible and restart reveal animations mid-shot.
const OBSERVER_GATE = `
  window.__ioFrozen = false
  const NativeIO = window.IntersectionObserver
  window.IntersectionObserver = class extends NativeIO {
    constructor(callback, options) {
      super((...args) => { if (!window.__ioFrozen) callback(...args) }, options)
    }
  }
`

async function preparePage(page, url) {
  await page.addInitScript(OBSERVER_GATE)
  await page.goto(url, { waitUntil: "networkidle" })
  // Guard against a blank capture while the dev server is still compiling.
  await page.waitForFunction(() => document.body.innerText.trim().length > 50, null, { timeout: 60000 })
  await page.addStyleTag({ content: FREEZE_CSS })
  await page.evaluate(async () => {
    await document.fonts.ready
    // Walk the page once so lazy content and observers fire, then return to top.
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 30))
    }
    window.scrollTo(0, 0)
    await new Promise((r) => setTimeout(r, 100))
    window.__ioFrozen = true
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

async function captureStates(page, prefix, viewport) {
  const shot = (name, opts) => page.screenshot({ path: path.join(outDir, `${prefix}-${name}.png`), animations: "disabled", ...opts })

  // Viewport-sized shots don't resize, so observers can run again (header active link needs them).
  await page.evaluate(() => (window.__ioFrozen = false))

  // Header after scrolling away from the hero.
  await page.evaluate(() => window.scrollTo(0, 1200))
  await page.waitForTimeout(200)
  await shot("header-scrolled", { clip: { x: 0, y: 0, width: viewport.width, height: 140 } })

  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(200)

  if (viewport.width >= 1024) {
    // Hero inspector overlay on hover.
    await page.hover(".hero-title .hero-text-measure")
    await page.waitForTimeout(200)
    await shot("hero-inspect")
    await page.mouse.move(0, 0)
  }

  if (await page.locator(".menu-trigger").isVisible()) {
    await page.click(".menu-trigger")
    await page.waitForTimeout(200)
    await shot("menu-open")
  }
}

// Fixed rasterization settings; without them text antialiasing jitters between runs.
const browser = await chromium.launch({
  args: ["--disable-gpu", "--disable-lcd-text", "--font-render-hinting=none", "--force-color-profile=srgb"],
})
await mkdir(outDir, { recursive: true })

// Warm up the dev server so the page is compiled before the first capture.
await fetch(baseUrl)

for (const [device, viewport] of Object.entries(viewports)) {
  const context = await browser.newContext({ viewport, deviceScaleFactor: 1 })
  const page = await context.newPage()
  await preparePage(page, baseUrl)

  const prefix = `home-${device}`
  await page.screenshot({ path: path.join(outDir, `${prefix}-full.png`), animations: "disabled", fullPage: true })
  await captureStates(page, prefix, viewport)

  await context.close()
}

await browser.close()
console.log(`Saved screenshots to ${outDir}`)

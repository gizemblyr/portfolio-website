// Pixel-diffs two screenshot folders and writes diff images for any mismatch.
// Usage: node scripts/visual/compare.mjs <baselineDir> <currentDir> [diffDir]
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises"
import path from "node:path"
import { PNG } from "pngjs"
import pixelmatch from "pixelmatch"

const [baselineDir = ".visual/baseline", currentDir = ".visual/current", diffDir = ".visual/diff"] = process.argv.slice(2)
await mkdir(diffDir, { recursive: true })

let failed = false
for (const file of (await readdir(baselineDir)).filter((f) => f.endsWith(".png"))) {
  const a = PNG.sync.read(await readFile(path.join(baselineDir, file)))
  let b
  try {
    b = PNG.sync.read(await readFile(path.join(currentDir, file)))
  } catch {
    console.log(`MISSING  ${file}`)
    failed = true
    continue
  }

  if (a.width !== b.width || a.height !== b.height) {
    console.log(`SIZE     ${file}: ${a.width}x${a.height} -> ${b.width}x${b.height}`)
    failed = true
    continue
  }

  const diff = new PNG({ width: a.width, height: a.height })
  const changed = pixelmatch(a.data, b.data, diff.data, a.width, a.height, { threshold: 0.1 })
  if (changed === 0) {
    console.log(`OK       ${file}`)
    continue
  }

  failed = true
  // Report the vertical bands that differ so they can be mapped to sections.
  const rows = []
  for (let y = 0; y < a.height; y++) {
    for (let x = 0; x < a.width; x++) {
      if (diff.data[(y * a.width + x) * 4 + 1] === 0 && diff.data[(y * a.width + x) * 4] > 200) {
        rows.push(y)
        break
      }
    }
  }
  const bands = []
  for (const y of rows) {
    const last = bands.at(-1)
    if (last && y - last[1] <= 8) last[1] = y
    else bands.push([y, y])
  }
  const pct = ((changed / (a.width * a.height)) * 100).toFixed(3)
  console.log(`DIFF     ${file}: ${changed}px (${pct}%) rows ${bands.map(([s, e]) => `${s}-${e}`).join(", ")}`)
  await writeFile(path.join(diffDir, file), PNG.sync.write(diff))
}

process.exit(failed ? 1 : 0)

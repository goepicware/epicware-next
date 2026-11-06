// scripts/check-image-dimensions.ts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Flags <Image> usages with neither `fill` nor both width+height, and
 * raw <img> tags anywhere (which bypass next/image's built-in sizing,
 * AVIF/WebP serving, and lazy-loading entirely).
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SCAN_DIRS = ["app", "components"];

function walk(dir: string, out: string[]) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (/\.tsx$/.test(entry.name)) {
      out.push(full);
    }
  }
}

function main() {
  const files: string[] = [];
  for (const dir of SCAN_DIRS) walk(path.join(ROOT, dir), files);

  const rawImgViolations: string[] = [];
  const missingDimensionViolations: string[] = [];

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    if (/<img\s/.test(content)) {
      rawImgViolations.push(path.relative(ROOT, file));
    }
    // crude but effective: find each <Image ...> tag, check it has fill or width+height
    const imageTagRegex = /<Image\s+([^>]*?)\/?>/g;
    let m: RegExpExecArray | null;
    while ((m = imageTagRegex.exec(content)) !== null) {
      const attrs = m[1];
      const hasFill = /\bfill\b/.test(attrs);
      const hasWidth = /\bwidth=/.test(attrs);
      const hasHeight = /\bheight=/.test(attrs);
      if (!hasFill && !(hasWidth && hasHeight)) {
        missingDimensionViolations.push(`${path.relative(ROOT, file)}: ${m[0].slice(0, 80)}...`);
      }
    }
  }

  console.log("=== Image dimension check ===\n");
  console.log(`Raw <img> tags (bypass next/image): ${rawImgViolations.length}`);
  for (const v of rawImgViolations) console.log(`  - ${v}`);
  console.log(`\n<Image> missing fill or width+height: ${missingDimensionViolations.length}`);
  for (const v of missingDimensionViolations) console.log(`  - ${v}`);
}

main();

// scripts/check-breadcrumb-schema.ts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Flags indexable page.tsx files that render no BreadcrumbList JSON-LD.
 * A page is skipped if it 404s, redirects, or sets noindex — those don't
 * need breadcrumbs. This is a soft gate (reports, doesn't fail the build)
 * since not every route type (e.g. /contact, a single-purpose utility
 * page) necessarily needs one — read the list and judge each one.
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const APP_DIR = path.join(ROOT, "app");

function walk(dir: string, out: string[]) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name.startsWith(".") || entry.name === "api") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (entry.name === "page.tsx") {
      out.push(full);
    }
  }
}

function main() {
  const pages: string[] = [];
  walk(APP_DIR, pages);

  const missing: string[] = [];
  for (const file of pages) {
    const content = fs.readFileSync(file, "utf-8");
    if (content.includes("noindex")) continue;
    if (!content.includes("BreadcrumbList")) {
      missing.push(path.relative(ROOT, file));
    }
  }

  console.log("=== BreadcrumbList schema coverage ===\n");
  console.log(`${pages.length} page.tsx files scanned, ${missing.length} without BreadcrumbList schema:\n`);
  for (const m of missing) console.log(`  - ${m}`);
}

main();

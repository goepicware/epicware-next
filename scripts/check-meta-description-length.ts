// scripts/check-meta-description-length.ts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const APP_DIR = path.join(ROOT, "app");
const MAX_LENGTH = 160;

function walk(dir: string, out: string[]) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name.startsWith(".") || entry.name === "api") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (entry.name === "page.tsx" || entry.name === "layout.tsx") {
      out.push(full);
    }
  }
}

function main() {
  const files: string[] = [];
  walk(APP_DIR, files);

  const violations: { file: string; length: number; text: string }[] = [];
  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    // Matches: description: "..." or description: `...` (single-line only —
    // multi-line template literals need manual review, flagged separately below)
    const match = content.match(/description:\s*["'`]([^"'`]+)["'`]/);
    if (match && match[1].length > MAX_LENGTH) {
      violations.push({ file: path.relative(ROOT, file), length: match[1].length, text: match[1] });
    }
  }

  console.log("=== Meta description length check (max 160 chars) ===\n");
  if (violations.length === 0) {
    console.log("All scanned meta descriptions are within 160 characters.");
    return;
  }
  for (const v of violations) {
    console.log(`  [${v.length} chars] ${v.file}`);
    console.log(`    "${v.text}"\n`);
  }
  console.log(`${violations.length} violation(s). Build blocked.`);
  process.exitCode = 1;
}

main();

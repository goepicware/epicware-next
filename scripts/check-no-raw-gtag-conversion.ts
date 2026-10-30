import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Every Google Ads conversion must go through trackGoogleAdsLead()
 * (lib/tracking/google-ads.ts) so the production gate, dedup, and
 * event_callback/timeout logic apply everywhere — not copy-pasted
 * site-wide. This gate fails the build if any OTHER file calls
 * `gtag('event', 'conversion'` (or the double-quoted form) directly.
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const ALLOWED_FILE = path.join(ROOT, "lib", "tracking", "google-ads.ts");
const SCAN_DIRS = ["app", "components", "lib"];
const PATTERN = /gtag\(\s*['"]event['"]\s*,\s*['"]conversion['"]/;

function walk(dir: string, out: string[]) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) {
      out.push(full);
    }
  }
}

function main() {
  const files: string[] = [];
  for (const dir of SCAN_DIRS) {
    const full = path.join(ROOT, dir);
    if (fs.existsSync(full)) walk(full, files);
  }

  const violations: string[] = [];
  for (const file of files) {
    if (file === ALLOWED_FILE) continue;
    const content = fs.readFileSync(file, "utf-8");
    if (PATTERN.test(content)) {
      violations.push(path.relative(ROOT, file));
    }
  }

  console.log("=== No raw gtag('event', 'conversion') gate ===\n");
  console.log(`Scanned ${files.length} files.`);

  if (violations.length === 0) {
    console.log("No raw gtag('event', 'conversion') calls found outside lib/tracking/google-ads.ts.");
    return;
  }

  for (const v of violations) console.log(`  [FAIL] ${v} calls gtag('event', 'conversion') directly — use trackGoogleAdsLead() instead.`);
  console.log(`\n${violations.length} violation(s). Build blocked.`);
  process.exitCode = 1;
}

main();

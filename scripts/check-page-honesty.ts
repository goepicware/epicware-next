import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { COUNTRIES } from "../lib/site/countries";
import { SERVICES } from "../lib/site/services";
import { DEMONYMS } from "./lib/page-text";

/**
 * Honesty lint: no non-Singapore country page may claim local presence it
 * doesn't have ("US-based", "headquartered in the UK", "our UK team", a
 * non-+65 phone number, a non-SG PostalAddress in schema), and target
 * markets must be declared via areaServed, not a fabricated office or
 * team. Singapore is exempt — it's the one country Epicware genuinely is
 * based in, and its real shared number (+65...) is the only one that
 * should appear anywhere.
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const NON_SG_COUNTRIES = COUNTRIES.filter((c) => c.slug !== "singapore");
const NON_SG_DEMONYMS = NON_SG_COUNTRIES.flatMap((c) => DEMONYMS[c.slug] ?? []).sort((a, b) => b.length - a.length);

// "us"/"uk" are short and ambiguous ONLY in the bare "[word] based" shape
// ("trust us, based on our reviews" is not a presence claim, and "us
// based" the demonym can't be told apart from that by regex). Every other
// pattern here pairs the demonym with a word ("team", "office",
// "headquartered") that "us"/"uk" as pronoun/noun doesn't idiomatically
// precede that way, so those stay included.
const AMBIGUOUS = new Set(["us", "uk"]);
const demonymPattern = (includeAmbiguous: boolean) =>
  NON_SG_DEMONYMS.filter((d) => includeAmbiguous || !AMBIGUOUS.has(d))
    .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");

const PATTERNS: { re: RegExp; label: string }[] = [
  { re: new RegExp(`\\b(${demonymPattern(true)})-based\\b`, "i"), label: "[Country]-based claim" },
  { re: new RegExp(`\\b(${demonymPattern(false)})\\s+based\\b`, "i"), label: "[Country] based claim" },
  { re: new RegExp(`\\bheadquartered in\\s+(${demonymPattern(true)})\\b`, "i"), label: "headquartered-in claim" },
  { re: new RegExp(`\\b(our|a|local)\\s+office(s)?\\s+in\\s+(${demonymPattern(true)})\\b`, "i"), label: "local-office claim" },
  { re: new RegExp(`\\bour\\s+(${demonymPattern(true)})\\s+team\\b`, "i"), label: "our-[city]-team claim" },
  { re: new RegExp(`\\blocal team in\\s+(${demonymPattern(true)})\\b`, "i"), label: "local-team-in-[city] claim" },
  { re: new RegExp(`\\b(${demonymPattern(true)})\\s+office\\b`, "i"), label: "[city]-office claim" },
];

// Any phone-number-shaped sequence in non-Singapore page content must be
// the real, honest +65 number — a plausible-looking "+1 (555) 123-4567"
// or "(020) 7946 0958" implies a local line that doesn't exist.
const PHONE_PATTERNS = [/\+\d[\d\s().-]{7,17}\d/g, /\(\d{2,4}\)[\s.-]?\d{3,4}[\s.-]?\d{3,4}/g];

function scanText(label: string, text: string | undefined, problems: string[]) {
  if (!text) return;
  for (const { re, label: reason } of PATTERNS) {
    const m = text.match(re);
    if (m) problems.push(`${label}: ${reason} — "${m[0]}"`);
  }
  for (const re of PHONE_PATTERNS) {
    for (const m of text.matchAll(re)) {
      const compact = m[0].replace(/[\s().-]/g, "");
      if (!compact.startsWith("+65")) {
        problems.push(`${label}: non-+65 phone number — "${m[0]}"`);
      }
    }
  }
}

function scanSchemaForAddress(label: string, source: string, problems: string[]) {
  if (/PostalAddress|streetAddress/i.test(source)) {
    problems.push(`${label}: schema contains PostalAddress/streetAddress — use areaServed for target markets instead`);
  }
}

function main() {
  const problems: string[] = [];

  for (const country of NON_SG_COUNTRIES) {
    for (const service of SERVICES) {
      const filePath = path.join(ROOT, "content", "locations", country.slug, `${service.slug}.mdx`);
      if (!fs.existsSync(filePath)) continue;
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      const id = `${country.slug}/${service.slug}`;
      scanText(id, data.metaTitle, problems);
      scanText(id, data.metaDescription, problems);
      scanText(id, data.h1, problems);
      scanText(id, content, problems);
      scanSchemaForAddress(id, raw, problems);
    }

    const hubPath = path.join(ROOT, "content", "locations", country.slug, "hub.mdx");
    if (fs.existsSync(hubPath)) {
      const raw = fs.readFileSync(hubPath, "utf-8");
      const { data, content } = matter(raw);
      const id = `${country.slug}/hub`;
      scanText(id, data.metaTitle, problems);
      scanText(id, data.metaDescription, problems);
      scanText(id, data.h1, problems);
      scanText(id, content, problems);
      scanSchemaForAddress(id, raw, problems);
    }
  }

  // Fixed route templates shared by every non-Singapore country — checked
  // once so a hardcoded violation added to the template itself (rather
  // than content) still gets caught.
  for (const rel of [
    "components/site/MoneyPageLayout.tsx",
    "components/site/CountryHubLayout.tsx",
    "app/locations/[country]/page.tsx",
    "app/locations/[country]/[service]/page.tsx",
  ]) {
    const filePath = path.join(ROOT, rel);
    if (!fs.existsSync(filePath)) continue;
    const source = fs.readFileSync(filePath, "utf-8");
    scanText(rel, source, problems);
    scanSchemaForAddress(rel, source, problems);
  }

  console.log("=== Honesty lint (non-Singapore pages) ===\n");
  if (problems.length === 0) {
    console.log("No violations found.");
    return;
  }
  for (const p of problems) console.log(`  [FAIL] ${p}`);
  console.log(`\n${problems.length} honesty violation(s). Build blocked.`);
  process.exitCode = 1;
}

main();

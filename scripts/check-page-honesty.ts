import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { COUNTRIES } from "../lib/site/countries";
import { SERVICES } from "../lib/site/services";
import { DEMONYMS } from "./lib/page-text";

/**
 * Honesty lint: no non-Singapore country page may claim local presence it
 * doesn't have ("US-based", "headquartered in the UK", a non-SG
 * PostalAddress in schema), and target markets must be declared via
 * areaServed, not a fabricated office. Singapore is exempt — it's the
 * one country Epicware genuinely is based in.
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const NON_SG_COUNTRIES = COUNTRIES.filter((c) => c.slug !== "singapore");
const NON_SG_DEMONYMS = NON_SG_COUNTRIES.flatMap((c) => DEMONYMS[c.slug] ?? []).sort((a, b) => b.length - a.length);

// "us"/"uk" are short and ambiguous in ordinary prose ("trust us, based on
// our reviews" is not a presence claim) — require a hyphen, not an
// optional space, for those two specifically. Longer, unambiguous
// demonyms (american, dubai, emirati, ...) allow either.
const AMBIGUOUS = new Set(["us", "uk"]);
const demonymPattern = (sep: string) =>
  NON_SG_DEMONYMS.filter((d) => (sep === "-" ? true : !AMBIGUOUS.has(d)))
    .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");

const PATTERNS: { re: RegExp; label: string }[] = [
  { re: new RegExp(`\\b(${demonymPattern("-")})-based\\b`, "i"), label: "[Country]-based claim" },
  { re: new RegExp(`\\b(${demonymPattern(" ")})\\s+based\\b`, "i"), label: "[Country] based claim" },
  { re: new RegExp(`\\bheadquartered in\\s+(${demonymPattern(" ")})\\b`, "i"), label: "headquartered-in claim" },
  { re: new RegExp(`\\b(our|a|local)\\s+office(s)?\\s+in\\s+(${demonymPattern(" ")})\\b`, "i"), label: "local-office claim" },
];

function scanText(label: string, text: string | undefined, problems: string[]) {
  if (!text) return;
  for (const { re, label: reason } of PATTERNS) {
    const m = text.match(re);
    if (m) problems.push(`${label}: ${reason} — "${m[0]}"`);
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

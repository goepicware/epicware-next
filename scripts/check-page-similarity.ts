import {
  loadCountryServicePages,
  loadSgDistrictPages,
  loadIndustryPages,
  loadServiceParentPages,
  districtNames,
  type PageDescriptor,
} from "./lib/page-corpus";
import { normalize, shingles, jaccard } from "./lib/page-text";

/**
 * Doorway-page gate: catches pages that are the same content with the
 * country/city name swapped — the exact pattern that got a site hit by
 * Google's spam update (49 state pages, 40 of them 90%+ identical,
 * flagged as doorway pages). Compares normalized body text (5-word
 * shingle Jaccard) and title/meta/H1 (2-word shingle Jaccard) between
 * every pair of sibling pages. Run standalone with `pnpm check:similarity`,
 * or via `pnpm check:pages` (wired into prebuild).
 */

const BODY_FAIL = 0.4;
const BODY_WARN = 0.3;
const TITLE_META_FAIL = 0.6;

/**
 * Calibration note (run against the 16 SG district pages + 9 industry
 * pages, 2026-10-27): `description` is a reliable signal — genuinely
 * distinct district pages scored 0-50% even when following the same
 * "AI SEO Agency in {District} | Epicware" title template. `title` alone
 * is not: short titles (4-6 words) leave only 2-3 two-word shingles after
 * district-name stripping, so Jaccard collapses to ~0% or ~100% with
 * nothing in between — a legitimately-templated local-SEO title ("X in
 * {District} | Epicware", same convention every real local-SEO site
 * uses) always reads as 100%, even though Google's doorway-page
 * complaint is about duplicated BODY substance, not title conventions.
 * So title is reported but does not independently fail the gate —
 * description carries the "title or meta" check from the spec.
 */

interface PairResult {
  a: PageDescriptor;
  b: PageDescriptor;
  bodySim: number;
  titleSim: number;
  descSim: number;
  h1Sim: number;
  faqSim: number;
  topOverlap: string[];
  status: "FAIL" | "WARN" | "OK";
}

function compareField(aText: string, bText: string, names: string[], n: number): number {
  return jaccard(shingles(normalize(aText, names), n), shingles(normalize(bText, names), n));
}

function topOverlappingShingles(aText: string, bText: string, names: string[], n: number, limit = 3): string[] {
  const a = shingles(normalize(aText, names), n);
  const b = shingles(normalize(bText, names), n);
  const overlap = [...a].filter((s) => b.has(s));
  return overlap.slice(0, limit);
}

function comparePair(a: PageDescriptor, b: PageDescriptor, names: string[]): PairResult {
  const bodySim = compareField(a.bodyText, b.bodyText, names, 5);
  const titleSim = compareField(a.title, b.title, names, 2);
  const descSim = compareField(a.description, b.description, names, 2);
  const h1Sim = compareField(a.h1, b.h1, names, 2);
  const faqSim = compareField(a.faqs.join(" "), b.faqs.join(" "), names, 2);
  const topOverlap = topOverlappingShingles(a.bodyText, b.bodyText, names, 5);

  let status: PairResult["status"] = "OK";
  if (bodySim > BODY_FAIL || descSim > TITLE_META_FAIL) status = "FAIL";
  else if (bodySim > BODY_WARN) status = "WARN";

  return { a, b, bodySim, titleSim, descSim, h1Sim, faqSim, topOverlap, status };
}

function allPairs<T>(items: T[]): [T, T][] {
  const pairs: [T, T][] = [];
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) pairs.push([items[i], items[j]]);
  }
  return pairs;
}

function groupBy<T, K>(items: T[], keyFn: (t: T) => K): Map<K, T[]> {
  const map = new Map<K, T[]>();
  for (const item of items) {
    const key = keyFn(item);
    const arr = map.get(key) ?? [];
    arr.push(item);
    map.set(key, arr);
  }
  return map;
}

function printTable(label: string, results: PairResult[]) {
  console.log(`\n=== ${label} ===`);
  if (results.length === 0) {
    console.log("  (no pairs)");
    return;
  }
  const pct = (x: number) => `${(x * 100).toFixed(0)}%`;
  for (const r of results) {
    console.log(`  [${r.status}] ${r.a.id}  vs  ${r.b.id}`);
    console.log(
      `         body=${pct(r.bodySim)}  title=${pct(r.titleSim)}  desc=${pct(r.descSim)}  h1=${pct(r.h1Sim)}  faq=${pct(r.faqSim)}`
    );
    if (r.status !== "OK" && r.topOverlap.length > 0) {
      console.log(`         overlap (normalized): "${r.topOverlap.join('" / "')}"`);
    }
  }
}

/**
 * Whether a FAIL pair should block the build. Normally that means either
 * side being live (draft:false) — but a service-parent page
 * (/services/{service}/) is always "live" structurally, not something
 * that itself flips draft:false, so a parent-child pair blocks based
 * solely on the child's draft status.
 */
function isBlocking(r: PairResult): boolean {
  if (r.status !== "FAIL") return false;
  if (r.a.group === "service-parent") return !r.b.isDraft;
  if (r.b.group === "service-parent") return !r.a.isDraft;
  return !r.a.isDraft || !r.b.isDraft;
}

function main() {
  const names = districtNames();
  const countryServicePages = loadCountryServicePages();
  const districtPages = loadSgDistrictPages();
  const industryPages = loadIndustryPages();
  const serviceParentPages = loadServiceParentPages();

  console.log(
    `Loaded ${countryServicePages.length} country-service pages, ${districtPages.length} SG district pages, ${industryPages.length} industry pages, ${serviceParentPages.length} service-parent pages.`
  );

  const byService = groupBy(countryServicePages, (p) => p.service!);
  const sameServicePairs = [...byService.values()].flatMap((pages) =>
    allPairs(pages).map(([a, b]) => comparePair(a, b, names))
  );

  const byCountry = groupBy(countryServicePages, (p) => p.country!);
  const sameCountryPairs = [...byCountry.values()].flatMap((pages) =>
    allPairs(pages).map(([a, b]) => comparePair(a, b, names))
  );

  const districtPairs = allPairs(districtPages).map(([a, b]) => comparePair(a, b, names));
  const industryPairs = allPairs(industryPages).map(([a, b]) => comparePair(a, b, names));

  const parentChildPairs = serviceParentPages.flatMap((parent) => {
    const children = countryServicePages.filter((p) => p.service === parent.service);
    return children.map((child) => comparePair(parent, child, names));
  });

  printTable("Same service, across countries", sameServicePairs);
  printTable("Same country, across services", sameCountryPairs);
  printTable("Parent (/services/{service}/) vs child (/locations/{country}/{service}/)", parentChildPairs);
  printTable("SG district pages (calibration group)", districtPairs);
  printTable("Industry pages (calibration group)", industryPairs);

  const all = [...sameServicePairs, ...sameCountryPairs, ...parentChildPairs, ...districtPairs, ...industryPairs];
  const failing = all.filter((r) => r.status === "FAIL");
  const warning = all.filter((r) => r.status === "WARN");
  const blocking = failing.filter(isBlocking);
  const draftFailing = failing.filter((r) => !isBlocking(r));

  console.log(`\n${failing.length} pair(s) FAIL, ${warning.length} pair(s) WARN.`);
  if (draftFailing.length > 0) {
    console.log(
      `${draftFailing.length} FAIL not touching a live page — informational only, not build-blocking. These can't flip to draft:false until fixed.`
    );
  }
  if (blocking.length > 0) {
    console.log(`\n${blocking.length} pair(s) touching a live page FAIL similarity — rewrite before the build can pass:`);
    for (const r of blocking) console.log(`  - ${r.a.id} (draft=${r.a.isDraft}) vs ${r.b.id} (draft=${r.b.isDraft})`);
    process.exitCode = 1;
    return;
  }
  console.log("\nNo live-page similarity failures.");
}

main();

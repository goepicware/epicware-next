import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { PAGED_SERVICES } from "../lib/site/services";
import { COUNTRIES } from "../lib/site/countries";
import { DISTRICTS } from "../lib/districts";

/**
 * Generates public/llms.txt from content/llms/intro.md (hand-authored:
 * company info, products, proof, competitors, founder — none of this
 * lives in a data layer, so it stays editorial) plus three sections
 * assembled from the same source of truth the rest of the site uses
 * (lib/site/services.ts, lib/site/countries.ts, content/locations
 * frontmatter). Previously llms.txt was a fully static file that still
 * listed the pre-restructure Singapore URLs and could never reflect a
 * Phase 5 country page going live — this fixes both: re-run on every
 * build (wired into postbuild) so it can't drift again.
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const BASE_URL = "https://www.epicware.ai";

const INDUSTRY_LABELS: Record<string, string> = {
  restaurants: "F&B Restaurants",
  "healthcare-clinics": "Medical Clinics",
  "nail-hair-salons": "Hair & Beauty Salons",
  "tuition-centres": "Tuition Centres",
  "dental-clinics": "Dental Clinics",
  "car-workshops": "Car Workshops",
  physiotherapy: "Physiotherapy Clinics",
  "retail-stores": "Retail Stores",
  "wellness-centres": "Spas & Wellness Centres",
};

function humanizeSlug(slug: string): string {
  return slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
}

function isCountryServiceLive(countrySlug: string, serviceSlug: string): boolean {
  if (countrySlug === "singapore") return true; // bespoke .tsx pages, always live
  const filePath = path.join(ROOT, "content", "locations", countrySlug, `${serviceSlug}.mdx`);
  if (!fs.existsSync(filePath)) return false;
  const { data } = matter(fs.readFileSync(filePath, "utf-8"));
  return data.draft === false;
}

function isCountryHubLive(countrySlug: string): boolean {
  if (countrySlug === "singapore") return true;
  const filePath = path.join(ROOT, "content", "locations", countrySlug, "hub.mdx");
  if (!fs.existsSync(filePath)) return false;
  const { data } = matter(fs.readFileSync(filePath, "utf-8"));
  return data.draft === false;
}

function buildServicesSection(): string {
  const lines = ["## Services", ""];
  for (const s of PAGED_SERVICES) {
    lines.push(`- [${s.name}](${BASE_URL}/services/${s.slug}) — ${s.shortDescription}`);
  }
  return lines.join("\n");
}

function buildLocationsSection(): string {
  const lines = ["## Locations", ""];
  for (const country of COUNTRIES) {
    if (!isCountryHubLive(country.slug)) continue;
    lines.push(`### ${country.displayName}`, "", `- [${country.displayName} hub](${BASE_URL}/locations/${country.slug})`);
    for (const service of PAGED_SERVICES) {
      if (!isCountryServiceLive(country.slug, service.slug)) continue;
      lines.push(`- [${service.name} in ${country.displayName}](${BASE_URL}/locations/${country.slug}/${service.slug})`);
    }
    if (country.slug === "singapore") {
      lines.push(`- ${DISTRICTS.length} Singapore district pages at /locations/singapore/{district}`);
    }
    lines.push("");
  }
  return lines.join("\n").trimEnd();
}

function buildIndustriesSection(): string {
  const dir = path.join(ROOT, "app", "industries");
  const slugs = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();
  const lines = ["## Industries Served", ""];
  for (const slug of slugs) {
    const label = INDUSTRY_LABELS[slug] ?? humanizeSlug(slug);
    lines.push(`- [${label}](${BASE_URL}/industries/${slug})`);
  }
  lines.push(`- [All Industries](${BASE_URL}/industries)`);
  return lines.join("\n");
}

function main() {
  const introPath = path.join(ROOT, "content", "llms", "intro.md");
  let output = fs.readFileSync(introPath, "utf-8");

  output = output.replace("<!-- GENERATED:SERVICES -->", buildServicesSection());
  output = output.replace("<!-- GENERATED:LOCATIONS -->", buildLocationsSection());
  output = output.replace("<!-- GENERATED:INDUSTRIES -->", buildIndustriesSection());

  // Collapse the blank-line gaps left by the template's marker spacing.
  output = output.replace(/\n{3,}/g, "\n\n");

  const outPath = path.join(ROOT, "public", "llms.txt");
  fs.writeFileSync(outPath, output);
  console.log(`[generate-llms-txt] wrote ${outPath} (${output.length} bytes)`);
}

main();

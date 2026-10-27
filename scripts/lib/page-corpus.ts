import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { COUNTRIES } from "../../lib/site/countries";
import { SERVICES } from "../../lib/site/services";
import { DISTRICTS } from "../../lib/districts";
import { extractTsxPage, extractMdxPage, type ExtractedPage } from "./page-text";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..", "..");

export interface PageDescriptor extends ExtractedPage {
  id: string;
  group: "country-service" | "sg-district" | "industry" | "service-parent";
  country?: string;
  service?: string;
  isDraft: boolean;
  filePath: string;
}

/** The 5 countries × 6 services. Singapore reads its bespoke .tsx pages; the other 4 read MDX. */
export function loadCountryServicePages(): PageDescriptor[] {
  const pages: PageDescriptor[] = [];
  for (const country of COUNTRIES) {
    for (const service of SERVICES) {
      if (country.slug === "singapore") {
        const filePath = path.join(ROOT, "app", "locations", "singapore", service.slug, "page.tsx");
        if (!fs.existsSync(filePath)) continue;
        const source = fs.readFileSync(filePath, "utf-8");
        const page = extractTsxPage(source);
        pages.push({
          id: `singapore/${service.slug}`,
          group: "country-service",
          country: country.slug,
          service: service.slug,
          isDraft: false,
          filePath,
          ...page,
        });
      } else {
        const filePath = path.join(ROOT, "content", "locations", country.slug, `${service.slug}.mdx`);
        if (!fs.existsSync(filePath)) continue;
        const raw = fs.readFileSync(filePath, "utf-8");
        const { draft, ...page } = extractMdxPage(raw);
        pages.push({
          id: `${country.slug}/${service.slug}`,
          group: "country-service",
          country: country.slug,
          service: service.slug,
          isDraft: draft,
          filePath,
          ...page,
        });
      }
    }
  }
  return pages;
}

/**
 * Per-district SEO <title>/description overrides, read from
 * app/locations/singapore/[slug]/page.tsx's DISTRICT_META record. Not
 * every district has an entry (DISTRICT_META only covers the 10 districts
 * that pre-date this restructure) — districts without one fall back to
 * their h1/subtitle, same as the route itself does via `if (!meta) return {}`.
 */
function loadDistrictMeta(): Record<string, { title: string; description: string }> {
  const filePath = path.join(ROOT, "app", "locations", "singapore", "[slug]", "page.tsx");
  const source = fs.readFileSync(filePath, "utf-8");
  const blockMatch = source.match(/const DISTRICT_META[^=]*=\s*\{([\s\S]*?)\n\};/);
  if (!blockMatch) return {};
  const meta: Record<string, { title: string; description: string }> = {};
  const entryRe = /"?([a-z-]+)"?:\s*\{\s*title:\s*"((?:[^"\\]|\\.)*)",\s*description:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g;
  for (const m of blockMatch[1].matchAll(entryRe)) {
    meta[m[1]] = { title: m[2], description: m[3] };
  }
  return meta;
}

/** The 16 Singapore district pages, sourced directly from lib/districts.ts data. */
export function loadSgDistrictPages(): PageDescriptor[] {
  const districtMeta = loadDistrictMeta();
  return DISTRICTS.map((d) => {
    const meta = districtMeta[d.slug];
    return {
      id: `singapore/district/${d.slug}`,
      group: "sg-district" as const,
      isDraft: false,
      filePath: "lib/districts.ts",
      title: meta?.title ?? d.h1,
      description: meta?.description ?? d.subtitle,
      h1: d.h1,
      faqs: [],
      bodyText: [d.subtitle, d.openingParagraph, d.whyMatter, d.keyBusinessTypes.join(", ")].join(" "),
    };
  });
}

/** The app/industries/* pages. */
export function loadIndustryPages(): PageDescriptor[] {
  const dir = path.join(ROOT, "app", "industries");
  const entries = fs.readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory());
  return entries.map((e) => {
    const filePath = path.join(dir, e.name, "page.tsx");
    const source = fs.readFileSync(filePath, "utf-8");
    const page = extractTsxPage(source);
    return {
      id: `industries/${e.name}`,
      group: "industry" as const,
      isDraft: false,
      filePath,
      ...page,
    };
  });
}

export function districtNames(): string[] {
  return DISTRICTS.map((d) => d.name);
}

/**
 * The 6 global /services/{service}/ pages — the "parent" each
 * /locations/{country}/{service}/ page sits under. These are generated
 * straight from SERVICES data (app/services/[service]/page.tsx has no
 * prose of its own beyond service.shortDescription), so read directly
 * from the data source rather than parsing the route file.
 */
export function loadServiceParentPages(): PageDescriptor[] {
  return SERVICES.map((s) => ({
    id: `services/${s.slug}`,
    group: "service-parent" as const,
    service: s.slug,
    isDraft: false,
    filePath: "lib/site/services.ts",
    title: `${s.name} | Epicware`,
    description: s.shortDescription,
    h1: s.name,
    faqs: [],
    bodyText: s.shortDescription,
  }));
}

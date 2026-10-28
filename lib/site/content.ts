import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface MarketFact {
  fact: string;
  sourceUrl: string;
}

export interface MoneyPageProof {
  caseStudy?: { title: string; summary: string; sourceUrl: string };
  presenceStatement?: string;
}

export interface MoneyPagePricing {
  currency: string;
  from?: number;
  display?: string;
}

export interface MoneyPageFaq {
  question: string;
  answer: string;
}

export interface MoneyPageFrontmatter {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** True while this page still has placeholder copy, not final content. */
  draft: boolean;
  /**
   * Required before draft can flip to false — see
   * scripts/check-page-substance.ts. At least 4 country-specific facts,
   * each with a source. Prevents a page going live on templated filler.
   */
  marketFacts?: MarketFact[];
  /** Either a real case study from this market, or an honest statement of remote presence — never neither. */
  proof?: MoneyPageProof;
  /** Local-currency or "from" pricing — never a copy-pasted other-market price. */
  pricing?: MoneyPagePricing;
  /** At least 5, no question reused verbatim from another country's page for the same service. */
  faqs?: MoneyPageFaq[];
}

export interface MoneyPageContent {
  frontmatter: MoneyPageFrontmatter;
  body: string;
}

const CONTENT_ROOT = path.join(process.cwd(), "content", "locations");

/**
 * Loads /content/locations/{country}/{service}.mdx. Returns null if the
 * file doesn't exist yet (shouldn't happen once Phase 2's stub generation
 * has run for every country×service combination, but kept defensive for
 * sub-feature or hub content that may not follow this exact path).
 */
export function getMoneyPageContent(country: string, service: string): MoneyPageContent | null {
  const filePath = path.join(CONTENT_ROOT, country, `${service}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    frontmatter: data as MoneyPageFrontmatter,
    body: content,
  };
}

/**
 * Whether /locations/{country}/{service}/ is live (indexable, linkable)
 * rather than a draft stub. Singapore is always true — its pages are
 * bespoke .tsx, not MDX-driven, so there's no frontmatter to check here.
 * Shared by app/services/[service]/page.tsx (hreflang + "Choose Your
 * Market"), the Locations mega-menu, and anywhere else that needs to
 * decide whether a country×service page is safe to link to.
 */
export function isCountryServiceLive(countrySlug: string, serviceSlug: string): boolean {
  if (countrySlug === "singapore") return true;
  return getMoneyPageContent(countrySlug, serviceSlug)?.frontmatter.draft === false;
}

/**
 * For every non-Singapore country, the service slugs that are live today.
 * Computed server-side (reads the filesystem) and handed down as plain
 * data to client components like Header, which can't read MDX frontmatter
 * themselves — see components/layout/Header.tsx's LocationsDropdown.
 * Singapore is excluded; its hub always lists all 6 services itself.
 */
export function getLiveCountryServices(
  countrySlugs: string[],
  serviceSlugs: string[]
): Record<string, string[]> {
  const result: Record<string, string[]> = {};
  for (const countrySlug of countrySlugs) {
    if (countrySlug === "singapore") continue;
    result[countrySlug] = serviceSlugs.filter((s) => isCountryServiceLive(countrySlug, s));
  }
  return result;
}

export interface HubFrontmatter {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  draft: boolean;
}

export interface HubContent {
  frontmatter: HubFrontmatter;
  body: string;
}

/** Loads /content/locations/{country}/hub.mdx. Singapore doesn't use this — it keeps its own district-directory page. */
export function getHubContent(country: string): HubContent | null {
  const filePath = path.join(CONTENT_ROOT, country, "hub.mdx");
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    frontmatter: data as HubFrontmatter,
    body: content,
  };
}

/**
 * Whether /locations/{country}/ is live (indexable, sitemap-eligible)
 * rather than a draft stub. Singapore is always true (bespoke .tsx, no
 * hub.mdx). Shared by app/sitemap.ts and scripts/check-sitemap-noindex.ts
 * so both read the same source of truth as the page's own
 * generateMetadata robots gate in app/locations/[country]/page.tsx.
 */
export function isHubLive(countrySlug: string): boolean {
  if (countrySlug === "singapore") return true;
  return getHubContent(countrySlug)?.frontmatter.draft === false;
}

const SERVICES_CONTENT_ROOT = path.join(process.cwd(), "content", "services");

export interface SubFeatureFrontmatter {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  draft: boolean;
}

export interface SubFeatureContent {
  frontmatter: SubFeatureFrontmatter;
  body: string;
}

/** Loads /content/services/{service}/{subFeature}.mdx */
export function getSubFeatureContent(service: string, subFeature: string): SubFeatureContent | null {
  const filePath = path.join(SERVICES_CONTENT_ROOT, service, `${subFeature}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    frontmatter: data as SubFeatureFrontmatter,
    body: content,
  };
}

/**
 * Whether /services/{service}/{subFeature}/ is live (indexable,
 * sitemap-eligible) rather than a draft stub. Shared by app/sitemap.ts
 * and scripts/check-sitemap-noindex.ts so both read the same source of
 * truth as the page's own generateMetadata robots gate in
 * app/services/[service]/[subFeature]/page.tsx.
 */
export function isSubFeatureLive(service: string, subFeature: string): boolean {
  return getSubFeatureContent(service, subFeature)?.frontmatter.draft === false;
}

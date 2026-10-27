import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface MoneyPageFrontmatter {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** True while this page still has placeholder copy, not final content. */
  draft: boolean;
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

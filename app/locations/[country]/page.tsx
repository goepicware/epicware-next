import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CountryHubLayout from "@/components/site/CountryHubLayout";
import { getHubContent } from "@/lib/site/content";
import { getCountry, COUNTRIES } from "@/lib/site/countries";

/**
 * Country hubs for the four non-Singapore markets. Singapore keeps its
 * own static app/locations/singapore/page.tsx (a genuinely unique
 * district-directory page, not templated filler like usa/uk/dubai were —
 * see docs/restructure/phase-0-audit.md and the Phase 2 commit message),
 * which takes routing precedence over this dynamic route for any
 * /locations/singapore request.
 */

export async function generateStaticParams() {
  return COUNTRIES.filter((c) => c.slug !== "singapore").map((c) => ({ country: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country } = await params;
  const content = getHubContent(country);
  if (!content) return {};
  const canonical = `https://www.epicware.ai/locations/${country}`;
  return {
    title: { absolute: content.frontmatter.metaTitle },
    description: content.frontmatter.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: content.frontmatter.metaTitle,
      description: content.frontmatter.metaDescription,
      url: canonical,
    },
    ...(content.frontmatter.draft ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const countryData = getCountry(country);
  if (!countryData) notFound();

  const content = getHubContent(country);
  if (!content) notFound();

  return <CountryHubLayout country={countryData} h1={content.frontmatter.h1} body={content.body} />;
}

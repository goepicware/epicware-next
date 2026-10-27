import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MoneyPageLayout from "@/components/site/MoneyPageLayout";
import { getMoneyPageContent } from "@/lib/site/content";
import { getCountry, COUNTRIES } from "@/lib/site/countries";
import { getService, SERVICES } from "@/lib/site/services";

/**
 * Country × service money pages for the four non-Singapore markets.
 * Singapore is handled by app/locations/singapore/[slug]/page.tsx instead
 * — that static "singapore" folder takes routing precedence over this
 * dynamic [country] route for any /locations/singapore/* request, which
 * is how the brief's district/service collision gets resolved (see
 * docs/restructure/phase-0-audit.md §4). Both routes render through the
 * same MoneyPageLayout + content loader, so Singapore isn't a special
 * case content-wise, only routing-wise.
 */

export async function generateStaticParams() {
  const nonSingapore = COUNTRIES.filter((c) => c.slug !== "singapore");
  return nonSingapore.flatMap((c) => SERVICES.map((s) => ({ country: c.slug, service: s.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; service: string }>;
}): Promise<Metadata> {
  const { country, service } = await params;
  const content = getMoneyPageContent(country, service);
  const countryData = getCountry(country);
  const serviceData = getService(service);
  if (!content || !countryData || !serviceData) return {};

  const canonical = `https://www.epicware.ai/locations/${country}/${service}`;
  return {
    title: { absolute: content.frontmatter.metaTitle },
    description: content.frontmatter.metaDescription,
    alternates: {
      canonical,
      languages: {
        [countryData.hreflang]: canonical,
        "x-default": `https://www.epicware.ai/services/${service}`,
      },
    },
    openGraph: {
      title: content.frontmatter.metaTitle,
      description: content.frontmatter.metaDescription,
      url: canonical,
    },
  };
}

export default async function LocationServicePage({
  params,
}: {
  params: Promise<{ country: string; service: string }>;
}) {
  const { country, service } = await params;
  const countryData = getCountry(country);
  const serviceData = getService(service);
  if (!countryData || !serviceData) notFound();

  const content = getMoneyPageContent(country, service);
  if (!content) notFound();

  return (
    <MoneyPageLayout
      countrySlug={country}
      serviceSlug={service}
      h1={content.frontmatter.h1}
      body={content.body}
    />
  );
}

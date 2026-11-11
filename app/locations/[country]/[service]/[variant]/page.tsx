import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MoneyPageLayout from "@/components/site/MoneyPageLayout";
import { getMoneyPageVariantContent } from "@/lib/site/content";
import { getCountry } from "@/lib/site/countries";
import { getService } from "@/lib/site/services";
import { REVIEW_REMOVAL_VARIANTS, getReviewRemovalVariant } from "@/lib/site/reviewRemovalVariants";

/**
 * City/platform sub-pages under a country×service money page — currently
 * only usa/review-removal/{miami,los-angeles,new-york,yelp,google} (see
 * lib/site/reviewRemovalVariants.ts for why this isn't a full
 * cross-country/cross-service system). Content-gated the same way as
 * the parent route: a missing content file 404s rather than rendering
 * a stub.
 */

export async function generateStaticParams() {
  // Only usa/review-removal has variants today — see reviewRemovalVariants.ts.
  return REVIEW_REMOVAL_VARIANTS.map((v) => ({ country: "usa", service: "review-removal", variant: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; service: string; variant: string }>;
}): Promise<Metadata> {
  const { country, service, variant } = await params;
  const content = getMoneyPageVariantContent(country, service, variant);
  const countryData = getCountry(country);
  const serviceData = getService(service);
  const variantData = getReviewRemovalVariant(variant);
  if (!content || !countryData || !serviceData || !variantData) return {};

  const canonical = `https://www.epicware.ai/locations/${country}/${service}/${variant}`;

  return {
    title: { absolute: content.frontmatter.metaTitle },
    description: content.frontmatter.metaDescription,
    alternates: { canonical },
    openGraph: {
      images: [{ url: "/assets/HeroBanner-og.jpg", width: 1448, height: 1086, alt: "Epicware" }],
      title: content.frontmatter.metaTitle,
      description: content.frontmatter.metaDescription,
      url: canonical,
    },
    ...(content.frontmatter.draft ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function LocationServiceVariantPage({
  params,
}: {
  params: Promise<{ country: string; service: string; variant: string }>;
}) {
  const { country, service, variant } = await params;
  const countryData = getCountry(country);
  const serviceData = getService(service);
  const variantData = getReviewRemovalVariant(variant);
  if (!countryData || !serviceData || !variantData) notFound();

  const content = getMoneyPageVariantContent(country, service, variant);
  if (!content) notFound();

  return (
    <MoneyPageLayout
      countrySlug={country}
      serviceSlug={service}
      h1={content.frontmatter.h1}
      subtitle={content.frontmatter.metaDescription}
      body={content.body}
      extraBreadcrumb={variantData.name}
      heroImage={content.frontmatter.heroImage}
      secondaryImage={content.frontmatter.secondaryImage}
    />
  );
}

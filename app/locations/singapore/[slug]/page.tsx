import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { DISTRICTS, getDistrict } from "@/lib/districts";
import { getService, SERVICES } from "@/lib/site/services";
import { getMoneyPageContent } from "@/lib/site/content";
import MoneyPageLayout from "@/components/site/MoneyPageLayout";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

/**
 * Singapore district/service collision fix (docs/restructure/phase-0-audit.md §4).
 *
 * This folder is a literal "singapore" segment, not a dynamic [country]
 * one, so it always wins routing precedence over app/locations/[country]/
 * for any /locations/singapore/* request — the generic country×service
 * route never sees these. Inside it, [slug] can mean one of two things,
 * resolved in this order:
 *   1. A service slug (local-seo, review-management, ...) → render the
 *      Singapore money page via the same MoneyPageLayout every other
 *      country uses.
 *   2. A district slug (jurong, tampines, ...) → render the existing
 *      district page, unchanged.
 *   3. Neither → 404.
 */

export async function generateStaticParams() {
  const serviceSlugs = SERVICES.map((s) => ({ slug: s.slug }));
  const districtSlugs = DISTRICTS.map((d) => ({ slug: d.slug }));
  return [...serviceSlugs, ...districtSlugs];
}

const DISTRICT_META: Record<string, { title: string; description: string }> = {
  jurong: {
    title: "AI SEO Agency in Jurong | Epicware",
    description:
      "Rank higher on Google Maps in Jurong. Our Singapore SEO team helps businesses near JEM, Westgate and IMM win local searches and more reviews.",
  },
  tampines: {
    title: "AI SEO Agency in Tampines | Epicware",
    description:
      "Get found on Google Maps in Tampines. Our SEO team helps businesses near Tampines Mall and Our Tampines Hub win local searches and reviews.",
  },
  woodlands: {
    title: "AI SEO Agency in Woodlands | Epicware",
    description:
      "Rank higher on Google Maps in Woodlands. Our SEO team helps businesses near Causeway Point win local searches, more reviews and repeat visits.",
  },
  "ang-mo-kio": {
    title: "AI SEO Agency in Ang Mo Kio | Epicware",
    description:
      "Get found on Google Maps in Ang Mo Kio. Our SEO team helps businesses near AMK Hub rank in the 3-Pack and grow their Google reviews.",
  },
  "toa-payoh": {
    title: "AI SEO Agency in Toa Payoh | Epicware",
    description:
      "Rank higher on Google Maps in Toa Payoh. Our SEO team helps businesses around Toa Payoh Central and HDB Hub win nearby searches and reviews.",
  },
  clementi: {
    title: "AI SEO Agency in Clementi | Epicware",
    description:
      "Get found on Google Maps in Clementi. Our SEO team helps tuition centres, clinics and eateries near Clementi Mall win local searches and reviews.",
  },
  "buona-vista": {
    title: "AI SEO Agency in Buona Vista | Epicware",
    description:
      "Rank higher on Google Maps in Buona Vista. Our SEO team helps businesses around one-north and The Star Vista win local searches and reviews.",
  },
  orchard: {
    title: "AI SEO Agency in Orchard | Epicware",
    description:
      "Stand out on Google Maps in Orchard. Our SEO team helps clinics, salons and retailers near ION and Paragon rank higher and grow their reviews.",
  },
  bedok: {
    title: "AI SEO Agency in Bedok | Epicware",
    description:
      "Get found on Google Maps in Bedok. Our SEO team helps businesses near Bedok Mall and Bedok Interchange win local searches and reviews.",
  },
  yishun: {
    title: "AI SEO Agency in Yishun | Epicware",
    description:
      "Rank higher on Google Maps in Yishun. Our SEO team helps businesses near Northpoint City win nearby searches and more Google reviews.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = getService(slug);
  if (service) {
    const content = getMoneyPageContent("singapore", slug);
    if (!content) return {};
    const canonical = `https://www.epicware.ai/locations/singapore/${slug}`;
    return {
      title: { absolute: content.frontmatter.metaTitle },
      description: content.frontmatter.metaDescription,
      alternates: {
        canonical,
        languages: { "en-SG": canonical, "x-default": `https://www.epicware.ai/services/${slug}` },
      },
      openGraph: {
        title: content.frontmatter.metaTitle,
        description: content.frontmatter.metaDescription,
        url: canonical,
      },
      ...(content.frontmatter.draft ? { robots: { index: false, follow: false } } : {}),
    };
  }

  const d = getDistrict(slug);
  if (!d) return {};
  const meta = DISTRICT_META[slug];
  if (!meta) return {};
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: { canonical: `https://www.epicware.ai/locations/singapore/${slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.epicware.ai/locations/singapore/${slug}`,
    },
  };
}

export default async function SingaporeSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 1. Service slug → money page, same template every other country uses.
  const service = getService(slug);
  if (service) {
    const content = getMoneyPageContent("singapore", slug);
    if (!content) notFound();
    return (
      <MoneyPageLayout
        countrySlug="singapore"
        serviceSlug={slug}
        h1={content.frontmatter.h1}
        body={content.body}
      />
    );
  }

  // 2. District slug → existing district page, unchanged.
  const d = getDistrict(slug);
  if (!d) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Epicware Pte. Ltd.",
    url: "https://epicware.ai",
    telephone: "+6590013157",
    areaServed: {
      "@type": "City",
      name: d.name,
      containedInPlace: { "@type": "Country", name: "Singapore" },
    },
    description: `Local SEO and Reputation Management services for ${d.name} businesses. Google Maps optimisation, review management, and bad review removal.`,
  };

  const services = [
    {
      label: "GBP Optimisation",
      href: "/locations/singapore/google-business-profile",
      desc: `19-point audit covering every GBP rank factor for your ${d.name} profile.`,
    },
    {
      label: "Review Management",
      href: "/locations/singapore/review-management",
      desc: `Real-time monitoring and AI responses for every review across your ${d.name} outlets.`,
    },
    {
      label: "Bad Review Removal",
      href: "/locations/singapore/review-removal",
      desc: "$200/review, refunded if not removed within 3 months. Remove fake or policy-violating reviews from your profile.",
    },
    {
      label: "Local Rank Tracking",
      href: "/services/local-seo/rank-tracking",
      desc: `See your Google Maps rank position across every district around ${d.name}.`,
    },
    {
      label: "Review Generation",
      href: "/services/review-management/review-generation",
      desc: `Automated WhatsApp and email campaigns that turn ${d.name} customers into reviewers.`,
    },
    {
      label: "GBP Post Scheduling",
      href: "/services/google-business-profile/post-scheduling",
      desc: `Weekly AI-generated posts keeping your ${d.name} profile fresh and ranked.`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CategoryHero
        badge={d.badge}
        h1={d.h1}
        subtitle={d.subtitle}
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo#form" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/free-audit" }}
        trustSignals={[
          "Singapore-Built",
          "Bad Review Removal Guaranteed",
          "Multi-Outlet Ready",
          "Live Dashboard Included",
        ]}
        imageSrc="/assets/epicmap-before-after.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Singapore", href: "/locations/singapore" },
          { label: d.name },
        ]}
      />

      {/* Opening */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {d.openingParagraph}
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Local SEO in {d.name} — What Moves the Needle
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {d.whyMatter}
          </p>
        </div>
      </section>

      {/* Key services */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display text-foreground mb-8 text-center">
            Services for {d.name} Businesses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-2xl border border-border/60 bg-card p-6 hover:shadow-card transition-shadow duration-300 flex flex-col gap-3 group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {s.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {s.desc}
                </p>
                <span className="text-sm font-semibold text-primary flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      {d.keyIndustries.length > 0 && (
        <section className="py-10 lg:py-14 section-gradient-1">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-display text-foreground mb-6">
              Key Industries in {d.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {d.keyIndustries.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {i.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Nearby districts */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Nearby Areas We Also Serve
          </h2>
          <div className="flex flex-wrap gap-3">
            {d.nearbyDistricts.map((nd) => (
              <Link
                key={nd.slug}
                href={`/locations/singapore/${nd.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                {nd.name}
              </Link>
            ))}
            <Link
              href="/locations/singapore"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              All Singapore Districts →
            </Link>
          </div>
        </div>
      </section>

      {/* Parent link */}
      <section className="py-6">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-base text-muted-foreground">
            {d.name} is part of Epicware&apos;s{" "}
            <Link
              href="/locations/singapore"
              className="text-primary font-medium hover:underline"
            >
              Singapore local SEO coverage
            </Link>
            . See all Singapore district pages, explore{" "}
            <Link
              href="/locations/singapore/local-seo"
              className="text-primary font-medium hover:underline"
            >
              Local SEO Singapore
            </Link>{" "}
            services, or see{" "}
            <Link
              href="/locations/singapore/seo"
              className="text-primary font-medium hover:underline"
            >
              Epicware&apos;s SEO agency services
            </Link>
            .
          </p>
          {d.agencyLink && (
            <p className="text-base text-muted-foreground mt-4">
              Looking for help beyond {d.name}? See how{" "}
              <Link href={d.agencyLink.href} className="text-primary font-medium hover:underline">
                {d.agencyLink.anchor}
              </Link>{" "}
              supports local businesses across every district we serve.
            </p>
          )}
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { DISTRICTS, getDistrict } from "@/lib/districts";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export async function generateStaticParams() {
  return DISTRICTS.map((d) => ({ district: d.slug }));
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
  params: Promise<{ district: string }>;
}): Promise<Metadata> {
  const { district: slug } = await params;
  const d = getDistrict(slug);
  if (!d) return {};
  const meta = DISTRICT_META[slug];
  if (!meta) return {};
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: {
      canonical: `https://www.epicware.ai/locations/singapore/${slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.epicware.ai/locations/singapore/${slug}`,
    },
  };
}

export default async function DistrictPage({
  params,
}: {
  params: Promise<{ district: string }>;
}) {
  const { district: slug } = await params;
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
      href: "/gbp-optimisation-singapore",
      desc: `19-point audit covering every GBP rank factor for your ${d.name} profile.`,
    },
    {
      label: "Review Management",
      href: "/review-management-singapore",
      desc: `Real-time monitoring and AI responses for every review across your ${d.name} outlets.`,
    },
    {
      label: "Bad Review Removal",
      href: "/bad-review-removal-singapore",
      desc: "$200/review, refunded if not removed within 3 months. Remove fake or policy-violating reviews from your profile.",
    },
    {
      label: "Local Rank Tracking",
      href: "/local-seo-singapore/local-rank-tracking",
      desc: `See your Google Maps rank position across every district around ${d.name}.`,
    },
    {
      label: "Review Generation",
      href: "/reputation-management-singapore/review-generation",
      desc: `Automated WhatsApp and email campaigns that turn ${d.name} customers into reviewers.`,
    },
    {
      label: "GBP Post Scheduling",
      href: "/local-seo-singapore/gbp-post-scheduling",
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
          "50+ Outlets Managed",
          "Live Dashboard Included",
        ]}
        imageSrc="/assets/epicmap-before-after.png"
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
              href="/local-seo-singapore"
              className="text-primary font-medium hover:underline"
            >
              Local SEO Singapore
            </Link>{" "}
            services, or see{" "}
            <Link
              href="/seo-agency-singapore"
              className="text-primary font-medium hover:underline"
            >
              Epicware&apos;s SEO agency services
            </Link>
            .
          </p>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}

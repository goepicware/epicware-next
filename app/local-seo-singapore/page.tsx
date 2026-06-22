import type { Metadata } from "next";
import Link from "next/link";
import CategoryHero from "@/components/category/CategoryHero";
import ServicesGrid from "@/components/category/ServicesGrid";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Local SEO Singapore — Rank Higher on Google Maps",
  description:
    "Epicware's Local SEO platform manages your GBP, tracks rank across Singapore districts, builds citations, and posts on autopilot. Start your free GBP audit.",
  alternates: { canonical: "https://www.epicware.ai/local-seo-singapore" },
  openGraph: {
    title: "Local SEO Singapore | Epicware",
    description:
      "Get found on Google Maps when Singapore customers search for your business category. GBP optimisation, rank tracking, citations — all in one platform.",
    url: "https://www.epicware.ai/local-seo-singapore",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO Services Singapore",
  serviceType: "Local SEO",
  description:
    "Local SEO platform for Singapore SMBs. GBP optimisation, local rank tracking (EpicMap), GBP post scheduling, citation building, competitor analysis, and GBP setup.",
  provider: {
    "@type": "Organization",
    name: "Epicware Pte. Ltd.",
    url: "https://epicware.ai",
  },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/local-seo-singapore",
};

const CHILD_SERVICES = [
  {
    name: "GBP Optimisation",
    href: "/local-seo-singapore/gbp-optimisation",
    description:
      "A 19-point audit of your Google Business Profile fixes every gap costing you rank — categories, attributes, photos, posts, Q&A — and keeps it optimised automatically.",
  },
  {
    name: "GBP Post Scheduling",
    href: "/local-seo-singapore/gbp-post-scheduling",
    description:
      "AI-generated weekly posts published to your Google Business Profile automatically. A freshness signal that supports rank without you lifting a finger.",
  },
  {
    name: "GBP Setup & Onboarding",
    href: "/local-seo-singapore/gbp-setup",
    description:
      "Full GBP creation, category selection, verification, and initial optimisation for new or unclaimed profiles. Get it right from day one.",
  },
  {
    name: "Local Rank Tracking (EpicMap)",
    href: "/local-seo-singapore/local-rank-tracking",
    description:
      "Visual map grid showing your Google Maps rank at every point across Singapore. See exactly where you appear — and where you don't.",
  },
  {
    name: "Citation Building",
    href: "/local-seo-singapore/citation-building",
    description:
      "Inconsistent NAP across Singapore's directories is a hidden rank penalty. Epicware audits and corrects your citations across 40+ platforms.",
  },
  {
    name: "Competitor Analysis",
    href: "/local-seo-singapore/competitor-analysis",
    description:
      "See exactly why competitors rank above you — reviews, categories, photos, posting frequency — and close those gaps systematically.",
  },
];

export default function LocalSeoSingaporePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <CategoryHero
        badge="LOCAL SEO · SINGAPORE"
        h1="Local SEO Singapore — Rank Higher on Google Maps"
        subtitle="Get found when Singapore customers search for businesses like yours. Epicware's Local SEO services cover every factor that determines your Google Maps rank — from GBP optimisation to citation building to competitor analysis."
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo#form" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "19-Point GBP Audit",
          "Singapore-Built",
          "AI-Native",
          "No Agency Retainer",
        ]}
        imageSrc="/assets/epicmap-before-after.png"
      />

      {/* Opening paragraph */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Google Maps is where Singapore customers make decisions about local businesses. The 3-Pack — the top 3 results
            that appear in the map section — captures over 70% of clicks. If your business is not in those top 3 spots for
            your main keywords and your district, you are invisible to the majority of customers searching for exactly what
            you offer. Every factor that determines your Maps rank is documented, measurable, and improvable.
            Epicware&apos;s Local SEO services cover all of them.
          </p>
        </div>
      </section>

      {/* Why Local SEO Matters */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Why Local SEO Matters in Singapore</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Singapore&apos;s market is hyperlocal. Rank is determined not just by category and relevance — it changes
              by the searcher&apos;s location. A business in Tampines may rank 1st for customers searching within Tampines
              but 15th for customers searching from Pasir Ris, 2km away. Without district-level rank tracking, you
              can&apos;t see this gap — and without a systematic optimisation process, you can&apos;t close it.
            </p>
            <p>
              The factors that determine your rank include your Google Business Profile completeness, photo count and
              recency, review count and rating, posting frequency, NAP consistency across the web, and your category
              selection. Most Singapore SMBs have addressed some of these. The businesses in the top 3 have addressed
              all of them.
            </p>
            <p>
              See how{" "}
              <Link href="/products/epicmap" className="text-primary font-medium hover:underline">EpicMap</Link>{" "}
              tracks your rank position across every Singapore district, updated weekly.
            </p>
          </div>
        </div>
      </section>

      {/* How Epicware Approaches Local SEO */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">How Epicware Approaches Local SEO</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Epicware starts with a 19-point GBP audit to identify every gap in your Google Business Profile. The highest-impact
              fixes are applied first — categories, hours, photos, and NAP consistency — then the platform maintains and improves
              your profile automatically over time. Weekly AI-generated posts, monthly citation scans, and continuous rank tracking
              via EpicMap mean your Local SEO is always running, not just during the onboarding sprint.
            </p>
            <p>
              For multi-outlet businesses, every location is managed from the same dashboard. Competitor analysis runs per location
              so you know exactly who you are competing against in Ang Mo Kio vs. Jurong vs. Tampines — and what each of those
              competitors is doing differently.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Pricing</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Local SEO services are included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
              <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
              No setup fees on Foundation plan. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Why Epicware */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Why Epicware — Not an Agency</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Epicware is a platform, not an agency. Agencies sell their time. Epicware gives you a self-serve dashboard
              that runs automatically — no retainer, no waiting on someone else&apos;s team, no monthly report that is
              already out of date. You log in, you see your data, you take action.
            </p>
            <p>
              The platform was built by the team behind NinjaOS, an F&amp;B SaaS product that processed over $120M in
              GMV before its 2021 exit. Epicware is Singapore-built, used by businesses in SG · MY · UAE · UK · US. See the
              full platform overview at{" "}
              <Link href="/" className="text-primary font-medium hover:underline">epicware.ai</Link>.
            </p>
          </div>
        </div>
      </section>

      <ServicesGrid
        heading="All Local SEO Services"
        services={CHILD_SERVICES}
      />

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Local SEO & Reputation Management USA | Epicware",
  description:
    "Epicware's Local SEO platform for US SMBs. GBP optimisation, review management, and bad review removal for American businesses. Singapore-built, globally deployed.",
  alternates: {
    canonical: "https://www.epicware.ai/locations/usa",
  },
  openGraph: {
    title: "Local SEO & Reputation Management USA | Epicware",
    description:
      "Epicware's Local SEO platform for US SMBs. GBP optimisation, review management, and bad review removal for American businesses.",
    url: "https://www.epicware.ai/locations/usa",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Epicware Pte. Ltd.",
  url: "https://epicware.ai",
  telephone: "+6590013157",
  email: "hello@epicware.ai",
  areaServed: { "@type": "Country", name: "United States" },
  description:
    "Local SEO and Reputation Management platform for US SMBs. GBP optimisation, review management, and bad review removal.",
};

const SERVICES = [
  {
    label: "GBP Optimisation",
    href: "/gbp-optimisation-singapore",
    description:
      "19-point audit covering every GBP rank factor for your US business profile.",
  },
  {
    label: "Review Management",
    href: "/review-management-singapore",
    description:
      "Real-time review monitoring and AI responses for all your US outlets.",
  },
  {
    label: "Bad Review Removal",
    href: "/bad-review-removal-singapore",
    description:
      "$200/review, pay on success. Remove fake or policy-violating reviews from your US GBP profile.",
  },
  {
    label: "Local Rank Tracking",
    href: "/local-seo-singapore/local-rank-tracking",
    description:
      "See your Google Maps rank position across your US city or metro area for your target keywords.",
  },
  {
    label: "Review Generation",
    href: "/reputation-management-singapore/review-generation",
    description:
      "Automated SMS and email review campaigns converting US customers into reviewers.",
  },
  {
    label: "Multi-Outlet Management",
    href: "/review-management-singapore",
    description:
      "Manage every US outlet's reviews, rank, and reputation from one dashboard.",
  },
];

export default function USAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CategoryHero
        badge="EPICWARE · UNITED STATES"
        h1="Local SEO & Reputation Management for US SMBs"
        subtitle="Epicware manages Google Business Profiles, review campaigns, and bad review removal for US businesses — the same platform trusted by 500+ outlets across Singapore, Malaysia, and the UAE."
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "US Market Ready",
          "Singapore-Built",
          "AI-Native",
          "No Agency Retainer",
        ]}
        imageSrc="/assets/epicmap-before-after.png"
      />

      {/* Opening */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            US SMBs face the same core local SEO challenge as businesses in Singapore:
            Google Maps 3-Pack dominance determines foot traffic volume, and that rank
            is determined by review count, GBP completeness, and consistency.
            Epicware&apos;s platform brings the same automated review generation, GBP
            optimisation, and bad review removal capability to US businesses that it
            delivers to over 500 outlet profiles across Asia and the Middle East.
          </p>
        </div>
      </section>

      {/* US context */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Local SEO for US Businesses
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              The US local search market is the largest in the world — and among the
              most competitive. A restaurant in New York or a clinic in Los Angeles
              faces hundreds of competitors within the same Google Maps view. Review
              count, rating, and GBP completeness are the primary signals that
              determine who captures the customer.
            </p>
            <p>
              For US multi-location businesses — franchise groups, clinic networks,
              retail chains — Epicware&apos;s multi-outlet dashboard manages every profile
              from one place, with combined analytics showing performance across all
              locations simultaneously.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display text-foreground mb-8 text-center">
            Services for US Businesses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-2xl border border-border/60 bg-card p-6 hover:shadow-card transition-shadow duration-300 flex flex-col gap-3 group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {s.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {s.description}
                </p>
                <span className="text-sm font-semibold text-primary flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link */}
      <section className="py-8 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-base text-muted-foreground">
            Also serving{" "}
            <Link
              href="/locations/singapore"
              className="text-primary font-medium hover:underline"
            >
              Singapore
            </Link>
            ,{" "}
            <Link
              href="/locations/malaysia"
              className="text-primary font-medium hover:underline"
            >
              Malaysia
            </Link>
            ,{" "}
            <Link
              href="/locations/dubai"
              className="text-primary font-medium hover:underline"
            >
              Dubai
            </Link>
            , and{" "}
            <Link
              href="/locations/uk"
              className="text-primary font-medium hover:underline"
            >
              UK
            </Link>
            . Ready to start?{" "}
            <Link
              href="/book-demo"
              className="text-primary font-medium hover:underline"
            >
              Book a free demo
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

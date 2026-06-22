import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Local SEO & Reputation Management Malaysia",
  description:
    "Epicware's Local SEO platform for Malaysia SMBs. GBP optimisation, review management, and bad review removal across KL, Penang, and Malaysian cities.",
  alternates: {
    canonical: "https://www.epicware.ai/locations/malaysia",
  },
  openGraph: {
    title: "Local SEO & Reputation Management Malaysia | Epicware",
    description:
      "Epicware's Local SEO platform for Malaysia SMBs. GBP optimisation, review management, and bad review removal across KL, Penang, and Malaysian cities.",
    url: "https://www.epicware.ai/locations/malaysia",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Epicware Pte. Ltd.",
  url: "https://epicware.ai",
  telephone: "+6590013157",
  email: "hello@epicware.ai",
  areaServed: { "@type": "Country", name: "Malaysia" },
  description:
    "Local SEO and Reputation Management platform for Malaysia SMBs. GBP optimisation, review management, and bad review removal.",
};

const SERVICES = [
  {
    label: "GBP Optimisation",
    href: "/gbp-optimisation-singapore",
    description:
      "19-point audit covering every GBP rank factor for your Malaysian business profile.",
  },
  {
    label: "Review Management",
    href: "/review-management-singapore",
    description:
      "Real-time review monitoring and AI-powered responses for all your Malaysia outlets.",
  },
  {
    label: "Bad Review Removal",
    href: "/bad-review-removal-singapore",
    description:
      "$200/review, pay on success. Remove fake or policy-violating reviews from your GBP profile.",
  },
  {
    label: "Local Rank Tracking",
    href: "/local-seo-singapore/local-rank-tracking",
    description:
      "See your Google Maps rank position across KL, PJ, Penang, and JB for your target keywords.",
  },
  {
    label: "Review Generation",
    href: "/reputation-management-singapore/review-generation",
    description:
      "Automated WhatsApp and email review campaigns that convert satisfied Malaysian customers into reviewers.",
  },
  {
    label: "GBP Post Scheduling",
    href: "/local-seo-singapore/gbp-post-scheduling",
    description:
      "Weekly AI-generated GBP posts keeping your Malaysian business profile active and ranked.",
  },
];

export default function MalaysiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CategoryHero
        badge="EPICWARE · MALAYSIA"
        h1="Local SEO & Reputation Management for Malaysia SMBs"
        subtitle="Epicware's platform manages Google Business Profiles, review generation, and bad review removal for businesses across Kuala Lumpur, Petaling Jaya, Penang, and Johor Bahru."
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo#form" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "KL + Penang + JB",
          "Same Platform as Singapore",
          "AI-Native",
          "No Agency Retainer",
        ]}
        imageSrc="/assets/epicmap-before-after.png"
      />

      {/* Opening */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Epicware launched in Singapore but serves Malaysian businesses with the
            same platform. Malaysia&apos;s Google Maps search behaviour mirrors Singapore
            — customers search before they visit, read reviews before they trust, and
            choose based on rank position. F&B groups, clinic chains, and retail
            networks operating across the Malaysia-Singapore corridor use Epicware to
            manage all locations from one dashboard.
          </p>
        </div>
      </section>

      {/* Local SEO context */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Local SEO for Malaysian SMBs
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              GBP is the primary local search asset for Malaysian businesses just as
              in Singapore. Google Maps 3-Pack dominance in KL&apos;s Bukit Bintang, PJ&apos;s
              SS2, or Penang&apos;s Georgetown is determined by the same rank factors: review
              count, GBP completeness, citation consistency, and post frequency.
              Epicware&apos;s 19-point audit covers every factor.
            </p>
            <p>
              For businesses operating on both sides of the Causeway, Epicware&apos;s
              multi-outlet dashboard tracks both Singapore and Malaysia profiles
              simultaneously — one login, full visibility across every location in
              both markets.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display text-foreground mb-8 text-center">
            Services for Malaysia Businesses
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
              href="/locations/dubai"
              className="text-primary font-medium hover:underline"
            >
              Dubai
            </Link>
            ,{" "}
            <Link
              href="/locations/uk"
              className="text-primary font-medium hover:underline"
            >
              UK
            </Link>
            , and{" "}
            <Link
              href="/locations/usa"
              className="text-primary font-medium hover:underline"
            >
              USA
            </Link>
            . Ready to start?{" "}
            <Link
              href="/book-demo#form"
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

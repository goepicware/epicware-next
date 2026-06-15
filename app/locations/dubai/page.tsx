import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Local SEO & Reputation Management Dubai — Epicware Platform | Epicware",
  description:
    "Epicware helps Dubai and UAE SMBs rank higher on Google Maps, manage reviews, and remove bad ones. Singapore-built platform for the UAE market.",
  alternates: {
    canonical: "https://www.epicware.ai/locations/dubai",
  },
  openGraph: {
    title: "Local SEO & Reputation Management Dubai | Epicware",
    description:
      "Epicware helps Dubai and UAE SMBs rank higher on Google Maps, manage reviews, and remove bad ones.",
    url: "https://www.epicware.ai/locations/dubai",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Epicware Pte. Ltd.",
  url: "https://epicware.ai",
  telephone: "+6590013157",
  email: "hello@epicware.ai",
  areaServed: { "@type": "City", name: "Dubai" },
  description:
    "Local SEO and Reputation Management platform for Dubai and UAE SMBs. GBP optimisation, review management, and bad review removal.",
};

const SERVICES = [
  {
    label: "GBP Optimisation",
    href: "/gbp-optimisation-singapore",
    description:
      "19-point audit covering every GBP rank factor for your Dubai business profile.",
  },
  {
    label: "Review Management",
    href: "/review-management-singapore",
    description:
      "Real-time review monitoring and AI responses for all your Dubai and UAE outlets.",
  },
  {
    label: "Bad Review Removal",
    href: "/bad-review-removal-singapore",
    description:
      "$200/review, pay on success. Remove fake or policy-violating reviews from your Dubai GBP.",
  },
  {
    label: "Local Rank Tracking",
    href: "/local-seo-singapore/local-rank-tracking",
    description:
      "See your Google Maps rank position across Dubai districts for your target keywords.",
  },
  {
    label: "Review Generation",
    href: "/reputation-management-singapore/review-generation",
    description:
      "Automated WhatsApp and email review campaigns converting Dubai customers into reviewers.",
  },
  {
    label: "AI Review Response",
    href: "/reputation-management-singapore/ai-review-response",
    description:
      "Multilingual AI-generated responses to reviews from Dubai's international customer base.",
  },
];

export default function DubaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CategoryHero
        badge="EPICWARE · DUBAI · UAE"
        h1="Local SEO & Reputation Management for Dubai SMBs"
        subtitle="Dubai's competitive SMB market demands the same Local SEO precision as Singapore. Epicware's platform manages GBP, reviews, and rank tracking for Dubai businesses."
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo#form" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "Dubai + UAE Market",
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
            Dubai&apos;s restaurant, clinic, salon, and retail markets are among the most
            review-driven in the world — with an international customer base that
            relies almost entirely on Google Maps and reviews to navigate an unfamiliar
            city. Epicware&apos;s platform manages every review signal for Dubai SMBs:
            generating positive reviews from satisfied customers, responding to every
            review with AI, and removing fake or policy-violating reviews.
          </p>
        </div>
      </section>

      {/* Dubai context */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Local SEO in Dubai
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Dubai&apos;s multi-lingual, tourist-heavy search environment creates unique
              reputation challenges. A restaurant on Sheikh Zayed Road or a clinic in
              JLT may receive reviews in Arabic, English, and multiple other languages
              from customers across 100+ nationalities. Epicware&apos;s AI review response
              generates appropriate responses in the reviewer&apos;s language context.
            </p>
            <p>
              The transient nature of Dubai&apos;s customer base — tourists, expats on
              short-term assignments, business travellers — means first impressions
              captured in reviews carry outsized weight. A review left by a visitor
              who will never return still influences every future customer who searches
              before visiting. Systematic review generation and proactive bad review
              removal are essential in this environment.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display text-foreground mb-8 text-center">
            Services for Dubai Businesses
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

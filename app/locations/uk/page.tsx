import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Local SEO & Reputation Management UK — Google Maps for SMBs | Epicware",
  description:
    "Epicware helps UK SMBs — particularly in London — rank higher on Google Maps, generate more reviews, and manage their online reputation. Same platform as Singapore.",
  alternates: {
    canonical: "https://www.epicware.ai/locations/uk",
  },
  openGraph: {
    title: "Local SEO & Reputation Management UK | Epicware",
    description:
      "Epicware helps UK SMBs rank higher on Google Maps, generate more reviews, and manage their online reputation.",
    url: "https://www.epicware.ai/locations/uk",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Epicware Pte. Ltd.",
  url: "https://epicware.ai",
  telephone: "+6590013157",
  email: "hello@epicware.ai",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Local SEO and Reputation Management platform for UK SMBs. GBP optimisation, review management, and bad review removal.",
};

const SERVICES = [
  {
    label: "GBP Optimisation",
    href: "/gbp-optimisation-singapore",
    description:
      "19-point audit covering every GBP rank factor for your UK business profile.",
  },
  {
    label: "Review Management",
    href: "/review-management-singapore",
    description:
      "Real-time review monitoring and AI responses for all your UK outlets.",
  },
  {
    label: "Bad Review Removal",
    href: "/bad-review-removal-singapore",
    description:
      "$200/review, pay on success. Remove fake or policy-violating reviews from your UK GBP profile.",
  },
  {
    label: "Local Rank Tracking",
    href: "/local-seo-singapore/local-rank-tracking",
    description:
      "See your Google Maps rank position across London and other UK cities for your target keywords.",
  },
  {
    label: "Review Generation",
    href: "/reputation-management-singapore/review-generation",
    description:
      "Automated WhatsApp and email review campaigns converting UK customers into reviewers.",
  },
  {
    label: "Multi-Outlet Management",
    href: "/review-management-singapore",
    description:
      "Manage every UK outlet's reviews, rank, and reputation from one dashboard.",
  },
];

export default function UKPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CategoryHero
        badge="EPICWARE · UNITED KINGDOM"
        h1="Local SEO & Reputation Management for UK SMBs"
        subtitle="Epicware's platform serves UK businesses with the same tools that manage 500+ Singapore outlets — GBP optimisation, review generation, and bad review removal."
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo#form" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "London & UK Market",
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
            The UK&apos;s local search market runs on Google Business Profile just like
            Singapore. London&apos;s dense commercial environment — from restaurant clusters
            in Shoreditch to clinic networks in Kensington — creates the same
            multi-outlet management challenges Epicware was built to solve. UK
            businesses use Epicware to manage GBP profiles, generate reviews, and
            remove bad ones, from the same platform used across Singapore, Malaysia,
            and the UAE.
          </p>
        </div>
      </section>

      {/* UK context */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Local SEO for UK Businesses
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              UK customers check Google reviews before choosing a restaurant, clinic,
              or service provider just as consistently as customers in Singapore. The
              platform mechanics are identical — review count, GBP completeness, post
              frequency, and citation consistency determine who appears in the Google
              Maps 3-Pack.
            </p>
            <p>
              For UK businesses with locations across multiple cities — or with
              Singapore or Malaysia operations — Epicware&apos;s multi-location dashboard
              manages every profile from one place. No separate logins. No missed
              reviews. No profiles left out of date.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display text-foreground mb-8 text-center">
            Services for UK Businesses
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

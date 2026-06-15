import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Rank Higher on Google Maps in Singapore | Epicware",
  description:
    "Epicware helps Singapore SMBs rank higher on Google Maps through GBP optimisation, review velocity, and rank tracking. See exactly where you rank — and fix it.",
  alternates: {
    canonical: "https://www.epicware.ai/use-cases/rank-higher-on-google-maps",
  },
  openGraph: {
    title: "Rank Higher on Google Maps in Singapore | Epicware",
    description:
      "Epicware helps Singapore SMBs rank higher in Google Maps through GBP optimisation, review velocity, and rank tracking.",
    url: "https://www.epicware.ai/use-cases/rank-higher-on-google-maps",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Maps Rank Improvement Singapore",
  serviceType: "Local SEO",
  description:
    "Visual Google Maps rank tracking and GBP optimisation for Singapore SMBs. See exactly where you rank and fix the gaps.",
  provider: {
    "@type": "Organization",
    name: "Epicware Pte. Ltd.",
    url: "https://epicware.ai",
  },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/use-cases/rank-higher-on-google-maps",
};

const STEPS = [
  {
    number: "1",
    title: "Audit",
    description:
      "EpicMap runs a 19-point GBP audit and a district-level rank check across your target keywords. Identifies every gap suppressing your rank.",
  },
  {
    number: "2",
    title: "See",
    description:
      "The visual rank grid shows your position at every grid point across Singapore. Red means not visible. Green means in the 3-Pack. No guesswork.",
  },
  {
    number: "3",
    title: "Fix",
    description:
      "Epicware applies the audit recommendations directly to your GBP profile via API — categories, services, photos, posts, citations.",
  },
  {
    number: "4",
    title: "Track",
    description:
      "Weekly rank updates show you the movement after each fix. See the grid turn from red to green as your visibility improves.",
  },
];

export default function RankHigherOnGoogleMapsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CategoryHero
        badge="RANK HIGHER · GOOGLE MAPS"
        h1="Rank Higher on Google Maps in Singapore — See Your Position, Fix the Gaps"
        subtitle="The Google Maps 3-Pack captures over 70% of clicks for local searches. Epicware's EpicMap shows you exactly where you rank across every Singapore district — and fixes the gaps automatically."
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo#form" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "Visual Map Grid Tracking",
          "19-Point GBP Audit",
          "Singapore-Built",
          "Multi-Outlet Support",
        ]}
        imageSrc="/assets/epicmap-before-after.png"
      />

      {/* The Problem */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Ranking 8th on Google Maps Is the Same as Not Existing
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Your business appears on Google Maps but not in the top 3 for your main
              keywords. The businesses in those top 3 spots are capturing 70%+ of
              local search clicks. You don&apos;t know why you&apos;re ranking 8th, 15th, or not
              at all in certain districts — and you can&apos;t fix what you can&apos;t see.
            </p>
            <p>
              Most Singapore SMBs have never seen a visual representation of their
              Maps rank across their catchment area. They assume they&apos;re visible
              everywhere they appear at all — but Google Maps rank varies dramatically
              by location, device, and keyword. EpicMap makes the invisible visible.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            A Visual Grid That Shows Every Rank Gap
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              EpicMap overlays a visual grid across Singapore and shows your rank
              position at every point for your target keywords. You see where you&apos;re
              visible and where you&apos;re not. The 19-point GBP audit identifies every
              profile element that&apos;s suppressing your rank — missing categories, low
              photo count, no recent posts, inconsistent citations.
            </p>
            <p>
              Epicware then addresses each gap in priority order, applying changes
              directly to your GBP profile. Most businesses see measurable rank
              movement within 4–6 weeks of completing the audit recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-8">How It Works</h2>
          <div className="space-y-6">
            {STEPS.map((step) => (
              <div key={step.number} className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{step.number}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-display text-foreground mb-4">
            See Where You Rank Right Now
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Book a free demo and we&apos;ll run a live EpicMap rank check on your business
            during the call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background h-14 px-8 rounded-full font-semibold text-base group"
            >
              <Link href="/book-demo#form" className="flex items-center gap-2">
                Book a Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-transparent border border-foreground/30 text-foreground hover:bg-muted h-14 px-8 font-semibold text-base"
            >
              <Link href="/gbp-optimisation-singapore">See GBP Optimisation</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Also see:{" "}
            <Link
              href="/local-seo-singapore"
              className="text-primary font-medium hover:underline"
            >
              Local SEO Singapore
            </Link>{" "}
            ·{" "}
            <Link
              href="/products/epicmap"
              className="text-primary font-medium hover:underline"
            >
              EpicMap product page
            </Link>
          </p>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Remove Bad Google Reviews Singapore — $200/Review, Pay on Success | Epicware",
  description:
    "Remove fake, malicious, or policy-violating Google reviews. Epicware's bad review removal service is $200/review with success-only payment. Singapore's only productised removal service.",
  alternates: {
    canonical: "https://www.epicware.ai/use-cases/remove-bad-google-reviews",
  },
  openGraph: {
    title: "Remove Bad Google Reviews Singapore | Epicware",
    description:
      "Remove fake, malicious, or policy-violating Google reviews. $200/review, pay on success.",
    url: "https://www.epicware.ai/use-cases/remove-bad-google-reviews",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Remove Bad Google Reviews Singapore",
  serviceType: "Bad Review Removal",
  description:
    "Productised Google review removal service for Singapore businesses. $200 per review, pay only on success.",
  provider: {
    "@type": "Organization",
    name: "Epicware Pte. Ltd.",
    url: "https://epicware.ai",
  },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/use-cases/remove-bad-google-reviews",
};

const STEPS = [
  {
    number: "1",
    title: "Assessment",
    description:
      "You identify which reviews you want removed. Epicware assesses each one against Google's content policies to confirm eligibility and probability of success. Free assessment before any payment.",
  },
  {
    number: "2",
    title: "Submission",
    description:
      "For eligible reviews, Epicware submits the removal request with the correct policy citation and framing through Google's channels. Typically initiated within 24 hours.",
  },
  {
    number: "3",
    title: "Escalation",
    description:
      "If the first request is rejected, Epicware escalates through additional Google channels and re-submits with supplementary evidence.",
  },
  {
    number: "4",
    title: "Resolution",
    description:
      "Google issues a final ruling. If the review is removed, you pay $200. If it stays up after all escalation paths are exhausted, you pay nothing.",
  },
];

const ELIGIBLE_TYPES = [
  "Fake reviews posted by non-customers",
  "Competitor attacks and sabotage",
  "Reviews with false factual claims",
  "Reviews from ex-employees with a conflict of interest",
  "Spam and duplicate reviews",
  "Reviews that violate Google's content policies",
];

export default function RemoveBadGoogleReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CategoryHero
        badge="REMOVE BAD REVIEWS · SINGAPORE"
        h1="How to Remove Bad Google Reviews From Your Singapore Business"
        subtitle="Not every negative review deserves to be there. Fake reviews from competitors, policy-violating attacks, and reviews from people who never visited can all be removed. Epicware handles the entire removal process — you pay $200 only if the review comes down."
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "$200/Review · Pay on Success",
          "Singapore's Only Productised Removal",
          "24-Hour Initiation",
          "No Charge if Review Stays",
        ]}
        imageSrc="/assets/review-management-illustration.png"
      />

      {/* The Problem */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            One Bad Review Can Cost You Dozens of Customers
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              One bad review can drop your Google rating below 4.0 and push you out
              of the Maps 3-Pack. In Singapore&apos;s dense market, that single review is
              visible to every potential customer within 1km — an entire HDB estate.
              Most SMB owners try the flag button on Google, get a generic rejection,
              and accept the review as permanent.
            </p>
            <p>
              It isn&apos;t. Epicware removes bad reviews that violate Google&apos;s content
              policies — the fake ones, the competitor-posted ones, and the malicious
              attacks. The process is systematic, legal, and outcome-based.
            </p>
          </div>
        </div>
      </section>

      {/* Eligible review types */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Which Reviews Are Eligible for Removal
          </h2>
          <div className="space-y-3 mb-6">
            {ELIGIBLE_TYPES.map((type) => (
              <div key={type} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-base text-muted-foreground">{type}</p>
              </div>
            ))}
          </div>
          <p className="text-base text-muted-foreground leading-relaxed border-l-4 border-primary/30 pl-4 italic">
            Reviews that are simply negative opinions from genuine customers cannot be
            removed — but they can be responded to professionally using Epicware&apos;s AI
            Review Response service.
          </p>
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

      {/* CTA section */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-display text-foreground mb-4">
            Get the Full Service Details
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            See Epicware&apos;s productised bad review removal service — pricing, success
            rate, and the full process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background h-14 px-8 rounded-full font-semibold text-base group"
            >
              <Link
                href="/bad-review-removal-singapore"
                className="flex items-center gap-2"
              >
                See Bad Review Removal Service
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-transparent border border-foreground/30 text-foreground hover:bg-muted h-14 px-8 font-semibold text-base"
            >
              <Link href="/book-demo">Book a Free Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}

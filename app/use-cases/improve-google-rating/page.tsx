import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Improve Your Google Rating Singapore — From 3.9 to 4.5+ | Epicware",
  description:
    "Epicware helps Singapore businesses improve their Google star rating by removing bad reviews and generating more positive ones. Raise your rating above 4.5.",
  alternates: {
    canonical: "https://www.epicware.ai/use-cases/improve-google-rating",
  },
  openGraph: {
    title: "Improve Your Google Rating Singapore | Epicware",
    description:
      "Epicware helps Singapore businesses improve their Google star rating by removing bad reviews and generating more positive ones.",
    url: "https://www.epicware.ai/use-cases/improve-google-rating",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Rating Improvement Singapore",
  serviceType: "Reputation Management",
  description:
    "Two-part Google rating improvement for Singapore businesses: bad review removal and automated positive review generation.",
  provider: {
    "@type": "Organization",
    name: "Epicware Pte. Ltd.",
    url: "https://epicware.ai",
  },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/use-cases/improve-google-rating",
};

const STEPS = [
  {
    number: "1",
    title: "Assessment",
    description:
      "Epicware audits your existing reviews to identify which ones are removable under Google's content policies. Free assessment, no commitment.",
  },
  {
    number: "2",
    title: "Removal",
    description:
      "Removal requests filed for eligible reviews — $200/review, pay on success. Reviews that drag your rating down and violate policy are targeted first.",
  },
  {
    number: "3",
    title: "Generation",
    description:
      "Automated review campaigns run in parallel, generating new positive reviews from your existing satisfied customer base. Both tracks run simultaneously.",
  },
  {
    number: "4",
    title: "Track",
    description:
      "Rating improvement tracked in your Epicware dashboard. Most businesses see a 0.3–0.6 star improvement within 60–90 days.",
  },
];

export default function ImproveGoogleRatingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CategoryHero
        badge="IMPROVE GOOGLE RATING · SINGAPORE"
        h1="Improve Your Google Rating in Singapore — The Two-Part Fix"
        subtitle="A rating below 4.0 costs you customers. Epicware improves your Google rating through two simultaneous actions: removing the reviews that shouldn't be there, and generating more positive reviews from your satisfied customers."
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "Dual Approach",
          "Remove + Generate",
          "Singapore-Built",
          "$200/Review Removal Available",
        ]}
        imageSrc="/assets/review-management-illustration.png"
      />

      {/* The Problem */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            A Low Rating Is a Customer Acquisition Problem
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Your Google rating is below 4.0 or 4.2 — the psychological trust
              threshold for Singapore customers. Even customers who want to visit
              hesitate when they see 3.8 stars. The lower your rating, the fewer new
              customers you attract, which means fewer positive reviews, which keeps
              the rating low. It&apos;s a cycle that gets worse over time without
              intervention.
            </p>
            <p>
              Most businesses try to fix this by asking for more reviews — but if the
              reviews dragging the rating down stay in place, new positive reviews
              barely move the average. The fix requires both tracks running
              simultaneously.
            </p>
          </div>
        </div>
      </section>

      {/* The Two-Part Solution */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            The Two-Part Rating Fix
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">1</span>
                Remove the Reviews Dragging You Down
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Fake reviews, competitor attacks, and policy-violating reviews are
                removable. Epicware assesses each review, identifies the policy
                violation, and submits removal requests at $200/review with
                success-only payment. Removing 2–3 bad reviews can move your average
                rating by 0.2–0.4 stars immediately.
              </p>
              <Link
                href="/bad-review-removal-singapore"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-3 hover:underline"
              >
                See Bad Review Removal <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">2</span>
                Generate More Positive Reviews from Happy Customers
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Automated WhatsApp and email campaigns convert happy customers into
                5-star reviewers. Most businesses see their review count double within
                60 days and their rating improve by 0.3–0.6 stars as the new positive
                reviews dilute the old negative ones.
              </p>
              <Link
                href="/reputation-management-singapore/review-generation"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-3 hover:underline"
              >
                See Review Generation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
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
            Start the Rating Recovery Process
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Book a free demo and we&apos;ll run a live audit on your review profile —
            showing you which reviews are removable and what your rating could reach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background h-14 px-8 rounded-full font-semibold text-base group"
            >
              <Link href="/book-demo" className="flex items-center gap-2">
                Book a Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-transparent border border-foreground/30 text-foreground hover:bg-muted h-14 px-8 font-semibold text-base"
            >
              <Link href="/bad-review-removal-singapore">See Review Removal</Link>
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

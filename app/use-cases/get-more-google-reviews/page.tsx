import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Get More Google Reviews for Your Singapore Business | Epicware",
  description:
    "Epicware automates Google review generation for Singapore SMBs with WhatsApp and email campaigns timed for maximum conversion. Get more 5-star reviews in 30 days.",
  alternates: {
    canonical: "https://www.epicware.ai/use-cases/get-more-google-reviews",
  },
  openGraph: {
    title: "Get More Google Reviews for Your Singapore Business | Epicware",
    description:
      "Epicware automates Google review generation for Singapore SMBs with WhatsApp and email campaigns timed for maximum conversion.",
    url: "https://www.epicware.ai/use-cases/get-more-google-reviews",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Review Generation Singapore",
  serviceType: "Review Generation",
  description:
    "Automated Google review generation for Singapore SMBs via WhatsApp and email campaigns. 15-30% conversion rate.",
  provider: {
    "@type": "Organization",
    name: "Epicware Pte. Ltd.",
    url: "https://epicware.ai",
  },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/use-cases/get-more-google-reviews",
};

const STEPS = [
  {
    number: "1",
    title: "Connect",
    description:
      "Link your customer database or POS system to Epicware. Setup takes under 30 minutes.",
  },
  {
    number: "2",
    title: "Configure",
    description:
      "Set the timing (30 min post-visit, next morning, etc.) and message template. Epicware provides proven templates with 15–30% conversion rates.",
  },
  {
    number: "3",
    title: "Run",
    description:
      "Campaigns fire automatically for every qualifying customer. No manual sending required.",
  },
  {
    number: "4",
    title: "Track",
    description:
      "Review count, conversion rate, and star distribution visible in your Epicware dashboard. See the impact in real time.",
  },
];

export default function GetMoreGoogleReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CategoryHero
        badge="GET MORE REVIEWS · SINGAPORE"
        h1="Get More Google Reviews for Your Singapore Business — Automated, Not Manual"
        subtitle="Most Singapore SMBs get reviews by accident — a happy customer who remembered. Epicware's automated review campaigns turn every satisfied customer into a reviewer. 15–30% conversion rate on WhatsApp requests."
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo#form" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "15-30% WhatsApp Conversion",
          "Automated Campaigns",
          "Singapore-Built",
          "500+ Outlets Managed",
        ]}
        imageSrc="/assets/review-management-illustration.png"
      />

      {/* The Problem */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Your Competitors Have More Reviews. Here&apos;s Why That Matters.
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Volume signals credibility — a business with 150 reviews and a 4.5
              rating wins clicks over a business with 20 reviews and a 4.8, even
              though the rating is lower. Singapore customers make split-second trust
              decisions based on review count before they ever read the reviews.
            </p>
            <p>
              Most SMBs never ask for reviews, or ask too late (days after the
              experience has faded). The result: review count stays flat while
              competitors pull ahead. Epicware sends personalised review requests at
              the moment a customer is most likely to respond — and converts that
              window into a consistent stream of new reviews.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Automated Review Requests at the Right Moment
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Epicware sends personalised review requests via WhatsApp and email at
              the moment a customer is most likely to respond — 30 minutes after a
              restaurant meal, the morning after a clinic visit, immediately after an
              appointment ends.
            </p>
            <p>
              Each request uses the customer&apos;s name and references their specific
              interaction. WhatsApp review requests convert at 15–30% for warm
              audiences — compared to less than 2% for generic email blasts sent days
              after the visit.
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
            Start Generating More Reviews This Week
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            See the full EpicReview product or book a demo to see the campaigns
            running live on your business.
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
              <Link href="/reputation-management-singapore/review-generation">
                See Review Generation
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Also see:{" "}
            <Link
              href="/products/epicreview"
              className="text-primary font-medium hover:underline"
            >
              EpicReview product page
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

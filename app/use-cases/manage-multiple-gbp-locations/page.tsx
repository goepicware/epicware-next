import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Manage Multiple Google Business Profiles | Epicware",
  description:
    "Epicware's multi-outlet dashboard manages review generation, GBP optimisation, and rank tracking across all your Singapore outlets from one login.",
  alternates: {
    canonical: "https://www.epicware.ai/use-cases/manage-multiple-gbp-locations",
  },
  openGraph: {
    title: "Manage Multiple Google Business Profiles | Epicware",
    description:
      "Epicware's multi-outlet dashboard manages review generation, GBP optimisation, and rank tracking across all your outlets from one login.",
    url: "https://www.epicware.ai/use-cases/manage-multiple-gbp-locations",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Multi-Location GBP Management Singapore",
  serviceType: "Local SEO",
  description:
    "Multi-outlet Google Business Profile management dashboard for Singapore businesses. Reviews, rank tracking, and GBP posts across all locations from one login.",
  provider: {
    "@type": "Organization",
    name: "Epicware Pte. Ltd.",
    url: "https://epicware.ai",
  },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/use-cases/manage-multiple-gbp-locations",
};

const FEATURES = [
  "One inbox for all reviews across all outlets",
  "AI response drafts ready for every review",
  "EpicMap rank grid for all locations simultaneously",
  "Review campaigns run per outlet or across all locations",
  "GBP post scheduling for all outlets from one calendar",
  "Combined analytics across every location",
];

const STEPS = [
  {
    number: "1",
    title: "Connect",
    description:
      "Link all your GBP profiles to Epicware in under 30 minutes. No technical setup required — OAuth-based connection.",
  },
  {
    number: "2",
    title: "Review Management",
    description:
      "One inbox for all reviews across all outlets, with AI response drafts ready for each review. Never miss a review from any location.",
  },
  {
    number: "3",
    title: "Rank Tracking",
    description:
      "EpicMap shows all your outlets on the same visual rank grid. Compare performance across locations and identify which outlets need attention.",
  },
  {
    number: "4",
    title: "Campaigns",
    description:
      "Review generation, GBP posts, and reputation monitoring run for all outlets from one configuration. Set it once, runs everywhere.",
  },
];

export default function ManageMultipleGBPLocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CategoryHero
        badge="MULTI-OUTLET MANAGEMENT · SINGAPORE"
        h1="Manage Multiple Google Business Profiles From One Dashboard"
        subtitle="Running 3, 5, or 10 outlets in Singapore means 3, 5, or 10 separate GBP profiles to monitor, update, and respond to. Epicware manages all of them from one login — reviews, rank, posts, and reputation across every location."
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo#form" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "One Dashboard for All Outlets",
          "Singapore-Built",
          "500+ Outlets Managed",
          "AI-Native",
        ]}
        imageSrc="/assets/epicmap-before-after.png"
      />

      {/* The Problem */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Managing 5 GBP Profiles Separately Is Not a System
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Multi-outlet operators in Singapore — F&B groups, salon chains, clinic
              networks, tuition centre groups — spend hours every week logging into
              each GBP account separately to check reviews, respond, update hours, and
              post. Missed reviews go unanswered. Hours changes don&apos;t propagate. One
              outlet&apos;s bad review drags the group&apos;s overall rating. There&apos;s no single
              view of how all locations are performing.
            </p>
            <p>
              Manual multi-outlet management creates gaps. Every gap is a customer
              lost or a review left unanswered. Epicware closes those gaps.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Everything in One Place
          </h2>
          <div className="space-y-3 mb-6">
            {FEATURES.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-base text-muted-foreground">{feature}</p>
              </div>
            ))}
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
            Connect All Your Outlets This Week
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Book a demo and we&apos;ll show you all your outlet profiles in the Epicware
            dashboard live during the call.
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
              <Link href="/review-management-singapore">See Review Management</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Also see:{" "}
            <Link
              href="/gbp-optimisation-singapore"
              className="text-primary font-medium hover:underline"
            >
              GBP Optimisation
            </Link>{" "}
            ·{" "}
            <Link
              href="/products/epicmap"
              className="text-primary font-medium hover:underline"
            >
              EpicMap
            </Link>{" "}
            ·{" "}
            <Link
              href="/products/epicreview"
              className="text-primary font-medium hover:underline"
            >
              EpicReview
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

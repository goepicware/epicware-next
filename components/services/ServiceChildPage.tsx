"use client";

import Link from "next/link";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

interface ServiceChildPageProps {
  schema: object;
  badge: string;
  h1: string;
  subtitle: React.ReactNode;
  trustSignals: string[];
  imageSrc?: string;
  openingParagraph: React.ReactNode;
  whenTitle: string;
  whenContent: React.ReactNode;
  howTitle: string;
  howContent: React.ReactNode;
  pricingContent: React.ReactNode;
  parentHref: string;
  parentLabel: string;
  parentSentence: React.ReactNode;
}

export default function ServiceChildPage({
  schema,
  badge,
  h1,
  subtitle,
  trustSignals,
  imageSrc = "/assets/hero-image.jpg",
  openingParagraph,
  whenTitle,
  whenContent,
  howTitle,
  howContent,
  pricingContent,
  parentSentence,
}: ServiceChildPageProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CategoryHero
        badge={badge}
        h1={h1}
        subtitle={subtitle}
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={trustSignals}
        imageSrc={imageSrc}
      />

      {/* Opening paragraph */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {openingParagraph}
          </p>
        </div>
      </section>

      {/* When You Need */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">{whenTitle}</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            {whenContent}
          </div>
        </div>
      </section>

      {/* How Epicware Handles */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">{howTitle}</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            {howContent}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Pricing</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            {pricingContent}
          </div>
        </div>
      </section>

      {/* Why Epicware */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Why Epicware — Not an Agency</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Epicware is a platform, not an agency. Agencies sell their time. Epicware gives you a
              self-serve dashboard that runs automatically — no retainer, no waiting on someone
              else&apos;s team, no monthly report that is already out of date. You log in, you see
              your data, you take action.
            </p>
            <p>
              The platform was built by the team behind NinjaOS, an F&amp;B SaaS product that
              processed over $120M in GMV before its 2021 exit. Epicware is Singapore-built, used
              by businesses in SG · MY · UAE · UK · US. See the full platform overview at{" "}
              <Link href="/" className="text-primary font-medium hover:underline">
                epicware.ai
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Parent link */}
      <section className="py-6 lg:py-8">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-base text-muted-foreground leading-relaxed">
            {parentSentence}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="font-display font-bold text-foreground mb-4">
            Ready to fix this for your business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a free demo — we&apos;ll show you this feature live on your actual GBP profile.
            No slides. No pitch deck. Just your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-foreground text-background font-semibold text-base hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
            >
              Book My Free Demo →
            </Link>
            <Link
              href="/audit"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full border border-border text-foreground font-semibold text-base hover:bg-muted transition-colors duration-200"
            >
              Start with a free audit
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}

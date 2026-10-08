"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

interface ServiceLink {
  label: string;
  href: string;
  description: string;
}

interface LocationLink {
  label: string;
  href: string;
}

interface IndustryPageProps {
  schema: object;
  badge: string;
  h1: string;
  subtitle: React.ReactNode;
  trustSignals: string[];
  imageSrc?: string;
  openingParagraph: React.ReactNode;
  challengesTitle: string;
  challengesContent: React.ReactNode;
  howEpicwareHelps: React.ReactNode;
  services: ServiceLink[];
  locationLinks: LocationLink[];
  faqs?: { q: string; a: string }[];
  faqHeading?: string;
}

export default function IndustryPage({
  schema,
  badge,
  h1,
  subtitle,
  trustSignals,
  imageSrc = "/assets/hero-image.jpg",
  openingParagraph,
  challengesTitle,
  challengesContent,
  howEpicwareHelps,
  services,
  locationLinks,
  faqs,
  faqHeading,
}: IndustryPageProps) {
  const schemaFAQ = faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {schemaFAQ && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
        />
      )}

      <CategoryHero
        badge={badge}
        h1={h1}
        subtitle={subtitle}
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo#form" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/free-audit" }}
        trustSignals={trustSignals}
        imageSrc={imageSrc}
      />

      {/* Opening */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {openingParagraph}
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">{challengesTitle}</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            {challengesContent}
          </div>
        </div>
      </section>

      {/* How Epicware helps */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">How Epicware Helps</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            {howEpicwareHelps}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-display font-bold text-foreground text-2xl mb-8 text-center">
              {faqHeading ?? "Common questions"}
            </h2>
            <div className="space-y-5">
              {faqs.map(({ q, a }) => (
                <div key={q} className="rounded-2xl border border-border/60 bg-card p-5">
                  <p className="font-semibold text-foreground text-sm mb-2">{q}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services grid */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display text-foreground mb-8 text-center">
            Services for This Industry
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
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

      {/* Location links */}
      {locationLinks.length > 0 && (
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-display text-foreground mb-6">
              Serving These Singapore Locations
            </h2>
            <div className="flex flex-wrap gap-3">
              {locationLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Epicware */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            An SEO Agency With Its Own Software
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Epicware is an SEO agency with its own software. Our team runs review
              generation, GBP optimisation, and reputation management on the live
              dashboard we built ourselves — 24 hours a day, whether you are at your outlet or not.
            </p>
            <p>
              Built by the team behind NinjaOS ($120M GMV, F&amp;B SaaS, 2021 exit).
              Used across Singapore, Malaysia, UAE, UK, and the US. No retainer. No
              lock-in. Cancel anytime. See{" "}
              <Link href="/pricing" className="text-primary font-medium hover:underline">
                pricing
              </Link>{" "}
              or{" "}
              <Link
                href="/book-demo#form"
                className="text-primary font-medium hover:underline"
              >
                book a free demo
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}

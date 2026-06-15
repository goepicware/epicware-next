import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Local SEO & Reputation Management Services Singapore | Epicware",
  description:
    "Epicware's full service suite for Singapore SMBs — review management, GBP optimisation, bad review removal, and growth tools. One platform. No agency retainer.",
  alternates: { canonical: "https://www.epicware.ai/services" },
  openGraph: {
    title: "Local SEO & Reputation Management Services Singapore | Epicware",
    description:
      "Epicware's full service suite for Singapore SMBs — review management, GBP optimisation, bad review removal, AI visibility, and growth tools.",
    url: "https://www.epicware.ai/services",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO & Reputation Management Services Singapore",
  serviceType: "Local SEO and Reputation Management",
  description:
    "Epicware's full service suite for Singapore SMBs — review management, GBP optimisation, bad review removal, AI visibility, and growth tools.",
  provider: {
    "@type": "Organization",
    name: "Epicware Pte. Ltd.",
    url: "https://epicware.ai",
  },
  areaServed: {
    "@type": "Country",
    name: "Singapore",
  },
  url: "https://epicware.ai/services",
};

const TRUST_SIGNALS = [
  "500+ Outlets Managed",
  "Bad Review Removal Guaranteed",
  "Singapore-Built",
  "Active in SG · MY · UAE · UK · US",
];

const REPUTATION_SERVICES = [
  {
    name: "Review Management",
    href: "/reputation-management-singapore/review-management",
    description: "Monitor and manage every Google review across all your outlets in real time.",
  },
  {
    name: "AI Review Response",
    href: "/reputation-management-singapore/ai-review-response",
    description: "Auto-generate personalised, brand-consistent replies to every review.",
  },
  {
    name: "Bad Review Removal ⭐",
    href: "/reputation-management-singapore/bad-review-removal",
    description: "Remove fake, malicious, or policy-violating Google reviews. Pay only on success.",
  },
  {
    name: "Review Generation Campaigns",
    href: "/reputation-management-singapore/review-generation",
    description: "Automated WhatsApp and email campaigns that turn happy customers into Google reviews.",
  },
  {
    name: "Wall of Love (Review Widgets)",
    href: "/reputation-management-singapore/review-widgets",
    description: "Embed your best reviews on your website — live, auto-updating.",
  },
  {
    name: "Reputation Analytics Dashboard",
    href: "/reputation-management-singapore/reputation-analytics",
    description: "Track your rating trends, review velocity, and sentiment across all locations.",
  },
];

const LOCAL_SEO_SERVICES = [
  {
    name: "GBP Optimisation",
    href: "/local-seo-singapore/gbp-optimisation",
    description: "Complete 19-point audit and ongoing optimisation of your Google Business Profile.",
  },
  {
    name: "GBP Post Scheduling",
    href: "/local-seo-singapore/gbp-post-scheduling",
    description: "AI-generated weekly posts published to your GBP automatically.",
  },
  {
    name: "GBP Setup & Onboarding",
    href: "/local-seo-singapore/gbp-setup",
    description: "Full GBP creation, verification, and configuration for new or unclaimed profiles.",
  },
  {
    name: "Local Rank Tracking (EpicMap)",
    href: "/local-seo-singapore/local-rank-tracking",
    description: "Visual map grid showing your keyword rank across every Singapore district.",
  },
  {
    name: "Citation Building",
    href: "/local-seo-singapore/citation-building",
    description: "Build consistent NAP citations across Singapore's top local directories.",
  },
  {
    name: "Competitor Analysis",
    href: "/local-seo-singapore/competitor-analysis",
    description: "See exactly where competitors outrank you and why.",
  },
];

const AI_SERVICES = [
  {
    name: "GEO / AI Overview Optimisation",
    href: "/ai-search-visibility-singapore/geo-optimisation",
    description: "Optimise your content to appear in Google's AI-generated search answers.",
  },
  {
    name: "AI Citation Building",
    href: "/ai-search-visibility-singapore/ai-citation-building",
    description: "Get your business cited as a source in AI-generated local responses.",
  },
  {
    name: "AEO (Answer Engine Optimisation)",
    href: "/ai-search-visibility-singapore/aeo",
    description: "Structure your content so AI assistants recommend your business by name.",
  },
];

const GROWTH_SERVICES = [
  {
    name: "EpicEngage Email Marketing",
    href: "/growth-tools/epicengage-email-marketing",
    description: "Automated email campaigns that turn one-time visitors into repeat customers.",
  },
  {
    name: "EpicSocial Social Scheduling",
    href: "/growth-tools/epicsocial-social-scheduling",
    description: "Schedule and publish social media posts across platforms from one dashboard.",
  },
];

function ServiceCard({ name, href, description }: { name: string; href: string; description: string }) {
  return (
    <Link href={href} className="card-feature group block h-full">
      <div className="card-feature-inner p-6 flex flex-col gap-3 h-full">
        <h3 className="font-display font-semibold text-foreground text-base leading-snug">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">{description}</p>
        <div className="flex items-center gap-2 text-sm font-semibold text-primary pt-3 border-t border-border/30">
          Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center hero-gradient overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[130px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[110px]" />
        </div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <h1 className="font-display font-bold text-foreground mb-6 leading-tight">
            Local SEO &amp; Reputation Management Services for Singapore SMBs
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Every service your business needs to rank higher, earn more reviews, and remove the ones
            that shouldn&apos;t be there — all in one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/book-demo#form"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-foreground text-background font-semibold text-base hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
            >
              Book a Free Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/audit"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full border border-border text-foreground font-semibold text-base hover:bg-muted transition-colors duration-200"
            >
              Free GBP Audit
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {TRUST_SIGNALS.map((signal) => (
              <div
                key={signal}
                className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/60 rounded-full px-4 py-2 shadow-card"
              >
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground/80">{signal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening paragraph */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            You&apos;re here because you need something specific — more reviews, better Google Maps ranking, or a bad
            review that needs to come down. Epicware handles all of it from one self-serve platform built for Singapore
            SMBs. No agency retainer. No waiting on someone else&apos;s team. Choose the service you need below, or book
            a free demo and we&apos;ll map out the right combination for your business.
          </p>
        </div>
      </section>

      {/* Section A: Reputation Management */}
      <section className="py-16 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-8">
            <Link href="/reputation-management-singapore" className="hover:underline">
              <h2 className="font-display text-foreground mb-3">Reputation Management</h2>
            </Link>
            <p className="text-muted-foreground text-lg">
              Protect, build, and repair what people see when they search your business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REPUTATION_SERVICES.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Section B: Local SEO */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-8">
            <Link href="/local-seo-singapore" className="hover:underline">
              <h2 className="font-display text-foreground mb-3">Local SEO Services</h2>
            </Link>
            <p className="text-muted-foreground text-lg">
              Get found when Singapore searches for businesses like yours.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LOCAL_SEO_SERVICES.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Section C: AI & GEO Visibility */}
      <section className="py-16 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-8">
            <Link href="/ai-search-visibility-singapore" className="hover:underline">
              <h2 className="font-display text-foreground mb-3">AI &amp; GEO Visibility</h2>
            </Link>
            <p className="text-muted-foreground text-lg">
              ChatGPT, Perplexity, and Google AI Overviews now answer local searches. Get cited.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {AI_SERVICES.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Section D: Growth Tools */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-8">
            <Link href="/growth-tools" className="hover:underline">
              <h2 className="font-display text-foreground mb-3">Growth Tools</h2>
            </Link>
            <p className="text-muted-foreground text-lg">
              Getting found is step one. Keeping customers is step two.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
            {GROWTH_SERVICES.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Section E: Core Services — featured */}
      <section className="py-16 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-display text-foreground mb-10 text-center">Our Core Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Link href="/bad-review-removal-singapore" className="card-feature group block h-full">
              <div className="card-feature-inner p-8 flex flex-col gap-4 h-full">
                <div className="text-2xl">⭐</div>
                <h3 className="font-display font-bold text-foreground text-xl leading-snug">
                  Bad Review Removal
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed flex-1">
                  The only productised bad review removal service in Singapore. Fake, malicious, or
                  policy-violating reviews — we fight them. <strong>$200/review, pay only on success.</strong>
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary pt-4 border-t border-border/30">
                  See Bad Review Removal <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
            <Link href="/gbp-optimisation-singapore" className="card-feature group block h-full">
              <div className="card-feature-inner p-8 flex flex-col gap-4 h-full">
                <div className="text-2xl">📍</div>
                <h3 className="font-display font-bold text-foreground text-xl leading-snug">
                  GBP Optimisation
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed flex-1">
                  19-point audit, weekly posts, and rank tracking across Singapore districts — all automated.
                  Rank higher on Google Maps without hiring an agency.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary pt-4 border-t border-border/30">
                  See GBP Optimisation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
            <Link href="/review-management-singapore" className="card-feature group block h-full">
              <div className="card-feature-inner p-8 flex flex-col gap-4 h-full">
                <div className="text-2xl">⭐</div>
                <h3 className="font-display font-bold text-foreground text-xl leading-snug">
                  Review Management
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed flex-1">
                  Review requests, AI responses, and real-time monitoring across all your outlets.
                  Never miss a review or leave one unanswered.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary pt-4 border-t border-border/30">
                  See Review Management <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="font-display font-bold text-foreground mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a free 30-minute demo. We&apos;ll audit your GBP live and tell you exactly what&apos;s
            costing you customers — and which Epicware services fix it fastest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo#form"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-foreground text-background font-semibold text-base hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
            >
              Book My Free Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/audit"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full border border-border text-foreground font-semibold text-base hover:bg-muted transition-colors duration-200"
            >
              Or get a free GBP audit first
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

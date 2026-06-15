import type { Metadata } from "next";
import Link from "next/link";
import PricingCards from "@/components/pricing/PricingCards";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Epicware Pricing — Local SEO & Reputation Management Plans | Singapore",
  description:
    "Simple, transparent pricing for Singapore SMBs. Foundation to Full Stack. No lock-in contracts. Bad review removal $200/review pay on success.",
  alternates: { canonical: "https://www.epicware.ai/pricing" },
  openGraph: {
    title: "Epicware Pricing — Local SEO & Reputation Management Plans | Singapore",
    description:
      "Simple, transparent pricing for Singapore SMBs. Foundation to Full Stack. No lock-in contracts.",
    url: "https://www.epicware.ai/pricing",
  },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a lock-in contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. All plans are month-to-month. You can cancel anytime with 30 days' notice. We keep clients with results, not contracts.",
      },
    },
    {
      "@type": "Question",
      name: "What counts as an 'outlet'?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One outlet = one physical business location or Google Business Profile. If you have 3 restaurant branches, that's 3 outlets. The Authority, Domination, and Full Stack plans include 1 outlet with additional outlets at $99/month each.",
      },
    },
    {
      "@type": "Question",
      name: "How does bad review removal billing work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You pay $200 only when a review is successfully removed from Google. If a review stays up, you pay nothing. We handle the escalation process — flagging, appeals, support tickets.",
      },
    },
    {
      "@type": "Question",
      name: "How does the annual discount work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annual plans are billed once a year at 15% off. You pay upfront for 12 months and save compared to monthly billing.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after I book a strategy call?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A member of the Epicware team will review your Google Business Profile, your current ratings, and your competitors before the call. The call is 30–45 minutes and we'll tell you exactly where you stand and what to prioritise.",
      },
    },
    {
      "@type": "Question",
      name: "Can I upgrade or downgrade my plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can move between plans at the start of your next billing cycle. Upgrades take effect immediately and we prorate the difference.",
      },
    },
  ],
};

const schemaPricing = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Epicware Pricing Plans",
  description: "Local SEO and Reputation Management subscription plans for Singapore SMBs.",
  url: "https://www.epicware.ai/pricing",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Foundation",
        description: "Review management, GBP optimisation, and rank tracking for a single outlet.",
        offers: {
          "@type": "Offer",
          price: "149",
          priceCurrency: "SGD",
          priceSpecification: { "@type": "UnitPriceSpecification", price: "149", priceCurrency: "SGD", unitCode: "MON" },
          url: "https://www.epicware.ai/pricing",
          seller: { "@type": "Organization", name: "Epicware Pte. Ltd." },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Authority",
        description: "Full Local SEO and rank tracking with EpicMap, EpicReview, and EpicSocial.",
        offers: {
          "@type": "Offer",
          price: "599",
          priceCurrency: "SGD",
          priceSpecification: { "@type": "UnitPriceSpecification", price: "599", priceCurrency: "SGD", unitCode: "MON" },
          url: "https://www.epicware.ai/pricing",
          seller: { "@type": "Organization", name: "Epicware Pte. Ltd." },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Domination",
        description: "Full AI search visibility and SEO content on top of the Authority plan.",
        offers: {
          "@type": "Offer",
          price: "1500",
          priceCurrency: "SGD",
          priceSpecification: { "@type": "UnitPriceSpecification", price: "1500", priceCurrency: "SGD", unitCode: "MON" },
          url: "https://www.epicware.ai/pricing",
          seller: { "@type": "Organization", name: "Epicware Pte. Ltd." },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "Full Stack",
        description: "Everything in Domination plus paid ad management across Meta and Google.",
        offers: {
          "@type": "Offer",
          price: "2200",
          priceCurrency: "SGD",
          priceSpecification: { "@type": "UnitPriceSpecification", price: "2200", priceCurrency: "SGD", unitCode: "MON" },
          url: "https://www.epicware.ai/pricing",
          seller: { "@type": "Organization", name: "Epicware Pte. Ltd." },
        },
      },
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPricing) }} />

      {/* Hero */}
      <section className="hero-gradient pt-28 pb-14">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-5">
            TRANSPARENT PRICING · NO LOCK-IN
          </div>
          <h1 className="font-display font-bold text-foreground mb-5 leading-tight">
            Plans for Every Stage of Growth
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
            From getting your first 50 reviews to dominating Google Search, Maps, and AI results — pick the plan that matches where you are today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            {["No lock-in contracts", "Cancel anytime", "Bad review removal $200 pay-on-success"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 bg-muted/60 rounded-full px-3 py-1 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />{t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <PricingCards />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gradient-2 py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display font-bold text-foreground text-2xl mb-8 text-center">Common Questions</h2>
          <div className="space-y-5">
            {[
              {
                q: "Is there a lock-in contract?",
                a: "No. All plans are month-to-month. You can cancel anytime with 30 days' notice. We keep clients with results, not contracts.",
              },
              {
                q: "What counts as an 'outlet'?",
                a: "One outlet = one physical business location or Google Business Profile. If you have 3 restaurant branches, that's 3 outlets. The Authority, Domination, and Full Stack plans include 1 outlet with additional outlets at $99/month each.",
              },
              {
                q: "How does bad review removal billing work?",
                a: "You pay $200 only when a review is successfully removed from Google. If a review stays up, you pay nothing. We handle the escalation process — flagging, appeals, support tickets.",
              },
              {
                q: "How does the annual discount work?",
                a: "Toggle to Annual on the pricing cards above. Annual plans are billed once a year at 15% off. You pay upfront for 12 months and save compared to monthly billing.",
              },
              {
                q: "What happens after I book a strategy call?",
                a: "A member of the Epicware team will review your Google Business Profile, your current ratings, and your competitors before the call. We come prepared. The call is 30–45 minutes and we'll tell you exactly where you stand and what to prioritise.",
              },
              {
                q: "Can I upgrade or downgrade my plan?",
                a: "Yes. You can move between plans at the start of your next billing cycle. Upgrades take effect immediately and we prorate the difference.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-2xl border border-border/60 bg-card p-5">
                <p className="font-semibold text-foreground text-sm mb-2">{q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-muted-foreground text-sm mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-11 px-7 rounded-full border border-border/60 text-foreground font-semibold text-sm hover:bg-muted/50 transition-all duration-300"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* How Epicware compares */}
      <section className="py-12 border-t border-border/40">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">How We Compare</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Epicware vs BirdEye", href: "/comparison/epicware-vs-birdeye" },
              { label: "Epicware vs BrightLocal", href: "/comparison/epicware-vs-brightlocal" },
              { label: "Epicware vs Yext", href: "/comparison/epicware-vs-yext" },
              { label: "Epicware vs GradeUs", href: "/comparison/epicware-vs-gradeus" },
              { label: "EpicReview vs QR Code Review", href: "/comparison/epicreview-vs-qr-code-review" },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="text-sm font-medium text-primary hover:underline bg-primary/5 border border-primary/15 rounded-full px-4 py-1.5 transition-colors hover:bg-primary/10"
              >
                {c.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}

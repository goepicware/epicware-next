import type { Metadata } from "next";
import Link from "next/link";
import PricingCards from "@/components/pricing/PricingCards";
import WhyEpicware from "@/components/pricing/WhyEpicware";
import AddOns from "@/components/pricing/AddOns";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Epicware Pricing — Local SEO & Reputation Management Plans | Singapore",
  description:
    "Simple, transparent pricing for Singapore SMBs. Foundation to Full Stack. No lock-in contracts. Bad review removal $200/review, refunded if not removed within 3 months.",
  alternates: { canonical: "https://www.epicware.ai/pricing" },
  openGraph: {
    title: "Epicware Pricing — Local SEO & Reputation Management Plans | Singapore",
    description:
      "Simple, transparent pricing for Singapore SMBs. Foundation to Full Stack. No lock-in contracts.",
    url: "https://www.epicware.ai/pricing",
  },
};

// Single source of truth for the pricing FAQ — drives both the visible
// accordion below and the FAQPage JSON-LD, so the two can never drift apart.
const FAQS: { q: string; a: string }[] = [
  {
    q: "I've been burned by an SEO agency before. Why is Epicware different?",
    a: "Most agencies sell advice and leave the implementation to you, start their guarantee clock in month 2, and lock you into 6–12 months prepaid. On Domination and above, Epicware publishes every page, blog post and schema change for you, starts your guarantee on day 1, and works month to month. If we miss the ranking target, we keep working free until it's achieved.",
  },
  {
    q: "How much does local SEO cost for a small business in Singapore?",
    a: "Epicware's Foundation plan starts at $299/month and covers review management, GBP optimisation, and rank tracking for one outlet. The Authority plan at $899/month adds AI social content scheduling, full local SEO, and EpicMap rank tracking. There are no setup fees and no lock-in contracts on any plan.",
  },
  {
    q: "Which Epicware plan is right for a clinic or restaurant with one or two outlets?",
    a: "Most single-outlet clinics, restaurants, and salons start on the Foundation plan ($299/month), which covers review management, GBP optimisation, and rank tracking. If you need AI-generated social content or competitor analysis across districts, the Authority plan ($899/month) is the next step. Additional outlets can be added to any plan at $99/month each.",
  },
  {
    q: "Is Epicware cheaper than hiring a local SEO agency in Singapore?",
    a: "Yes. A typical Singapore local SEO agency retainer runs $800–$2,500/month, with no guaranteed results and no bad review removal included. Epicware's Foundation plan starts at $299/month. Bad review removal is separate at $200/review, charged upfront and refunded in full if the review isn't removed within 3 months.",
  },
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
    a: "You pay $200 upfront per review. If it isn't removed from Google within 3 months, you get a full refund. We handle the escalation process — flagging, appeals, support tickets.",
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
];

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
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
          price: "299",
          priceCurrency: "SGD",
          priceSpecification: { "@type": "UnitPriceSpecification", price: "299", priceCurrency: "SGD", unitCode: "MON" },
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
          price: "899",
          priceCurrency: "SGD",
          priceSpecification: { "@type": "UnitPriceSpecification", price: "899", priceCurrency: "SGD", unitCode: "MON" },
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
          price: "3800",
          priceCurrency: "SGD",
          priceSpecification: { "@type": "UnitPriceSpecification", price: "3800", priceCurrency: "SGD", unitCode: "MON" },
          url: "https://www.epicware.ai/pricing",
          seller: { "@type": "Organization", name: "Epicware Pte. Ltd." },
        },
      },
    },
  ],
};

const schemaAddOns = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Epicware Add-Ons",
  description: "Optional add-on services available with any Epicware plan.",
  url: "https://www.epicware.ai/pricing",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Bad Review Removal",
        description: "Charged upfront. Refunded in full if not removed within 3 months.",
        offers: {
          "@type": "Offer",
          price: "200",
          priceCurrency: "SGD",
          priceSpecification: { "@type": "UnitPriceSpecification", price: "200", priceCurrency: "SGD", unitText: "per review" },
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
        name: "10-Page Website Build",
        description: "A professionally designed 10-page website, built for local SEO and conversions.",
        offers: {
          "@type": "Offer",
          price: "3000",
          priceCurrency: "SGD",
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
        name: "WordPress Maintenance",
        description: "Ongoing updates, security hardening, backups, and performance monitoring for your WordPress site.",
        offers: {
          "@type": "Offer",
          price: "500",
          priceCurrency: "SGD",
          priceSpecification: { "@type": "UnitPriceSpecification", price: "500", priceCurrency: "SGD", unitCode: "MON" },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaAddOns) }} />

      {/* Hero */}
      <section className="hero-gradient pt-20 pb-8">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-3">
            TRANSPARENT PRICING · NO LOCK-IN
          </div>
          <h1 className="font-display font-bold text-foreground mb-3 leading-tight">
            Local SEO &amp; Reputation Management Pricing — Singapore
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
            From getting your first 50 reviews to dominating Google Search, Maps, and AI results — pick the plan that matches where you are today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            {["No lock-in contracts", "Cancel anytime", "Bad review removal $200, refunded if not removed"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 bg-muted/60 rounded-full px-3 py-1 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />{t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pt-6 lg:pt-8">
        <div className="container mx-auto px-6 max-w-7xl">
          <PricingCards />
          <p className="text-center text-sm text-muted-foreground mt-6">
            See{" "}
            <Link href="/seo-agency-singapore" className="text-primary font-medium hover:underline">
              what our SEO services include
            </Link>{" "}
            on the plans above.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="pb-14 lg:pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <AddOns />
        </div>
      </section>

      {/* Tried SEO before? */}
      <WhyEpicware />

      {/* FAQ */}
      <section className="section-gradient-2 py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display font-bold text-foreground text-2xl mb-8 text-center">Common questions about Epicware pricing</h2>
          <div className="space-y-5">
            {FAQS.map(({ q, a }) => (
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

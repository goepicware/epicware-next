import type { Metadata } from "next";
import Link from "next/link";
import CategoryHero from "@/components/category/CategoryHero";
import ServicesGrid from "@/components/category/ServicesGrid";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "AI Search Visibility Singapore — GEO & AI Overviews",
  description:
    "Get found by ChatGPT, Perplexity, and Google AI Overviews. Epicware optimises Singapore SMBs for the next generation of AI-powered local search.",
  alternates: { canonical: "https://www.epicware.ai/ai-search-visibility-singapore" },
  openGraph: {
    title: "AI Search Visibility Singapore — GEO & AI Overview Optimisation | Epicware",
    description:
      "Get found by ChatGPT, Perplexity, and Google AI Overviews. Epicware optimises Singapore SMBs for the next generation of AI-powered local search.",
    url: "https://www.epicware.ai/ai-search-visibility-singapore",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Search Visibility Singapore",
  serviceType: "GEO and AI Search Optimisation",
  description:
    "GEO optimisation, AI citation building, and Answer Engine Optimisation for Singapore businesses. Get found by ChatGPT, Perplexity, and Google AI Overviews.",
  provider: {
    "@type": "Organization",
    name: "Epicware Pte. Ltd.",
    url: "https://epicware.ai",
  },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/ai-search-visibility-singapore",
};

const CHILD_SERVICES = [
  {
    name: "GEO / AI Overview Optimisation",
    href: "/ai-search-visibility-singapore/geo-optimisation",
    description:
      "Structure your content and GBP to appear in Google's AI-generated search answers — the panel that now sits above organic results for local queries.",
  },
  {
    name: "AI Citation Building",
    href: "/ai-search-visibility-singapore/ai-citation-building",
    description:
      "Build your presence on the sources ChatGPT, Perplexity, and Google AI draw from — so your business gets cited when AI answers questions about your category.",
  },
  {
    name: "AEO (Answer Engine Optimisation)",
    href: "/ai-search-visibility-singapore/aeo",
    description:
      "Structure your online presence so AI assistants recommend your business by name when Singapore customers ask for recommendations.",
  },
];

export default function AiSearchVisibilitySingaporePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <CategoryHero
        badge="AI & GEO VISIBILITY · SINGAPORE"
        h1="AI & GEO Visibility Singapore — Get Found by ChatGPT and Google AI"
        subtitle="ChatGPT, Perplexity, and Google's AI Overviews now answer Singapore local searches. If your business isn't optimised for these AI systems, you're invisible to the next generation of search."
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo#form" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "AI Overview Optimisation",
          "Answer Engine Optimisation",
          "Singapore-Built",
          "Citation Building",
        ]}
        imageSrc="/assets/hero-image.jpg"
      />

      {/* Opening paragraph */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Search behaviour in Singapore is changing. A growing share of local queries are now answered directly by AI
            systems — Google&apos;s AI Overviews, ChatGPT with web search, and Perplexity — before a user ever clicks
            on a standard search result. For Singapore SMBs, this creates a new visibility problem: the businesses that
            appear in these AI-generated answers are there because their content and profiles are structured in ways that
            AI systems can read, trust, and cite. Businesses that aren&apos;t optimised for this are invisible in the
            answer, regardless of their traditional SEO rank.
          </p>
        </div>
      </section>

      {/* The AI Search Shift */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">The AI Search Shift in Singapore</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              When a Singapore user asks Google &ldquo;best paediatric dentist in Tampines&rdquo; or ChatGPT &ldquo;where
              should I get a facial in Orchard Road,&rdquo; the AI generates a direct answer. That answer cites specific
              businesses. The businesses cited are not necessarily the ones with the highest traditional SEO rank — they
              are the ones whose information appears on sources that AI systems trust, structured in formats that AI can
              parse.
            </p>
            <p>
              GEO (Generative Engine Optimisation) is the discipline of optimising for this new layer of search.
              It sits alongside traditional local SEO — not replacing it, but adding the AI visibility layer that is
              increasingly determining which businesses customers discover first.
            </p>
          </div>
        </div>
      </section>

      {/* How Epicware Approaches AI Visibility */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">How Epicware Approaches AI Visibility</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Epicware&apos;s AI visibility services operate across three layers:{" "}
              <Link href="/ai-search-visibility-singapore/geo-optimisation" className="text-primary font-medium hover:underline">
                GEO Optimisation
              </Link>{" "}
              structures your web content and GBP for Google&apos;s AI Overview panel;{" "}
              <Link href="/ai-search-visibility-singapore/ai-citation-building" className="text-primary font-medium hover:underline">
                AI Citation Building
              </Link>{" "}
              builds your presence on the specific platforms that ChatGPT and Perplexity draw from; and{" "}
              <Link href="/ai-search-visibility-singapore/aeo" className="text-primary font-medium hover:underline">
                AEO (Answer Engine Optimisation)
              </Link>{" "}
              applies structured data markup and content structuring so AI systems can confidently identify and recommend
              your business by name.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Pricing</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              AI Visibility services are available on Epicware&apos;s Growth plan and above. See full plan details at{" "}
              <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
              No setup fees on Foundation plan. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Why Epicware */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Why Epicware — Not an Agency</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Epicware is a platform, not an agency. Agencies sell their time. Epicware gives you a self-serve dashboard
              that runs automatically — no retainer, no waiting on someone else&apos;s team, no monthly report that is
              already out of date. You log in, you see your data, you take action.
            </p>
            <p>
              The platform was built by the team behind NinjaOS, an F&amp;B SaaS product that processed over $120M in
              GMV before its 2021 exit. Epicware is Singapore-built, used by businesses in SG · MY · UAE · UK · US. See the
              full platform overview at{" "}
              <Link href="/" className="text-primary font-medium hover:underline">epicware.ai</Link>.
            </p>
          </div>
        </div>
      </section>

      <ServicesGrid
        heading="AI & GEO Visibility Services"
        services={CHILD_SERVICES}
      />

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}

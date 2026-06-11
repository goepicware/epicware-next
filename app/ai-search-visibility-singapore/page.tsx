import type { Metadata } from "next";
import Link from "next/link";
import CategoryHero from "@/components/category/CategoryHero";
import ServicesGrid from "@/components/category/ServicesGrid";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "AI Search Visibility Singapore — Get Cited by ChatGPT & Google AI | Epicware",
  description:
    "Get your Singapore business cited in ChatGPT, Perplexity & Google AI Overviews. Epicware's GEO module is the only platform in SG built for AI-powered local search.",
  alternates: { canonical: "https://www.epicware.ai/ai-search-visibility-singapore" },
  openGraph: {
    title: "AI & GEO Search Visibility Singapore | Epicware",
    description:
      "AI search tools now answer 'best dentist in Clementi.' Is your business in the answer? Epicware's GEO module gets you cited in ChatGPT, Perplexity & Google AI Overviews.",
    url: "https://www.epicware.ai/ai-search-visibility-singapore",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Search Visibility Singapore",
  serviceType: "AI & GEO Visibility",
  description:
    "GEO and AEO optimisation platform for Singapore SMBs. Gets businesses cited in ChatGPT, Perplexity, and Google AI Overviews through structured data, AI citation building, and answer engine optimisation.",
  provider: {
    "@type": "Organization",
    name: "Epicware Pte. Ltd.",
    url: "https://www.epicware.ai",
  },
  areaServed: { "@type": "City", name: "Singapore" },
  url: "https://www.epicware.ai/ai-search-visibility-singapore",
};

const CHILD_SERVICES = [
  {
    name: "GEO / AI Overview Optimisation",
    href: "/ai-search-visibility-singapore/geo-optimisation",
    description:
      "Structure your online presence so Google AI Overviews, ChatGPT, and Perplexity choose your business as a recommended answer when local queries are asked.",
  },
  {
    name: "AI Citation Building",
    href: "/ai-search-visibility-singapore/ai-citation-building",
    description:
      "Build mentions and references across the platforms, directories, and structured data sources that AI systems trust — so your business gets pulled into AI-generated answers.",
  },
  {
    name: "AEO (Answer Engine Optimisation)",
    href: "/ai-search-visibility-singapore/aeo",
    description:
      "Optimise your content and schema markup so AI engines can extract, understand, and cite your business as the authoritative answer to local intent queries.",
  },
];

export default function AISearchVisibilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <CategoryHero
        badge="AI & GEO VISIBILITY · SINGAPORE"
        h1="AI Search Visibility in Singapore — Show Up Where AI Answers Local Questions"
        subtitle={
          <>
            ChatGPT, Perplexity, and Google AI Overviews now answer &ldquo;best dentist in Clementi&rdquo; and
            &ldquo;top tuition centres in Tampines&rdquo; — without showing a single blue link.
            If your business is not cited in those answers, you are invisible to a fast-growing share of
            Singapore customers. Epicware&apos;s GEO module fixes that.
            Call <a href="tel:+6590013157" className="underline font-semibold">+65 9001 3157</a> or book a demo.
          </>
        }
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo" }}
        ctaSecondary={{ label: "Get Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "GEO · AEO · AI Overviews",
          "Only Platform in SG for AI Visibility",
          "Singapore-Built",
          "Self-Serve · No Agency",
        ]}
        overlayClass="bg-gradient-to-r from-[#0d0a1a]/90 via-[#0d0a1a]/70 to-[#0d0a1a]/40"
        imageSrc="/assets/epicseo-screen.png"
      />

      {/* Opening paragraph */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            The way people find local businesses is changing faster than most SMB owners realise.
            Google&apos;s AI Overviews now appear above the traditional blue links for many local queries.
            ChatGPT answers &ldquo;best clinic near Bedok MRT&rdquo; with a specific recommendation, not a list of
            websites to visit. Perplexity tells users which restaurants in Jurong are worth trying.
            These AI systems do not pull answers from Google rankings — they pull from structured data,
            citations, and authoritative sources across the web. If your business has not been built into
            those sources, you do not exist in the answers. Traditional SEO gets you onto Google&apos;s first
            page. GEO gets you cited when AI systems answer the question directly.
          </p>
        </div>
      </section>

      {/* H2: What problems */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            What AI Visibility Problems Are You Facing?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              The biggest problem is not knowing this gap exists. Most Singapore SMBs are still optimising
              entirely for traditional Google ranking — and traditional ranking still matters. But AI-generated
              answers are now appearing at the very top of results pages, and businesses that do not appear in
              those answers miss the customer before they ever reach the blue links.
            </p>
            <p>
              The second problem is that the rules for AI visibility are different from traditional SEO.
              Keyword density and backlinks matter far less. Structured data, factual consistency across
              platforms, and citations in authoritative sources matter far more. AI systems need to be able
              to extract clear, unambiguous information about your business — what you do, where you are,
              what makes you different — from multiple corroborating sources before they will cite you in an answer.
            </p>
            <p>
              Most businesses in Singapore have not even started thinking about this. That is both a problem
              and an opportunity. The businesses that build AI visibility now will dominate AI-generated local
              answers before competitors realise what happened.
            </p>
          </div>
        </div>
      </section>

      {/* H2: Our Services */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Our AI &amp; GEO Visibility Services
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Epicware&apos;s AI visibility module starts with{" "}
              <Link href="/ai-search-visibility-singapore/geo-optimisation" className="text-primary font-medium hover:underline">
                GEO / AI Overview Optimisation
              </Link>
              . This is the process of structuring your online presence so that Google&apos;s AI, ChatGPT,
              and Perplexity can confidently recommend your business in response to local intent queries.
              It covers structured data markup, content formatting, and making sure every key fact about
              your business is consistently stated across every platform that AI systems use as a source.
            </p>
            <p>
              Supporting that is{" "}
              <Link href="/ai-search-visibility-singapore/ai-citation-building" className="text-primary font-medium hover:underline">
                AI Citation Building
              </Link>
              . Just as traditional local SEO requires citations in directories to build Google&apos;s trust
              in your NAP data, AI citation building places your business in the platforms, publications,
              and structured data sources that AI systems use as inputs. The goal is to make your business
              appear as a credible, verifiable answer to relevant local queries — cited by multiple independent sources.
            </p>
            <p>
              Completing the module is{" "}
              <Link href="/ai-search-visibility-singapore/aeo" className="text-primary font-medium hover:underline">
                AEO (Answer Engine Optimisation)
              </Link>
              . AEO focuses specifically on making your content answerable — structuring information so AI
              engines can extract clear answers to questions like &ldquo;which hair salon in Tampines has the
              best reviews?&rdquo; or &ldquo;what is the best GP clinic near Woodlands MRT?&rdquo;
              This requires specific schema markup, FAQ structures, and content that speaks directly to
              the questions your target customers are already asking AI tools.
            </p>
          </div>
        </div>
      </section>

      {/* H2: For Singapore */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            AI Search Visibility for Singapore SMBs
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Singapore is an early adopter market. ChatGPT usage is high. Google AI Overviews are already
              showing for local queries. Perplexity is gaining users who want direct answers instead of
              link lists. The window to get ahead of this is now — before every competitor in your district
              has also optimised for AI answers.
            </p>
            <p>
              AI-generated answers for Singapore queries reference Singapore-specific sources: local review
              platforms, local news sites, structured business directories, and Google Business Profiles.
              Epicware builds visibility in exactly these sources — the ones that Singapore-focused AI
              queries draw from — not generic global directories that carry no weight in local responses.
              Clients across Singapore, Malaysia, UAE, UK, and the US use Epicware&apos;s GEO module to build
              AI-visible businesses in their local markets.
            </p>
          </div>
        </div>
      </section>

      {/* H2: Why Choose Us */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Why Choose Epicware for AI &amp; GEO Visibility
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              GEO and AEO are not services most Singapore agencies offer yet. Some will add them to a proposal
              as a buzzword. Epicware has built a dedicated module because we use it ourselves — this site
              is optimised for AI search, and the platform reflects what actually works based on real testing.
            </p>
            <p>
              We built the platform with a Singapore focus from day one: Singapore business categories,
              Singapore-specific data sources, and Singapore local query patterns. No US tool re-skinned
              for Asia. The team behind Epicware exited NinjaOS in 2021 after building a product used by
              hundreds of Singapore F&amp;B businesses — we understand this market specifically.{" "}
              <Link href="/" className="text-primary font-medium hover:underline">
                See the full Epicware platform
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <ServicesGrid
        heading="All AI & GEO Visibility Services"
        services={CHILD_SERVICES}
      />

      <FinalCTA />
    </>
  );
}

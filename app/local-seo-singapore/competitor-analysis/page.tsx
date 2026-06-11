import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "Competitor Analysis Singapore — See Why Competitors Outrank You | Epicware",
  description:
    "Per-keyword, per-district competitor analysis showing exactly why businesses rank above you on Google Maps — and how to close the gap.",
  alternates: { canonical: "https://www.epicware.ai/local-seo-singapore/competitor-analysis" },
  openGraph: {
    title: "Competitor Analysis Singapore | Epicware",
    description: "See exactly why competitors outrank you on Google Maps and how to close the gap.",
    url: "https://www.epicware.ai/local-seo-singapore/competitor-analysis",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Competitor Analysis Singapore",
  serviceType: "Competitor Analysis",
  description: "Per-keyword, per-district competitor analysis for Singapore local SEO.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/local-seo-singapore/competitor-analysis",
};

export default function CompetitorAnalysisPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="COMPETITOR ANALYSIS · LOCAL SEO"
      h1="Competitor Analysis Singapore — Understand Why Competitors Rank Above You"
      subtitle="The businesses ranking above you on Google Maps are doing specific things your profile isn't. Epicware's competitor analysis shows you exactly what they're doing differently — so you can close the gap."
      trustSignals={["Per-Keyword Comparison", "District-Level Insights", "Singapore-Built", "Powered by EpicMap"]}
      imageSrc="/assets/epicmap-before-after.png"
      openingParagraph="If you are not in the Google Maps 3-Pack for your main keywords, there are 3 businesses ranking above you. Each of them is doing something better — more reviews, higher rating, more complete GBP, more recent posts, or stronger citation consistency. Without knowing which of these factors is driving the gap, you cannot fix it efficiently."
      whenTitle="When You Need Competitor Analysis"
      whenContent={
        <div className="space-y-4">
          <p>
            Competitor analysis is most valuable when you have already fixed the basics of your own GBP and you need
            to understand why you are still being outranked. It is also essential when you are entering a new district
            or category — knowing the competitive landscape before you optimise means your efforts target the right gaps.
          </p>
          <p>
            For multi-outlet businesses, competitors differ by location. The analysis runs per outlet so you see the
            specific competitive picture for each district, not a generic overview.
          </p>
        </div>
      }
      howTitle="How Epicware Handles Competitor Analysis"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware pulls the rank position, review count, average rating, recent posting frequency, and GBP
            completeness score for your top 3 competitors per keyword per district. The platform shows a side-by-side
            comparison so you can see exactly where you fall short.
          </p>
          <p>
            <Link href="/products/epicmap" className="text-primary font-medium hover:underline">EpicMap</Link>{" "}
            updates this data weekly — so when you close a gap (add 20 reviews, fix your categories, increase posting
            frequency), you see the rank movement against your competitors the following week.
          </p>
        </div>
      }
      pricingContent={
        <p>
          Competitor Analysis is included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/local-seo-singapore"
      parentLabel="Local SEO Singapore"
      parentSentence={
        <>
          Competitor Analysis is part of Epicware&apos;s{" "}
          <Link href="/local-seo-singapore" className="text-primary font-medium hover:underline">
            Local SEO Singapore
          </Link>{" "}
          service category and is powered by{" "}
          <Link href="/products/epicmap" className="text-primary font-medium hover:underline">EpicMap</Link>.
        </>
      }
    />
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "GEO Optimisation Singapore — Appear in Google AI Overviews | Epicware",
  description:
    "Optimise your content and GBP to appear in Google's AI Overviews for Singapore local searches. Structure your presence for the AI-generated answer panel.",
  alternates: { canonical: "https://www.epicware.ai/ai-search-visibility-singapore/geo-optimisation" },
  openGraph: {
    title: "GEO Optimisation Singapore | Epicware",
    description: "Optimise your content to appear in Google's AI-generated search answers.",
    url: "https://www.epicware.ai/ai-search-visibility-singapore/geo-optimisation",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GEO Optimisation Singapore",
  serviceType: "GEO Optimisation",
  description: "Content and GBP optimisation for Google AI Overviews and AI-generated local search answers in Singapore.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/ai-search-visibility-singapore/geo-optimisation",
};

export default function GeoOptimisationPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="GEO OPTIMISATION · AI VISIBILITY"
      h1="GEO Optimisation Singapore — Get Your Business Into Google's AI Search Answers"
      subtitle="Google's AI Overviews now answer local Singapore searches directly on the results page. If your content isn't structured for these AI-generated answers, you're invisible to users who never scroll past the AI panel."
      trustSignals={["AI Overview Optimisation", "Content Structuring", "Singapore-Built", "GEO-Native"]}
      imageSrc="/assets/hero-image.jpg"
      openingParagraph="Google AI Overviews appear at the top of search results for informational and local queries. When a Singapore user searches for a local service, the AI generates a direct answer before the standard results. If your business is not cited in that answer, users may never see your listing."
      whenTitle="When You Need GEO Optimisation"
      whenContent={
        <div className="space-y-4">
          <p>
            Google AI Overviews appear at the top of search results for informational and local queries. When a
            Singapore user searches &ldquo;best dentist for children in Tampines&rdquo; or &ldquo;where to get bad
            review removed Singapore,&rdquo; the AI generates a direct answer before the standard search results.
            If your business or content is not cited in that answer, users may never see your listing.
          </p>
          <p>
            GEO optimisation is most important for businesses in competitive local categories where AI Overviews now
            appear regularly — healthcare, legal, F&amp;B, education, and professional services.
          </p>
        </div>
      }
      howTitle="How Epicware Handles GEO Optimisation"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware structures your web content and GBP information to match the patterns Google&apos;s AI uses to
            generate its overview answers. This includes question-answer formatted content on your pages, structured
            data markup (schema.org), GBP Q&amp;A section optimisation, and citation building on authority sources
            that AI systems reference.
          </p>
          <p>
            The optimisation is iterative — we monitor which queries are generating AI Overviews for your category
            and update your content to match the signals those answers are built on.
          </p>
        </div>
      }
      pricingContent={
        <p>
          GEO Optimisation is available on Epicware&apos;s Growth plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/ai-search-visibility-singapore"
      parentLabel="AI & GEO Visibility Singapore"
      parentSentence={
        <>
          GEO Optimisation is part of Epicware&apos;s{" "}
          <Link href="/ai-search-visibility-singapore" className="text-primary font-medium hover:underline">
            AI &amp; GEO Visibility Singapore
          </Link>{" "}
          service category.
        </>
      }
    />
  );
}

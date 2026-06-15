import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "AI Citation Building Singapore — ChatGPT & Perplexity | Epicware",
  description:
    "Build your business presence on the sources AI systems trust — so you get cited when ChatGPT, Perplexity, and Google AI answer local Singapore questions.",
  alternates: { canonical: "https://www.epicware.ai/ai-search-visibility-singapore/ai-citation-building" },
  openGraph: {
    title: "AI Citation Building Singapore | Epicware",
    description: "Get your business cited by ChatGPT, Perplexity, and Google AI.",
    url: "https://www.epicware.ai/ai-search-visibility-singapore/ai-citation-building",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Citation Building Singapore",
  serviceType: "AI Citation Building",
  description: "Building business presence on AI-trusted sources for ChatGPT, Perplexity, and Google AI citations in Singapore.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/ai-search-visibility-singapore/ai-citation-building",
};

export default function AiCitationBuildingPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="AI CITATION BUILDING · GEO"
      h1="AI Citation Building Singapore — Get Your Business Cited by AI Systems"
      subtitle="When ChatGPT, Perplexity, and Google AI answer local Singapore questions, they cite specific sources. Epicware builds your presence on the sources AI systems trust — so your business appears when AI answers your category's questions."
      trustSignals={["ChatGPT Visibility", "Perplexity Optimisation", "Singapore-Built", "Authority Source Building"]}
      imageSrc="/assets/hero-image.jpg"
      openingParagraph="AI language models answer questions based on the sources they reference. If your business is not mentioned on the directories, review sites, and authority platforms that AI systems draw from, you will not be cited when these systems answer questions about your category in Singapore."
      whenTitle="When You Need AI Citation Building"
      whenContent={
        <div className="space-y-4">
          <p>
            AI citation building matters most for businesses in categories where customers increasingly ask AI
            assistants for recommendations — restaurants, clinics, legal services, financial advisors, and home
            services.
          </p>
          <p>
            If a potential customer asks ChatGPT &ldquo;best clinic in Ang Mo Kio for sports injuries&rdquo; and your
            clinic is not mentioned in any source that ChatGPT draws from, you don&apos;t exist in that answer. The
            businesses that appear are there because their information is present on the sources AI systems trust.
          </p>
        </div>
      }
      howTitle="How Epicware Handles AI Citation Building"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware audits which sources AI systems are currently drawing from for your category in Singapore, then
            builds your presence on those specific platforms. This includes review profiles on platforms AI systems
            trust (Google, Facebook, industry-specific directories), structured business information on authority
            aggregators, and strategically placed content on sources that appear in AI answers for your keywords.
          </p>
          <p>
            The result is your business being mentioned — and eventually cited — when AI systems answer questions
            about your service category in Singapore.
          </p>
        </div>
      }
      pricingContent={
        <p>
          AI Citation Building is available on Epicware&apos;s Growth plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/ai-search-visibility-singapore"
      parentLabel="AI & GEO Visibility Singapore"
      parentSentence={
        <>
          AI Citation Building is part of Epicware&apos;s{" "}
          <Link href="/ai-search-visibility-singapore" className="text-primary font-medium hover:underline">
            AI &amp; GEO Visibility Singapore
          </Link>{" "}
          service category.
        </>
      }
    />
  );
}

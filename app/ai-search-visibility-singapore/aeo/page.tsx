import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "AEO Singapore — Answer Engine Optimisation",
  description:
    "Structure your online presence so AI assistants recommend your business by name. Answer Engine Optimisation for Singapore SMBs.",
  alternates: { canonical: "https://www.epicware.ai/ai-search-visibility-singapore/aeo" },
  openGraph: {
    title: "AEO Singapore — Answer Engine Optimisation | Epicware",
    description: "Structure your online presence so AI assistants recommend your business by name.",
    url: "https://www.epicware.ai/ai-search-visibility-singapore/aeo",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AEO Singapore",
  serviceType: "Answer Engine Optimisation",
  description: "Answer Engine Optimisation (AEO) for Singapore businesses — structured data, content structuring, and reputation signals for AI assistants.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/ai-search-visibility-singapore/aeo",
};

export default function AeoPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="AEO · ANSWER ENGINE OPTIMISATION"
      h1="AEO Singapore — Structure Your Content So AI Recommends Your Business"
      subtitle="Answer Engine Optimisation (AEO) structures your online presence so that when someone asks ChatGPT, Siri, or Google AI 'who is the best [your business type] in Singapore,' your business is the answer."
      trustSignals={["Voice Search Ready", "AI Answer Optimised", "Singapore-Built", "Structured Data"]}
      imageSrc="/assets/hero-image.jpg"
      openingParagraph="Voice search and AI assistants are changing how Singapore customers find local businesses. Instead of typing 'dentist near me' into Google, customers are asking AI systems for a recommendation by name. The AI needs to understand your business, your speciality, your location, and your credibility to include you in its answer."
      whenTitle="When You Need AEO"
      whenContent={
        <div className="space-y-4">
          <p>
            Businesses without structured data, incomplete GBP profiles, and no presence on authority review
            platforms are invisible to AI assistants. AEO matters most for businesses in categories where customers
            ask AI for recommendations before searching — healthcare, F&amp;B, professional services, and home
            services in Singapore.
          </p>
          <p>
            If your competitors are appearing when customers ask AI assistants for category recommendations and you
            are not, AEO addresses the structural gaps that are causing that invisibility.
          </p>
        </div>
      }
      howTitle="How Epicware Handles AEO"
      howContent={
        <div className="space-y-4">
          <p>
            AEO covers three layers: structured data markup on your website (schema.org LocalBusiness, Service, FAQ
            schemas) that tells AI systems exactly who you are and what you offer; content structuring that answers
            the specific questions AI systems are being asked about your category in Singapore; and reputation
            building on platforms AI systems reference as credible sources.
          </p>
          <p>
            The combination creates a clear, machine-readable picture of your business that AI assistants can
            confidently cite.
          </p>
        </div>
      }
      pricingContent={
        <p>
          AEO is available on Epicware&apos;s Growth plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/ai-search-visibility-singapore"
      parentLabel="AI & GEO Visibility Singapore"
      parentSentence={
        <>
          AEO is part of Epicware&apos;s{" "}
          <Link href="/ai-search-visibility-singapore" className="text-primary font-medium hover:underline">
            AI &amp; GEO Visibility Singapore
          </Link>{" "}
          service category.
        </>
      }
    />
  );
}

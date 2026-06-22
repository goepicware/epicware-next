import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "Citation Building Singapore — Local Directory NAP",
  description:
    "Fix inconsistent business listings across 40+ Singapore directories. NAP consistency is a hidden rank factor most SMBs overlook.",
  alternates: { canonical: "https://www.epicware.ai/local-seo-singapore/citation-building" },
  openGraph: {
    title: "Citation Building Singapore | Epicware",
    description: "Fix inconsistent business listings across 40+ Singapore directories.",
    url: "https://www.epicware.ai/local-seo-singapore/citation-building",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Citation Building Singapore",
  serviceType: "Citation Building",
  description: "NAP consistency audit and citation building across 40+ Singapore local directories.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/local-seo-singapore/citation-building",
};

export default function CitationBuildingPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="CITATION BUILDING · LOCAL SEO"
      h1="Citation Building Singapore — Fix Your Business Listings Across Every Directory"
      subtitle="Inconsistent business information across Singapore's local directories is a hidden rank penalty. Epicware audits and corrects your citations across 40+ directories — so Google has consistent signals to rank you on."
      trustSignals={["40+ Directories Covered", "NAP Consistency", "Singapore-Built", "Automated Monitoring"]}
      imageSrc="/assets/epicmap-before-after.png"
      openingParagraph="If your business name, address, or phone number appears differently on Yelp, Yellow Pages, Singapore Business Review, or other local directories, Google receives conflicting signals about your business identity. This inconsistency reduces the confidence Google has in your listing, which suppresses rank."
      whenTitle="When You Need Citation Building"
      whenContent={
        <div className="space-y-4">
          <p>
            Common issues: address formatted differently (Road vs Rd, #01-01 vs 01-01), old phone numbers from a
            previous location, different trading names used across different platforms, or missing listings on key
            Singapore directories. Each inconsistency is a signal Google must reconcile — and unresolved
            inconsistencies reduce rank confidence.
          </p>
          <p>
            For businesses that have recently changed address, phone number, or business name, citation building is
            critical. The change must propagate correctly across the web or your rank will be held back by the
            conflicting old information.
          </p>
        </div>
      }
      howTitle="How Epicware Handles Citation Building"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware audits your existing citations across 40+ Singapore-relevant directories, identifies
            inconsistencies, and corrects them to match your primary GBP information. New citations are built on
            directories where your business is missing.
          </p>
          <p>
            The platform monitors citations monthly and flags any new inconsistencies that appear. For businesses that
            have recently changed address, phone number, or business name, citation building ensures the change
            propagates correctly across the web.
          </p>
        </div>
      }
      pricingContent={
        <p>
          Citation Building is included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/local-seo-singapore"
      parentLabel="Local SEO Singapore"
      parentSentence={
        <>
          Citation Building is part of Epicware&apos;s{" "}
          <Link href="/local-seo-singapore" className="text-primary font-medium hover:underline">
            Local SEO Singapore
          </Link>{" "}
          service category.
        </>
      }
    />
  );
}

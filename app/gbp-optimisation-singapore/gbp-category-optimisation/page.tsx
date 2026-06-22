import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "GBP Category Optimisation Singapore",
  description:
    "Your primary GBP category is the most important rank factor. Epicware audits and corrects your primary and secondary categories for maximum Singapore Maps rank.",
  alternates: { canonical: "https://www.epicware.ai/gbp-optimisation-singapore/gbp-category-optimisation" },
  openGraph: {
    title: "GBP Category Optimisation Singapore | Epicware",
    description: "Fix your primary and secondary GBP categories for maximum Google Maps rank.",
    url: "https://www.epicware.ai/gbp-optimisation-singapore/gbp-category-optimisation",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GBP Category Optimisation Singapore",
  serviceType: "GBP Category Optimisation",
  description: "Primary and secondary Google Business Profile category optimisation for Singapore SMBs.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/gbp-optimisation-singapore/gbp-category-optimisation",
};

export default function GbpCategoryOptimisationPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="GBP CATEGORIES · GBP OPTIMISATION"
      h1="GBP Category Optimisation Singapore — The Most Important GBP Rank Factor"
      subtitle="Your primary Google Business category is the single most important choice you make for local SEO. Most Singapore SMBs choose the wrong one — or miss the secondary categories that capture additional search intent."
      trustSignals={["Primary + Secondary Categories", "Singapore-Specific Research", "Rank Impact #1", "Singapore-Built"]}
      imageSrc="/assets/epicmap-before-after.png"
      openingParagraph="Google Maps rank is filtered by category first, then by proximity, relevance, and prominence. If your primary category doesn't match what customers search for, you don't appear regardless of how well optimised everything else is."
      whenTitle="Why Categories Make or Break Your GBP Rank"
      whenContent={
        <div className="space-y-4">
          <p>
            A restaurant that categorises as &ldquo;Food&rdquo; instead of &ldquo;Restaurant&rdquo; misses 80% of
            the searches that category captures. A dental clinic categorised only as &ldquo;Dentist&rdquo; misses
            searches for &ldquo;orthodontist,&rdquo; &ldquo;Invisalign provider,&rdquo; and &ldquo;paediatric
            dentist&rdquo; that could be captured via secondary categories.
          </p>
          <p>
            Most SMBs pick categories once during setup and never revisit them. Category review is one of the
            highest-impact, lowest-effort changes you can make to your GBP rank.
          </p>
        </div>
      }
      howTitle="How Epicware Handles Category Optimisation"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware audits your current primary and secondary category choices against the highest-volume search
            terms in your area and category. We research which categories your top-ranking competitors use, then
            recommend changes that maximise your search coverage without misrepresenting your business.
          </p>
          <p>
            Incorrect categorisation risks GBP suspension — Epicware&apos;s recommendations stay within
            Google&apos;s category policy guidelines. After category changes are applied,{" "}
            <Link href="/products/epicmap" className="text-primary font-medium hover:underline">EpicMap</Link>{" "}
            tracks rank movement so you see the impact within the next weekly update.
          </p>
        </div>
      }
      pricingContent={
        <p>
          GBP Category Optimisation is included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/gbp-optimisation-singapore"
      parentLabel="GBP Optimisation Singapore"
      parentSentence={
        <>
          GBP Category Optimisation is part of Epicware&apos;s{" "}
          <Link href="/gbp-optimisation-singapore" className="text-primary font-medium hover:underline">
            GBP Optimisation Singapore
          </Link>{" "}
          service.
        </>
      }
    />
  );
}

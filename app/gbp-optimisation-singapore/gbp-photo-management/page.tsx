import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "GBP Photo Management Singapore — Optimise Your Google Business Photos | Epicware",
  description:
    "Google uses photo count and recency as rank signals. Epicware manages your GBP photo library with geo-tagged uploads and regular refresh to keep your profile active.",
  alternates: { canonical: "https://www.epicware.ai/gbp-optimisation-singapore/gbp-photo-management" },
  openGraph: {
    title: "GBP Photo Management Singapore | Epicware",
    description: "Geo-tagged photo uploads and regular refresh to keep your GBP active.",
    url: "https://www.epicware.ai/gbp-optimisation-singapore/gbp-photo-management",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GBP Photo Management Singapore",
  serviceType: "GBP Photo Management",
  description: "Google Business Profile photo management for Singapore SMBs — geo-tagged uploads, regular refresh, rank optimisation.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/gbp-optimisation-singapore/gbp-photo-management",
};

export default function GbpPhotoManagementPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="GBP PHOTOS · GBP OPTIMISATION"
      h1="GBP Photo Management Singapore — Photos That Rank and Convert"
      subtitle="Google uses photo count, recency, and engagement as rank signals. Businesses with more photos rank better. Epicware manages your GBP photo library — adding, optimising, and refreshing photos to keep your profile active."
      trustSignals={["Photo Count Optimised", "Geo-Tagged Photos", "Regular Refresh Schedule", "Singapore-Built"]}
      imageSrc="/assets/epicmap-before-after.png"
      openingParagraph="Google treats photo activity as a signal of business engagement. Profiles with more photos — and with recent photos added — rank higher than those with few or no photos. Beyond rank, photos directly affect conversion: a restaurant profile with 50+ photos converts significantly better than one with 5 stock images."
      whenTitle="Why GBP Photos Affect Your Rank"
      whenContent={
        <div className="space-y-4">
          <p>
            In Singapore&apos;s competitive local categories, potential customers compare profiles side by side — a
            profile that looks well-maintained with regular photo updates signals an active, trustworthy business.
            A profile with 3 photos uploaded 2 years ago signals the opposite.
          </p>
          <p>
            Photo count thresholds vary by category — a restaurant needs significantly more photos than a
            professional services firm to reach the optimal count. Epicware sets the right target for your category
            and manages toward it systematically.
          </p>
        </div>
      }
      howTitle="How Epicware Handles GBP Photo Management"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware audits your current GBP photo count and recency, then creates a photo upload schedule to bring
            you to the optimal count for your category. Photos are geo-tagged with your business location
            coordinates, which is an additional positive signal.
          </p>
          <p>
            For businesses without a large photo library, Epicware advises on the specific shot types that perform
            best for GBP (exterior, interior, team, product, and in-action shots). Monthly photo refresh ensures
            your profile always has recent additions.
          </p>
        </div>
      }
      pricingContent={
        <p>
          GBP Photo Management is included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/gbp-optimisation-singapore"
      parentLabel="GBP Optimisation Singapore"
      parentSentence={
        <>
          GBP Photo Management is part of Epicware&apos;s{" "}
          <Link href="/gbp-optimisation-singapore" className="text-primary font-medium hover:underline">
            GBP Optimisation Singapore
          </Link>{" "}
          service.
        </>
      }
    />
  );
}

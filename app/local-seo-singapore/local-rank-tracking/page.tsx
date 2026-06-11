import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "Local Rank Tracking Singapore — Google Maps Position Tracking | Epicware",
  description:
    "Visual map grid showing your Google Maps rank across every Singapore district. See exactly where you win and where competitors beat you.",
  alternates: { canonical: "https://www.epicware.ai/local-seo-singapore/local-rank-tracking" },
  openGraph: {
    title: "Local Rank Tracking Singapore | Epicware",
    description: "Visual map grid showing your Google Maps rank across every Singapore district.",
    url: "https://www.epicware.ai/local-seo-singapore/local-rank-tracking",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local Rank Tracking Singapore",
  serviceType: "Local Rank Tracking",
  description: "Visual map grid rank tracking across Singapore districts for Google Maps positions.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/local-seo-singapore/local-rank-tracking",
};

export default function LocalRankTrackingPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="LOCAL RANK TRACKING · LOCAL SEO"
      h1="Local Rank Tracking Singapore — See Exactly Where You Appear on Google Maps"
      subtitle="Google Maps rank varies by location — you can rank 1st in Tampines and 17th in Pasir Ris, 2km away. Epicware's visual map grid shows your rank across every Singapore district so you know exactly where you're winning and where you're not."
      trustSignals={["District-Level Tracking", "Visual Map Grid", "Singapore-Built", "Powered by EpicMap"]}
      imageSrc="/assets/epicmap-before-after.png"
      openingParagraph="If you don't know your Google Maps rank by district, you don't know where you're losing customers. Most Singapore SMBs assume 'I appear on Google' means they are visible everywhere. In reality, Google Maps rank is hyperlocal — it changes every 1–2km based on the searcher's location."
      whenTitle="When You Need Local Rank Tracking"
      whenContent={
        <div className="space-y-4">
          <p>
            A dental clinic in Bishan may rank 3rd for &ldquo;dentist&rdquo; in Bishan but not appear at all in Toa
            Payoh searches, meaning it is invisible to the hundreds of HDB residents who search from Toa Payoh daily.
            Without rank tracking, you cannot measure whether your optimisation efforts are working.
          </p>
          <p>
            If you are spending time or money on GBP optimisation without tracking your rank by district, you have no
            way to know whether the optimisation is having the intended effect.
          </p>
        </div>
      }
      howTitle="How Epicware Handles Local Rank Tracking"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware&apos;s{" "}
            <Link href="/products/epicmap" className="text-primary font-medium hover:underline">EpicMap</Link>{" "}
            overlays a visual grid across Singapore and shows your rank position at every grid point for your target
            keywords. The map updates weekly so you can see rank movement over time. Each grid point shows your rank,
            the businesses ranked above you, and their profile details — so you understand exactly what you&apos;re
            competing against at each location.
          </p>
          <p>
            Multi-outlet operators see each location&apos;s rank on the same map, making it easy to identify which
            outlets need the most attention.
          </p>
        </div>
      }
      pricingContent={
        <p>
          Local Rank Tracking is included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/local-seo-singapore"
      parentLabel="Local SEO Singapore"
      parentSentence={
        <>
          Local Rank Tracking is part of Epicware&apos;s{" "}
          <Link href="/local-seo-singapore" className="text-primary font-medium hover:underline">
            Local SEO Singapore
          </Link>{" "}
          service category and is powered by the{" "}
          <Link href="/products/epicmap" className="text-primary font-medium hover:underline">EpicMap</Link>{" "}
          product.
        </>
      }
    />
  );
}

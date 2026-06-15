import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "GBP Optimisation Singapore — Business Profile Experts | Epicware",
  description:
    "Complete 19-point Google Business Profile optimisation for Singapore SMBs. Fix every rank factor and track improvement weekly with EpicMap.",
  alternates: { canonical: "https://www.epicware.ai/local-seo-singapore/gbp-optimisation" },
  openGraph: {
    title: "GBP Optimisation Singapore | Epicware",
    description: "Complete 19-point Google Business Profile optimisation for Singapore SMBs.",
    url: "https://www.epicware.ai/local-seo-singapore/gbp-optimisation",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GBP Optimisation Singapore",
  serviceType: "GBP Optimisation",
  description: "Complete Google Business Profile optimisation for Singapore SMBs. 19-point audit and ongoing management.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/local-seo-singapore/gbp-optimisation",
};

export default function GbpOptimisationPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="GBP OPTIMISATION · LOCAL SEO"
      h1="GBP Optimisation Singapore — Complete Google Business Profile Management"
      subtitle="Your Google Business Profile is the primary signal that determines where you appear on Google Maps. An incomplete or poorly optimised profile is invisible to customers searching nearby."
      trustSignals={["19-Point Audit", "Singapore-Built", "Multi-Outlet", "Weekly AI Posts"]}
      imageSrc="/assets/epicmap-before-after.png"
      openingParagraph="Google Maps rank is not a lottery. Every factor that determines whether your business appears in the top 3 — the 3-Pack that captures over 70% of clicks — is documented, measurable, and improvable. Epicware's 19-point audit fixes every gap and tracks your improvement week by week."
      whenTitle="When You Need GBP Optimisation"
      whenContent={
        <div className="space-y-4">
          <p>
            If your business isn&apos;t appearing in the Google Maps 3-Pack for your main keywords, your GBP likely has
            one or more of these issues: incomplete business categories, missing or outdated hours, low photo count, no
            recent posts, or inconsistent NAP information across the web. Each of these is a negative rank signal.
          </p>
          <p>
            Singapore businesses competing in dense categories — F&amp;B, clinics, salons, tuition — need every possible
            advantage because the 3-Pack captures over 70% of clicks. The businesses in those top 3 spots are there by
            intent, not luck.
          </p>
        </div>
      }
      howTitle="How Epicware Handles GBP Optimisation"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware runs a 19-point audit across your GBP profile, scoring each factor by its impact on rank. The
            platform applies fixes directly via API for issues like missing categories, incomplete hours, and outdated
            information. Ongoing optimisation includes weekly AI-generated posts (a freshness signal), monthly citation
            scans, and continuous monitoring of your rank position using{" "}
            <Link href="/products/epicmap" className="text-primary font-medium hover:underline">EpicMap</Link>&apos;s
            visual grid.
          </p>
          <p>
            Multi-outlet operators run the same process across every profile from one account — no separate logins
            per location.
          </p>
        </div>
      }
      pricingContent={
        <p>
          GBP Optimisation is included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/local-seo-singapore"
      parentLabel="Local SEO Singapore"
      parentSentence={
        <>
          GBP Optimisation is part of Epicware&apos;s{" "}
          <Link href="/local-seo-singapore" className="text-primary font-medium hover:underline">
            Local SEO Singapore
          </Link>{" "}
          service category. See also the full{" "}
          <Link href="/gbp-optimisation-singapore" className="text-primary font-medium hover:underline">
            GBP Optimisation Singapore
          </Link>{" "}
          service page and the{" "}
          <Link href="/products/epicmap" className="text-primary font-medium hover:underline">EpicMap</Link>{" "}
          rank tracking product.
        </>
      }
    />
  );
}

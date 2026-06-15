import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "GBP Audit Singapore — 19-Point Business Profile Audit | Epicware",
  description:
    "Find every rank factor you're missing. Epicware's 19-point GBP audit scores every element by impact and gives you an impact-ranked fix list.",
  alternates: { canonical: "https://www.epicware.ai/gbp-optimisation-singapore/gbp-audit" },
  openGraph: {
    title: "GBP Audit Singapore | Epicware",
    description: "19-point GBP audit scoring every rank factor by impact. Fix the highest-value gaps first.",
    url: "https://www.epicware.ai/gbp-optimisation-singapore/gbp-audit",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GBP Audit Singapore",
  serviceType: "GBP Audit",
  description: "19-point Google Business Profile audit for Singapore SMBs — impact-ranked fixes.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/gbp-optimisation-singapore/gbp-audit",
};

export default function GbpAuditPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="GBP AUDIT · GBP OPTIMISATION"
      h1="GBP Audit Singapore — Find Every Rank Factor You're Missing"
      subtitle="Epicware's 19-point GBP audit covers every factor that determines your Google Maps rank. See exactly where your profile falls short — and fix the highest-impact gaps first."
      trustSignals={["19-Point Audit", "Impact-Ranked Fixes", "Singapore-Built", "Multi-Outlet"]}
      imageSrc="/assets/epicmap-before-after.png"
      openingParagraph="Your Google Business Profile has 19 distinct elements that affect how Google ranks you for local searches. Most Singapore SMBs have filled in the basics but leave 10 or more elements incomplete. Incomplete profiles rank lower than complete ones — every gap is a rank disadvantage you are giving to competitors."
      whenTitle="Why a GBP Audit Matters"
      whenContent={
        <div className="space-y-4">
          <p>
            Most SMBs have filled in the basics — business name, category, address — but leave 10 or more elements
            incomplete. Incomplete profiles rank lower than complete ones. The audit identifies every gap: missing
            secondary categories, incomplete business hours for special holidays, low photo count, Q&amp;A section
            empty, services not listed, products missing.
          </p>
          <p>
            Each gap is a rank disadvantage you are giving to competitors who have filled in the same details. The
            audit makes the gap visible — so you know exactly what to fix and in what order.
          </p>
        </div>
      }
      howTitle="How Epicware Handles the GBP Audit"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware&apos;s automated audit runs against your GBP profile and scores each of the 19 factors by its
            impact on rank. Factors are grouped into: Critical (missing primary category, incomplete NAP), High
            (photo count below threshold, no recent posts), Medium (missing Q&amp;A, no products added), and Low
            (attribute gaps, description below optimal length).
          </p>
          <p>
            The audit output is a prioritised action list — you address critical items first, then work down the
            impact scale. For businesses that want Epicware to apply the fixes directly, the platform handles the
            changes via API. Get your{" "}
            <Link href="/audit" className="text-primary font-medium hover:underline">free GBP audit</Link>{" "}
            to see your results immediately.
          </p>
        </div>
      }
      pricingContent={
        <p>
          The GBP Audit is included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/gbp-optimisation-singapore"
      parentLabel="GBP Optimisation Singapore"
      parentSentence={
        <>
          GBP Audit is part of Epicware&apos;s{" "}
          <Link href="/gbp-optimisation-singapore" className="text-primary font-medium hover:underline">
            GBP Optimisation Singapore
          </Link>{" "}
          service. Get a{" "}
          <Link href="/audit" className="text-primary font-medium hover:underline">free GBP audit</Link>{" "}
          to see your results immediately.
        </>
      }
    />
  );
}

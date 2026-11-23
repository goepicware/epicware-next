import type { Metadata } from "next";
import Image from "next/image";
import GuidePage from "@/components/content/GuidePage";

export const metadata: Metadata = {
  title: "Google Review Removal Wins — Case Study",
  description: "Five real Google Business Profile removal confirmations, across different Singapore businesses and violation types, won by Epicware's bad review removal service.",
  alternates: { canonical: "https://www.epicware.ai/case-studies/google-review-removal-wins" },
  openGraph: {
      images: [{ url: "/assets/HeroBanner-og.jpg", width: 1448, height: 1086, alt: "Epicware" }],
    title: "Google Review Removal Wins — Real Removals, Different Industries | Epicware",
    description: "Five real Google Business Profile removal confirmations, across different Singapore businesses and violation types, won by Epicware's bad review removal service.",
    url: "https://www.epicware.ai/case-studies/google-review-removal-wins",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Google Review Removal Wins: Five Real Removals Across Five Different Businesses",
  "description": "Five real Google Business Profile removal confirmations, across different Singapore businesses and violation types, won by Epicware's bad review removal service.",
  "datePublished": "2026-11-23",
  "author": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://www.epicware.ai" },
  "publisher": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://www.epicware.ai" },
  "url": "https://www.epicware.ai/case-studies/google-review-removal-wins"
};

function Proof({ src, w, h, alt, note }: { src: string; w: number; h: number; alt: string; note: string }) {
  return (
    <figure className="not-prose rounded-xl overflow-hidden border border-border/60 bg-card mb-5">
      <Image src={src} alt={alt} width={w} height={h} className="w-full h-auto" loading="lazy" />
      <figcaption className="text-xs text-muted-foreground px-4 py-3 border-t border-border/40">{note}</figcaption>
    </figure>
  );
}

export default function Page() {
  return (
    <GuidePage
      schema={schema}
      badge="CASE STUDY · REVIEW REMOVAL · SINGAPORE"
      h1="Google Review Removal Wins: Five Real Removals Across Five Different Businesses"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Review Removal Wins" },
      ]}
      subtitle="Not every bad review can be removed. These five were — across a pet care clinic, a home furnishings retailer, and other Singapore SMBs, each a different policy violation, each confirmed by Google itself."
      trustSignals={["5 Reviews Removed", "5 Different Businesses", "$200/Review · Refund Guarantee", "All Industries"]}
      imageSrc="/assets/review-management-illustration.png"
      intro={
        <>
          <p>This isn&apos;t one client&apos;s story. It&apos;s a roundup of five separate, real review removals Epicware has won for different Singapore businesses, shown here as Google&apos;s own confirmation emails rather than a claim we&apos;re asking you to take on faith.</p>
          <p>Where a client gave permission to show their business name, it&apos;s visible. Where they preferred not to, the name is cropped out of the screenshot — the reviewer, star rating and review text are untouched either way.</p>
        </>
      }
      body={
        <>
          <h2>Why These Qualified for Removal</h2>
          <p>Google only removes reviews that violate its content policy — a genuine negative opinion from a real customer doesn&apos;t qualify, no matter how harsh. Every review below was removed because it fell into one of a small number of policy categories: no verifiable customer relationship, an anonymous account with no transaction behind it, or a generalised attack with no specific experience described. Epicware&apos;s job is identifying which category a review actually falls into, then submitting the removal request with the correct framing — not just clicking the flag button and hoping.</p>

          <h2>The Removals</h2>

          <Proof
            src="/assets/review-removal-proof/removal-1-pet-budgie.png"
            w={999}
            h={652}
            alt="Google Business Profile email confirming a 1-star review was removed for violating Google's policies"
            note="A pet care business — removed for a policy violation. No verifiable customer relationship behind the review."
          />
          <Proof
            src="/assets/review-removal-proof/removal-2-pet-ambulance.png"
            w={1453}
            h={619}
            alt="Google Business Profile email confirming an anonymous 1-star review was removed for violating Google's policies"
            note="A second pet care business — removed. Posted by an anonymous account with no verifiable transaction."
          />
          <Proof
            src="/assets/review-removal-proof/removal-3-talks-workshops.png"
            w={1177}
            h={649}
            alt="Google Business Profile email confirming a 1-star review was removed for violating Google's policies"
            note="A talks and workshops business — removed. A generalised attack with no specific experience described."
          />
          <Proof
            src="/assets/review-removal-proof/removal-4-cropped.png"
            w={1321}
            h={555}
            alt="Google Business Profile email confirming a 1-star review was removed for violating Google's policies, business name cropped out"
            note="A pet care clinic (business name withheld at the client's request) — removed."
          />
          <Proof
            src="/assets/review-removal-proof/removal-5-cropped.png"
            w={1023}
            h={490}
            alt="Google Business Profile email confirming a 1-star review was removed for violating Google's policies, business name cropped out"
            note="A home furnishings retailer (business name withheld at the client's request) — removed."
          />

          <h2>What This Shows</h2>
          <p>Three things worth noting across these five. First, the violation types differ — no verifiable customer, an anonymous account, a generalised attack — which is the normal spread of what actually gets removed, not a single repeatable trick. Second, the industries differ: pet care, home furnishings, workshops and talks. Bad review removal isn&apos;t industry-specific; the policy violations that qualify for removal show up everywhere. Third, these are Google&apos;s own notification emails, the same one you&apos;d receive yourself if a review on your own profile was removed — not a dashboard screenshot from a tool, and not something we could fabricate.</p>
          <p>Every case here followed the same assessment-first process: identify the specific policy the review violates before submitting anything, since a review filed under the wrong category weakens the request. See the full process on our <a href="/locations/singapore/review-removal">bad review removal service page</a>, or the step-by-step breakdown in our <a href="/resources/guides/bad-review-removal-guide">complete removal guide</a>.</p>
        </>
      }
      ctaHref="/locations/singapore/review-removal"
      ctaLabel="Get a Free Review Assessment"
    />
  );
}

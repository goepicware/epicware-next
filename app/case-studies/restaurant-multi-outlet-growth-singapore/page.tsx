import type { Metadata } from "next";
import GuidePage from "@/components/content/GuidePage";

export const metadata: Metadata = {
  title: "Restaurant Multi-Outlet Growth Singapore — Case Study | Epicware",
  description: "How a Singapore F&B group managing 6 outlets grew from 45 to 200+ reviews per outlet, improved Maps rank, and centralised reputation management with Epicware.",
  alternates: { canonical: "https://www.epicware.ai/case-studies/restaurant-multi-outlet-growth-singapore" },
  openGraph: {
    title: "Restaurant Multi-Outlet Growth Singapore — Google Maps & Reviews Case Study",
    description: "How a Singapore F&B group managing 6 outlets grew from 45 to 200+ reviews per outlet, improved Maps rank, and centralised reputation management with Epicware.",
    url: "https://www.epicware.ai/case-studies/restaurant-multi-outlet-growth-singapore",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How a Singapore Restaurant Group Grew to 200+ Reviews Per Outlet",
  "description": "How a Singapore F&B group managing 6 outlets grew from 45 to 200+ reviews per outlet, improved Maps rank, and centralised reputation management with Epicware.",
  "datePublished": "2026-06-01",
  "author": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://epicware.ai" },
  "publisher": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://epicware.ai" },
  "url": "https://epicware.ai/case-studies/restaurant-multi-outlet-growth-singapore"
};

export default function Page() {
  return (
    <GuidePage
      schema={schema}
      badge="CASE STUDY · F&B SINGAPORE"
      h1="How a Singapore Restaurant Group Grew to 200+ Reviews Per Outlet"
      subtitle="Managing 6 GBP profiles manually across a Singapore F&B group was consuming hours per week and generating zero results. Epicware changed that in 60 days."
      trustSignals={["6 Outlets", "45 → 200+ Reviews", "Multi-Outlet Dashboard", "Real Results"]}
      imageSrc="/assets/review-management-illustration.png"
      intro={
        <>
          <p>A Singapore casual dining group operating 6 outlets across the island — ranging from a hawker court stall to a full-service restaurant in a shopping mall — came to Epicware with a straightforward problem: their Google reviews were inconsistent, their Maps rank was poor, and nobody on the team had time to manage it.</p>
          <p>The group&apos;s most-reviewed outlet had 45 reviews. Their main competitor in the same category had 280. The review gap was visible to every potential customer who searched their category on Google Maps.</p>
        </>
      }
      body={
        <>
          <h2>The Challenge</h2>
          <p>Six outlets across Singapore meant six GBP profiles, each needing monitoring, response, and optimisation. The group&apos;s marketing manager was the sole person responsible for all digital presence — and was spending 6–8 hours per week manually checking profiles, writing review responses, and trying to keep information up to date.</p>
          <p>Despite this time investment, reviews were arriving slowly. There was no systematic ask process. Staff at each outlet occasionally mentioned Google reviews to customers who seemed particularly happy — but &quot;occasionally&quot; and &quot;seemed happy&quot; are not a system.</p>
          <p>The result: the group&apos;s profiles averaged 45 reviews each, with ratings between 4.0 and 4.4. Maps rank for their main keyword sat at positions 5–8 across most of their locations.</p>

          <h2>Attempted Solutions Before Epicware</h2>
          <p>Before approaching Epicware, the group had tried two approaches:</p>
          <ul>
            <li>Printed table cards with QR codes linking to Google reviews. Conversion was low — customers rarely scanned them unprompted, and the cards needed regular replacement.</li>
            <li>Staff verbal reminders at checkout. Inconsistent across outlets and staff — some staff asked frequently, others never did.</li>
          </ul>
          <p>Neither approach generated consistent velocity. Some months saw 5–8 new reviews across all outlets. Other months, 1–2.</p>

          <h2>What Epicware Did</h2>
          <p>Epicware connected to the group&apos;s reservation system and POS across all 6 outlets. When a table was cleared or an order completed, EpicReview automatically sent a personalised WhatsApp message to the customer&apos;s phone number — 30 minutes after service completion, with their name, a reference to their visit, and a direct link to the relevant outlet&apos;s Google review form.</p>
          <p>No staff action required. No manual sending. The system ran automatically at every outlet from day one.</p>
          <p>Simultaneously, Epicware conducted a 19-point GBP audit across all 6 profiles. Four outlets had incorrect secondary categories. Three had incomplete service lists. Two had outdated photos. All were missing weekly GBP posts. These were fixed in the first week.</p>
          <p>EpicResponse was configured to draft and post AI review responses across all outlets — ensuring every new review received a reply within 24 hours regardless of which outlet it appeared on.</p>

          <h2>Results at 60 Days</h2>
          <ul>
            <li><strong>Review count:</strong> Average reviews per outlet grew from 45 to 120 in 60 days. By day 90, the average reached 200+.</li>
            <li><strong>Review velocity:</strong> The group went from 5–8 new reviews per month across all outlets to 80–100 per month — distributed across all 6 profiles.</li>
            <li><strong>Maps rank:</strong> 4 of 6 outlets moved from position 5–8 to positions 2–4 for their main keyword. The two remaining outlets (in highly competitive areas) improved from positions 8–10 to positions 5–6.</li>
            <li><strong>Rating:</strong> Average rating across outlets improved from 4.15 to 4.45 — primarily because the new reviews were from satisfied customers who, when asked, gave honest positive feedback.</li>
            <li><strong>Management time:</strong> The marketing manager&apos;s weekly time on GBP management dropped from 6–8 hours to under 30 minutes — reviewing flagged reviews and approving AI-drafted responses.</li>
          </ul>

          <h2>What the Client Said</h2>
          <p>&quot;We knew reviews mattered but had no bandwidth to do it properly. Epicware just runs in the background — I check in once a week to review anything that needs attention. The results were faster than I expected.&quot;</p>

          <h2>What&apos;s Next</h2>
          <p>The group is now in the process of onboarding EpicMap to track district-level rank for each outlet — identifying specific geographic pockets where rank is still below position 3 and targeting GBP post content at those areas. Two outlets have also engaged Epicware&apos;s bad review removal service for reviews assessed as competitor-posted.</p>
        </>
      }
      ctaHref="/industries/restaurants"
      ctaLabel="Local SEO for F&B Restaurants"
    />
  );
}

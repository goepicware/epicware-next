import type { Metadata } from "next";
import GuidePage from "@/components/content/GuidePage";

export const metadata: Metadata = {
  title: "Salon Local SEO Singapore — Google Maps Case Study | Epicware",
  description: "How a Singapore hair salon chain improved their Google Maps rank and grew to 150+ reviews per outlet using Epicware's review generation and GBP optimisation.",
  alternates: { canonical: "https://www.epicware.ai/case-studies/salon-whatsapp-automation" },
  openGraph: {
    title: "Salon Local SEO & Reviews Singapore — Google Maps Rank Case Study",
    description: "How a Singapore hair salon chain improved their Google Maps rank and grew to 150+ reviews per outlet using Epicware's review generation and GBP optimisation.",
    url: "https://www.epicware.ai/case-studies/salon-whatsapp-automation",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How a Singapore Salon Chain Grew to 150+ Reviews and Ranked in the Top 3",
  "description": "How a Singapore hair salon chain improved their Google Maps rank and grew to 150+ reviews per outlet using Epicware's review generation and GBP optimisation.",
  "datePublished": "2026-06-01",
  "author": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://epicware.ai" },
  "publisher": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://epicware.ai" },
  "url": "https://epicware.ai/case-studies/salon-whatsapp-automation"
};

export default function Page() {
  return (
    <GuidePage
      schema={schema}
      badge="CASE STUDY · HAIR SALONS · SINGAPORE"
      h1="How a Singapore Salon Chain Grew to 150+ Reviews and Ranked in the Top 3"
      subtitle="A 4-outlet Singapore hair salon chain was ranking 7th on Google Maps for their main keyword. Low review count and an incomplete GBP profile were holding them back. Epicware fixed both in 90 days."
      trustSignals={["4 Outlets", "Rank 7 → Top 3", "30 → 150+ Reviews", "Multi-Outlet Dashboard"]}
      imageSrc="/assets/review-management-illustration.png"
      intro={
        <>
          <p>A Singapore hair salon group with 4 outlets — in Orchard, Toa Payoh, Bedok, and Jurong — had built a loyal client base over 6 years. Their stylists were skilled, their pricing competitive, and their repeat client rate high. But their Google Maps presence was not matching their actual quality.</p>
          <p>The group&apos;s best-performing outlet had 30 Google reviews. Their main competitor in the Orchard area had over 200. When a potential new client searched &quot;hair salon Orchard&quot;, the group&apos;s outlet appeared at position 7 — below the fold of most mobile screens.</p>
        </>
      }
      body={
        <>
          <h2>Root Cause Analysis</h2>
          <p>Epicware conducted a GBP audit across all 4 outlets. The findings identified two primary issues:</p>
          <ul>
            <li><strong>Review count gap:</strong> 30 reviews at the best outlet, 12–18 at the others. Competitors in the same neighbourhoods had 120–250 reviews. No review generation system was in place — stylists occasionally reminded clients verbally, which generated inconsistent results.</li>
            <li><strong>GBP profile gaps:</strong> All 4 profiles had incorrect secondary categories (missing &quot;Hairdresser&quot; and &quot;Hair Colouring Specialist&quot; categories). Services lists were incomplete — popular services like balayage, keratin treatment, and scalp treatment were not listed. Photo libraries were thin (3–5 photos per outlet). No GBP posts had been published in over 8 months.</li>
          </ul>
          <p>The combination of low review count and incomplete profiles meant the algorithm had limited information to determine relevance and prominence — both required for top-3 rank.</p>

          <h2>What Epicware Did: Month 1</h2>
          <p>GBP profile corrections were implemented in week 1: correct primary and secondary categories, full service lists with descriptions for all offered services, updated photo libraries (15+ photos per outlet including exterior, interior, styling stations, and before/after examples), and corrected operating hours.</p>
          <p>EpicReview was integrated with the salon&apos;s booking system. The trigger: when a client&apos;s appointment was marked complete, a WhatsApp message was sent 30–45 minutes later — at the moment the client had left the salon and was likely to be sharing or reviewing their result.</p>
          <p>The message was personalised: the client&apos;s name, a reference to the service they received (&quot;glad you loved your balayage today&quot;), and a direct link to the specific outlet&apos;s Google review form.</p>

          <h2>Month 2: Velocity and Response</h2>
          <p>By the end of week 2, the system was generating 15–25 new reviews per week across all 4 outlets combined. This was a 10x increase on the previous ad hoc rate.</p>
          <p>EpicResponse was configured to draft responses to every incoming review. For salon reviews, the AI was tuned to include natural service references (&quot;so happy you loved the balayage finish&quot;, &quot;your keratin result was stunning&quot;) — reinforcing relevant keywords in the review section without sounding scripted.</p>
          <p>Weekly GBP posts were scheduled — promotional content for seasonal treatments, before/after results with client permission, and staff spotlight posts. Each post increased profile activity signals.</p>

          <h2>Month 3: Results</h2>
          <p>At the 90-day mark:</p>
          <ul>
            <li><strong>Review count:</strong> Orchard outlet grew from 30 to 165 reviews. Toa Payoh from 18 to 127. Bedok from 12 to 98. Jurong from 15 to 112.</li>
            <li><strong>Maps rank:</strong> Orchard outlet moved from position 7 to position 2 for &quot;hair salon Orchard.&quot; Toa Payoh and Jurong both reached position 3. Bedok moved from position 8 to position 4.</li>
            <li><strong>Rating:</strong> Average across all outlets moved from 4.1 to 4.5. The higher volume of incoming reviews from satisfied clients naturally improved the average.</li>
            <li><strong>New client enquiries:</strong> The group reported a 35% increase in calls and walk-ins from new clients specifically mentioning they &quot;found us on Google.&quot;</li>
          </ul>

          <h2>What&apos;s Next</h2>
          <p>The salon group is now exploring Epicware&apos;s EpicSocial product to manage Instagram content across their 4 outlets from the same dashboard — creating a unified content strategy that reinforces their Google presence with social proof from before/after salon photos and client features.</p>
          <p>EpicMap was recently onboarded to track rank at a grid level across each outlet&apos;s district — identifying the specific streets and MRT catchment zones where rank still falls below position 3.</p>
        </>
      }
      ctaHref="/industries/nail-hair-salons"
      ctaLabel="Local SEO for Hair & Beauty Salons"
    />
  );
}

import type { Metadata } from "next";
import BlogArticle from "@/components/blog/BlogArticle";

export const metadata: Metadata = {
  title: "Review Gating Explained — What It Is and Why It Violates Google Policy | Epicware",
  description: "Review gating is the practice of only directing happy customers to Google reviews. It violates Google policy and can get your profile suspended.",
  alternates: { canonical: "https://www.epicware.ai/resources/blog/review-gating-explained" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Review Gating Explained — What It Is and Why Google Bans It",
  "description": "Review gating is the practice of only directing happy customers to Google reviews. It violates Google policy and can get your profile suspended.",
  "datePublished": "2026-06-01",
  "author": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://epicware.ai" },
  "publisher": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://epicware.ai" },
  "url": "https://epicware.ai/resources/blog/review-gating-explained"
};

export default function Post() {
  return (
    <BlogArticle
      schema={schema}
      badge="REVIEW POLICY"
      h1="Review Gating Explained — What It Is and Why Google Bans It"
      publishDate="June 2026"
      readTime="4 min read"
      intro={
        <>
          <p>Review gating is the practice of screening customers before directing them to leave a public Google review — routing satisfied customers toward the review form while directing dissatisfied customers away from it. The intent is to generate a skewed pool of positive reviews while suppressing negative feedback.</p>
          <p>It violates Google&apos;s review policies. It has done so explicitly since 2018, when Google updated its guidelines to prohibit the practice. Despite this, review gating remains common — often implemented by businesses that don&apos;t realise their feedback flow is non-compliant.</p>
        </>
      }
      body={
        <>
          <h2>What Review Gating Looks Like in Practice</h2>
          <p>Review gating takes several forms:</p>
          <ul>
            <li><strong>The two-step survey:</strong> A customer receives a message asking &quot;How satisfied were you with your experience? Rate 1–5.&quot; Customers who respond 4–5 are sent a Google review link. Customers who respond 1–3 are sent a private feedback form instead.</li>
            <li><strong>The satisfaction question:</strong> A staff member asks &quot;Were you happy with everything today?&quot; Only customers who say yes are handed a QR code or told about Google reviews.</li>
            <li><strong>The conditional ask:</strong> Review request messages that begin with &quot;If you were happy with your visit, we&apos;d love a Google review.&quot; The conditional phrasing effectively gates by implied satisfaction.</li>
            <li><strong>Selective outreach:</strong> A business manually selects which customers to send review requests to — choosing only those it believes had positive experiences.</li>
          </ul>
          <p>All of these patterns violate Google&apos;s policy on the same grounds: they create a non-representative sample of reviews by filtering which customers are given the opportunity to leave one.</p>

          <h2>Why Google Bans It</h2>
          <p>Google&apos;s review system exists to provide consumers with accurate information about businesses. A review profile shaped by gating is not an accurate representation — it&apos;s a curated highlight reel. Google&apos;s policy states that you &quot;shouldn&apos;t discourage or prohibit negative reviews or selectively solicit positive reviews.&quot;</p>
          <p>The policy applies regardless of intent. A business that gates reviews to protect its rating is manipulating the information available to consumers — even if every individual positive review is genuine.</p>

          <h2>The Risk: Mass Review Removal</h2>
          <p>If Google determines that a business has been gating reviews, the consequences can be severe:</p>
          <ul>
            <li>Reviews collected through the gating process may be removed in bulk</li>
            <li>The GBP profile may be flagged or suspended</li>
            <li>Competitors who report the gating practice can trigger a manual review by Google</li>
          </ul>
          <p>A business with 150 reviews built through a two-step gating survey that receives a bulk removal could lose 80–100 reviews overnight — a significant ranking and credibility setback.</p>

          <h2>What to Do Instead</h2>
          <p>The compliant alternative is straightforward: ask every customer for a review, regardless of what you think their experience was. This means:</p>
          <ul>
            <li>Send review requests to all customers after service — not a pre-screened subset</li>
            <li>Use direct language: &quot;We&apos;d appreciate your honest feedback on Google&quot; — not conditional language like &quot;if you were happy&quot;</li>
            <li>Accept that some customers will leave negative reviews — and respond to those professionally rather than trying to prevent them from reaching Google</li>
          </ul>
          <p>The best response to negative reviews is a strong volume of authentic positive reviews. A business with 200 genuine reviews including a few 2-star responses looks more credible than a business with 40 perfect 5-star reviews and no variations.</p>

          <h2>How Epicware&apos;s Review Campaigns Comply</h2>
          <p>Epicware&apos;s review generation campaigns send requests to every customer — no pre-screening, no satisfaction gate, no conditional language. Every customer who completes a transaction receives the same message with a direct link. This approach is both policy-compliant and, in practice, more effective: customers who had a moderately good experience often leave positive reviews when asked directly, without any filtering step.</p>
        </>
      }
      ctaHref="/reputation-management-singapore/review-generation"
      ctaLabel="Compliant Review Generation"
      ctaContext="Epicware's campaigns ask every customer — no pre-screening, no gating. Policy-compliant by design."
      relatedPosts={[
        { title: "Can You Incentivise Google Reviews?", href: "/resources/blog/can-you-incentivize-google-reviews" },
        { title: "Google Review Policy Explained", href: "/resources/blog/google-review-policy-explained" },
      ]}
    />
  );
}

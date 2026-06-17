import type { Metadata } from "next";
import BlogArticle from "@/components/blog/BlogArticle";

export const metadata: Metadata = {
  title: "Fake or Unfair Google Reviews: What to Do | Epicware Blog",
  description: "Step-by-step guide for Singapore businesses dealing with fake, competitor-posted, or policy-violating Google reviews. Includes removal options and response strategies.",
  alternates: { canonical: "https://www.epicware.ai/blog/fake-or-unfair-google-reviews-what-to-do" },
  openGraph: {
    title: "Fake or Unfair Google Reviews: What to Do | Epicware Blog",
    description: "Step-by-step guide for Singapore businesses dealing with fake, competitor-posted, or policy-violating Google reviews. Includes removal options and response strategies.",
    url: "https://www.epicware.ai/blog/fake-or-unfair-google-reviews-what-to-do",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Fake or Unfair Google Reviews: What Singapore Businesses Can Do",
  "description": "Step-by-step guide for Singapore businesses dealing with fake, competitor-posted, or policy-violating Google reviews. Includes removal options and response strategies.",
  "datePublished": "2026-06-01",
  "author": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://epicware.ai" },
  "publisher": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://epicware.ai" },
  "url": "https://epicware.ai/blog/fake-or-unfair-google-reviews-what-to-do"
};

export default function Post() {
  return (
    <BlogArticle
      schema={schema}
      badge="BAD REVIEWS · SINGAPORE"
      h1="Fake or Unfair Google Reviews: What Singapore Businesses Can Do"
      publishDate="June 2026"
      readTime="6 min read"
      intro={
        <>
          <p>A single fake review can sit at the top of your Google Business Profile for months, deterring potential customers before they even click your website. In Singapore&apos;s compact local market, where a GBP profile is visible to an entire HDB estate or business district, the damage is concentrated.</p>
          <p>This guide walks through what constitutes a fake or unfair review under Google&apos;s policy, what you can and cannot do about it, and when professional help makes sense.</p>
        </>
      }
      body={
        <>
          <div className="not-prose rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">TL;DR</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Only reviews that violate a specific Google policy qualify for removal — fake accounts, conflicts of interest, false factual claims, personal attacks, spam.</li>
              <li>• The flag button alone rarely succeeds. Effective removal requires a formal submission through Google&apos;s business support channel with a specific policy citation and evidence.</li>
              <li>• Respond professionally to the review publicly while waiting for removal — every future customer who visits your profile will read that response.</li>
            </ul>
          </div>
          <h2>What Counts as a Fake or Unfair Review</h2>
          <p>Not all negative reviews are removable — but some clearly are. Google&apos;s review policy identifies several categories that qualify for removal:</p>
          <ul>
            <li><strong>Competitor-posted reviews</strong> — a direct conflict of interest. Reviews written by someone with a financial stake in a competing business.</li>
            <li><strong>Non-customer reviews</strong> — someone who never visited your business or purchased from you has no basis to review it.</li>
            <li><strong>False factual claims</strong> — reviews that state specific facts that are demonstrably untrue (wrong address, wrong pricing, services you don&apos;t offer).</li>
            <li><strong>Ex-employee attacks</strong> — former staff writing reviews about working conditions rather than customer experience. This falls under conflicts of interest.</li>
            <li><strong>Spam accounts</strong> — profiles created solely to post negative reviews, often with no other review history and a generic name.</li>
            <li><strong>Misattributed reviews</strong> — a review clearly intended for a different business (wrong name, wrong service, wrong location).</li>
          </ul>
          <p>What does NOT qualify: a real customer who had a genuinely bad experience. Even if you disagree with their account, a genuine negative review from an actual customer is not removable under policy.</p>

          <h2>What You Cannot Do</h2>
          <p>Before taking any action, understand the mistakes that make removal harder:</p>
          <ul>
            <li><strong>Never threaten legal action in a public response.</strong> This escalates the situation, looks bad to future readers, and rarely achieves anything useful.</li>
            <li><strong>Never offer something in exchange for removal.</strong> This violates Google&apos;s policies and can result in your entire profile being penalised.</li>
            <li><strong>Never respond emotionally.</strong> Your response is public. Future customers read it. A defensive or angry reply signals poor customer service.</li>
          </ul>

          <h2>Step 1: Assess the Review</h2>
          <p>Before flagging anything, assess which Google policy the review violates. Google&apos;s review content policy lists specific prohibited categories. Map your review to a category — this framing matters when you submit a removal request. If the review is just negative opinion from a real customer, it won&apos;t qualify for removal regardless of how unfair it feels.</p>
          <p>Look at the reviewer&apos;s profile: how many reviews have they left? Are they all negative? Are any of them for your direct competitors? A single-review profile that posted only on your business and one competitor is a strong signal of a conflict of interest violation.</p>

          <h2>Step 2: Flag It via Google Maps</h2>
          <p>The first avenue is flagging the review through Google Maps or Business Profile Manager. Find the review, click the three-dot menu, and select &quot;Report review.&quot; Choose the most specific policy violation that applies.</p>
          <p>The limitation: flagging has a high rejection rate without supporting context. Google&apos;s automated systems often dismiss flags on reviews that look superficially like normal negative feedback, even when there&apos;s a genuine policy violation. Don&apos;t stop here if the flag is rejected.</p>

          <h2>Step 3: Formal Removal Request</h2>
          <p>A formal removal request goes through Google&apos;s business support channel — not the flag button. This route allows you to provide context: evidence the reviewer is a competitor, proof the reviewer was never a customer, screenshots of the false claims. The submission is reviewed by a human, not an automated system.</p>
          <p>The format of your submission matters. You need to cite the specific policy violated, provide supporting evidence, and frame the request clearly. Vague submissions (&quot;this review is fake&quot;) get rejected at the same rate as flags.</p>

          <h2>Step 4: Respond Publicly While Waiting</h2>
          <p>Even while removal is pending — which can take days to weeks — you need a professional public response. Future readers will see the review. A well-crafted response that acknowledges the claim without accepting false premises, and invites the reviewer to make contact, signals professionalism to everyone reading.</p>
          <p>Keep responses short: 2–3 sentences. Don&apos;t repeat the negative claim in your response (which amplifies it in search). Don&apos;t use names. End with a contact invitation.</p>

          <h2>When to Get Professional Help</h2>
          <p>If the DIY flag route has already failed, or if you have multiple reviews to challenge, professional removal services exist specifically for this. Epicware&apos;s bad review removal service charges $200 per review with payment only on successful removal. The team handles assessment, submission, escalation through all available channels, and follow-up.</p>
          <p>This is particularly valuable for reviews with high commercial impact — a 1-star review on a clinic or restaurant visible to thousands of potential customers per month is worth the $200 removal cost many times over.</p>
        </>
      }
      ctaHref="/bad-review-removal-singapore"
      ctaLabel="See Bad Review Removal Singapore"
      ctaContext="Epicware handles the entire removal process — assessment, submission, escalation. You pay $200 only if the review is removed."
      relatedPosts={[
        { title: "Google Review Policy Explained", href: "/blog/google-review-policy-explained" },
        { title: "How to Remove Bad Google Reviews", href: "/blog/how-to-remove-bad-google-reviews" },
        { title: "How Fast Should You Respond to Google Reviews?", href: "/blog/how-fast-should-you-respond-to-google-reviews" },
      ]}
    />
  );
}

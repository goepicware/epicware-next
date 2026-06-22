import type { Metadata } from "next";
import BlogArticle from "@/components/blog/BlogArticle";

export const metadata: Metadata = {
  title: "Google Review Request Templates — WhatsApp, Email & SMS",
  description: "Ready-to-use WhatsApp, email, and SMS templates for Google review requests. Tested formats that convert satisfied customers into reviewers.",
  alternates: { canonical: "https://www.epicware.ai/blog/google-review-request-templates" },
  openGraph: {
    title: "Google Review Request Templates — WhatsApp, Email & SMS | Epicware",
    description: "Ready-to-use WhatsApp, email, and SMS templates for Google review requests. Tested formats that convert satisfied customers into reviewers.",
    url: "https://www.epicware.ai/blog/google-review-request-templates",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Google Review Request Templates — WhatsApp, Email & SMS",
  "description": "Ready-to-use WhatsApp, email, and SMS templates for Google review requests. Tested formats that convert satisfied customers into reviewers.",
  "datePublished": "2026-06-01",
  "author": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://epicware.ai" },
  "publisher": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://epicware.ai" },
  "url": "https://epicware.ai/blog/google-review-request-templates"
};

export default function Post() {
  return (
    <BlogArticle
      schema={schema}
      badge="REVIEW TEMPLATES"
      h1="Google Review Request Templates — WhatsApp, Email & SMS"
      publishDate="June 2026"
      readTime="5 min read"
      intro={
        <>
          <p>The words you use in a review request affect whether customers act on it. A message that is too long gets skimmed. A message that is too generic feels automated. A message that specifies what the customer should write violates Google&apos;s policy.</p>
          <p>The templates below are structured for Singapore&apos;s market and tested across several hundred thousand customer interactions. Use them as-is or adapt them for your specific business.</p>
        </>
      }
      body={
        <>
          <div className="not-prose rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">TL;DR</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• WhatsApp converts at 15–30% in Singapore — far higher than email (3–5%) or QR codes (2–3%). Make it your primary channel.</li>
              <li>• Effective templates are short (2–3 sentences), personalised (customer name + specific service), and ask for honest feedback — never a specific star rating.</li>
              <li>• Never pre-screen (&quot;if you were happy...&quot;), never request 5 stars, never include multiple platforms in one message — all reduce conversions or violate Google&apos;s policy.</li>
            </ul>
          </div>
          <h2>What Makes a Review Request Work</h2>
          <p>Effective review requests share four characteristics:</p>
          <ul>
            <li><strong>Personalised</strong> — the customer&apos;s name appears, and the specific visit or service is mentioned</li>
            <li><strong>Short</strong> — two to three sentences maximum. Every additional sentence reduces the completion rate.</li>
            <li><strong>Single action</strong> — one link, one ask. No alternatives, no &quot;or you can also...&quot;</li>
            <li><strong>Non-prescriptive</strong> — the request asks for an honest opinion, not a specific rating or specific content</li>
          </ul>

          <h2>WhatsApp Templates</h2>
          <p>WhatsApp converts at 15–30% in Singapore — significantly higher than any other channel. Use these templates for post-service review requests.</p>

          <h3>Restaurant / F&amp;B</h3>
          <p><em>&quot;Hi [Name], hope you enjoyed dinner with us tonight! If you have a moment, sharing your experience on Google would mean a lot to our team: [review link]. Thank you for visiting [Restaurant Name]!&quot;</em></p>

          <h3>Clinic / Medical</h3>
          <p><em>&quot;Hi [Name], thank you for visiting [Clinic Name] today. We hope you&apos;re feeling well. If you have a moment to share your experience on Google, it would help other patients find us: [review link]. Thank you!&quot;</em></p>

          <h3>Generic Service Business</h3>
          <p><em>&quot;Hi [Name], great working with you today! If you were happy with [service type], a quick Google review would really help us: [review link]. Appreciate your time!&quot;</em></p>

          <h3>Salon / Beauty</h3>
          <p><em>&quot;Hi [Name], loved seeing your transformation today! If you&apos;re happy with the result, a quick Google review would mean a lot to the team: [review link]. See you next time!&quot;</em></p>

          <h2>Email Templates</h2>
          <p>Email converts at 3–5% — much lower than WhatsApp, but useful when phone numbers aren&apos;t available. Keep subject lines short and direct.</p>

          <p><strong>Subject:</strong> <em>Thank you for visiting [Business Name]</em></p>
          <p><strong>Body:</strong> <em>&quot;Hi [Name], thank you for choosing [Business Name] on [date]. We hope you were pleased with [service/product]. If you have a moment, sharing your experience on Google helps other customers find us and makes a real difference to our small business. [LEAVE A GOOGLE REVIEW] — [review link]. Thank you, [Your Name] at [Business Name]&quot;</em></p>

          <h2>SMS Template</h2>
          <p>SMS is rarely used in Singapore for review requests — WhatsApp has replaced it for most consumer messaging. If SMS is your only option:</p>
          <p><em>&quot;Hi [Name], thanks for visiting [Business]! A quick Google review would help us a lot: [short link]. Thank you!&quot;</em></p>

          <h2>What to Avoid</h2>
          <ul>
            <li><strong>Do not specify a star rating.</strong> &quot;Please leave us 5 stars&quot; violates Google&apos;s policy and can result in review removal or profile penalties.</li>
            <li><strong>Do not pre-screen.</strong> Asking &quot;Are you happy with your experience? If yes, please leave a review&quot; is review gating — a policy violation.</li>
            <li><strong>Do not include multiple links or platforms.</strong> One ask, one link. Adding Facebook, Yelp, and Google in the same message dilutes attention and reduces completions on all three.</li>
            <li><strong>Do not send to unhappy customers differently.</strong> Every customer should receive the same request. Routing satisfied customers to reviews and dissatisfied customers to a private form is review gating.</li>
          </ul>

          <h2>Why Epicware Personalises Per Customer</h2>
          <p>Generic &quot;mass blast&quot; templates perform significantly below personalised messages. Epicware&apos;s review campaigns use your customer data — name, service type, visit date — to personalise each message at scale. The conversion rate improvement from personalisation is typically 2–3x versus a generic template.</p>
          <p>The system also handles timing automatically, sending each request at the optimal post-service window for your business type.</p>
        </>
      }
      ctaHref="/reputation-management-singapore/review-generation"
      ctaLabel="Automate Review Requests"
      ctaContext="Epicware's WhatsApp campaigns are personalised per customer with your business's review link pre-loaded."
      relatedPosts={[
        { title: "Best Time to Ask for a Google Review", href: "/blog/best-time-to-ask-for-a-google-review" },
        { title: "How to Get More Google Reviews", href: "/blog/how-to-get-more-google-reviews" },
        { title: "How to Create a Google Review Link and QR Code", href: "/blog/how-to-create-google-review-link-qr-code" },
      ]}
    />
  );
}

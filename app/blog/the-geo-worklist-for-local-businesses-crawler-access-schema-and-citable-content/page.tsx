import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogArticle from "@/components/blog/BlogArticle";

const OG_IMAGE =
  "https://www.epicware.ai/assets/blog/the-geo-worklist-for-local-businesses-crawler-access-schema-and-citable-content/hero-code-screen.jpg";

export const metadata: Metadata = {
  title: "The GEO Worklist: Crawler Access, Schema, Citable Content",
  description: "Fix AI visibility for your local business in order: unblock crawlers, add LocalBusiness and Service schema, then rewrite service pages so they're extractable.",
  alternates: { canonical: "https://www.epicware.ai/blog/the-geo-worklist-for-local-businesses-crawler-access-schema-and-citable-content" },
  openGraph: {
    images: [{ url: OG_IMAGE, width: 1000, height: 750, alt: "Close-up of code on a computer screen" }],
    title: "The GEO Worklist: Crawler Access, Schema, Citable Content | Epicware",
    description: "Fix AI visibility for your local business in order: unblock crawlers, add LocalBusiness and Service schema, then rewrite service pages so they're extractable.",
    url: "https://www.epicware.ai/blog/the-geo-worklist-for-local-businesses-crawler-access-schema-and-citable-content",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The GEO Worklist: Crawler Access, Schema, Citable Content",
  "description": "Fix AI visibility for your local business in order: unblock crawlers, add LocalBusiness and Service schema, then rewrite service pages so they're extractable.",
  "datePublished": "2026-11-21",
  "author": { "@type": "Person", "name": "Vignesh", "url": "https://epicware.ai" },
  "publisher": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://epicware.ai" },
  "url": "https://epicware.ai/blog/the-geo-worklist-for-local-businesses-crawler-access-schema-and-citable-content"
};

export default function Post() {
  return (
    <BlogArticle
      schema={schema}
      ogImage={OG_IMAGE}
      badge="AI SEARCH VISIBILITY · GEO"
      h1="The GEO Worklist: Crawler Access, Schema, Citable Content"
      publishDate="November 2026"
      readTime="11 min read"
      intro={
        <>
          <p>Your service page can be useful, specific, and well written, and still never appear in an AI answer. The failure usually sits lower in the stack than the copy: an AI crawler is blocked at robots.txt or the CDN, the page carries no LocalBusiness or Service schema, and the service, area, and price are buried in brochure prose. For local businesses, technical invisibility tends to arrive before authority invisibility.</p>
          <p>This is the worklist we recommend, in order: unblock crawlers first, add structure second, rewrite language third. A blocked bot can&apos;t read schema or good copy, so there&apos;s no point starting anywhere else. Each section below covers one layer, how to check whether it&apos;s actually broken, and how to fix it.</p>
        </>
      }
      body={
        <>
          <figure>
            <Image
              src="/assets/blog/the-geo-worklist-for-local-businesses-crawler-access-schema-and-citable-content/hero-code-screen.jpg"
              alt="Close-up of code on a computer screen"
              width={1000}
              height={750}
              className="rounded-lg w-full"
              priority
            />
            <figcaption>Photo by Digital Buggu via Pexels</figcaption>
          </figure>

          <div className="not-prose rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">TL;DR</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Fix in this order: crawler access, then schema, then extractable copy. A blocked bot can&apos;t read anything downstream of it.</li>
              <li>• Robots.txt and your CDN/WAF are checked separately; a page can be open in one and closed in the other.</li>
              <li>• Add LocalBusiness and Service schema so machines read facts instead of inferring them from layout.</li>
              <li>• State the service, area, and price as plain text, not in a map embed or image.</li>
              <li>• Access regresses silently, so this is a recurring check, not a one-time project (details in the verification section below).</li>
            </ul>
          </div>

          <h2>Why Technical Invisibility Comes Before Authority Invisibility</h2>
          <p>Generative engine optimisation (GEO) is the discipline of making a local business citable by AI engines that assemble answers from crawlable, structured, extractable text. The pipeline is simple: a crawler fetches the page, the engine parses its structure and copy, then quotes or recommends the business in a generated response.</p>
          <p>That order matters. A business that fails the crawl step never reaches the authority step. Links, reviews, and reputation can&apos;t compensate for a bot blocked at the CDN or turned away by robots.txt. In our audits, the first failure we usually find sits at the crawl layer, not the content layer — a working position from client work, not a published research finding. For the local market context, see{" "}
            <Link href="/blog/small-businesses-singapore-visibility-2026">
              local visibility in Singapore
            </Link>.</p>
          <p>The worklist ahead has three layers: crawler access, schema, then extractable language, each covering what breaks, how to check it, and how to fix it, in that fixed order. Skipping ahead yields clean markup and good copy that no engine can read. If you&apos;re briefing a provider on this,{" "}
            <Link href="/blog/seo-services-for-small-business">
              these are the questions to ask them
            </Link>{" "}
            first.</p>

          <h2>What You Need Before You Start</h2>
          <p>Before touching a single page, confirm you can reach every surface this worklist touches. A missing credential turns a fix into a stalled ticket.</p>
          <ul>
            <li><strong>Root robots.txt access.</strong> Confirm the file resolves at your domain root and that you can edit it, directly or through whoever manages hosting. The Robots Exclusion Protocol defines how automated clients may access your content, and per{" "}
              <a href="https://www.rfc-editor.org/info/rfc9309/" target="_blank" rel="noopener noreferrer">
                RFC 9309
              </a>, it is not a form of access authorization on its own. That distinction is why the next item matters.</li>
            <li><strong>CDN, WAF, or edge bot-management access.</strong> These settings sit above robots.txt and can challenge or drop automated clients the file permits. Get the login before you audit anything.</li>
            <li><strong>A schema-capable template.</strong> Your CMS needs to support JSON-LD in the page head, or you need a developer who can inject it.</li>
            <li><strong>An inventory of templates to edit.</strong> The home page, every location page, and one service page per service you sell. Write the list down; it becomes your verification checklist.</li>
            <li><strong>Verification tooling.</strong> A browser with view-source, a structured data testing tool, and the exact URLs you&apos;ll test.</li>
          </ul>
          <p>If the profile side of local visibility is still unfamiliar, our{" "}
            <Link href="/blog/seo-tips-small-business-owners">
              small business SEO fundamentals
            </Link>{" "}
            cover that groundwork alongside these technical fixes.</p>

          <h2>Step 1: Unblock the Crawlers Before You Touch Anything Else</h2>
          <p><strong>Robots.txt.</strong> Fetch the file from the root domain and read it as a parser would. Look for a blanket <code>Disallow: /</code>, staging rules left over from launch, and blocks a theme or SEO plugin wrote on install. Plugin rules are the easiest to miss because they sit further down the file. Confirm directive syntax against{" "}
            <a href="https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec" target="_blank" rel="noopener noreferrer">
              how Google interprets the robots.txt specification
            </a>{" "}
            rather than writing it from memory.</p>
          <p><strong>CDN and WAF.</strong> Bot-management settings at the edge can challenge or drop automated clients, so a page can be open in robots.txt and still closed before the request reaches it. Review the bot policy and any &quot;block known bots&quot; toggle, then check whether it applies to verified search crawlers, AI crawlers, or all automated traffic.</p>
          <p><strong>Server and platform.</strong> Password protection, maintenance mode, aggressive rate limiting, and geo-blocking each stop a crawler before it reaches a rendered page. A staging site still sitting behind HTTP authentication is a frequent culprit.</p>
          <p><strong>How to check.</strong> Pull robots.txt from outside your network, review edge firewall logs for automated-client rejections such as 403s and challenge responses, and request a test page using a known AI crawler user agent. Confirm current user agent strings on Google&apos;s and OpenAI&apos;s crawler documentation first, since both pages change.</p>
          <p>Once automated clients receive clean 200 responses, the structure layer can do its work.</p>

          <h2>Step 2: Add LocalBusiness and Service Schema So Machines Stop Guessing</h2>
          <figure>
            <Image
              src="/assets/blog/the-geo-worklist-for-local-businesses-crawler-access-schema-and-citable-content/server-rack-blue.jpg"
              alt="Close-up of a blue-lit server rack"
              width={1127}
              height={750}
              className="rounded-lg w-full"
            />
            <figcaption>Photo by panumas nikhomkhai via Pexels</figcaption>
          </figure>
          <p>Access is open, so the next job is telling machines what the page means. Schema declares business type, location, hours, services, and price range in machine-readable form, so an engine reads those facts rather than inferring them from layout and navigation.</p>
          <p>Start with a LocalBusiness block: name, address, telephone, opening hours, location, price range, and the area served. Check current property requirements against{" "}
            <a href="https://developers.google.com/search/docs/appearance/structured-data/local-business" target="_blank" rel="noopener noreferrer">
              Google&apos;s LocalBusiness structured data guidance
            </a>{" "}
            before shipping.</p>
          <p>Then describe each offering as a Service entry, using areaServed to state where it&apos;s offered. A single vague list of offerings tells a parser almost nothing. Multi-outlet operators can apply the same discipline to{" "}
            <Link href="/blog/restaurant-menu-seo">
              menu schema across multiple locations
            </Link>.</p>
          <p>Put the JSON-LD in the head or body template, and make sure the values match what the page itself says. Markup that disagrees with the visible copy leaves the machine with two versions to choose between. Structured data doesn&apos;t cause AI citations on its own; treat it as ambiguity removal for whatever reads the markup.</p>

          <h2>Step 3: Rewrite Service Pages So the Service, Area, and Price Are Extractable</h2>
          <p>Schema removes ambiguity for machines that read it. The copy has to state the same facts plainly, in text, because the usual failure here is brochure prose: mood language about craft and care that never actually says what the service is, where it&apos;s offered, or what it costs.</p>
          <p><strong>Name the service in the first screen.</strong> Use the phrase customers search, not a brand-coined term. A page targeting &quot;aircon servicing Bukit Timah&quot; should say exactly that in the H1 and opening sentence, before any positioning line.</p>
          <p><strong>State the area in text.</strong> A map embed or image doesn&apos;t count. List the districts, towns, and suburbs you genuinely serve, such as Tampines, Jurong, or Bukit Timah, in a sentence a crawler can actually read.</p>
          <p><strong>State the price as text.</strong> Give a &quot;from&quot; figure, package tiers, or an explicit quote process where pricing varies. An AI answer can only quote a number the page contains: &quot;Aircon servicing from S$80 per unit, deep clean from S$150.&quot;</p>
          <p><strong>Add blocks a machine can lift intact.</strong> An FAQ of real customer questions, answered in two or three sentences, plus a short inclusions list per service, gives engines self-contained passages to quote. Keep business details identical to your{" "}
            <Link href="/locations/singapore/google-business-profile">
              Singapore Google Business Profile
            </Link>{" "}
            so the page and the listing agree.</p>
          <p><strong>Write sentences that survive extraction.</strong> AI engines assemble answers from text that still makes sense read out of context, so give each key fact its own plain sentence rather than burying it mid-paragraph.{" "}
            <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">
              Google&apos;s documentation on optimising for generative AI search
            </a>{" "}
            is the page to check for current guidance.</p>

          <h2>How to Verify Each Fix Actually Landed</h2>
          <p>After the rewrite, verify each layer in the order you fixed it. A page looking right in your own browser is not proof a bot can read it.</p>
          <ol>
            <li><strong>Crawl access.</strong> Fetch robots.txt and a representative service page from outside your network, using a mobile connection rather than office Wi-Fi. Check edge or WAF logs for automated-client requests. You want 200 responses, not 403s, interstitial challenges, or bot-score blocks.</li>
            <li><strong>Schema.</strong> Run every changed template through a structured data testing tool after each deployment. Compare the parsed output against the rendered page text, and treat mismatches as defects, not cosmetic issues.</li>
            <li><strong>Extractability.</strong> Copy one service page into a plain text editor. If the service, area, and price can&apos;t be read in that dump, an engine parsing raw text won&apos;t find them either.</li>
            <li><strong>AI visibility.</strong> Run the same customer-style prompt set over time and record whether the business is named, cited, or linked. Single checks are noisy; log results on a fixed cadence, and read those trends alongside review signals, since{" "}
              <Link href="/blog/reputation-management-for-local-businesses">
                ratings act as a revenue line
              </Link>{" "}
              of their own.</li>
            <li><strong>Scheduled review.</strong> Crawler access regresses silently after CDN default changes, plugin updates, or site migrations. Recheck the full stack quarterly and after every release.</li>
          </ol>

          <h2>Four Mistakes That Undo the Worklist</h2>
          <p><strong>Rewriting copy while the crawl layer is still closed.</strong> Brochure prose rewritten behind a blocked bot stays unreadable, so the effort gets spent twice: once now, once again after access opens.</p>
          <p><strong>Blocking all bots to stop scraper traffic.</strong> A blanket deny also stops the crawlers you want, which is far broader than the problem being solved. Narrow the rule at the edge to the specific behaviour you&apos;re targeting, much as a{" "}
            <Link href="/blog/10-gbp-optimisation-tips-every-local-business-needs">
              GBP optimisation checklist
            </Link>{" "}
            fixes individual profile fields rather than rebuilding the whole profile.</p>
          <p><strong>Shipping schema values that disagree with the visible page.</strong> If the markup claims a price range of S$50 to S$150 and the copy states S$80 onwards, the engine has two stories about one business and has to guess which is true.</p>
          <p><strong>Publishing a service page that never names the service, area, and price in text.</strong> A salon publishing a Balestier outlet page with opening hours but no stated price for a keratin treatment leaves the actual question unanswered. A location page doesn&apos;t cover every service sold; each service needs its own extractable statement.</p>
          <p>None of these four is dramatic on its own. Each one quietly returns the site to invisibility.</p>

          <h2>Do the Work in Order, Then Recheck It Quarterly</h2>
          <p>Start this week by opening robots.txt and the CDN bot-management panel. Confirm no blanket disallow, staging rule, default bot challenge, or WAF policy is stopping automated clients from reaching the pages that matter, and check the rendered pages too, not just the file, since edge rules can block a request that robots.txt permits.</p>
          <p>Treat this as a maintenance loop, not a one-time project. Epicware&apos;s{" "}
            <Link href="/locations/singapore/ai-search-visibility">
              Singapore AI visibility service
            </Link>{" "}
            audits and monitors this stack, though the routine ultimately belongs to whoever owns the site. The good news in all of this: every fix above is finite and checkable, which is more than can be said for most reputation work.</p>
        </>
      }
      ctaHref="/locations/singapore/ai-search-visibility"
      ctaLabel="See AI Search Visibility Tracking Singapore"
      ctaContext="Epicware audits crawler access, schema, and page copy across your whole site, and runs the recurring checks most teams forget to schedule."
      relatedPosts={[
        { title: "AI Visibility Metrics That Matter Beyond ChatGPT Hype", href: "/blog/ai-visibility-metrics-that-matter-beyond-chatgpt-hype" },
        { title: "Does ChatGPT Make Up Citations? What It Means for Your Business", href: "/blog/does-chatgpt-make-up-citations" },
        { title: "Small Businesses in Singapore: The 2026 Visibility Reality", href: "/blog/small-businesses-singapore-visibility-2026" },
      ]}
    />
  );
}

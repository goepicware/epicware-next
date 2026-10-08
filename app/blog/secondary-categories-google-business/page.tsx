import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import BlogArticle from "@/components/blog/BlogArticle";

const OG_IMAGE = "https://www.epicware.ai/assets/blog/secondary-categories-google-business/hero-bakery-counter.jpg";
const CANONICAL = "https://www.epicware.ai/blog/secondary-categories-google-business";

export const metadata: Metadata = {
  title: "Don't Fill All Nine: Audit Your Google Business Secondary Categories",
  description:
    "A practical audit guide for Google Business secondary categories — the IS/HAS test, how many to use, common mistakes, and how to check category availability across locations.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Don't Fill All Nine: Audit Your Google Business Secondary Categories | Epicware",
    description:
      "A practical audit guide for Google Business secondary categories — the IS/HAS test, how many to use, common mistakes, and how to check category availability across locations.",
    url: CANONICAL,
    images: [{ url: OG_IMAGE, width: 1280, height: 948, alt: "Bakery counter with fresh bread on display" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Don't Fill All Nine: Audit Your Google Business Secondary Categories",
  description:
    "A practical audit guide for Google Business secondary categories — the IS/HAS test, how many to use, common mistakes, and how to check category availability across locations.",
  datePublished: "2026-10-08",
  author: { "@type": "Person", name: "Vignesh", url: "https://epicware.ai" },
  publisher: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  url: "https://epicware.ai/blog/secondary-categories-google-business",
};

const faqSchema = {
  "@type": "FAQPage",
  "@context": "https://schema.org",
  mainEntity: [
    {
      name: "How do I change the primary category on Google Business?",
      "@type": "Question",
      acceptedAnswer: {
        text: "Sign in to business.google.com or the mobile app, open your profile's Info or Business category section, and select a new primary category from the list, then save. Google notes that changing your primary category can sometimes prompt a re-verification request, so keep evidence of your business identity on hand before making the change.",
        "@type": "Answer",
      },
    },
    {
      name: "What are business categories in Google?",
      "@type": "Question",
      acceptedAnswer: {
        text: "Business categories are the classification system Google uses to describe what a business is and to match it to relevant local searches. Each profile has one primary category that defines the core business, plus up to nine optional additional categories for other substantial parts of the operation.",
        "@type": "Answer",
      },
    },
    {
      name: "What is the 20% rule at Google?",
      "@type": "Question",
      acceptedAnswer: {
        text: "There's no official rule documented in Google's category guidelines or help center suggesting a percentage; this appears to be an informal term sometimes used in SEO discussions rather than a Google-published policy. The documented rule that does exist is the IS/HAS test: a category should describe what the business fundamentally is, not something it merely offers.",
        "@type": "Answer",
      },
    },
    {
      name: "How many additional business categories can you add beyond the primary category?",
      "@type": "Question",
      acceptedAnswer: {
        text: "You can add up to nine additional categories beyond your one primary category, for a maximum of ten total categories per Google Business Profile. Google recommends using only as many as accurately describe substantial parts of your business, rather than filling every available slot.",
        "@type": "Answer",
      },
    },
    {
      name: "Can an audit tool tell me which Google Business categories are available in my market?",
      "@type": "Question",
      acceptedAnswer: {
        text: "Category availability can vary by region and language, so the most reliable way to check is through the Google Business Profile API's categories.list method, which requires a region code and language code to return accurate results. Agencies and multi-location businesses typically use this API or a structured audit process rather than assuming one category list applies everywhere.",
        "@type": "Answer",
      },
    },
  ],
};

function ProTip({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose my-6 rounded-xl border border-primary/25 bg-primary/5 p-5">
      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">⚡ Pro Tip</p>
      <p className="text-sm text-foreground/80 leading-relaxed">{children}</p>
    </div>
  );
}

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BlogArticle
        schema={schema}
        ogImage={OG_IMAGE}
        badge="GBP OPTIMISATION · CATEGORIES"
        h1="Don't Fill All Nine: Audit Your Google Business Secondary Categories"
        publishDate="October 2026"
        readTime="9 min read"
        intro={
          <>
            <p>
              Google lets you set one primary category and up to{" "}
              <a
                href="https://support.google.com/business/answer/7249669"
                target="_blank"
                rel="noopener noreferrer"
              >
                nine additional categories
              </a>{" "}
              on a Business Profile, and the rule that matters most is restraint: use only the few specific
              additional categories that genuinely describe what your business is. Secondary categories exist
              to capture real, substantial parts of your operation, not to list every product or chase
              keywords. A grocery store that also runs a bakery counter gets to say so; a grocery store that
              stocks greeting cards does not need a &quot;Gift Shop&quot; category.
            </p>
            <p>
              This is a practical audit: what secondary categories are for, how many to actually use, the
              IS/HAS test for deciding what stays, how to edit them safely, and how category availability
              changes across regions if you run more than one location.
            </p>
          </>
        }
        body={
          <>
            <figure>
              <Image
                src="/assets/blog/secondary-categories-google-business/hero-bakery-counter.jpg"
                alt="Bakery counter with a variety of fresh bread on display"
                width={1280}
                height={948}
                className="rounded-lg w-full"
                priority
              />
              <figcaption>Photo by Pexels via Pixabay</figcaption>
            </figure>

            <div className="not-prose rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">TL;DR</p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• Use only secondary categories that are relevant and substantial — overstuffing or vague labels dilute the signal Google uses to match you to searches.</li>
                <li>• Treat nine as a strict ceiling, not a target, and prioritise specific categories ("Italian Restaurant") over broad ones ("Restaurant").</li>
                <li>• Secondary categories must be actual parts of your business — a tenant or independently operated department needs its own profile.</li>
                <li>• Audit every category with the IS/HAS test: does the business <em>IS</em> this, or just <em>HAS</em> this?</li>
              </ul>
            </div>

            <h2>What are secondary categories, and why do they matter?</h2>
            <p>
              Your primary category tells Google what your business fundamentally is, and it carries the
              most weight in how your profile gets matched to searches. Additional categories, often called
              secondary categories, round out that picture when a meaningful part of your business falls
              outside the primary label. Google&apos;s own guidance frames this clearly: additional
              categories exist for substantial parts of what you do, not a running list of every item you
              sell.
            </p>
            <p>
              The classic example comes straight from Google: a grocery store can add &quot;Bakery&quot; and
              &quot;Deli&quot; as additional categories if those departments genuinely operate within the
              store. That&apos;s a real operational distinction — baked goods made on-site, a deli counter
              with its own staff — not a marketing flourish. The grocery store doesn&apos;t become ten
              things; it stays one thing with two accurate add-ons.
            </p>
            <p>
              This distinction shapes how your profile shows up in local search and in Google Maps.
              Categories feed directly into how your business gets matched to a searcher&apos;s query and how
              competitive your listing becomes within a given space. A business with a vague or overstuffed
              category list sends mixed signals, which makes it harder for Google&apos;s systems to decide
              which searches you&apos;re actually relevant for.
            </p>
            <p>A few things worth keeping in mind as you think about your own categories:</p>
            <ul>
              <li>Your primary category should never need a secondary category to explain it — if it does, you likely have the wrong primary.</li>
              <li>Additional categories should map to departments, services, or offerings that exist physically or operationally, not aspirationally.</li>
              <li>More categories rarely mean more visibility; precise categories do.</li>
            </ul>

            <h2>How many secondary categories are allowed, and how specific should they be?</h2>
            <p>
              The technical ceiling is fixed: one primary category plus up to nine additional categories, for
              a maximum of ten total. But the number you&apos;re allowed to use and the number you should use
              are different questions, and Google answers the second one directly: choose as few categories
              as necessary to describe your core business, favouring the most specific option available over
              a broad one.
            </p>
            <p>A few rules worth internalising before you touch your profile:</p>
            <ol>
              <li>
                <strong>Treat nine as a ceiling, not a target.</strong>{" "}
                <a
                  href="https://support.google.com/business/answer/7249669"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google&apos;s guidance
                </a>{" "}
                recommends selecting only categories that are truly relevant, not filling every available
                slot.
              </li>
              <li><strong>Specificity beats breadth every time.</strong> If &quot;Italian Restaurant&quot; exists as a category, it almost always outperforms the generic &quot;Restaurant&quot; for matching intent, because it tells Google and searchers more in fewer words.</li>
              <li>
                <strong>Separate, independently operated businesses need their own profile.</strong>{" "}
                A pharmacy counter inside a supermarket, a tenant business inside a shopping mall, or a
                franchise-within-a-franchise shouldn&apos;t be folded into the host business&apos;s category
                list.{" "}
                <a
                  href="https://support.google.com/business/answer/3038177"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google&apos;s guidelines
                </a>{" "}
                are explicit that categories describe the business itself, not nearby or independently
                operated businesses sharing the address.
              </li>
            </ol>
            <p>
              That last point trips up a lot of multi-tenant locations. A co-working space with an in-house
              café doesn&apos;t get to add &quot;Coffee Shop&quot; as a secondary category if the café is run
              by a different operator with its own staff and till. If it&apos;s genuinely the same business,
              operationally and financially, it can qualify as an additional category. If it&apos;s a
              different business sharing a roof, it needs its own listing — this is the same logic we cover
              for multi-specialty practices in{" "}
              <Link href="/blog/clinic-google-categories" className="text-primary font-medium hover:underline">
                mapping categories for clinics
              </Link>
              .
            </p>

            <h2>How do you decide which secondary categories to keep? The IS/HAS test</h2>
            <p>
              The single best filter for any category decision is a sentence test straight from Google&apos;s
              guidelines: does &quot;This business IS a [category]&quot; hold true, as opposed to &quot;this
              business HAS a [category]&quot;? A bakery IS a bakery. A bakery that sells coffee doesn&apos;t
              suddenly become a café just because coffee is on the counter; coffee is something it has, not
              something it is.
            </p>

            <figure>
              <Image
                src="/assets/blog/secondary-categories-google-business/deli-counter.jpg"
                alt="Deli counter display with assorted sausages and cured meats"
                width={1280}
                height={699}
                className="rounded-lg w-full"
              />
              <figcaption>Photo by jackmac34 via Pixabay</figcaption>
            </figure>

            <p>
              Run your current category list through that test one by one. Anything that only passes the
              &quot;has&quot; version of the sentence is a candidate for removal, or better handled through
              services, attributes, or product listings rather than an additional category.
            </p>
            <p>A short checklist for auditing or building your category set:</p>
            <ul>
              <li><strong>Apply the IS/HAS test to every category</strong>, current and proposed, before adding or keeping it.</li>
              <li><strong>Check for redundancy with your primary category.</strong> If an additional category restates what your primary already covers, drop it.</li>
              <li>
                <strong>Push offerings into services or attributes instead of categories.</strong> Google
                Business Profiles support{" "}
                <a
                  href="https://developers.google.com/my-business/content/services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  predefined and custom services
                </a>{" "}
                for exactly this purpose, and attributes (like &quot;outdoor seating&quot; or
                &quot;wheelchair accessible&quot;) exist separately from categories for a reason.
              </li>
              <li><strong>Think about what customers actually search for</strong>, not what sounds impressive on your profile. A plumber who occasionally does tiling doesn&apos;t need &quot;Tile Contractor&quot; if nobody searches that way to find a plumber.</li>
              <li><strong>Keep category sets consistent across locations</strong> if you run more than one outlet. Inconsistent categories across branches confuse both customers and Google&apos;s systems about what your brand actually offers.</li>
              <li><strong>Don&apos;t feel obligated to use all nine slots.</strong> Many well-matched profiles run with one or two additional categories, sometimes zero, because their primary category already does the job.</li>
            </ul>
            <p>
              One nuance that&apos;s easy to miss: Google&apos;s Business Profile API services documentation
              notes that not every business is eligible to add services, and you should check the{" "}
              <code>canModifyServiceList</code>{" "}
              field in your profile metadata before assuming you can route
              an offering there instead of into a category. If services aren&apos;t available to you, a
              precise additional category may be the only correct option left.
            </p>
            <ProTip>
              Before adding any category, search Google Maps for your actual business type in your area and
              see which categories your closest, most-established competitors use — it&apos;s a fast way to
              sanity-check specificity without guessing.
            </ProTip>
            <p>
              Industry commentary on{" "}
              <a
                href="https://searchengineland.com/google-business-profiles-local-seo-success-data-485727"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Business Profile performance data
              </a>{" "}
              backs this restraint-first approach, noting that alignment with a business&apos;s real identity
              tends to matter more than the sheer number of categories attached to a profile.
            </p>

            <h2>How do you add, edit, or remove secondary categories?</h2>
            <p>
              Editing categories is straightforward on both desktop and mobile, but the mechanics matter less
              than what you prepare before you touch a live profile.
            </p>
            <p>On business.google.com:</p>
            <ol>
              <li>Sign in and select the profile you want to edit.</li>
              <li>Go to <strong>Business Profile settings</strong> or the <strong>Info</strong> tab.</li>
              <li>Find the <strong>Category</strong> section and click the edit (pencil) icon.</li>
              <li>Adjust your primary category first, then add or remove additional categories from the list that appears.</li>
              <li>Save your changes and confirm there are no pending verification prompts.</li>
            </ol>
            <p>
              On the Google Business Profile mobile app, the path is nearly identical: open your profile, tap{" "}
              <strong>Edit profile</strong>, select <strong>Business category</strong>, and make your changes
              from there.
            </p>
            <p>
              Here&apos;s the part most owners overlook: Google&apos;s own documentation notes that adding or
              editing categories can trigger a re-verification request, especially for profiles that have had
              recent changes or sit in a sensitive category. If your profile gets flagged, you may be asked
              to confirm your business identity again before the new categories go live, which can mean a
              temporary gap in how your listing displays.
            </p>
            <p>
              Before editing a live profile, gather supporting evidence for the new categories: photos of the
              relevant department or service area, supplier invoices if relevant, or screenshots of
              on-premise signage. Keep a short change log too, noting your previous primary category, your
              previous additional categories, the evidence behind the new ones, and the date of the change.
              If Google asks for verification, that log saves you from scrambling.
            </p>
            <p>
              To remove a category, follow the same edit path and simply deselect it — there&apos;s no
              separate &quot;removal&quot; flow. Stage your edits if you&apos;re managing several changes at
              once: change one or two categories, confirm the profile stays live and verified, then proceed
              to the next batch rather than overhauling everything in a single pass.
            </p>

            <h2>How does category availability work across regions, and how do you manage multiple locations?</h2>
            <p>
              Categories aren&apos;t a single universal list. The Google Business Profile API&apos;s{" "}
              <code>categories.list</code> method requires both a <code>regionCode</code> and a{" "}
              <code>languageCode</code> to return results, and it paginates its output, which means category
              availability is locale-dependent by design. A category that exists for businesses in one
              country or language may simply not exist, or may be named differently, in another.
            </p>
            <p>
              This matters most for agencies and multi-location businesses. If you manage outlets across
              different regions or languages, copying one &quot;master&quot; category list across all of them
              risks silent mismatches, where a category valid in one market doesn&apos;t resolve the same way
              in another.
            </p>
            <p>A practical audit approach:</p>
            <ul>
              <li><strong>Export each location&apos;s category IDs</strong>, not just the display names, since IDs stay stable while display names can shift by language.</li>
              <li><strong>Query availability per <code>regionCode</code> and <code>languageCode</code></strong> using the API rather than assuming a category is universal.</li>
              <li><strong>Normalise your audit spreadsheet by category ID</strong> so you can spot inconsistencies that display names alone would hide.</li>
              <li><strong>Re-check predefined services per profile</strong>, since service eligibility and the specific service items available can also vary by category and region.</li>
            </ul>
            <div className="not-prose overflow-x-auto my-6 rounded-xl border border-border">
              <table className="min-w-full divide-y divide-border text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Factor</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Why it varies</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">What to check</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Category name", "Localization and translation differences", "Compare category ID, not display text"],
                    ["Category existence", "Market-specific taxonomy gaps", "Query categories.list with the correct regionCode"],
                    ["Service eligibility", "Tied to category and profile metadata", "Check canModifyServiceList before relying on service fields"],
                  ].map(([factor, why, check], i) => (
                    <tr key={factor} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                      <td className="px-4 py-3 font-medium text-foreground">{factor}</td>
                      <td className="px-4 py-3 text-muted-foreground">{why}</td>
                      <td className="px-4 py-3 text-muted-foreground">{check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              If you&apos;re coordinating categories across a chain of outlets, treating this as a recurring
              audit rather than a one-time setup keeps every location aligned as Google&apos;s taxonomy
              evolves. Our{" "}
              <Link href="/use-cases/manage-multiple-gbp-locations" className="text-primary font-medium hover:underline">
                guidance on managing multiple Google Business Profile locations
              </Link>{" "}
              walks through the workflow in more depth if you&apos;re handling several outlets at once.
            </p>

            <h2>What are the most common secondary category mistakes?</h2>
            <p>
              Category stuffing is the most common error, and it backfires because it dilutes the exact
              signal Google uses to match your profile to searches. A business with eight loosely related
              additional categories doesn&apos;t look more comprehensive; it looks unfocused, and in some
              cases, it can draw the kind of scrutiny that leads to a review or suspension.
            </p>
            <p>Other recurring mistakes worth flagging:</p>
            <ul>
              <li><strong>Adding a category for a tenant or independently operated department</strong> that isn&apos;t actually part of your business, which violates Google&apos;s guidelines on representing nearby or separate businesses.</li>
              <li><strong>Using categories to promote a temporary offer</strong> or seasonal product line instead of using posts or updates, which are built for that purpose.</li>
              <li><strong>Listing a category for every product you sell</strong> rather than the handful of categories that describe your actual business identity.</li>
              <li><strong>Copying a competitor&apos;s full category list</strong> without checking whether each one passes the &quot;this business IS a&quot; test for your own operation.</li>
            </ul>
            <p>
              If you spot any of these on your own profile, the fix is simple: audit your current categories
              against the IS/HAS test, remove anything that fails, and revert any recent additions that
              triggered a verification flag before they do more damage. Keep your evidence ready in case
              Google asks you to confirm the change.
            </p>

            <h2>How does Epicware support Google Business Profile category audits?</h2>
            <p>
              Getting categories right once is manageable. Keeping them right across multiple locations,
              through Google&apos;s periodic taxonomy updates, and every time a listing gets edited, is where
              most SMBs lose track. Our tools include structured Google Business Profile audits that check
              category selection against the IS/HAS test, flag redundancy with the primary category, and
              suggest where services or attributes might be used instead of additional categories.
            </p>
            <p>
              Our{" "}
              <Link href="/free-audit" className="text-primary font-medium hover:underline">
                Free Google Business Profile Audit
              </Link>{" "}
              gives any business owner a baseline read on where their current categories stand before making
              changes. For businesses that want ongoing management rather than a one-time check, our{" "}
              <Link href="/gbp-optimisation-singapore/gbp-category-optimisation" className="text-primary font-medium hover:underline">
                GBP Category Optimisation service
              </Link>{" "}
              handles the audit, the edit, and the evidence log needed if Google requests re-verification.
            </p>
            <p>
              If you run a single outlet with a straightforward category set, a DIY audit using the checklist
              above is often enough. The moment you&apos;re managing several locations, juggling
              locale-dependent category availability, or recovering from a profile that&apos;s drifted into
              category stuffing over time, that&apos;s when outside support pays for itself: our tools
              maintain category consistency across every outlet from one dashboard and keep a change log
              ready, so a re-verification request doesn&apos;t catch you without proof.
            </p>

            <h2>What actually moves the needle on categories?</h2>
            <p>
              If there&apos;s one lesson from auditing Google Business Profiles across different industries,
              it&apos;s that owners consistently over-invest in category quantity and under-invest in
              category accuracy. The nine-slot limit reads like an invitation to fill it; it&apos;s actually
              a safety net for the rare business that legitimately spans several distinct operations.
            </p>
            <p>
              Two rules cover most situations: apply the &quot;this business IS a&quot; test to every
              category before you add it, and never let an additional category duplicate what your primary
              already says. Everything else — services, attributes, posts — exists to carry the detail
              categories shouldn&apos;t be asked to hold.
            </p>
            <p>
              If you&apos;re not sure where your own profile stands, an audit takes the guesswork out of it
              faster than reading another guide.
            </p>
            <blockquote>
              <p>— Vignesh</p>
            </blockquote>

            <h2>Where does Epicware fit for ongoing category management?</h2>
            <p>
              Auditing categories across even a handful of outlets takes real time: checking each one against
              Google&apos;s IS/HAS test, cross-referencing primary category overlap, and confirming
              locale-specific availability if you operate in more than one market. Our dashboard handles that
              audit work directly, alongside Google Maps ranking, review management, and AI search
              visibility, so category decisions aren&apos;t made in isolation from the rest of your
              profile&apos;s performance.
            </p>
            <p>
              Beyond categories, our{" "}
              <Link href="/services" className="text-primary font-medium hover:underline">
                GBP Optimisation service
              </Link>{" "}
              covers the broader profile setup, and our{" "}
              <Link href="/bad-review-removal-singapore" className="text-primary font-medium hover:underline">
                Bad Review Removal service
              </Link>{" "}
              works on a pay-on-success basis: a flat $200 per review, fully refunded if the review isn&apos;t
              taken down. For businesses ready for ongoing management across Google Maps ranking, reviews,
              and AI search visibility, our{" "}
              <Link href="/pricing" className="text-primary font-medium hover:underline">
                pricing plans
              </Link>{" "}
              start with the Foundation plan and scale up to Enterprise for larger, multi-outlet operations.
            </p>

            <h2>FAQ</h2>

            <h3>How do I change the primary category on Google Business?</h3>
            <p>
              Sign in to business.google.com or the mobile app, open your profile&apos;s Info or Business
              category section, and select a new primary category from the list, then save. Google notes
              that changing your primary category can sometimes prompt a re-verification request, so keep
              evidence of your business identity on hand before making the change.
            </p>

            <h3>What are business categories in Google?</h3>
            <p>
              Business categories are the classification system Google uses to describe what a business is
              and to match it to relevant local searches. Each profile has one primary category that defines
              the core business, plus up to nine optional additional categories for other substantial parts
              of the operation.
            </p>

            <h3>What is the 20% rule at Google?</h3>
            <p>
              There&apos;s no official rule documented in Google&apos;s category guidelines or help center
              suggesting a percentage; this appears to be an informal term sometimes used in SEO discussions
              rather than a Google-published policy. The documented rule that does exist is the IS/HAS test:
              a category should describe what the business fundamentally is, not something it merely offers.
            </p>

            <h3>How many additional business categories can you add beyond the primary category?</h3>
            <p>
              You can add up to nine additional categories beyond your one primary category, for a maximum of
              ten total categories per Google Business Profile. Google recommends using only as many as
              accurately describe substantial parts of your business, rather than filling every available
              slot.
            </p>

            <h3>Can an audit tool tell me which Google Business categories are available in my market?</h3>
            <p>
              Category availability can vary by region and language, so the most reliable way to check is
              through the Google Business Profile API&apos;s categories.list method, which requires a region
              code and language code to return accurate results. Agencies and multi-location businesses
              typically use this API or a structured audit process rather than assuming one category list
              applies everywhere.
            </p>

            <h2>Key takeaways</h2>
            <div className="not-prose overflow-x-auto my-6 rounded-xl border border-border">
              <table className="min-w-full divide-y divide-border text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Point</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Nine is a ceiling, not a target", "Use only as many secondary categories as genuinely describe substantial parts of your business."],
                    ["Run the IS/HAS test", "A category should describe what the business IS, not something it merely HAS or offers."],
                    ["Specificity beats breadth", "A precise category ('Italian Restaurant') almost always outperforms a broad one ('Restaurant')."],
                    ["Separate businesses need separate profiles", "A tenant or independently operated department doesn't belong in your category list."],
                    ["Availability is locale-dependent", "Category names and existence vary by region and language — audit by category ID, not display name, across multiple locations."],
                  ].map(([point, detail], i) => (
                    <tr key={point} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                      <td className="px-4 py-3 font-medium text-foreground">{point}</td>
                      <td className="px-4 py-3 text-muted-foreground">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        }
        ctaHref="/gbp-optimisation-singapore/gbp-category-optimisation"
        ctaLabel="Get Your Free GBP Category Audit"
        ctaContext="Epicware checks every category on your profile against the IS/HAS test, flags redundancy, and keeps a change log ready in case Google asks for re-verification."
        relatedPosts={[
          { title: "Free Google Business Profile Audit", href: "/free-audit" },
          { title: "Manage Multiple Google Business Profiles", href: "/use-cases/manage-multiple-gbp-locations" },
          { title: "GBP Category Optimisation Singapore", href: "/gbp-optimisation-singapore/gbp-category-optimisation" },
          { title: "Clinic Owners: 2–4 Week Checklist to Change Google Categories Safely", href: "/blog/clinic-google-categories" },
        ]}
      />
    </>
  );
}

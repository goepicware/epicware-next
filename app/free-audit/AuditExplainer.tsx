import Link from "next/link";

// Server-rendered explanation of the free audit. Every statement here mirrors
// what FreeAuditWizard.tsx and app/api/audit/* actually do — update both together.

const PROFILE_CHECKS = [
  "Google rating (4.0 or higher)",
  "How recently and how often new reviews arrive",
  "Number of photos on the profile (10+ recommended)",
  "Whether the profile has a business description",
  "Whether services and categories are filled in",
];

const MANUAL_CHECKS = "review replies, how often you post updates, keywords in those posts, and service descriptions";

const AI_ASSISTANTS = "ChatGPT, Claude, Gemini, Perplexity, Llama and Grok";

const STEPS = [
  "Choose your market (Singapore or the United States), then find your business on Google Maps by name or paste its Maps link.",
  "Confirm the profile and pick the keywords customers search for you (we suggest some).",
  "Set the area you serve, from 1 km to 10 km around your outlet.",
  "Enter your name and email so we can send you the report.",
  "Read your scorecard on screen; a summary also arrives by email.",
];

export default function AuditExplainer() {
  return (
    <section aria-labelledby="audit-explainer" className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-3xl px-4 py-14 text-gray-700">
        <h2 id="audit-explainer" className="text-2xl font-bold text-gray-900">
          What the free Google Business Profile audit checks
        </h2>
        <p className="mt-3 leading-relaxed">
          The audit looks up your business on Google Maps and scores it out of 100 across four areas: profile,
          reviews, keywords and visibility. It also asks {AI_ASSISTANTS} who they recommend for your keyword
          near you, and shows whether your business is named. There is no account to create and nothing to pay.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-gray-900">Profile and reviews</h3>
        <p className="mt-2">Read from your public Google listing:</p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          {PROFILE_CHECKS.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <p className="mt-2">
          Some things are not visible in public data, so the report lists them for you to check yourself:{" "}
          {MANUAL_CHECKS}.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-gray-900">Keywords and competitors</h3>
        <p className="mt-2">
          For each keyword you pick, we run a live Google Maps search from your outlet&apos;s location and record
          where you rank and which businesses rank above you, with their rating and review count. The ranking map
          around your outlet is an estimate projected from that live result, not a measured scan of every point.
          A measured Maps grid scan is included in the Authority plan on the{" "}
          <Link href="/pricing" className="text-[#2563EB] underline">
            pricing page
          </Link>
          .
        </p>

        <h3 className="mt-8 text-lg font-semibold text-gray-900">AI search visibility</h3>
        <p className="mt-2">
          Each assistant gets the same question: which businesses it recommends for your keyword around your
          neighbourhood. The report shows which assistants named you and which named a competitor instead. Read more on{" "}
          <Link href="/services/ai-search-visibility" className="text-[#2563EB] underline">
            how AI search visibility works
          </Link>
          .
        </p>

        <h3 className="mt-8 text-lg font-semibold text-gray-900">How it works</h3>
        <ol className="mt-2 list-decimal space-y-1 pl-6">
          {STEPS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>

        <p className="mt-8">
          Want someone to walk through the results with you? See{" "}
          <Link href="/pricing" className="text-[#2563EB] underline">
            plans and pricing
          </Link>{" "}
          or{" "}
          <Link href="/book-demo" className="text-[#2563EB] underline">
            book a strategy call
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

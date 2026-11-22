import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogArticle from "@/components/blog/BlogArticle";

const OG_IMAGE =
  "https://www.epicware.ai/assets/blog/build-a-30-prompt-panel-to-test-ai-search-visibility/hero-chat-testing.jpg";

export const metadata: Metadata = {
  title: "Build a 30-Prompt Panel to Test AI Search Visibility",
  description:
    "A repeatable monthly audit: 30 prompts run identically on ChatGPT, Gemini and Perplexity, then scored for mention, position and sentiment.",
  alternates: { canonical: "https://www.epicware.ai/blog/build-a-30-prompt-panel-to-test-ai-search-visibility" },
  openGraph: {
    images: [{ url: OG_IMAGE, width: 1260, height: 750, alt: "A person testing AI chat interfaces side by side on a laptop" }],
    title: "Build a 30-Prompt Panel to Test AI Search Visibility | Epicware",
    description:
      "A repeatable monthly audit: 30 prompts run identically on ChatGPT, Gemini and Perplexity, then scored for mention, position and sentiment.",
    url: "https://www.epicware.ai/blog/build-a-30-prompt-panel-to-test-ai-search-visibility",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Build a 30-Prompt Panel to Test AI Search Visibility",
  "description":
    "A repeatable monthly audit: 30 prompts run identically on ChatGPT, Gemini and Perplexity, then scored for mention, position and sentiment.",
  "datePublished": "2026-11-23",
  "author": { "@type": "Person", "name": "Vignesh", "url": "https://epicware.ai" },
  "publisher": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://epicware.ai" },
  "url": "https://epicware.ai/blog/build-a-30-prompt-panel-to-test-ai-search-visibility"
};

export default function Post() {
  return (
    <BlogArticle
      schema={schema}
      ogImage={OG_IMAGE}
      ogImageWidth={1260}
      ogImageHeight={750}
      badge="AI SEARCH VISIBILITY · METHOD"
      h1="Build a 30-Prompt Panel to Test AI Search Visibility"
      author="Vignesh"
      authorRole="Founder, Epicware"
      publishDate="November 2026"
      readTime="13 min read"
      intro={
        <>
          <p>A single screenshot of a chatbot answer proves almost nothing. It can&apos;t tell you whether your brand was left out because the prompt was phrased differently, because the engine gave a different answer in a fresh session, or because you were never in the consideration set at all. Any of those three could explain the same blank screenshot. To measure AI visibility properly, you need a fixed panel: thirty prompts, run the same way, on the same engines, on the same day, every month.</p>
          <p>This guide builds that panel: thirty prompts across three families, locked wording, run identically on ChatGPT, Gemini and Perplexity, scored for mention, position and sentiment. The aim isn&apos;t a perfect truth machine. It&apos;s a repeatable way to track whether AI search is naming you at all.</p>
        </>
      }
      body={
        <>
          <figure>
            <Image
              src="/assets/blog/build-a-30-prompt-panel-to-test-ai-search-visibility/hero-chat-testing.jpg"
              alt="A person testing AI chat interfaces side by side on a laptop"
              width={1260}
              height={750}
              className="rounded-lg w-full"
              priority
            />
            <figcaption>Photo by Alberlan Barros via Pexels</figcaption>
          </figure>

          <div className="not-prose rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">TL;DR</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Build 30 fixed prompts across three families, run monthly on ChatGPT, Gemini and Perplexity, scored for mention, position and sentiment.</li>
              <li>• Each engine answers from a different index, so report per-engine numbers and never blend them into one score.</li>
              <li>• Lock the wording once: edit it mid-series and the month-on-month comparison stops meaning anything.</li>
              <li>• Score from the copied answer text, never from memory, and keep the exact phrase the engine used in a notes column.</li>
              <li>• Treat the panel as a diagnostic, not a market study, and disclose any commercial interest in the result.</li>
            </ul>
          </div>

          <h2>Why a Fixed Prompt Panel Beats a Folder of Screenshots</h2>
          <p>A folder of screenshots is a folder of anecdotes. Each image records one session, one day, one wording, and change a word and the list changes.{" "}
            <a href="https://arxiv.org/html/2408.04667v5" target="_blank" rel="noopener noreferrer">
              Outputs can vary for identical inputs
            </a>, so a screenshot captures one draw, not a stable answer. Nothing in that folder can be compared to anything else.</p>
          <p>AI visibility only becomes a number when the same prompts, engines, locale and scoring rules are applied monthly. Change any one of those and the delta stops meaning anything. Thirty fixed queries, split across three families, best X in neighbourhood, who does Y near MRT, and problem-first phrasing, spread wide enough to show a pattern. That same set stays small enough to finish in an afternoon.</p>
          <p>The output is a table, not a vibe: a per-engine count of named answers, mean position, and sentiment split, clear enough to show a business partner or landlord. A saved prompt file, dated spreadsheet, and written scoring rules also make it repeatable, so whoever runs it in June doesn&apos;t need to be whoever ran it in January. Then{" "}
            <Link href="/ai-visibility">
              check your AI visibility
            </Link>{" "}
            against the same baseline, month by month.</p>

          <h2>Why One Engine Is Not a Sample</h2>
          <p>Even with the panel fixed, one engine is a sample of one system, not of AI search. Research reported by{" "}
            <a href="https://finance.yahoo.com/technology/ai/articles/research-llm-scout-reveals-chatgpt-112000606.html" target="_blank" rel="noopener noreferrer">
              Yahoo Finance
            </a>{" "}
            says LLM Scout found ChatGPT, Claude, Gemini and Perplexity disagreed on brand mentions in more than one in four evaluation queries. Treat that figure as unverified until the report&apos;s methodology and query set are read, but the practical point holds regardless: each engine answers from a different index, with different local data access and different ranking behaviour.</p>
          <p>Keep the engine mix fixed. Adding or dropping one mid-series breaks the year, so a changed list starts a new series. Record which engine named you rather than averaging the three; sentiment drift between engines is also where review signals surface, covered in our{" "}
            <Link href="/blog/reputation-management-for-local-businesses">
              reputation management guide
            </Link>.</p>

          <h2>Lock the Setup Before You Write a Prompt</h2>
          <p>With the engine mix fixed, lock the rest of the instrument before writing a single prompt.</p>
          <ul>
            <li><strong>Category terms.</strong> List the words customers use (tuition centre, car workshop, dental clinic) plus the two or three terms you want to own. Document the list.</li>
            <li><strong>Geography.</strong> Choose three to five neighbourhoods and three to five MRT stations matching where customers actually travel from.</li>
            <li><strong>Competitors.</strong> Name them, including the two you never see mentioned and the one you always do. Track their review counts too, since depth can shape who AI surfaces; see this guide to{" "}
              <Link href="/blog/how-many-google-reviews-do-you-need-to-compete-locally">
                setting a review benchmark
              </Link>.</li>
            <li><strong>Run environment.</strong> One device, English language, Singapore locale, one account decision (logged out or one consistent account), one spreadsheet tab per month.</li>
            <li><strong>Time.</strong> Book a recurring one-hour slot. Month one runs longer while you draft prompts; later runs take about an hour from the saved file.</li>
          </ul>

          <h2>Step 1: Build the 30-Prompt Panel</h2>
          <p>Write all thirty in one sitting, in a plain document you won&apos;t edit mid-series. Save it as panel-v1 with the date, for example panel-v1_2026-06-01. Make the wording sound like a customer typing at 11pm, not a keyword list: include price concerns, urgency and uncertainty where they fit naturally. Strip personalisation cues, no &quot;my&quot;, nothing that reveals who you are or which answer you hope to see.</p>
          <div className="not-prose overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border/60 text-left">
                  <th className="py-2 pr-4 font-semibold">Family</th>
                  <th className="py-2 pr-4 font-semibold">Template</th>
                  <th className="py-2 font-semibold">What it tests</th>
                </tr>
              </thead>
              <tbody className="text-foreground/80">
                <tr className="border-b border-border/30">
                  <td className="py-2 pr-4 font-medium align-top">1. Best X in neighbourhood</td>
                  <td className="py-2 pr-4">&quot;What&apos;s the best [category] in [neighbourhood]?&quot;</td>
                  <td className="py-2">Neighbourhood reputation</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-2 pr-4 font-medium align-top">2. Who does Y near MRT</td>
                  <td className="py-2 pr-4">&quot;Who does [service] near [MRT station]?&quot;</td>
                  <td className="py-2">Transit convenience</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium align-top">3. Problem-first phrasing</td>
                  <td className="py-2 pr-4">&quot;My [problem], who should I call in [area]?&quot;</td>
                  <td className="py-2">Intent under pressure</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Score every answer, including &quot;no specific recommendation&quot;, as a real data point rather than a failed run to delete. Never use &quot;near me&quot; in a fixed panel; it&apos;s ambiguous, depends on the device&apos;s location, and breaks reproducibility. Keep urgency and constraint words identical each month, since changing &quot;urgent&quot; to &quot;affordable&quot; changes the question, not just the phrasing, and quietly resets the series.</p>
          <p>Never quietly edit a live prompt. Log corrections as v2 with what changed and when. If a location closes or you add a service, swap in a fresh prompt and restart that prompt&apos;s series at zero rather than splicing old and new histories.</p>

          <h2>Step 2: Run It Identically on Three Engines, Same Day</h2>
          <p>Once panel-v1 is locked, the run itself is deliberately dull. Run all three engines on the same day, same device, same locale, same account setting. Paste one prompt at a time into a fresh chat thread; continuing a thread lets earlier prompts contaminate the answer and quietly inflate your apparent visibility.</p>
          <p>Copy the full answer text into the spreadsheet first, then take a screenshot. Screenshots are proof for a stakeholder; text is what you score, search and quote. If an engine refuses or says it can&apos;t see local businesses, log &quot;no local answer&quot; with its exact wording and move on, never rephrase mid-run to get a friendlier result.</p>
          <p>Start every prompt in a fresh session with no history referencing your brand or competitors. Avoid running from an account tied to your Google Business Profile; if you must, note it on the sheet. Keep one control prompt you never expect to change, such as a national-brand question, as an early warning that the engine itself has shifted, not your business.</p>

          <h2>Step 3: Score Mention, Position and Sentiment</h2>
          <figure>
            <Image
              src="/assets/blog/build-a-30-prompt-panel-to-test-ai-search-visibility/spreadsheet-scoring.jpg"
              alt="A spreadsheet of scored results open on a laptop screen"
              width={1125}
              height={750}
              className="rounded-lg w-full"
            />
            <figcaption>Photo by RDNE Stock project via Pexels</figcaption>
          </figure>
          <p>Thirty prompts across three engines give ninety rows. Three columns carry the score, plus a notes column holding the exact phrase the engine used so a contested score can be rechecked without rerunning the prompt.</p>
          <p><strong>Mention.</strong> Counts as named: your exact brand name, a widely used short form, a recognisable misspelling. Doesn&apos;t count: a generic category answer, a list you&apos;re absent from, a namesake business that isn&apos;t you. Freeze the alias list before month one.{" "}
            <Link href="/blog/secondary-categories-google-business">
              Sorting your profile categories
            </Link>{" "}
            sharpens the category signals engines read.</p>
          <p><strong>Position.</strong> Use a five-point scale: first business named, second or third, later in the list, only as an afterthought, or absent. Mark whether the engine recommended you or merely described you, &quot;options include&quot; is weaker than &quot;I would try&quot;. Report a mean position per engine, never averaged across engines.</p>
          <p><strong>Sentiment.</strong> Three labels only: positive (recommended or praised for a specific reason), neutral (listed with no judgement), negative (warned against, or described as closed or hard to reach). Score the single sentence that names you, not the whole answer, and quote it in the notes column.</p>
          <p>For each engine, report three figures separately: the count of named answers out of 30, mean position across those, and the percentage scored positive. Add share of voice, your mentions divided by all business mentions across the 30 answers, to see whether the panel is naming more businesses overall or simply naming you more.</p>

          <h2>Five Ways the Panel Gets Corrupted</h2>
          <ul>
            <li><strong>Editing prompt wording mid-series.</strong> Even a small word swap starts a new series. Log it as panel-v2 and restart that prompt.</li>
            <li><strong>Running while logged in with brand history.</strong> Use logged-out access or one fixed account, and record which.</li>
            <li><strong>Scoring from a cropped screenshot.</strong> Cropping loses the sentences around your name, exactly what sentiment scoring depends on.</li>
            <li><strong>Adding an engine, market or language mid-series.</strong> Treat the new output as a new series, not continuous data.</li>
            <li><strong>Skipping a month.</strong> March to May is two data points with a hole, not a trend. Mark the gap.</li>
          </ul>
          <p>Audit each month&apos;s sheet against these five before trusting the delta.</p>

          <h2>Month Two: What to Compare, What Not to Conclude</h2>
          <p>Compare like with like: same prompts, same engines, same scoring sheet. Read the delta, not the absolute level, since the level carries the quirks of the panel you chose. Look for stability before movement; a prompt that flips between months is unstable, which is useful information and usually the cheapest query to win.</p>
          <p>Don&apos;t conclude cause and effect from one month. If a profile change precedes a jump, that&apos;s a hypothesis, label it &quot;too early to call&quot; in any report. Follow the pattern, not the outlier: three prompts moving the same way across two engines is a signal, one prompt moving on one engine isn&apos;t. Watch competitor movement alongside your own too; if your mention count holds steady but your share of voice falls, a competitor has gained.</p>

          <h2>What to Do With a Low Score</h2>
          <p>Treat a low score as a ranked to-do list, and record which fix you applied so next month&apos;s sheet can be read honestly.</p>
          <p><strong>1. Repair what the engines read first.</strong> Complete profile categories, using the fewest that describe the core business, and keep name, address and phone identical everywhere. See these{" "}
            <Link href="/blog/10-gbp-optimisation-tips-every-local-business-needs">
              GBP optimisation tips
            </Link>.</p>
          <p><strong>2. Write the page the panel says is missing.</strong> If no prompt about a service ever names you, no indexable page likely covers that service in that area. Prompt tuning won&apos;t fix an absent page.</p>
          <p><strong>3. Match the phrasing.</strong> Reuse the exact wording customers and engines use, starting with the phrase already sitting in your notes column.</p>
          <p><strong>4. Earn mentions where engines already cite.</strong> Local roundups, association listings, and the review sites that show up as sources in Perplexity answers.</p>
          <p><strong>5. Change one thing per cycle.</strong> Let two or three monthly runs settle before judging the movement.</p>

          <h2>Limits, Caveats, and the Disclosure</h2>
          <p>Treat the panel as a diagnostic, not a market study. Thirty prompts measure your chosen businesses, queries and engines, not AI search as a whole, and never present the output as a market statistic. The engine-disagreement figure cited earlier is a reported headline claim with unseen methodology, a reason to test multiple engines, not a benchmark for a deck. We found no published, validated local visibility benchmark to measure against; don&apos;t invent one.</p>
          <p><strong>Disclosure:</strong> Epicware publishes this guide and sells AI visibility tracking software. The framing of AI answers as a growing channel for local discovery is the company&apos;s view, not established market evidence. The method itself runs by hand, free, in a spreadsheet. Run it for three months and you&apos;ll have a concrete, defensible record of your own AI visibility, built from your own data rather than a vendor&apos;s summary.</p>

          <h2>Thirty Prompts, One Number, Every Month</h2>
          <p>Write your 30 prompts this week, ten per family, saved as panel-v1 with the date in the name. Fix the conditions before the first run, same device, same locale, same account setting, same engine order, and record the date and model on every sheet. Score mention, position and sentiment from the copied text, 90 rows a month, and report three numbers per engine rather than one blended score.</p>
          <p>Wait two to three monthly cycles before drawing conclusions, and change one thing at a time. If running 90 prompts by hand each month is the reason it won&apos;t happen, Epicware&apos;s AI visibility tracking automates the same panel and scoring. Otherwise, the spreadsheet costs nothing and beats another folder of screenshots.</p>
        </>
      }
      ctaHref="/ai-visibility"
      ctaLabel="Check Your AI Visibility Score"
      ctaContext="Epicware's AI visibility tracker runs the same 30-prompt panel across ChatGPT, Gemini and Perplexity automatically, and reports mention, position and sentiment per engine every month, no spreadsheet required."
      relatedPosts={[
        { title: "AI Visibility Metrics That Matter Beyond ChatGPT Hype", href: "/blog/ai-visibility-metrics-that-matter-beyond-chatgpt-hype" },
        { title: "10 GBP Optimisation Tips Every Local Business Needs", href: "/blog/10-gbp-optimisation-tips-every-local-business-needs" },
        { title: "How Many Google Reviews Do You Need?", href: "/blog/how-many-google-reviews-do-you-need-to-compete-locally" },
      ]}
    />
  );
}

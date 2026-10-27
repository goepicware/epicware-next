import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { COUNTRIES } from "../lib/site/countries";
import { SERVICES } from "../lib/site/services";
import { checkUrlStatus, persistUrlCache } from "./lib/url-cache";

/**
 * Substance gate: a country-service or hub page can only carry
 * `draft: false` if its frontmatter proves it has real, market-specific
 * substance — not just a template with the country name swapped in. See
 * lib/site/content.ts's MoneyPageFrontmatter for the field shapes this
 * checks. Singapore is out of scope: its pages are bespoke .tsx, not
 * frontmatter-driven, and already live.
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const MIN_MARKET_FACTS = 4;
const MIN_FAQS = 5;

interface CheckResult {
  id: string;
  draft: boolean;
  problems: string[];
}

/** Lowercase, strip punctuation, collapse whitespace — for "does this fact actually appear in the body" containment checks. */
function normalizeForPresence(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function checkFrontmatter(id: string, data: Record<string, unknown>, body: string): Promise<CheckResult> {
  const draft = data.draft !== false;
  if (draft) return { id, draft: true, problems: [] };

  const problems: string[] = [];
  const normalizedBody = normalizeForPresence(body);

  const marketFacts = data.marketFacts as unknown[] | undefined;
  if (!Array.isArray(marketFacts) || marketFacts.length < MIN_MARKET_FACTS) {
    problems.push(
      `marketFacts: needs at least ${MIN_MARKET_FACTS}, has ${Array.isArray(marketFacts) ? marketFacts.length : 0}`
    );
  } else {
    for (let i = 0; i < marketFacts.length; i++) {
      const entry = marketFacts[i] as Record<string, unknown>;
      const fact = entry?.fact;
      const sourceUrl = entry?.sourceUrl;
      if (!fact || typeof fact !== "string") {
        problems.push(`marketFacts[${i}].fact missing`);
      } else if (!normalizedBody.includes(normalizeForPresence(fact))) {
        problems.push(`marketFacts[${i}].fact doesn't appear (normalised match) in the rendered body: "${fact}"`);
      }
      if (!sourceUrl || typeof sourceUrl !== "string") {
        problems.push(`marketFacts[${i}].sourceUrl missing`);
      } else {
        const status = await checkUrlStatus(sourceUrl);
        if (status !== 200) {
          problems.push(`marketFacts[${i}].sourceUrl returned ${status ?? "no response"} (expected 200): ${sourceUrl}`);
        }
      }
    }
  }

  const proof = data.proof as Record<string, unknown> | undefined;
  const caseStudy = proof?.caseStudy as Record<string, unknown> | undefined;
  const hasCaseStudy = !!caseStudy?.title && !!caseStudy?.summary && !!caseStudy?.sourceUrl;
  const hasPresence = typeof proof?.presenceStatement === "string" && (proof.presenceStatement as string).trim().length > 0;
  if (!hasCaseStudy && !hasPresence) {
    problems.push("proof: needs either proof.caseStudy (title+summary+sourceUrl) or proof.presenceStatement");
  }
  if (hasCaseStudy && hasPresence) {
    problems.push("proof: has both caseStudy and presenceStatement — pick one, not both");
  }

  const pricing = data.pricing as Record<string, unknown> | undefined;
  const hasPricing =
    !!pricing && typeof pricing.currency === "string" && (typeof pricing.from === "number" || typeof pricing.display === "string");
  if (!hasPricing) {
    problems.push("pricing: needs currency + (from or display)");
  }

  const faqs = data.faqs as unknown[] | undefined;
  if (!Array.isArray(faqs) || faqs.length < MIN_FAQS) {
    problems.push(`faqs: needs at least ${MIN_FAQS}, has ${Array.isArray(faqs) ? faqs.length : 0}`);
  } else {
    faqs.forEach((f, i) => {
      const entry = f as Record<string, unknown>;
      if (!entry?.question || typeof entry.question !== "string") problems.push(`faqs[${i}].question missing`);
      if (!entry?.answer || typeof entry.answer !== "string") problems.push(`faqs[${i}].answer missing`);
    });
  }

  return { id, draft: false, problems };
}

/** No FAQ question may be reused verbatim across countries for the same service. */
function checkFaqReuse(frontmatterByService: Map<string, { id: string; questions: string[] }[]>): string[] {
  const problems: string[] = [];
  for (const [service, entries] of frontmatterByService) {
    for (let i = 0; i < entries.length; i++) {
      for (let j = i + 1; j < entries.length; j++) {
        const shared = entries[i].questions.filter((q) => entries[j].questions.includes(q));
        if (shared.length > 0) {
          problems.push(
            `${entries[i].id} and ${entries[j].id} (service: ${service}) reuse FAQ question(s) verbatim: ${shared
              .map((s) => `"${s}"`)
              .join(", ")}`
          );
        }
      }
    }
  }
  return problems;
}

async function main() {
  const results: CheckResult[] = [];
  const byService = new Map<string, { id: string; questions: string[] }[]>();

  for (const country of COUNTRIES) {
    if (country.slug === "singapore") continue;

    for (const service of SERVICES) {
      const filePath = path.join(ROOT, "content", "locations", country.slug, `${service.slug}.mdx`);
      if (!fs.existsSync(filePath)) continue;
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      const id = `${country.slug}/${service.slug}`;
      results.push(await checkFrontmatter(id, data, content));

      if (Array.isArray(data.faqs)) {
        const questions = (data.faqs as Array<{ question?: string }>)
          .map((f) => (f?.question ?? "").trim().toLowerCase())
          .filter(Boolean);
        const arr = byService.get(service.slug) ?? [];
        arr.push({ id, questions });
        byService.set(service.slug, arr);
      }
    }

    const hubPath = path.join(ROOT, "content", "locations", country.slug, "hub.mdx");
    if (fs.existsSync(hubPath)) {
      const raw = fs.readFileSync(hubPath, "utf-8");
      const { data, content } = matter(raw);
      results.push(await checkFrontmatter(`${country.slug}/hub`, data, content));
    }
  }

  persistUrlCache();

  const faqReuseProblems = checkFaqReuse(byService);

  console.log("=== Substance gate ===\n");
  const live = results.filter((r) => !r.draft);
  const drafts = results.filter((r) => r.draft);
  console.log(`${live.length} page(s) marked draft:false, ${drafts.length} page(s) still draft:true (not checked).\n`);

  let failing = 0;
  for (const r of results) {
    if (r.draft) continue;
    if (r.problems.length === 0) {
      console.log(`  [PASS] ${r.id}`);
    } else {
      failing++;
      console.log(`  [FAIL] ${r.id}`);
      for (const p of r.problems) console.log(`         - ${p}`);
    }
  }

  if (faqReuseProblems.length > 0) {
    console.log("\n  [FAIL] FAQ question reuse across countries (same service):");
    for (const p of faqReuseProblems) console.log(`         - ${p}`);
    failing += faqReuseProblems.length;
  }

  if (failing > 0) {
    console.log(`\n${failing} substance failure(s). Build blocked.`);
    process.exitCode = 1;
    return;
  }
  console.log("\nAll live (draft:false) pages pass the substance gate.");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});


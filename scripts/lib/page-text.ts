import matter from "gray-matter";

/**
 * Text extraction and similarity primitives shared by the page-quality
 * gates (scripts/check-page-*.ts). These are heuristics, not a renderer:
 * they operate on source text (MDX markdown, or .tsx source via regex),
 * not on actually-rendered HTML, so the build doesn't need a running
 * server to gate itself. Good enough to catch doorway-page-style
 * duplication; not a substitute for human review.
 */

export interface ExtractedPage {
  title: string;
  description: string;
  h1: string;
  faqs: string[];
  bodyText: string;
}

/** Demonyms/forms to strip during normalization, keyed by country slug. */
export const DEMONYMS: Record<string, string[]> = {
  singapore: ["singapore", "singaporean"],
  usa: ["united states", "usa", "u.s.a.", "u.s.", "us", "america", "american", "americans"],
  uk: ["united kingdom", "uk", "u.k.", "britain", "british", "great britain"],
  australia: ["australia", "australian", "aussie", "australians"],
  dubai: ["united arab emirates", "uae", "u.a.e.", "dubai", "emirati", "emiratis"],
  malaysia: ["malaysia", "malaysian"],
};

const PLATFORM_NAMES = [
  "google business profile", "google maps", "google", "gbp", "yelp", "better business bureau", "bbb",
  "apple business connect", "trustpilot", "checkatrade", "yell", "facebook", "instagram", "tiktok",
  "whatsapp", "gumtree", "thumbtack", "angi", "homeadvisor", "houzz", "zomato", "tripadvisor",
];

const CURRENCY_CODES = ["sgd", "usd", "gbp", "aud", "aed", "myr"];

/** Strips a `const name = { ... }` (or `export const name: Type = { ... }`) block, brace-balanced. */
export function stripBalancedBlock(source: string, names: string[]): string {
  let result = source;
  for (const name of names) {
    const re = new RegExp(`(export\\s+)?const\\s+${name}\\s*(?::[^=]+)?=\\s*\\{`, "g");
    let match: RegExpExecArray | null;
    // eslint-disable-next-line no-cond-assign
    while ((match = re.exec(result))) {
      const start = match.index;
      let i = match.index + match[0].length;
      let depth = 1;
      while (i < result.length && depth > 0) {
        if (result[i] === "{") depth++;
        else if (result[i] === "}") depth--;
        i++;
      }
      let end = i;
      if (result[end] === ";") end++;
      result = result.slice(0, start) + result.slice(end);
      re.lastIndex = start;
    }
  }
  return result;
}

const DROP_ATTRS = [
  "className", "href", "src", "id", "key", "rel", "target", "role",
  "variant", "placeholder", "htmlFor", "icon", "x", "y",
];

/** Extracts title/description/h1/faqs/bodyText from a .tsx page source via regex heuristics (no AST, no rendering). */
export function extractTsxPage(source: string): ExtractedPage {
  const titleMatch =
    source.match(/title:\s*\{\s*absolute:\s*"((?:[^"\\]|\\.)*)"/) ??
    source.match(/\btitle:\s*"((?:[^"\\]|\\.)*)"/);
  const title = titleMatch?.[1] ?? "";

  const descMatch = source.match(/\bdescription:\s*\n?\s*"((?:[^"\\]|\\.)*)"/);
  const description = descMatch?.[1] ?? "";

  let h1 = "";
  const h1TagMatch = source.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (h1TagMatch) {
    h1 = h1TagMatch[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  } else {
    const h1PropMatch =
      source.match(/\bh1=\{?"((?:[^"\\]|\\.)*)"/) ?? source.match(/\bh1:\s*"((?:[^"\\]|\\.)*)"/);
    h1 = h1PropMatch?.[1] ?? "";
  }

  const faqs = [...source.matchAll(/\bq:\s*"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);

  let stripped = stripBalancedBlock(source, ["metadata", "schema", "serviceSchema"]);
  stripped = stripped.replace(/^import .*/gm, "");
  stripped = stripped.replace(/\{\/\*[\s\S]*?\*\/\}/g, "");
  for (const attr of DROP_ATTRS) {
    stripped = stripped.replace(new RegExp(`\\b${attr}=(\\{[^{}]*\\}|"[^"]*")`, "g"), "");
  }
  stripped = stripped.replace(/\bhref:\s*"[^"]*"/g, "");
  stripped = stripped.replace(/\bslug:\s*"[^"]*"/g, "");

  const bodyParts: string[] = [];
  for (const m of stripped.matchAll(/"((?:[^"\\]|\\.)*)"/g)) {
    if (m[1].length >= 3) bodyParts.push(m[1]);
  }
  for (const m of stripped.matchAll(/>([^<>{}\n][^<>{}]*)</g)) {
    const val = m[1].trim();
    if (val.length >= 3) bodyParts.push(val);
  }

  return { title, description, h1, faqs, bodyText: bodyParts.join(" ") };
}

/** Extracts the same shape from a money-page/hub MDX file (frontmatter + body). */
export function extractMdxPage(raw: string): ExtractedPage & { draft: boolean } {
  const { data, content } = matter(raw);
  const title = data.metaTitle ?? data.h1 ?? "";
  const description = data.metaDescription ?? "";
  const h1 = data.h1 ?? "";
  const draft = data.draft !== false;

  const faqs: string[] = [];
  for (const m of content.matchAll(/^#{2,4}\s+(.+\?)\s*$/gm)) faqs.push(m[1].trim());
  for (const m of content.matchAll(/\*\*(.+?\?)\*\*/g)) faqs.push(m[1].trim());
  if (Array.isArray(data.faqs)) {
    for (const f of data.faqs) if (f?.question) faqs.push(String(f.question).trim());
  }

  const body = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s*/gm, "")
    .replace(/[*_`]/g, "")
    .replace(/^>\s?/gm, "")
    .replace(/\s+/g, " ")
    .trim();

  return { title, description, h1, faqs: [...new Set(faqs)], bodyText: body, draft };
}

/** Lowercases, strips location/platform/currency names + numbers + punctuation. */
export function normalize(text: string, districtNames: string[]): string {
  let t = ` ${text.toLowerCase()} `;
  const allNames = [
    ...Object.values(DEMONYMS).flat(),
    ...districtNames.map((d) => d.toLowerCase()),
    ...PLATFORM_NAMES,
    ...CURRENCY_CODES,
  ].sort((a, b) => b.length - a.length);
  for (const name of allNames) {
    const esc = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(new RegExp(`\\b${esc}\\b`, "g"), " ");
  }
  t = t.replace(/[$£€]/g, " ");
  t = t.replace(/\d+([.,]\d+)?/g, " ");
  t = t.replace(/[^a-z\s]/g, " ");
  t = t.replace(/\s+/g, " ").trim();
  return t;
}

export function shingles(text: string, n: number): Set<string> {
  const words = text.split(" ").filter(Boolean);
  const set = new Set<string>();
  if (words.length === 0) return set;
  if (words.length < n) {
    set.add(words.join(" "));
    return set;
  }
  for (let i = 0; i + n <= words.length; i++) {
    set.add(words.slice(i, i + n).join(" "));
  }
  return set;
}

export function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const s of a) if (b.has(s)) inter++;
  const union = a.size + b.size - inter;
  return union === 0 ? 0 : inter / union;
}

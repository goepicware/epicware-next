/**
 * Single source of truth for the five target markets.
 *
 * slug is the URL segment under /locations/{slug}/. Decision #4
 * (2026-10-27): the UAE keeps its existing slug "dubai" rather than
 * renaming to "uae" — the live /locations/dubai page already has real
 * content and SEO equity under that slug, and a rename would need its
 * own 301 for no real benefit. displayName and hreflang still correctly
 * target the UAE as a whole, not just Dubai city.
 *
 * phone/email: Epicware has one real, shared contact point today, used
 * honestly across every existing country page (verified in the Phase 0
 * audit — not invented here). Not faking separate per-country numbers.
 *
 * Malaysia: decision #5 (2026-10-27) — out of scope, left alone,
 * intentionally not included in this list.
 */

export interface Country {
  /** URL segment under /locations/{slug}/ */
  slug: string;
  /** Full market name for copy and schema, not necessarily the slug's city/short name. */
  displayName: string;
  hreflang: string;
  currency: string;
  phone: string;
  email: string;
  /** True for the one country that genuinely doesn't have a page yet. */
  isNew: boolean;
}

export const COUNTRIES: Country[] = [
  { slug: "singapore", displayName: "Singapore", hreflang: "en-SG", currency: "SGD", phone: "+6590013157", email: "hello@epicware.ai", isNew: false },
  { slug: "usa", displayName: "United States", hreflang: "en-US", currency: "USD", phone: "+6590013157", email: "hello@epicware.ai", isNew: false },
  { slug: "uk", displayName: "United Kingdom", hreflang: "en-GB", currency: "GBP", phone: "+6590013157", email: "hello@epicware.ai", isNew: false },
  { slug: "australia", displayName: "Australia", hreflang: "en-AU", currency: "AUD", phone: "+6590013157", email: "hello@epicware.ai", isNew: true },
  { slug: "dubai", displayName: "United Arab Emirates", hreflang: "en-AE", currency: "AED", phone: "+6590013157", email: "hello@epicware.ai", isNew: false },
];

export function getCountry(slug: string): Country | undefined {
  return COUNTRIES.find((c) => c.slug === slug);
}

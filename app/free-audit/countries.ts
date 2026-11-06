/**
 * The two markets the free audit currently supports. Kept local to
 * free-audit rather than folded into lib/site/countries.ts because this
 * config carries audit-pipeline specifics (Places API country restriction,
 * DataForSEO Maps location_code, date locale) that the site-wide Country
 * type has no use for.
 *
 * DataForSEO location_code values: United States uses DataForSEO's
 * documented country-level code (2840, same as the Google Ads criteria ID).
 * Singapore keeps the value already live in production
 * (app/api/audit/keyword-intel/route.ts) unchanged — not re-verified here,
 * out of scope for this change.
 */

export type AuditCountryId = "sg" | "us";

export interface AuditCountryConfig {
  id: AuditCountryId;
  label: string;
  /** label with a leading article where English grammar requires one ("Singapore" vs "the United States") — use in running prose like "across {labelWithArticle}". */
  labelWithArticle: string;
  /** Places API Autocomplete/text-search country restriction (ISO 3166-1 alpha-2, lowercase). */
  isoCode: string;
  currencySymbol: string;
  /** toLocaleDateString locale. */
  locale: string;
  dataForSeoLocationCode: number;
}

export const AUDIT_COUNTRIES: Record<AuditCountryId, AuditCountryConfig> = {
  sg: { id: "sg", label: "Singapore", labelWithArticle: "Singapore", isoCode: "sg", currencySymbol: "S$", locale: "en-SG", dataForSeoLocationCode: 1023254 },
  us: { id: "us", label: "United States", labelWithArticle: "the United States", isoCode: "us", currencySymbol: "$", locale: "en-US", dataForSeoLocationCode: 2840 },
};

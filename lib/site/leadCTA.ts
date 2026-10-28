/**
 * Per-service lead-CTA copy for ServiceLeadCTA (components/site/ServiceLeadCTA.tsx).
 *
 * Keyed by service slug (lib/site/services.ts) so the component works for
 * any /locations/{country}/{service}/ page. Only review-removal is
 * populated today — a service with no entry here falls back to
 * MoneyPageLayout's generic "Book a Free Demo / Free GBP Audit" hero
 * buttons rather than rendering a half-defined CTA.
 */

export interface LeadCTAConfig {
  /** Anchor id the hero's primary button scrolls to — must match the bottom form's wrapper id. */
  formAnchorId: string;
  primaryLabel: string;
  formTitle: string;
  formSubtitle: string;
  profileUrlLabel: string;
  profileUrlPlaceholder: string;
  notesLabel: string;
  notesPlaceholder: string;
}

export const LEAD_CTA_CONFIG: Record<string, LeadCTAConfig> = {
  "review-removal": {
    formAnchorId: "removal-check-form",
    primaryLabel: "Get a Free Removal Check",
    formTitle: "Get a Free Removal Check",
    formSubtitle: "Send us the review and the profile it's on — we'll tell you honestly whether it's removable.",
    profileUrlLabel: "Google or Yelp profile URL",
    profileUrlPlaceholder: "https://g.page/your-business or https://yelp.com/biz/your-business",
    notesLabel: "Which review(s)?",
    notesPlaceholder: "Optional — paste the review text or describe which one(s) you want checked",
  },
};

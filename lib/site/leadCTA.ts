/**
 * Per-service lead-CTA copy for ServiceLeadCTA (components/site/ServiceLeadCTA.tsx).
 *
 * Keyed by service slug (lib/site/services.ts) so the component works for
 * any /locations/{country}/{service}/ page. A service with no entry here
 * falls back to MoneyPageLayout's generic "Book a Free Demo / Free GBP
 * Audit" hero buttons rather than rendering a half-defined CTA.
 *
 * `fields` describes the form's extra inputs beyond the universal
 * name/email/phone — each field's `payloadKey` is the key it's submitted
 * under in the POST body to /api/audit-lead, and must match a field name
 * that route's handler for `leadType` actually reads.
 */

export interface LeadCTAField {
  id: string;
  label: string;
  placeholder: string;
  required: boolean;
  type: "text" | "textarea";
  /** Key this field's value is submitted under in the /api/audit-lead POST body. */
  payloadKey: string;
}

export interface LeadCTAConfig {
  primaryLabel: string;
  /** Value sent as `leadType` in the POST body — not always the same as the service slug (e.g. google-business-profile → "gbp-audit"). Kept for documentation/consistency even on link-mode configs, though it isn't submitted anywhere when `fields` is empty. */
  leadType: string;
  /**
   * Link-mode vs form-mode. When set, the hero's primary button links
   * straight to this existing page (`?country={countrySlug}` appended)
   * instead of scrolling to a bottom form — for CTAs that reuse an
   * existing flow (e.g. /free-audit, /ai-visibility) rather than
   * needing a new one. `fields` must be empty when this is set, and
   * ServiceLeadCTA's bottom variant renders nothing in that case.
   */
  primaryHref?: string;
  /** Anchor id the hero's primary button scrolls to in form-mode — must match the bottom form's wrapper id. Required unless primaryHref is set. */
  formAnchorId?: string;
  formTitle?: string;
  formSubtitle?: string;
  fields: LeadCTAField[];
}

export const LEAD_CTA_CONFIG: Record<string, LeadCTAConfig> = {
  "review-removal": {
    formAnchorId: "removal-check-form",
    primaryLabel: "Get a Free Removal Check",
    formTitle: "Get a Free Removal Check",
    formSubtitle: "Send us the review and the profile it's on — we'll tell you honestly whether it's removable.",
    leadType: "review-removal",
    fields: [
      {
        id: "profile-url",
        label: "Google or Yelp profile URL",
        placeholder: "https://g.page/your-business or https://yelp.com/biz/your-business",
        required: true,
        type: "text",
        payloadKey: "reviewProfileUrl",
      },
      {
        id: "notes",
        label: "Which review(s)?",
        placeholder: "Optional — paste the review text or describe which one(s) you want checked",
        required: false,
        type: "textarea",
        payloadKey: "notes",
      },
    ],
  },

  "local-seo": {
    formAnchorId: "local-visibility-scan-form",
    primaryLabel: "Get a Free Local Visibility Scan",
    formTitle: "Get a Free Local Visibility Scan",
    formSubtitle: "We'll check where you actually rank across your metro — Google, Apple Maps, Bing and AI search — and show you the gaps.",
    leadType: "local-seo",
    fields: [
      {
        id: "business",
        label: "Business name or Google Maps link",
        placeholder: "Your business name, or paste your Google Maps link",
        required: true,
        type: "text",
        payloadKey: "businessNameOrMapsLink",
      },
      {
        id: "metro",
        label: "City / metro area",
        placeholder: "e.g. Dallas, TX",
        required: true,
        type: "text",
        payloadKey: "cityMetro",
      },
    ],
  },

  "google-business-profile": {
    formAnchorId: "gbp-audit-form",
    primaryLabel: "Get a Free 19-Point GBP Audit",
    formTitle: "Get a Free 19-Point GBP Audit",
    formSubtitle: "We'll check your profile against what ranks and what Google allows, and send back a prioritized fix list.",
    leadType: "gbp-audit",
    fields: [
      {
        id: "maps-link",
        label: "Google Maps link to your profile",
        placeholder: "https://g.page/your-business or https://maps.app.goo.gl/...",
        required: true,
        type: "text",
        payloadKey: "gbpMapsLink",
      },
    ],
  },

  // Link-mode — reuses the existing free-audit wizard rather than a new form.
  seo: {
    primaryLabel: "Get a Free Website SEO Audit",
    leadType: "seo-audit",
    primaryHref: "/free-audit",
    fields: [],
  },

  // Link-mode — reuses the existing /ai-visibility tool rather than a new form.
  "ai-search-visibility": {
    primaryLabel: "Get a Free AI Visibility Check",
    leadType: "ai-visibility",
    primaryHref: "/ai-visibility",
    fields: [],
  },

  "review-management": {
    formAnchorId: "review-health-check-form",
    primaryLabel: "Get a Free Review Health Check",
    formTitle: "Get a Free Review Health Check",
    formSubtitle: "We'll check your response rate, response time and rating trend, and flag what needs attention now.",
    leadType: "review-management",
    fields: [
      {
        id: "profile-link",
        label: "Google or Yelp link",
        placeholder: "https://g.page/your-business or https://yelp.com/biz/your-business",
        required: true,
        type: "text",
        payloadKey: "reviewManagementProfileLink",
      },
    ],
  },
};

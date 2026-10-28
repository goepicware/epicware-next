/**
 * Per-service lead-CTA copy for ServiceLeadCTA (components/site/ServiceLeadCTA.tsx).
 *
 * Keyed by service slug (lib/site/services.ts) so the component works for
 * any /locations/{country}/{service}/ page — and every future country,
 * not just USA. A service with no entry here falls back to
 * MoneyPageLayout's generic "Book a Free Demo / Free GBP Audit" hero
 * buttons rather than rendering a half-defined CTA.
 *
 * Every entry is an inline form embedded directly in the CTA card — no
 * link-mode (an earlier version of this file linked seo/ai-search-visibility
 * out to /free-audit and /ai-visibility instead of collecting the lead
 * directly; that's been replaced with real forms here, same as every
 * other service).
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
  /** Value sent as `leadType` in the POST body — not always the same as the service slug (e.g. google-business-profile → "gbp-audit"). */
  leadType: string;
  /** Anchor id the hero's primary button scrolls to — must match the form card's wrapper id. */
  formAnchorId: string;
  formTitle: string;
  formSubtitle: string;
  /** The thing being delivered, for the inline success message: "we'll send your {successNoun} within 1 business day." */
  successNoun: string;
  fields: LeadCTAField[];
}

export const LEAD_CTA_CONFIG: Record<string, LeadCTAConfig> = {
  "review-removal": {
    formAnchorId: "removal-check-form",
    primaryLabel: "Get a Free Removal Check",
    formTitle: "Get a Free Removal Check",
    formSubtitle: "Send us the review and the profile it's on — we'll tell you honestly whether it's removable.",
    leadType: "review-removal",
    successNoun: "removal check",
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
    successNoun: "local visibility scan",
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
    successNoun: "GBP audit",
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

  seo: {
    formAnchorId: "seo-audit-form",
    primaryLabel: "Get a Free Website SEO Audit",
    formTitle: "Get a Free Website SEO Audit",
    formSubtitle: "We'll check your technical SEO, content and authority gaps, and show you where you're losing to competitors.",
    leadType: "seo-audit",
    successNoun: "SEO audit",
    fields: [
      {
        id: "website",
        label: "Website URL",
        placeholder: "https://yourbusiness.com",
        required: true,
        type: "text",
        payloadKey: "websiteUrl",
      },
    ],
  },

  "ai-search-visibility": {
    formAnchorId: "ai-visibility-check-form",
    primaryLabel: "Get a Free AI Visibility Check",
    formTitle: "Get a Free AI Visibility Check",
    formSubtitle: "See what ChatGPT, Gemini and Google's AI features currently say about your business — or whether they mention you at all.",
    leadType: "ai-visibility",
    successNoun: "AI visibility check",
    fields: [
      {
        id: "business-name",
        label: "Business name",
        placeholder: "Your business name",
        required: true,
        type: "text",
        payloadKey: "businessName",
      },
      {
        id: "website",
        label: "Website URL",
        placeholder: "https://yourbusiness.com",
        required: true,
        type: "text",
        payloadKey: "websiteUrl",
      },
    ],
  },

  "review-management": {
    formAnchorId: "review-health-check-form",
    primaryLabel: "Get a Free Review Health Check",
    formTitle: "Get a Free Review Health Check",
    formSubtitle: "We'll check your response rate, response time and rating trend, and flag what needs attention now.",
    leadType: "review-management",
    successNoun: "review health check",
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

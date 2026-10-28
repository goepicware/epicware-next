import { trackEvent } from "@/lib/meta-tracking";

export type PatientEngineCtaType = "audit" | "strategy_call";
export type PatientEngineCtaLocation = "hero" | "price" | "proof" | "final" | "sticky";

/**
 * Lead already fires on successful form submits elsewhere (ServiceLeadCTA,
 * BookDemoForm) — this page has no form of its own, only links out to
 * /free-audit and /book-demo, so it only ever tracks the click itself.
 */
export function trackPatientEngineCta(ctaType: PatientEngineCtaType, ctaLocation: PatientEngineCtaLocation): void {
  trackEvent("PatientEngineCTAClick", {
    customData: {
      content_name: "90-Day Patient Engine",
      cta_type: ctaType,
      cta_location: ctaLocation,
    },
  });
}

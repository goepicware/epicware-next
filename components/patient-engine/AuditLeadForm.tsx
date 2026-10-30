"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowRight, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/meta-tracking";
import { createLeadTransactionId, trackGoogleAdsLead } from "@/lib/tracking/google-ads";
import { getStoredClickIds } from "@/lib/tracking/click-ids";

/**
 * Inline audit-request form for the Final CTA section — mirrors
 * components/site/ServiceLeadCTA.tsx's LeadForm (same retry/backup/error
 * UX, same /api/audit-lead path), but built standalone rather than reused
 * directly: that component's fields/leadType come from
 * lib/site/leadCTA.ts (keyed by a real service slug) and its secondary
 * link derives /book-demo's ?service= param from that same slug, which
 * would point at "patient-engine" instead of the "full-stack" plan this
 * offer actually pre-fills. This page's leadType ("patient-engine") and
 * country ("singapore") are fixed, not service-driven.
 */

const inputClass =
  "flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function AuditLeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+65 ");
  const [clinicName, setClinicName] = useState("");
  const [mapsLink, setMapsLink] = useState("");
  const [outlets, setOutlets] = useState("");
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saved" | "failed">("idle");

  // Mirrors ServiceLeadCTA's submitWithRetry — up to 3 attempts with a
  // short backoff; the backend durably logs the lead (LEAD_BACKUP) before
  // anything that can fail, so a failure here means the request never
  // reached the server at all.
  const submitWithRetry = useCallback(async (payload: Record<string, unknown>) => {
    const attempts = 3;
    for (let i = 0; i < attempts; i++) {
      try {
        const res = await fetch("/api/audit-lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          setSaveStatus("saved");
          // Lead fires on successful submit only — CTA clicks elsewhere on
          // this page fire the custom PatientEngineCTAClick event instead.
          trackEvent("Lead", {
            userData: { em: payload.email as string, ph: payload.phone as string },
            customData: {
              content_name: "90-Day Patient Engine Missed-Revenue Audit",
              country: "singapore",
              service: "patient-engine",
            },
          });
          trackGoogleAdsLead({
            transactionId: payload.transactionId as string,
            leadType: "patient-engine",
            country: "singapore",
            email: payload.email as string,
            phone: payload.phone as string,
          });
          return;
        }
      } catch {
        // network failure — fall through to retry
      }
      if (i < attempts - 1) await delay(800 * (i + 1));
    }
    setSaveStatus("failed");
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!name.trim() || !email.trim()) {
        setFormError("Name and email are required.");
        return;
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        setFormError("Please enter a valid email address.");
        return;
      }
      if (!clinicName.trim()) {
        setFormError("Clinic name is required.");
        return;
      }
      if (!mapsLink.trim()) {
        setFormError("Google Maps link is required.");
        return;
      }
      setFormError("");
      setSubmitting(true);
      await submitWithRetry({
        name,
        email,
        phone,
        leadType: "patient-engine",
        country: "singapore",
        clinicName,
        mapsLink,
        outlets,
        transactionId: createLeadTransactionId(),
        ...getStoredClickIds(),
      });
      setSubmitting(false);
    },
    [name, email, phone, clinicName, mapsLink, outlets, submitWithRetry]
  );

  if (saveStatus === "saved") {
    return (
      <div id="audit-form" className="scroll-mt-28 rounded-2xl border border-border/60 bg-card p-8 text-center">
        <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
        <h3 className="font-display font-bold text-foreground text-xl mb-2">Got it — thanks.</h3>
        <p className="text-muted-foreground">
          Thanks, we&apos;ll send your missed-revenue audit within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <div id="audit-form" className="scroll-mt-28 rounded-2xl border border-border/60 bg-card p-6 lg:p-8">
      <h3 className="font-display font-bold text-foreground text-xl mb-1">Get Your Free Missed-Revenue Audit</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Tell us about your clinic and we&apos;ll send back where you rank, whether AI search mentions you, and
        what that&apos;s costing you.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="pe-audit-name" className="text-sm font-medium text-foreground">
              Name <span className="text-destructive">*</span>
            </label>
            <input
              id="pe-audit-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className={inputClass}
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="pe-audit-email" className="text-sm font-medium text-foreground">
              Email <span className="text-destructive">*</span>
            </label>
            <input
              id="pe-audit-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@clinic.com"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="pe-audit-phone" className="text-sm font-medium text-foreground">
              Phone
            </label>
            <input
              id="pe-audit-phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+65 XXXX XXXX"
              className={inputClass}
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="pe-audit-clinic" className="text-sm font-medium text-foreground">
              Clinic name <span className="text-destructive">*</span>
            </label>
            <input
              id="pe-audit-clinic"
              required
              value={clinicName}
              onChange={(e) => setClinicName(e.target.value)}
              placeholder="e.g. Orchard Aesthetics"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="pe-audit-maps" className="text-sm font-medium text-foreground">
              Google Maps link to your clinic <span className="text-destructive">*</span>
            </label>
            <input
              id="pe-audit-maps"
              required
              value={mapsLink}
              onChange={(e) => setMapsLink(e.target.value)}
              placeholder="https://maps.app.goo.gl/..."
              className={inputClass}
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="pe-audit-outlets" className="text-sm font-medium text-foreground">
              Number of outlets
            </label>
            <input
              id="pe-audit-outlets"
              value={outlets}
              onChange={(e) => setOutlets(e.target.value)}
              placeholder="e.g. 1"
              className={inputClass}
            />
          </div>
        </div>

        {formError && (
          <p className="text-sm text-destructive flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4" /> {formError}
          </p>
        )}
        {saveStatus === "failed" && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-start gap-2.5 text-sm text-amber-900">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
            <span>
              We couldn&apos;t save your details. Email us directly at{" "}
              <a href="mailto:hello@epicware.ai" className="underline font-medium">
                hello@epicware.ai
              </a>{" "}
              and we&apos;ll pick it up from there.
            </span>
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-colors disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Submitting…
            </>
          ) : (
            <>
              Get My Free Missed-Revenue Audit <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-center text-sm">
          <Link
            href="/book-demo?service=full-stack&country=singapore#form"
            className="inline-flex items-center justify-center min-h-11 py-2.5 text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
          >
            or Book a Strategy Call
          </Link>
        </p>
      </form>
    </div>
  );
}

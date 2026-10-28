"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowRight, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { getCountry } from "@/lib/site/countries";
import { LEAD_CTA_CONFIG } from "@/lib/site/leadCTA";

/**
 * Page-specific lead CTA for /locations/{country}/{service}/ pages —
 * driven entirely by countrySlug + serviceSlug so the same component
 * serves every country×service combination. Renders nothing when
 * lib/site/leadCTA.ts has no config for serviceSlug, so pages without a
 * defined CTA fall back to MoneyPageLayout's generic hero buttons
 * instead of showing a half-built form.
 *
 * variant="hero": two buttons — primary scrolls to the bottom form,
 * secondary links to /book-demo pre-filled with country+service.
 * variant="bottom": the actual form, submitting to /api/audit-lead with
 * the same retry/backup/visible-error handling as the free-audit wizard
 * (app/free-audit/FreeAuditWizard.tsx's submitLeadWithRetry).
 */
export default function ServiceLeadCTA({
  countrySlug,
  serviceSlug,
  variant,
}: {
  countrySlug: string;
  serviceSlug: string;
  variant: "hero" | "bottom";
}) {
  const config = LEAD_CTA_CONFIG[serviceSlug];
  const country = getCountry(countrySlug);
  if (!config || !country) return null;

  if (variant === "hero") {
    return (
      <div className="flex flex-wrap gap-3">
        <a
          href={`#${config.formAnchorId}`}
          className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-colors"
        >
          {config.primaryLabel} <ArrowRight className="w-4 h-4" />
        </a>
        <Link
          href={`/book-demo?country=${countrySlug}&service=${serviceSlug}`}
          className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-border font-semibold text-sm hover:border-primary/40 transition-colors"
        >
          Book a Strategy Call
        </Link>
      </div>
    );
  }

  return <LeadForm countrySlug={countrySlug} serviceSlug={serviceSlug} dialCode={country.dialCode} />;
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const inputClass =
  "flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

function LeadForm({
  countrySlug,
  serviceSlug,
  dialCode,
}: {
  countrySlug: string;
  serviceSlug: string;
  dialCode: string;
}) {
  const config = LEAD_CTA_CONFIG[serviceSlug];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(`${dialCode} `);
  const [profileUrl, setProfileUrl] = useState("");
  const [notes, setNotes] = useState("");
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saved" | "failed">("idle");

  // Mirrors app/free-audit/FreeAuditWizard.tsx's submitLeadWithRetry: up
  // to 3 attempts with a short backoff, since the backend durably logs
  // the lead (LEAD_BACKUP) before anything that can fail — a failure
  // here means the request never reached the server at all.
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
      if (!profileUrl.trim()) {
        setFormError(`${config.profileUrlLabel} is required.`);
        return;
      }
      setFormError("");
      setSubmitting(true);
      await submitWithRetry({
        name,
        email,
        phone,
        leadType: serviceSlug,
        country: countrySlug,
        reviewProfileUrl: profileUrl,
        websiteUrl: profileUrl,
        notes,
      });
      setSubmitting(false);
    },
    [name, email, phone, profileUrl, notes, countrySlug, serviceSlug, config, submitWithRetry]
  );

  if (saveStatus === "saved") {
    return (
      <div id={config.formAnchorId} className="scroll-mt-28 rounded-2xl border border-border/60 bg-card p-8 text-center">
        <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
        <h3 className="font-display font-bold text-foreground text-xl mb-2">Got it — thanks.</h3>
        <p className="text-muted-foreground">We&apos;ll review your submission and get back to you shortly with what&apos;s removable.</p>
      </div>
    );
  }

  return (
    <div id={config.formAnchorId} className="scroll-mt-28 rounded-2xl border border-border/60 bg-card p-6 lg:p-8">
      <h3 className="font-display font-bold text-foreground text-xl mb-1">{config.formTitle}</h3>
      <p className="text-sm text-muted-foreground mb-6">{config.formSubtitle}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="lead-name" className="text-sm font-medium text-foreground">
              Name <span className="text-destructive">*</span>
            </label>
            <input id="lead-name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" className={inputClass} />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="lead-email" className="text-sm font-medium text-foreground">
              Email <span className="text-destructive">*</span>
            </label>
            <input id="lead-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className={inputClass} />
          </div>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="lead-phone" className="text-sm font-medium text-foreground">
            Phone
          </label>
          <input id="lead-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={`${dialCode} XXX XXX XXXX`} className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="lead-profile-url" className="text-sm font-medium text-foreground">
            {config.profileUrlLabel} <span className="text-destructive">*</span>
          </label>
          <input
            id="lead-profile-url"
            required
            value={profileUrl}
            onChange={(e) => setProfileUrl(e.target.value)}
            placeholder={config.profileUrlPlaceholder}
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="lead-notes" className="text-sm font-medium text-foreground">
            {config.notesLabel}
          </label>
          <textarea
            id="lead-notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={config.notesPlaceholder}
            rows={3}
            className={`${inputClass} h-auto py-2.5 resize-none`}
          />
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
              {config.primaryLabel} <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

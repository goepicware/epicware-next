"use client";

import { useState } from "react";
import { GOOGLE_ADS_CONVERSION_ID } from "@/lib/ai-visibility-constants";

const FORM_ID = "1iTvX81N9ctpHWxvvPKU";
const SUBMIT_URL = `https://atomos-one.vercel.app/api/forms/${FORM_ID}/submit`;

const inputClass =
  "flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors";

// Matches the declare-global pattern already used in components/home/VideoSection.tsx.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface SubmitResponse {
  redirectUrl?: string;
  thankYouMessage?: string;
  error?: string;
}

// The ONLY instance of this form on /ai-visibility — rendered once, in
// FinalCTA.tsx, inside the id="audit-form" section.
export default function LeadstackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ values: { name, email, phone, company } }),
      });
      const body: SubmitResponse = await res.json();
      if (!res.ok) throw new Error(body.error || "Submission failed");

      // Google Ads conversion — fires on confirmed successful submission,
      // before the redirect (per build spec, not on button click).
      if (typeof window !== "undefined" && window.gtag && GOOGLE_ADS_CONVERSION_ID) {
        window.gtag("event", "conversion", { send_to: GOOGLE_ADS_CONVERSION_ID });
      }

      if (body.redirectUrl) {
        window.location.href = body.redirectUrl;
        return;
      }

      setThankYouMessage(body.thankYouMessage || "Thanks! We'll be in touch shortly.");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again or email hello@epicware.ai.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-foreground text-xl mb-2">We&apos;ve received your request</h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">{thankYouMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div className="space-y-1.5">
        <label htmlFor="ls-name" className="text-sm font-medium text-foreground">
          Full Name <span className="text-destructive">*</span>
        </label>
        <input id="ls-name" name="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" className={inputClass} />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="ls-email" className="text-sm font-medium text-foreground">
          Email <span className="text-destructive">*</span>
        </label>
        <input id="ls-email" name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@example.com" className={inputClass} />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="ls-phone" className="text-sm font-medium text-foreground">
          Phone <span className="text-destructive">*</span>
        </label>
        <input id="ls-phone" name="phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+65 9123 4567" className={inputClass} />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="ls-company" className="text-sm font-medium text-foreground">
          Company <span className="text-destructive">*</span>
        </label>
        <input id="ls-company" name="company" type="text" required value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Acme Inc." className={inputClass} />
      </div>

      {error && <p className="text-destructive text-sm">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 disabled:opacity-60 transition-all duration-300 hover:scale-[1.01]"
      >
        {submitting ? "Sending…" : "Send message"}
      </button>

      <p className="text-center text-xs text-muted-foreground">Free · 60 seconds · No credit card</p>
    </form>
  );
}

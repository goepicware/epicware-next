"use client";

import { useId, useState } from "react";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/meta-tracking";

const FORM_ID = "nelz1TUKVkt30P8LxELP";
const SUBMIT_URL = `https://atomos-one.vercel.app/api/forms/${FORM_ID}/submit`;

const inputClass =
  "flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors";

const textareaClass =
  "flex w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none transition-colors";

interface LeadStackFormProps {
  id?: string;
}

interface SubmitResponse {
  redirectUrl?: string;
  thankYouMessage?: string;
  error?: string;
}

export default function LeadStackForm({ id }: LeadStackFormProps) {
  // Unique per-instance id prefix — this component renders twice on the page
  // (hero + final CTA); without this, both instances would emit duplicate
  // DOM ids and break label-input association on the second instance.
  const uid = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reviewLink, setReviewLink] = useState("");
  const [company, setCompany] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const values: Record<string, string> = {
      name,
      email,
      phone,
      f_4qxkvu8: reviewLink,
      f_xt45ool: company,
      ...(smsConsent ? { f_4kk5whp: "true" } : {}),
    };

    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ values }),
      });
      const body: SubmitResponse = await res.json();
      if (!res.ok) throw new Error(body.error || "Submission failed");

      if (body.redirectUrl) {
        window.location.href = body.redirectUrl;
        return;
      }

      trackEvent("Lead", {
        userData: { em: email, ph: phone },
        customData: {
          content_name: "Bad Review Removal",
          content_category: "Remove Review",
        },
      });

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
      <div id={id} className="py-8 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-7 h-7 text-green-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-foreground text-xl mb-2">
          We&apos;ve received your request
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
          {thankYouMessage}
        </p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} className="space-y-4">
      {/* Full name + email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <label htmlFor={`${uid}-name`} className="text-sm font-medium text-foreground">
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id={`${uid}-name`}
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor={`${uid}-email`} className="text-sm font-medium text-foreground">
            Email <span className="text-destructive">*</span>
          </label>
          <input
            type="email"
            id={`${uid}-email`}
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Phone + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <label htmlFor={`${uid}-phone`} className="text-sm font-medium text-foreground">
            Phone <span className="text-destructive">*</span>
          </label>
          <input
            type="tel"
            id={`${uid}-phone`}
            name="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+65 9123 4567"
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor={`${uid}-company`} className="text-sm font-medium text-foreground">
            Company Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id={`${uid}-company`}
            name="f_xt45ool"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Acme Inc."
            className={inputClass}
          />
        </div>
      </div>

      {/* Review link */}
      <div className="space-y-1.5">
        <label htmlFor={`${uid}-review-link`} className="text-sm font-medium text-foreground">
          Your Google Business Profile Link or Review Link
          <span className="text-muted-foreground font-normal ml-1.5 text-xs">Optional</span>
        </label>
        <textarea
          id={`${uid}-review-link`}
          name="f_4qxkvu8"
          value={reviewLink}
          onChange={(e) => setReviewLink(e.target.value)}
          placeholder="https://share.google/3tJOXf8cUYvtZnRN7"
          className={textareaClass}
          rows={3}
        />
      </div>

      {/* SMS consent */}
      <label htmlFor={`${uid}-sms-consent`} className="flex items-start gap-2.5 cursor-pointer">
        <input
          type="checkbox"
          id={`${uid}-sms-consent`}
          name="f_4kk5whp"
          value="true"
          checked={smsConsent}
          onChange={(e) => setSmsConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-input text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <span className="text-xs text-muted-foreground leading-relaxed">
          By checking this box, you agree to receive SMS messages from Epicware. Message
          frequency varies. Message and data rates may apply. Reply STOP to opt out, HELP
          for help.
        </span>
      </label>

      {error && <p className="text-destructive text-sm">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 disabled:opacity-60 transition-all duration-300 hover:scale-[1.01]"
      >
        {submitting ? (
          "Sending…"
        ) : (
          <>
            Get Free Assessment <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        No charge for the assessment. No pressure to proceed.
      </p>
    </form>
  );
}

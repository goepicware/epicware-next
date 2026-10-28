"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/meta-tracking";
import { SERVICES } from "@/lib/site/services";

const INDUSTRIES = [
  "Restaurant / F&B",
  "Nail & Hair Salon",
  "Healthcare Clinic",
  "Tuition Centre",
  "Wellness Centre",
  "Dental Clinic",
  "Car Workshop",
  "Physiotherapy/Sports Clinic",
  "Retail Store",
  "Other",
];

// Generated from SERVICES (lib/site/services.ts), not hardcoded, so a new
// service added there automatically shows up here — including offerings
// like "Paid Ads (Google & Meta)" that have hasPage: false and so have no
// service page, menu item, or country grid entry yet. FULL_STACK_LABEL is
// the only option that isn't a real service slug; its label matches the
// Full Stack plan on /pricing. It's also the one non-SERVICES slug the
// ?service= pre-fill below recognizes (used by the /90-day-patient-engine
// offer page's "Book a Strategy Call" link, ?service=full-stack).
const FULL_STACK_LABEL = "Full Stack (everything, incl. paid ads)";
const INTERESTS = [...SERVICES.map((s) => s.name), FULL_STACK_LABEL];

// Values match the country slugs used across the site (lib/site/countries.ts,
// the ?country= param from ServiceLeadCTA's "Book a Strategy Call" link)
// so pre-filling from the URL and this select agree. currency here is
// deliberately NOT lib/site/countries.ts's `currency` field (GBP/AUD/AED
// for uk/australia/dubai) — revenue ranges are quoted in USD for every
// market except Singapore, which is SGD. phonePlaceholder mirrors each
// country's actual national number grouping, not a generic dial-code guess.
const COUNTRY_OPTIONS: { value: string; label: string; dialCode: string; currency: string; phonePlaceholder: string }[] = [
  { value: "singapore", label: "Singapore", dialCode: "+65", currency: "SGD", phonePlaceholder: "+65 XXXX XXXX" },
  { value: "usa", label: "United States", dialCode: "+1", currency: "USD", phonePlaceholder: "+1 XXX XXX XXXX" },
  { value: "uk", label: "United Kingdom", dialCode: "+44", currency: "USD", phonePlaceholder: "+44 XXXX XXXXXX" },
  { value: "australia", label: "Australia", dialCode: "+61", currency: "USD", phonePlaceholder: "+61 XXX XXX XXX" },
  { value: "dubai", label: "UAE", dialCode: "+971", currency: "USD", phonePlaceholder: "+971 XX XXX XXXX" },
  { value: "other", label: "Other", dialCode: "", currency: "USD", phonePlaceholder: "+XX XXXX XXXX" },
];

function getRevenueRanges(currency: string): string[] {
  return [
    `Below ${currency} 10,000`,
    `${currency} 10,000 – ${currency} 30,000`,
    `${currency} 30,000 – ${currency} 80,000`,
    `${currency} 80,000 – ${currency} 200,000`,
    `${currency} 200,000+`,
  ];
}

const inputClass =
  "flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const selectClass =
  "flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export default function BookDemoForm({
  initialCountry,
  initialService,
}: {
  initialCountry?: string;
  initialService?: string;
}) {
  const prefilledCountry = COUNTRY_OPTIONS.find((c) => c.value === initialCountry)?.value ?? "";
  const prefilledService =
    initialService === "full-stack" ? FULL_STACK_LABEL : SERVICES.find((s) => s.slug === initialService)?.name;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    companyName: "",
    industry: "",
    country: prefilledCountry,
    revenueRange: "",
    outlets: "",
    interests: prefilledService ? [prefilledService] : ([] as string[]),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (window.location.hash === "#form") {
      setTimeout(() => {
        document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  const selectedCountry = COUNTRY_OPTIONS.find((c) => c.value === formData.country);
  const phonePlaceholder = selectedCountry?.phonePlaceholder ?? "+XX XXXX XXXX";
  const currency = selectedCountry?.currency ?? "USD";
  const revenueRanges = getRevenueRanges(currency);

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          companyName: formData.companyName,
          industry: formData.industry,
          country: selectedCountry?.label ?? formData.country,
          revenueRange: formData.revenueRange,
          outlets: formData.outlets,
          interestedIn: formData.interests,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      // Track Lead + Schedule — dual-fire browser pixel + CAPI with same event_id
      trackEvent("Lead", {
        userData: { em: formData.email, ph: formData.phone },
        customData: {
          content_name: "Strategy Call",
          content_category: formData.industry,
          country: selectedCountry?.label ?? formData.country,
          services: formData.interests,
        },
      });
      trackEvent("Schedule", {
        userData: { em: formData.email, ph: formData.phone },
        customData: {
          content_name: "Strategy Call",
          country: selectedCountry?.label ?? formData.country,
          services: formData.interests,
        },
      });
      setStatus("success");
      setFormData({ fullName: "", phone: "", email: "", companyName: "", industry: "", country: "", revenueRange: "", outlets: "", interests: [] });
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">✓</span>
        </div>
        <h3 className="font-display font-bold text-foreground text-xl mb-2">Submitted!</h3>
        <p className="text-muted-foreground">We'll review your submission and be in touch shortly to confirm your strategy call.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-medium text-foreground">Full Name <span className="text-destructive">*</span></label>
          <input id="fullName" required value={formData.fullName} onChange={(e) => setFormData((p) => ({ ...p, fullName: e.target.value }))} placeholder="Your full name" className={inputClass} />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone <span className="text-destructive">*</span></label>
          <input id="phone" required value={formData.phone} onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))} placeholder={phonePlaceholder} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">Email <span className="text-destructive">*</span></label>
          <input id="email" type="email" required value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} placeholder="you@company.com" className={inputClass} />
        </div>
        <div className="space-y-2">
          <label htmlFor="companyName" className="text-sm font-medium text-foreground">Company Name <span className="text-destructive">*</span></label>
          <input id="companyName" required value={formData.companyName} onChange={(e) => setFormData((p) => ({ ...p, companyName: e.target.value }))} placeholder="Your business name" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="country" className="text-sm font-medium text-foreground">Country <span className="text-destructive">*</span></label>
          <select id="country" required value={formData.country} onChange={(e) => setFormData((p) => ({ ...p, country: e.target.value }))} className={selectClass}>
            <option value="">Select country</option>
            {COUNTRY_OPTIONS.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="industry" className="text-sm font-medium text-foreground">Industry <span className="text-destructive">*</span></label>
          <select id="industry" required value={formData.industry} onChange={(e) => setFormData((p) => ({ ...p, industry: e.target.value }))} className={selectClass}>
            <option value="">Select industry</option>
            {INDUSTRIES.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="revenue" className="text-sm font-medium text-foreground">Monthly Revenue Range</label>
          <select id="revenue" value={formData.revenueRange} onChange={(e) => setFormData((p) => ({ ...p, revenueRange: e.target.value }))} className={selectClass}>
            <option value="">Select range</option>
            {revenueRanges.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="outlets" className="text-sm font-medium text-foreground">Number of Outlets</label>
          <input id="outlets" value={formData.outlets} onChange={(e) => setFormData((p) => ({ ...p, outlets: e.target.value }))} placeholder="e.g. 1, 3, 5+" className={inputClass} />
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-foreground">Interested In</p>
        <div className="space-y-2.5">
          {INTERESTS.map((interest) => (
            <label key={interest} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.interests.includes(interest)}
                onChange={() => toggleInterest(interest)}
                className="w-4 h-4 accent-primary rounded"
              />
              <span className="text-sm text-foreground">{interest}</span>
            </label>
          ))}
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive">Something went wrong. Please try again or contact us directly.</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 w-full h-14 rounded-xl bg-foreground text-background font-semibold text-lg disabled:opacity-60 hover:bg-foreground/90 transition-all duration-300"
      >
        {isSubmitting ? "Submitting..." : <>Submit Form <ArrowRight className="w-5 h-5" /></>}
      </button>

      <p className="text-center text-sm text-muted-foreground">This helps us prepare properly for your call.</p>
    </form>
  );
}

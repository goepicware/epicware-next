"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const INDUSTRIES = [
  "F&B/Restaurant",
  "Medical Clinic",
  "Dental Clinic",
  "Hair & Beauty Salon",
  "Car Workshop",
  "Tuition Centre",
  "Physiotherapy/Sports Clinic",
  "Spa & Wellness",
  "Retail Store",
  "Other",
];

const REVENUE_RANGES = [
  "Under $10K",
  "$10K–$50K",
  "$50K–$100K",
  "$100K–$500K",
  "$500K+",
];

const INTERESTS = [
  { id: "epicreview", label: "EpicReview" },
  { id: "epicmap", label: "EpicMap" },
  { id: "epicengage", label: "EpicEngage" },
  { id: "epicsocial", label: "EpicSocial" },
  { id: "bad-review-removal", label: "Bad Review Removal ⭐" },
  { id: "full-platform", label: "Full Platform" },
];

const selectClass =
  "flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const inputClass =
  "flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "+65 ",
    email: "",
    companyName: "",
    industry: "",
    revenueRange: "",
    outlets: "",
    interestedIn: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const set = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify(form),
        }
      );
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ fullName: "", phone: "+65 ", email: "", companyName: "", industry: "", revenueRange: "", outlets: "", interestedIn: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">✓</span>
        </div>
        <h3 className="font-display font-bold text-foreground text-xl mb-2">Submitted!</h3>
        <p className="text-muted-foreground text-sm">We'll review your details and reach out to confirm your strategy call.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="fullName" className="text-sm font-medium text-foreground">Full Name <span className="text-destructive">*</span></label>
          <input id="fullName" required value={form.fullName} onChange={(e) => set("fullName", e.target.value)} placeholder="Your full name" className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone <span className="text-destructive">*</span></label>
          <input id="phone" required value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+65 XXXX XXXX" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">Email <span className="text-destructive">*</span></label>
          <input id="email" type="email" required value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@company.com" className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="companyName" className="text-sm font-medium text-foreground">Company Name <span className="text-destructive">*</span></label>
          <input id="companyName" required value={form.companyName} onChange={(e) => set("companyName", e.target.value)} placeholder="Your business name" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="industry" className="text-sm font-medium text-foreground">Industry <span className="text-destructive">*</span></label>
          <select id="industry" required value={form.industry} onChange={(e) => set("industry", e.target.value)} className={selectClass}>
            <option value="">Select industry</option>
            {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="revenueRange" className="text-sm font-medium text-foreground">Monthly Revenue Range</label>
          <select id="revenueRange" value={form.revenueRange} onChange={(e) => set("revenueRange", e.target.value)} className={selectClass}>
            <option value="">Select range</option>
            {REVENUE_RANGES.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="outlets" className="text-sm font-medium text-foreground">Number of Outlets</label>
        <input id="outlets" value={form.outlets} onChange={(e) => set("outlets", e.target.value)} placeholder="e.g. 1, 3, 5+" className={inputClass} />
      </div>

      <div className="space-y-2.5">
        <p className="text-sm font-medium text-foreground">Interested In <span className="text-destructive">*</span></p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {INTERESTS.map((interest) => (
            <label key={interest.id} className="flex items-center gap-3 p-3 rounded-xl border border-border/60 cursor-pointer hover:bg-muted/40 transition-colors has-[:checked]:border-primary/40 has-[:checked]:bg-primary/5">
              <input
                type="radio"
                name="interestedIn"
                value={interest.id}
                required
                checked={form.interestedIn === interest.id}
                onChange={() => set("interestedIn", interest.id)}
                className="accent-primary w-4 h-4"
              />
              <span className="text-sm font-medium text-foreground">{interest.label}</span>
            </label>
          ))}
        </div>
      </div>

      <p className="text-xs text-muted-foreground">This helps us prepare properly for your call.</p>

      {status === "error" && (
        <p className="text-sm text-destructive">Something went wrong. Please try again or email us directly.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 disabled:opacity-60 transition-all duration-300 hover:scale-[1.02]"
      >
        {status === "submitting" ? "Submitting..." : <>Book Strategy Call <ArrowRight className="w-4 h-4" /></>}
      </button>
    </form>
  );
}

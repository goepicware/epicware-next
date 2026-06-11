"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

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

const REVENUE_RANGES = [
  "Below $10,000",
  "$10,000 – $30,000",
  "$30,000 – $80,000",
  "$80,000 – $200,000",
  "$200,000+",
];

const INTERESTS = [
  "EpicReview (Google Review Management)",
  "EpicMap (Local SEO / Google Maps Optimisation)",
  "EpicEngage (Customer Engagement)",
  "EpicSocial (Social Scheduling)",
  "Bad Review Removal",
  "Full Platform",
];

const inputClass =
  "flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const selectClass =
  "flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export default function BookDemoForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    companyName: "",
    industry: "",
    revenueRange: "",
    outlets: "",
    interests: [] as string[],
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
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            phone: formData.phone,
            email: formData.email,
            companyName: formData.companyName,
            industry: formData.industry,
            interestedIn: formData.interests,
          }),
        }
      );
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setFormData({ fullName: "", phone: "", email: "", companyName: "", industry: "", revenueRange: "", outlets: "", interests: [] });
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
          <input id="phone" required value={formData.phone} onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))} placeholder="+65 XXXX XXXX" className={inputClass} />
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
          <label htmlFor="industry" className="text-sm font-medium text-foreground">Industry <span className="text-destructive">*</span></label>
          <select id="industry" required value={formData.industry} onChange={(e) => setFormData((p) => ({ ...p, industry: e.target.value }))} className={selectClass}>
            <option value="">Select industry</option>
            {INDUSTRIES.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="revenue" className="text-sm font-medium text-foreground">Monthly Revenue Range</label>
          <select id="revenue" value={formData.revenueRange} onChange={(e) => setFormData((p) => ({ ...p, revenueRange: e.target.value }))} className={selectClass}>
            <option value="">Select range</option>
            {REVENUE_RANGES.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="outlets" className="text-sm font-medium text-foreground">Number of Outlets</label>
        <input id="outlets" value={formData.outlets} onChange={(e) => setFormData((p) => ({ ...p, outlets: e.target.value }))} placeholder="e.g. 1, 3, 5+" className={inputClass} />
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

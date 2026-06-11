"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import TagInput from "./TagInput";
import type { FormInputs } from "./types";

const EXAMPLE: FormInputs = {
  brandName: "Epicware",
  website: "www.epicware.ai",
  description:
    "AI-powered Local SEO and reputation management SaaS platform that helps Singapore SMBs dominate Google Maps rankings and collect 5-star reviews automatically.",
  targetAudience:
    "Singapore-based SMB owners in F&B, dental clinics, tuition centres, and retail — specifically those with a physical location who rely on Google Maps and Google Search for walk-in and call-in customers.",
  competitors: ["BrightLocal", "Whitespark", "GatherUp", "Podium", "NiceJob", "Birdeye"],
  keywords: [
    "Local SEO software",
    "Google Business Profile management",
    "Review management platform",
    "Google Maps ranking tool",
    "Reputation management software",
  ],
};

interface BacklinkFormProps {
  onSubmit: (inputs: FormInputs) => void;
}

export default function BacklinkForm({ onSubmit }: BacklinkFormProps) {
  const [form, setForm] = useState<FormInputs>({
    brandName: "",
    website: "",
    description: "",
    targetAudience: "",
    competitors: [],
    keywords: [],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!form.brandName.trim()) e.brandName = "Brand name is required";
    if (!form.website.trim()) e.website = "Website URL is required";
    if (!form.description.trim()) e.description = "Product description is required";
    else if (form.description.trim().length < 30) e.description = "Please write at least 30 characters";
    if (!form.targetAudience.trim()) e.targetAudience = "Target audience is required";
    if (form.keywords.length < 1) e.keywords = "At least 1 keyword is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) onSubmit(form);
  };

  const set = (key: keyof FormInputs, value: string | string[]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="max-w-[640px] mx-auto">
      <div className="mb-10 text-center">
        <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200 font-medium text-xs">
          AI-Powered
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
          Backlink Opportunity Finder
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Enter your brand details. We'll find the listicles and roundups where you should be mentioned — and write the outreach for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 space-y-5 shadow-sm">
        <div>
          <Label htmlFor="brandName">Brand Name *</Label>
          <Input id="brandName" placeholder="e.g. Epicware" value={form.brandName} onChange={(e) => set("brandName", e.target.value)} className="mt-1.5" />
          {errors.brandName && <p className="text-xs text-red-500 mt-1">{errors.brandName}</p>}
        </div>

        <div>
          <Label htmlFor="website">Website URL *</Label>
          <Input id="website" placeholder="e.g. www.epicware.ai" value={form.website} onChange={(e) => set("website", e.target.value)} className="mt-1.5" />
          {errors.website && <p className="text-xs text-red-500 mt-1">{errors.website}</p>}
        </div>

        <div>
          <Label htmlFor="description">What does your product do? *</Label>
          <Textarea
            id="description"
            rows={4}
            placeholder="Describe your product in 1–3 sentences. Include what it does, who it's for, and what makes it different."
            value={form.description}
            onChange={(e) => set("description", e.target.value)}
            className="mt-1.5"
          />
          <p className="text-xs text-muted-foreground mt-1">Be specific — this is used to write personalised outreach copy.</p>
          {errors.description && <p className="text-xs text-red-500 mt-1">{errors.description}</p>}
        </div>

        <div>
          <Label htmlFor="targetAudience">Who is your target audience? *</Label>
          <Textarea
            id="targetAudience"
            rows={3}
            placeholder="e.g. Singapore-based SMB owners in F&B, dental clinics, and retail who rely on Google Maps for walk-in customers."
            value={form.targetAudience}
            onChange={(e) => set("targetAudience", e.target.value)}
            className="mt-1.5"
          />
          {errors.targetAudience && <p className="text-xs text-red-500 mt-1">{errors.targetAudience}</p>}
        </div>

        <div>
          <Label>Competitors already mentioned in listicles</Label>
          <p className="text-xs text-muted-foreground mb-1.5">Add tools that appear in roundups in your category. We'll find pages that mention them.</p>
          <TagInput tags={form.competitors} onChange={(t) => set("competitors", t)} placeholder="Type a competitor name and press Enter" />
          <p className="text-xs text-muted-foreground mt-1">Add at least 3 for best results</p>
        </div>

        <div>
          <Label>Category Keywords *</Label>
          <p className="text-xs text-muted-foreground mb-1.5">Keywords that describe your product category (used to find relevant listicle pages).</p>
          <TagInput tags={form.keywords} onChange={(t) => set("keywords", t)} placeholder="e.g. Local SEO software, review management platform" />
          {errors.keywords && <p className="text-xs text-red-500 mt-1">{errors.keywords}</p>}
        </div>

        <button type="submit" className="inline-flex items-center justify-center w-full h-12 rounded-lg bg-foreground text-background font-semibold text-base hover:bg-foreground/90 transition-all duration-300">
          Generate My Backlink Dashboard →
        </button>
        <p className="text-center text-xs text-muted-foreground">⏱ Takes 20–40 seconds · Powered by AI</p>
      </form>

      <button
        onClick={() => onSubmit(EXAMPLE)}
        type="button"
        className="block mx-auto mt-5 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
      >
        See an example →
      </button>
    </div>
  );
}

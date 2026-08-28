"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface AuditInputProps {
  ctaLabel: string;
  microCopy: string;
}

// The ONLY form field on /ai-visibility. Submitting routes into the existing
// /free-audit wizard with the business name prefilled into Step 1 — see
// app/free-audit/FreeAuditWizard.tsx and StepGBP.tsx for the receiving end.
// data-form-section lets StickyAuditBar hide itself while this input is on
// screen, matching the convention already used by
// components/remove-review/StickyRemoveBar.tsx.
export default function AuditInput({ ctaLabel, microCopy }: AuditInputProps) {
  const [business, setBusiness] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = business.trim();
    const href = trimmed ? `/free-audit?business=${encodeURIComponent(trimmed)}` : "/free-audit";
    router.push(href);
  }

  return (
    <form data-form-section onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          placeholder="Your business name (optional)"
          className="flex-1 h-12 rounded-xl border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
        />
        <button
          type="submit"
          className="shrink-0 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all duration-300 hover:scale-[1.02]"
        >
          {ctaLabel}
        </button>
      </div>
      <p className="text-center sm:text-left text-xs text-muted-foreground mt-2">{microCopy}</p>
    </form>
  );
}

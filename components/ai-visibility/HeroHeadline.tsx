"use client";

import { useSearchParams } from "next/navigation";
import { HEADLINE_VARIANTS, DEFAULT_HEADLINE_VARIANT } from "@/lib/ai-visibility-constants";

// A/B override without a redeploy: append ?h=b or ?h=c to the URL to swap the
// headline. Falls back to DEFAULT_HEADLINE_VARIANT when no override is
// present. Page is statically generated, so SSR/build time renders the
// Suspense fallback in Hero.tsx (= default variant, for SEO); this component
// only swaps it client-side after hydration.
export default function HeroHeadline() {
  const searchParams = useSearchParams();
  const override = searchParams.get("h");
  const variant =
    override && override in HEADLINE_VARIANTS
      ? (override as keyof typeof HEADLINE_VARIANTS)
      : DEFAULT_HEADLINE_VARIANT;
  return <>{HEADLINE_VARIANTS[variant]}</>;
}

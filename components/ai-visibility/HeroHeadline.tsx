"use client";

import { useSearchParams } from "next/navigation";
import { HEADLINE_VARIANTS, DEFAULT_HEADLINE_VARIANT } from "@/lib/ai-visibility-constants";

// A/B override without a redeploy: append ?h=b or ?h=c to the URL (e.g. in an
// ad campaign's destination link) to swap the headline. Falls back to
// DEFAULT_HEADLINE_VARIANT when no override is present or unrecognised. The
// page is statically generated, so SSR/build time renders the Suspense
// fallback in Hero.tsx (= the default variant, for SEO/crawlers); this
// component only swaps it client-side after hydration.
export default function HeroHeadline() {
  const searchParams = useSearchParams();
  const override = searchParams.get("h");
  const variant =
    override && override in HEADLINE_VARIANTS
      ? (override as keyof typeof HEADLINE_VARIANTS)
      : DEFAULT_HEADLINE_VARIANT;
  return <>{HEADLINE_VARIANTS[variant]}</>;
}

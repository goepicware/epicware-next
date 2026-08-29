"use client";

import { useSearchParams } from "next/navigation";
import { HEADLINE_VARIANTS, DEFAULT_HEADLINE_VARIANT } from "@/lib/ai-visibility-constants";

// Splits on the literal "{your industry}" token so it can render in the gold
// accent color, matching the mockup's <span class="hl"> treatment. Variants
// without that token (e.g. the ?h=alt headline) just render as plain text.
// Exported so Hero.tsx's Suspense fallback can render the identical markup
// for the default variant (SSR/build-time output, before this hook resolves).
export function renderHeadline(text: string) {
  const token = "{your industry}";
  const idx = text.indexOf(token);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-luxury-gold">{token}</span>
      {text.slice(idx + token.length)}
    </>
  );
}

// A/B override without a redeploy: append ?h=alt to the URL to swap the
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
  return <>{renderHeadline(HEADLINE_VARIANTS[variant])}</>;
}

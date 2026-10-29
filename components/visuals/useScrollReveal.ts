"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Shared scroll-triggered reveal animation for the /services visuals —
 * same pattern already used sitewide (e.g. components/home/VideoSection.tsx):
 * fade up on first scroll into view, disabled entirely when the visitor
 * has prefers-reduced-motion set, in which case the element just renders
 * in its final state with no animation. Spread the result onto a
 * framer-motion element: <motion.div {...useScrollReveal()}>.
 */
export function useScrollReveal(delay = 0) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return {};
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
  };
}

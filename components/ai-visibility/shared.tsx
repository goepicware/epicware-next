// Shared motion + placeholder helpers for the /ai-visibility landing page.

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

// Visually obvious VERIFY placeholder — yellow highlight, not just a code
// comment. Pattern matches components/remove-review/RemoveReviewPage.tsx's
// local `Verify` component (duplicated here, not imported).
export function Verify({ text }: { text: string }) {
  return (
    <mark className="not-italic bg-yellow-300 text-yellow-900 text-[11px] font-mono font-bold px-1.5 py-0.5 rounded border border-yellow-500/40 mx-0.5 inline-block">
      ⚠ VERIFY: {text}
    </mark>
  );
}

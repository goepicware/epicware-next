import { ImageOff } from "lucide-react";

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
    <mark className="not-italic bg-yellow-300 text-yellow-900 text-[11px] font-mono font-bold px-1.5 py-0.5 rounded border border-yellow-500/40 mx-0.5 whitespace-nowrap">
      ⚠ VERIFY: {text}
    </mark>
  );
}

// Clearly labeled placeholder for an image slot with no authentic stock photo
// available (research came up short on non-staged candidates for this brief
// rather than forcing a mediocre stock pick — per the build spec's own
// instruction). Fills the same box a real <Image> would occupy.
export function PhotoPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed border-yellow-400 bg-yellow-50 rounded-2xl p-6 text-center ${className}`}
    >
      <ImageOff className="w-6 h-6 text-yellow-600" />
      <p className="text-xs font-bold text-yellow-800 uppercase tracking-widest">Photo needed</p>
      <p className="text-xs text-yellow-700 leading-relaxed max-w-[16rem]">{label}</p>
    </div>
  );
}

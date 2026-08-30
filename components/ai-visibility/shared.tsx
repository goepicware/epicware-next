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

// Placeholder for a citation/proof screenshot that hasn't been sourced yet.
// Keeps the Citation Wall / Exhibit layout shippable while specific client
// screenshots are still being collected — swap for a real <Image> per row
// once the file lands in public/assets/ai-visibility/.
export function PhotoPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-muted border border-dashed border-border text-center px-3 ${className}`}
    >
      <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
        ⚠ Screenshot pending — {label}
      </span>
    </div>
  );
}

// "Verified" stamp badge shared by CitationWall + ExhibitTestimonial (and,
// with a custom label, RemovalLog on /remove-review — same token, reused
// rather than a second green badge invented for that page). Uses the
// existing --accent (light teal) token as the closest "muted green"
// available in the current palette — no new color introduced.
export function VerifiedStamp({ className = "", label = "Verified" }: { className?: string; label?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border border-accent/60 bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground ${className}`}
    >
      <svg viewBox="0 0 20 20" fill="none" className="w-3 h-3 text-accent-foreground" aria-hidden="true">
        <path
          d="M7.5 10.5l2 2 4-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      {label}
    </span>
  );
}

// Illustrative mockup — all names, avatars, and business details are fictional.
// No real people, no real business, no real reviews.

function Stars({ count, total = 5 }: { count: number; total?: number }) {
  return (
    <span className="flex gap-[2px]" aria-hidden="true">
      {Array.from({ length: total }).map((_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill={i < count ? "#fbbc04" : "none"}
          stroke={i < count ? "#fbbc04" : "#d1d5db"}
          strokeWidth="1.5"
          className="shrink-0"
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </span>
  );
}

function Avatar({ initials, bg }: { initials: string; bg: string }) {
  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold text-white leading-none"
      style={{ background: bg }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

// ── Flagged review (1-star, highlighted) ─────────────────────────────────────
function FlaggedReview() {
  return (
    <div className="relative border border-red-300 bg-red-50/60 rounded-xl p-3.5">
      {/* Removal badge — overlaps the top-right corner */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white border border-red-200 rounded-full px-3 py-1 shadow-sm whitespace-nowrap z-10">
        <svg
          className="w-3 h-3 text-red-500 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m4.9 4.9 14.2 14.2" />
        </svg>
        <span className="text-[10px] font-bold text-red-600 leading-none">
          Removal filed
        </span>
        <span className="text-[9px] text-muted-foreground leading-none">
          · Policy violation identified
        </span>
      </div>

      {/* Reviewer row */}
      <div className="flex items-start gap-2.5 mt-2">
        <Avatar initials="AR" bg="#6b7280" />
        <div className="min-w-0">
          <p className="text-[12px] font-semibold text-gray-700 leading-tight line-through decoration-red-300">
            Anonymous Reviewer
          </p>
          <p className="text-[10px] text-gray-400 mt-0.5">1 review · 2 weeks ago</p>
          <Stars count={1} />
        </div>
      </div>

      {/* Review text — struck through, red decoration */}
      <p className="mt-2 text-[11px] text-gray-500 leading-relaxed line-through decoration-red-300 decoration-[1.5px]">
        Terrible service, complete waste of money. I would never recommend
        this business to anyone. They ignored my complaint entirely.
      </p>
    </div>
  );
}

// ── Ordinary reviews (muted, desaturated) ─────────────────────────────────────
function NeutralReview({
  initials,
  bg,
  name,
  stars,
  ago,
  text,
}: {
  initials: string;
  bg: string;
  name: string;
  stars: number;
  ago: string;
  text: string;
}) {
  return (
    <div className="border border-gray-100 bg-white/60 rounded-xl p-3.5 grayscale-[30%]">
      <div className="flex items-start gap-2.5">
        <Avatar initials={initials} bg={bg} />
        <div className="min-w-0">
          <p className="text-[12px] font-semibold text-gray-600 leading-tight">{name}</p>
          <p className="text-[10px] text-gray-400 mt-0.5">{ago}</p>
          <Stars count={stars} />
        </div>
      </div>
      <p className="mt-2 text-[11px] text-gray-400 leading-relaxed">{text}</p>
    </div>
  );
}

// ── Root component ─────────────────────────────────────────────────────────────
export default function MockReviewCard() {
  return (
    <div className="relative select-none" aria-hidden="true">
      {/* "We handle this" pill */}
      <div className="absolute -top-3 -right-3 z-20 bg-primary text-primary-foreground text-[11px] font-bold px-3 py-1.5 rounded-full shadow-button tracking-wide whitespace-nowrap">
        We handle this
      </div>

      {/* Main card */}
      <div className="bg-white rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.13)] border border-gray-100 overflow-hidden">

        {/* Browser chrome */}
        <div className="bg-[#f1f3f4] px-4 py-2 flex items-center gap-2 border-b border-gray-200 shrink-0">
          <div className="flex gap-1.5 shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#ea4335]" />
            <div className="w-3 h-3 rounded-full bg-[#fbbc04]" />
            <div className="w-3 h-3 rounded-full bg-[#34a853]" />
          </div>
          <div className="flex-1 mx-3 bg-white rounded px-3 py-[3px] text-[10px] text-gray-400 font-mono truncate">
            maps.google.com
          </div>
        </div>

        {/* Business header */}
        <div className="px-4 pt-3.5 pb-3 border-b border-gray-100">
          <p className="font-semibold text-[13px] text-gray-900 leading-tight">Your Business</p>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[12px] font-bold text-gray-700">4.3</span>
            <Stars count={4} />
            <span className="text-[10px] text-gray-400">(52 reviews)</span>
          </div>
        </div>

        {/* Reviews list */}
        <div className="px-3 py-3 flex flex-col gap-3">
          <FlaggedReview />
          <NeutralReview
            initials="ST"
            bg="#4ade80"
            name="S. Tan"
            stars={4}
            ago="1 month ago"
            text="Staff were helpful and the wait was reasonable. Good overall experience."
          />
          <NeutralReview
            initials="ML"
            bg="#60a5fa"
            name="M. Lim"
            stars={5}
            ago="3 months ago"
            text="Really impressed. Professional team, clear communication throughout."
          />
        </div>
      </div>
    </div>
  );
}

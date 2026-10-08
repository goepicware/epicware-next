import Link from "next/link";
import { Star } from "lucide-react";
import { PROOF_ASSETS, WHY_CONTENT } from "./content";
import Geogrid from "./Geogrid";

const C = WHY_CONTENT.proof;
const hasRealShots = Boolean(PROOF_ASSETS.geogridBefore && PROOF_ASSETS.geogridAfter);
const clientName = PROOF_ASSETS.clientName ?? C.ai.fallbackClientName;

export default function VisualProof() {
  return (
    <section className="bg-cream py-16 min-[900px]:py-24">
      <div className="max-w-[1180px] mx-auto px-6 text-left">
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">
          {C.eyebrow}
        </span>
        <h2 className="font-display font-bold text-ink leading-tight mb-10 text-[2rem] min-[900px]:text-[3.125rem] max-w-3xl">
          {C.heading}
        </h2>

        {/* Top row */}
        <div className="flex flex-wrap gap-6 mb-10">
          {/* Day 1 */}
          <div className="flex-1 min-w-[260px] bg-white rounded-2xl border border-[#E5DEE2] p-6">
            <div className="flex items-center justify-between gap-2 mb-4">
              <p className="font-semibold text-ink text-sm">{C.day1.headerLabel}</p>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-loss-tint text-loss-text whitespace-nowrap">
                {C.day1.badge}
              </span>
            </div>
            <Geogrid
              stage="day1"
              imageSrc={PROOF_ASSETS.geogridBefore}
              imageAlt="EpicMap rank grid for a medical aesthetic clinic in Orchard on Day 1"
            />
            {!hasRealShots && (
              <p className="text-xs text-muted-2 italic mt-3">{C.illustrativeCaption}</p>
            )}
          </div>

          {/* Day 60 */}
          <div className="flex-1 min-w-[260px] bg-white rounded-2xl border border-[#E5DEE2] p-6">
            <div className="flex items-center justify-between gap-2 mb-4">
              <p className="font-semibold text-ink text-sm">{C.day60.headerLabel}</p>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#E4F0E7] text-rank-green whitespace-nowrap">
                {C.day60.badge}
              </span>
            </div>
            <Geogrid
              stage="day60"
              imageSrc={PROOF_ASSETS.geogridAfter}
              imageAlt="EpicMap rank grid for a medical aesthetic clinic in Orchard on Day 60"
            />
            {!hasRealShots && (
              <p className="text-xs text-muted-2 italic mt-3">{C.illustrativeCaption}</p>
            )}
          </div>

          {/* AI answer + review stack */}
          <div className="flex-1 min-w-[260px] flex flex-col gap-4">
            <div className="bg-ink rounded-2xl p-6 flex-1">
              <p className="text-[11px] font-bold tracking-[0.14em] text-white/50 mb-3">
                {C.ai.label}
              </p>
              {PROOF_ASSETS.aiAnswer ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={PROOF_ASSETS.aiAnswer} alt="AI assistant answer screenshot" className="rounded-lg w-full" />
              ) : (
                <>
                  <p className="italic text-white/80 text-sm mb-3">&ldquo;{C.ai.query}&rdquo;</p>
                  <div className="bg-white/10 rounded-xl p-4 text-sm leading-relaxed">
                    <p className="text-white font-semibold mb-1.5">
                      1. <strong>{clientName}</strong> is a top pick…
                    </p>
                    {C.ai.otherLines.map((line) => (
                      <p key={line} className="text-white/50">
                        {line}
                      </p>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="bg-white rounded-2xl border border-[#E5DEE2] p-6">
              <div className="flex items-center gap-1 mb-3" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E0A21B] text-[#E0A21B]" aria-hidden="true" />
                ))}
              </div>
              <p className="text-ink text-lg leading-relaxed mb-4">&ldquo;{C.review.quote}&rdquo;</p>
              <p className="text-sm text-muted-2">
                <strong className="text-ink font-semibold">{C.review.name}</strong> · {C.review.sub}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom stat row */}
        <div
          className="grid gap-5 mb-8"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
        >
          {C.stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-[#E5DEE2] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary mb-3">
                {stat.label}
              </p>
              <p className="font-display font-bold text-3xl text-ink mb-1">{stat.value}</p>
              <p className="text-sm text-muted-2">{stat.note}</p>
            </div>
          ))}
        </div>

        <Link href={C.caseStudiesHref} className="text-sm font-semibold text-primary hover:underline">
          {C.caseStudiesLabel}
        </Link>
      </div>
    </section>
  );
}

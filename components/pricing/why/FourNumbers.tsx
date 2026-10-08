"use client";

import { useEffect, useState } from "react";
import { WHY_CONTENT } from "./content";
import { useInView, usePrefersReducedMotion } from "./useInView";

const C = WHY_CONTENT.fourNumbers;

function useCountUp(target: string, active: boolean, reduced: boolean) {
  const numeric = Number(target.replace(/[^\d.]/g, ""));
  const isNumeric = /^\d+$/.test(target);
  const [display, setDisplay] = useState(isNumeric && !reduced ? "0" : target);

  useEffect(() => {
    if (!isNumeric || reduced || !active) {
      setDisplay(target);
      return;
    }
    const duration = 900;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(progress * numeric).toString());
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, isNumeric, numeric, reduced, target]);

  return display;
}

function Card({ card, active, reduced }: { card: (typeof C.cards)[number]; active: boolean; reduced: boolean }) {
  const epicwareDisplay = useCountUp(card.epicware, active, reduced);

  return (
    <div className="bg-white border border-[#E5DEE2] rounded-[20px] p-7">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-2 mb-4">{card.label}</p>

      <div className="flex items-center gap-2 mb-2">
        <span
          className="w-6 h-6 rounded-full bg-loss-tint text-loss-text flex items-center justify-center text-xs shrink-0"
          aria-hidden="true"
        >
          ✕
        </span>
        <span className="sr-only">Typical agency:</span>
        <span className="text-2xl text-muted-2 line-through decoration-loss decoration-2">
          {card.agency}
        </span>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span
          className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs shrink-0"
          aria-hidden="true"
        >
          ✓
        </span>
        <span className="sr-only">Epicware:</span>
        <span className="font-display font-bold text-5xl text-primary">{epicwareDisplay}</span>
      </div>

      <p className="text-body-2 text-[15px] leading-relaxed">{card.note}</p>
    </div>
  );
}

export default function FourNumbers() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const reduced = usePrefersReducedMotion();

  return (
    <section className="bg-cream py-16 min-[900px]:py-24">
      <div className="max-w-[1180px] mx-auto px-6">
        <h2 className="font-display font-bold text-ink leading-tight mb-10 text-[2rem] min-[900px]:text-[3rem] text-left">
          {C.heading}
        </h2>
        <div
          ref={ref}
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
        >
          {C.cards.map((card) => (
            <Card key={card.label} card={card} active={inView} reduced={reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}

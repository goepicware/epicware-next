"use client";

import type { CSSProperties } from "react";
import { WHY_CONTENT } from "./content";
import { useInView } from "./useInView";

const C = WHY_CONTENT.receipt;

export default function AgencyTaxReceipt() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);

  return (
    <section className="bg-cream py-16 min-[900px]:py-24">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[1fr_460px] gap-12 min-[900px]:gap-10 items-center">
          {/* Text column */}
          <div className="text-left">
            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">
              {C.eyebrow}
            </span>
            <h2 className="font-display font-bold text-ink leading-tight mb-5 text-[2.5rem] min-[900px]:text-[3.75rem]">
              {C.heading}
            </h2>
            <p className="text-body-2 text-lg leading-relaxed mb-4 max-w-xl">{C.body}</p>
            <p className="font-semibold text-ink text-lg">{C.boldLine}</p>
          </div>

          {/* Receipt visual */}
          <div ref={ref} className="min-[900px]:justify-self-end">
            <div
              className="why-tilt bg-white rounded-[6px] shadow-[0_30px_60px_-20px_rgba(27,21,32,0.35)] px-7 py-8 max-w-[460px] mx-auto"
              style={{ "--tilt": "-1.5deg" } as CSSProperties}
            >
              <p className="text-center text-xs font-bold tracking-[0.18em] text-ink">
                {C.header}
              </p>
              <p className="text-center text-xs text-muted-2 mt-1 mb-5">{C.sub}</p>

              <div className="border-t border-dashed border-plum-line/30 mb-4" />

              <ul className="space-y-3">
                {C.rows.map((row, i) => (
                  <li
                    key={row.label}
                    className={`flex items-baseline justify-between gap-4 text-[17px] ${
                      inView ? "why-row-in" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <span className="text-body-2">{row.label}</span>
                    <span
                      className={`font-semibold shrink-0 ${row.nowrap ? "whitespace-nowrap" : ""} ${
                        row.tone === "orange" ? "text-loss-text" : "text-ink"
                      }`}
                    >
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-dashed border-plum-line/30 my-4" />

              <div
                className={`flex items-baseline justify-between gap-4 font-bold text-[19px] text-ink ${
                  inView ? "why-row-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${C.rows.length * 150 + 400}ms` }}
              >
                <span>{C.totalLabel}</span>
                <span
                  className="inline-block w-[130px] border-b-[3px] border-ink h-[1px]"
                  role="text"
                  aria-label={`${C.totalLabel}: none`}
                />
              </div>

              <p className="text-center text-[13px] text-muted-2 mt-6">{C.footer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

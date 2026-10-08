"use client";

import { WHY_CONTENT } from "./content";
import { useInView } from "./useInView";

const C = WHY_CONTENT.timeline;
const TOTAL_MS = 1600;
const COLS = 5;

const GRID_TEMPLATE = "170px repeat(5, minmax(120px, 1fr))";

function agencyStart(i: number): number {
  // segment start indices on the 5-column day axis (one segment spans cols 2-3)
  return [0, 1, 3, 4][i];
}

export default function SplitTimeline() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section className="bg-white py-16 min-[900px]:py-24">
      <div className="max-w-[1180px] mx-auto px-6 text-left">
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">
          {C.eyebrow}
        </span>
        <h2 className="font-display font-bold text-ink leading-tight mb-4 text-[2.25rem] min-[900px]:text-[3.25rem] max-w-3xl">
          {C.heading}
        </h2>
        <p className="text-body-2 text-lg leading-relaxed mb-10 max-w-2xl">{C.body}</p>

        {/* Visually hidden table summary for assistive tech */}
        <table className="sr-only">
          <caption>{C.srSummaryCaption}</caption>
          <thead>
            <tr>
              <th scope="col">Track</th>
              {C.ruler.map((d) => (
                <th scope="col" key={d}>
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{C.agencyRowLabel}</th>
              <td>{C.agency[0].title} — {C.agency[0].sub}</td>
              <td colSpan={2}>{C.agency[1].title} — {C.agency[1].sub}</td>
              <td>{C.agency[2].title} — {C.agency[2].sub}</td>
              <td>{C.agency[3].title} — {C.agency[3].sub}</td>
            </tr>
            <tr>
              <th scope="row">{C.epicwareRowLabel}</th>
              {C.epicware.map((cell) => (
                <td key={cell.title}>
                  {cell.title} — {cell.sub}
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        {/* Visual grid */}
        <div ref={ref} className="overflow-x-auto overflow-y-hidden pb-2 -mx-1 px-1" aria-hidden="true">
          <div style={{ minWidth: "860px" }}>
            {/* Ruler */}
            <div
              className="grid border-b border-[#E5DEE2] pb-2 mb-3"
              style={{ gridTemplateColumns: GRID_TEMPLATE }}
            >
              <div />
              {C.ruler.map((d) => (
                <div key={d} className="text-center text-xs font-bold text-muted-2">
                  {d}
                </div>
              ))}
            </div>

            {/* Agency row */}
            <div className="grid items-center gap-1.5 mb-1.5" style={{ gridTemplateColumns: GRID_TEMPLATE }}>
              <div className="text-sm font-semibold text-muted-2 pr-2">{C.agencyRowLabel}</div>
              {C.agency.map((cell, i) => {
                const span = "span" in cell ? cell.span ?? 1 : 1;
                const hatched = cell.kind === "hatched";
                const delay = agencyStart(i) * (TOTAL_MS / COLS);
                return (
                  <div
                    key={cell.title}
                    className={`why-timeline-col h-[92px] flex flex-col justify-center px-4 ${
                      cell.rounded === "left" ? "rounded-l-xl" : cell.rounded === "right" ? "rounded-r-xl" : ""
                    } ${hatched ? "border-l-[3px] border-dashed border-loss" : ""}`}
                    style={{
                      gridColumn: `span ${span}`,
                      backgroundColor: hatched ? undefined : "#EDE7EA",
                      backgroundImage: hatched
                        ? "repeating-linear-gradient(135deg, #E9E2E6 0px, #E9E2E6 8px, #F3EEF0 8px, #F3EEF0 16px)"
                        : undefined,
                      transitionDelay: `${delay}ms`,
                    }}
                    data-revealed={inView}
                  >
                    <p className={`font-bold text-sm ${hatched ? "text-loss-text" : "text-ink"}`}>
                      {cell.title}
                    </p>
                    <p className={`text-xs mt-0.5 ${hatched ? "text-loss-text/80" : "text-muted-2"}`}>
                      {cell.sub}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Agency caption */}
            <p className="text-xs text-muted-2 mb-6 pl-[182px]">
              {C.agencyCaptionPre}
              <strong className="text-loss-text font-bold">{C.agencyCaptionBold}</strong>
            </p>

            {/* Epicware row */}
            <div className="grid items-center gap-1.5" style={{ gridTemplateColumns: GRID_TEMPLATE }}>
              <div className="text-sm font-semibold text-primary pr-2">{C.epicwareRowLabel}</div>
              {C.epicware.map((cell, i) => {
                const delay = i * (TOTAL_MS / COLS);
                return (
                  <div
                    key={cell.title}
                    className={`why-timeline-col h-[92px] flex flex-col justify-center px-4 text-white ${
                      cell.rounded === "left" ? "rounded-l-xl" : cell.rounded === "right" ? "rounded-r-xl" : ""
                    }`}
                    style={{
                      backgroundColor: cell.orange ? "var(--loss)" : i % 2 === 0 ? "var(--primary)" : "var(--plum-light)",
                      transitionDelay: `${delay}ms`,
                    }}
                    data-revealed={inView}
                  >
                    <p className="font-bold text-sm">{cell.title}</p>
                    <p className="text-xs mt-0.5 text-white/75">
                      {cell.sub}
                      {"extra" in cell && cell.extra ? ` · ${cell.extra}` : ""}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Dot row */}
            <div className="grid items-start gap-1.5 mt-2" style={{ gridTemplateColumns: GRID_TEMPLATE }}>
              <div />
              {C.dotCounts.map((count, i) => {
                const cellDelay = i * (TOTAL_MS / COLS);
                return (
                  <div key={i} className="flex flex-wrap gap-1 px-4 py-1 min-h-[24px]">
                    {Array.from({ length: count }).map((_, d) => (
                      <span
                        key={d}
                        className={`w-[10px] h-[10px] rounded-full bg-primary ${inView ? "why-dot-in" : "opacity-0"}`}
                        style={{ animationDelay: `${cellDelay + Math.min(d, 15) * 20}ms` }}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-muted-2 mt-2 pl-[182px]">{C.dotCaption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

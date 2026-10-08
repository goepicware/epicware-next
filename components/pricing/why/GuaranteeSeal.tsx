import { WHY_CONTENT } from "./content";

const C = WHY_CONTENT.guarantee;

export default function GuaranteeSeal() {
  return (
    <section id="why-guarantee" className="bg-primary py-16 min-[900px]:py-24">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[360px_1fr] gap-12 min-[900px]:gap-14 items-center">
          {/* Seal */}
          <div className="flex justify-center min-[900px]:justify-start" aria-hidden="true">
            <div className="relative w-[240px] h-[240px] min-[900px]:w-[320px] min-[900px]:h-[320px]">
              <div
                className="why-seal-ring absolute -inset-3 rounded-full border-2 border-dashed border-loss-soft/60"
              />
              <div
                className="relative w-full h-full rounded-full bg-cream flex flex-col items-center justify-center text-center px-6"
                style={{ boxShadow: "0 0 0 10px #62305A, 0 0 0 14px #E08E62" }}
              >
                <span className="text-[11px] min-[900px]:text-[13px] font-bold tracking-[0.14em] text-loss-text mb-2">
                  {C.seal.eyebrow}
                </span>
                <span className="font-display font-bold text-ink text-4xl min-[900px]:text-[54px] leading-none">
                  {C.seal.big}
                </span>
                <span className="font-display font-bold text-ink text-base min-[900px]:text-[22px] mt-1">
                  {C.seal.sub}
                </span>
                <span className="text-muted-2 text-xs min-[900px]:text-[15px] mt-1">{C.seal.small}</span>
                <span className="inline-flex items-center mt-3 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold tracking-wide whitespace-nowrap">
                  {C.seal.pill}
                </span>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="text-left">
            <h2 className="font-display font-bold text-white leading-tight mb-4 text-[2.25rem] min-[900px]:text-[3.125rem]">
              {C.heading}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">{C.sub}</p>

            <div className="mb-8">
              {C.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="flex flex-col min-[560px]:flex-row min-[560px]:items-baseline min-[560px]:justify-between gap-1 py-4 border-b border-plum-line"
                >
                  <span
                    className={`font-display font-bold text-lg shrink-0 ${
                      tier.orangeName ? "text-[#F2B08C]" : "text-white"
                    }`}
                  >
                    {tier.name}
                  </span>
                  <span className="text-white text-sm min-[560px]:text-right">{tier.terms}</span>
                </div>
              ))}
            </div>

            <p className="text-xs font-bold tracking-[0.14em] text-white/60 mb-3">{C.effortLabel}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {C.pills.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-plum-light text-white text-sm font-medium"
                >
                  {pill}
                </span>
              ))}
            </div>

            <p className="text-sm text-[#D6C3D1] max-w-xl">{C.smallPrint}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

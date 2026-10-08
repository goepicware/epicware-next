import { STACK_VALUES, WHY_CONTENT } from "./content";

const C = WHY_CONTENT.valueStack;

export default function ValueStack() {
  return (
    <section className="bg-white py-16 min-[900px]:py-24">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div className="text-left">
            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">
              {C.eyebrow}
            </span>
            <h2 className="font-display font-bold text-ink leading-tight mb-5 text-[2.25rem] min-[900px]:text-[3.25rem]">
              {C.heading}
            </h2>
            <p className="text-body-2 text-lg leading-relaxed max-w-md">{C.body}</p>
          </div>

          {/* Box */}
          <div className="bg-ink rounded-[24px] p-9">
            <div className="flex items-center justify-between gap-3 mb-6">
              <p className="font-display font-bold text-2xl text-cream">{C.boxHeader}</p>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-wide bg-loss text-white whitespace-nowrap">
                {C.boxBadge}
              </span>
            </div>

            <ul>
              {C.items.map((item) => {
                const value = item.key ? STACK_VALUES[item.key] : item.fixedValue;
                return (
                  <li
                    key={item.label}
                    className="flex items-start justify-between gap-4 py-3 border-b border-[#3A3040] last:border-b-0"
                  >
                    <span className="flex items-start gap-2.5">
                      <span className="text-loss-soft font-bold shrink-0 mt-0.5" aria-hidden="true">
                        ✓
                      </span>
                      <span className="text-cream text-[15px] leading-snug">{item.label}</span>
                    </span>
                    {value && (
                      <span className="text-[#E8C9B6] text-sm font-medium shrink-0 whitespace-nowrap">
                        {value}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-wrap items-end justify-between gap-4 mt-6 pt-5 border-t border-[#3A3040]">
              {STACK_VALUES.total ? (
                <p className="font-bold text-white">
                  {C.totalLabelPre}
                  <span className="text-loss-soft line-through decoration-2">{STACK_VALUES.total}</span>
                </p>
              ) : (
                <span />
              )}
              <p className="text-right">
                <span className="block text-[#E8C9B6] text-sm mb-1">{C.priceLabel}</span>
                <span className="font-display font-bold text-[44px] leading-none text-white">
                  {C.price}
                </span>
                <span className="text-[#E8C9B6] text-sm ml-1">{C.priceSuffix}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

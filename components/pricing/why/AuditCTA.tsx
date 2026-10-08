"use client";

import { useState, type CSSProperties, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AUDIT_PREVIEW_IMAGE, WHY_CONTENT } from "./content";
import Geogrid from "./Geogrid";

const C = WHY_CONTENT.auditCta;

export default function AuditCTA() {
  const router = useRouter();
  const [business, setBusiness] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = business.trim();
    router.push(trimmed ? `/free-audit?business=${encodeURIComponent(trimmed)}` : "/free-audit");
  }

  return (
    <section id="why-audit-cta" className="bg-white py-16 min-[900px]:py-24 scroll-mt-24">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-12 items-center">
          {/* Form column */}
          <div className="text-left">
            <p className="font-bold text-loss-text text-lg mb-4">{C.lossLine}</p>
            <h2 className="font-display font-bold text-ink leading-tight mb-4 text-[2.25rem] min-[900px]:text-[3.25rem]">
              {C.heading}
            </h2>
            <p className="text-body-2 text-lg leading-relaxed mb-8 max-w-lg">{C.body}</p>

            <form onSubmit={handleSubmit} className="flex flex-col min-[560px]:flex-row gap-3 max-w-lg">
              <label htmlFor="why-biz" className="sr-only">
                {C.inputLabel}
              </label>
              <input
                id="why-biz"
                name="business"
                type="text"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder={C.inputPlaceholder}
                className="flex-1 h-[58px] px-6 rounded-full border-2 border-[#D9D1D6] text-ink placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <button
                type="submit"
                className="h-[58px] px-7 rounded-full bg-primary text-white font-bold text-sm inline-flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-300 hover:scale-105 shrink-0"
              >
                {C.submitLabel}
              </button>
            </form>

            <p className="text-[15px] text-muted-2 mt-4">
              {C.belowFormPre}
              <Link href={C.belowFormHref} className="text-primary font-semibold hover:underline">
                {C.belowFormLink}
              </Link>
            </p>
          </div>

          {/* Audit preview card */}
          <div className="min-[900px]:justify-self-end w-full max-w-[420px] mx-auto">
            <div
              className="why-tilt bg-cream rounded-[20px] p-7"
              style={{ "--tilt": "1.5deg" } as CSSProperties}
            >
              <div className="flex items-center justify-between gap-2 mb-5">
                <p className="font-display font-bold text-ink">{C.previewHeader}</p>
                <span className="text-xs text-muted-2 font-semibold">{C.previewSample}</span>
              </div>

              {AUDIT_PREVIEW_IMAGE ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={AUDIT_PREVIEW_IMAGE} alt="Sample free audit results" className="rounded-xl w-full" />
              ) : (
                <>
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {C.previewTiles.map((tile) => (
                      <div key={tile.label} className="bg-white rounded-xl p-3 text-center">
                        <p className="font-display font-bold text-[28px] text-loss-text leading-none mb-1">
                          {tile.value}
                        </p>
                        <p className="text-[11px] text-muted-2 leading-tight">{tile.label}</p>
                      </div>
                    ))}
                  </div>
                  <div aria-hidden="true" style={{ filter: "blur(1.5px)" }}>
                    <Geogrid stage="day1" imageAlt="" showNumbers={false} showSummary={false} />
                  </div>
                </>
              )}

              <p className="text-center font-bold text-primary text-sm mt-5">{C.previewCaption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

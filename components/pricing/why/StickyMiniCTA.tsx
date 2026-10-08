"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { WHY_CONTENT } from "./content";

const C = WHY_CONTENT.stickyCta;

export default function StickyMiniCTA() {
  const [pastGuarantee, setPastGuarantee] = useState(false);
  const [auditInView, setAuditInView] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const guarantee = document.getElementById("why-guarantee");
    const audit = document.getElementById("why-audit-cta");
    if (!guarantee || !audit) return;

    const guaranteeObserver = new IntersectionObserver(
      ([entry]) => setPastGuarantee(entry.boundingClientRect.bottom < 0),
      { threshold: 0 }
    );
    const auditObserver = new IntersectionObserver(
      ([entry]) => setAuditInView(entry.isIntersecting),
      { threshold: 0 }
    );
    guaranteeObserver.observe(guarantee);
    auditObserver.observe(audit);
    return () => {
      guaranteeObserver.disconnect();
      auditObserver.disconnect();
    };
  }, []);

  const visible = pastGuarantee && !auditInView && !dismissed;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed z-40 left-0 right-0 bottom-[84px] lg:bottom-4 lg:left-4 lg:right-auto transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <div className="mx-3 lg:mx-0 bg-ink text-white rounded-full shadow-[0_12px_30px_rgba(27,21,32,0.35)] flex items-center justify-between lg:justify-start gap-3 pl-5 pr-2 py-2">
        <span className="text-sm font-semibold whitespace-nowrap">{C.text}</span>
        <div className="flex items-center gap-1 shrink-0">
          <Link
            href="/free-audit"
            tabIndex={visible ? 0 : -1}
            className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-primary text-white text-sm font-bold whitespace-nowrap hover:bg-primary/90 transition-colors"
          >
            {C.buttonLabel}
          </Link>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            tabIndex={visible ? 0 : -1}
            aria-label={C.dismissLabel}
            className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Mobile-only sticky CTA — appears after 25% scroll, hides when any
// AuditInput form (marked data-form-section) is on screen. Pattern matches
// components/remove-review/StickyRemoveBar.tsx. Links straight to
// /free-audit (no prefill) — the prefill is only guaranteed from the
// Hero/FinalCTA inputs themselves.
export default function StickyAuditBar() {
  const [visible, setVisible] = useState(false);
  const [formInView, setFormInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const threshold = document.documentElement.scrollHeight * 0.25;
      setVisible(window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const forms = document.querySelectorAll("[data-form-section]");
    observerRef.current = new IntersectionObserver(
      (entries) => setFormInView(entries.some((e) => e.isIntersecting)),
      { threshold: 0.1 }
    );
    forms.forEach((el) => observerRef.current?.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  const show = visible && !formInView;

  return (
    <div className={`fixed bottom-0 inset-x-0 z-50 md:hidden transition-transform duration-300 ${show ? "translate-y-0" : "translate-y-full"}`}>
      <div className="bg-background/95 backdrop-blur-xl border-t border-border/50 px-4 py-3 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-foreground leading-tight">Does your name come up in AI search?</p>
          <p className="text-xs text-muted-foreground mt-0.5">Free · 60 seconds</p>
        </div>
        <Link
          href="/free-audit"
          className="shrink-0 inline-flex items-center gap-1.5 h-10 px-5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors"
        >
          Check Now <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

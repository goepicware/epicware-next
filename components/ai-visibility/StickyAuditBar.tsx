"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

// Mobile-only sticky CTA — appears after 25% scroll, hides once the
// id="audit-form" section is on screen. Scrolls in-page (the form lives on
// this same page, unlike v1's route link to /free-audit).
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

    const formEl = document.getElementById("audit-form");
    if (formEl) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => setFormInView(entry.isIntersecting),
        { threshold: 0.1 }
      );
      observerRef.current.observe(formEl);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const show = visible && !formInView;

  return (
    <div className={`fixed bottom-0 inset-x-0 z-50 md:hidden transition-transform duration-300 ${show ? "translate-y-0" : "translate-y-full"}`}>
      <div className="bg-background/95 backdrop-blur-xl border-t border-border/50 px-4 py-3 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-foreground leading-tight">Does your name come up in AI search?</p>
          <p className="text-xs text-muted-foreground mt-0.5">Free · 60 seconds</p>
        </div>
        <a
          href="#audit-form"
          onClick={handleClick}
          className="shrink-0 inline-flex items-center gap-1.5 h-10 px-5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors"
        >
          Check Now <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

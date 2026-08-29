"use client";

import { useState, useEffect, useRef } from "react";

// Mobile-only sticky CTA — appears after 25% scroll, hides once the
// id="audit-form" section is on screen. Scrolls in-page.
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
      <div className="bg-gradient-to-br from-[#1a0a14] via-[#0d0a1a] to-[#0d0d0d] px-4 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.25)]">
        <a
          href="#audit-form"
          onClick={handleClick}
          className="block text-center bg-luxury-gold text-luxury-gold-foreground py-3.5 rounded-xl font-bold text-[14.5px]"
        >
          Show me my results ↓
        </a>
      </div>
    </div>
  );
}

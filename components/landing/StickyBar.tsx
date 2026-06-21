"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [formInView, setFormInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Show bar after 30% scroll
    const onScroll = () => {
      const threshold = document.documentElement.scrollHeight * 0.3;
      setVisible(window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Hide when form is in view
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

  const show = visible && !formInView;

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-50 md:hidden transition-transform duration-300 ${show ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="bg-[#0A0F1E]/95 backdrop-blur-md border-t border-white/10 px-5 py-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-white text-sm font-bold leading-tight">Free Local SEO Audit</p>
          <p className="text-gray-500 text-xs mt-0.5">Free · No credit card</p>
        </div>
        <Link
          href="#audit-form"
          className="shrink-0 h-10 px-5 rounded-full bg-green-500 hover:bg-green-400 text-gray-950 font-bold text-sm transition-colors"
        >
          Get My Free Audit →
        </Link>
      </div>
    </div>
  );
}

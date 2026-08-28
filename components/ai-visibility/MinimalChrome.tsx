"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

// Standalone-route chrome (see components/layout/ClientLayoutWrapper.tsx —
// /ai-visibility is in STANDALONE_PREFIXES, so the global Header/Footer/
// ChatWidget don't render here). No WhatsApp link anywhere — hard rule.

export function MinimalHeader() {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] py-4 px-6 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/assets/epicware-logo-wide.png" alt="Epicware" width={130} height={34} className="h-8 w-auto" priority />
        </Link>
        <a
          href="#audit-form"
          onClick={handleClick}
          className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
        >
          Free Audit
        </a>
      </div>
    </header>
  );
}

export function MinimalFooter() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center">
          <Image src="/assets/epicware-logo-wide.png" alt="Epicware" width={110} height={30} className="h-7 w-auto opacity-70" />
        </Link>
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-muted-foreground text-center">
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3 shrink-0" />Singapore</span>
          <a href="mailto:hello@epicware.ai" className="hover:text-foreground transition-colors">hello@epicware.ai</a>
          <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

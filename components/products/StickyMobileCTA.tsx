"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface StickyMobileCTAProps {
  demoHref?: string;
  auditHref?: string;
}

export default function StickyMobileCTA({
  demoHref = "/book-demo#form",
  auditHref = "/audit",
}: StickyMobileCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-background/95 backdrop-blur-xl border-t border-border/50 px-4 py-3 flex gap-3">
        <Link
          href={demoHref}
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors"
        >
          Book Free Demo
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href={auditHref}
          className="flex-1 flex items-center justify-center h-12 rounded-full border border-border text-foreground text-sm font-semibold hover:bg-muted transition-colors"
        >
          Free Audit
        </Link>
      </div>
    </div>
  );
}

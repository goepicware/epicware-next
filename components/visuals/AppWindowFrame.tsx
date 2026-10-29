import type { ReactNode } from "react";

/**
 * Stylised app-window chrome (title bar + traffic-light dots) wrapping a
 * product mockup — Epicware's own design language, not a copy of any real
 * OS or browser chrome. Used for the EpicMap and EpicReview product
 * mockups so they read as "software you log into" without screenshotting
 * real client data.
 */
export default function AppWindowFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card shadow-card-hover overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/60 border-b border-border/60">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
        <span className="ml-2 text-[11px] font-semibold text-muted-foreground truncate">{title}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

import { TrendingUp } from "lucide-react";

/**
 * Illustrative mockup of the monthly ROI report — fictional figures, pure
 * HTML/CSS, clearly labelled so it can't be read as a real client result
 * or as output of the calculator above it.
 */
export default function ROIReportMockup() {
  const bars = [40, 55, 48, 68, 72, 90];
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-5 max-w-sm mx-auto mb-10" aria-hidden="true">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Monthly ROI Report</p>
          <p className="text-[10px] text-muted-foreground">Illustrative example — not a real client</p>
        </div>
        <TrendingUp className="w-4 h-4 text-emerald-600" />
      </div>

      <div className="flex items-end gap-1.5 h-16 mb-4">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t-sm bg-primary/20" style={{ height: `${h}%` }} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 text-center">
        <div>
          <p className="font-display font-bold text-foreground text-lg">14</p>
          <p className="text-[10px] text-muted-foreground">New enquiries</p>
        </div>
        <div>
          <p className="font-display font-bold text-foreground text-lg">S$107</p>
          <p className="text-[10px] text-muted-foreground">Cost / enquiry</p>
        </div>
        <div>
          <p className="font-display font-bold text-emerald-700 text-lg">+S$3.4k</p>
          <p className="text-[10px] text-muted-foreground">Net return</p>
        </div>
      </div>
    </div>
  );
}

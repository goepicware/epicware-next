"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface MetricPair {
  label: string;
  before: number;
  after: number;
  max: number;
  unit?: string;
  flag?: string;
  /** Override the displayed value text without changing the bar's width proportion — e.g. "baseline" for an indexed reference point rather than a specific fabricated number. Defaults to "{before/after}{unit}". */
  beforeValueLabel?: string;
  afterValueLabel?: string;
}

/**
 * Paired before/after (or you/competitor) bar chart. Each metric's name
 * is set once, with two bars underneath it instead of one label per
 * bar — avoids repeating every metric name twice, which would otherwise
 * bloat the page's rendered word count for a label the colour legend
 * above already conveys. Used by L6 (you vs competitor) and R3
 * (before vs after replying).
 */
export default function BarCompare({
  metrics,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  metrics: MetricPair[];
  beforeLabel?: string;
  afterLabel?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-4 text-[11px] font-semibold">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" aria-hidden="true" /> {beforeLabel}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-primary" aria-hidden="true" /> {afterLabel}
        </span>
      </div>
      <div className="space-y-4" aria-hidden="true">
        {metrics.map((m, i) => (
          <MetricRow key={m.label} metric={m} index={i} />
        ))}
      </div>
    </div>
  );
}

function MetricRow({ metric, index }: { metric: MetricPair; index: number }) {
  const shouldReduce = useReducedMotion();
  const beforePct = (metric.before / metric.max) * 100;
  const afterPct = (metric.after / metric.max) * 100;

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-medium text-foreground">{metric.label}</span>
        {metric.flag && (
          <span className="text-[9px] font-bold uppercase tracking-wide text-primary bg-primary/10 rounded-full px-1.5 py-0.5">
            {metric.flag}
          </span>
        )}
      </div>
      <div className="space-y-1">
        <Bar
          pct={beforePct}
          value={metric.beforeValueLabel ?? `${metric.before}${metric.unit ?? ""}`}
          tone="muted"
          delay={index * 0.06}
        />
        <Bar
          pct={afterPct}
          value={metric.afterValueLabel ?? `${metric.after}${metric.unit ?? ""}`}
          tone="primary"
          delay={index * 0.06 + 0.1}
        />
      </div>
    </div>
  );
}

function Bar({ pct, value, tone, delay }: { pct: number; value: string; tone: "muted" | "primary"; delay: number }) {
  const shouldReduce = useReducedMotion();
  const fillClass = tone === "primary" ? "bg-primary" : "bg-muted-foreground/40";
  const valueClass = tone === "primary" ? "text-foreground" : "text-muted-foreground";
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 flex-1 rounded-full bg-border/60 overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${fillClass}`}
          initial={shouldReduce ? false : { width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
          style={shouldReduce ? { width: `${pct}%` } : undefined}
        />
      </div>
      <span className={`text-[10px] font-semibold w-12 text-right shrink-0 ${valueClass}`}>{value}</span>
    </div>
  );
}

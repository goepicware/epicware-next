import BarCompare, { type MetricPair } from "../BarCompare";
import { SourceCaption } from "../SourceCaption";

// `before`/`after` here are index points (100 = baseline), used only to
// size each bar's width proportionally — not a fabricated absolute count.
// Every number actually DISPLAYED (beforeValueLabel/afterValueLabel) is
// the real, sourced figure from the study, never the index value itself.
const METRICS: MetricPair[] = [
  { label: "Review volume", before: 100, after: 112, max: 112, beforeValueLabel: "baseline", afterValueLabel: "+12%" },
  {
    label: "Average rating",
    before: 100,
    after: 102.4,
    max: 102.4,
    beforeValueLabel: "baseline",
    afterValueLabel: "+0.12 stars",
  },
];

/**
 * R3 — problem visual. Before/after bars for the Proserpio & Zervas
 * Marketing Science study already cited in the page's copy — review
 * volume and rating are shown as indexed-to-100 bars so a 12% and a
 * 0.12-star change are both visible on the same scale.
 */
export default function ResearchResultChart() {
  return (
    <div
      role="img"
      aria-label="Chart showing hotels that began replying to reviews saw a 12% increase in review volume and a 0.12-star increase in rating"
      className="mx-auto w-full max-w-md rounded-2xl border border-border/60 bg-card shadow-card-hover p-5"
    >
      <BarCompare metrics={METRICS} beforeLabel="Before replying" afterLabel="After replying" />
      <SourceCaption
        href="https://open.bu.edu/items/9b759580-53d3-44ff-975e-c17d5641abcc"
        label="Proserpio & Zervas, Marketing Science"
      />
    </div>
  );
}

import BarCompare, { type MetricPair } from "../BarCompare";
import { IllustrativeCaption } from "../SourceCaption";

const METRICS: MetricPair[] = [
  { label: "Review count", before: 42, after: 118, max: 120 },
  { label: "Recent reviews (30d)", before: 2, after: 9, max: 10, flag: "Fix first" },
  { label: "Photo count", before: 14, after: 36, max: 40 },
  { label: "Recent posts (30d)", before: 1, after: 6, max: 8 },
  { label: "Citations consistent", before: 60, after: 95, max: 100, unit: "%" },
];

/**
 * L6 — #competitor-analysis. "You" vs "Top competitor" across the five
 * metrics the copy names, with the biggest-impact gap flagged "Fix
 * first". Figures are illustrative, not a real client's data.
 */
export default function CompetitorGapChart() {
  return (
    <div
      role="img"
      aria-label="Chart comparing you against your top competitor across review count, review recency, photos, posts and citation consistency, with the review-recency gap flagged Fix first"
      className="mx-auto w-full max-w-lg rounded-2xl border border-border/60 bg-card shadow-card-hover p-5"
    >
      <BarCompare metrics={METRICS} beforeLabel="You" afterLabel="Top competitor" />
      <IllustrativeCaption />
    </div>
  );
}

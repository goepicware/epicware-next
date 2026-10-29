import { Star } from "lucide-react";

/**
 * A single review card — Epicware's own card design, not a copy of
 * Google's review UI. Reused by the review inbox hero mock and the
 * website-widget mock. All reviewer names are fictional (see fixtures.ts).
 */
export default function ReviewCard({
  reviewer,
  rating,
  text,
  compact = false,
}: {
  reviewer: string;
  rating: number;
  text: string;
  compact?: boolean;
}) {
  return (
    <div className={`rounded-xl border border-border/60 bg-card ${compact ? "p-3" : "p-4"}`}>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-semibold text-foreground">{reviewer}</span>
        <div className="flex items-center gap-0.5" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < rating ? "fill-amber-400 text-amber-400" : "text-border"}`}
            />
          ))}
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}

/**
 * Reusable rank-grid visual: a square grid of dots, each coloured by a
 * synthetic rank that gets worse moving away from the centre (green #1-3,
 * amber #4-8, red #9+). Used for the local-seo "ranking looks different
 * two streets away" visual (small `coverage`) and the week-1-vs-week-12
 * rank-tracking progress visual (larger `coverage` = green area has
 * expanded). Every number here is synthetic, not a real client's rank —
 * callers must label it "Illustrative example" via IllustrativeCaption.
 *
 * Deliberately renders colour only, no visible rank digits in each cell —
 * the point ("red two streets away") reads in three seconds from colour
 * alone, and a 49-cell grid of two-digit numbers would both clutter the
 * visual and bloat the page's rendered word count for no reader benefit.
 * The exact synthetic rank is still available to assistive tech via each
 * cell's title attribute.
 *
 * `coverage` (0–1): how far the green/top-3 area reaches from the centre
 * before fading to amber, then red. Higher = wider green coverage.
 */
export function Geogrid({
  size = 7,
  coverage = 0.35,
  cellClassName = "w-7 h-7 text-[10px]",
  className = "",
}: {
  size?: number;
  coverage?: number;
  cellClassName?: string;
  className?: string;
}) {
  const center = (size - 1) / 2;
  const maxDist = Math.sqrt(center * center * 2) || 1;

  const cells = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dist = Math.sqrt((x - center) ** 2 + (y - center) ** 2);
      const normalized = dist / maxDist; // 0 at centre, 1 at corner
      // coverage (0–1): how far the green "top 3" zone reaches before
      // fading into amber, then red. Below coverage, rank climbs 1→3
      // (green); beyond it, rank climbs 4→20 across the rest of the grid
      // — two linear ramps, not one, so there's always a visible fade
      // instead of jumping straight from green to clamped-red.
      const safeCoverage = Math.min(Math.max(coverage, 0.05), 0.95);
      let rank: number;
      if (normalized <= safeCoverage) {
        rank = 1 + Math.round((normalized / safeCoverage) * 2);
      } else {
        const rest = (normalized - safeCoverage) / (1 - safeCoverage);
        rank = 4 + Math.round(rest * 16);
      }
      rank = Math.max(1, Math.min(20, rank));
      cells.push({ x, y, rank });
    }
  }

  function colorFor(rank: number) {
    if (rank <= 3) return "bg-emerald-500";
    if (rank <= 8) return "bg-amber-400";
    return "bg-red-400";
  }

  return (
    <div
      className={`grid gap-1 ${className}`}
      style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
    >
      {cells.map((cell) => (
        <span
          key={`${cell.x}-${cell.y}`}
          title={`Rank #${cell.rank}`}
          className={`block rounded-full ${colorFor(cell.rank)} ${cellClassName}`}
        />
      ))}
    </div>
  );
}

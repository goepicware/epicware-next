import Image from "next/image";

const GRID_SIZE = 7;
const CENTER = 3;

function generateGrid(stage: "day1" | "day60"): number[][] {
  const grid: number[][] = [];
  for (let r = 0; r < GRID_SIZE; r++) {
    const row: number[] = [];
    for (let c = 0; c < GRID_SIZE; c++) {
      const dist = Math.abs(r - CENTER) + Math.abs(c - CENTER);
      const rank =
        stage === "day1" ? Math.round(9 + dist * 1.5) : Math.round(1 + dist * 0.9);
      row.push(Math.max(1, rank));
    }
    grid.push(row);
  }
  return grid;
}

function rankColor(rank: number): string {
  if (rank <= 3) return "var(--rank-green)";
  if (rank <= 7) return "var(--rank-amber)";
  if (rank <= 12) return "var(--rank-orange)";
  return "var(--rank-red)";
}

function average(grid: number[][]): number {
  const flat = grid.flat();
  return Math.round((flat.reduce((a, b) => a + b, 0) / flat.length) * 10) / 10;
}

interface GeogridProps {
  stage: "day1" | "day60";
  imageSrc?: string | null;
  imageAlt: string;
  showNumbers?: boolean;
  showSummary?: boolean;
  className?: string;
}

export default function Geogrid({
  stage,
  imageSrc,
  imageAlt,
  showNumbers = true,
  showSummary = true,
  className = "",
}: GeogridProps) {
  if (imageSrc) {
    return (
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={420}
        height={420}
        className={`w-full h-auto rounded-xl ${className}`}
      />
    );
  }

  const grid = generateGrid(stage);
  const avg = average(grid);

  return (
    <div className={className}>
      <div className="grid grid-cols-7 gap-1.5" aria-hidden="true">
        {grid.flatMap((row, r) =>
          row.map((rank, c) => (
            <div
              key={`${r}-${c}`}
              className="aspect-square rounded-full flex items-center justify-center text-white font-bold text-[11px]"
              style={{ backgroundColor: rankColor(rank) }}
            >
              {showNumbers ? (rank >= 20 ? "20+" : rank) : null}
            </div>
          ))
        )}
      </div>
      {showSummary && (
        <span className="sr-only">
          {stage === "day1" ? "Day 1" : "Day 60"}: average rank {avg} across{" "}
          {grid.flat().length} map points.
        </span>
      )}
    </div>
  );
}

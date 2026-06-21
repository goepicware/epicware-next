"use client";

type Cell = "hot" | "warm" | "cold" | "dead";

const COLOR: Record<Cell, string> = {
  hot: "bg-green-500",
  warm: "bg-yellow-400",
  cold: "bg-orange-400",
  dead: "bg-red-500",
};

const RANK_LABEL: Record<Cell, string> = {
  hot: "#1–3",
  warm: "#4–7",
  cold: "#8–15",
  dead: "16+",
};

// Default realistic-looking pattern: hot cluster top-left, dead zones bottom-right
const DEFAULT_DATA: Cell[][] = [
  ["hot", "hot", "hot", "warm", "warm", "cold", "dead"],
  ["hot", "hot", "warm", "warm", "cold", "cold", "dead"],
  ["hot", "warm", "warm", "cold", "cold", "dead", "dead"],
  ["warm", "warm", "cold", "cold", "dead", "dead", "dead"],
  ["warm", "cold", "cold", "dead", "dead", "dead", "dead"],
  ["cold", "cold", "dead", "dead", "dead", "dead", "dead"],
  ["cold", "dead", "dead", "dead", "dead", "dead", "dead"],
];

interface GeoGridProps {
  data?: Cell[][];
  size?: "sm" | "md" | "lg";
  showLegend?: boolean;
}

export default function GeoGrid({ data = DEFAULT_DATA, size = "md", showLegend = true }: GeoGridProps) {
  const cellSize =
    size === "sm" ? "w-6 h-6 rounded-sm text-[8px]" :
    size === "lg" ? "w-12 h-12 rounded-md text-xs" :
    "w-8 h-8 md:w-10 md:h-10 rounded-md text-[9px]";

  return (
    <div className="inline-flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        {data.map((row, r) => (
          <div key={r} className="flex gap-1">
            {row.map((cell, c) => (
              <div
                key={c}
                title={RANK_LABEL[cell]}
                className={`${cellSize} ${COLOR[cell]} flex items-center justify-center font-bold text-white/90 shadow-sm transition-transform hover:scale-110 cursor-default`}
              >
                {cell === "hot" ? "★" : ""}
              </div>
            ))}
          </div>
        ))}
      </div>

      {showLegend && (
        <div className="flex items-center gap-3 mt-1 flex-wrap">
          {(["hot", "warm", "cold", "dead"] as Cell[]).map((type) => (
            <div key={type} className="flex items-center gap-1.5">
              <div className={`w-3 h-3 rounded-sm ${COLOR[type]}`} />
              <span className="text-[10px] text-gray-400">{RANK_LABEL[type]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

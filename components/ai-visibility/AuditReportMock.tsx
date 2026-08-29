"use client";

import { useState, useEffect } from "react";

// Report visual mock for the "What the audit shows" section. Copies the
// exact color scale from app/free-audit/FreeAuditWizard.tsx's inline
// ScoreGauge (line 395), rankColour (line 387), heatmap grid (~1226), and AI
// visibility results (~1259) — those aren't exported/reusable there, so this
// duplicates the logic rather than importing it. Real 6-tool list/order from
// app/api/audit/ai-visibility/route.ts. Layout matches the approved mockup's
// side-by-side donut + heatmap/chip arrangement.
// TODO: replace with a real anonymized report screenshot/component before launch.

function rankColour(rank: number): string {
  if (rank <= 3) return "#5B7F63"; // matches wizard's bg-emerald-500 band, sage tone from mockup
  if (rank <= 7) return "#D9A441";
  if (rank <= 14) return "#D98A6E";
  if (rank <= 20) return "#B0503C";
  return "#7A3527";
}

function mockGridPoints(): { rank: number }[] {
  const points: { rank: number }[] = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 7; col++) {
      const dist = Math.hypot(row - 1, col - 3);
      points.push({ rank: Math.min(20, Math.round(2 + dist * 4.4)) });
    }
  }
  return points;
}

function ScoreDonut({ score }: { score: number }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const animate = (now: number) => {
      const t = Math.min((now - start) / 1200, 1);
      setDisplay(Math.round(t * score));
      if (t < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [score]);
  const colour = score >= 70 ? "#16a34a" : score >= 50 ? "#ca8a04" : "#dc2626";
  const r = 68;
  const circ = 2 * Math.PI * r;
  const dash = circ * (display / 100);
  return (
    <div className="flex flex-col items-center gap-3">
      <svg width="170" height="170" viewBox="0 0 170 170">
        <circle cx="85" cy="85" r={r} fill="none" stroke="var(--color-luxury-grey)" strokeWidth="14" />
        <circle
          cx="85" cy="85" r={r} fill="none" stroke={colour} strokeWidth="14"
          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
          transform="rotate(-90 85 85)" style={{ transition: "stroke-dasharray 0.05s linear" }}
        />
        <text x="85" y="90" textAnchor="middle" dominantBaseline="middle" fontSize="34" fontWeight="700" fill="var(--color-foreground)">
          {display}<tspan fontSize="16" fill="var(--color-muted-foreground)">/100</tspan>
        </text>
      </svg>
      <p className="text-xs text-muted-foreground text-center">Your AI + Local Visibility Score</p>
    </div>
  );
}

interface MockTool { name: string; found: boolean }

// Real 6-tool list from app/api/audit/ai-visibility/route.ts.
const AI_TOOLS: MockTool[] = [
  { name: "Gemini", found: true },
  { name: "Perplexity", found: true },
  { name: "ChatGPT", found: false },
  { name: "Claude", found: false },
  { name: "Llama", found: false },
  { name: "Grok", found: false },
];

export default function AuditReportMock() {
  const gridPoints = mockGridPoints();
  return (
    <div className="bg-card border border-border/60 rounded-3xl p-8 shadow-elegant grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 items-center">
      <ScoreDonut score={62} />

      <div>
        <div className="grid grid-cols-7 gap-1.5">
          {gridPoints.map((pt, i) => (
            <div
              key={i}
              className="aspect-square rounded-[4px]"
              style={{ backgroundColor: rankColour(pt.rank) }}
              title={`Rank #${pt.rank}`}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-2.5 mt-5">
          {AI_TOOLS.map((t) => (
            <span
              key={t.name}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                t.found ? "bg-[#E7F0E9] text-[#3C6B49]" : "bg-[#FBEAE6] text-[#B0503C]"
              }`}
            >
              {t.found ? "✓" : "✕"} {t.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

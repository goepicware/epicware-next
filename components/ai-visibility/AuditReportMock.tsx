"use client";

import { useState, useEffect } from "react";
import { MapPin, Zap } from "lucide-react";

// Report visual mock for Section 5 ("Sample report"). Copies the exact
// classes/color scale from app/free-audit/FreeAuditWizard.tsx's inline
// ScoreGauge (line 395), rankColour (line 387), heatmap grid (~1226), and AI
// visibility card (~1259) — those aren't exported/reusable there, so this
// duplicates the JSX rather than importing it. Real 6-tool list/order from
// app/api/audit/ai-visibility/route.ts.

const MOCK_BUSINESS_NAME = "Bella Nail Studio";

function rankColour(rank: number): string {
  if (rank <= 3) return "bg-emerald-500";
  if (rank <= 7) return "bg-yellow-400";
  if (rank <= 14) return "bg-orange-500";
  if (rank <= 20) return "bg-red-500";
  return "bg-red-900";
}

function mockGridPoints(): { rank: number }[] {
  const points: { rank: number }[] = [];
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 7; col++) {
      const dist = Math.hypot(row - 3, col - 3);
      points.push({ rank: Math.min(20, Math.round(2 + dist * 4.2)) });
    }
  }
  return points;
}

function ScoreGaugeMock({ score }: { score: number }) {
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
  const r = 54;
  const circ = 2 * Math.PI * r;
  const dash = circ * (display / 100);
  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={r} fill="none" stroke="#e5e7eb" strokeWidth="12" />
        <circle cx="70" cy="70" r={r} fill="none" stroke={colour} strokeWidth="12" strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" transform="rotate(-90 70 70)" style={{ transition: "stroke-dasharray 0.05s linear" }} />
        <text x="70" y="70" textAnchor="middle" dominantBaseline="middle" fontSize="28" fontWeight="700" fill={colour}>{display}</text>
        <text x="70" y="92" textAnchor="middle" fontSize="11" fill="#9ca3af">/100</text>
      </svg>
      <p className="text-sm font-semibold text-gray-500">Critical gaps</p>
    </div>
  );
}

interface MockTool { name: string; found: boolean; hasWebSearch?: boolean }

const AI_TOOLS: MockTool[] = [
  { name: "ChatGPT", found: false },
  { name: "Claude", found: false },
  { name: "Gemini", found: false },
  { name: "Perplexity", found: true, hasWebSearch: true },
  { name: "Llama", found: false },
  { name: "Grok", found: false },
];

export default function AuditReportMock() {
  const gridPoints = mockGridPoints();
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-6">
        <ScoreGaugeMock score={38} />
        <div>
          <p className="font-bold text-gray-900">{MOCK_BUSINESS_NAME}</p>
          <p className="text-sm text-gray-500">Overall visibility score</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[#2563EB]" /> Ranking Heatmap
        </h3>
        <p className="text-sm text-gray-500 mb-6">Each cell shows Google Maps rank at that location. Green = top 3, red = not ranking.</p>
        <div className="grid grid-cols-7 gap-1">
          {gridPoints.map((pt, i) => (
            <div key={i} className={`aspect-square rounded flex items-center justify-center text-white text-[10px] font-bold ${rankColour(pt.rank)} ${i === 24 ? "ring-2 ring-white ring-offset-1 ring-offset-gray-200" : ""}`}>
              {pt.rank > 20 ? "20+" : pt.rank}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-[#2563EB]" /> AI Search Visibility
        </h3>
        <p className="text-sm text-gray-600 mb-4">Checked &ldquo;{MOCK_BUSINESS_NAME}&rdquo; across 6 AI tools:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {AI_TOOLS.map((t) => (
            <div key={t.name} className="border border-gray-100 rounded-xl p-3">
              <div className="flex items-center justify-between gap-1 mb-1">
                <div className="flex items-center gap-1 min-w-0">
                  <span className="text-sm font-medium text-gray-700 truncate">{t.name}</span>
                  {t.hasWebSearch && <span className="text-[9px] font-semibold text-blue-500 shrink-0">🌐</span>}
                </div>
                <span className={`shrink-0 text-[10px] px-1.5 py-0.5 rounded-full font-semibold border ${t.found ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-red-50 text-red-600 border-red-100"}`}>
                  {t.found ? "Found ✓" : "Not found"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

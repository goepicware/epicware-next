"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight, Check, Plus, AlertCircle, TriangleAlert } from "lucide-react";
import type { EnrichedKeyword } from "./types";

// ─── Quick suggestions fallback ───────────────────────────────────────────────

function getQuickSuggestions(businessName: string): string[] {
  const n = businessName.toLowerCase();
  if (n.includes("restaurant") || n.includes("food") || n.includes("cafe") || n.includes("kebab") || n.includes("boss"))
    return ["restaurant singapore", "food near me singapore", "best restaurant singapore"];
  if (n.includes("aesthetic") || n.includes("clinic") || n.includes("medical") || n.includes("health"))
    return ["aesthetic clinic singapore", "skin treatment singapore", "facial singapore"];
  if (n.includes("seo") || n.includes("marketing") || n.includes("digital") || n.includes("agency"))
    return ["seo agency singapore", "local seo singapore", "digital marketing singapore"];
  if (n.includes("salon") || n.includes("beauty") || n.includes("nail") || n.includes("hair"))
    return ["beauty salon singapore", "nail salon singapore", "facial treatment singapore"];
  if (n.includes("dental") || n.includes("dentist"))
    return ["dentist singapore", "dental clinic singapore", "teeth whitening singapore"];
  if (n.includes("hotel") || n.includes("hostel") || n.includes("accommodation"))
    return ["hotel singapore", "hotel near me singapore", "best hotel singapore"];
  if (n.includes("gym") || n.includes("fitness") || n.includes("yoga") || n.includes("pilates"))
    return ["gym singapore", "fitness class singapore", "personal trainer singapore"];
  const first = businessName.split(/\s+[-–—|]\s+/)[0].split(" ")[0].toLowerCase();
  return [`${first} singapore`, `best ${first} singapore`, `${first} near me singapore`];
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface Props {
  businessName: string;
  address: string;
  keywords: EnrichedKeyword[];
  enrichmentLoading: boolean;
  blueOceanSource?: string;
  onConfirm: (keywords: string[]) => void;
  onBack: () => void;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function difficultyChip(difficulty: string): { label: string; cls: string } {
  if (difficulty === "LOW") return { label: "LOW", cls: "bg-emerald-100 text-emerald-700" };
  if (difficulty === "MEDIUM") return { label: "MEDIUM", cls: "bg-yellow-100 text-yellow-700" };
  if (difficulty === "HIGH") return { label: "HIGH", cls: "bg-orange-100 text-orange-700" };
  return { label: "VERY HIGH", cls: "bg-red-100 text-red-700" };
}

// ─── Section label ────────────────────────────────────────────────────────────

function SectionLabel({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="mb-3">
      <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">{label}</p>
      <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
    </div>
  );
}

// ─── Keyword chip with enrichment data ───────────────────────────────────────

function KeywordChip({
  item, selected, onToggle,
}: {
  item: EnrichedKeyword;
  selected: boolean;
  onToggle: (kw: string) => void;
}) {
  const diff = difficultyChip(item.difficulty);
  const isRed = item.type === "red";
  const isFastWin = item.type === "blue" && item.difficulty === "LOW";

  return (
    <button
      type="button"
      onClick={() => onToggle(item.keyword)}
      className={`w-full flex flex-col gap-1.5 px-3 py-2.5 rounded-xl text-sm font-medium border transition-all duration-150 text-left ${
        selected
          ? isRed
            ? "bg-red-600 text-white border-red-600 shadow-sm"
            : "bg-[#2563EB] text-white border-[#2563EB] shadow-sm"
          : isRed
          ? "bg-red-50 text-red-900 border-red-200 hover:border-red-400"
          : "bg-blue-50 text-blue-900 border-blue-200 hover:border-blue-400"
      }`}
    >
      <div className="flex items-center gap-1.5">
        {selected ? (
          <Check className="w-3.5 h-3.5 shrink-0" />
        ) : (
          <span className={`font-normal shrink-0 ${isRed ? "text-red-300" : "text-blue-300"}`}>+</span>
        )}
        <span className="leading-tight flex-1">{item.keyword}</span>
        {isFastWin && !selected && (
          <span className="shrink-0 text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 rounded px-1.5 py-0.5">
            ★ Fast win
          </span>
        )}
      </div>
      <div className="flex gap-1.5 items-center pl-5">
        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${selected ? "bg-white/20 text-white" : diff.cls}`}>
          {diff.label}
        </span>
        <span className={`text-[10px] ${selected ? "text-white/70" : "text-gray-400"}`}>
          {item.estimatedVolume}
        </span>
        {item.clientRank > 0 && (
          <span className={`text-[10px] ml-auto ${selected ? "text-white/70" : "text-gray-400"}`}>
            Rank #{item.clientRank}
          </span>
        )}
      </div>
    </button>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function StepKeywords({
  businessName, keywords, enrichmentLoading, blueOceanSource, onConfirm, onBack,
}: Props) {
  const redOcean = keywords.filter((k) => k.type === "red");
  const blueOcean = keywords.filter((k) => k.type === "blue");
  const allKnown = useMemo(() => new Set(keywords.map((k) => k.keyword)), [keywords]);

  const hasAttemptedLoad = useRef(false);
  const primaryAutoSelected = useRef(false);
  const userChangedRef = useRef(false);

  useEffect(() => {
    if (enrichmentLoading) hasAttemptedLoad.current = true;
  }, [enrichmentLoading]);

  const showFallback = hasAttemptedLoad.current && !enrichmentLoading && keywords.length === 0;

  const [selected, setSelected] = useState<string[]>([]);
  const [customKw, setCustomKw] = useState("");
  const [shake, setShake] = useState(false);
  const [showMaxMsg, setShowMaxMsg] = useState(false);

  // Auto-select: 1 Red Ocean + 2 Blue Ocean when keywords arrive
  useEffect(() => {
    if (!keywords.length || primaryAutoSelected.current) return;
    primaryAutoSelected.current = true;
    if (userChangedRef.current) return;
    const red1 = redOcean.slice(0, 1).map((k) => k.keyword);
    const blue2 = blueOcean.slice(0, 2).map((k) => k.keyword);
    setSelected([...red1, ...blue2]);
  }, [keywords, redOcean, blueOcean]);

  const triggerShake = useCallback(() => {
    setShake(true);
    setShowMaxMsg(true);
    setTimeout(() => { setShake(false); setShowMaxMsg(false); }, 2000);
  }, []);

  const handleToggle = useCallback(
    (kw: string) => {
      userChangedRef.current = true;
      setSelected((prev) => {
        if (prev.includes(kw)) return prev.filter((k) => k !== kw);
        if (prev.length >= 3) { triggerShake(); return prev; }
        return [...prev, kw];
      });
    },
    [triggerShake]
  );

  const handleAddCustom = useCallback(() => {
    const trimmed = customKw.trim().toLowerCase();
    if (!trimmed) return;
    if (selected.length >= 3) { triggerShake(); return; }
    userChangedRef.current = true;
    if (!selected.includes(trimmed)) setSelected((p) => [...p, trimmed]);
    setCustomKw("");
  }, [customKw, selected, triggerShake]);

  const isCustom = (kw: string) => !allKnown.has(kw);

  return (
    <>
      <style>{`
        @keyframes kw-shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-5px); }
          40%, 80% { transform: translateX(5px); }
        }
        .kw-shake { animation: kw-shake 0.45s ease-in-out; }
      `}</style>

      <div className="max-w-lg mx-auto px-4 py-8">
        <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-8 ${shake ? "kw-shake" : ""}`}>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Choose keywords to audit</h2>
          <p className="text-gray-500 text-sm mb-6">
            Select up to 3. We&apos;ll scan your Google Maps rankings for each across Singapore.
          </p>

          {showMaxMsg && (
            <div className="mb-4 flex items-center gap-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2.5">
              <AlertCircle className="w-4 h-4 shrink-0" />
              Maximum 3 keywords — deselect one to change
            </div>
          )}

          {/* ── Fallback banner ──────────────────────────────────────── */}
          {showFallback && (
            <div className="mb-5 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <TriangleAlert className="w-4 h-4 text-amber-600 shrink-0" />
                <p className="text-sm font-semibold text-amber-800">
                  Couldn&apos;t load suggestions — pick from these or type your own below
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {getQuickSuggestions(businessName).map((kw) => (
                  <button
                    key={kw}
                    type="button"
                    onClick={() => handleToggle(kw)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium border transition-all ${
                      selected.includes(kw)
                        ? "bg-[#2563EB] text-white border-[#2563EB]"
                        : "bg-white text-gray-700 border-gray-300 hover:border-[#2563EB] hover:text-[#2563EB]"
                    }`}
                  >
                    {selected.includes(kw) ? <Check className="w-3.5 h-3.5" /> : <span className="text-gray-400">+</span>}
                    {kw}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Loading state ────────────────────────────────────────── */}
          {!showFallback && enrichmentLoading && (
            <div className="py-10 flex flex-col items-center gap-3 text-center mb-6">
              <div className="w-10 h-10 rounded-full border-[3px] border-[#2563EB] border-t-transparent animate-spin" />
              <p className="text-sm font-semibold text-gray-700">Scanning Google Maps rankings…</p>
              <p className="text-xs text-gray-400">Finding the best keywords for your business</p>
            </div>
          )}

          {/* ── RED OCEAN ────────────────────────────────────────────── */}
          {!showFallback && !enrichmentLoading && (
            <div className="mb-6">
              <SectionLabel
                label="Red Ocean — Competitive"
                sub="Broad category terms · high competition · essential to rank"
              />
              {redOcean.length > 0 ? (
                <div className="flex flex-col gap-2">
                  {redOcean.map((item) => (
                    <KeywordChip
                      key={item.keyword}
                      item={item}
                      selected={selected.includes(item.keyword)}
                      onToggle={handleToggle}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          )}

          {/* ── BLUE OCEAN ───────────────────────────────────────────── */}
          {!showFallback && !enrichmentLoading && (
            <div className="mb-6">
              <SectionLabel
                label={
                  blueOceanSource === "website"
                    ? "Blue Ocean — From Your Website"
                    : blueOceanSource === "gbp_listing"
                    ? "Blue Ocean — From Your GBP Listing"
                    : "Blue Ocean — Your Opportunity"
                }
                sub={
                  blueOceanSource === "website"
                    ? "Niche terms extracted from your website content"
                    : blueOceanSource === "gbp_listing"
                    ? "Niche terms inferred from your Google reviews & profile"
                    : "Estimated niche terms · add your website for precise results"
                }
              />
              {blueOcean.length > 0 ? (
                <div className="flex flex-col gap-2">
                  {blueOcean.map((item) => (
                    <KeywordChip
                      key={item.keyword}
                      item={item}
                      selected={selected.includes(item.keyword)}
                      onToggle={handleToggle}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-400 italic py-2">
                  No Blue Ocean keywords found — add your website URL on the previous step to unlock specific terms.
                </p>
              )}
            </div>
          )}

          {/* ── Counter ──────────────────────────────────────────────── */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i < selected.length ? "bg-[#2563EB]" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-gray-500">{selected.length}/3 selected</span>
          </div>

          {/* ── Custom keyword ────────────────────────────────────────── */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Add a custom keyword…"
              value={customKw}
              onChange={(e) => setCustomKw(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddCustom()}
              className="flex-1 border border-gray-300 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
            />
            <button
              type="button"
              onClick={handleAddCustom}
              disabled={!customKw.trim()}
              className="px-3 py-2.5 bg-[#2563EB] text-white rounded-xl disabled:opacity-40 transition-opacity hover:bg-[#1d4ed8]"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Custom chips */}
          {selected.filter(isCustom).length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {selected.filter(isCustom).map((kw) => (
                <span
                  key={kw}
                  className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200"
                >
                  {kw}
                  <button
                    type="button"
                    onClick={() => setSelected((p) => p.filter((k) => k !== kw))}
                    className="hover:text-red-500 transition-colors"
                    aria-label={`Remove ${kw}`}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* ── Navigation ────────────────────────────────────────────── */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onBack}
              className="px-5 py-3 border border-gray-300 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 flex items-center gap-1 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
            <button
              type="button"
              onClick={() => onConfirm(selected)}
              disabled={selected.length === 0}
              className="flex-1 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-40"
            >
              Next — Set Location <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

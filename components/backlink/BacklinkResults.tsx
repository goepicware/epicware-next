"use client";

import { useState, useMemo, useCallback, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Copy, Check, ExternalLink, ChevronDown, ArrowLeft } from "lucide-react";
import type { DashboardData, FormInputs, OpportunityCard, OpportunityStatus } from "./types";

const statusConfig: Record<OpportunityStatus, { label: string; emoji: string; color: string }> = {
  pending: { label: "Pending", emoji: "⬜", color: "" },
  contacted: { label: "Contacted", emoji: "📤", color: "border-l-4 border-l-blue-500" },
  replied: { label: "Replied", emoji: "💬", color: "" },
  added: { label: "Added", emoji: "✅", color: "border-2 border-green-400 bg-green-50/30" },
};

const filterOptions = ["All", "Score A", "Score B", "Listicles", "Alternatives", "Guides"] as const;

interface BacklinkResultsProps {
  data: DashboardData;
  inputs: FormInputs;
  storageKey: string;
  onReset: () => void;
}

function loadStatuses(key: string): Record<number, OpportunityStatus> {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function StatCard({ label, value, accent, sub }: { label: string; value: string; accent?: string; sub?: string }) {
  return (
    <div className="rounded-2xl border border-border bg-muted/30 p-5">
      <p className="text-xs text-muted-foreground font-medium mb-1">{label}</p>
      <p className={`text-2xl font-bold ${accent || "text-foreground"}`}>{value}</p>
      {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
    </div>
  );
}

function CopyBox({ text, id, copiedId, onCopy }: { text: string; id: string; copiedId: string | null; onCopy: (t: string, id: string) => void }) {
  const isCopied = copiedId === id;
  return (
    <div className="relative bg-muted/50 rounded-lg p-4 mt-2">
      <pre className="text-xs text-foreground whitespace-pre-wrap font-mono leading-relaxed">{text}</pre>
      <button
        onClick={() => onCopy(text, id)}
        className={`absolute top-2 right-2 px-2.5 py-1 rounded-md text-xs font-medium border transition-colors ${isCopied ? "border-green-400 text-green-600 bg-green-50" : "border-border text-muted-foreground hover:bg-muted"}`}
      >
        {isCopied ? (
          <span className="inline-flex items-center gap-1"><Check className="w-3 h-3" /> Copied!</span>
        ) : (
          <span className="inline-flex items-center gap-1"><Copy className="w-3 h-3" /> Copy</span>
        )}
      </button>
    </div>
  );
}

function OpportunityCardComponent({ card, status, onStatusChange, copiedId, onCopy }: {
  card: OpportunityCard;
  status: OpportunityStatus;
  onStatusChange: (s: OpportunityStatus) => void;
  copiedId: string | null;
  onCopy: (text: string, id: string) => void;
}) {
  const cfg = statusConfig[status];
  const statusOptions: OpportunityStatus[] = ["pending", "contacted", "replied", "added"];

  return (
    <div className={`rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-md ${cfg.color}`}>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-[15px] text-foreground leading-snug">{card.title}</h3>
          <a href={card.url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1 mt-1">
            {card.domain} <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <div className="flex gap-2 shrink-0">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold text-white ${card.score === "A" ? "bg-red-500" : "bg-amber-500"}`}>
            Score {card.score}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground capitalize">
            {card.type === "listicle" ? "Listicle" : card.type === "alternatives" ? "Alternatives" : "Guide"}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground mb-4">
        <span><strong>Updated:</strong> {card.lastUpdated}</span>
        <span>
          <strong>Author:</strong>{" "}
          {card.authorLinkedin ? (
            <a href={card.authorLinkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{card.authorName}</a>
          ) : card.authorName}
        </span>
        <span>
          <strong>Contact:</strong>{" "}
          {card.contactEmail ? (
            <a href={`mailto:${card.contactEmail}`} className="text-primary hover:underline">{card.contactEmail}</a>
          ) : card.contactPage?.startsWith("http") ? (
            <a href={card.contactPage} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Contact Page</a>
          ) : (card.contactPage || "—")}
        </span>
        <span><strong>Authority:</strong> {card.authorityEstimate}</span>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {card.competitorsMentioned.map((c) => (
          <span key={c} className="px-2 py-0.5 rounded-full text-xs font-medium bg-[#ede9fe] text-[#7c3aed]">{c}</span>
        ))}
      </div>

      <Tabs defaultValue="email" className="mb-3">
        <TabsList className="bg-muted h-9">
          <TabsTrigger value="email" className="text-xs">📧 Email (≤80 words)</TabsTrigger>
          <TabsTrigger value="dm" className="text-xs">💬 LinkedIn/X DM (≤40 words)</TabsTrigger>
        </TabsList>
        <TabsContent value="email">
          <CopyBox text={card.emailOutreach} id={`email-${card.id}`} copiedId={copiedId} onCopy={onCopy} />
        </TabsContent>
        <TabsContent value="dm">
          <CopyBox text={card.dmOutreach} id={`dm-${card.id}`} copiedId={copiedId} onCopy={onCopy} />
        </TabsContent>
      </Tabs>

      {card.note && <p className="text-[11px] text-muted-foreground italic mb-4">{card.note}</p>}

      <div className="flex justify-end gap-1.5">
        {statusOptions.map((s) => {
          const sc = statusConfig[s];
          return (
            <button
              key={s}
              onClick={() => onStatusChange(s)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors ${status === s ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
            >
              {sc.emoji} {sc.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function BacklinkResults({ data, inputs, storageKey, onReset }: BacklinkResultsProps) {
  const [statuses, setStatuses] = useState<Record<number, OpportunityStatus>>(() => loadStatuses(storageKey));
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [recsOpen, setRecsOpen] = useState(true);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const setStatus = useCallback((id: number, status: OpportunityStatus) => {
    setStatuses((prev) => {
      const next = { ...prev, [id]: status };
      localStorage.setItem(storageKey, JSON.stringify(next));
      return next;
    });
  }, [storageKey]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return data.opportunities.filter((card) => {
      if (activeFilter === "Score A" && card.score !== "A") return false;
      if (activeFilter === "Score B" && card.score !== "B") return false;
      if (activeFilter === "Listicles" && card.type !== "listicle") return false;
      if (activeFilter === "Alternatives" && card.type !== "alternatives") return false;
      if (activeFilter === "Guides" && card.type !== "guide") return false;
      if (q) {
        const haystack = [card.title, card.domain, ...card.competitorsMentioned].join(" ").toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [activeFilter, search, data.opportunities]);

  const counts = useMemo(() => {
    const vals = Object.values(statuses);
    return {
      contacted: vals.filter((s) => s === "contacted" || s === "replied" || s === "added").length,
      replied: vals.filter((s) => s === "replied" || s === "added").length,
      added: vals.filter((s) => s === "added").length,
    };
  }, [statuses]);

  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const scrollToCard = (domain: string) => {
    const key = Object.keys(cardRefs.current).find((k) => k.includes(domain));
    if (key && cardRefs.current[key]) cardRefs.current[key]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <Badge className="mb-3 bg-muted text-muted-foreground border-border font-medium text-xs">AI-Generated Dashboard</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{inputs.brandName}'s Backlink Dashboard</h2>
          <p className="text-lg text-muted-foreground">
            {data.summary.totalPages} high-value pages where {inputs.brandName} should be listed. Pre-written outreach included.
          </p>
        </div>
        <button onClick={onReset} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted/50 transition-colors shrink-0">
          <ArrowLeft className="w-4 h-4" /> New Search
        </button>
      </div>

      <Collapsible open={detailsOpen} onOpenChange={setDetailsOpen} className="mb-6">
        <CollapsibleTrigger className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          Your brand details <ChevronDown className={`w-4 h-4 transition-transform ${detailsOpen ? "rotate-180" : ""}`} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="mt-3 rounded-xl border border-border bg-muted/30 p-4 text-sm text-muted-foreground space-y-2">
            <p><strong>Brand:</strong> {inputs.brandName}</p>
            <p><strong>Website:</strong> {inputs.website}</p>
            <p><strong>Product:</strong> {inputs.description}</p>
            <p><strong>Audience:</strong> {inputs.targetAudience}</p>
            <p><strong>Competitors:</strong> {inputs.competitors.join(", ") || "None"}</p>
            <p><strong>Keywords:</strong> {inputs.keywords.join(", ")}</p>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Pages Found" value={String(data.summary.totalPages)} />
        <StatCard label="Score A (Priority)" value={String(data.summary.scoreACount)} accent="text-red-500" />
        <StatCard label="Score B (Secondary)" value={String(data.summary.scoreBCount)} accent="text-amber-500" />
        <StatCard label="Daily Send Target" value={data.summary.dailySendTarget} sub={data.summary.campaignDays} />
        <StatCard label="Contacted" value={String(counts.contacted)} accent="text-blue-500" />
        <StatCard label="Replies Received" value={String(counts.replied)} accent="text-purple-500" />
        <StatCard label="Links Secured" value={String(counts.added)} accent="text-green-500" />
      </div>

      {data.summary.top5Recommendations?.length > 0 && (
        <Collapsible open={recsOpen} onOpenChange={setRecsOpen} className="mb-8">
          <CollapsibleTrigger className="flex items-center gap-2 text-foreground font-semibold text-lg w-full justify-between py-2">
            <span>⭐ Recommended: Contact These First</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${recsOpen ? "rotate-180" : ""}`} />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex gap-3 overflow-x-auto pb-2 mt-3">
              {data.summary.top5Recommendations.map((rec) => (
                <div key={rec.rank} className="min-w-[220px] max-w-[280px] shrink-0 rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">{rec.rank}</span>
                    <span className="font-semibold text-sm text-foreground">{rec.domain}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{rec.reason}</p>
                  <button onClick={() => scrollToCard(rec.domain)} className="text-xs text-primary hover:underline">Jump to card →</button>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex gap-2 overflow-x-auto pb-1 shrink-0">
          {filterOptions.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeFilter === f ? "bg-foreground text-background" : "bg-transparent border border-border text-muted-foreground hover:bg-muted"}`}
            >
              {f}
            </button>
          ))}
        </div>
        <Input placeholder="Search by domain, title, or competitor…" value={search} onChange={(e) => setSearch(e.target.value)} className="max-w-sm" />
      </div>

      <div className="space-y-5 max-w-[860px] mx-auto">
        {filtered.map((card) => (
          <div key={card.id} ref={(el) => { cardRefs.current[`${card.id}-${card.domain}`] = el; }}>
            <OpportunityCardComponent
              card={card}
              status={statuses[card.id] || "pending"}
              onStatusChange={(s) => setStatus(card.id, s)}
              copiedId={copiedId}
              onCopy={handleCopy}
            />
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No opportunities match your filters.</p>
        )}
      </div>

      {data.summary.scheduleByDay?.length > 0 && (
        <div className="mt-12 max-w-[860px] mx-auto">
          <Collapsible open={scheduleOpen} onOpenChange={setScheduleOpen}>
            <CollapsibleTrigger className="flex items-center gap-2 text-foreground font-semibold text-lg w-full justify-between py-3 border-t border-border">
              <span>📅 Send Schedule</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${scheduleOpen ? "rotate-180" : ""}`} />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="py-4 space-y-4">
                {data.summary.scheduleByDay.map((block, i) => (
                  <div key={i}>
                    <p className="font-semibold text-foreground mb-1">{block.days}</p>
                    <ol className="list-decimal list-inside text-muted-foreground text-sm space-y-0.5">
                      {block.domains.map((d) => <li key={d}>{d}</li>)}
                    </ol>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      )}

      <p className="text-center text-[11px] text-muted-foreground mt-12">Powered by AI</p>
    </div>
  );
}

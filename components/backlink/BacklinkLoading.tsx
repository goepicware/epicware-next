"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

const messages = [
  "🔍 Searching for listicles mentioning your competitors…",
  "📄 Scanning page content and author information…",
  "⭐ Scoring each opportunity by authority and freshness…",
  "✍️ Writing personalised outreach emails…",
  "💬 Writing LinkedIn / X DMs…",
  "📊 Sorting opportunities by priority…",
  "✅ Dashboard ready!",
];

export default function BacklinkLoading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= messages.length - 1) return;
    const timer = setTimeout(() => setIndex((i) => i + 1), 4000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <Loader2 className="w-10 h-10 text-primary animate-spin mb-6" />
      <h2 className="text-2xl font-bold text-foreground mb-6">Finding your backlink opportunities…</h2>
      <div className="space-y-2 max-w-md">
        {messages.slice(0, index + 1).map((msg, i) => (
          <p key={i} className={`text-sm transition-opacity duration-500 ${i === index ? "text-foreground font-medium opacity-100" : "text-muted-foreground opacity-60"}`}>
            {msg}
          </p>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, RefreshCw, Sparkles } from "lucide-react";

export default function ReviewReplyGenerator() {
  const [review, setReview] = useState("");
  const [tone, setTone] = useState("professional");
  const [generatedReply, setGeneratedReply] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const generateReply = async () => {
    if (!review.trim()) {
      setError("Please paste a review first");
      return;
    }
    setError("");
    setIsGenerating(true);
    setGeneratedReply("");

    const toneDescriptions: Record<string, string> = {
      professional: "professional, courteous, and business-appropriate",
      friendly: "warm, friendly, and personable while remaining professional",
      apologetic: "sincere, apologetic, and focused on making things right",
      premium: "elegant, premium, and befitting a luxury establishment",
    };

    try {
      const response = await fetch(
        "/api/tools/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [
              {
                role: "system",
                content: `You are a professional copywriter who writes grammatically perfect Google review responses. Write a ${toneDescriptions[tone]} response to the following customer review.\n\nRequirements:\n- Use perfect grammar and punctuation\n- Keep the response concise (2-4 sentences)\n- Be genuine and avoid generic phrases\n- If positive, thank them specifically for what they mentioned\n- If negative, acknowledge their concern and offer to make it right\n- Do not use brackets or placeholders\n- Output ONLY the reply text, nothing else`,
              },
              { role: "user", content: `Write a response to this Google review:\n\n"${review}"` },
            ],
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to generate reply");
      const reader = response.body?.getReader();
      if (!reader) throw new Error("No response body");

      const decoder = new TextDecoder();
      let fullReply = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n").filter((l) => l.startsWith("data: "));
        for (const line of lines) {
          const data = line.slice(6);
          if (data === "[DONE]") continue;
          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              fullReply += content;
              setGeneratedReply(fullReply);
            }
          } catch {}
        }
      }
    } catch {
      setError("Failed to generate reply. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generatedReply);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 via-accent/10 to-primary/20 rounded-[2rem] blur-[40px]" />
      <div className="relative bg-card border border-border/50 rounded-3xl p-6 lg:p-8 shadow-xl space-y-6">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">
            Paste the Google review here
          </label>
          <Textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="e.g., Great food and excellent service! The pasta was delicious and our waiter was very attentive..."
            className="min-h-[120px] resize-none text-base"
          />
          {error && <p className="text-sm text-destructive mt-2">{error}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">Select response tone</label>
          <Select value={tone} onValueChange={setTone}>
            <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="friendly">Friendly</SelectItem>
              <SelectItem value="apologetic">Apologetic</SelectItem>
              <SelectItem value="premium">Premium / Luxury</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <button
          onClick={generateReply}
          disabled={isGenerating || !review.trim()}
          className="inline-flex items-center justify-center gap-2 w-full h-14 rounded-xl bg-foreground text-background font-semibold text-lg disabled:opacity-60 hover:bg-foreground/90 transition-all duration-300"
        >
          {isGenerating ? (
            <><RefreshCw className="w-5 h-5 animate-spin" /> Generating...</>
          ) : (
            <><Sparkles className="w-5 h-5" /> Generate Reply</>
          )}
        </button>
      </div>

      {generatedReply && (
        <div className="mt-8 relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-secondary/10 to-primary/20 rounded-[2rem] blur-[40px]" />
          <div className="relative bg-card border border-border/50 rounded-3xl p-6 lg:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Generated Reply</h3>
              <div className="flex gap-2">
                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/60 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  {copied ? "Copied!" : "Copy"}
                </button>
                <button
                  onClick={generateReply}
                  disabled={isGenerating}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/60 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors disabled:opacity-60"
                >
                  <RefreshCw className={`w-4 h-4 ${isGenerating ? "animate-spin" : ""}`} />
                  Regenerate
                </button>
              </div>
            </div>
            <p className="text-foreground text-base leading-relaxed whitespace-pre-wrap">{generatedReply}</p>
          </div>
        </div>
      )}
    </div>
  );
}

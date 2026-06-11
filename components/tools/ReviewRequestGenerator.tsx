"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, RefreshCw, MessageSquare } from "lucide-react";

export default function ReviewRequestGenerator() {
  const [channel, setChannel] = useState("whatsapp");
  const [tone, setTone] = useState("friendly");
  const [businessName, setBusinessName] = useState("");
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const generateMessage = async () => {
    setError("");
    setIsGenerating(true);
    setGeneratedMessage("");

    const channelDescriptions: Record<string, string> = {
      whatsapp: "WhatsApp message (can include emojis, keep it conversational)",
      sms: "SMS text message (keep it brief, under 160 characters if possible)",
      email: "email (can be slightly longer, include a subject line suggestion)",
    };
    const toneDescriptions: Record<string, string> = {
      friendly: "warm, friendly, and appreciative",
      professional: "professional and courteous",
      short: "short, direct, and to the point",
    };
    const businessContext = businessName.trim()
      ? `The business name is "${businessName}".`
      : "Do not include a specific business name, use a placeholder like [Business Name] or keep it generic.";

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            messages: [
              {
                role: "system",
                content: `You are a professional copywriter who writes grammatically perfect, polished messages.\n\nWrite a ${toneDescriptions[tone]} ${channelDescriptions[channel]} asking a customer to leave a Google review.\n\n${businessContext}\n\nRequirements:\n- Use perfect grammar and punctuation\n- Write complete, well-structured sentences\n- Keep the message genuine and not pushy\n- Include a clear call-to-action\n- Include [Google Review Link] as the only placeholder\n- Output ONLY the message text, nothing else`,
              },
              {
                role: "user",
                content: `Write a ${tone} ${channel} message asking for a Google review.`,
              },
            ],
          }),
        }
      );

      if (!response.ok) throw new Error("Failed");
      const reader = response.body?.getReader();
      if (!reader) throw new Error("No body");

      const decoder = new TextDecoder();
      let fullMessage = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        for (const line of chunk.split("\n").filter((l) => l.startsWith("data: "))) {
          const data = line.slice(6);
          if (data === "[DONE]") continue;
          try {
            const content = JSON.parse(data)?.choices?.[0]?.delta?.content;
            if (content) { fullMessage += content; setGeneratedMessage(fullMessage); }
          } catch {}
        }
      }
    } catch {
      setError("Failed to generate message. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-[2rem] blur-[40px]" />
      <div className="relative bg-card border border-border/50 rounded-3xl p-6 lg:p-8 shadow-xl space-y-6">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">Select message channel</label>
          <Select value={channel} onValueChange={setChannel}>
            <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="whatsapp">WhatsApp</SelectItem>
              <SelectItem value="sms">SMS</SelectItem>
              <SelectItem value="email">Email</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">Select tone</label>
          <Select value={tone} onValueChange={setTone}>
            <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="friendly">Friendly</SelectItem>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="short">Short &amp; Direct</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">
            Business name <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <Input
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="e.g., Joe's Coffee Shop"
            className="h-12"
          />
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <button
          onClick={generateMessage}
          disabled={isGenerating}
          className="inline-flex items-center justify-center gap-2 w-full h-14 rounded-xl bg-foreground text-background font-semibold text-lg disabled:opacity-60 hover:bg-foreground/90 transition-all duration-300"
        >
          {isGenerating ? (
            <><RefreshCw className="w-5 h-5 animate-spin" /> Generating...</>
          ) : (
            <><MessageSquare className="w-5 h-5" /> Generate Message</>
          )}
        </button>
      </div>

      {generatedMessage && (
        <div className="mt-8 relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-secondary/10 to-primary/20 rounded-[2rem] blur-[40px]" />
          <div className="relative bg-card border border-border/50 rounded-3xl p-6 lg:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Generated Message</h3>
              <div className="flex gap-2">
                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/60 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  {copied ? "Copied!" : "Copy"}
                </button>
                <button
                  onClick={generateMessage}
                  disabled={isGenerating}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/60 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors disabled:opacity-60"
                >
                  <RefreshCw className={`w-4 h-4 ${isGenerating ? "animate-spin" : ""}`} />
                  Regenerate
                </button>
              </div>
            </div>
            <p className="text-foreground text-base leading-relaxed whitespace-pre-wrap">{generatedMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

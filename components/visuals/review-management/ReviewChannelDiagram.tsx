"use client";

import { motion } from "framer-motion";
import { MessageCircle, MessageSquareText, Mail, QrCode, Users, ArrowDown, ShieldCheck } from "lucide-react";
import { useScrollReveal } from "../useScrollReveal";

const CHANNELS = [
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: MessageSquareText, label: "SMS" },
  { icon: Mail, label: "Email" },
  { icon: QrCode, label: "QR code" },
];

const BADGES = ["No incentives", "Every customer asked", "Opted-in contacts only"];

/**
 * R5 — #review-generation. Four channels converging on one review
 * request, plus a broadcast-to-customer-list variant. Deliberately shows
 * every customer receiving the same request — no happy/unhappy fork, per
 * the brief's review-gating compliance rule.
 */
export default function ReviewChannelDiagram() {
  const reveal = useScrollReveal();
  return (
    <motion.div
      {...reveal}
      role="img"
      aria-label="WhatsApp, SMS, email and QR code all send every customer the same review request link, with a broadcast option to your opted-in customer list. No customer is filtered by whether they're expected to leave a positive review."
      className="mx-auto w-full max-w-lg rounded-2xl border border-border/60 bg-card shadow-card-hover p-5"
    >
      <div aria-hidden="true">
        <div className="grid grid-cols-4 gap-2 mb-2">
          {CHANNELS.map((c) => (
            <div key={c.label} className="flex flex-col items-center gap-1.5">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <c.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-[9px] font-medium text-muted-foreground">{c.label}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <ArrowDown className="w-4 h-4 text-primary/50" />
        </div>

        <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-3 text-center mb-3">
          <p className="text-xs font-semibold text-foreground">Same review request, every customer</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">One link. No filtering by who's expected to be happy.</p>
        </div>

        <div className="flex items-center justify-center gap-2 rounded-xl border border-border/60 bg-background p-2.5 mb-3">
          <Users className="w-4 h-4 text-primary shrink-0" />
          <span className="text-[10px] font-medium text-foreground">
            Or broadcast to your opted-in customer list over WhatsApp
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {BADGES.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1 text-[9px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-1"
            >
              <ShieldCheck className="w-3 h-3" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

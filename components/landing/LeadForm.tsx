"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LANDING } from "@/lib/landing-constants";

const { form } = LANDING;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function LeadForm() {
  const [businessName, setBusinessName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/audit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ businessName, whatsapp, businessType }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
      } else {
        setError("Something went wrong. Please try WhatsApp instead.");
      }
    } catch {
      setError("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="audit-form" className="bg-[#0A0F1E] py-20 lg:py-28">
      <div className="max-w-2xl mx-auto px-6">

        <motion.h2 {...fadeUp(0)} className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-3 text-center">
          {form.h2}
        </motion.h2>

        <motion.p {...fadeUp(0.05)} className="text-gray-400 text-center mb-10">
          {form.sub}
        </motion.p>

        <motion.div {...fadeUp(0.1)} className="rounded-2xl bg-[#111827] border border-white/10 p-8">
          {success ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <p className="text-white font-bold text-xl mb-2">You&apos;re in!</p>
              <p className="text-gray-400 leading-relaxed">{form.successMsg.replace("✅ You're in! ", "")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Business Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-white/80 text-sm font-medium">Business Name</label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Nanyang Dao Restaurant"
                  className="w-full h-12 rounded-xl bg-white/5 border border-white/15 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors text-sm"
                />
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col gap-1.5">
                <label className="text-white/80 text-sm font-medium">
                  WhatsApp Number
                  <span className="text-gray-500 font-normal ml-2 text-xs">We&apos;ll send your audit results here</span>
                </label>
                <input
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="e.g. +65 9123 4567"
                  className="w-full h-12 rounded-xl bg-white/5 border border-white/15 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors text-sm"
                />
              </div>

              {/* Business Type */}
              <div className="flex flex-col gap-1.5">
                <label className="text-white/80 text-sm font-medium">Business Type</label>
                <select
                  required
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full h-12 rounded-xl bg-white/5 border border-white/15 px-4 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors text-sm appearance-none"
                  style={{ colorScheme: "dark" }}
                >
                  <option value="" disabled className="bg-gray-900">Select your business type</option>
                  {form.businessTypes.map((t) => (
                    <option key={t} value={t} className="bg-gray-900">{t}</option>
                  ))}
                </select>
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-full bg-green-500 hover:bg-green-400 disabled:opacity-60 disabled:cursor-not-allowed text-gray-950 font-extrabold text-base transition-all duration-200 shadow-[0_4px_24px_rgba(34,197,94,0.35)] hover:shadow-[0_8px_32px_rgba(34,197,94,0.45)] hover:-translate-y-0.5 mt-2"
              >
                {loading ? "Sending…" : form.submitCta}
              </button>

              <p className="text-center text-gray-500 text-xs">{form.trustMicro}</p>
            </form>
          )}
        </motion.div>

        <motion.div {...fadeUp(0.2)} className="text-center mt-6">
          <Link
            href={form.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 text-sm font-semibold hover:text-green-300 transition-colors"
          >
            {form.whatsapp.label}
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

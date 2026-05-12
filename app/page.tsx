"use client";

import { motion } from "framer-motion";
import AuditForm from "@/components/AuditForm";
import StatsSection from "@/components/StatsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >

          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-sm text-zinc-400 mb-8">
            AI Cost Optimization Platform
          </div>

          <h1 className="text-7xl font-bold leading-tight tracking-tight">
            Stop Overpaying
            <br />
            For AI Tools
          </h1>

          <p className="text-zinc-400 text-xl mt-8 leading-relaxed max-w-2xl">
            Audit your AI stack across ChatGPT, Claude,
            Cursor, Gemini and Copilot to discover
            hidden monthly savings opportunities.
          </p>

        </motion.div>

        <div className="mt-16">
          <AuditForm />
          <StatsSection />
        </div>

      </div>
    </main>
  );
}
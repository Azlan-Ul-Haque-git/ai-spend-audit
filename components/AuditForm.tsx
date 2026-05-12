"use client";

import { useState } from "react";
import AuditResult from "./AuditResult";
import { generateAudit } from "@/lib/auditEngine";
import SavingsCard from "./SavingsCard";

export default function AuditForm() {
  const [tool, setTool] = useState("chatgpt");
  const [plan, setPlan] = useState("team");
  const [teamSize, setTeamSize] = useState(1);

  const [result, setResult] = useState<any>(null);

  const handleSubmit = () => {
    const audit = generateAudit(tool, plan, teamSize);

    setResult(audit);
  };

  return (
    <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">

      <div className="grid gap-6">

        <div>
          <label className="text-sm text-zinc-400">
            AI Tool
          </label>

          <select
            value={tool}
            onChange={(e) => setTool(e.target.value)}
            className="w-full mt-2 bg-black border border-zinc-700 p-4 rounded-xl"
          >
            <option value="chatgpt">ChatGPT</option>
            <option value="claude">Claude</option>
            <option value="cursor">Cursor</option>
            <option value="gemini">Gemini</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-zinc-400">
            Current Plan
          </label>

          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="w-full mt-2 bg-black border border-zinc-700 p-4 rounded-xl"
          >
            <option value="plus">Plus</option>
            <option value="team">Team</option>
            <option value="business">Business</option>
            <option value="enterprise">Enterprise</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-zinc-400">
            Team Size
          </label>

          <input
            type="number"
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            className="w-full mt-2 bg-black border border-zinc-700 p-4 rounded-xl"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-white text-black py-4 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Generate Audit
        </button>

      </div>

      {result && (
        <>
          <SavingsCard savings={result.savings} />

          <AuditResult
            recommendation={result.recommendation}
            savings={result.savings}
            annualSavings={result.annualSavings}
          />
        </>
      )}

    </div>
  );
}
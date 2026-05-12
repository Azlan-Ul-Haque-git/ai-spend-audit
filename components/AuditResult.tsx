import SavingsChart from "./SavingsChart";
import AISummary from "./AISummary";
import LeadCapture from "./LeadCapture";
interface Props {
  recommendation: string;
  savings: number;
  annualSavings: number;
}

export default function AuditResult({
  recommendation,
  savings,
  annualSavings,
}: Props) {
  return (
    <div className="mt-10">

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
          <p className="text-zinc-400 text-sm">
            Monthly Savings
          </p>

          <h2 className="text-4xl font-bold mt-3 text-green-400">
            ${savings}
          </h2>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
          <p className="text-zinc-400 text-sm">
            Annual Savings
          </p>

          <h2 className="text-4xl font-bold mt-3">
            ${annualSavings}
          </h2>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
          <p className="text-zinc-400 text-sm">
            Optimization Score
          </p>

          <h2 className="text-4xl font-bold mt-3 text-blue-400">
            82%
          </h2>
        </div>

      </div>

      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 mt-6">

        <p className="text-zinc-400 text-sm mb-3">
          Recommendation
        </p>

        <h3 className="text-2xl font-semibold">
          {recommendation}
        </h3>

        <p className="text-zinc-500 mt-4 leading-relaxed">
          Based on your current team size and tool usage,
          your organization appears to be overpaying for AI tooling.
          Optimizing your plan allocation can significantly reduce costs
          while maintaining the same workflow efficiency.
        </p>

      </div>
      <SavingsChart />
      <AISummary savings={savings} />
      <LeadCapture
        tool="chatgpt"
        plan="team"
        savings={savings}
      />
    </div>
  );
}
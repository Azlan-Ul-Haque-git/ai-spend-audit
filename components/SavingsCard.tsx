type Props = {
    savings: number;
};

export default function SavingsCard({
    savings,
}: Props) {
    return (
        <div className="mt-10 border border-emerald-900 bg-emerald-950/20 rounded-2xl p-8">
            <div className="flex items-center justify-between">

                <div>
                    <p className="text-zinc-400 text-sm">
                        Estimated Monthly Savings
                    </p>

                    <h2 className="text-5xl font-bold text-emerald-400 mt-3">
                        ${savings}
                    </h2>
                </div>

                <div className="h-16 w-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-2xl">
                        ↑
                    </span>
                </div>

            </div>

            <p className="text-zinc-400 mt-6 leading-relaxed">
                By consolidating redundant AI subscriptions and
                optimizing seat allocation, your organization
                could reduce recurring AI tooling expenses.
            </p>
        </div>
    );
}
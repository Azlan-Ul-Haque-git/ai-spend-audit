interface Props {
    savings: number;
}

export default function AISummary({ savings }: Props) {
    return (
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 mt-6">

            <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500" />

                <p className="text-sm text-zinc-400">
                    AI Generated Summary
                </p>
            </div>

            <p className="text-zinc-300 leading-relaxed">
                Based on your current AI tooling setup,
                your organization appears to be overpaying
                for collaborative plans relative to your
                active team size and workflow requirements.

                By consolidating tooling and optimizing
                plan allocation, you could potentially save
                approximately ${savings} per month without
                impacting productivity or developer efficiency.
            </p>

        </div>
    );
}
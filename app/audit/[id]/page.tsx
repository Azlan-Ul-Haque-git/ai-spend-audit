import Footer from "@/components/Footer";
interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function AuditPage({
    params,
}: Props) {

    const { id } = await params;

    return (
        <main className="min-h-screen bg-black text-white px-6 py-20">

            <div className="max-w-4xl mx-auto">

                <div className="border border-zinc-800 bg-zinc-950 rounded-3xl p-10">

                    <p className="text-zinc-400 text-sm mb-4">
                        Public Audit Report
                    </p>

                    <h1 className="text-5xl font-bold">
                        Audit #{id}
                    </h1>

                    <p className="text-zinc-400 mt-6 leading-relaxed">
                        This shareable AI spend audit report
                        shows estimated optimization opportunities
                        across your current AI tooling stack.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-10">

                        <div className="bg-black border border-zinc-800 rounded-2xl p-6">
                            <p className="text-zinc-500 text-sm">
                                Tool
                            </p>

                            <h3 className="text-3xl font-bold mt-3">
                                ChatGPT
                            </h3>
                        </div>

                        <div className="bg-black border border-zinc-800 rounded-2xl p-6">
                            <p className="text-zinc-500 text-sm">
                                Plan
                            </p>

                            <h3 className="text-3xl font-bold mt-3">
                                Team
                            </h3>
                        </div>

                        <div className="bg-black border border-zinc-800 rounded-2xl p-6">
                            <p className="text-zinc-500 text-sm">
                                Savings
                            </p>

                            <h3 className="text-3xl font-bold mt-3 text-emerald-400">
                                $120
                            </h3>
                        </div>

                    </div>

                </div>

            </div>
            <div className="mt-20">
                <Footer />
            </div>
        </main>
    );
}
export default function StatsSection() {
    const stats = [
        {
            title: "$12k+",
            subtitle: "Monthly AI spend analyzed",
        },
        {
            title: "37%",
            subtitle: "Average savings identified",
        },
        {
            title: "120+",
            subtitle: "Teams audited",
        },
    ];

    return (
        <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((item) => (
                <div
                    key={item.title}
                    className="border border-zinc-800 bg-zinc-950 rounded-2xl p-8"
                >
                    <h3 className="text-4xl font-bold">
                        {item.title}
                    </h3>

                    <p className="text-zinc-400 mt-3">
                        {item.subtitle}
                    </p>
                </div>
            ))}
        </section>
    );
}
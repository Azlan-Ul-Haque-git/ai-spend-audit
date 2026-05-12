"use client";

import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Current",
        cost: 120,
    },
    {
        name: "Optimized",
        cost: 40,
    },
];

export default function SavingsChart() {
    return (
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 mt-6">

            <h3 className="text-xl font-semibold mb-6">
                AI Spend Comparison
            </h3>

            <div className="h-[300px]">

                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>

                        <XAxis dataKey="name" />

                        <Tooltip />

                        <Bar
                            dataKey="cost"
                            radius={[10, 10, 0, 0]}
                        />

                    </BarChart>
                </ResponsiveContainer>

            </div>

        </div>
    );
}
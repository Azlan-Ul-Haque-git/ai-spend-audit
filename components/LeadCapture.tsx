"use client";

import { supabase } from "@/lib/supabase";
import { useState } from "react";

interface Props {
    tool: string;
    plan: string;
    savings: number;
}

export default function LeadCapture({
    tool,
    plan,
    savings,
}: Props) {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {

        if (!email.trim()) {
            alert("Please enter your email");
            return;
        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email");
            return;
        }

        setLoading(true);

        const { data, error } = await supabase
            .from("audits")
            .insert([
                {
                    email,
                    tool,
                    plan,
                    savings,
                },
            ])
            .select();

        console.log(data);
        console.log(error);

        if (error) {
            setLoading(false);

            alert(error.message);
            return;
        }

        setLoading(false);

        setEmail("");

        alert("Audit report saved successfully");
    };

    return (
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 mt-6">

            <h3 className="text-2xl font-semibold">
                Save Your Audit Report
            </h3>

            <p className="text-zinc-400 mt-2">
                Get your AI savings report directly in your inbox.
            </p>

            <div className="flex gap-4 mt-6">

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-white transition"
                />

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-white text-black px-6 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
                >
                    {loading ? "Saving..." : "Save Report"}
                </button>

            </div>

        </div>
    );
}
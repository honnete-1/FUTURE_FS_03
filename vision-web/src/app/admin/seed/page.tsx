"use client";

import { useState } from "react";
import { mockData } from "@/services/cms";
import { seedDatabase } from "@/services/db";

export default function SeedPage() {
    const [status, setStatus] = useState("Idle");

    const handleTest = async () => {
        setStatus("Testing...");
        try {
            await seedDatabase([]); // Just check if function runs
            setStatus("Function OK. Testing Write...");

            // Try explicit independent write
            const { doc, setDoc } = await import("firebase/firestore");
            const { db } = await import("@/lib/firebase");
            await setDoc(doc(db, "test", "ping"), { timestamp: new Date() });

            setStatus("Connection OK! You can Seed now.");
        } catch (e: any) {
            console.error(e);
            setStatus("Error: " + e.message);
        }
    };

    const handleSeed = async () => {
        setStatus("Seeding...");
        try {
            await seedDatabase(mockData);
            setStatus("Done! Check your Firebase Console.");
        } catch (e: any) {
            console.error(e);
            setStatus("Error: " + e.message);
        }
    };

    return (
        <div className="min-h-screen pt-32 px-12 text-center">
            <h1 className="text-3xl font-bold mb-8">Admin: Seed Database</h1>
            <p className="mb-8 text-gray-400">This will upload {mockData.length} items to your Firestore 'media' collection.</p>

            <div className="flex justify-center gap-4">
                <button
                    onClick={handleTest}
                    className="bg-blue-600 px-8 py-3 rounded font-bold hover:bg-blue-700 disabled:opacity-50"
                    disabled={status.startsWith("Testing")}
                >
                    Test Connection
                </button>
                <button
                    onClick={handleSeed}
                    className="bg-red-600 px-8 py-3 rounded font-bold hover:bg-red-700 disabled:opacity-50"
                    disabled={status === "Seeding..."}
                >
                    {status}
                </button>
            </div>

            <p className="mt-8 text-sm text-gray-500 font-mono">{status}</p>
        </div>
    );
}

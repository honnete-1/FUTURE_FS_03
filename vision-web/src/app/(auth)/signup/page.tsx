"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function SignupPage() {
    const router = useRouter();
    const { signup } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await signup(email, password);
            // Optionally update profile name here if needed
            router.push("/");
        } catch (err: any) {
            setError(err.message.replace("Firebase: ", ""));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/hero.png')" }}>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <div className="relative z-10 w-full max-w-md bg-black/80 p-8 md:p-12 rounded-lg shadow-2xl border border-white/10">
                <div className="text-center mb-8">
                    <div className="relative w-40 h-12 mx-auto mb-4">
                        <Image src="/logo.png" alt="Net Moviex" fill className="object-contain" />
                    </div>
                    <h1 className="text-3xl font-bold text-white">Create Account</h1>
                </div>

                {error && <div className="bg-[#e50914] text-white p-3 rounded mb-4 text-sm">{error}</div>}

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-[#333] text-white px-4 py-3 rounded outline-none focus:bg-[#454545] transition-colors"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#333] text-white px-4 py-3 rounded outline-none focus:bg-[#454545] transition-colors"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-[#333] text-white px-4 py-3 rounded outline-none focus:bg-[#454545] transition-colors"
                            required
                            minLength={6}
                        />
                    </div>

                    <button disabled={loading} className="w-full bg-[#e50914] text-white font-bold py-3 rounded hover:bg-[#b00710] transition-colors disabled:opacity-50">
                        {loading ? "Creating Account..." : "Sign Up"}
                    </button>
                </form>

                <div className="mt-8 text-gray-400">
                    Already have an account? <Link href="/login" className="text-white hover:underline">Sign in now.</Link>
                </div>
            </div>
        </div>
    );
}

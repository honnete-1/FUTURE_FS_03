import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
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

                <form className="space-y-6">
                    <div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full bg-[#333] text-white px-4 py-3 rounded outline-none focus:bg-[#454545] transition-colors"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full bg-[#333] text-white px-4 py-3 rounded outline-none focus:bg-[#454545] transition-colors"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full bg-[#333] text-white px-4 py-3 rounded outline-none focus:bg-[#454545] transition-colors"
                        />
                    </div>

                    <button className="w-full bg-[#e50914] text-white font-bold py-3 rounded hover:bg-[#b00710] transition-colors">
                        Sign Up
                    </button>
                </form>

                <div className="mt-8 text-gray-400">
                    Already have an account? <Link href="/login" className="text-white hover:underline">Sign in now.</Link>
                </div>
            </div>
        </div>
    );
}

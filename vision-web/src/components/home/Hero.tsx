import Image from "next/image";
import { Play, Info } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero.png"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center">
                <div className="max-w-2xl mt-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-accent mb-6">
                        <span className="animate-pulse">●</span> #1 in Artificial Intelligence
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-tight">
                        NET MOVIEX: <br />
                        <span className="text-gradient">AWAKENING</span>
                    </h1>

                    <p className="text-lg text-gray-300 mb-8 line-clamp-3 md:line-clamp-none max-w-xl">
                        In a future where humanity merges with the digital realm, one rogue AI discovers the secret to consciousness. Experience the Net Moviex Original Series.
                    </p>

                    <div className="flex items-center gap-4">
                        <Link href="/watch/1">
                            <button className="flex items-center gap-2 px-8 py-3 rounded bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                                <Play className="w-5 h-5 fill-black" /> Play
                            </button>
                        </Link>
                        <button className="flex items-center gap-2 px-8 py-3 rounded bg-white/20 backdrop-blur-sm text-white font-bold hover:bg-white/30 transition-colors">
                            <Info className="w-5 h-5" /> More Info
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

import Link from "next/link"; // Added missing import

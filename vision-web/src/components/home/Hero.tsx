import Link from "next/link";
import Image from "next/image";
import { Play, Info } from "lucide-react";
import { getTrendingContent } from "@/services/cms";

export default function Hero() {
    const trending = getTrendingContent();
    // Use a random movie from trending list for variety, or fix to first one
    const featured = trending[Math.floor(Math.random() * trending.length)] || trending[0];

    return (
        <div className="relative h-[85vh] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                {featured?.image && (
                    <Image
                        src={featured.image}
                        alt="Hero Background"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center">
                <div className="max-w-2xl mt-auto mb-20 md:mb-32">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-accent mb-6">
                        <span className="animate-pulse">●</span> #1 in {featured?.tags[0] || "Trending"}
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-tight drop-shadow-lg">
                        {featured?.title}
                    </h1>

                    <p className="text-lg text-gray-300 mb-8 line-clamp-3 md:line-clamp-none max-w-xl drop-shadow-md">
                        {featured?.description}
                    </p>

                    <div className="flex items-center gap-4">
                        <Link href={`/watch/${featured?.id}`}>
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

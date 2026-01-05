"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Info, ChevronRight, ChevronLeft } from "lucide-react";

const heroContent = [
    {
        id: 1,
        title: "NEON GENESIS",
        subtitle: "AWAKENING",
        description: "In a future where humanity merges with the digital realm, one rogue AI discovers the secret to consciousness. The line between reality and simulation blurs in this visionary original series.",
        image: "/hero.png",
        color: "from-blue-600/20"
    },
    {
        id: 2,
        title: "CYBERPUNK",
        subtitle: "EDGERUNNERS",
        description: "In a dystopia riddled with corruption and cybernetic implants, a talented but reckless street kid strives to become a mercenary outlaw — an edgerunner.",
        image: "/cyberpunk_poster.png",
        // Using the poster as bg for now, ideally wide aspect asset
        color: "from-yellow-400/20"
    },
    {
        id: 3,
        title: "THE MATRIX",
        subtitle: "RESURRECTIONS",
        description: "Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more.",
        image: "/matrix.png",
        color: "from-green-500/20"
    }
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % heroContent.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % heroContent.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + heroContent.length) % heroContent.length);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            {heroContent.map((item, index) => (
                <div
                    key={item.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        {/* Using a blur wrapper for poster images to make them look good as backgrounds */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.color} to-transparent opacity-50 mix-blend-overlay z-10`} />
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-20 container mx-auto px-4 md:px-12 h-full flex items-center">
                        <div className={`max-w-2xl mt-20 transition-all duration-700 transform ${index === current ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                            {index === 0 && (
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-accent mb-6">
                                    <span className="animate-pulse">●</span> #1 in Artificial Intelligence
                                </div>
                            )}

                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-tight">
                                {item.title}: <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{item.subtitle}</span>
                            </h1>

                            <p className="text-lg text-gray-300 mb-8 line-clamp-3 md:line-clamp-none max-w-xl drop-shadow-md">
                                {item.description}
                            </p>

                            <div className="flex items-center gap-4">
                                <Link href={`/watch/${item.id}`}>
                                    <button className="flex items-center gap-2 px-8 py-3 rounded bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                                        <Play className="w-5 h-5 fill-black" /> Play
                                    </button>
                                </Link>
                                <button className="flex items-center gap-2 px-8 py-3 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-white/20 transition-colors">
                                    <Info className="w-5 h-5" /> More Info
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Indicators / Controls */}
            <div className="absolute bottom-32 right-12 z-50 flex gap-4">
                <button onClick={prevSlide} className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-colors">
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button onClick={nextSlide} className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-colors">
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {heroContent.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-white" : "w-2 bg-gray-600"}`}
                    />
                ))}
            </div>
        </div>
    );
}

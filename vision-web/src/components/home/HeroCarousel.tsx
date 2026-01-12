"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Info, ChevronRight, ChevronLeft, X } from "lucide-react";

const heroContent = [
    {
        id: 1, // Cyberpunk ID from CMS
        title: "CYBERPUNK",
        subtitle: "EDGERUNNERS",
        description: "A street kid tries to survive in a technology and body modification-obsessed city of the future. With everything to lose, he chooses to stay alive by becoming an edgerunner—a mercenary outlaw also known as a cyberpunk.",
        image: "https://upload.wikimedia.org/wikipedia/en/2/23/Cyberpunk_Edgerunners_poster.jpg",
        color: "from-yellow-400/20"
    },
    {
        id: 2, // Dune Part Two
        title: "DUNE",
        subtitle: "PART TWO",
        description: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe.",
        image: "https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        color: "from-orange-600/20"
    },
    {
        id: 11, // The Matrix
        title: "THE MATRIX",
        subtitle: "",
        description: "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
        image: "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        color: "from-green-500/20"
    }
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const [showInfo, setShowInfo] = useState(false);

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
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 py-2 inline-block">{item.subtitle}</span>
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
                                <button
                                    onClick={() => setShowInfo(true)}
                                    className="flex items-center gap-2 px-8 py-3 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-white/20 transition-colors"
                                >
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
            {/* Info Modal */}
            {showInfo && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-[#1a1a1a] rounded-xl max-w-2xl w-full p-6 md:p-8 relative border border-white/10">
                        <button
                            onClick={() => setShowInfo(false)}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        <div className="relative h-64 md:h-80 w-full mb-6 rounded-lg overflow-hidden">
                            <Image
                                src={heroContent[current].image}
                                alt={heroContent[current].title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                        </div>

                        <h2 className="text-3xl font-bold mb-2">{heroContent[current].title}: {heroContent[current].subtitle}</h2>

                        <div className="flex gap-2 my-4">
                            <span className="bg-green-600 text-black px-2 py-0.5 rounded text-xs font-bold">98% Match</span>
                            <span className="border border-gray-600 px-2 py-0.5 rounded text-xs">2026</span>
                            <span className="border border-gray-600 px-2 py-0.5 rounded text-xs">4K</span>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            {heroContent[current].description}
                        </p>

                        <div className="flex gap-4">
                            <Link href={`/watch/${heroContent[current].id}`} className="flex-1">
                                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                                    <Play className="w-5 h-5 fill-black" /> Play
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

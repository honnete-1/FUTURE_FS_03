"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import Link from "next/link";

interface MovieCardProps {
    title: string;
    image: string | null;
    tags?: string[];
    match: number;
    id?: number;
}

export default function MovieCard({ title, image, tags, match, id = 1 }: MovieCardProps) {
    const videoId = id || Math.floor(Math.random() * 100);

    return (
        <Link href={`/watch/${videoId}`}>
            <div className="group relative w-[160px] md:w-[240px] aspect-[2/3] flex-shrink-0 cursor-pointer transition-transform duration-300 hover:z-20 hover:scale-105 mx-2">
                <div className="relative w-full h-full rounded-md md:rounded-lg overflow-hidden border border-white/10 shadow-lg">
                    {/* Placeholder for actual image */}
                    <div className="absolute inset-0 bg-zinc-900" />
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 160px, 240px"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-gray-500 font-bold text-xl p-4 text-center">
                            {title}
                        </div>
                    )}

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Title overlay on card (shown when not hovering details, improves context) */}
                    <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-bold opacity-100 group-hover:opacity-0 transition-opacity drop-shadow-md text-center bg-black/50 backdrop-blur-sm rounded px-1 py-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
                        {title}
                    </div>
                </div>

                {/* Hover Card Details - Bottom Aligned */}
                <div className="absolute top-[95%] left-1/2 -translate-x-1/2 w-[110%] bg-[#181818] rounded-b-md shadow-2xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100 z-50 pointer-events-none group-hover:pointer-events-auto border-x border-b border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                        <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 text-black shadow-md transition-transform hover:scale-110">
                            <Play className="w-3 h-3 fill-black" />
                        </button>
                        <button className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:border-white text-gray-300 hover:text-white transition-colors">
                            <Plus className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:border-white text-gray-300 hover:text-white transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                        </button>
                        <button className="ml-auto w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:border-white text-gray-300 hover:text-white transition-colors">
                            <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="text-green-400 font-bold text-xs mb-1">{match}% Match</div>
                    <div className="flex flex-wrap gap-2 text-[10px] text-gray-300 items-center mb-2">
                        <span className="border border-gray-500 px-1 rounded-[2px] whitespace-nowrap">16+</span>
                        <span className="whitespace-nowrap">1h 50m</span>
                        <span className="border border-gray-500 px-1 rounded-[2px] whitespace-nowrap">HD</span>
                    </div>
                    <div className="flex flex-wrap gap-1 text-[10px] text-gray-400">
                        {tags?.slice(0, 3).map((tag, i) => (
                            <span key={i} className="flex items-center whitespace-nowrap">
                                {tag}{i < (tags?.slice(0, 3).length || 0) - 1 && <span className="mx-1">•</span>}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}

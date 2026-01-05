"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";

interface ContentRowProps {
    title: string;
    items: Array<{ title: string; match: number; tags: string[]; image?: string | null }>;
}

export default function ContentRow({ title, items }: ContentRowProps) {
    const rowRef = useRef<HTMLDivElement>(null);
    const [isMoved, setIsMoved] = useState(false);

    const handleClick = (direction: "left" | "right") => {
        setIsMoved(true);
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;
            const scrollTo = direction === "left"
                ? scrollLeft - clientWidth / 2
                : scrollLeft + clientWidth / 2;

            rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });

            if (direction === "left" && scrollTo <= 0) setIsMoved(false);
        }
    };

    return (
        <div className="space-y-4 md:space-y-4 mb-8 md:mb-12 relative group z-10 px-4 md:px-12">
            <h2 className="text-xl md:text-2xl font-semibold text-white transition-colors hover:text-gray-200 cursor-pointer w-fit">
                {title}
            </h2>

            <div className="group relative">
                <div
                    className={`absolute top-0 bottom-0 left-0 z-40 w-12 bg-black/50 hover:bg-black/70 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${!isMoved ? "hidden" : "opacity-0 group-hover:opacity-100"}`}
                    onClick={() => handleClick("left")}
                >
                    <ChevronLeft className="w-8 h-8 text-white" />
                </div>

                <div
                    ref={rowRef}
                    className="flex items-center gap-2 md:gap-4 overflow-x-scroll scrollbar-hide py-24 px-4 md:px-0"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {items.map((item, i) => (
                        <MovieCard key={i} title={item.title} image={item.image || null} match={item.match} tags={item.tags} />
                    ))}
                </div>

                <div
                    className="absolute top-0 bottom-0 right-0 z-40 w-12 bg-black/50 hover:bg-black/70 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => handleClick("right")}
                >
                    <ChevronRight className="w-8 h-8 text-white" />
                </div>
            </div>
        </div>
    );
}

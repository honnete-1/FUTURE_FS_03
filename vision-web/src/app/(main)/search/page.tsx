"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { searchContent } from "@/services/cms";
import MovieCard from "@/components/home/MovieCard";

export default function SearchPage() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);

    useEffect(() => {
        if (query.length > 0) {
            const matches = searchContent(query);
            setResults(matches);
        } else {
            setResults([]);
        }
    }, [query]);

    return (
        <div className="min-h-screen pt-24 px-4 md:px-12 bg-[#0a0a0a]">
            {/* Search Input */}
            <div className="max-w-4xl mx-auto mb-12">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search for movies, TV shows..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full bg-[#1a1a1a] border border-white/10 rounded-full py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                        autoFocus
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
            </div>

            {/* Results Grid */}
            <div className="max-w-7xl mx-auto pb-24">
                {query.length > 0 && (
                    <h2 className="text-xl text-gray-400 mb-6">
                        Results for "{query}"
                    </h2>
                )}

                {results.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-4">
                        {results.map((item) => (
                            <MovieCard
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                match={item.match}
                                tags={item.tags}
                            />
                        ))}
                    </div>
                ) : query.length > 0 ? (
                    <div className="text-center text-gray-500 mt-12">
                        <p>No results found for "{query}"</p>
                    </div>
                ) : (
                    <div className="text-center text-gray-600 mt-24">
                        <Search className="w-16 h-16 mx-auto mb-4 opacity-20" />
                        <p>Start typing to search for movies and shows</p>
                    </div>
                )}
            </div>
        </div>
    );
}

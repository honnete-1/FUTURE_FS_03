"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import MovieCard from "@/components/home/MovieCard";

export default function SearchPage() {
    const [query, setQuery] = useState("");

    const allContent = [
        { title: "Cyberpunk: Edgerunners", match: 98, tags: ["Anime", "Sci-Fi"], image: "/cyberpunk.png" },
        { title: "Blade Runner 2049", match: 95, tags: ["Sci-Fi", "Thriller"] },
        { title: "The Matrix", match: 99, tags: ["Action", "Sci-Fi"] },
        { title: "Inception", match: 98, tags: ["Sci-Fi", "Mind-Bending"] },
        { title: "Interstellar", match: 97, tags: ["Sci-Fi", "Adventure"] },
        { title: "The Dark Knight", match: 99, tags: ["Action", "Crime"] },
    ];

    const results = allContent.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-24 px-4 md:px-8">
            <div className="max-w-4xl mx-auto mb-12">
                <div className="relative group">
                    <input
                        type="text"
                        placeholder="Search queries, genres, people..."
                        className="w-full bg-[#1a1a1a] border border-transparent focus:border-white/30 text-white text-xl px-12 py-4 rounded outline-none transition-all placeholder:text-gray-500"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        autoFocus
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                </div>
            </div>

            {query && (
                <div className="mb-8">
                    <h2 className="text-gray-400 mb-4">Top Results for "{query}"</h2>
                    {results.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {results.map((item, i) => (
                                <MovieCard key={i} title={item.title} image="" match={item.match} tags={item.tags} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-500 mt-12">
                            <p>Your search for "{query}" did not have any matches.</p>
                            <p className="mt-2">Suggestions:</p>
                            <ul className="list-disc list-inside mt-2 text-sm">
                                <li>Try different keywords</li>
                                <li>Looking for a movie or TV show?</li>
                                <li>Try using a movie title, actor, or director</li>
                            </ul>
                        </div>
                    )}
                </div>
            )}

            {!query && (
                <div className="text-center text-gray-600 mt-20">
                    Type to search for your favorite content.
                </div>
            )}
        </div>
    );
}

"use client";

import { useMyList } from "@/context/MyListContext";
import { getMediaById } from "@/services/cms";
import MovieCard from "@/components/home/MovieCard";

export default function MyListPage() {
    const { list } = useMyList();
    const savedMovies = list.map(id => getMediaById(id)).filter(item => item !== undefined);

    if (savedMovies.length === 0) {
        return (
            <div className="min-h-screen pt-24 px-12 text-center text-gray-400">
                <h1 className="text-3xl font-bold text-white mb-4">My List</h1>
                <p>You haven't added any titles to your list yet.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 px-4 md:px-12 bg-[#0a0a0a] pb-24">
            <h1 className="text-3xl font-bold text-white mb-8">My List</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-4">
                {savedMovies.map((item) => (
                    <MovieCard
                        key={item!.id}
                        id={item!.id}
                        title={item!.title}
                        image={item!.image}
                        match={item!.match}
                        tags={item!.tags}
                    />
                ))}
            </div>
        </div>
    );
}

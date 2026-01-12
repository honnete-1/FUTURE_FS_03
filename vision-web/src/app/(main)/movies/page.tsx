import ContentRow from "@/components/home/ContentRow";
import { fetchMoviesAndShows } from "@/services/db";

export const dynamic = "force-dynamic";

export default async function MoviesPage() {
    const allMedia = await fetchMoviesAndShows();
    const movies = allMedia.filter(m => m.type === "movie");
    const topRated = movies.filter(m => m.match > 90);

    return (
        <div className="min-h-screen bg-[#0a0a0a] pb-24">
            <div className="pt-24 px-4 md:px-12 mb-8">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Movies</h1>
                <p className="text-gray-400 mt-2">Blockbusters, indies, and everything in between.</p>
            </div>

            <div className="space-y-4">
                <ContentRow title="All Movies" items={movies} />
                <ContentRow title="Top Rated" items={topRated} />
            </div>
        </div>
    );
}

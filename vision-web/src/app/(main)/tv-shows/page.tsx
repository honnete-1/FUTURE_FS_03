import ContentRow from "@/components/home/ContentRow";
import { getTvShows, getTrendingContent } from "@/services/cms";

export default function TvShowsPage() {
    const tvShows = getTvShows();
    const trending = getTrendingContent().filter(i => i.type === "tv");

    return (
        <div className="min-h-screen bg-[#0a0a0a] pb-24">
            <div className="pt-24 px-4 md:px-12 mb-8">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">TV Shows</h1>
                <p className="text-gray-400 mt-2">Binge-worthy series chosen for you.</p>
            </div>

            <div className="space-y-4">
                <ContentRow title="All Series" items={tvShows} />
                <ContentRow title="Trending Series" items={trending} />
            </div>
        </div>
    );
}

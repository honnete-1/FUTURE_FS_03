import ContentRow from "@/components/home/ContentRow";
import { getTrendingContent, getTopRated } from "@/services/cms";

export default function NewPopularPage() {
    const trending = getTrendingContent();
    const top = getTopRated();

    return (
        <div className="min-h-screen bg-[#0a0a0a] pb-24">
            <div className="pt-24 px-4 md:px-12 mb-8">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">New & Popular</h1>
                <p className="text-gray-400 mt-2">See what everyone is talking about.</p>
            </div>

            <div className="space-y-4">
                <ContentRow title="New on Net Moviex" items={trending} />
                <ContentRow title="Top Rated" items={top} />
            </div>
        </div>
    );
}

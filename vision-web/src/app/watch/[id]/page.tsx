"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getMediaById, getTrendingContent } from "@/services/cms";
import ContentRow from "@/components/home/ContentRow";

export default function WatchPage() {
    const params = useParams();
    const { id } = params;
    const media = getMediaById(Number(id));

    // Simple recommendation algorithm: get trending content excluding current item
    const recommendations = getTrendingContent().filter(item => item.id !== Number(id));

    // Fallback if media not found or no video URL
    const videoUrl = media?.videoUrl || "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

    if (!media) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Content Not Found</h1>
                    <Link href="/" className="text-blue-500 hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Navigation */}
            <nav className="absolute top-0 w-full z-50 p-6 flex items-center bg-gradient-to-b from-black/80 to-transparent">
                <Link href="/" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                    <ChevronLeft className="w-8 h-8" />
                    <span className="text-lg font-bold">Back to Browse</span>
                </Link>
            </nav>

            {/* Video Player Section */}
            <div className="w-full h-[60vh] md:h-[85vh] bg-black relative">
                {videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be") ? (
                    <iframe
                        src={`${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1&rel=0`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <video
                        className="w-full h-full object-contain"
                        controls
                        autoPlay
                        src={videoUrl}
                    >
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>

            {/* Movie Details Section */}
            <div className="px-6 md:px-12 py-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold">{media.title}</h1>

                        <div className="flex items-center gap-4 text-sm md:text-base text-gray-400">
                            <span className="text-green-500 font-bold">{media.match}% Match</span>
                            <span>2024</span>
                            <span className="border border-gray-600 px-2 rounded text-xs">HD</span>
                            <span>{media.type === 'movie' ? 'Movie' : 'TV Series'}</span>
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                            {media.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {media.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recommendations */}
                <div className="mt-16">
                    <ContentRow title="More Like This" items={recommendations} />
                </div>
            </div>
        </div>
    );
}

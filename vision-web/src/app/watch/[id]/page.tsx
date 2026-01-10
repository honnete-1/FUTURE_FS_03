"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getMediaById } from "@/services/cms";

export default function WatchPage() {
    const params = useParams();
    const { id } = params;
    const media = getMediaById(Number(id));

    // Fallback if media not found or no video URL
    const videoUrl = media?.videoUrl || "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

    return (
        <div className="bg-black fixed inset-0 z-[100] w-full h-full flex items-center justify-center">
            <Link href="/" className="absolute top-8 left-8 z-50 text-white flex items-center gap-2 hover:text-gray-300 transition-colors bg-black/50 p-2 rounded-full backdrop-blur-sm">
                <ChevronLeft className="w-8 h-8" /> <span className="text-lg font-bold pr-2">Back</span>
            </Link>

            <div className="w-full h-full">
                {videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be") ? (
                    <iframe
                        src={videoUrl}
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
        </div>
    );
}

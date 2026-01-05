"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function WatchPage() {
    const params = useParams();
    const { id } = params;

    return (
        <div className="bg-black h-screen w-full flex items-center justify-center relative">
            <Link href="/" className="absolute top-8 left-8 z-50 text-white flex items-center gap-2 hover:text-gray-300 transition-colors">
                <ChevronLeft className="w-8 h-8" /> <span className="text-lg font-bold">Back to Net Moviex</span>
            </Link>

            <div className="w-full h-full relative">
                {/* In a real app, this would be a video player component */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin mb-8"></div>
                    <h2 className="text-2xl font-bold mb-2">Simulating Video Playback</h2>
                    <p className="text-gray-400">Playing content ID: {id}</p>
                </div>

                {/* Simulate video UI controls */}
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                    <div className="w-full h-1 bg-gray-600 rounded-full mb-4">
                        <div className="w-1/3 h-full bg-red-600 rounded-full relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full shadow-lg"></div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                            <button className="text-white hover:text-gray-300">Play/Pause</button>
                            <button className="text-white hover:text-gray-300">Volume</button>
                        </div>
                        <div className="text-gray-300 text-sm">
                            12:34 / 45:00
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

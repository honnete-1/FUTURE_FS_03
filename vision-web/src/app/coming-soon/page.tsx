import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function ComingSoonPage() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Gradient/Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black pointer-events-none"></div>

            <div className="relative z-10 text-center max-w-lg">
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6 tracking-tighter">
                    Vision
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                    Coming Soon
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                    We're building the future of streaming. This feature is currently under development and will be available shortly.
                </p>

                <div className="flex justify-center">
                    <Link
                        href="/"
                        className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 transition-colors px-6 py-3 rounded font-medium"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        Back to Home
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-8 text-gray-600 text-sm">
                © 2024 Vision Entertainment
            </div>
        </div>
    );
}

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContentRow from "@/components/home/ContentRow";

export default function MyVision() {
    const myList = [
        { title: "Cyberpunk: Edgerunners", match: 98, tags: ["Anime", "Sci-Fi"] },
        { title: "The Matrix", match: 99, tags: ["Action", "Sci-Fi"] },
        { title: "Inception", match: 98, tags: ["Sci-Fi", "Mind-Bending"] },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-24 text-white">
            <div className="container mx-auto px-4 md:px-8">
                <h1 className="text-4xl font-bold mb-8">My Vision</h1>
                <div className="mb-12">
                    <h2 className="text-xl text-gray-400 mb-4">Continue Watching for You</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* Simulated 'Continue Watching' cards - reusing structure or new component */}
                        <div className="aspect-video bg-gray-800 rounded-lg relative overflow-hidden group cursor-pointer border border-white/10">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500">Episode 4: Glitch</div>
                            <div className="absolute bottom-0 left-0 h-1 bg-red-600 w-2/3"></div>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="bg-white rounded-full p-3"><div className="border-l-8 border-transparent border-t-4 border-b-4 border-l-black ml-1"></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <ContentRow title="My List" items={myList} />
            </div>
        </div>
    );
}

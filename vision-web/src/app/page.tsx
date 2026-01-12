import HeroCarousel from "@/components/home/HeroCarousel";
import ContentRow from "@/components/home/ContentRow";
import { fetchMoviesAndShows } from "@/services/db";

export default async function Home() {
  const allMedia = await fetchMoviesAndShows();

  // Basic filtering for rows
  const trendingNow = allMedia.slice(0, 10);
  const topRated = allMedia.filter(m => m.match > 95);
  const newReleases = allMedia.filter(m => m.id > 15); // Example filter

  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-24">
      <HeroCarousel />
      <div className="relative z-20 mt-4 pl-0 md:pl-0 space-y-4">
        {allMedia.length > 0 ? (
          <>
            <ContentRow title="Trending Now on Net Moviex" items={trendingNow} />
            <ContentRow title="Top Rated for You" items={topRated} />
            <ContentRow title="New Releases" items={newReleases} />
            <ContentRow title="Watch It Again" items={topRated.reverse()} />
          </>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p>No movies found. Please check your connection or seed the database.</p>
          </div>
        )}
      </div>
    </div>
  );
}

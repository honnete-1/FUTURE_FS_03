import HeroCarousel from "@/components/home/HeroCarousel";
import ContentRow from "@/components/home/ContentRow";
import { getTrendingContent, getTopRated } from "@/services/cms";

export default function Home() {
  const trendingNow = getTrendingContent();
  const topRated = getTopRated();

  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-24">
      <HeroCarousel />
      <div className="relative z-20 -mt-32 md:-mt-48 pl-0 md:pl-0 space-y-4">
        <ContentRow title="Trending Now on Net Moviex" items={trendingNow} />
        <ContentRow title="Top Rated for You" items={topRated} />
        <ContentRow title="New Releases" items={trendingNow} />
        <ContentRow title="Watch It Again" items={topRated} />
      </div>
    </div>
  );
}

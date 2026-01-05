export interface MediaItem {
    id: number;
    title: string;
    image: string | null;
    tags: string[];
    match: number;
    description: string;
    type: "movie" | "tv";
}

const mockData: MediaItem[] = [
    {
        id: 1,
        title: "Cyberpunk: Edgerunners",
        image: "/cyberpunk_poster.png",
        tags: ["Anime", "Sci-Fi"],
        match: 98,
        description: "A street kid tries to survive in a technology and body modification-obsessed city of the future.",
        type: "tv"
    },
    {
        id: 2,
        title: "The Matrix",
        image: "/matrix_poster.png",
        tags: ["Action", "Sci-Fi"],
        match: 99,
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        type: "movie"
    },
    {
        id: 3,
        title: "Inception",
        image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
        tags: ["Sci-Fi", "Mind-Bending"],
        match: 98,
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        type: "movie"
    },
    {
        id: 4,
        title: "Blade Runner 2049",
        image: "https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png",
        tags: ["Sci-Fi", "Thriller"],
        match: 95,
        description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
        type: "movie"
    },
    {
        id: 5,
        title: "Neon Genesis: Awakening",
        image: "/neon_genesis.png",
        tags: ["Action", "Mecha"],
        match: 99,
        description: "A teenage boy finds himself recruited as a member of an elite team of pilots by his father.",
        type: "tv"
    },
    {
        id: 6,
        title: "Interstellar",
        image: "/interstellar_poster.png",
        tags: ["Sci-Fi", "Adventure"],
        match: 97,
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        type: "movie"
    },
    {
        id: 7,
        title: "The Dark Knight",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
        tags: ["Action", "Crime"],
        match: 99,
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        type: "movie"
    }
];

export const getTrendingContent = () => {
    return mockData.slice(0, 4);
}

export const getTopRated = () => {
    return mockData.filter(item => item.match > 95);
}

export const getMovies = () => {
    return mockData.filter(item => item.type === "movie");
}

export const getTvShows = () => {
    return mockData.filter(item => item.type === "tv");
}

export const searchContent = (query: string) => {
    return mockData.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
}

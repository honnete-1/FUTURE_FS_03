export interface MediaItem {
    id: number;
    title: string;
    image: string | null;
    tags: string[];
    match: number;
    description: string;
    type: "movie" | "tv";
    videoUrl?: string; // Optional for now, but populated in mock data
}

export const mockData: MediaItem[] = [
    // Trending / Featured
    {
        id: 1,
        title: "Cyberpunk: Edgerunners",
        image: "https://upload.wikimedia.org/wikipedia/en/2/23/Cyberpunk_Edgerunners_poster.jpg",
        tags: ["Anime", "Sci-Fi", "Dystopian"],
        match: 99,
        description: "A street kid tries to survive in a technology and body modification-obsessed city of the future. With everything to lose, he chooses to stay alive by becoming an edgerunner—a mercenary outlaw also known as a cyberpunk.",
        type: "tv",
        videoUrl: "https://www.youtube.com/embed/JtqIas3bYhg?autoplay=1"
    },
    {
        id: 2,
        title: "Dune: Part Two",
        image: "https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        tags: ["Sci-Fi", "Adventure", "Epic"],
        match: 99,
        description: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.",
        type: "movie",
        videoUrl: "https://www.youtube.com/embed/Way9Dexny3w?autoplay=1"
    },
    {
        id: 3,
        title: "The Batman",
        image: "https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg",
        tags: ["Action", "Crime", "Noir"],
        match: 97,
        description: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
        type: "movie",
        videoUrl: "https://www.youtube.com/embed/mqqft2x_Aa4?autoplay=1"
    },
    {
        id: 4,
        title: "Arcane",
        image: "https://image.tmdb.org/t/p/original/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
        tags: ["Animation", "Fantasy", "Steampunk"],
        match: 98,
        description: "Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.",
        type: "tv",
        videoUrl: "https://www.youtube.com/embed/fXmAurh012s?autoplay=1"
    },

    // Top Rated
    {
        id: 5,
        title: "Interstellar",
        image: "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        tags: ["Sci-Fi", "Adventure", "Space"],
        match: 98,
        description: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        type: "movie",
        videoUrl: "https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1"
    },
    {
        id: 6,
        title: "Breaking Bad",
        image: "https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
        tags: ["Crime", "Drama", "Thriller"],
        match: 99,
        description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        type: "tv",
        videoUrl: "https://www.youtube.com/embed/HhesaQXLuRY?autoplay=1"
    },
    {
        id: 7,
        title: "Spider-Man: Across the Spider-Verse",
        image: "https://image.tmdb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        tags: ["Animation", "Action", "Superhero"],
        match: 98,
        description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
        type: "movie",
        videoUrl: "https://www.youtube.com/embed/cqGjhVJWtEg?autoplay=1"
    },
    {
        id: 8,
        title: "The Dark Knight",
        image: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        tags: ["Action", "Crime", "Thriller"],
        match: 99,
        description: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
        type: "movie",
        videoUrl: "https://www.youtube.com/embed/EXeTwQWrcwY?autoplay=1"
    },

    // Sci-Fi & Action
    {
        id: 9,
        title: "Inception",
        image: "https://image.tmdb.org/t/p/original/9gk7admal4zl2mFOt21cdWNbI4l.jpg",
        tags: ["Sci-Fi", "Thriller", "Action"],
        match: 96,
        description: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
        type: "movie",
        videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0?autoplay=1"
    },
    {
        id: 10,
        title: "Blade Runner 2049",
        image: "https://image.tmdb.org/t/p/original/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
        tags: ["Sci-Fi", "Thriller", "Noir"],
        match: 95,
        description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
        type: "movie",
        videoUrl: "https://www.youtube.com/embed/gCcx85zbxz4?autoplay=1"
    },
    {
        id: 11,
        title: "The Matrix",
        image: "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        tags: ["Sci-Fi", "Action", "Classic"],
        match: 98,
        description: "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
        type: "movie",
        videoUrl: "https://www.youtube.com/embed/vKQi3bBA1y8?autoplay=1"
    },
    {
        id: 12,
        title: "Stranger Things",
        image: "https://image.tmdb.org/t/p/original/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
        tags: ["Horror", "Sci-Fi", "Mystery"],
        match: 97,
        description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
        type: "tv",
        videoUrl: "https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1"
    },

    // More Variety
    {
        id: 13,
        title: "Black Mirror",
        image: "https://image.tmdb.org/t/p/original/78m2tX5n2rVE2Yl6Oac93rK0Zd.jpg",
        tags: ["Sci-Fi", "Thriller", "Anthology"],
        match: 95,
        description: "A contemporary British re-working of The Twilight Zone with stories that tap into the collective unease about our modern world.",
        type: "tv",
        videoUrl: "https://www.youtube.com/embed/5jY1ecibLYo?autoplay=1"
    },
    {
        id: 14,
        title: "Oppenheimer",
        image: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        tags: ["Drama", "History", "Biopic"],
        match: 98,
        description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
        type: "movie",
        videoUrl: "https://www.youtube.com/embed/uYPbbksJxIg?autoplay=1"
    },
    {
        id: 15,
        title: "Tron: Legacy",
        image: "https://image.tmdb.org/t/p/original/23AgW73rI3L3hDqZl19j8w2T3k.jpg",
        tags: ["Sci-Fi", "Action", "Adventure"],
        match: 92,
        description: "The son of a virtual world designer goes looking for his father and ends up inside the digital world that his father designed. He meets his father's corrupted creation and a unique ally who was born inside the digital world.",
        type: "movie",
        videoUrl: "https://www.youtube.com/embed/L9szn1QQfas?autoplay=1"
    },
    {
        id: 16,
        title: "Godzilla Minus One",
        image: "https://image.tmdb.org/t/p/original/hkxxMIGaiCTmrEArK7J9HpZoomk.jpg",
        tags: ["Sci-Fi", "Horror", "Action"],
        match: 96,
        description: "Postwar Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.",
        type: "movie",
        videoUrl: "https://www.youtube.com/embed/r7DqccP1Q_4?autoplay=1"
    },
    {
        id: 17,
        title: "The Last of Us",
        image: "https://image.tmdb.org/t/p/original/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
        tags: ["Drama", "Sci-Fi", "Survival"],
        match: 98,
        description: "Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the U.S. and depend on each other for survival.",
        type: "tv",
        videoUrl: "https://www.youtube.com/embed/uLtkt8BonwM?autoplay=1"
    },
    {
        id: 18,
        title: "Severance",
        image: "https://image.tmdb.org/t/p/original/l60zW8yXvWp4F6G1yXk5kXQk9.jpg",
        tags: ["Thriller", "Drama", "Sci-Fi"],
        match: 97,
        description: "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.",
        type: "tv",
        videoUrl: "https://www.youtube.com/embed/xHi6xXCPrD0?autoplay=1"
    },
    {
        id: 19,
        title: "Everything Everywhere All At Once",
        image: "https://image.tmdb.org/t/p/original/w3LxiVYdWWRvEVBA5Y11WdbLB2.jpg",
        tags: ["Action", "Adventure", "Sci-Fi"],
        match: 99,
        description: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.",
        type: "movie",
        videoUrl: "https://www.youtube.com/embed/wxN1T1uxQ2g?autoplay=1"
    },
    {
        id: 20,
        title: "Guardians of the Galaxy Vol. 3",
        image: "https://image.tmdb.org/t/p/original/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
        tags: ["Action", "Adventure", "Sci-Fi"],
        match: 95,
        description: "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
        type: "movie",
        videoUrl: "https://www.youtube.com/embed/u3V5KDHRQvk?autoplay=1"
    },
    {
        id: 21,
        title: "Andor",
        image: "https://image.tmdb.org/t/p/original/5IQSpK6g30W6iNn3I8k31k8.jpg",
        tags: ["Sci-Fi", "Action", "Drama"],
        match: 96,
        description: "The prequel to Rogue One. In an era filled with danger, deception and intrigue, Cassian will embark on the path that is destined to turn him into a Rebel Hero.",
        type: "tv",
        videoUrl: "https://www.youtube.com/embed/cKOegEuCcfw?autoplay=1"
    },
    {
        id: 22,
        title: "Top Gun: Maverick",
        image: "https://image.tmdb.org/t/p/original/62HCnUTziyWcpDaBO2i1DX17dbH.jpg",
        tags: ["Action", "Drama"],
        match: 94,
        description: "After more than thirty years of service as one of the Navy's top aviators, and dodging the advancement in rank that would ground him, Pete \"Maverick\" Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
        type: "movie",
        videoUrl: "https://www.youtube.com/embed/giXco2jaZ_4?autoplay=1"
    },
    {
        id: 23,
        title: "Deadpool & Wolverine",
        // Replaced broken one with a stable alternative or placeholder if unavailable
        image: "https://image.tmdb.org/t/p/original/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        tags: ["Action", "Comedy", "Superhero"],
        match: 97,
        description: "Deadpool offers Wolverine a place in the MCU, but the two heroes must first team up to defeat a common enemy.",
        type: "movie",
        videoUrl: "https://www.youtube.com/embed/73_1biulkYk?autoplay=1"
    },
    {
        id: 24,
        title: "Fallout",
        // Replaced broken link with a new valid one
        image: "https://image.tmdb.org/t/p/original/s7SE516D6x1z9k3y6y8d8x6x5x5.jpg",
        tags: ["Sci-Fi", "Action", "Post-Apocalyptic"],
        match: 95,
        description: "In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits.",
        type: "tv",
        videoUrl: "https://www.youtube.com/embed/V-mugKDQDlg?autoplay=1"
    }
];

export const getTrendingContent = () => {
    return mockData.slice(0, 8);
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

export const getMediaById = (id: number) => {
    return mockData.find(item => item.id === id);
}

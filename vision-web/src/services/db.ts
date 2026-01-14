import { db } from "@/lib/firebase";
import { collection, getDocs, doc, setDoc, query, where, writeBatch } from "firebase/firestore";
import { MediaItem, mockData } from "./cms"; // Import type and mockData

export const fetchMoviesAndShows = async (): Promise<MediaItem[]> => {
    try {
        if (!db) {
            console.warn("DB not initialized, returning mock data backup.");
            return mockData;
        }
        const querySnapshot = await getDocs(collection(db, "media"));
        const data: MediaItem[] = [];
        querySnapshot.forEach((doc: any) => {
            data.push(doc.data() as MediaItem);
        });

        if (data.length === 0) {
            console.warn("DB is empty, returning mock data backup.");
            return mockData;
        }

        return data;
    } catch (error) {
        console.error("Error fetching media, falling back to mock data:", error);
        return mockData;
    }
};

export const seedDatabase = async (data: MediaItem[]) => {
    try {
        if (!db) throw new Error("Database not initialized (Missing Keys?)");

        const batch = writeBatch(db);

        const currentDb = db;

        data.forEach((item) => {
            const docRef = doc(currentDb, "media", item.id.toString());
            batch.set(docRef, item);
        });

        await batch.commit();
        console.log("Database seeded successfully!");
    } catch (error) {
        console.error("Error seeding database:", error);
        throw error; // Re-throw to catch in UI
    }
};

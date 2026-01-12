import { db } from "@/lib/firebase";
import { collection, getDocs, doc, setDoc, query, where, writeBatch } from "firebase/firestore";
import { MediaItem } from "./cms"; // Import type

export const fetchMoviesAndShows = async (): Promise<MediaItem[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, "media"));
        const data: MediaItem[] = [];
        querySnapshot.forEach((doc: any) => {
            data.push(doc.data() as MediaItem);
        });
        return data;
    } catch (error) {
        console.error("Error fetching media:", error);
        return [];
    }
};

export const seedDatabase = async (data: MediaItem[]) => {
    try {
        const batch = writeBatch(db);

        data.forEach((item) => {
            const docRef = doc(db, "media", item.id.toString());
            batch.set(docRef, item);
        });

        await batch.commit();
        console.log("Database seeded successfully!");
    } catch (error) {
        console.error("Error seeding database:", error);
        throw error; // Re-throw to catch in UI
    }
};

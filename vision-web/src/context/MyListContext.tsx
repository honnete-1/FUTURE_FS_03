"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

// Define the shape of the context state
interface MyListContextType {
    list: number[];
    addToList: (id: number) => void;
    removeFromList: (id: number) => void;
    isInList: (id: number) => boolean;
}

const MyListContext = createContext<MyListContextType | undefined>(undefined);

export function MyListProvider({ children }: { children: ReactNode }) {
    const [list, setList] = useState<number[]>([]);
    const { user } = useAuth(); // Auth context availability to be confirmed in next step

    // Load list from local storage OR Firestore when user changes
    useEffect(() => {
        const loadList = async () => {
            if (user) {
                // Load from Firestore
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setList(docSnap.data().myList || []);
                } else {
                    // Create user doc if not exists
                    await setDoc(docRef, { myList: [] }, { merge: true });
                    setList([]); // Initialize local state if doc was just created
                }
            } else {
                // Fallback to local storage for guests
                const saved = localStorage.getItem("myList");
                if (saved) {
                    setList(JSON.parse(saved));
                } else {
                    setList([]); // Clear list if no user and no local storage data
                }
            }
        };

        loadList();
    }, [user]);

    const addToList = async (id: number) => {
        const newList = [...list, id];
        setList(newList);

        if (user) {
            const docRef = doc(db, "users", user.uid);
            await updateDoc(docRef, {
                myList: arrayUnion(id)
            });
        }
        localStorage.setItem("myList", JSON.stringify(newList));
    };

    const removeFromList = async (id: number) => {
        const newList = list.filter((item) => item !== id);
        setList(newList);

        if (user) {
            const docRef = doc(db, "users", user.uid);
            await updateDoc(docRef, {
                myList: arrayRemove(id)
            });
        }
        localStorage.setItem("myList", JSON.stringify(newList));
    };

    const isInList = (id: number) => list.includes(id);

    return (
        <MyListContext.Provider value={{ list, addToList, removeFromList, isInList }}>
            {children}
        </MyListContext.Provider>
    );
}

export function useMyList() {
    const context = useContext(MyListContext);
    if (context === undefined) {
        throw new Error("useMyList must be used within a MyListProvider");
    }
    return context;
}

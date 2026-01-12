"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface MyListContextType {
    list: number[];
    addToList: (id: number) => void;
    removeFromList: (id: number) => void;
    isInList: (id: number) => boolean;
}

const MyListContext = createContext<MyListContextType | undefined>(undefined);

export function MyListProvider({ children }: { children: ReactNode }) {
    const [list, setList] = useState<number[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem("myList");
        if (saved) {
            setList(JSON.parse(saved));
        }
    }, []);

    const addToList = (id: number) => {
        setList((prev) => {
            const newList = [...prev, id];
            localStorage.setItem("myList", JSON.stringify(newList));
            return newList;
        });
    };

    const removeFromList = (id: number) => {
        setList((prev) => {
            const newList = prev.filter((item) => item !== id);
            localStorage.setItem("myList", JSON.stringify(newList));
            return newList;
        });
    };

    const isInList = (id: number) => {
        return list.includes(id);
    };

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

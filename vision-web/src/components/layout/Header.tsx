"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Bell, Menu } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg border-b border-white/5" : "bg-gradient-to-b from-black/80 to-transparent"
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/">
                        <div className="relative w-32 h-10">
                            <Image src="/logo.png" alt="Net Moviex" fill className="object-contain" priority />
                        </div>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
                        <Link href="/" className="hover:text-white transition-colors">
                            Home
                        </Link>
                        <Link href="/tv-shows" className="hover:text-white transition-colors">
                            TV Shows
                        </Link>
                        <Link href="/movies" className="hover:text-white transition-colors">
                            Movies
                        </Link>
                        <Link href="/new-popular" className="hover:text-white transition-colors">
                            New & Popular
                        </Link>
                        <Link href="/my-list" className="hover:text-white transition-colors">
                            My List
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-6 text-gray-300">
                    <Link href="/search" className="hover:text-white transition-colors">
                        <Search className="w-5 h-5" />
                    </Link>
                    <Link href="/notifications" className="hover:text-white transition-colors relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full border border-black"></span>
                    </Link>

                    {/* User Menu / Login */}
                    <Link href="/login" className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs ring-2 ring-transparent group-hover:ring-white transition-all overflow-hidden">
                            <Image src="https://placehold.co/100x100/png?text=US" alt="User" width={32} height={32} />
                        </div>
                    </Link>

                    <button className="md:hidden hover:text-white transition-colors">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black/90 text-gray-400 py-12 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors"><Facebook className="w-6 h-6" /></a>
                        <a href="#" className="hover:text-white transition-colors"><Instagram className="w-6 h-6" /></a>
                        <a href="#" className="hover:text-white transition-colors"><Twitter className="w-6 h-6" /></a>
                        <a href="#" className="hover:text-white transition-colors"><Youtube className="w-6 h-6" /></a>
                    </div>
                    <div className="text-3xl font-bold tracking-tighter opacity-50">
                        <span className="text-gradient">VISION</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                    <div className="flex flex-col gap-3">
                        <Link href="#" className="hover:underline">Audio Description</Link>
                        <Link href="#" className="hover:underline">Investor Relations</Link>
                        <Link href="#" className="hover:underline">Legal Notices</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Link href="#" className="hover:underline">Help Center</Link>
                        <Link href="#" className="hover:underline">Jobs</Link>
                        <Link href="#" className="hover:underline">Cookie Preferences</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Link href="#" className="hover:underline">Gift Cards</Link>
                        <Link href="#" className="hover:underline">Terms of Use</Link>
                        <Link href="#" className="hover:underline">Corporate Information</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Link href="#" className="hover:underline">Media Center</Link>
                        <Link href="#" className="hover:underline">Privacy</Link>
                        <Link href="#" className="hover:underline">Contact Us</Link>
                    </div>
                </div>

                <div className="mt-12 text-xs text-gray-500">
                    © 2024 Vision Entertainment, Inc.
                </div>
            </div>
        </footer>
    );
}

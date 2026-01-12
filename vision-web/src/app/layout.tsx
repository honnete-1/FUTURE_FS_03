import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Net Moviex",
    default: "Net Moviex - Watch Movies & TV Shows",
  },
  description: "Stream the latest movies and TV shows on Net Moviex. Your premium entertainment destination.",
  openGraph: {
    title: "Net Moviex",
    description: "Stream unlimited movies and TV shows.",
    url: "https://net-moviex.vercel.app",
    siteName: "Net Moviex",
    images: [
      {
        url: "/logo.png", // Ensure this exists or use a generic one
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { MyListProvider } from "@/context/MyListContext";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        <AuthProvider>
          <MyListProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </MyListProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

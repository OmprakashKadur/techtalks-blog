import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Talks with Omee – Exploring the Future of Technology",
  description: "A modern, futuristic, and interactive blog about emerging technologies such as React, Next.js, Artificial Intelligence, Cloud Computing, Blockchain, and Developer Tools.",
  keywords: ["React", "Next.js", "AI", "Cloud Computing", "Blockchain", "Developer Tools", "Technology", "Blog"],
  authors: [{ name: "Omee" }],
  creator: "Omee",
  openGraph: {
    title: "Tech Talks with Omee – Exploring the Future of Technology",
    description: "Decode. Build. Evolve. With Omee.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}

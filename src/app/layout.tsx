import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { AuthProvider } from "@/contexts/AuthContext";
import { EnvironmentCheck } from "@/components/EnvironmentCheck";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
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
  metadataBase: new URL('https://techtalks-blog.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tech Talks with Omee – Exploring the Future of Technology",
    description: "Decode. Build. Evolve. With Omee.",
    type: "website",
    locale: "en_US",
    siteName: "Tech Talks with Omee",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Talks with Omee – Exploring the Future of Technology",
    description: "Decode. Build. Evolve. With Omee.",
    creator: "@omee",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
        <AuthProvider>
          <Navigation />
          <div className="pt-16">
            {children}
          </div>
          <EnvironmentCheck />
          <PerformanceMonitor />
        </AuthProvider>
      </body>
    </html>
  );
}

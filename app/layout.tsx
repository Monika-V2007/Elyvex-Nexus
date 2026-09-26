import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { defaultSEO } from "@/config/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(defaultSEO.openGraph.url),
  title: {
    default: defaultSEO.title,
    template: "%s | Elyvex Nexus",
  },
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
  authors: defaultSEO.authors,
  creator: defaultSEO.creator,
  publisher: defaultSEO.publisher,
  robots: defaultSEO.robots,
  openGraph: defaultSEO.openGraph,
  twitter: defaultSEO.twitter,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 dark:bg-[#050814] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-sans antialiased selection:bg-sky-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

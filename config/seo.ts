import { siteConfig } from "./site";

export const defaultSEO = {
  title: `${siteConfig.name} | Empowering Skills. Building Futures.`,
  description: siteConfig.description,
  keywords: [
    "Elyvex Nexus",
    "Practical Learning",
    "EdTech India",
    "Full Stack Web Development",
    "Python Programming",
    "Coding Project Lab",
    "Technical Certificates",
    "Student Upskilling",
    "Software Engineering",
  ],
  authors: [{ name: "Elyvex Nexus Team", url: siteConfig.url }],
  creator: "Elyvex Nexus",
  publisher: "Elyvex Nexus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} | Empowering Skills. Building Futures.`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Empowering Skills. Building Futures.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Empowering Skills. Building Futures.`,
    description: siteConfig.description,
    creator: "@elyvexnexus",
    images: [`${siteConfig.url}/images/og-default.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};

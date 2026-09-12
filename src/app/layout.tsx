import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import ExperienceShell from "@/components/experience/ExperienceShell";
import { HERO_MEDIA } from "@/lib/images";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zalina Luxury Bubble Tents | Manufactured in Egypt for Resorts",
  description:
    "Premium bubble hotel units manufactured in Egypt for resorts, glamping camps, eco lodges, and hospitality developers.",
  keywords: [
    "bubble tents",
    "luxury glamping",
    "bubble hotel",
    "eco resort",
    "glamping domes",
    "transparent tents",
    "resort accommodation",
    "Egypt manufacturer",
    "hospitality solutions",
    "eco lodges",
  ],
  authors: [{ name: "Zalina Luxury" }],
  creator: "Zalina Luxury",
  publisher: "Zalina Luxury",
  metadataBase: new URL("https://zalinaluxury.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Zalina Luxury Bubble Tents | Manufactured in Egypt for Resorts",
    description:
      "Premium bubble hotel units manufactured in Egypt for resorts, glamping camps, eco lodges, and hospitality developers.",
    siteName: "Zalina Luxury",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Zalina Luxury Bubble Tents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zalina Luxury Bubble Tents | Manufactured in Egypt for Resorts",
    description:
      "Premium bubble hotel units manufactured in Egypt for resorts, glamping camps, eco lodges, and hospitality developers.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href={HERO_MEDIA.DESKTOP_POSTER}
          type="image/webp"
          media="(min-width: 769px)"
        />
        <link
          rel="preload"
          as="image"
          href={HERO_MEDIA.MOBILE_POSTER}
          type="image/webp"
          media="(max-width: 768px)"
        />
      </head>
      <body className="min-h-screen antialiased">
        <ExperienceShell>{children}</ExperienceShell>
      </body>
    </html>
  );
}

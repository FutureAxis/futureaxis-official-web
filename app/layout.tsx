// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import Analytics from "@/components/SEO/Analytics";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-body",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://futureaxisdigital.com"),
    title: {
        default: "Future Axis Digital | Web Development & Digital Solutions",
        template: "%s | Future Axis Digital"
    },
    description: "Future Axis Digital delivers custom web development, social media marketing, and IT consulting solutions that drive real business growth. Transform your digital presence today.",
    keywords: ["web development", "digital marketing", "IT consulting", "social media marketing", "web design", "digital solutions", "business growth", "custom development", "SEO services", "cloud solutions"],
    authors: [{ name: "Future Axis Digital", url: "https://futureaxisdigital.com" }],
    creator: "Future Axis Digital",
    publisher: "Future Axis Digital",
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
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://futureaxisdigital.com",
        siteName: "Future Axis Digital",
        title: "Future Axis Digital | Web Development & Digital Solutions",
        description: "Transform your business with custom web development, social media marketing, and IT consulting services.",
        images: [{
            url: "/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Future Axis Digital - Digital Solutions for Business Growth",
        }],
        emails: ["info@futureaxisdigital.com"],
        phoneNumbers: ["+61411749417"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Future Axis Digital | Digital Solutions",
        description: "Transform your business with our web development, marketing, and IT consulting services.",
        images: ["/twitter-image.jpg"],
        creator: "@futureaxisdigital",
        site: "@futureaxisdigital",
    },
    alternates: {
        canonical: "https://futureaxisdigital.com",
    },
    verification: {
        google: "your-google-verification-code", // Add your actual code after verification
    },
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/site.webmanifest",
    applicationName: "Future Axis Digital",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} h-full antialiased`}>
        <head>
            {/* Theme Color */}
            <meta name="theme-color" content="#7C3AED" />

            {/* Geo Tags for Local SEO */}
            <meta name="geo.region" content="AU-VIC" />
            <meta name="geo.placename" content="Clayton" />

            {/* Mobile Optimization */}
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        </head>
        <body className="min-h-full flex flex-col font-sans" style={{ fontFamily: "var(--font-body)" }}>
        <JsonLd />
        <Analytics />
        <Navbar />
        <main className="flex-1">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-body",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Future Axis | Web Development & Digital Solutions",
        template: "%s | Future Axis"
    },
    description: "Future Axis delivers custom web development, social media marketing, and IT consulting solutions that drive real business growth.",
    keywords: ["web development", "digital marketing", "IT consulting", "social media marketing", "web design"],
    authors: [{ name: "Future Axis" }],
    creator: "Future Axis",
    publisher: "Future Axis",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Future Axis | Web Development & Digital Solutions",
        description: "Transform your business with custom web development, social media marketing, and IT consulting services.",
        siteName: "Future Axis",
        images: [{
            url: "/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Future Axis",
        }],
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} h-full antialiased`}>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className="min-h-full flex flex-col font-sans" style={{fontFamily: "var(--font-body)"}}>
        <Navbar />
        <main className="flex-1">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}
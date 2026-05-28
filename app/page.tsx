import Image from "next/image";
import HeroSection from "@/components/sections/Home/Hero";
import AboutSection from "@/components/sections/Home/About";
import backgroundImage from "@/public/images/home/background-bg.png";
import ProcessSection from "@/components/sections/Home/OurProcess";
import ServicesSection from "@/components/sections/Home/Services";
import CTASection from "@/components/sections/Home/CTASection";

// Add metadata for SEO
export const metadata = {
    title: "Future Axis Digital | Web Development & Digital Solutions Agency",
    description: "Future Axis Digital delivers custom web development, social media marketing, and IT consulting solutions in Melbourne, Australia. Transform your business with our expert digital services.",
    keywords: "web development agency Melbourne, digital marketing services, IT consulting Australia, web design, social media marketing, digital solutions",
    alternates: {
        canonical: "https://futureaxisdigital.com",
    },
    openGraph: {
        title: "Future Axis Digital | Transform Your Business with Digital Solutions",
        description: "Expert web development, social media marketing, and IT consulting services to scale your business faster.",
        url: "https://futureaxisdigital.com",
        siteName: "Future Axis Digital",
        images: [
            {
                url: "/og-image-home.jpg",
                width: 1200,
                height: 630,
                alt: "Future Axis Digital - Web Development & Digital Solutions",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Future Axis Digital | Digital Solutions Agency",
        description: "Custom web development, marketing, and IT consulting services.",
        images: ["/twitter-image-home.jpg"],
    },
};

export default function Home() {
    return (
        <main className="relative min-h-screen">
            <HeroSection />

            <div className="relative">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={backgroundImage}
                        alt="Background"
                        fill
                        className="object-cover object-center"
                        quality={100}
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="relative z-10">
                    <AboutSection />
                    <ServicesSection />
                    <ProcessSection />
                    <CTASection />
                </div>
            </div>
        </main>
    );
}
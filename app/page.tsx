import Image from "next/image";
import HeroSection from "@/components/sections/Home/Hero";
import AboutSection from "@/components/sections/Home/About";
const backgroundImage = "https://res.cloudinary.com/denec4g4s/image/upload/v1781546613/future_axis/home/background-bg_gzcf4u.png";
import ProcessSection from "@/components/sections/Home/OurProcess";
import ServicesSection from "@/components/sections/Home/Services";
import CTASection from "@/components/sections/Home/CTASection";

// Add metadata for SEO
export const metadata = {
    title: "Future Axis | Web Development & Digital Solutions Agency",
    description: "Future Axis delivers custom web development, social media marketing, and IT consulting solutions in Melbourne, Australia. Transform your business with our expert digital services.",
    keywords: "web development agency Melbourne, digital marketing services, IT consulting Australia, web design, social media marketing, digital solutions",
    openGraph: {
        title: "Future Axis | Transform Your Business with Digital Solutions",
        description: "Expert web development, social media marketing, and IT consulting services to scale your business faster.",
        siteName: "Future Axis",
        images: [
            {
                url: "/og-image-home.jpg",
                width: 1200,
                height: 630,
                alt: "Future Axis - Web Development & Digital Solutions",
            },
        ],
        type: "website",
    },
};

export default function Home() {
    return (
        <div className="relative min-h-screen">
            <HeroSection />

            <div className="relative">
                <div className="absolute inset-0 z-0 pointer-events-none">
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
        </div>
    );
}
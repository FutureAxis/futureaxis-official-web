"use client";

import Image from "next/image";
import HeroSection from "@/components/sections/Home/Hero";
import AboutSection from "@/components/sections/Home/About";
import backgroundImage from "@/public/images/home/background-image.png";
import ProcessSection from "@/components/sections/Home/OurProcess";
import ServicesSection from "@/components/sections/Home/Services";
import CTASection from "@/components/sections/Home/CTASection";

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
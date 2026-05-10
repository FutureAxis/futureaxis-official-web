"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import BackgroundEffects from "@/components/ui/BackgroundEffects";
import HeroContent from "@/components/about/HeroContent";
import HeroImage from "@/components/about/HeroImage";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-20">
            <BackgroundEffects />

            <div className="relative z-10 w-full mx-auto 2xl:max-w-[1420px] px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row items-start gap-10 lg:gap-16 py-10 lg:py-14 mb-[60px]">
                <AnimatedSection className="w-full lg:w-[48%]">
                    <HeroContent />
                </AnimatedSection>

                <HeroImage />
            </div>
        </section>
    );
}
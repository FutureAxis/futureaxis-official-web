"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import BackgroundEffects from "@/components/ui/BackgroundEffects";
import ServicesHeroContent from "@/components/services/ServicesHeroContent";
import ServicesHeroImage from "@/components/services/ServicesHeroImage";

export default function ServicesHero() {
    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden">
            <BackgroundEffects />

            <div className="relative z-10 w-full mx-auto 2xl:max-w-[1420px] px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row items-start gap-10 lg:gap-8 py-10 lg:py-14">
                <AnimatedSection className="w-full lg:w-[48%]">
                    <ServicesHeroContent />
                </AnimatedSection>

                <ServicesHeroImage />
            </div>
        </section>
    );
}
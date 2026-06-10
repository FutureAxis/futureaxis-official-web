"use client";

import React, { useState, useEffect, useRef } from "react";
import GradientButton from "@/components/buttons/GradientButton";

export default function HeroSection() {
    const [isContentVisible, setIsContentVisible] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current && videoRef.current.readyState >= 2) {
            setIsContentVisible(true);
        }
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Mobile Background Image - visible below 768px */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 md:hidden"
                style={{ backgroundImage: "url('/images/hero/hero-mobile.png')" }}
            />

            {/* Background Video - hidden on mobile, visible above 768px */}
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover z-0 hidden md:block"
                autoPlay
                loop
                muted
                playsInline
                onPlay={() => setIsContentVisible(true)}
                onLoadedData={() => {
                    setTimeout(() => setIsContentVisible(true), 50);
                }}
            >
                <source src="/images/hero/hero-video.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            {/* Animated Content - Smooth slide without delays */}
            <div
                className={`absolute bottom-10 left-0 z-20 px-5 lg:px-[90px] transition-all duration-[1500ms] ease-out transform`}
            >
                <div className="space-y-6 max-w-[280px] md:max-w-md lg:max-w-2xl">
                    <div className="flex items-center gap-3 mb-2.5">
                        <div className="w-2 h-2 rounded-full bg-[#7C3AED]"/>
                        <p className="text-xs uppercase tracking-[3px] text-white font-semibold whitespace-nowrap">
                            WELCOME TO FUTUREAXIS
                        </p>
                    </div>

                    <p className="text-sm md:text-[17px] text-[#A4A4A4] font-normal leading-[150%] max-w-sm md:max-w-md mb-[23px]">
                        We deliver reliable, high-quality digital solutions designed to elevate
                        your business and drive long-term growth.
                    </p>

                    <GradientButton className="mt-2">
                        Find More
                    </GradientButton>
                </div>
            </div>
        </section>
    );
}
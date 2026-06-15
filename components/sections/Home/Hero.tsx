"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
        <section className="relative w-full md:h-screen h-[80vh] overflow-hidden">
            {/* Mobile Background Image - visible below 768px */}
            <div
                className="absolute top-0 left-0 w-full h-full md:hidden"
                style={{
                    backgroundImage: "url('/images/hero/hero-mobile.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
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
                <source src="/images/hero/hero-v1.mov" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            {/* Animated Content - Slide from left */}
            <div className="absolute bottom-10 left-0 z-20 px-5 lg:px-[90px]">
                <div className="space-y-6 max-w-[280px] md:max-w-md lg:max-w-2xl">
                    <motion.div
                        className="flex items-center gap-3 mb-2.5"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1], delay: 0 }}
                    >
                        <div className="w-2 h-2 rounded-full bg-[#7C3AED]"/>
                        <p className="text-xs uppercase tracking-[3px] text-white font-semibold whitespace-nowrap">
                            WELCOME TO FUTUREAXIS
                        </p>
                    </motion.div>

                    <motion.p
                        className="text-sm md:text-[17px] text-[#A4A4A4] font-normal leading-[150%] max-w-sm md:max-w-md mb-[23px]"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                    >
                        We deliver reliable, high-quality digital solutions designed to elevate
                        your business and drive long-term growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
                    >
                        <GradientButton className="mt-2">
                            Find More
                        </GradientButton>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
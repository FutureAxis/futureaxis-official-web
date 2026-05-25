"use client";

import React, { useEffect, useRef, useState } from "react";
import GradientButton from "@/components/buttons/GradientButton";
import Image from "next/image";
import icon1 from "@/public/images/icons/Vector-1.png";
import icon2 from "@/public/images/icons/Vector-2.png";
import icon3 from "@/public/images/icons/Vector-3.png";
import icon4 from "@/public/images/icons/Vector-4.png";

export default function AboutSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const features = [
        {
            icon: icon1,
            title: "Innovation",
            description: "We embrace creativity and technology to build future-ready solutions."
        },
        {
            icon: icon2,
            title: "Partnership",
            description: "We grow together with our client through collaboration and trust."
        },
        {
            icon: icon3,
            title: "Transparency",
            description: "We believe in clear communication and honesty in every interaction."
        },
        {
            icon: icon4,
            title: "Performance",
            description: "We focus on results that drive real impact and measurable growth."
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="w-full py-16 lg:py-24">
            <div className="px-[90px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-[26px]">
                            <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                            <p className="text-[#7C3AED] uppercase tracking-[3px] leading-[100%] text-sm font-semibold">
                                ABOUT US
                            </p>
                        </div>

                        <div
                            className={`transition-all duration-1000 transform mb-[60px] ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 -translate-y-12"
                            }`}
                        >
                            <h2 className="text-4xl md:text-[36px] font-semibold leading-[130%] tracking-0">
                                <span className="text-white">Driven by Purpose </span> <span
                                className="bg-gradient-to-r from-[#B42CD5] to-[#7C3AED] bg-clip-text text-transparent">Focus on Impact</span>
                            </h2>
                        </div>

                        <div
                            className={`transition-all duration-1000 delay-100 transform ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 -translate-y-12"
                            }`}
                        >
                            <p className="text-[#7D7D7D] text-[18px] font-normal leading-[150%] tracking-0 max-w-lg mb-[33px]">
                                FutureAxis is a digital solutions company focused on delivering innovative,
                                scalable, and results-driven solutions that help business grow and succeed
                                in the digital world.
                            </p>
                        </div>

                        <div
                            className={`transition-all duration-1000 delay-200 transform mb-8 ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 -translate-y-12"
                            }`}
                        >
                            <p className="text-[#F8FAFC] text-[18px] leading-[150%] tracking-0 font-normal max-w-md">
                                Our Mission is To empower business with innovative digital solutions that drive growth, efficiency and long-term success.
                            </p>
                        </div>

                        <GradientButton className="mt-4">
                            Meet Our Team
                        </GradientButton>
                    </div>

                    {/* Right Column - Features with Dividers matching image */}
                    <div className="space-y-6">
                        {features.map((feature, index) => (
                            <React.Fragment key={feature.title}>
                                {/* Feature Item */}
                                <div className="flex gap-4 items-start">
                                    {/* Icon Circle with Gradient Border */}
                                    <div className="relative w-[45px] h-[45px] flex-shrink-0">
                                        <div
                                            className="absolute inset-0 rounded-full"
                                            style={{
                                                background: "linear-gradient(135deg, #7C3AED 0%, #9B4DFF 50%, #6A2187 100%)",
                                                padding: "2px",
                                                borderRadius: "50%",
                                            }}
                                        >
                                            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                                <Image
                                                    src={feature.icon}
                                                    alt={feature.title}
                                                    width={20}
                                                    height={20}
                                                    className="w-5 h-5 object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-white text-lg font-semibold mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[#A4A4A4] text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                        {index < features.length - 1 && (
                                            <div className="w-full h-px bg-gradient-to-r from-[#6A2187] to-[#472187] my-2" />
                                        )}
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
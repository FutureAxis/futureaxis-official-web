"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import icon1 from "@/public/images/icons/Vector-5.png";
import icon2 from "@/public/images/icons/Vector-1.png";
import icon3 from "@/public/images/icons/Vector-6.png";
import icon4 from "@/public/images/icons/Vector-4.png";

export default function AboutSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const features = [
        {
            icon: icon1,
            title: "Discover",
            description:
                "We understand your business, goals and target audience."
        },
        {
            icon: icon2,
            title: "Strategize",
            description:
                "We create a tailored strategy to solve real problems."
        },
        {
            icon: icon3,
            title: "Develop",
            description:
                "We build fast, scalable, and secure digital solutions."
        },
        {
            icon: icon4,
            title: "Scale",
            description:
                "We launch, optimize, and support your continuous growth."
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
            <div className="px-5 lg:px-[90px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* RIGHT SIDE - Icon + Text Layout without last divider */}
                    <div
                        className={`order-2 lg:order-1 flex w-full transition-all duration-1000 delay-300 transform ${
                            isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-12"
                        }`}
                    >
                        {/* ICON COLUMN */}
                        <div className="relative w-14 flex flex-col items-center">
                            {/* Vertical Gradient Line - doesn't extend to last icon */}
                            <div
                                className="absolute top-0 w-[2px] bg-gradient-to-b from-[#7C3AED] to-[#6A2187] opacity-40"
                                style={{
                                    height: `calc(100% - ${features.length - 1} * (100% / ${features.length}) )`,
                                    bottom: "auto"
                                }}
                            />

                            {features.map((feature, index) => (
                                <div
                                    key={feature.title}
                                    className={`relative z-10 ${
                                        index !== features.length - 1 ? "mb-16" : ""
                                    }`}
                                >
                                    {/* Gradient Circle Icon */}
                                    <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-b from-[#7C3AED] to-[#6A2187]">
                                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                            <Image
                                                src={feature.icon}
                                                alt={feature.title}
                                                width={24}
                                                height={24}
                                                className="w-6 h-6 object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Divider line below icon (except last one) - Increased height */}
                                    {index < features.length - 1 && (
                                        <div className="absolute left-1/2 -translate-x-1/2 top-14 w-[1.5px] h-24 bg-gradient-to-b from-[#7C3AED] to-[#6A2187]/30" />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* TEXT COLUMN */}
                        <div className="flex-1 ml-6 space-y-16">
                            {features.map((feature, index) => (
                                <div key={feature.title}>
                                    <h3 className="text-white text-lg font-semibold mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[#A4A4A4] text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* LEFT SIDE - Content */}
                    <div
                        className={`order-1 lg:order-2 space-y-6 transition-all duration-1000 transform ${
                            isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-12"
                        }`}
                    >
                        <div className="flex items-center gap-3 mb-[45px]">
                            <div className="w-2 h-2 rounded-full bg-[#7C3AED]"/>
                            <p className="text-[#7C3AED] uppercase tracking-[3px] leading-[100%] text-sm font-semibold">
                                OUR PROCESS
                            </p>
                        </div>

                        <h2 className="text-4xl md:text-[36px] font-semibold leading-[130%] tracking-0 mb-[45px]">
                            <span className="text-white">Transforming Ideas into <br/> </span>
                            <span
                                className="bg-gradient-to-r from-[#B42CD5] to-[#7C3AED] bg-clip-text text-transparent">Measurable Impact</span>
                        </h2>

                        <p className="text-[#7D7D7D] text-[18px] leading-[100%] tracking-0 max-w-md font-normal">
                            We don't just deliver digital solutions — we partner with you to drive real business
                            success. Our team combines strategy, design, and technology to create solutions that are not
                            only visually impressive but also built to perform.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ICONS = {
    discover:   "https://res.cloudinary.com/denec4g4s/image/upload/v1781547245/future_axis/icons/Vector-5_emepyk.png",
    strategize: "https://res.cloudinary.com/denec4g4s/image/upload/v1781547248/future_axis/icons/Vector-1_pjgkjx.png",
    develop:    "https://res.cloudinary.com/denec4g4s/image/upload/v1781547244/future_axis/icons/Vector-6_lcu6lt.png",
    scale:      "https://res.cloudinary.com/denec4g4s/image/upload/v1781547245/future_axis/icons/Vector-4_dmulm6.png",
};

export default function ProcessSection() {
    const sectionRef = useRef<HTMLElement>(null);

    const features = [
        {
            icon: ICONS.discover,
            title: "Discover",
            description: "We understand your business, goals and target audience.",
        },
        {
            icon: ICONS.strategize,
            title: "Strategize",
            description: "We create a tailored strategy to solve real problems.",
        },
        {
            icon: ICONS.develop,
            title: "Develop",
            description: "We build fast, scalable, and secure digital solutions.",
        },
        {
            icon: ICONS.scale,
            title: "Scale",
            description: "We launch, optimize, and support your continuous growth.",
        },
    ];

    const slideTransition = (delay: number) => ({
        duration: 1.8,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        delay,
    });

    return (
        <section
            ref={sectionRef}
            className="w-full pb-20 lg:pt-24 lg:pb-10"
        >
            <div className="px-5 lg:px-[90px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* RIGHT SIDE - PROCESS VISUAL (visually left on desktop) */}
                    <div className="order-2 lg:order-1 flex w-full">
                        {/* ICON COLUMN */}
                        <div className="relative w-12 sm:w-14 flex flex-col items-center">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    className={`relative z-10 ${
                                        index !== features.length - 1
                                            ? "mb-12 sm:mb-16"
                                            : ""
                                    }`}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.1 }}
                                    transition={slideTransition(index * 0.3)}
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full p-[2px] bg-gradient-to-b from-[#7C3AED] to-[#6A2187]">
                                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                            <Image
                                                src={feature.icon}
                                                alt={feature.title}
                                                width={20}
                                                height={20}
                                                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                                            />
                                        </div>
                                    </div>

                                    {index < features.length - 1 && (
                                        <div className="absolute left-1/2 -translate-x-1/2 top-12 sm:top-14 w-[1.5px] h-16 sm:h-24 bg-gradient-to-b from-[#7C3AED] to-[#6A2187]/30" />
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* TEXT COLUMN */}
                        <div className="flex-1 ml-4 sm:ml-6 space-y-10 sm:space-y-16">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.1 }}
                                    transition={slideTransition(index * 0.3)}
                                >
                                    <h3 className="text-white text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[#A4A4A4] text-xs sm:text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* LEFT SIDE - CONTENT (visually right on desktop) */}
                    <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
                        {/* LABEL */}
                        <motion.div
                            className="flex items-center gap-3 mb-6 sm:mb-[45px]"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={slideTransition(0.3)}
                        >
                            <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                            <p className="text-[#7C3AED] uppercase tracking-[3px] text-xs sm:text-sm font-semibold">
                                OUR PROCESS
                            </p>
                        </motion.div>

                        {/* HEADING */}
                        <motion.h2
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-semibold leading-[130%] mb-6 sm:mb-[45px]"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={slideTransition(0.3)}
                        >
                            <span className="text-white">
                                Transforming Ideas into <br className="hidden sm:block" />
                            </span>
                            <span className="bg-gradient-to-r from-[#B42CD5] to-[#7C3AED] bg-clip-text text-transparent">
                                Measurable Impact
                            </span>
                        </motion.h2>

                        {/* PARAGRAPH */}
                        <motion.p
                            className="text-[#7D7D7D] text-sm sm:text-[16px] lg:text-[18px] leading-[150%] max-w-md font-normal"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={slideTransition(0.3)}
                        >
                            We don't just deliver digital solutions — we partner with you to drive real business success. Our team combines strategy, design, and technology to create solutions that are not only visually impressive but also built to perform.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}

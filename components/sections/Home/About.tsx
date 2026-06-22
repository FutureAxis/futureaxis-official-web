"use client";

import React from "react";
import { motion } from "framer-motion";
import GradientButton from "@/components/buttons/GradientButton";
import Image from "next/image";
import {useRouter} from "next/navigation";

const ICONS = {
    innovation: "https://res.cloudinary.com/denec4g4s/image/upload/v1781547248/future_axis/icons/Vector-1_pjgkjx.png",
    partnership: "https://res.cloudinary.com/denec4g4s/image/upload/v1781547247/future_axis/icons/Vector-2_hsinrf.png",
    transparency: "https://res.cloudinary.com/denec4g4s/image/upload/v1781547246/future_axis/icons/Vector-3_nuzcmv.png",
    performance: "https://res.cloudinary.com/denec4g4s/image/upload/v1781547245/future_axis/icons/Vector-4_dmulm6.png",
};

export default function AboutSection() {
    const router = useRouter();
    const features = [
        { icon: ICONS.innovation, title: "Innovation", description: "We embrace creativity and technology to build future-ready solutions." },
        { icon: ICONS.partnership, title: "Partnership", description: "We grow together with our client through collaboration and trust." },
        { icon: ICONS.transparency, title: "Transparency", description: "We believe in clear communication and honesty in every interaction." },
        { icon: ICONS.performance, title: "Performance", description: "We focus on results that drive real impact and measurable growth." },
    ];

    const slideLeft = {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: false, amount: 0.1 },
    };

    const slideRight = {
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: false, amount: 0.1 },
    };

    const slideTransition = (delay: number) => ({
        duration: 1.8,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        delay,
    });

    const navigateToTeam = () => {
        router.push('/team');
    };

    return (
        <section className="w-full pt-16 lg:pt-24" id="about">
            <div className="px-5 lg:px-[90px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Left Column */}
                    <div className="space-y-6 w-full">
                        <motion.div
                            className="flex items-center gap-3 mb-[26px] w-full"
                            {...slideLeft}
                            transition={slideTransition(0.3)}
                        >
                            <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                            <p className="text-[#7C3AED] uppercase tracking-[3px] text-sm font-semibold">
                                ABOUT US
                            </p>
                        </motion.div>

                        <motion.div
                            className="mb-[60px] w-full"
                            {...slideLeft}
                            transition={slideTransition(0.3)}
                        >
                            <h2 className="text-3xl md:text-[36px] font-semibold leading-[130%]">
                                <span className="text-white">Driven by Purpose </span>
                                <span className="bg-gradient-to-r from-[#B42CD5] to-[#7C3AED] bg-clip-text text-transparent">
                                    Focus on Impact
                                </span>
                            </h2>
                        </motion.div>

                        <motion.div
                            className="w-full"
                            {...slideLeft}
                            transition={slideTransition(0.3)}
                        >
                            <p className="text-[#7D7D7D] text-base md:text-[18px] leading-[150%] max-w-lg mb-[33px]">
                                FutureAxis is a digital solutions company focused on delivering
                                innovative, scalable, and results-driven solutions that help
                                business grow and succeed in the digital world.
                            </p>
                        </motion.div>

                        <motion.div
                            className="mb-8 w-full"
                            {...slideLeft}
                            transition={slideTransition(0.3)}
                        >
                            <p className="text-[#F8FAFC] text-base md:text-[18px] leading-[150%] max-w-md">
                                Our Mission is to empower businesses with innovative digital
                                solutions that drive growth, efficiency, and long-term success.
                            </p>
                        </motion.div>

                        <motion.div
                            {...slideLeft}
                            transition={slideTransition(0.3)}
                        >
                            <GradientButton onClick={navigateToTeam}>Meet Our Team</GradientButton>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {features.map((feature, index) => (
                            <React.Fragment key={feature.title}>
                                <motion.div
                                    className="flex gap-4 items-start"
                                    {...slideRight}
                                    transition={slideTransition(index * 0.3)}
                                >
                                    <div className="relative w-[45px] h-[45px] flex-shrink-0">
                                        <div
                                            className="absolute inset-0 rounded-full"
                                            style={{
                                                background: "linear-gradient(135deg, #7C3AED 0%, #9B4DFF 50%, #6A2187 100%)",
                                                padding: "2px",
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
                                </motion.div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

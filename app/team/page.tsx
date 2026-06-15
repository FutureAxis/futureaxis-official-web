"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import backgroundImage from "@/public/images/home/background-bg.png";
import { TEAM_LEADERS, TEAM_MEMBERS } from "@/constants/team";
import { TeamCard } from "@/components/team/TeamCard";

export default function TeamPage() {
    const sectionRef = useRef<HTMLElement>(null);

    const firstFiveMembers = TEAM_MEMBERS.slice(0, 5);
    const lastTwoMembers = TEAM_MEMBERS.slice(5, 7);

    return (
        <>
            <Head>
                <title>Our Team | Meet the Digital Experts at Future Axis</title>
                <meta name="description" content="Meet the passionate team of designers, developers, and digital innovators at Future Axis. We combine creativity, strategy, and technology to help brands grow." />
                <meta name="keywords" content="web development team Melbourne, digital agency team, IT consultants Australia, web designers, digital marketing experts" />

                {/* Open Graph */}
                <meta property="og:title" content="Our Team | Future Axis - Digital Experts" />
                <meta property="og:description" content="Meet our visionary team of co-founders, developers, designers, and digital strategists dedicated to delivering exceptional results." />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Future Axis" />
                <meta property="og:image" content="/og-image-team.jpg" />
            </Head>

            {/* Background Image with Dark Overlay */}
            <div className="fixed inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Background pattern for Future Axis Digital team page"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <section ref={sectionRef} className="w-full pt-[140px] pb-20 lg:pt-36 lg:pb-[150px]">
                    <div className="px-5 lg:px-[90px]">
                        {/* Header */}
                        <div className="text-center max-w-3xl mx-auto mb-[80px]">
                            <motion.h1
                                className="text-[24px] md:text-[36px] font-semibold text-white leading-[130%] mb-[34px]"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                            >
                                <span>Visionary Team </span>
                                <span className="bg-gradient-to-r from-[#6A2187] to-[#7C3AED] bg-clip-text text-transparent">
                                    Exceptional Results
                                </span>
                            </motion.h1>
                            <motion.p
                                className="text-[#7D7D7D] text-base leading-relaxed"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                            >
                                We are a passionate team of designers, developers, and digital innovators dedicated to
                                creating modern experiences that combine creativity, strategy, and technology to help
                                brands grow in the digital world.
                            </motion.p>
                        </div>

                        {/* Leaders Section */}
                        <div className="mb-20">
                            <div className="flex justify-center">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto w-full">
                                    {TEAM_LEADERS.map((member, index) => (
                                        <TeamCard key={member.name} member={member} index={index} isVisible={true} priority={index === 0} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Team Members Grid */}
                        <div>
                            {/* Desktop Layout */}
                            <div className="hidden lg:block">
                                <div className="grid grid-cols-5 gap-6 lg:gap-8 mb-[64px]">
                                    {firstFiveMembers.map((member, index) => (
                                        <TeamCard key={member.name} member={member} index={index + 2} isVisible={true} />
                                    ))}
                                </div>
                                <div className="flex justify-center">
                                    <div className="grid grid-cols-2 gap-6 lg:gap-8 w-full max-w-[calc(40%+0.5rem)]">
                                        {lastTwoMembers.map((member, index) => (
                                            <TeamCard key={member.name} member={member} index={index + 7} isVisible={true} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Layout */}
                            <div className="lg:hidden">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                                    {TEAM_MEMBERS.map((member, index) => (
                                        <TeamCard key={member.name} member={member} index={index + 2} isVisible={true} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
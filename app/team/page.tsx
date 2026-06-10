"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import backgroundImage from "@/public/images/home/background-bg.png";
import { TEAM_LEADERS, TEAM_MEMBERS } from "@/constants/team";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {TeamCard} from "@/components/ui/TeamCard";

export default function TeamPage() {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useScrollAnimation(sectionRef);

    const firstFiveMembers = TEAM_MEMBERS.slice(0, 5);
    const lastTwoMembers = TEAM_MEMBERS.slice(5, 7);

    return (
        <>
            <Head>
                <title>Our Team | Meet the Digital Experts at Future Axis Digital</title>
                <meta name="description" content="Meet the passionate team of designers, developers, and digital innovators at Future Axis Digital. We combine creativity, strategy, and technology to help brands grow." />
                <meta name="keywords" content="web development team Melbourne, digital agency team, IT consultants Australia, web designers, digital marketing experts" />
                <link rel="canonical" href="https://futureaxisdigital.com/team" />

                {/* Open Graph / Facebook / LinkedIn */}
                <meta property="og:title" content="Our Team | Future Axis Digital - Digital Experts" />
                <meta property="og:description" content="Meet our visionary team of co-founders, developers, designers, and digital strategists dedicated to delivering exceptional results." />
                <meta property="og:url" content="https://futureaxisdigital.com/team" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Future Axis Digital" />
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
                <section ref={sectionRef} className="w-full py-20 lg:pt-24 lg:pb-[150px]">
                    <div className="px-5 lg:px-[90px]">
                        <div
                            className={`text-center max-w-3xl mx-auto mb-[130px] transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] transform ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 -translate-y-12"
                            }`}
                        >
                            <h1 className="text-[24px] md:text-[36px] font-semibold text-white leading-[130%] mb-[34px]">
                                <span>Visionary Team </span>
                                <span
                                    className="bg-gradient-to-r from-[#6A2187] to-[#7C3AED] bg-clip-text text-transparent">
                                    Exceptional Results
                                </span>
                            </h1>
                            <p className="text-[#7D7D7D] text-base leading-relaxed">
                                We are a passionate team of designers, developers, and digital innovators dedicated to
                                creating modern experiences that combine creativity, strategy, and technology to help
                                brands
                                grow in the digital world.
                            </p>
                        </div>

                        <div className="mb-20">
                            <div className="flex justify-center">
                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto w-full">
                                    {TEAM_LEADERS.map((member, index) => (
                                        <TeamCard key={member.name} member={member} index={index} isVisible={isVisible} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="hidden lg:block">
                                <div className="grid grid-cols-5 gap-6 lg:gap-8 mb-[64px]">
                                    {firstFiveMembers.map((member, index) => (
                                        <TeamCard key={member.name} member={member} index={index + 2} isVisible={isVisible} />
                                    ))}
                                </div>
                                <div className="flex justify-center">
                                    <div className="grid grid-cols-2 gap-6 lg:gap-8 w-full max-w-[calc(40%+0.5rem)]">
                                        {lastTwoMembers.map((member, index) => (
                                            <TeamCard key={member.name} member={member} index={index + 7} isVisible={isVisible} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="lg:hidden">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                                    {TEAM_MEMBERS.map((member, index) => (
                                        <TeamCard key={member.name} member={member} index={index + 2} isVisible={isVisible} />
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
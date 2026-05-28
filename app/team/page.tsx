// app/team/page.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import backgroundImage from "@/public/images/home/background-bg.png";
import yehan from "@/public/images/team/yehan.png";

export default function TeamPage() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const leaders = [
        {
            name: "Yehan Pitigala",
            role: "Co-Founder & Head of Business Development",
            image: yehan,
        },
        {
            name: "Hirushi Matharaarachchi",
            role: "Co-Founder & IT Consultant",
            image: yehan,
        },
    ];

    const teamMembers = [
        {
            name: "Chloe Pitigala",
            role: "Head of Operations",
            image: yehan,
        },
        {
            name: "Eshan Gallage",
            role: "Full-Stack Engineer",
            image: yehan,
        },
        {
            name: "Rebecca Meegahapola",
            role: "UI/UX Engineer",
            image: yehan,
        },
        {
            name: "Pathum Pitigala",
            role: "Business Analyst",
            image: yehan,
        },
        {
            name: "Sachintha Artigala",
            role: "Digital Marketing Specialist",
            image: yehan,
        },
        {
            name: "Nuwan Perera",
            role: "Senior Developer",
            image: yehan,
        },
        {
            name: "Amali Fernando",
            role: "Project Manager",
            image: yehan,
        },
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

    const TeamCard = ({ member, index }: { member: any; index: number }) => (
        <div
            className={`transition-all duration-700 transform ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="group cursor-pointer">
                <div className="relative w-full aspect-square rounded-[14px] overflow-hidden mb-5 bg-gradient-to-br from-[#7C3AED]/20 to-[#6A2187]/20">
                    <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role} at Future Axis Digital`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                <div className="text-center">
                    <h3 className="text-[#A4A4A4] text-base font-medium mb-5 leading-[100%] tracking-0">
                        {member.name}
                    </h3>
                    <p className="text-white text-base font-medium leading-[100%] tracking-0">
                        {member.role}
                    </p>
                </div>
            </div>
        </div>
    );

    const firstFiveMembers = teamMembers.slice(0, 5);
    const lastTwoMembers = teamMembers.slice(5, 7);

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
                <Navbar />

                <section ref={sectionRef} className="w-full py-20 lg:pt-24 lg:pb-[150px]">
                    <div className="px-5 lg:px-[90px]">
                        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform mb-[130px] ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}>
                            <h1 className="text-[24px] md:text-[36px] font-semibold text-white leading-[130%] mb-[34px]">
                                <span>Visionary Team </span>
                                <span className="bg-gradient-to-r from-[#6A2187] to-[#7C3AED] bg-clip-text text-transparent">
                                    Exceptional Results
                                </span>
                            </h1>
                            <p className="text-[#7D7D7D] text-base leading-relaxed">
                                We are a passionate team of designers, developers, and digital innovators dedicated to creating modern experiences that combine creativity, strategy, and technology to help brands
                                grow in the digital world.
                            </p>
                        </div>

                        <div className="mb-20">
                            <h2 className="sr-only">Leadership Team</h2>
                            <div className="flex justify-center">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto w-full">
                                    {leaders.map((member, index) => (
                                        <TeamCard key={member.name} member={member} index={index} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="sr-only">Core Team Members</h2>
                            <div className="hidden lg:block">
                                <div className="grid grid-cols-5 gap-6 lg:gap-8 mb-[64px]">
                                    {firstFiveMembers.map((member, index) => (
                                        <TeamCard key={member.name} member={member} index={index + 2} />
                                    ))}
                                </div>
                                <div className="flex justify-center">
                                    <div className="grid grid-cols-2 gap-6 lg:gap-8 w-full max-w-[calc(40%+0.5rem)]">
                                        {lastTwoMembers.map((member, index) => (
                                            <TeamCard key={member.name} member={member} index={index + 7} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="lg:hidden">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                                    {teamMembers.map((member, index) => (
                                        <TeamCard key={member.name} member={member} index={index + 2} />
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
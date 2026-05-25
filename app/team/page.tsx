// app/team/page.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import backgroundImage from "@/public/images/home/background-image.png";
import yehan from "@/public/images/team/yehan.png";

export default function TeamPage() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const leaders = [
        {
            name: "Yehan Pitigala",
            role: "Co -Founder & Head of Business Development",
            image: yehan,
        },
        {
            name: "Hirushi Matharaarachchi",
            role: "Co -Founder & IT Consultant",
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
            className={`transition-all duration-700 transform`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative w-full aspect-square rounded-[14px] overflow-hidden mb-5 bg-gradient-to-br from-[#7C3AED]/20 to-[#6A2187]/20">
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

    // Split team members into first 5 and remaining 2
    const firstRowMembers = teamMembers.slice(0, 5);
    const secondRowMembers = teamMembers.slice(5, 7);

    return (
        <>
            {/* Background Image */}
            <div className="fixed inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
            </div>

            {/* Content - Removed min-h-screen and main wrapper */}
            <div className="relative z-10">
                <Navbar />

                <section ref={sectionRef} className="w-full py-16 lg:py-24">
                    <div className="px-5 lg:px-[90px]">
                        {/* Header Section */}
                        <div
                            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform mb-[130px] ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-12"
                            }`}
                        >
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                                <p className="text-[#7C3AED] uppercase tracking-[3px] text-sm font-semibold">
                                    OUR TEAM
                                </p>
                            </div>

                            <h2 className="text-[24px] md:text-[36px] font-semibold text-white leading-[130%] mb-[34px]">
                                <span>Visionary Team </span>
                                <span className="bg-gradient-to-r from-[#6A2187] to-[#7C3AED] bg-clip-text text-transparent">
                                    Exceptional Results
                                </span>
                            </h2>

                            <p className="text-[#7D7D7D] text-base leading-relaxed">
                                We are a passionate team of designers, developers, and digital innovators dedicated to creating modern experiences that combine creativity, strategy, and technology to help brands
                                grow in the digital world.
                            </p>
                        </div>

                        {/* Leaders Section - 2 cards centered */}
                        <div className="mb-20">
                            <div className="flex justify-center">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto">
                                    {leaders.map((member, index) => (
                                        <TeamCard key={member.name} member={member} index={index} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Team Members Section */}
                        <div>
                            {/* First Row - 5 cards */}
                            <div
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 mb-8">
                                {firstRowMembers.map((member, index) => (
                                    <TeamCard key={member.name} member={member} index={index + 2}/>
                                ))}
                            </div>

                            <div className="flex justify-center mt-[64px]">
                                <div
                                    className="grid grid-cols-2 gap-6 lg:gap-8 w-full max-w-lg">
                                    {secondRowMembers.map((member, index) => (
                                        <TeamCard key={member.name} member={member} index={index + 7}/>
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
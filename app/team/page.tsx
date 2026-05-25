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
                {/* Image Container */}
                <div className="relative w-full aspect-square rounded-[14px] overflow-hidden mb-5 bg-gradient-to-br from-[#7C3AED]/20 to-[#6A2187]/20">
                    <Image
                        src={member.image}
                        alt={member.name}
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

    // Split team members for desktop to center last 2
    const firstFiveMembers = teamMembers.slice(0, 5);
    const lastTwoMembers = teamMembers.slice(5, 7);

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

            {/* Content */}
            <div className="relative z-10">
                <Navbar />

                <section ref={sectionRef} className="w-full py-20 lg:pt-24 lg:pb-[150px]">
                    <div className="px-5 lg:px-[90px]">
                        {/* Header Section */}
                        <div
                            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform mb-[130px] ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-12"
                            }`}
                        >

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
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto w-full">
                                    {leaders.map((member, index) => (
                                        <TeamCard key={member.name} member={member} index={index} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Team Members Section */}
                        <div>
                            {/* Desktop: 5 cards + 2 centered cards (same size) */}
                            <div className="hidden lg:block">
                                {/* First Row - 5 cards */}
                                <div className="grid grid-cols-5 gap-6 lg:gap-8 mb-[64px]">
                                    {firstFiveMembers.map((member, index) => (
                                        <TeamCard key={member.name} member={member} index={index + 2} />
                                    ))}
                                </div>
                                {/* Second Row - 2 cards centered - SAME SIZE as first row */}
                                <div className="flex justify-center">
                                    <div className="grid grid-cols-2 gap-6 lg:gap-8 w-full max-w-[calc(40%+0.5rem)]">
                                        {lastTwoMembers.map((member, index) => (
                                            <TeamCard key={member.name} member={member} index={index + 7} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Mobile & Tablet: 2 cards per row */}
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
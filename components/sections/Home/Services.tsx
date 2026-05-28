"use client";

import React, { useEffect, useRef, useState } from "react";
import checkIcon from "@/public/images/icons/check-icon.png";
import Image from "next/image";
import card1 from "@/public/images/home/web-design.png";
import card2 from "@/public/images/home/social-media.png";
import card3 from "@/public/images/home/consulting.png";

export default function ServicesSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const services = [
        {
            title: "Web Design & Development",
            description: "We build modern responsive websites that are visually stunning, user-friendly, and optimized for performance and conversions.",
            features: ["Custom UI/UX Design", "Performance Optimization", "Responsive Development", "Scalable & Secure Solutions"],
            image: card1,
            imageAlt: "Web Design & Development",
        },
        {
            title: "Social Media Marketing",
            description: "We help brands to connect with the right audience through engaging content.",
            features: ["Social Media strategy", "Paid Advertising", "Content Creation", "Analytics & Reporting"],
            image: card2,
            imageAlt: "Social Media Marketing",
        },
        {
            title: "IT Consulting",
            description: "We provide expert IT consulting to streamline operations, modernize systems, and digital transformation.",
            features: ["IT strategy & Planning", "Cloud Solutions", "Digital Transformation", "On going Supporting"],
            image: card3,
            imageAlt: "IT Consulting",
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
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const CheckIcon = () => (
        <div className="flex items-center justify-center flex-shrink-0 w-5 h-5">
            <Image src={checkIcon} alt="Check" width={20} height={20} className="object-contain" />
        </div>
    );

    return (
        <section ref={sectionRef} className="w-full py-16 lg:pt-[146px] lg:pb-24">
            <div className="px-5 lg:px-[90px]">

                {/* Header with Animations */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div
                        className={`flex items-center justify-center gap-3 mb-[26px] transition-all duration-700 transform ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 -translate-y-8"
                        }`}
                    >
                        <p className="text-[#7C3AED] uppercase tracking-[3px] text-xs font-semibold">
                            OUR SERVICES
                        </p>
                    </div>

                    <h2
                        className={`text-4xl md:text-5xl font-semibold text-white leading-tight mb-[48px] transition-all duration-700 delay-200 transform ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        Solutions That <span className="bg-gradient-to-r from-[#B42CD5] to-[#7C3AED] bg-clip-text text-transparent">Drive Results</span>
                    </h2>

                    <p
                        className={`text-[#7D7D7D] text-base leading-relaxed transition-all duration-700 delay-300 transform ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        Growth isn't accidental; it's engineered. We deliver end-to-end digital solutions—from custom Web Development and strategic Social Media Marketing to expert IT Consulting—designed to scale your business faster and secure lasting success.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* LEFT CARD with Animation */}
                    <div
                        className={`transition-all duration-800 delay-400 transform ${
                            isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-12"
                        }`}
                    >
                        {/* MOBILE */}
                        <div className="lg:hidden flex flex-col rounded-[18px] overflow-hidden border border-[#15102E] bg-[#0B0B1A] transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#7C3AED]/10">
                            <div className="relative w-full h-[220px] overflow-hidden">
                                <Image
                                    src={services[0].image}
                                    alt={services[0].imageAlt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6 flex flex-col">
                                <h3 className="text-[#F8FAFC] text-[18px] font-semibold mb-4">{services[0].title}</h3>
                                <p className="text-[#A4A4A4] text-[15px] leading-relaxed mb-6">{services[0].description}</p>

                                <div className="flex flex-col gap-3">
                                    {services[0].features.map((f, i) => (
                                        <div
                                            key={i}
                                            className={`flex items-center gap-3 transition-all duration-500 transform ${
                                                isVisible
                                                    ? "opacity-100 translate-x-0"
                                                    : "opacity-0 -translate-x-4"
                                            }`}
                                            style={{ transitionDelay: `${500 + i * 100}ms` }}
                                        >
                                            <CheckIcon />
                                            <span className="text-[#A4A4A4] text-[15px]">{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* DESKTOP */}
                        <div className="hidden lg:block relative rounded-[18px] overflow-hidden h-full min-h-[780px] group border border-[#15102E] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#7C3AED]/20">
                            <div className="absolute inset-0">
                                <Image src={services[0].image} alt={services[0].imageAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="relative z-10 p-8 flex flex-col justify-start h-full">
                                <h3 className="text-[#F8FAFC] text-[18px] font-semibold mb-[27px]">{services[0].title}</h3>
                                <p className="text-[#A4A4A4] text-[18px] mb-[42px]">{services[0].description}</p>
                                <div className="flex flex-col gap-10">
                                    {services[0].features.map((f, i) => (
                                        <div
                                            key={i}
                                            className={`flex items-center gap-3 transition-all duration-500 transform ${
                                                isVisible
                                                    ? "opacity-100 translate-x-0"
                                                    : "opacity-0 -translate-x-8"
                                            }`}
                                            style={{ transitionDelay: `${400 + i * 150}ms` }}
                                        >
                                            <CheckIcon />
                                            <span className="text-[#A4A4A4] text-[18px]">{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN with Staggered Animations */}
                    <div className="flex flex-col gap-6">
                        {services.slice(1).map((service, index) => (
                            <div
                                key={service.title}
                                className={`transition-all duration-800 transform ${
                                    isVisible
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-0 translate-x-12"
                                }`}
                                style={{ transitionDelay: `${500 + index * 200}ms` }}
                            >
                                {/* MOBILE */}
                                <div className="lg:hidden flex flex-col rounded-[18px] overflow-hidden border border-[#15102E] bg-[#0B0B1A] transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#7C3AED]/10">
                                    <div className="relative w-full h-[220px] overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.imageAlt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-[#F8FAFC] text-[18px] font-semibold mb-4">{service.title}</h3>
                                        <p className="text-[#A4A4A4] text-[15px] leading-relaxed mb-6">{service.description}</p>

                                        <div className="flex flex-col gap-3">
                                            {service.features.map((f, i) => (
                                                <div
                                                    key={i}
                                                    className={`flex items-center gap-3 transition-all duration-500 transform ${
                                                        isVisible
                                                            ? "opacity-100 translate-x-0"
                                                            : "opacity-0 translate-x-4"
                                                    }`}
                                                    style={{ transitionDelay: `${700 + index * 100 + i * 100}ms` }}
                                                >
                                                    <CheckIcon />
                                                    <span className="text-[#A4A4A4] text-[15px]">{f}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* DESKTOP */}
                                <div className="hidden lg:block relative rounded-[18px] overflow-hidden h-full min-h-[240px] group border border-[#15102E] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#7C3AED]/20">
                                    <div className="absolute inset-0">
                                        <Image src={service.image} alt={service.imageAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/50 to-transparent" />
                                    </div>
                                    <div className="relative z-10 p-8 flex flex-col justify-center h-full max-w-[60%]">
                                        <h3 className="text-[#F8FAFC] text-[18px] font-semibold mb-[27px]">{service.title}</h3>
                                        <p className="text-[#A4A4A4] text-[18px] mb-[42px]">{service.description}</p>
                                        <div className="space-y-2.5">
                                            {service.features.map((f, i) => (
                                                <div
                                                    key={i}
                                                    className={`flex items-center gap-3 transition-all duration-500 transform ${
                                                        isVisible
                                                            ? "opacity-100 translate-x-0"
                                                            : "opacity-0 translate-x-8"
                                                    }`}
                                                    style={{ transitionDelay: `${600 + index * 150 + i * 100}ms` }}
                                                >
                                                    <CheckIcon />
                                                    <span className="text-[#A4A4A4] text-[18px]">{f}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
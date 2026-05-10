"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import valuesImage from "@/public/images/about/about-image.png";
import {Handshake, Lightbulb, Star, TrendingUp} from "lucide-react";

export default function ValuesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const items = el.querySelectorAll<HTMLElement>("[data-animate]");
        items.forEach((item, i) => {
            item.style.opacity = "0";
            item.style.transform = "translateY(30px)";
            setTimeout(() => {
                item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }, 100 + 100 * i);
        });
    }, []);

    const values = [
        {
            title: "Innovation",
            description: "We embrace creativity and technology to build future-ready solutions.",
            icon: <Lightbulb className="w-6 h-6 text-[var(--primary)]" />,
        },
        {
            title: "Transparency",
            description: "We believe in clear communication and honesty in every interaction.",
            icon: <Star className="w-6 h-6 text-[var(--primary)]" />,
        },
        {
            title: "Partnership",
            description: "We grow together with our clients through collaboration and trust.",
            icon: <Handshake className="w-6 h-6 text-[var(--primary)]" />,
        },
        {
            title: "Performance",
            description: "We focus on results that drive real impact and measurable growth.",
            icon: <TrendingUp className="w-6 h-6 text-[var(--primary)]" />,
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-20 md:py-28 lg:py-32 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FBF9FF] to-white pointer-events-none" />

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* LEFT COLUMN - Image */}
                    {/* LEFT COLUMN - Image */}
                    <div
                        data-animate
                        className="w-full lg:w-1/2 lg:sticky lg:top-24"
                    >
                        {/* Decorative purple backdrop + image wrapper */}
                        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px]">

                            {/* Purple rectangle behind — offset bottom-left */}
                            <div className="absolute bottom-[-25px] left-[-25px] w-[80%] h-[80%] bg-[var(--primary)] rounded-3xl z-0" />

                            {/* White-bordered photo frame on top */}
                            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl z-10">
                                <Image
                                    src={valuesImage}
                                    alt="Our values and principles"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/10 to-transparent pointer-events-none" />
                            </div>

                        </div>
                    </div>

                    {/* RIGHT COLUMN - Values Content */}
                    <div className="w-full lg:w-1/2">

                        {/* Section Header */}
                        <div data-animate className="mb-10">
                            {/* Pill Tag */}
                            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] mb-6">
                                OUR VALUES
                            </div>

                            {/* Main Heading */}
                            <h2
                                className="text-3xl sm:text-4xl md:text-[36px] font-bold text-[var(--heading)] mb-4 leading-tight"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                The Principle That Guide Everything We Do
                            </h2>
                        </div>

                        {/* Values List - Divided by lines (2x2 grid with dividers) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    data-animate
                                    className={`
                                        group p-6 transition-all duration-300
                                        ${index % 2 === 0 ? 'sm:border-r' : ''}
                                        ${index < 2 ? 'border-b' : ''}
                                        border-[#E8E0FF]
                                        hover:bg-[#FBF9FF]
                                    `}
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-full bg-[#D9CFFFB0] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            {value.icon}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-[var(--heading)] mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                                                {value.title}
                                            </h3>
                                            <p className="text-sm text-[var(--paragraph)] leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
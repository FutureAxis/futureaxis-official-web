"use client";

import { useEffect, useRef } from "react";

export default function AboutSection() {
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

    return (
        <section
            ref={sectionRef}
            className="relative w-full pt-[45px] pb-[100px] overflow-hidden bg-[#D9CFFF26]"
        >
            {/* Decorative elements */}
            <div className="absolute top-20 right-0 w-72 h-72 bg-[var(--primary)]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* LEFT ALIGNED: Section Pill */}
                <div data-animate className="flex justify-start mb-[30px]">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F3EFFE] text-[var(--primary)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                        OUR PROCESS
                    </span>
                </div>

                {/* Content and Cards in same row - flex layout */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-start">

                    {/* LEFT SIDE: Heading & Description */}
                    <div data-animate className="flex-1 lg:sticky lg:top-24">
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[var(--heading)] leading-tight mb-6"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Driven by Purpose,
                            Focused on Impact
                        </h2>

                        <p
                            className="text-base sm:text-lg text-[var(--paragraph)] leading-relaxed"
                            style={{ fontFamily: "var(--font-body)" }}
                        >
                            We combine strategy, creativity, and <br/> technology to build digital solutions
                            that make a real difference.
                        </p>
                    </div>

                    {/* RIGHT SIDE: Mission & Vision Cards in ONE ROW (side by side) */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Mission Card - Icon and content in same row */}
                            <div
                                data-animate
                                className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E8E0FF] hover:border-[var(--primary)]/20 h-full"
                            >
                                <div className="flex flex-row items-start gap-4">
                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-xl bg-[#F3EFFE] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-[var(--heading)] mb-3">
                                            Our Mission
                                        </h3>
                                        <p className="text-sm md:text-base text-[var(--paragraph)] leading-relaxed">
                                            To empower business with innovative digital solutions that drive growth,
                                            efficiency and long-term success.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Vision Card - Icon and content in same row */}
                            <div
                                data-animate
                                className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E8E0FF] hover:border-[var(--primary)]/20 h-full"
                            >
                                <div className="flex flex-row items-start gap-4">
                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-xl bg-[#F3EFFE] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-[var(--heading)] mb-3">
                                            Our Vision
                                        </h3>
                                        <p className="text-sm md:text-base text-[var(--paragraph)] leading-relaxed">
                                            To become a trusted global digital partner for brands seeking innovation
                                            and sustainable growth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
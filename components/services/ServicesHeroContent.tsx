"use client";

import {ArrowRight, TrendingUp, Target, LifeBuoy, Headset} from "lucide-react";

export default function ServicesHeroContent() {
    const features = [
        {
            icon: <Target className="w-6 h-6 text-[var(--primary)]" />,
            title: "Tailored for You",
            description: "Solutions customized to fit your unique goals",
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-[var(--primary)]" />,
            title: "Result Driven",
            description: "Focused on measurable impact and growth",
        },
        {
            icon: <Headset className="w-6 h-6 text-[var(--primary)]" />,
            title: "End-to-End Support",
            description: "Complete support from start to finish",
        },
    ];

    return (
        <div className="w-full flex flex-col">
            {/* Tag */}
            <div data-animate className="flex items-center mb-5 lg:mb-6">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[22px] text-xs font-semibold uppercase bg-[#F3EFFE] text-[var(--primary)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"/>
                    Services
                </span>
            </div>

            {/* Heading */}
            <h1
                data-animate
                className="text-[42px] sm:text-[48px] lg:text-[56px] font-black leading-[1.1] tracking-0 mb-4 text-[var(--heading)]"
                style={{fontFamily: "var(--font-heading)"}}
            >
                Powerful Solutions
                Built for{" "}
                <span className="text-[var(--primary)] relative inline-block">
                    Your Growth
                </span>
            </h1>

            {/* Description */}
            <p
                data-animate
                className="text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed mb-10 max-w-[500px] text-[var(--paragraph)]"
                style={{fontFamily: "var(--font-body)"}}
            >
                We deliver end-to-end digital solutions that combine
                creativity, technology and strategy to help your business
                grow faster and achieve lasting success.
            </p>

            <div
                data-animate
                className="grid grid-cols-1 sm:grid-cols-3 gap-0 overflow-hidden"
            >
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`group p-4 transition-all duration-300 hover:bg-[#FBF9FF] ${index !== 2 ? 'sm:border-r' : ''} border-[#E8E0FF]`}
                    >
                        <div className="flex flex-row items-start gap-4">
                            {/* Left Column - Icon */}
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-[#F3EFFE] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Right Column - Title and Description */}
                            <div className="flex-1">
                                {/* Title */}
                                <h3 className="text-lg font-bold text-[var(--heading)] mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-[var(--paragraph)] leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
"use client";

import React, { useRef } from "react";
import checkIcon from "@/public/images/icons/check-icon.png";
import Image from "next/image";
import { SERVICES } from "@/constants/services";

export default function ServicesSection() {
    const sectionRef = useRef<HTMLElement>(null);

    const CheckIcon = () => (
        <div className="flex items-center justify-center flex-shrink-0 w-5 h-5">
            <Image src={checkIcon} alt="Check" width={20} height={20} className="object-contain" />
        </div>
    );

    // Reusable card for mobile — image as background, content overlaid on top
    const MobileCard = ({ service }: { service: typeof SERVICES[0] }) => (
        <div
            className="relative rounded-[18px] overflow-hidden border border-[#15102E] min-h-[460px] transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#7C3AED]/10">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40"/>
            </div>

            {/* Content on top */}
            <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
                <h3 className="text-[#F8FAFC] text-[18px] font-semibold mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-[#A4A4A4] text-[14px] sm:text-[15px] leading-relaxed mb-4 sm:mb-6 max-w-xs">{service.description}</p>

                <div className="flex flex-col gap-2 sm:gap-3 mt-auto">
                    {service.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <CheckIcon/>
                            <span className="text-[#A4A4A4] text-[14px] sm:text-[15px]">{f}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <section ref={sectionRef} className="w-full py-[130px] md:py-16 lg:pt-[146px] lg:pb-24 overflow-hidden"
                 id="services">
            <div className="px-4 sm:px-5 lg:px-[90px]">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
                    <div className="flex items-center justify-center gap-3 mb-[26px]">
                        <p className="text-[#7C3AED] uppercase tracking-[3px] text-xs font-semibold">
                            OUR SERVICES
                        </p>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6 md:mb-[48px] px-4">
                        Solutions That{" "}
                        <span className="bg-gradient-to-r from-[#B42CD5] to-[#7C3AED] bg-clip-text text-transparent whitespace-nowrap">
                            Drive Results
                        </span>
                    </h2>

                    <p className="text-[#7D7D7D] text-sm sm:text-base leading-relaxed px-4 max-w-full mx-auto">
                        Growth isn't accidental; it's engineered. We deliver end-to-end digital solutions—from custom Web Development and strategic Social Media Marketing to expert IT Consulting—designed to scale your business faster and secure lasting success.
                    </p>
                </div>

                {/* MOBILE: stacked image-background cards */}
                <div className="lg:hidden flex flex-col gap-4 md:gap-6">
                    {SERVICES.map((service) => (
                        <MobileCard key={service.title} service={service} />
                    ))}
                </div>

                {/* DESKTOP: original 2-column layout */}
                <div className="hidden lg:grid grid-cols-2 gap-4 md:gap-6">
                    {/* LEFT CARD */}
                    <div className="relative rounded-[18px] overflow-hidden h-full min-h-[800px] group border border-[#15102E] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#7C3AED]/20">
                        <div className="absolute inset-0">
                            <Image src={SERVICES[0].image} alt={SERVICES[0].imageAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/30 to-slate-950/60" />
                        </div>
                        <div className="relative z-10 p-8 flex flex-col justify-start h-full">
                            <h3 className="text-[#F8FAFC] text-[18px] font-semibold mb-[27px]">{SERVICES[0].title}</h3>
                            <p className="text-[#A4A4A4] text-[18px] mb-[42px]">{SERVICES[0].description}</p>
                            <div className="flex flex-col gap-10">
                                {SERVICES[0].features.map((f, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckIcon />
                                        <span className="text-[#A4A4A4] text-[18px]">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col gap-4 md:gap-6">
                        {SERVICES.slice(1).map((service) => (
                            <div key={service.title}
                                 className="relative rounded-[18px] overflow-hidden h-full min-h-[240px] group border border-[#15102E] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#7C3AED]/20">
                                <div className="absolute inset-0">
                                    <Image
                                        src={service.image}
                                        alt={service.imageAlt}
                                        fill
                                        className={`object-cover ${service.imagePosition || "object-center"} transition-transform duration-700 group-hover:scale-105`}
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/50 to-transparent"/>
                                </div>
                                <div
                                    className="relative z-10 p-6 lg:p-8 flex flex-col justify-center h-full lg:max-w-[70%] xl:max-w-[60%]">
                                    <h3 className="text-[#F8FAFC] text-[18px] font-semibold mb-4 lg:mb-[27px]">{service.title}</h3>
                                    <p className="text-[#A4A4A4] text-[15px] lg:text-[18px] mb-6 lg:mb-[42px]">{service.description}</p>
                                    <div className="space-y-2 lg:space-y-2.5">
                                        {service.features.map((f, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <CheckIcon/>
                                                <span className="text-[#A4A4A4] text-[15px] lg:text-[18px]">{f}</span>
                                            </div>
                                        ))}
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
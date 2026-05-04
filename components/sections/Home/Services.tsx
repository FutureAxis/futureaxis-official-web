// components/Services.tsx
"use client";

import StartNowButton from "@/components/buttons/StartNowButton";
import ViewOurWorkButton from "@/components/buttons/ViewOurWorkButton";
import {IoDocumentTextOutline, IoDocumentTextSharp, IoMegaphoneOutline} from "react-icons/io5";
import {FiMonitor} from "react-icons/fi";
import {TbSpeakerphone} from "react-icons/tb";
import {FaCheck} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa6";
import Link from "next/link";
import {useEffect, useRef} from "react";



const services = [
    {
        title: "Web Design & Development",
        description: "Web design and development like building a digital house for your business.",
        features: [
            "Visually stunning interfaces",
            "User-friendly flow",
            "Looks great on any device",
        ],
        icon: <FiMonitor className="h-8 w-8 text-[var(--primary)]" />,
        link: "/services/web-design",
    },
    {
        title: "Social Media Marketing",
        description: "We grow your brand with engaging content, targeted strategies and campaigns.",
        features: [
            "Reach the right audience",
            "Boost engagement",
            "Drive measurable results",
        ],
        icon: <TbSpeakerphone className="h-8 w-8 text-[var(--primary)]" />,
        link: "/services/web-design",
    },
    {
        title: "IT Consulting",
        description: "We provide expert IT guidance to help you optimize systems, improve efficiency for success.",
        features: [
            "Tailored IT solutions",
            "Improved efficiency",
            "Future-ready strategy",
        ],
        icon: <IoDocumentTextSharp className="h-8 w-8 text-[var(--primary)]" />,
        link: "/services/web-design",
    },
];

export default function Services() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const items = el.querySelectorAll<HTMLElement>("[data-animate]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        items.forEach((item, i) => {
                            item.style.opacity = "0";
                            item.style.transform = "translateY(30px)";

                            setTimeout(() => {
                                item.style.transition =
                                    "opacity 0.6s ease, transform 0.6s ease";
                                item.style.opacity = "1";
                                item.style.transform = "translateY(0)";
                            }, i * 120);
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 mx-auto bg-[#D9CFFF26]">
            <div className="container mx-auto 2xl:max-w-[1420px] px-6 sm:px-10 lg:px-20">
                {/* Header Section - Flex row for desktop */}
                <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 lg:mb-20 lg:flex-row lg:items-end">
                    {/* Left side - Heading */}
                    <div className="text-left">
                        <div className="inline-block text-sm font-medium text-[var(--primary)] mb-5 uppercase leading-[100%] tracking-[0.01em]">
                            Our Services
                        </div>
                        <h2 className="font-heading text-3xl font-semibold text-[var(--heading)] md:text-4xl lg:text-[36px] leading-[130%] tracking-0">
                            Find out what we can do for you
                        </h2>
                    </div>

                    {/* Right side - Button on desktop only */}
                    <div className="hidden lg:block">
                        <ViewOurWorkButton href="/portfolio" label="Explore Our Services" className="ml-4" />
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:p-8"
                            style={{
                                boxShadow: "0 4px 20px rgba(109, 40, 217, 0.15)",
                                border: "1px solid rgba(109, 40, 217, 0.1)",
                            }}
                        >
                            {/* Icon */}
                            <div
                                className="mb-[35px] inline-flex rounded-full bg-[var(--background-purple)]/20 p-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[var(--accent)]/30">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="font-heading text-base lg:text-[22px] font-semibold text-[var(--heading)] mb-[28px] tracking-[0.01em] leading-[100%] capitalize">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="mb-[28px] text-sm leading-[100%] tracking-0 text-[var(--paragraph)] md:text-[18px]">
                                {service.description}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-2 mb-[45px]">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}
                                        className="flex items-start gap-5 text-sm text-[var(--text-muted)] md:text-base">
                                        <div
                                            className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)]">
                                            <FaCheck className="h-3 w-3 text-white"/>
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <Link
                                    href={service.link}
                                    className="group/btn inline-flex items-center gap-[14px] text-base font-semibold text-[var(--primary)] transition-all duration-300 hover:gap-3"
                                >
                                    <span>Learn More</span>
                                    <FaArrowRight
                                        size={14}
                                        className="transition-all duration-300 group-hover/btn:translate-x-2 group-hover/btn:scale-110"
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Button - Below cards on mobile AND desktop */}
                <div className="mt-12 text-center flex justify-start md:mt-16 lg:hidden">
                    <StartNowButton href="/services" label="MORE INFO"/>
                </div>
            </div>
        </section>
    );
}
"use client";

import { useEffect, useRef, useState } from "react";
import {BsGraphUpArrow} from "react-icons/bs";
import {FaLightbulb, FaSearch} from "react-icons/fa";
import {MdEditDocument} from "react-icons/md";
import {PiCodeBold} from "react-icons/pi";

const steps = [
    {
        icon: FaSearch ,
        label: "Discover",
        description: "Research & understand your goals",
    },
    {
        icon: FaLightbulb ,
        label: "Strategize",
        description: "Plan the best path forward",
    },
    {
        icon: MdEditDocument ,
        label: "Design",
        description: "Craft beautiful, intuitive interfaces",
    },
    {
        icon: PiCodeBold ,
        label: "Development",
        description: "Build with clean, scalable code",
    },
    {
        icon: BsGraphUpArrow ,
        label: "Scale",
        description: "Grow and optimise over time",
    },
];

export default function OurProcess() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full py-20 lg:py-28 bg-[#D9CFFF26]"
        >
            <div className="mx-auto 2xl:max-w-[1420px] px-6 sm:px-10 lg:px-20">

                {/* ── Header ── */}
                <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
                    <span
                        className="text-sm font-medium text-[var(--primary)] mb-5 uppercase leading-[100%] tracking-[0.01em]"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        Our Process
                    </span>
                    <h2
                        className="font-heading text-3xl font-semibold text-[var(--heading)] md:text-4xl lg:text-[36px] leading-[130%] tracking-0"
                        style={{ color: "var(--heading)" }}
                    >
                        Transforming Ideas into
                        Measurable Impact
                    </h2>
                </div>

                {/* ── Steps — desktop horizontal ── */}
                <div className="hidden lg:flex items-start justify-between relative">

                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        const isLast = i === steps.length - 1;
                        const delay = `${i * 120}ms`;

                        return (
                            <div key={step.label} className="flex items-start flex-1 relative">

                                {/* Step content */}
                                <div
                                    className="flex flex-col items-center text-center flex-1"
                                    style={{
                                        opacity: visible ? 1 : 0,
                                        transform: visible ? "translateY(0)" : "translateY(24px)",
                                        transition: `opacity 0.55s ease ${delay}, transform 0.55s ease ${delay}`,
                                    }}
                                >
                                    {/* Icon circle - no border, only bottom shadow */}
                                    <div
                                        className="relative flex items-center justify-center rounded-full mb-[45px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                        style={{
                                            width: "120px",
                                            height: "120px",
                                            background: "white",
                                            boxShadow: visible ? "0 8px 24px rgba(109,40,217,0.15)" : "none",
                                            transition: `box-shadow 0.4s ease ${delay}`,
                                        }}
                                    >
                                        <Icon size={48} color="var(--primary)" />
                                    </div>

                                    {/* Label */}
                                    <p
                                        className="text-base font-bold mb-1.5"
                                        style={{ color: "var(--heading)", fontFamily: "var(--font-heading)" }}
                                    >
                                        {step.label}
                                    </p>
                                </div>

                                {/* Connecting line + dot — centered between circles */}
                                {!isLast && (
                                    <div
                                        className="absolute"
                                        style={{
                                            top: "60px", /* Half of 120px circle height */
                                            left: "calc(50% + 60px)",
                                            right: "calc(-50% + 60px)",
                                            height: "3px",
                                            display: "flex",
                                            alignItems: "center",
                                            transform: "translateY(-50%)",
                                        }}
                                    >
                                        {/* Line left half */}
                                        <div
                                            style={{
                                                flex: 1,
                                                height: "3px",
                                                background: "rgba(109,40,217,0.25)",
                                                transformOrigin: "left",
                                                transform: visible ? "scaleX(1)" : "scaleX(0)",
                                                transition: `transform 0.5s ease ${delay}`,
                                                borderRadius: "2px",
                                            }}
                                        />
                                        {/* Center dot */}
                                        <div
                                            style={{
                                                width: "10px",
                                                height: "10px",
                                                borderRadius: "50%",
                                                background: "var(--primary)",
                                                flexShrink: 0,
                                                margin: "0 2px",
                                                opacity: visible ? 0.8 : 0,
                                                transform: visible ? "scale(1)" : "scale(0)",
                                                transition: `opacity 0.4s ease ${delay}, transform 0.4s ease ${delay}`,
                                                boxShadow: "0 2px 6px rgba(109,40,217,0.3)",
                                            }}
                                        />
                                        {/* Line right half */}
                                        <div
                                            style={{
                                                flex: 1,
                                                height: "3px",
                                                background: "rgba(109,40,217,0.25)",
                                                transformOrigin: "right",
                                                transform: visible ? "scaleX(1)" : "scaleX(0)",
                                                transition: `transform 0.5s ease ${delay}`,
                                                borderRadius: "2px",
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* ── Steps — mobile vertical ── */}
                <div className="flex lg:hidden flex-col gap-6">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        const isLast = i === steps.length - 1;
                        const delay = `${i * 100}ms`;

                        return (
                            <div key={step.label} className="flex gap-4 items-start">
                                {/* Left: icon + vertical line */}
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <div
                                        className="flex items-center justify-center rounded-full"
                                        style={{
                                            width: "64px",
                                            height: "64px",
                                            background: "white",
                                            boxShadow: "0 8px 20px rgba(109,40,217,0.12)",
                                            opacity: visible ? 1 : 0,
                                            transform: visible ? "scale(1)" : "scale(0.8)",
                                            transition: `all 0.45s ease ${delay}`,
                                        }}
                                    >
                                        <Icon size={28} color="var(--primary)" />
                                    </div>
                                    {!isLast && (
                                        <div
                                            style={{
                                                width: "2px",
                                                height: "32px",
                                                marginTop: "8px",
                                                background: "linear-gradient(to bottom, rgba(109,40,217,0.3), rgba(109,40,217,0.05))",
                                            }}
                                        />
                                    )}
                                </div>

                                {/* Right: text */}
                                <div
                                    className="pt-2"
                                    style={{
                                        opacity: visible ? 1 : 0,
                                        transform: visible ? "translateX(0)" : "translateX(16px)",
                                        transition: `all 0.5s ease ${delay}`,
                                    }}
                                >
                                    <p
                                        className="text-base font-bold"
                                        style={{ color: "var(--heading)", fontFamily: "var(--font-heading)" }}
                                    >
                                        {step.label}
                                    </p>
                                    <p
                                        className="text-sm text-[var(--paragraph)] mt-1"
                                        style={{ fontFamily: "var(--font-body)" }}
                                    >
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
"use client";

import React, { useEffect, useRef, useState } from "react";
import GradientButton from "@/components/buttons/GradientButton";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

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

    return (
        <section ref={sectionRef} className="w-full pt-3 pb-[60px]">
            <div className="px-5 lg:px-[90px]">
                <div
                    className={`text-center max-w-4xl mx-auto transition-all duration-1000 transform ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-12"
                    }`}
                >
                    <h2 className="text-base md:text-[25px] font-semibold text-white leading-[130%] mb-[43px]">
                        Ready to Build Something  Exceptional Together ?
                    </h2>

                    <GradientButton className="inline-flex items-center gap-2 text-lg px-8 py-3">
                        Let's Talk
                    </GradientButton>
                </div>
            </div>
        </section>
    );
}
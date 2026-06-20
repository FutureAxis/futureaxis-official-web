"use client";

import React, { useRef } from "react";
import GradientButton from "@/components/buttons/GradientButton";
import {useRouter} from "next/navigation";

export default function CTASection() {
    const sectionRef = useRef<HTMLElement>(null);
    const router = useRouter();

    const navigateToContact = () => {
        router.push('/contact');
    };

    return (
        <section ref={sectionRef} className="w-full pt-3 pb-[60px]">
            <div className="px-5 lg:px-[90px]">
                <div className="text-center mx-auto">
                    <h2 className="text-lg sm:text-xl md:text-[25px] font-semibold text-white leading-[130%] mb-[43px] max-w-[280px] sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
                        Ready to Build Something Exceptional Together?
                    </h2>

                    <GradientButton
                        onClick={navigateToContact}
                        className="inline-flex items-center gap-2 text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3">
                        Let's Talk
                    </GradientButton>
                </div>
            </div>
        </section>
    );
}
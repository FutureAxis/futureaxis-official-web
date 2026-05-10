"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    staggerDelay?: number;
}

export default function AnimatedSection({
                                            children,
                                            className = "",
                                            delay = 100,
                                            staggerDelay = 140
                                        }: AnimatedSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const items = el.querySelectorAll<HTMLElement>("[data-animate]");
        items.forEach((item, i) => {
            item.style.opacity = "0";
            item.style.transform = "translateY(20px)";
            setTimeout(() => {
                item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }, delay + staggerDelay * i);
        });
    }, [delay, staggerDelay]);

    return (
        <div ref={sectionRef} className={className}>
            {children}
        </div>
    );
}
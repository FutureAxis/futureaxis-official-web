"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface GradientButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    showArrow?: boolean;
}

export default function GradientButton({
        children,
        onClick,
        className = "",
        showArrow = true
    }: GradientButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`px-5 sm:px-[22px] py-2.5 sm:py-[9px] rounded-[6px] text-white text-sm sm:text-base font-medium tracking-0 leading-[100%] transition-all duration-300 hover:opacity-90 hover:scale-105 inline-flex items-center gap-2 sm:gap-3 ${className}`}
            style={{
                background: "linear-gradient(90deg, #7C3AED 0.24%, #6A2187 117.12%)",
            }}
        >
            {children}
            {showArrow && <ArrowRight size={16} className="sm:w-[16px] sm:h-[16px] w-[12px] h-[12px]" />}
        </button>
    );
}
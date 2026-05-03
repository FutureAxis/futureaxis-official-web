"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface StartNowButtonProps {
    href?: string;
    label?: string;
    className?: string;
}

export default function StartNowButton({
        href = "/contact",
        label = "Contact Us",
        className = "",
   }: StartNowButtonProps) {
    return (
        <Link
            href={href}
            className={`group inline-flex items-center gap-3 h-[45px] px-6 rounded-[9px] bg-[var(--primary)] shadow-[0_4px_14px_rgba(109,40,217,0.35)] transition-all duration-200 hover:opacity-90 hover:gap-4 ${className}`}
        >
            <span
                className="text-sm font-semibold text-white tracking-[0.01em]"
                style={{ fontFamily: "var(--font-heading)" }}
            >
                {label}
            </span>
            <FaArrowRight
                size={13}
                color="white"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
        </Link>
    );
}
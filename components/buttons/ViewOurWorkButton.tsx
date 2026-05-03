"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface ViewOurWorkButtonProps {
    href?: string;
    label?: string;
    className?: string;
}

export default function ViewOurWorkButton({
        href = "/portfolio",
        label = "View Our Work",
        className = "",
    }: ViewOurWorkButtonProps) {
    return (
        <Link
            href={href}
            className={`group inline-flex items-center gap-3 h-[48px] px-8 rounded-[10px] bg-white shadow-[0px_4px_4px_0px_#00000040] transition-all duration-300 hover:bg-[var(--accent)] hover:gap-4 ${className}`}
        >
            <span
                className="text-sm font-semibold text-[var(--text-muted)] tracking-[0.01em] transition-colors duration-300 group-hover:text-white"
                style={{ fontFamily: "var(--font-heading)" }}
            >
                {label}
            </span>
            <FaArrowRight
                size={13}
                color="var(--primary)"
                className="transition-all duration-300 group-hover:text-white group-hover:translate-x-1"
                style={{ color: "var(--primary)" }}
            />
        </Link>
    );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import StartNowButton from "@/components/buttons/StartNowButton";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-[9999] w-full transition-all duration-500"
            style={{
                background: scrolled
                    ? "rgba(255,255,255,0.85)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(16px)" : "blur(16px)",
                WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
                borderBottom: scrolled
                    ? "1px solid rgba(109,40,217,0.08)"
                    : "1px solid transparent",
                paddingTop: scrolled ? "0" : "20px",
            }}
        >
            <div className="mx-auto 2xl:max-w-[1420px] px-10 lg:px-16 xl:px-20">
                <div
                    className="flex items-center justify-between transition-all duration-500"
                    style={{ height: scrolled ? "68px" : "80px" }}
                >
                    {/* ── Logo ── */}
                    <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{ background: "var(--primary)" }}
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 2L14 6V10L8 14L2 10V6L8 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                                <circle cx="8" cy="8" r="2" fill="white" />
                            </svg>
                        </div>
                        <span
                            className="text-base font-semibold transition-colors duration-500"
                            style={{
                                color: "var(--secondary)",
                                fontFamily: "var(--font-heading)",
                            }}
                        >
                            FutureAxis
                        </span>
                    </Link>

                    {/* ── Desktop: Nav + Button ── */}
                    <div className="hidden lg:flex items-center gap-16">
                        <nav className="flex items-center gap-16">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="relative flex flex-col items-center gap-2 text-base font-semibold leading-[100%] tracking-0 transition-colors duration-200 hover:text-[var(--primary)]"
                                        style={{
                                            color: isActive ? "var(--primary)" : "var(--text-muted)",
                                            fontFamily: "var(--font-body)",
                                        }}
                                    >
                                        {link.label}
                                        <span
                                            className="w-2 h-2 rounded-full transition-all duration-200"
                                            style={{
                                                background: isActive ? "var(--primary)" : "transparent",
                                            }}
                                        />
                                    </Link>
                                );
                            })}
                        </nav>

                        <StartNowButton href="/contact" label="Contact Us" />
                    </div>

                    {/* ── Mobile hamburger ── */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                            style={{ background: "var(--secondary)" }}
                        />
                        <span
                            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                            style={{ background: "var(--secondary)" }}
                        />
                        <span
                            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                            style={{ background: "var(--secondary)" }}
                        />
                    </button>
                </div>
            </div>

            {/* ── Mobile dropdown ── */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="bg-white/95 backdrop-blur-md mx-4 rounded-2xl shadow-lg px-4 py-7 flex flex-col gap-1">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-semibold leading-[100%] tracking-0 transition-colors"
                                style={{
                                    color: isActive ? "var(--primary)" : "var(--text-muted)",
                                    background: isActive ? "rgba(109,40,217,0.06)" : "transparent",
                                }}
                            >
                                {link.label}
                                {isActive && (
                                    <span
                                        className="w-1.5 h-1.5 rounded-full"
                                        style={{ background: "var(--primary)" }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                    <div className="mt-1 px-1">
                        <StartNowButton href="/contact" label="Contact Us" />
                    </div>
                </div>
            </div>
        </header>
    );
}
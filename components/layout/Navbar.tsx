// components/layout/Navbar.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import GradientButton from "@/components/buttons/GradientButton";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState(60);
    const pathname = usePathname();
    const navbarRef = useRef<HTMLElement>(null);

    const navItems = [
        { id: "home", label: "Home", href: "/" },
        { id: "team", label: "Our Team", href: "/team" },
        { id: "contact", label: "Contact", href: "/contact" },
    ];

    // Determine active item based on current path
    const getActiveItem = () => {
        if (pathname === "/") return "home";
        if (pathname === "/team") return "team";
        if (pathname === "/contact") return "contact";
        return "home";
    };

    const activeItem = getActiveItem();

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Get navbar height dynamically
    useEffect(() => {
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current.offsetHeight);
        }

        const handleResize = () => {
            if (navbarRef.current) {
                setNavbarHeight(navbarRef.current.offsetHeight);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <nav
                ref={navbarRef}
                className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300 ${
                    isScrolled || isMobileMenuOpen ? "bg-black/80 backdrop-blur-md" : "bg-black/20 backdrop-blur-sm"
                }`}
                style={{ width: "100%", maxWidth: "100vw", overflowX: "hidden" }}
            >
                {/* Inner container to control width */}
                <div className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[90px] py-5 md:py-6">
                    {/* Logo / Brand */}
                    <a href="/" className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:opacity-80 transition-opacity whitespace-nowrap">
                        FutureAxis
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-[30px]">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                className="relative text-white hover:text-[#7C3AED] text-sm font-medium transition-colors duration-200 pb-2"
                            >
                                {item.label}
                                {activeItem === item.id && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7C3AED] rounded-full" />
                                )}
                            </a>
                        ))}
                        <GradientButton>Let's Talk</GradientButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white focus:outline-none z-50 relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay - No gap */}
            <div
                className={`fixed left-0 right-0 z-40 bg-black/95 backdrop-blur-lg transition-all duration-300 md:hidden ${
                    isMobileMenuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible pointer-events-none"
                }`}
                style={{ top: `${navbarHeight}px`, bottom: 0, width: "100%", maxWidth: "100vw" }}
            >
                <div className="w-full h-full overflow-y-auto">
                    <div className="flex flex-col px-4 sm:px-6 py-6 gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                }}
                                className="text-white hover:text-[#7C3AED] text-lg font-medium transition-colors duration-200 py-3 border-b border-white/10 w-full"
                            >
                                {item.label}
                                {activeItem === item.id && (
                                    <span className="block w-12 h-0.5 bg-[#7C3AED] rounded-full mt-2" />
                                )}
                            </a>
                        ))}
                        <div className="pt-4">
                            <GradientButton>Let's Talk</GradientButton>
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer to prevent content from going under fixed navbar */}
            <div className="h-[60px] sm:h-[68px] md:h-[73px]" />
        </>
    );
}
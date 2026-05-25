// components/layout/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import GradientButton from "@/components/buttons/GradientButton";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);

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

    const navItems = [
        { id: "home", label: "Home", href: "#" },
        { id: "team", label: "Our Team", href: "#" },
        { id: "contact", label: "Contact", href: "#" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between px-5 lg:px-[90px] py-5 transition-all duration-300 ${
                    isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
                }`}
            >
                {/* Logo / Brand */}
                <a href="#" className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                    FutureAxis
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-[30px]">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            onClick={() => setActiveItem(item.id)}
                            className="relative text-white hover:text-[#7C3AED] text-sm font-medium leading-[100%] tracking-0 transition-colors duration-200 pb-2"
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
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg transition-all duration-300 md:hidden ${
                    isMobileMenuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                }`}
                style={{ top: "73px" }}
            >
                <div className="flex flex-col px-[90px] py-8 gap-6">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            onClick={() => {
                                setActiveItem(item.id);
                                setIsMobileMenuOpen(false);
                            }}
                            className="text-white hover:text-[#7C3AED] text-lg font-medium leading-[100%] tracking-0 transition-colors duration-200 py-3 border-b border-white/10 w-full"
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

            <div className="h-[73px]" />
        </>
    );
}
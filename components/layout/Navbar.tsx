"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SCROLL_THRESHOLD } from "@/constants/navigation";
import Link from "next/link";
import Image from "next/image";
import {CONTACT_INFO} from "@/constants/contact";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Determine active item based on current path
    const getActiveItem = () => {
        if (pathname === "/") return "home";
        if (pathname === "/team") return "team";
        if (pathname === "/contact") return "contact";
        return "home";
    };

    const activeItem = getActiveItem();

    // Add dark shade on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change - Fixed version
    const previousPathname = React.useRef(pathname);

    // Close mobile menu on route change
    useEffect(() => {
        if (previousPathname.current !== pathname) {
            setIsMobileMenuOpen(false);
            previousPathname.current = pathname;
        }
    }, [pathname]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
                    isScrolled || isMobileMenuOpen
                        ? "bg-black/80 backdrop-blur-md shadow-md"
                        : "bg-black md:bg-transparent"
                }`}
                style={{ width: "100%", maxWidth: "100vw" }}
            >
                {/* Inner container to control width */}
                <div className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[90px] py-3">
                    {/* Logo */}
                    <Link href="/" className="relative hover:opacity-80 transition-opacity">
                        <Image
                            src="https://res.cloudinary.com/denec4g4s/image/upload/v1782101240/future_axis/logo/logo_gjgrof.png"
                            alt="Future Axis"
                            width={200}
                            height={100}
                            className="w-auto h-14 md:h-20 object-contain"
                            priority
                        />
                    </Link>


                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                className="relative text-white/90 hover:text-white text-sm font-medium transition-colors duration-200"
                            >
                                {item.label}
                                {activeItem === item.id && (
                                    <span
                                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500 rounded-full"/>
                                )}
                            </a>
                        ))}
                        <a
                            href={`tel:${CONTACT_INFO.phone}`}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                            Let's Talk
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white focus:outline-none relative z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed left-0 right-0 z-40 bg-black/95 backdrop-blur-lg transition-all duration-300 md:hidden ${
                    isMobileMenuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible pointer-events-none"
                }`}
                style={{ top: "55px", bottom: 0, width: "100%", maxWidth: "100vw" }}
            >
                <div className="w-full h-full overflow-y-auto">
                    <div className="flex flex-col px-4 sm:px-6 py-6 gap-2">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                }}
                                className="text-white hover:text-purple-400 text-lg font-medium transition-colors duration-200 py-3 border-b border-white/10 w-full"
                            >
                                {item.label}
                                {activeItem === item.id && (
                                    <span className="block w-12 h-0.5 bg-purple-500 rounded-full mt-1" />
                                )}
                            </a>
                        ))}
                        <div className="pt-4">
                            <a
                                href={`tel:${CONTACT_INFO.phone}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md text-sm font-medium w-full block text-center transition-colors duration-200"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
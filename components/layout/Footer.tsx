"use client";

import Link from "next/link";
import {MdLocationPin, MdPhone} from "react-icons/md";
import { IoMail } from "react-icons/io5";
import {
    SOCIAL_LINKS,
    QUICK_LINKS,
    SERVICE_LINKS,
    CONTACT_INFO,
    FOOTER_CONFIG,
} from "@/constants/footer";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-black relative z-20">
            <div className="px-5 lg:px-[90px] py-12 lg:py-16">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="sm:col-span-2 lg:col-span-5 space-y-4">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            {FOOTER_CONFIG.companyName}
                        </h2>
                        <p className="text-[#7D7D7D] text-base font-normal leading-relaxed max-w-sm">
                            {FOOTER_CONFIG.tagline}
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-3 pt-2">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-white bg-[#15102E] hover:bg-[#7C3AED] hover:scale-110 transition-all duration-300"
                                    aria-label={social.ariaLabel}
                                >
                                    <social.icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="sm:col-span-1 lg:col-span-2 space-y-4">
                        <h3 className="text-white font-semibold text-lg">Quick Links</h3>
                        <ul className="space-y-2">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[#A4A4A4] text-base font-normal hover:text-purple-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="sm:col-span-1 lg:col-span-2 space-y-4">
                        <h3 className="text-white font-semibold text-lg">Services</h3>
                        <ul className="space-y-2">
                            {SERVICE_LINKS.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="text-[#A4A4A4] text-base font-normal hover:text-purple-400 transition-colors duration-200"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="sm:col-span-2 lg:col-span-3 space-y-4">
                        <h3 className="text-white font-semibold text-lg">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-[#A4A4A4] text-base font-normal break-all sm:break-normal">
                                <IoMail className="w-4 h-4 text-purple-400 flex-shrink-0"/>
                                <a
                                    href={`mailto:${CONTACT_INFO.email}`}
                                    className="hover:text-purple-400 transition-colors duration-200"
                                >
                                    {CONTACT_INFO.email}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-[#A4A4A4] text-base font-normal">
                                <MdPhone className="w-4 h-4 text-purple-400 flex-shrink-0"/>
                                <a
                                    href={`tel:${CONTACT_INFO.phone}`}
                                    className="hover:text-purple-400 transition-colors duration-200"
                                >
                                    {CONTACT_INFO.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-[#A4A4A4] text-base font-normal">
                                <MdLocationPin className="w-4 h-4 text-purple-400 flex-shrink-0"/>
                                <span className="hover:text-purple-400 transition-colors duration-200 cursor-pointer">
                                    {CONTACT_INFO.location}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-purple-500/30">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-[#676767] text-sm font-medium text-center">
                            Copyright © {currentYear} {FOOTER_CONFIG.copyrightText}. All rights reserved.
                        </p>
                        <Link
                            href="/privacy-policy"
                            className="text-[#676767] text-sm font-medium hover:text-purple-400 transition-colors duration-200"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
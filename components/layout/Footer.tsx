"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { IoMail } from "react-icons/io5";

export default function Footer() {
    return (
        <footer className="w-full bg-black">
            <div className="px-[90px] py-12 lg:py-16">
                {/* Main Footer Grid - Custom column widths */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

                    {/* Brand Section - Wider (5 columns) */}
                    <div className="md:col-span-5 space-y-4">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            FutureAxis
                        </h2>
                        <p className="text-[#7D7D7D] text-base font-normal leading-[100%] tracking-0 max-w-sm">
                            FutureAxis delivers high-impact, scalable digital solutions to accelerate your business growth.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="#"
                                className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-white bg-[#15102E] hover:bg-[#7C3AED] hover:text-white transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <FaFacebookF size={16} />
                            </a>
                            <a
                                href="#"
                                className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-white bg-[#15102E] hover:bg-[#7C3AED] hover:text-white transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={16} />
                            </a>
                            <a
                                href="#"
                                className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-white bg-[#15102E] hover:bg-[#7C3AED] hover:text-white transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links - Smaller (2.5 columns) */}
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-white font-semibold text-lg">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-[#A4A4A4] text-base font-normal hover:text-purple-400 transition-colors duration-200">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#A4A4A4] text-base font-normal hover:text-purple-400 transition-colors duration-200">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#A4A4A4] text-base font-normal hover:text-purple-400 transition-colors duration-200">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#A4A4A4] text-base font-normal hover:text-purple-400 transition-colors duration-200">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services - Smaller (2.5 columns) */}
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-white font-semibold text-lg">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-[#A4A4A4] text-base font-normal hover:text-purple-400 transition-colors duration-200">
                                    Web Development
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#A4A4A4] text-base font-normal hover:text-purple-400 transition-colors duration-200">
                                    Social Media Marketing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#A4A4A4] text-base font-normal hover:text-purple-400 transition-colors duration-200">
                                    IT Consulting
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us - Smaller (2.5 columns) */}
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-white font-semibold text-lg">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-[#A4A4A4] text-base font-normal cursor-pointer">
                                <IoMail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                                <span>futureaxisdigitals.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#A4A4A4] text-base font-normal cursor-pointer">
                                <MdPhone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                                <span>+61411749417</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar - Full width border top */}
                <div className="mt-12 pt-6 border-t border-purple-500/30 w-full">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-[#676767] text-sm font-medium">
                            Copyright © 2026 FutureAxis. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-[#676767] text-sm font-medium hover:text-purple-400 transition-colors duration-200 cursor-pointer">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
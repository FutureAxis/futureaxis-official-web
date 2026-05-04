"use client";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import {MdPhone} from "react-icons/md";
import {IoMail} from "react-icons/io5";

export default function Footer() {
    return (
        <footer className="w-full bg-[#D9CFFF26]">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

                    {/* LOGO */}
                    <div className="text-2xl font-bold text-purple-600">
                        FutureAxis
                    </div>

                    {/* NAV */}
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                        <a href="#" className="hover:text-purple-600 transition">Home</a>
                        <a href="#" className="hover:text-purple-600 transition">About</a>
                        <a href="#" className="hover:text-purple-600 transition">Service</a>
                        <a href="#" className="hover:text-purple-600 transition">Projects</a>
                    </div>

                    {/* CONTACT + SOCIAL */}
                    <div className="flex items-center gap-6 text-sm text-gray-600 flex-wrap justify-center">

                        {/* Email */}
                        <div className="flex items-center gap-2">
                            <IoMail className="w-4 h-4 text-purple-600" />
                            <span>futureaxisdigitals.com</span>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-2">
                            <MdPhone className="w-4 h-4 text-purple-600" />
                            <span>+62 89978788</span>
                        </div>

                        {/* Socials */}
                        <div className="flex items-center gap-3 ml-2">
                            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition">
                                <FaFacebookF size={12} />
                            </a>
                            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition">
                                <FaInstagram size={12} />
                            </a>
                            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition">
                                <FaTwitter size={12} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="mt-6 pt-4 border-t border-purple-300/40 text-center text-xs text-purple-600">
                    Copyright © 2026 FutureAxis. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
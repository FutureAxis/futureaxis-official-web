"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import GradientButton from "@/components/buttons/GradientButton";
import backgroundImage from "@/public/images/home/background-bg.png";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ContactPage() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Background Image */}
            <div className="fixed inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/70"/>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <Navbar />

                <section ref={sectionRef} className="w-full py-20 lg:py-24">
                    <div className="px-5 lg:px-[90px]">
                        {/* Header Section */}
                        <div
                            className={`text-center max-w-3xl mx-auto mb-[90px] transition-all duration-1000 transform ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-12"
                            }`}
                        >
                            <h2 className="text-[28px] md:text-[36px] font-semibold text-white leading-[130%] mb-[37px]">
                                <span>Let's Talk About Your </span>
                                <span className="bg-gradient-to-r from-[#6A2187] to-[#7C3AED] bg-clip-text text-transparent">
                                    Next Project
                                </span>
                            </h2>

                            <p className="text-[#7D7D7D] text-[18px] font-medium leading-[100%] tracking-0 max-w-2xl mx-auto">
                                Connect with our creative team to discuss your next project. We combine strategy, design,
                                and technology to craft premium digital experiences tailored to your goals.
                            </p>
                        </div>

                        {/* Two Column Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                            {/* LEFT COLUMN - Contact Details */}
                            <div
                                className={`space-y-8 transition-all duration-1000 delay-200 transform ${
                                    isVisible
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-0 -translate-x-12"
                                }`}
                            >
                                {/* GET IN TOUCH Heading with circle */}
                                <div>
                                    <div className="flex items-center justify-start gap-3 mb-[30px]">
                                        <div className="w-2 h-2 rounded-full bg-[#7C3AED]"/>
                                        <p className="text-[#7C3AED] uppercase tracking-[3px] text-sm font-semibold">
                                            GET IN TOUCH
                                        </p>
                                    </div>
                                    <p className="text-white text-[24px] leading-[100%] tracking-0 mb-4 font-semibold">
                                        Seamless Communication, Global Impact.
                                    </p>
                                    <p className="text-[#7D7D7D] text-base font-normal leading-[100%] tracking-0 mt-8">
                                        Our approach is built on trust, clarity, and meaningful collaboration.
                                    </p>
                                </div>

                                {/* Contact Info - Call and Email in same row with radial gradient icons */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-4 group">
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#7C3AED]/30"
                                            style={{
                                                background: 'radial-gradient(circle at center, #7C3AED 0%, #341A60 100%)'
                                            }}
                                        >
                                            <FaPhone className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold text-[11px]">Call Us</h4>
                                            <a href="tel:+61411749417" className="text-[#7D7D7D] text-[11px] hover:text-[#7C3AED] transition-colors">
                                                +61411749417
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#7C3AED]/30"
                                            style={{
                                                background: 'radial-gradient(circle at center, #7C3AED 0%, #341A60 100%)'
                                            }}
                                        >
                                            <FaEnvelope className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold text-[11px]">Email Us</h4>
                                            <a href="mailto:futureaxisdigitals.com" className="text-[#7D7D7D] text-[11px] hover:text-[#7C3AED] transition-colors">
                                                futureaxisdigitals.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Office Info with Gradient Border Below and radial gradient icon */}
                                <div>
                                    <div className="flex items-start gap-4 group">
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#7C3AED]/30"
                                            style={{
                                                background: 'radial-gradient(circle at center, #7C3AED 0%, #341A60 100%)'
                                            }}
                                        >
                                            <FaMapMarkerAlt className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold text-[11px]">Our Office</h4>
                                            <p className="text-[#7D7D7D] text-[11px] hover:text-[#7C3AED] transition-colors">
                                                1/21, Dennis Street,
                                                Clayton Vic 3168
                                            </p>
                                        </div>
                                    </div>
                                    {/* Gradient Border Below Address */}
                                    <div className="w-full h-px bg-gradient-to-r from-[#6A2187] to-[#7C3AED] mt-[40px]" />
                                </div>

                                {/* Social Media with Radial Gradient */}
                                <div>
                                    <h4 className="text-white text-sm font-semibold mb-[18px]">Follow Us on Social Media</h4>
                                    <div className="flex items-center gap-4">
                                        <a
                                            href="#"
                                            className="group relative w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 overflow-hidden hover:scale-110 hover:shadow-lg hover:shadow-[#7C3AED]/30"
                                            aria-label="Facebook"
                                            style={{
                                                background: 'radial-gradient(circle at center, #7C3AED 0%, #341A60 100%)'
                                            }}
                                        >
                                            <FaFacebookF size={16} className="relative z-10 group-hover:scale-110 transition-transform" />
                                        </a>
                                        <a
                                            href="#"
                                            className="group relative w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 overflow-hidden hover:scale-110 hover:shadow-lg hover:shadow-[#7C3AED]/30"
                                            aria-label="Instagram"
                                            style={{
                                                background: 'radial-gradient(circle at center, #7C3AED 0%, #341A60 100%)'
                                            }}
                                        >
                                            <FaInstagram size={16} className="relative z-10 group-hover:scale-110 transition-transform" />
                                        </a>
                                        <a
                                            href="#"
                                            className="group relative w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 overflow-hidden hover:scale-110 hover:shadow-lg hover:shadow-[#7C3AED]/30"
                                            aria-label="LinkedIn"
                                            style={{
                                                background: 'radial-gradient(circle at center, #7C3AED 0%, #341A60 100%)'
                                            }}
                                        >
                                            <FaLinkedinIn size={16} className="relative z-10 group-hover:scale-110 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN - Contact Form (Bottom border only) */}
                            <div
                                className={`transition-all duration-1000 delay-400 transform ${
                                    isVisible
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-0 translate-x-12"
                                }`}
                            >
                                <div className="bg-gradient-to-br from-[#7C3AED]/10 to-[#6A2187]/10 rounded-2xl p-8 border border-[#7C3AED]/20">
                                    <h3 className="text-white text-[24px] font-semibold mb-6 text-left mb-[40px]">
                                        Send Us a Message
                                    </h3>

                                    <form className="space-y-6">
                                        <div>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Name"
                                                className="w-full px-0 py-3 bg-transparent border-b border-[#7C3AED]/30 text-white placeholder:text-[#A4A4A4] placeholder:text-sm focus:outline-none focus:border-[#7C3AED] transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="E-mail address"
                                                className="w-full px-0 py-3 bg-transparent border-b border-[#7C3AED]/30 text-white placeholder:text-[#A4A4A4] placeholder:text-sm focus:outline-none focus:border-[#7C3AED] transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                placeholder="Message"
                                                className="w-full px-0 py-3 bg-transparent border-b border-[#7C3AED]/30 text-white placeholder:text-[#A4A4A4] placeholder:text-sm focus:outline-none focus:border-[#7C3AED] transition-colors resize-none"
                                            />
                                        </div>

                                        <GradientButton className="py-3 justify-center mt-8">
                                            Submit
                                        </GradientButton>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
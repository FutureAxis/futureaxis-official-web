"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { CONTACT_INFO } from "@/constants/contact";
const backgroundImage = "https://res.cloudinary.com/denec4g4s/image/upload/v1781546613/future_axis/home/background-bg_gzcf4u.png";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ContactInfoCard } from "@/components/contact/ContactInfoCard";
import { SocialMediaIcons } from "@/components/contact/SocialMediaIcons";
import { ContactForm } from "@/components/contact/ContactForm";
import {FiPhone} from "react-icons/fi";
import {MdPhone} from "react-icons/md";

export default function ContactPage() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <>
            <Head>
                <title>Contact Us | Start Your Digital Journey with Future Axis</title>
                <meta name="description" content="Get in touch with Future Axis. Discuss your web development, social media marketing, or IT consulting project. Our team is ready to help your business grow." />
                <meta name="keywords" content="contact digital agency, web development contact, IT consulting Melbourne, digital marketing inquiry, Future Axis contact" />

                {/* Open Graph */}
                <meta property="og:title" content="Contact Future Axis | Let's Discuss Your Project" />
                <meta property="og:description" content="Connect with our creative team to discuss your next project. We combine strategy, design, and technology to craft premium digital experiences." />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Future Axis" />
                <meta property="og:image" content="/og-image-contact.jpg" />
            </Head>

            {/* Background Image */}
            <div className="fixed inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Background pattern for Future Axis Digital contact page"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <section ref={sectionRef} className="w-full pt-[140px] pb-20 lg:pt-36 lg:pb-[140px]">
                    <div className="px-5 lg:px-[90px]">
                        {/* Header Section */}
                        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-[95px]">
                            <motion.h1
                                className="text-2xl md:text-3xl font-semibold text-white leading-tight mb-[37px]"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                            >
                                <span>Let's Talk About Your </span>
                                <span className="bg-gradient-to-r from-[#6A2187] to-[#7C3AED] bg-clip-text text-transparent">
                                    Next Project
                                </span>
                            </motion.h1>

                            <motion.p
                                className="text-[#7D7D7D] text-base leading-relaxed max-w-4xl mx-auto"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                            >
                                Connect with our creative team to discuss your next project. We combine strategy, design,
                                and technology to craft premium digital experiences.
                            </motion.p>
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-16 max-w-7xl mx-auto">
                            {/* LEFT COLUMN - Contact Details */}
                            <div className="lg:col-span-5 space-y-6">
                                <div>
                                    <div className="flex items-center justify-start gap-3 mb-[30px]">
                                        <div className="w-2 h-2 rounded-full bg-[#7C3AED]"/>
                                        <p className="text-[#7C3AED] uppercase tracking-[3px] text-xs font-semibold">
                                            GET IN TOUCH
                                        </p>
                                    </div>
                                    <p className="text-white text-xl leading-tight mb-4 font-semibold">
                                        Seamless Communication, Global Impact.
                                    </p>
                                    <p className="text-[#7D7D7D] text-sm leading-relaxed">
                                        Our approach is built on trust, clarity, and meaningful collaboration.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <ContactInfoCard
                                        icon={<MdPhone className="w-3.5 h-3.5 text-white"/>}
                                        title=""
                                        content={
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12 xl:gap-34">
                                                <div>
                                                    <p className="text-white font-semibold text-[11px]">
                                                        Australia
                                                    </p>
                                                    <p className="text-[#7D7D7D] text-xs leading-relaxed">
                                                        {CONTACT_INFO.australiaPhone}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-white font-semibold text-[11px]">
                                                        Sri Lanka
                                                    </p>
                                                    <p className="text-[#7D7D7D] text-xs leading-relaxed">
                                                        {CONTACT_INFO.sriLankaPhone}
                                                    </p>
                                                </div>
                                            </div>
                                        }
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    <ContactInfoCard
                                        icon={<FaEnvelope className="w-3.5 h-3.5 text-white"/>}
                                        title="Email Us"
                                        content={
                                            <a href={`mailto:${CONTACT_INFO.email}`}
                                               className="text-[#7D7D7D] text-xs hover:text-[#7C3AED] transition-colors break-all">
                                                {CONTACT_INFO.email}
                                            </a>
                                        }
                                    />
                                </div>

                                {/* Office Info - Two Addresses */}
                                <div className="space-y-6">
                                    <ContactInfoCard
                                        icon={<FaMapMarkerAlt className="w-3.5 h-3.5 text-white"/>}
                                        title=""
                                        content={
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-white font-semibold text-[11px]">
                                                        Head Office (Australia)
                                                    </p>
                                                    <p className="text-[#7D7D7D] text-xs leading-relaxed">
                                                        {CONTACT_INFO.address}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-white font-semibold text-[11px]">
                                                        Branch (Sri Lanka)
                                                    </p>
                                                    <p className="text-[#7D7D7D] text-xs leading-relaxed">
                                                        {CONTACT_INFO.branchAddress}
                                                    </p>
                                                </div>
                                            </div>
                                        }
                                    />
                                    <div
                                        className="w-full h-px bg-gradient-to-r from-[#6A2187] to-[#7C3AED] mt-[42px]"/>
                                </div>

                                {/* Social Media */}
                                <div>
                                    <h4 className="text-white text-xs font-semibold mb-[18px]">Follow Us on Social
                                        Media</h4>
                                    <SocialMediaIcons/>
                                </div>
                            </div>

                            {/* RIGHT COLUMN - Contact Form */}
                            <div className="lg:col-span-7">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
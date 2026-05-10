"use client";

import {FiArrowRight} from "react-icons/fi";

export default function CTASection() {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-6xl mx-auto mx-auto 2xl:max-w-[1420px] px-6 sm:px-10 lg:px-20">
                <div
                    className="rounded-2xl px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                    style={{
                        background: "linear-gradient(135deg, #2e1a47 0%, #6d28d9 100%)",
                    }}
                >
                    {/* LEFT CONTENT */}
                    <div className="max-w-xl">
                        <h2 className="text-white text-xl md:text-[25px] font-semibold mb-[9px] leading-[130%] tracking-0">
                            Ready to Build Something <br className="hidden md:block"/>
                            Exceptional Together ?
                        </h2>
                        <p className="text-white text-sm md:text-base leading-[100%] tracking-0">
                            Let’s run your ideas into powerful digital solutions that drive real growth.
                        </p>
                    </div>

                    {/* RIGHT BUTTON */}
                    <div>
                        <button
                            className="group flex items-center gap-2 bg-white text-black text-sm md:text-base font-semibold px-5 py-3 rounded-lg shadow hover:shadow-md transition">
                            Start Your Project
                            <FiArrowRight
                                className="text-purple-600 text-lg transition-transform duration-200 group-hover:translate-x-1"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
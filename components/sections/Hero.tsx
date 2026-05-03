"use client";

import { useEffect, useRef } from "react";
import StartNowButton from "@/components/buttons/StartNowButton";
import DashboardMockup from "@/components/ui/DashboardMockup";
import ViewOurWorkButton from "@/components/buttons/ViewOurWorkButton";

export default function Hero() {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;

        const items = el.querySelectorAll<HTMLElement>("[data-animate]");

        items.forEach((item, i) => {
            item.style.opacity = "0";
            item.style.transform = "translateY(20px)";

            setTimeout(() => {
                item.style.transition =
                    "opacity 0.6s ease, transform 0.6s ease";
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }, 100 + 140 * i);
        });
    }, []);

    return (
        <section className="relative w-full min-h-screen flex items-start overflow-hidden bg-[var(--background)] pt-24 lg:pt-28">

            {/* Glow background */}
            <div
                className="absolute pointer-events-none rounded-full"
                style={{
                    right: "-10%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "700px",
                    height: "500px",
                    background:
                        "radial-gradient(circle, rgba(109,40,217,0.18) 0%, rgba(109,40,217,0.06) 45%, transparent 70%)",
                    filter: "blur(40px)",
                }}
            />

            {/* MAIN LAYOUT */}
            <div className="relative z-10 w-full mx-auto 2xl:max-w-[1420px] px-6 sm:px-10 lg:px-16 xl:px-20 flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-10 py-10 lg:py-14">

                {/* LEFT CONTENT */}
                <div
                    ref={contentRef}
                    className="w-full lg:w-[48%] flex flex-col"
                >
                    {/* Tag */}
                    <div data-animate className="flex items-center mb-5 lg:mb-6">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[22px] text-xs font-semibold uppercase bg-[#F3EFFE] text-[var(--primary)]">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                            Welcome to FutureAxis
                        </span>
                    </div>

                    {/* Heading */}
                    <h1
                        data-animate
                        className="text-[34px] sm:text-[38px] lg:text-[45px] font-bold leading-[110%] tracking-[0.02em] mb-6 text-[var(--heading)]"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Engineering Digital <br />
                        Experiences That <br />
                        Drive{" "}
                        <span className="text-[var(--primary)]">
                            Real Growth
                        </span>
                    </h1>

                    {/* Paragraph */}
                    <p
                        data-animate
                        className="text-[14px] sm:text-[15px] lg:text-[18px] leading-relaxed mb-10 max-w-[420px] text-[var(--paragraph)]"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        We deliver reliable, high-quality digital solutions
                        designed to elevate your business and drive long-term
                        growth.
                    </p>

                    {/* Buttons */}
                    <div data-animate className="flex items-center gap-4 flex-wrap">
                        <StartNowButton
                            href="/contact"
                            label="Start Your Project"
                        />
                        <ViewOurWorkButton href="/portfolio" />
                    </div>
                </div>

                {/* RIGHT DASHBOARD */}
                <div className="w-full lg:w-[52%] h-[360px] sm:h-[400px] lg:h-[460px] xl:h-[520px]">
                    <DashboardMockup />
                </div>
            </div>
        </section>
    );
}
"use client";

import { useEffect, useRef } from "react";
import StartNowButton from "@/components/buttons/StartNowButton";
import DashboardMockup from "@/components/ui/DashboardMockup";
import ViewOurWorkButton from "@/components/buttons/ViewOurWorkButton";

/* no counters needed */

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
                item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }, 100 + 140 * i);
        });
    }, []);

    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-20">

            {/* ══════════════════════════════════════
                BACKGROUND LAYERS
            ══════════════════════════════════════ */}

            {/* Base gradient mesh — not plain white */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(ellipse 80% 60% at 60% 50%, rgba(109,40,217,0.06) 0%, transparent 60%),
                        radial-gradient(ellipse 40% 40% at 90% 10%, rgba(196,181,253,0.12) 0%, transparent 50%),
                        radial-gradient(ellipse 30% 30% at 10% 90%, rgba(109,40,217,0.05) 0%, transparent 50%),
                        #ffffff
                    `,
                }}
            />

            {/* Dot grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(109,40,217,0.12) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                    maskImage: "radial-gradient(ellipse 80% 80% at 60% 50%, black 20%, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 60% 50%, black 20%, transparent 80%)",
                }}
            />

            {/* ── Animated orb 1 — large, slow drift top-right ── */}
            <div
                className="absolute pointer-events-none rounded-full animate-orb-1"
                style={{
                    right: "5%",
                    top: "10%",
                    width: "420px",
                    height: "420px",
                    background: "radial-gradient(circle, rgba(109,40,217,0.15) 0%, rgba(109,40,217,0.04) 50%, transparent 70%)",
                    filter: "blur(50px)",
                    animation: "orbFloat1 8s ease-in-out infinite",
                }}
            />

            {/* ── Animated orb 2 — medium, faster, bottom-right ── */}
            <div
                className="absolute pointer-events-none rounded-full"
                style={{
                    right: "20%",
                    bottom: "10%",
                    width: "280px",
                    height: "280px",
                    background: "radial-gradient(circle, rgba(196,181,253,0.2) 0%, transparent 70%)",
                    filter: "blur(35px)",
                    animation: "orbFloat2 6s ease-in-out infinite",
                }}
            />

            {/* ── Animated orb 3 — small accent, left side ── */}
            <div
                className="absolute pointer-events-none rounded-full"
                style={{
                    left: "5%",
                    top: "30%",
                    width: "180px",
                    height: "180px",
                    background: "radial-gradient(circle, rgba(109,40,217,0.08) 0%, transparent 70%)",
                    filter: "blur(25px)",
                    animation: "orbFloat3 7s ease-in-out infinite",
                }}
            />

            {/* ── Floating geometric rings ── */}
            {/* Ring set 1 — top right, small pair */}
            <div
                className="absolute pointer-events-none"
                style={{
                    right: "8%",
                    top: "15%",
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(109,40,217,0.15)",
                    animation: "ringPulse 4s ease-in-out infinite",
                }}
            />
            <div
                className="absolute pointer-events-none"
                style={{
                    right: "8%",
                    top: "15%",
                    width: "120px",
                    height: "120px",
                    marginRight: "-20px",
                    marginTop: "-20px",
                    borderRadius: "50%",
                    border: "1px solid rgba(196,181,253,0.12)",
                    animation: "ringPulse 4s ease-in-out infinite 0.5s",
                }}
            />

            {/* Ring set 2 — large circle bottom-left */}
            <div
                className="absolute pointer-events-none"
                style={{
                    left: "-60px",
                    bottom: "5%",
                    width: "320px",
                    height: "320px",
                    borderRadius: "50%",
                    border: "1px solid rgba(109,40,217,0.08)",
                    animation: "ringPulse 6s ease-in-out infinite 1s",
                }}
            />
            <div
                className="absolute pointer-events-none"
                style={{
                    left: "-100px",
                    bottom: "2%",
                    width: "420px",
                    height: "420px",
                    borderRadius: "50%",
                    border: "1px solid rgba(109,40,217,0.05)",
                    animation: "ringPulse 6s ease-in-out infinite 1.8s",
                }}
            />

            {/* Ring set 3 — very large circle centered-right */}
            <div
                className="absolute pointer-events-none"
                style={{
                    right: "-80px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "500px",
                    height: "500px",
                    borderRadius: "50%",
                    border: "1px solid rgba(109,40,217,0.07)",
                    animation: "ringPulse 7s ease-in-out infinite 0.3s",
                }}
            />
            <div
                className="absolute pointer-events-none"
                style={{
                    right: "-140px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "650px",
                    height: "650px",
                    borderRadius: "50%",
                    border: "1px solid rgba(196,181,253,0.06)",
                    animation: "ringPulse 7s ease-in-out infinite 1.2s",
                }}
            />

            {/* Ring set 4 — medium circle top-center */}
            <div
                className="absolute pointer-events-none"
                style={{
                    left: "38%",
                    top: "-80px",
                    width: "260px",
                    height: "260px",
                    borderRadius: "50%",
                    border: "1px solid rgba(109,40,217,0.06)",
                    animation: "ringPulse 5s ease-in-out infinite 2s",
                }}
            />

            {/* ── Floating dots ── */}
            {[
                { right: "32%", top: "18%", size: 5, delay: "0s", opacity: 0.4 },
                { right: "28%", top: "72%", size: 4, delay: "1s", opacity: 0.3 },
                { right: "48%", top: "12%", size: 3, delay: "1.5s", opacity: 0.5 },
                { right: "55%", bottom: "20%", size: 4, delay: "0.7s", opacity: 0.3 },
                { left: "42%", top: "25%", size: 3, delay: "2s", opacity: 0.25 },
            ].map((dot, i) => (
                <div
                    key={i}
                    className="absolute pointer-events-none rounded-full"
                    style={{
                        right: dot.right,
                        top: dot.top,
                        bottom: (dot as any).bottom,
                        left: (dot as any).left,
                        width: `${dot.size}px`,
                        height: `${dot.size}px`,
                        background: "var(--primary)",
                        opacity: dot.opacity,
                        animation: `dotFloat 3s ease-in-out infinite ${dot.delay}`,
                    }}
                />
            ))}

            {/* ── Keyframe styles injected ── */}
            <style>{`
                @keyframes orbFloat1 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33%       { transform: translate(-20px, 15px) scale(1.05); }
                    66%       { transform: translate(10px, -20px) scale(0.97); }
                }
                @keyframes orbFloat2 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50%       { transform: translate(-15px, -20px) scale(1.08); }
                }
                @keyframes orbFloat3 {
                    0%, 100% { transform: translate(0, 0); }
                    50%       { transform: translate(10px, -15px); }
                }
                @keyframes ringPulse {
                    0%, 100% { transform: scale(1); opacity: 0.6; }
                    50%       { transform: scale(1.1); opacity: 0.2; }
                }
                @keyframes dotFloat {
                    0%, 100% { transform: translateY(0); }
                    50%       { transform: translateY(-6px); }
                }
            `}</style>

            {/* ══════════════════════════════════════
                MAIN LAYOUT
            ══════════════════════════════════════ */}
            <div className="relative z-10 w-full mx-auto 2xl:max-w-[1420px] px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-10 py-10 lg:py-14">

                {/* ── LEFT: Content ── */}
                <div ref={contentRef} className="w-full lg:w-[48%] flex flex-col">

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
                        <span className="text-[var(--primary)]">Real Growth</span>
                    </h1>

                    {/* Paragraph */}
                    <p
                        data-animate
                        className="text-[14px] sm:text-[15px] lg:text-[18px] leading-relaxed mb-10 max-w-[420px] text-[var(--paragraph)]"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        We deliver reliable, high-quality digital solutions designed to elevate
                        your business and drive long-term growth.
                    </p>

                    {/* Buttons */}
                    <div data-animate className="flex items-center gap-4 flex-wrap">
                        <StartNowButton href="/contact" label="Start Your Project" />
                        <ViewOurWorkButton href="/portfolio" />
                    </div>


                </div>

                {/* ── RIGHT: Dashboard ── */}
                <div className="w-full lg:w-[52%] h-[360px] sm:h-[400px] lg:h-[460px] xl:h-[520px]">
                    <DashboardMockup />
                </div>
            </div>
        </section>
    );
}
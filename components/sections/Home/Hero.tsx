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

            {/* Dot grid - PRESERVED and enhanced */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(109,40,217,0.15) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                    maskImage: "radial-gradient(ellipse 80% 80% at 60% 50%, black 25%, transparent 85%)",
                    WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 60% 50%, black 25%, transparent 85%)",
                    animation: "dotGridMove 20s linear infinite",
                }}
            />

            {/* ── Animated orb 1 — large, slow drift top-right ── */}
            <div
                className="absolute pointer-events-none rounded-full"
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

            {/* ══════════════════════════════════════
                SMALL DOUBLE RINGS - ONLY THEME COLORS
            ══════════════════════════════════════ */}

            {/* Pair 1 - Primary purple double rings (top left) */}
            <div className="absolute pointer-events-none" style={{ left: "5%", top: "10%" }}>
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "45px",
                        height: "45px",
                        border: "1px solid rgba(109, 40, 217, 0.55)",
                        animation: "smallRingPulse 3s ease-in-out infinite",
                    }}
                />
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "70px",
                        height: "70px",
                        marginLeft: "-12px",
                        marginTop: "-12px",
                        border: "1px solid rgba(109, 40, 217, 0.35)",
                        animation: "smallRingPulse 3s ease-in-out infinite 0.4s",
                    }}
                />
            </div>

            {/* Pair 2 - Rings color double rings (top right) */}
            <div className="absolute pointer-events-none" style={{ right: "8%", top: "15%" }}>
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "40px",
                        height: "40px",
                        border: "1px solid rgba(195, 179, 255, 0.6)",
                        animation: "smallRingPulse 3.2s ease-in-out infinite 0.2s",
                    }}
                />
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "62px",
                        height: "62px",
                        marginLeft: "-11px",
                        marginTop: "-11px",
                        border: "1px solid rgba(195, 179, 255, 0.4)",
                        animation: "smallRingPulse 3.2s ease-in-out infinite 0.6s",
                    }}
                />
            </div>

            {/* Pair 3 - Secondary deep purple double rings (mid left) */}
            <div className="absolute pointer-events-none" style={{ left: "50%", top: "42%" }}>
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "38px",
                        height: "38px",
                        border: "1px solid rgba(48, 36, 81, 0.55)",
                        animation: "smallRingPulse 2.8s ease-in-out infinite 0.1s",
                    }}
                />
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "58px",
                        height: "58px",
                        marginLeft: "-10px",
                        marginTop: "-10px",
                        border: "1px solid rgba(48, 36, 81, 0.35)",
                        animation: "smallRingPulse 2.8s ease-in-out infinite 0.5s",
                    }}
                />
            </div>

            {/* Pair 4 - Accent light purple double rings (mid right) */}
            <div className="absolute pointer-events-none" style={{ right: "15%", top: "50%" }}>
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "42px",
                        height: "42px",
                        border: "1px solid rgba(196, 181, 253, 0.6)",
                        animation: "smallRingPulse 3.5s ease-in-out infinite 0.15s",
                    }}
                />
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "65px",
                        height: "65px",
                        marginLeft: "-11px",
                        marginTop: "-11px",
                        border: "1px solid rgba(196, 181, 253, 0.4)",
                        animation: "smallRingPulse 3.5s ease-in-out infinite 0.55s",
                    }}
                />
            </div>

            {/* Pair 5 - Primary purple double rings (bottom left) */}
            <div className="absolute pointer-events-none" style={{ left: "8%", bottom: "18%" }}>
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "36px",
                        height: "36px",
                        border: "1px solid rgba(109, 40, 217, 0.55)",
                        animation: "smallRingPulse 3.6s ease-in-out infinite 0.3s",
                    }}
                />
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "56px",
                        height: "56px",
                        marginLeft: "-10px",
                        marginTop: "-10px",
                        border: "1px solid rgba(109, 40, 217, 0.35)",
                        animation: "smallRingPulse 3.6s ease-in-out infinite 0.7s",
                    }}
                />
            </div>

            {/* Pair 6 - Rings color double rings (bottom right) */}
            <div className="absolute pointer-events-none" style={{ right: "10%", bottom: "15%" }}>
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "44px",
                        height: "44px",
                        border: "1px solid rgba(195, 179, 255, 0.6)",
                        animation: "smallRingPulse 3.1s ease-in-out infinite 0.25s",
                    }}
                />
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "68px",
                        height: "68px",
                        marginLeft: "-12px",
                        marginTop: "-12px",
                        border: "1px solid rgba(195, 179, 255, 0.4)",
                        animation: "smallRingPulse 3.1s ease-in-out infinite 0.65s",
                    }}
                />
            </div>

            {/* Pair 7 - Secondary deep purple double rings (center area) */}
            <div className="absolute pointer-events-none" style={{ left: "35%", top: "55%" }}>
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "32px",
                        height: "32px",
                        border: "1px solid rgba(48, 36, 81, 0.55)",
                        animation: "smallRingPulse 2.9s ease-in-out infinite 0.05s",
                    }}
                />
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "50px",
                        height: "50px",
                        marginLeft: "-9px",
                        marginTop: "-9px",
                        border: "1px solid rgba(48, 36, 81, 0.35)",
                        animation: "smallRingPulse 2.9s ease-in-out infinite 0.45s",
                    }}
                />
            </div>

            {/* Pair 8 - Accent light purple double rings (top center) */}
            <div className="absolute pointer-events-none" style={{ left: "45%", top: "5%" }}>
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "35px",
                        height: "35px",
                        border: "1px solid rgba(196, 181, 253, 0.6)",
                        animation: "smallRingPulse 3.4s ease-in-out infinite 0.12s",
                    }}
                />
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "55px",
                        height: "55px",
                        marginLeft: "-10px",
                        marginTop: "-10px",
                        border: "1px solid rgba(196, 181, 253, 0.4)",
                        animation: "smallRingPulse 3.4s ease-in-out infinite 0.52s",
                    }}
                />
            </div>

            {/* Pair 9 - Primary purple double rings (bottom center) */}
            <div className="absolute pointer-events-none" style={{ left: "30%", bottom: "8%" }}>
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "38px",
                        height: "38px",
                        border: "1px solid rgba(109, 40, 217, 0.55)",
                        animation: "smallRingPulse 3.3s ease-in-out infinite 0.18s",
                    }}
                />
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "60px",
                        height: "60px",
                        marginLeft: "-11px",
                        marginTop: "-11px",
                        border: "1px solid rgba(109, 40, 217, 0.35)",
                        animation: "smallRingPulse 3.3s ease-in-out infinite 0.58s",
                    }}
                />
            </div>

            {/* Pair 10 - Rings color double rings (right side) */}
            <div className="absolute pointer-events-none" style={{ right: "22%", top: "30%" }}>
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "30px",
                        height: "30px",
                        border: "1px solid rgba(195, 179, 255, 0.6)",
                        animation: "smallRingPulse 3.8s ease-in-out infinite 0.08s",
                    }}
                />
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "48px",
                        height: "48px",
                        marginLeft: "-9px",
                        marginTop: "-9px",
                        border: "1px solid rgba(195, 179, 255, 0.4)",
                        animation: "smallRingPulse 3.8s ease-in-out infinite 0.48s",
                    }}
                />
            </div>

            {/* Pair 11 - Secondary deep purple double rings (upper mid right) */}
            <div className="absolute pointer-events-none" style={{ right: "28%", top: "22%" }}>
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "34px",
                        height: "34px",
                        border: "1px solid rgba(48, 36, 81, 0.55)",
                        animation: "smallRingPulse 2.7s ease-in-out infinite 0.22s",
                    }}
                />
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "52px",
                        height: "52px",
                        marginLeft: "-9px",
                        marginTop: "-9px",
                        border: "1px solid rgba(48, 36, 81, 0.35)",
                        animation: "smallRingPulse 2.7s ease-in-out infinite 0.62s",
                    }}
                />
            </div>

            {/* Pair 12 - Accent light purple double rings (left side lower) */}
            <div className="absolute pointer-events-none" style={{ left: "18%", bottom: "35%" }}>
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "28px",
                        height: "28px",
                        border: "1px solid rgba(196, 181, 253, 0.6)",
                        animation: "smallRingPulse 3.9s ease-in-out infinite 0.14s",
                    }}
                />
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "44px",
                        height: "44px",
                        marginLeft: "-8px",
                        marginTop: "-8px",
                        border: "1px solid rgba(196, 181, 253, 0.4)",
                        animation: "smallRingPulse 3.9s ease-in-out infinite 0.54s",
                    }}
                />
            </div>

            {/* Pair 13 - Primary purple double rings (near content) */}
            <div className="absolute pointer-events-none" style={{ left: "50%", top: "75%" }}>
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "33px",
                        height: "33px",
                        border: "1px solid rgba(109, 40, 217, 0.55)",
                        animation: "smallRingPulse 3.15s ease-in-out infinite 0.28s",
                    }}
                />
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "51px",
                        height: "51px",
                        marginLeft: "-9px",
                        marginTop: "-9px",
                        border: "1px solid rgba(109, 40, 217, 0.35)",
                        animation: "smallRingPulse 3.15s ease-in-out infinite 0.68s",
                    }}
                />
            </div>

            {/* Pair 14 - Rings color double rings (top far left) */}
            <div className="absolute pointer-events-none" style={{ left: "2%", top: "25%" }}>
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "37px",
                        height: "37px",
                        border: "1px solid rgba(195, 179, 255, 0.6)",
                        animation: "smallRingPulse 3.45s ease-in-out infinite 0.35s",
                    }}
                />
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "57px",
                        height: "57px",
                        marginLeft: "-10px",
                        marginTop: "-10px",
                        border: "1px solid rgba(195, 179, 255, 0.4)",
                        animation: "smallRingPulse 3.45s ease-in-out infinite 0.75s",
                    }}
                />
            </div>

            {/* Pair 15 - Secondary deep purple double rings (bottom far right) */}
            <div className="absolute pointer-events-none" style={{ right: "4%", bottom: "40%" }}>
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "41px",
                        height: "41px",
                        border: "1px solid rgba(48, 36, 81, 0.55)",
                        animation: "smallRingPulse 3.25s ease-in-out infinite 0.42s",
                    }}
                />
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "63px",
                        height: "63px",
                        marginLeft: "-11px",
                        marginTop: "-11px",
                        border: "1px solid rgba(48, 36, 81, 0.35)",
                        animation: "smallRingPulse 3.25s ease-in-out infinite 0.82s",
                    }}
                />
            </div>

            {/* ── Additional floating decorative dots - PRESERVED and enhanced ── */}
            <div
                className="absolute pointer-events-none rounded-full"
                style={{
                    right: "12%",
                    top: "18%",
                    width: "5px",
                    height: "5px",
                    background: "var(--primary)",
                    opacity: 0.5,
                    animation: "dotFloat 3s ease-in-out infinite",
                }}
            />
            <div
                className="absolute pointer-events-none rounded-full"
                style={{
                    left: "8%",
                    top: "68%",
                    width: "5px",
                    height: "5px",
                    background: "var(--primary)",
                    opacity: 0.2,
                    animation: "dotFloat 3s ease-in-out infinite",
                }}
            />
            <div
                className="absolute pointer-events-none rounded-full"
                style={{
                    right: "28%",
                    top: "72%",
                    width: "4px",
                    height: "4px",
                    background: "var(--primary)",
                    opacity: 0.4,
                    animation: "dotFloat 3s ease-in-out infinite 1s",
                }}
            />
            <div
                className="absolute pointer-events-none rounded-full"
                style={{
                    right: "55%",
                    bottom: "20%",
                    width: "4px",
                    height: "4px",
                    background: "var(--accent)",
                    opacity: 0.4,
                    animation: "dotFloat 4s ease-in-out infinite 0.7s",
                }}
            />
            <div
                className="absolute pointer-events-none rounded-full"
                style={{
                    left: "42%",
                    top: "25%",
                    width: "3px",
                    height: "3px",
                    background: "var(--primary)",
                    opacity: 0.35,
                    animation: "dotFloat 2.8s ease-in-out infinite 2s",
                }}
            />
            <div
                className="absolute pointer-events-none rounded-full"
                style={{
                    left: "15%",
                    bottom: "40%",
                    width: "4px",
                    height: "4px",
                    background: "var(--accent)",
                    opacity: 0.45,
                    animation: "dotFloat 3.2s ease-in-out infinite 0.3s",
                }}
            />
            <div
                className="absolute pointer-events-none rounded-full"
                style={{
                    right: "12%",
                    bottom: "45%",
                    width: "3px",
                    height: "3px",
                    background: "var(--primary)",
                    opacity: 0.5,
                    animation: "dotFloat 3.7s ease-in-out infinite 1.2s",
                }}
            />
            <div
                className="absolute pointer-events-none rounded-full"
                style={{
                    left: "60%",
                    bottom: "15%",
                    width: "5px",
                    height: "5px",
                    background: "var(--accent)",
                    opacity: 0.3,
                    animation: "dotFloat 4.2s ease-in-out infinite 0.5s",
                }}
            />

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
                @keyframes smallRingPulse {
                    0%, 100% { transform: scale(1); opacity: 0.7; }
                    50%       { transform: scale(1.15); opacity: 0.2; }
                }
                @keyframes dotFloat {
                    0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
                    50%       { transform: translateY(-8px) scale(1.2); opacity: 0.7; }
                }
                @keyframes dotGridMove {
                    from { background-position: 0 0; }
                    to { background-position: 28px 28px; }
                }
            `}</style>

            {/* ══════════════════════════════════════
                MAIN LAYOUT
            ══════════════════════════════════════ */}
            <div
                className="relative z-10 w-full mx-auto 2xl:max-w-[1420px] px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-10 py-10 lg:py-14">

                {/* ── LEFT: Content ── */}
                <div ref={contentRef} className="w-full lg:w-[48%] flex flex-col">

                    {/* Tag */}
                    <div data-animate className="flex items-center mb-5 lg:mb-6">
                        <span
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[22px] text-xs font-semibold uppercase bg-[#F3EFFE] text-[var(--primary)]">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"/>
                            Welcome to FutureAxis
                        </span>
                    </div>

                    {/* Heading */}
                    <h1
                        data-animate
                        className="text-[34px] sm:text-[38px] lg:text-[45px] font-black leading-[100%] tracking-0 mb-6 text-[var(--heading)]"
                        style={{fontFamily: "var(--font-heading)"}}
                    >
                        Engineering Digital <br/>
                        Experiences That <br/>
                        Drive{" "}
                        <span className="text-[var(--primary)] relative inline-block">
                            Real Growth
                        </span>
                    </h1>

                    {/* Paragraph */}
                    <p
                        data-animate
                        className="text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed mb-10 max-w-[420px] text-[var(--paragraph)]"
                        style={{fontFamily: "var(--font-body)"}}
                    >
                        We deliver reliable, high-quality digital solutions designed to elevate
                        your business and drive long-term growth.
                    </p>

                    {/* Buttons */}
                    <div data-animate className="flex items-center gap-4 flex-wrap">
                        <StartNowButton href="/contact" label="Start Your Project"/>
                        <ViewOurWorkButton href="/portfolio"/>
                    </div>


                </div>

                {/* ── RIGHT: Dashboard ── */}
                <div className="w-full lg:w-[52%] h-[360px] sm:h-[400px] lg:h-[460px] xl:h-[520px]">
                    <DashboardMockup/>
                </div>
            </div>
        </section>
    );
}
"use client";

import StartNowButton from "@/components/buttons/StartNowButton";
import ViewOurWorkButton from "@/components/buttons/ViewOurWorkButton";

export default function HomeHeroContent() {
    return (
        <div className="w-full lg:w-[100%] flex flex-col">
            {/* Tag */}
            <div data-animate className="flex items-center mb-5 lg:mb-6">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[22px] text-xs font-semibold uppercase bg-[#F3EFFE] text-[var(--primary)]">
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
    );
}
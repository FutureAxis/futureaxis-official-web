import StartNowButton from "@/components/buttons/StartNowButton";
import ViewOurWorkButton from "@/components/buttons/ViewOurWorkButton";

export default function HeroContent() {
    return (
        <div className="w-full lg:w-[100%] flex flex-col">
            {/* Tag */}
            <div data-animate className="flex items-center mb-5 lg:mb-6">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[22px] text-xs font-semibold uppercase bg-[#F3EFFE] text-[var(--primary)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"/>
                    ABOUT US
                </span>
            </div>

            {/* Heading */}
            <h1
                data-animate
                className="text-[42px] sm:text-[48px] lg:text-[56px] font-black leading-[1.1] tracking-0 mb-4 text-[var(--heading)]"
                style={{fontFamily: "var(--font-heading)"}}
            >
                We Build Digital <br className="hidden sm:block"/>
                Solutions That Drive{" "}
                <span className="text-[var(--primary)] relative inline-block">
                    Real Business<br/>Growth
                </span>
            </h1>

            {/* Paragraph */}
            <p
                data-animate
                className="text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed mb-8 max-w-[480px] text-[var(--paragraph)]"
                style={{fontFamily: "var(--font-body)"}}
            >
                FutureAxis is a digital solutions company focused on delivering innovative, scalable, and results-driven solutions that help business grow and succeed in the digital world.
            </p>

            {/* Buttons */}
            <div data-animate className="flex items-center gap-4 flex-wrap mb-10">
                <StartNowButton href="/contact" label="Start Your Project"/>
                <ViewOurWorkButton href="/portfolio" label="View Our Work"/>
            </div>
        </div>
    );
}
import Image from "next/image";
import heroImage from "@/public/images/about/about-image.png";
import InfoCard from "@/components/ui/InfoCard";

export default function HeroImage() {
    return (
        <div className="w-full lg:w-[48%] relative">
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[360px] sm:h-[400px] lg:h-[500px] xl:h-[560px]">
                <Image
                    src={heroImage}
                    alt="FutureAxis digital solutions showcase"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
            </div>

            {/* Cards */}
            <InfoCard
                icon={<PartnershipIcon />}
                title="Driving Growth"
                description="We are proud to work with our clients to achieve results."
                position="bottom-left"
            />

            <InfoCard
                icon={<PerformanceIcon />}
                title="Building Solutions"
                description="We focus on results that fit real impact and measurable growth."
                position="bottom-right"
            />
        </div>
    );
}

// Icons as separate components
const InnovationIcon = () => (
    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const TransparencyIcon = () => (
    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const PartnershipIcon = () => (
    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const PerformanceIcon = () => (
    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);
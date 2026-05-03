// components/Services.tsx
"use client";

import StartNowButton from "@/components/buttons/StartNowButton";

const services = [
    {
        title: "WEB DESIGN & DEVELOPMENT",
        description: "Web design and development like building a digital house for your business.",
        features: [
            "Visually stunning interfaces",
            "User-friendly flow",
            "Looks great on any device",
        ],
        icon: (
            <svg className="h-8 w-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "SOCIAL MEDIA MARKETING",
        description: "We grow your brand with engaging content, targeted strategies and campaigns.",
        features: [
            "Reach the right audience",
            "Boost engagement",
            "Drive measurable results",
        ],
        icon: (
            <svg className="h-8 w-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
        ),
    },
    {
        title: "IT CONSULTING",
        description: "We provide expert IT guidance to help you optimize systems, improve efficiency for success.",
        features: [
            "Tailored IT solutions",
            "Improved efficiency",
            "Future-ready strategy",
        ],
        icon: (
            <svg className="h-8 w-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
];

export default function Services() {
    return (
        <section className="py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-6 md:px-8 lg:px-12">
                {/* Header Section - Flex row for desktop */}
                <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 lg:mb-20 lg:flex-row lg:items-end">
                    {/* Left side - Heading */}
                    <div className="text-left">
                        <div className="inline-block rounded-full bg-[var(--accent)]/20 px-4 py-1.5 text-sm font-medium text-[var(--primary)] mb-4">
                            Our Services
                        </div>
                        <h2 className="font-heading text-3xl font-bold text-[var(--heading)] md:text-4xl lg:text-5xl">
                            Find out what we can do for you
                        </h2>
                    </div>

                    {/* Right side - Button on desktop only */}
                    <div className="hidden lg:block">
                        <StartNowButton href="/services" label="MORE INFO" />
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 md:p-8"
                            style={{
                                boxShadow: "0 4px 20px rgba(109, 40, 217, 0.15)",
                                border: "1px solid rgba(109, 40, 217, 0.1)",
                            }}
                        >
                            {/* Icon */}
                            <div className="mb-5 inline-flex rounded-xl bg-[var(--accent)]/20 p-3 transition-all duration-300 group-hover:bg-[var(--accent)]/30">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="font-heading text-xl font-bold text-[var(--heading)] md:text-2xl">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="mb-4 mt-3 text-sm leading-relaxed text-[var(--paragraph)] md:text-base">
                                {service.description}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-muted)] md:text-base">
                                        <svg
                                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--primary)]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Button - Below cards on mobile AND desktop */}
                <div className="mt-12 text-center md:mt-16 lg:hidden">
                    <StartNowButton href="/services" label="MORE INFO" />
                </div>
            </div>
        </section>
    );
}
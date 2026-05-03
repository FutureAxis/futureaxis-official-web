// components/About.tsx
"use client";


import StartNowButton from "@/components/buttons/StartNowButton";

export default function About() {
    return (
        <section className="bg-[var(--section-bg)] py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-6 md:px-8 lg:px-12">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
                    {/* Left Side - Image/Illustration */}
                    <div className="relative flex-1">
                        <div className="relative mx-auto h-80 w-full max-w-md rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/20 p-4 md:h-96 lg:h-[450px]">
                            {/* Decorative elements */}
                            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[var(--accent)]/30"></div>
                            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[var(--primary)]/20"></div>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                                <div className="text-center">
                                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-xl bg-[var(--primary)] text-white shadow-lg md:h-24 md:w-24">
                                        <svg
                                            className="h-10 w-10 md:h-12 md:w-12"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-base font-medium text-[var(--heading)] md:text-lg">
                                        Innovation Meets
                                    </p>
                                    <p className="text-sm text-[var(--paragraph)] md:text-base">
                                        Excellence
                                    </p>
                                </div>
                            </div>
                            {/* Additional decorative dots */}
                            <div className="absolute right-8 top-8 h-2 w-2 rounded-full bg-[var(--primary)]"></div>
                            <div className="absolute bottom-12 left-8 h-3 w-3 rounded-full bg-[var(--accent)]"></div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1 space-y-6">
                        {/* Section Label */}
                        <div className="inline-block rounded-full bg-[var(--accent)]/20 px-4 py-1.5 text-sm font-medium text-[var(--primary)]">
                            About Us
                        </div>

                        {/* Heading */}
                        <h2 className="font-heading text-3xl font-bold leading-tight text-[var(--heading)] md:text-4xl lg:text-5xl">
                            We Work to Ensure<br />Your Success
                        </h2>

                        {/* Description */}
                        <div className="space-y-4 text-base leading-relaxed text-[var(--paragraph)] md:text-lg">
                            <p>
                                We don't just deliver digital solutions — we partner with you to drive real business success.
                                Our team combines strategy, design, and technology to create solutions that are not only
                                visually impressive but also built to perform.
                            </p>
                            <p>
                                From web development to digital marketing and IT consulting, every decision we make is
                                focused on helping your business grow, scale, and stand out in a competitive market.
                            </p>
                        </div>

                        {/* Button - Using your custom StartNowButton */}
                        <div className="mt-4 md:mt-6">
                            <StartNowButton
                                href="/about"
                                label="MORE INFO"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
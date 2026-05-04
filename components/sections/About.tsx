"use client";

import StartNowButton from "@/components/buttons/StartNowButton";
import Image from "next/image";
import aboutImage from "@/public/images/about/about-image.png";

export default function About() {
    return (
        <section className="bg-white py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-6 md:px-8 lg:px-12">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
                    <div className="relative flex-1">
                        <div
                            className="relative mx-auto h-80 w-full max-w-md rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/20 p-4 md:h-96 lg:h-[450px]">
                            {/* Decorative elements */}
                            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[var(--accent)]/30"></div>
                            <div
                                className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[var(--primary)]/20"></div>
                            <div className="relative h-full w-full overflow-hidden rounded-xl">
                                <Image
                                    src={aboutImage}
                                    alt="About Us - Team working together"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1 space-y-6">
                        <div
                            className="inline-block text-sm font-medium text-[var(--primary)] mb-5 uppercase leading-[100%] tracking-[0.01em] text-[var(--primary)]">
                            About Us
                        </div>

                        <h2 className="font-heading text-3xl font-semibold text-[var(--heading)] md:text-4xl lg:text-[36px] leading-[130%] tracking-0">
                            We Work to Ensure Your Success
                        </h2>

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

                        <div className="mt-4 md:mt-[45px]">
                            <StartNowButton
                                href="/about"
                                label="More About Us"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
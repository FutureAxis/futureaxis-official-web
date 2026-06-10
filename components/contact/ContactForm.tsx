"use client";

import { useState } from "react";
import GradientButton from "@/components/buttons/GradientButton";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    return (
        <div className="bg-gradient-to-br from-[#7C3AED]/10 to-[#6A2187]/10 rounded-2xl p-8 border border-[#7C3AED]/20">
            <h3 className="text-white text-[24px] font-semibold mb-6 text-left mb-[40px]">
                Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-b border-[#7C3AED]/30 text-white placeholder:text-[#A4A4A4] placeholder:text-sm focus:outline-none focus:border-[#7C3AED] transition-colors"
                    />
                </div>

                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-mail address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-b border-[#7C3AED]/30 text-white placeholder:text-[#A4A4A4] placeholder:text-sm focus:outline-none focus:border-[#7C3AED] transition-colors"
                    />
                </div>

                <div>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-b border-[#7C3AED]/30 text-white placeholder:text-[#A4A4A4] placeholder:text-sm focus:outline-none focus:border-[#7C3AED] transition-colors resize-none"
                    />
                </div>

                <GradientButton className="py-3 justify-center mt-8">
                    Submit
                </GradientButton>
            </form>
        </div>
    );
};
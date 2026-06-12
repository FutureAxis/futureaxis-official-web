import { ReactNode } from "react";

interface ContactInfoCardProps {
    icon: ReactNode;
    title: string;
    content: ReactNode;
}

export const ContactInfoCard = ({ icon, title, content }: ContactInfoCardProps) => (
    <div className="flex items-start gap-4 group">
        <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#7C3AED]/30"
            style={{
                background: 'radial-gradient(circle at center, #7C3AED 0%, #341A60 100%)'
            }}
        >
            <div className="transition-none">{icon}</div> {/* Wrap icon to prevent transforms */}
        </div>
        <div>
            <h4 className="text-white font-semibold text-[11px]">{title}</h4>
            {content}
        </div>
    </div>
);
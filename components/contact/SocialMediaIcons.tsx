import { SOCIAL_LINKS } from "@/constants/contact";

export const SocialMediaIcons = () => (
    <div className="flex items-center gap-4">
        {SOCIAL_LINKS.map((social) => (
            <a
                key={social.name}
                href={social.url}
                className="group relative w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 overflow-hidden hover:scale-110 hover:shadow-lg hover:shadow-[#7C3AED]/30"
                aria-label={social.ariaLabel}
                style={{
                    background: 'radial-gradient(circle at center, #7C3AED 0%, #341A60 100%)'
                }}
            >
                <social.icon size={16} className="relative z-10 group-hover:scale-110 transition-transform" />
            </a>
        ))}
    </div>
);
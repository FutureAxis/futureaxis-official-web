import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IconType } from "react-icons";

export interface SocialLink {
    name: string;
    icon: IconType;
    url: string;
    ariaLabel: string;
}

export interface NavLink {
    name: string;
    href: string;
}

export interface ServiceLink {
    name: string;
    href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
    {
        name: "Facebook",
        icon: FaFacebookF,
        url: "https://www.facebook.com/share/1BnvvaRCAY/?mibextid=wwXIfr https://www.instagram.com/futureaxis.digital",
        ariaLabel: "Follow us on Facebook",
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        url: "https://www.instagram.com/futureaxis.digital",
        ariaLabel: "Follow us on Instagram",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedinIn,
        url: "https://linkedin.com/company/futureaxis",
        ariaLabel: "Connect with us on LinkedIn",
    },
];

export const QUICK_LINKS: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "/contact" },
];

export const SERVICE_LINKS: ServiceLink[] = [
    { name: "Web Development", href: "/" },
    { name: "Social Media Marketing", href: "/" },
    { name: "IT Consulting", href: "/" },
];

export const CONTACT_INFO = {
    email: "info@futureaxisdigital.com",
    australiaPhone: "+61411749417",
    sriLankaPhone: "+94773900540",
    australiaAddress: "1/21, Dennis Street, Clayton Vic 3168",
    sriLankaAddress: "No 282/8B, Namal Place, Katuwana Road, Homagama 10200"
} as const;

export const FOOTER_CONFIG = {
    companyName: "FutureAxis",
    tagline: "FutureAxis delivers high-impact, scalable digital solutions to accelerate your business growth.",
    copyrightYear: 2026,
    copyrightText: "FutureAxis",
} as const;
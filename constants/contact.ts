import {FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";

export interface ContactInfo {
    phone: string;
    email: string;
    address: string;
    branchAddress: string;
}

export interface SocialLink {
    name: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    url: string;
    ariaLabel: string;
}

export const CONTACT_INFO: ContactInfo = {
    phone: "+61411749417",
    email: "info@futureaxisdigital.com",
    address: "1/21, Dennis Street, Clayton Vic 3168",
    branchAddress: "No 282/8B, Namal Place, Katuwana Road, Homagama 10200",
};

export const SOCIAL_LINKS: SocialLink[] = [
    {
        name: "Facebook",
        icon: FaFacebookF,
        url: "https://www.facebook.com/share/1BnvvaRCAY/?mibextid=wwXIfr https://www.instagram.com/futureaxis.digital",
        ariaLabel: "Facebook",
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        url: "https://www.instagram.com/futureaxis.digital",
        ariaLabel: "Instagram",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedinIn,
        url: "#",
        ariaLabel: "LinkedIn",
    },
];

export const FORM_FIELDS = [
    { id: "name", name: "name", placeholder: "Name", type: "text" },
    { id: "email", name: "email", placeholder: "E-mail address", type: "email" },
    { id: "message", name: "message", placeholder: "Message", type: "textarea", rows: 4 },
] as const;
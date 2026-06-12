import card1 from "@/public/images/home/web-design.png";
import card2 from "@/public/images/home/social-media.png";
import card3 from "@/public/images/home/consulting.png";
import { StaticImageData } from "next/image";

export interface Service {
    title: string;
    description: string;
    features: string[];
    image: StaticImageData;
    imageAlt: string;
    imagePosition?: string;
}

export const SERVICES: Service[] = [
    {
        title: "Web Design & Development",
        description: "We build modern responsive websites that are visually stunning, user-friendly, and optimized for performance and conversions.",
        features: ["Custom UI/UX Design", "Performance Optimization", "Responsive Development", "Scalable & Secure Solutions"],
        image: card1,
        imageAlt: "Web Design & Development",
        imagePosition: "object-top",
    },
    {
        title: "Social Media Marketing",
        description: "We help brands to connect with the right audience through engaging content.",
        features: ["Social Media strategy", "Paid Advertising", "Content Creation", "Analytics & Reporting"],
        image: card2,
        imageAlt: "Social Media Marketing",
        imagePosition: "object-center",
    },
    {
        title: "IT Consulting",
        description: "We provide expert IT consulting to streamline operations, modernize systems, and digital transformation.",
        features: ["IT strategy & Planning", "Cloud Solutions", "Digital Transformation", "On going Supporting"],
        image: card3,
        imageAlt: "IT Consulting",
        imagePosition: "object-center",
    },
];
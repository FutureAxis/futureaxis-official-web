export interface Service {
    title: string;
    description: string;
    features: string[];
    image: string;
    imageAlt: string;
    imagePosition?: string;
}

export const SERVICES: Service[] = [
    {
        title: "Web Design & Development",
        description: "We build modern responsive websites that are visually stunning, user-friendly, and optimized for performance and conversions.",
        features: ["Custom UI/UX Design", "Performance Optimization", "Responsive Development", "Scalable & Secure Solutions"],
        image: "https://res.cloudinary.com/denec4g4s/image/upload/v1781546599/future_axis/home/web-design_gayiga.png",
        imageAlt: "Web Design & Development",
        imagePosition: "object-center",
    },
    {
        title: "Social Media Marketing",
        description: "We help brands to connect with the right audience through engaging content.",
        features: ["Social Media strategy", "Paid Advertising", "Content Creation", "Analytics & Reporting"],
        image: "https://res.cloudinary.com/denec4g4s/image/upload/v1781546588/future_axis/home/social-media_mwwrsa.png",
        imageAlt: "Social Media Marketing",
        imagePosition: "object-top",
    },
    {
        title: "IT Consulting",
        description: "We provide expert IT consulting to streamline operations, modernize systems, and digital transformation.",
        features: ["IT strategy & Planning", "Cloud Solutions", "Digital Transformation", "On going Supporting"],
        image: "https://res.cloudinary.com/denec4g4s/image/upload/v1781546596/future_axis/home/consulting_qgs4p4.png",
        imageAlt: "IT Consulting",
        imagePosition: "object-center",
    },
];

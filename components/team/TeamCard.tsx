import Image from "next/image";
import { TeamMember } from "@/constants/team";

interface TeamCardProps {
    member: TeamMember;
    index: number;
    isVisible: boolean;
    priority?: boolean;
}

// Define custom focal points for specific members if needed
const getImagePosition = (name: string): string => {
    switch (name) {
        case "Chloe Pitigala":
            return "50% 20%";
        case "Hirushi Matharaarachchi":
            return "50% 30%";
        case "Sachintha Hewa Koparage":
            return "50% 25%";
        default:
            return "50% 50%";
    }
};

export const TeamCard = ({ member, index, isVisible, priority = false }: TeamCardProps) => (
    <div
        className={`transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: `${index * 120}ms` }}
    >
        <div className="group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
            <div className="relative w-full aspect-square rounded-[14px] overflow-hidden mb-5 bg-gradient-to-br from-[#7C3AED]/20 to-[#6A2187]/20">
                <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    priority={priority}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                    style={{ objectPosition: getImagePosition(member.name) }}
                />
            </div>
            <div className="text-center">
                <h3 className="text-[#A4A4A4] text-base font-medium mb-2">
                    {member.name}
                </h3>
                <p className="text-white text-base font-medium">
                    {member.role}
                </p>
            </div>
        </div>
    </div>
);
import yehan from "@/public/images/team/yehan.png";
import hirushi from "@/public/images/team/hirushi.jpeg";
import chloe from "@/public/images/team/chloe.png";
import eshan from "@/public/images/team/eshan.png";
import rebecca from "@/public/images/team/rebecca.png";
import pathum from "@/public/images/team/pathum.png";
import sachintha from "@/public/images/team/sachintha.png";
import nishan from "@/public/images/team/nishan.png";
import akalanka from "@/public/images/team/akalanka.png";
import {StaticImageData} from "next/image";

export interface TeamMember {
    name: string;
    role: string;
    image: StaticImageData;
}

export const TEAM_LEADERS: TeamMember[] = [
    {
        name: "Yehan Pitigala",
        role: "Co-Founder & Head of Business Development",
        image: yehan,
    },
    {
        name: "Hirushi Matharaarachchi",
        role: "Co-Founder & IT Consultant",
        image: hirushi,
    },
];

export const TEAM_MEMBERS: TeamMember[] = [
    {
        name: "Chloe Pitigala",
        role: "Head of Operations",
        image: chloe,
    },
    {
        name: "Eshan Gallage",
        role: "Full-Stack Engineer",
        image: eshan,
    },
    {
        name: "Rebecca Meegahapola",
        role: "UI/UX Engineer",
        image: rebecca,
    },
    {
        name: "Pathum Pitigala",
        role: "Business Analyst",
        image: pathum,
    },
    {
        name: "Sachintha Artigala",
        role: "Digital Marketing Specialist",
        image: sachintha,
    },
    {
        name: "Nishan Mudannayake",
        role: "Business Development Manager(UAE)",
        image: nishan,
    },
    {
        name: "Sachintha Hewa Koparage",
        role: "Client Experience Specialist",
        image: akalanka,
    },
];
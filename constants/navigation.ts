export interface NavItem {
    id: string;
    label: string;
    href: string;
}

export const NAV_ITEMS: NavItem[] = [
    { id: "home", label: "Home", href: "/" },
    { id: "team", label: "Our Team", href: "/team" },
    { id: "contact", label: "Contact", href: "/contact" },
];

export const SCROLL_THRESHOLD = 50;
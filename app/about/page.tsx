import OurProcess from "@/components/sections/Home/OurProcess";
import Hero from "@/components/sections/About/Hero";
import AboutSection from "@/components/sections/About/AboutSection";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <AboutSection />
            <OurProcess />
        </main>
    );
}
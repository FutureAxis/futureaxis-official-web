import OurProcess from "@/components/sections/About/OurProcess";
import Hero from "@/components/sections/About/Hero";
import AboutSection from "@/components/sections/About/AboutSection";
import ValuesSection from "@/components/sections/About/ValuesSection";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <AboutSection />
            <ValuesSection />
            <OurProcess />
        </main>
    );
}
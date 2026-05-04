import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Home/Hero";
import About from "@/components/sections/Home/About";
import Services from "@/components/sections/Home/Services";
import OurProcess from "@/components/sections/Home/OurProcess";
import CTASection from "@/components/sections/Home/CTASection";


export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Services />
            <About />
            <OurProcess />
            <CTASection />
        </main>
    );
}
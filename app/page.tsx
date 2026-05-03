import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";


export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Services />
            <About />
        </main>
    );
}
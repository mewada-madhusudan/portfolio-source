import { useEffect } from "react";
import ParticleBackground from "../components/ParticleBackground";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

export default function Index() {
    useEffect(() => {
        // Smooth scrolling for anchor links
        const handleSmoothScroll = (e: Event) => {
            const target = e.target as HTMLAnchorElement;
            if (target.hash) {
                e.preventDefault();
                const element = document.querySelector(target.hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        document.addEventListener('click', handleSmoothScroll);
        return () => document.removeEventListener('click', handleSmoothScroll);
    }, []);

    return (
        <>
            <ParticleBackground />
            <main className="relative z-10">
                <HeroSection />
                <AboutSection />
                <ExperienceSection />
                <ProjectsSection />
                <ContactSection />
            </main>
        </>
    );
}
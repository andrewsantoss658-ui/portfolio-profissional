/* ============================================================
   Home — "Precision Dark — Editorial Tech"
   Design: Página única com todas as seções do portfólio profissional
   Paleta: Preto Grafite #0A0A0A | Cinza Carvão #1C1C1E | Azul Neon #00D4FF
   Tipografia: Poppins 300/400/600/700/900 + JetBrains Mono
   Layout: Editorial minimalismo suíço adaptado ao dark digital
   ============================================================ */
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import VisualEffectsSection from "@/components/VisualEffectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificatesSection from "@/components/CertificatesSection";
import HolographicDivider from "@/components/HolographicDivider";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  // Initialize scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    // Observe all animated elements
    const elements = document.querySelectorAll(".animate-fade-up, .animate-fade-in");
    elements.forEach((el) => observer.observe(el));

    // Re-observe after a short delay to catch dynamically rendered elements
    const timeout = setTimeout(() => {
      const newElements = document.querySelectorAll(".animate-fade-up:not(.visible), .animate-fade-in:not(.visible)");
      newElements.forEach((el) => observer.observe(el));
    }, 500);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--graphite)",
        color: "oklch(0.93 0.005 240)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <VisualEffectsSection />
        <SkillsSection />
        <CertificatesSection />
        <HolographicDivider />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

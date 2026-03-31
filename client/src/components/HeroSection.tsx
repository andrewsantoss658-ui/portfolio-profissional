/* ============================================================
   HeroSection — "Precision Dark — Editorial Tech"
   Design: Full-height hero com imagem de fundo, nome em destaque,
   frase de impacto com typewriter, cursor piscante e dois botões CTA
   ============================================================ */
import { useEffect, useState } from "react";
import { ChevronDown, Download } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663397639934/VuzrUVVs5i96bHktR5Gwxp/hero-bg-jMFNcPTNdTZxvT9Zf3hXDa.webp";

const phrases = [
  "Análise de Dados",
  "Banco de Dados",
  "Solucionador de Problemas",
  "Estudante em Desenvolvimento",
];

export default function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 65);
      } else {
        timeout = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 30);
      } else {
        setPhraseIndex((i) => (i + 1) % phrases.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, phraseIndex]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />

      {/* Layered overlays for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.80) 45%, rgba(10,10,10,0.92) 100%)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--graphite))",
        }}
      />

      {/* Left vertical neon accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5 hidden lg:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent 5%, var(--neon) 25%, var(--neon) 75%, transparent 95%)",
          boxShadow: "0 0 15px rgba(0, 212, 255, 0.4)",
        }}
      />

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Label */}
          <div
            className="flex items-center gap-3 mb-8"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            <span
              className="section-number"
              style={{ color: "var(--neon)" }}
            >
              01 / 06
            </span>
            <div className="neon-line-h w-16" />
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: "var(--gray-text)" }}
            >
              Portfólio Profissional
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-black leading-none mb-5 tracking-tight"
            style={{
              fontSize: '56px',
              color: '#2ca098',
              fontFamily: "'Roboto', sans-serif",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
            }}
          >
            ANDREW SANTOS
          </h1>

          {/* Typewriter */}
          <div
            className="flex items-center gap-1 mb-8 h-9"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.8s ease 0.4s",
            }}
          >
            <span
              className="font-mono text-base font-medium"
              style={{ color: "rgba(0, 212, 255, 0.6)" }}
            >
              &gt;_{" "}
            </span>
            <span
              className="font-semibold text-lg"
              style={{ color: "oklch(0.82 0.005 240)" }}
            >
              {displayed}
            </span>
            <span className="cursor-blink text-xl font-thin" style={{ color: "var(--neon)" }}>|</span>
          </div>

          {/* Description */}
          <p
            className="text-base font-light leading-relaxed mb-10 max-w-lg"
            style={{
              color: "var(--gray-text)",
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.8s ease 0.5s",
            }}
          >
            Atualmente sou estudante de Análise e Desenvolvimento de Sistemas, com foco em especialização em Banco de Dados e Análise de Dados.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s",
            }}
          >
            <button
              onClick={() => scrollTo("#projetos")}
              className="btn-solid flex items-center gap-2"
            >
              Ver Projetos
            </button>
            <button
              onClick={() => scrollTo("#contato")}
              className="btn-neon flex items-center gap-2"
            >
              Falar Comigo
            </button>
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--gray-text)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--neon)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-text)")}
            >
              <Download size={14} />
              Currículo
            </a>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-10 mt-16 pt-8"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.8s ease 0.8s",
            }}
          >
            {[
              { value: "2", label: "Projetos em andamento" },
              { value: "100%", label: "Previsão de formação: Dezembro de 2027" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div
                  className="text-3xl font-black mb-1 transition-colors duration-300"
                  style={{ color: "var(--neon)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs font-medium tracking-wide"
                  style={{ color: "var(--gray-text)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="text-xs font-mono tracking-widest uppercase"
          style={{ color: "rgba(142, 142, 147, 0.6)" }}
        >
          scroll
        </span>
        <ChevronDown
          size={16}
          style={{ color: "var(--neon)" }}
          className="animate-bounce"
        />
      </div>
    </section>
  );
}

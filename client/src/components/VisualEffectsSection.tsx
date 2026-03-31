/*
   VisualEffectsSection — Seção com efeitos visuais modernos
   Design: Contadores e Tecnologias Holográficas
   Paleta: Azul escuro, preto, verde tecnológico
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import DataFlowBackground from "./DataFlowBackground";
import AnimatedCounter from "./AnimatedCounter";
import SectionHeader from "./SectionHeader";

export default function VisualEffectsSection() {
  const [holographicActive, setHolographicActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHolographicActive(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="efeitos"
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--graphite)" }}
    >
      {/* Background com fluxo de dados */}
      <div className="absolute inset-0 opacity-20">
        <DataFlowBackground particleCount={40} speed={1.5} opacity={0.1} />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="animate-fade-up mb-16">
          <SectionHeader
            number="04 / 06"
            title="Estatísticas & Tecnologias"
            subtitle="Progresso acadêmico e stack principal"
          />
        </div>

        {/* Contadores */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 animate-fade-up delay-100">
          {[
            { label: "Projetos em andamento", value: 2, suffix: "" },
            { label: "Previsão de formação: Dezembro de 2027", value: 100, suffix: "%" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-6 rounded-lg border text-center"
              style={{
                background: "rgba(44, 160, 152, 0.05)",
                border: "1px solid rgba(44, 160, 152, 0.2)",
              }}
            >
              <div
                className="text-3xl font-bold mb-2"
                style={{ color: "var(--neon)" }}
              >
                <AnimatedCounter
                  end={item.value}
                  duration={2000}
                  suffix={item.suffix}
                />
              </div>
              <div
                className="text-xs font-mono"
                style={{ color: "var(--gray-text)" }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tecnologias Holográficas */}
        <div ref={sectionRef} className="animate-fade-up delay-200">
          <h3
            className="text-sm font-mono mb-8"
            style={{ color: "var(--neon)" }}
          >
            &gt;_ Tecnologias Holográficas
          </h3>

          {/* Grid de cards com efeito holográfico */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Python",
                desc: "Análise de dados, backend e automação",
                icon: "🐍",
                color: "#3776AB",
              },
              {
                name: "Git",
                desc: "Controle de versão e colaboração",
                icon: "📦",
                color: "#F05032",
              },
              {
                name: "SQL",
                desc: "Banco de dados e queries otimizadas",
                icon: "💾",
                color: "#336791",
              },
            ].map((tech, idx) => (
              <div
                key={tech.name}
                className="relative group"
                style={{
                  animation: holographicActive
                    ? `holographicPulse 3s ease-in-out ${idx * 0.3}s infinite`
                    : "none",
                }}
              >
                {/* Efeito de brilho holográfico */}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, rgba(${
                      tech.color === "#3776AB"
                        ? "55, 118, 171"
                        : tech.color === "#F05032"
                        ? "240, 80, 50"
                        : "51, 103, 145"
                    }, 0.2), transparent)`,
                    filter: "blur(20px)",
                  }}
                />

                {/* Card principal */}
                <div
                  className="relative p-6 rounded-lg border backdrop-blur-sm transition-all duration-300 group-hover:border-opacity-100"
                  style={{
                    background: "rgba(44, 160, 152, 0.05)",
                    border: `1px solid ${tech.color}40`,
                    boxShadow: holographicActive
                      ? `0 0 20px ${tech.color}20, inset 0 0 20px ${tech.color}10`
                      : "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${tech.color}80`;
                    el.style.background = "rgba(44, 160, 152, 0.1)";
                    el.style.boxShadow = `0 0 30px ${tech.color}30, inset 0 0 30px ${tech.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${tech.color}40`;
                    el.style.background = "rgba(44, 160, 152, 0.05)";
                    el.style.boxShadow = holographicActive
                      ? `0 0 20px ${tech.color}20, inset 0 0 20px ${tech.color}10`
                      : "none";
                  }}
                >
                  {/* Ícone com animação */}
                  <div
                    className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      textShadow: `0 0 10px ${tech.color}40`,
                    }}
                  >
                    {tech.icon}
                  </div>

                  {/* Conteúdo */}
                  <h4
                    className="font-bold mb-2 transition-colors duration-300"
                    style={{ color: "oklch(0.93 0.005 240)" }}
                  >
                    {tech.name}
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: "var(--gray-text)" }}
                  >
                    {tech.desc}
                  </p>

                  {/* Linha de brilho inferior */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Estilos de animação holográfica */}
      <style>{`
        @keyframes holographicPulse {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(44, 160, 152, 0.2));
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(44, 160, 152, 0.4));
          }
        }
      `}</style>
    </section>
  );
}

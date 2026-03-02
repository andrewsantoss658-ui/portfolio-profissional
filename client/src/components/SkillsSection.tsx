/* ============================================================
   SkillsSection — "Precision Dark — Editorial Tech"
   Design: Hard skills com barras de progresso neon animadas + Soft skills com cards
   Imagem de fundo: skills-accent para dar profundidade visual
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";

const SKILLS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663397639934/VuzrUVVs5i96bHktR5Gwxp/skills-accent-hjBSSHjEt2agp2bUgb6m2v.webp";

const hardSkills = [
  { name: "HTML / CSS / Tailwind", level: 90, color: "#E34F26" },
  { name: "JavaScript / TypeScript", level: 85, color: "#F7DF1E" },
  { name: "React / Next.js", level: 80, color: "#61DAFB" },
  { name: "Git / GitHub", level: 85, color: "#F05032" },
  { name: "Node.js / Express", level: 75, color: "#339933" },
  { name: "Python / FastAPI", level: 70, color: "#3776AB" },
  { name: "SQL / PostgreSQL", level: 72, color: "#336791" },
  { name: "Docker / DevOps", level: 60, color: "#2496ED" },
];

const softSkills = [
  { name: "Comunicação", icon: "💬", desc: "Clareza e objetividade na transmissão de ideias técnicas e não-técnicas" },
  { name: "Trabalho em Equipe", icon: "🤝", desc: "Colaboração eficaz em ambientes ágeis e multidisciplinares" },
  { name: "Resolução de Problemas", icon: "🧩", desc: "Análise crítica e criatividade para encontrar soluções eficientes" },
  { name: "Aprendizado Contínuo", icon: "📚", desc: "Autodidatismo e rápida adaptação a novas tecnologias" },
  { name: "Organização", icon: "📋", desc: "Gestão eficiente de tempo, tarefas e prioridades" },
  { name: "Proatividade", icon: "🚀", desc: "Iniciativa, antecipação de necessidades e entrega de valor" },
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), 200);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-5 group">
      <div className="flex justify-between items-center mb-2">
        <span
          className="text-sm font-medium transition-colors duration-200"
          style={{ color: "oklch(0.82 0.005 240)" }}
        >
          {name}
        </span>
        <span
          className="text-xs font-mono font-semibold"
          style={{ color: "var(--neon)" }}
        >
          {level}%
        </span>
      </div>
      <div
        className="skill-bar-track"
        style={{ background: "var(--charcoal-light)" }}
      >
        <div
          className="skill-bar-fill"
          style={{
            width: animated ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}80, var(--neon))`,
            transition: "width 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: `0 0 8px rgba(0, 212, 255, 0.4)`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="competencias"
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--graphite)" }}
    >
      {/* Subtle background accent */}
      <div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-5 bg-cover bg-right-bottom"
        style={{ backgroundImage: `url(${SKILLS_BG})` }}
      />

      <div className="container relative z-10">
        <div className="animate-fade-up">
          <SectionHeader
            number="04 / 06"
            title="Competências"
            subtitle="Hard skills técnicas e soft skills interpessoais que definem minha atuação profissional."
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Hard Skills */}
          <div className="animate-fade-up delay-100">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-1 h-5 rounded-full"
                style={{ background: "var(--neon)", boxShadow: "0 0 8px var(--neon-glow)" }}
              />
              <span
                className="font-semibold text-sm"
                style={{ color: "oklch(0.93 0.005 240)" }}
              >
                Hard Skills
              </span>
              <div className="neon-line-h flex-1" />
            </div>
            <div>
              {hardSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="animate-fade-up delay-200">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-1 h-5 rounded-full"
                style={{ background: "var(--neon)", boxShadow: "0 0 8px var(--neon-glow)" }}
              />
              <span
                className="font-semibold text-sm"
                style={{ color: "oklch(0.93 0.005 240)" }}
              >
                Soft Skills
              </span>
              <div className="neon-line-h flex-1" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {softSkills.map((skill, i) => (
                <div
                  key={skill.name}
                  className={`animate-fade-up delay-${(i + 2) * 100} p-4 rounded-lg transition-all duration-300`}
                  style={{
                    background: "var(--charcoal)",
                    border: "1px solid var(--charcoal-light)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.3)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 15px rgba(0,212,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--charcoal-light)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{skill.icon}</span>
                    <div>
                      <div
                        className="text-sm font-semibold mb-1"
                        style={{ color: "oklch(0.9 0.005 240)" }}
                      >
                        {skill.name}
                      </div>
                      <div
                        className="text-xs font-light leading-relaxed"
                        style={{ color: "var(--gray-text)" }}
                      >
                        {skill.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech stack tags */}
            <div
              className="p-5 rounded-xl"
              style={{
                background: "var(--charcoal)",
                border: "1px solid var(--charcoal-light)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-xs font-mono font-medium"
                  style={{ color: "var(--neon)" }}
                >
                  &gt;_ Stack Principal
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "React", "TypeScript", "Node.js", "Python",
                  "PostgreSQL", "Docker", "Git", "REST API",
                  "Tailwind CSS", "Linux", "MongoDB", "AWS"
                ].map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

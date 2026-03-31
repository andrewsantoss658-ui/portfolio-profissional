/* ============================================================
   AboutSection — "Precision Dark — Editorial Tech"
   Design: Layout assimétrico com avatar neon à direita e texto editorial à esquerda
   ============================================================ */
import SectionHeader from "./SectionHeader";

const DEFAULT_ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663397639934/VuzrUVVs5i96bHktR5Gwxp/as_65ef5a88.jpeg";

const infoItems = [
  {
    label: "Área de Estudo",
    value: "Análise e Desenvolvimento de Sistemas",
    icon: "🎓",
  },
  {
    label: "Especialização Desejada",
    value: "Análise de Dados",
    icon: "⚡",
  },
  {
    label: "Objetivo Profissional",
    value: "Atuar em projetos inovadores com impacto real no mercado",
    icon: "🎯",
  },
  {
    label: "Disponibilidade",
    value: "Aberto a oportunidades — Remoto ou Presencial",
    icon: "✅",
  },
];

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--graphite)" }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(0, 212, 255, 0.04)" }}
      />

      <div className="container">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left: text — 3 cols */}
          <div className="lg:col-span-3">
            <div className="animate-fade-up">
              <SectionHeader
                number="02 / 06"
                title="Sobre Mim"
                subtitle="Conheça um pouco mais sobre minha trajetória, área de estudo e objetivos profissionais."
              />
            </div>

            <div className="animate-fade-up delay-200 space-y-4 mb-10">
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--gray-text)" }}
              >
                Atualmente sou estudante de Análise e Desenvolvimento de Sistemas, com foco em especialização em Banco de Dados e Análise de Dados. 
                 Ao longo da minha formação, estou desenvolvendo habilidades em lógica de programação, modelagem de banco de dados, consultas sql, estruturação de sistemas e análise de requisitos. 
                 Busco constantemente aprimorar meus conhecimentos técnicos e acompanhar as evoluções da área de tecnologia, mantendo foco em desempenho, organização e boas práticas de desenvolvimento.

Meu objetivo profissional é atuar na área de dados, contribuindo com soluções eficientes, seguras e escaláveis, agregando valor aos projetos por meio de análise estratégica, organização de informações e visão sistêmica.

              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--gray-text)" }}
              >
                Acredito que a tecnologia é uma ferramenta capaz de impulsionar pessoas e organizações por meio da inovação e da eficiência. 
                 Por isso, busco desenvolver soluções que vão além da funcionalidade, priorizando organização, desempenho e uma experiência clara, intuitiva e acessível para todos os usuários.
              </p>
            </div>

            {/* Info items */}
            <div className="space-y-3 mb-10">
              {infoItems.map((item, i) => (
                <div
                  key={item.label}
                  className={`animate-fade-up delay-${(i + 2) * 100} flex items-start gap-4 p-4 rounded-lg`}
                  style={{
                    background: "var(--charcoal)",
                    border: "1px solid var(--charcoal-light)",
                  }}
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <div
                      className="text-xs font-mono mb-1"
                      style={{ color: "var(--neon)" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: "oklch(0.88 0.005 240)" }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="animate-fade-up delay-600 flex gap-4">
              <button
                onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-neon"
              >
                Vamos conversar →
              </button>
              <button
                onClick={() => document.querySelector("#projetos")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--gray-text)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.93 0.005 240)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-text)")}
              >
                Ver meus projetos →
              </button>
            </div>
          </div>

          {/* Right: visual — 2 cols */}
          <div className="lg:col-span-2 animate-fade-in delay-300">
            <div className="relative flex justify-center lg:justify-end">
              {/* Glow behind image */}
              <div
                className="absolute inset-0 rounded-2xl blur-3xl"
                style={{
                  background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)",
                  transform: "scale(0.9)",
                }}
              />

              {/* Main image */}
              <div className="relative">
                <img
                  src={DEFAULT_ABOUT_IMG}
                  alt="Perfil tecnológico"
                  className="relative rounded-2xl w-full max-w-xs object-cover float-anim"
                  style={{
                    border: "1px solid rgba(0, 212, 255, 0.25)",
                    boxShadow: "0 0 50px rgba(0, 212, 255, 0.08), 0 20px 60px rgba(0,0,0,0.5)",
                  }}
                />

                {/* Code badge */}
                <div
                  className="absolute -bottom-4 -right-4 w-14 h-14 rounded-xl flex items-center justify-center neon-pulse"
                  style={{
                    background: "var(--charcoal)",
                    border: "1px solid var(--neon)",
                    boxShadow: "0 0 20px var(--neon-glow)",
                  }}
                >
                  <span
                    className="font-mono text-xs font-bold"
                    style={{ color: "var(--neon)" }}
                  >
                    &lt;/&gt;
                  </span>
                </div>

                {/* Status badge */}
                <div
                  className="absolute -top-4 -left-4 flex items-center gap-2 px-3 py-2 rounded-lg"
                  style={{
                    background: "var(--charcoal)",
                    border: "1px solid var(--charcoal-light)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: "#10B981",
                      boxShadow: "0 0 6px #10B981",
                    }}
                  />
                  <span
                    className="text-xs font-mono"
                    style={{ color: "oklch(0.85 0.005 240)" }}
                  >
                    Disponível
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

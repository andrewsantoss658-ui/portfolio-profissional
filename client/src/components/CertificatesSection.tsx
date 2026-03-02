/* ============================================================
   CertificatesSection — "Precision Dark — Editorial Tech"
   Design: Cards de certificados com ícone de categoria, meta info e botão visualizar
   ============================================================ */
import { Award, ExternalLink, Calendar, Building2, CheckCircle2 } from "lucide-react";
import SectionHeader from "./SectionHeader";

const certificates = [
  {
    id: 1,
    name: "Desenvolvimento Web Full Stack",
    institution: "Rocketseat",
    date: "Dez 2024",
    category: "Desenvolvimento",
    categoryColor: "#00D4FF",
    url: "#",
    hours: "120h",
  },
  {
    id: 2,
    name: "JavaScript Avançado — ES6+",
    institution: "Alura",
    date: "Out 2024",
    category: "Programação",
    categoryColor: "#7C3AED",
    url: "#",
    hours: "40h",
  },
  {
    id: 3,
    name: "React do Zero ao Avançado",
    institution: "Udemy",
    date: "Ago 2024",
    category: "Frontend",
    categoryColor: "#10B981",
    url: "#",
    hours: "60h",
  },
  {
    id: 4,
    name: "Python para Data Science",
    institution: "DIO",
    date: "Jun 2024",
    category: "Data Science",
    categoryColor: "#F59E0B",
    url: "#",
    hours: "80h",
  },
  {
    id: 5,
    name: "Banco de Dados SQL Completo",
    institution: "Coursera",
    date: "Abr 2024",
    category: "Database",
    categoryColor: "#EF4444",
    url: "#",
    hours: "35h",
  },
  {
    id: 6,
    name: "Docker e Kubernetes na Prática",
    institution: "Linux Foundation",
    date: "Fev 2024",
    category: "DevOps",
    categoryColor: "#8B5CF6",
    url: "#",
    hours: "50h",
  },
];

export default function CertificatesSection() {
  return (
    <section
      id="certificados"
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--charcoal)" }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
        style={{
          background: "linear-gradient(to right, transparent, var(--neon), transparent)",
          opacity: 0.2,
        }}
      />

      <div className="container">
        <div className="animate-fade-up">
          <SectionHeader
            number="05 / 06"
            title="Licenças e Certificados"
            subtitle="Cursos e certificações que comprovam meu comprometimento com o aprendizado contínuo e a excelência técnica."
          />
        </div>

        {/* Stats bar */}
        <div
          className="flex flex-wrap gap-6 mb-12 p-5 rounded-xl animate-fade-up delay-100"
          style={{
            background: "var(--graphite)",
            border: "1px solid var(--charcoal-light)",
          }}
        >
          {[
            { value: `${certificates.length}`, label: "Certificados" },
            { value: `${certificates.reduce((acc, c) => acc + parseInt(c.hours), 0)}h`, label: "Horas de Estudo" },
            { value: `${new Set(certificates.map(c => c.institution)).size}`, label: "Instituições" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <CheckCircle2 size={16} style={{ color: "var(--neon)" }} />
              <div>
                <span
                  className="font-black text-lg"
                  style={{ color: "var(--neon)" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs ml-2"
                  style={{ color: "var(--gray-text)" }}
                >
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <div
              key={cert.id}
              className={`animate-fade-up delay-${Math.min((i + 1) * 100, 500)} flex flex-col rounded-xl overflow-hidden transition-all duration-300`}
              style={{
                background: "var(--graphite)",
                border: "1px solid var(--charcoal-light)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${cert.categoryColor}40`;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 25px rgba(0,0,0,0.3), 0 0 15px ${cert.categoryColor}10`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--charcoal-light)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Top color accent */}
              <div
                className="h-0.5 w-full"
                style={{
                  background: `linear-gradient(to right, ${cert.categoryColor}, transparent)`,
                }}
              />

              <div className="p-5 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${cert.categoryColor}12`,
                      border: `1px solid ${cert.categoryColor}25`,
                    }}
                  >
                    <Award size={17} style={{ color: cert.categoryColor }} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded"
                      style={{
                        background: `${cert.categoryColor}10`,
                        color: cert.categoryColor,
                        border: `1px solid ${cert.categoryColor}20`,
                      }}
                    >
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h3
                  className="font-semibold text-sm mb-4 leading-snug flex-1"
                  style={{ color: "oklch(0.93 0.005 240)" }}
                >
                  {cert.name}
                </h3>

                {/* Meta */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Building2 size={11} style={{ color: "var(--gray-text)" }} />
                    <span
                      className="text-xs font-medium"
                      style={{ color: "var(--gray-text)" }}
                    >
                      {cert.institution}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar size={11} style={{ color: "var(--gray-text)" }} />
                      <span
                        className="text-xs font-mono"
                        style={{ color: "var(--gray-text)" }}
                      >
                        {cert.date}
                      </span>
                    </div>
                    <span
                      className="text-xs font-mono"
                      style={{ color: "var(--charcoal-light)" }}
                    >
                      {cert.hours}
                    </span>
                  </div>
                </div>

                {/* Button */}
                <a
                  href={cert.url}
                  className="flex items-center gap-2 text-xs font-semibold pt-4 transition-all duration-200 group"
                  style={{
                    borderTop: "1px solid var(--charcoal-light)",
                    color: cert.categoryColor,
                  }}
                >
                  <ExternalLink size={11} />
                  Ver Certificado
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

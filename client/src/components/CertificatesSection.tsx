/* ============================================================
   CertificatesSection — "Precision Dark — Editorial Tech"
   Design: Cards de certificados com ícone de categoria, meta info e botão visualizar
   ============================================================ */
import { useState, useEffect } from "react";
import { Award, Building2, CheckCircle2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { trpc } from "@/lib/trpc";

const certificatesData = [
  {
    id: 1,
    name: "Back-end com Python",
    institution: "Dio.me",
    category: "Desenvolvimento",
    categoryColor: "#00D4FF",
    url: "#",
  },
  {
    id: 2,
    name: "Python para Data Science",
    institution: "Dio.me",
    category: "Data Science",
    categoryColor: "#FF00FF",
    url: "#",
  },
  {
    id: 3,
    name: "Introdução à Análise de Dados",
    institution: "Fundação Bradesco",
    category: "Database",
    categoryColor: "#00FF00",
    url: "https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateDownload.ashx?uid=4279394&p=5s6BRVyVBergSQBZ%252bpzMLiwxf61bYMDt",
  },
  {
    id: 4,
    name: "Introdução à Lei Geral para Proteção de Dados",
    institution: "Academia Protegon",
    category: "Gestão de Privacidade e Proteção de Dados",
    categoryColor: "#FF6600",
    url: "#",
  },
  {
    id: 5,
    name: "Fundamentos de Lógica de Programação",
    institution: "Fundação Bradesco",
    category: "Programação",
    categoryColor: "#9D4EDD",
    url: "https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateDownload.ashx?uid=4279394&p=5s6BRVyVBeqe4mF23CyY10SESrLbldgm",
  },
  {
    id: 6,
    name: "Análise de textos",
    institution: "Unifacs",
    category: "Letras",
    categoryColor: "#FF1493",
    url: "#",
  },
  {
    id: 7,
    name: "Montagem e Manutenção de Computadores",
    institution: "Prepara Cursos",
    category: "Manutenção de Micro",
    categoryColor: "#FFFF00",
    url: "#",
  },
  {
    id: 8,
    name: "Formatação em CFTV",
    institution: "Prepara Cursos",
    category: "Manutenção de CFTV",
    categoryColor: "#FFFF00",
    url: "#",
  },
];

// Skeleton Loading Component
function CertificateSkeleton() {
  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col"
      style={{
        background: "var(--graphite)",
        border: "1px solid var(--charcoal-light)",
      }}
    >
      {/* Top color accent skeleton */}
      <div
        className="h-0.5 w-full"
        style={{
          background: "linear-gradient(to right, var(--charcoal-light), transparent)",
        }}
      />

      <div className="p-5 flex flex-col flex-1">
        {/* Header skeleton */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-10 h-10 rounded-lg flex-shrink-0 animate-pulse"
            style={{
              background: "var(--charcoal-light)",
            }}
          />
          <div
            className="h-6 w-24 rounded animate-pulse"
            style={{
              background: "var(--charcoal-light)",
            }}
          />
        </div>

        {/* Name skeleton */}
        <div className="space-y-2 mb-4">
          <div
            className="h-4 w-full rounded animate-pulse"
            style={{
              background: "var(--charcoal-light)",
            }}
          />
          <div
            className="h-4 w-3/4 rounded animate-pulse"
            style={{
              background: "var(--charcoal-light)",
            }}
          />
        </div>

        {/* Meta skeleton */}
        <div className="space-y-2">
          <div
            className="h-3 w-1/2 rounded animate-pulse"
            style={{
              background: "var(--charcoal-light)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function CertificatesSection() {
  const [visibleCount, setVisibleCount] = useState(6);
  const itemsPerPage = 3;

  // Query para carregar certificados do banco
  const certificatesQuery = trpc.portfolio.certificates.list.useQuery();
  const isLoading = certificatesQuery.isLoading;
  const certificates = (certificatesQuery.data && certificatesQuery.data.length > 0) ? certificatesQuery.data : certificatesData;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + itemsPerPage);
  };

  const hasMore = visibleCount < certificates.length;

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
          {isLoading ? (
            <>
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded-full animate-pulse"
                  style={{ background: "var(--charcoal-light)" }}
                />
                <div>
                  <div
                    className="h-5 w-8 rounded animate-pulse mb-1"
                    style={{ background: "var(--charcoal-light)" }}
                  />
                  <div
                    className="h-3 w-20 rounded animate-pulse"
                    style={{ background: "var(--charcoal-light)" }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded-full animate-pulse"
                  style={{ background: "var(--charcoal-light)" }}
                />
                <div>
                  <div
                    className="h-5 w-6 rounded animate-pulse mb-1"
                    style={{ background: "var(--charcoal-light)" }}
                  />
                  <div
                    className="h-3 w-20 rounded animate-pulse"
                    style={{ background: "var(--charcoal-light)" }}
                  />
                </div>
              </div>
            </>
          ) : (
            [
              { value: `${certificates.length}`, label: "Certificados" },
              { value: `${new Set(certificates.map(c => (c as any).institution || (c as any).issuer)).size}`, label: "Instituições" },
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
            ))
          )}
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {isLoading ? (
            // Skeleton loading
            Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`animate-fade-up delay-${Math.min((i + 1) * 100, 500)}`}
              >
                <CertificateSkeleton />
              </div>
            ))
          ) : (
            // Actual certificates
            certificates.slice(0, visibleCount).map((cert, i) => {
              const color = (cert as any).categoryColor || "var(--neon)";
              return (
              <div
                key={cert.id}
                className={`animate-fade-up delay-${Math.min((i + 1) * 100, 500)} flex flex-col rounded-xl overflow-hidden transition-all duration-300 group`}
                style={{
                  background: "var(--graphite)",
                  border: `2px solid var(--charcoal-light)`,
                  borderTop: `3px solid ${color}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${color}40`;
                  (e.currentTarget as HTMLElement).style.borderTopColor = color;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 30px rgba(0,0,0,0.4), 0 0 20px ${color}15`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--charcoal-light)";
                  (e.currentTarget as HTMLElement).style.borderTopColor = color;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div className="p-5 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${color}12`,
                        border: `1px solid ${color}25`,
                      }}
                    >
                      <Award size={17} style={{ color: color }} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-mono px-2 py-0.5 rounded"
                        style={{
                          background: `${color}10`,
                          color: color,
                          border: `1px solid ${color}20`,
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
                    {(cert as any).name || (cert as any).title}
                  </h3>

                  {/* Meta */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Building2 size={11} style={{ color: "var(--gray-text)" }} />
                      <span
                        className="text-xs font-medium"
                        style={{ color: "var(--gray-text)" }}
                      >
                        {(cert as any).institution || (cert as any).issuer}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
            })
          )}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-12 animate-fade-up">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2"
              style={{
                background: "transparent",
                border: "1.5px solid var(--neon)",
                color: "var(--neon)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--neon)20";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px var(--neon)30";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Ver Mais Certificados
              <svg
                className="w-4 h-4 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

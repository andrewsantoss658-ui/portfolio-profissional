/*
   ProjectsSection — "Precision Dark — Editorial Tech"
   Design: Grid de cards com filtro por tipo, tags de tech, botões de ação
   Imagem de fundo: projects-bg para textura
   Animação: Skeleton loading com shimmer effect
   ============================================================ */
import { useState, useEffect } from "react";
import { ExternalLink, Github, Users, User, Code2 } from "lucide-react";
import SectionHeader from "./SectionHeader";

const PROJECTS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663397639934/VuzrUVVs5i96bHktR5Gwxp/projects-bg-3cZiUG3uxQnKjTLEp96ZJG.webp";

type ProjectType = "individual" | "equipe";

interface Project {
  id: number;
  type: ProjectType;
  title: string;
  description: string;
  techs: string[];
  github: string;
  demo: string;
  featured: boolean;
  year: string;
}

const projects: Project[] = [
  {
    id: 9,
    type: "individual",
    title: "GESTUM - Sistema de Gestão",
    description:
      "Sistema de gestão desenvolvido para organização de tarefas, controle de processos e gerenciamento de informações, com foco em produtividade e organização de dados.",
    techs: ["React", "Node.js", "PostgreSQL"],
    github: "#",
    demo: "#",
    featured: false,
    year: "2024",
  },
  {
    id: 10,
    type: "individual",
    title: "Portfólio Interativo",
    description:
      "Site de portfólio profissional desenvolvido para apresentar projetos, certificações, competências e trajetória acadêmica, com design moderno, animações e navegação intuitiva.",
    techs: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#",
    featured: false,
    year: "2024",
  },
];

type Filter = "todos" | "individual" | "equipe";

// Skeleton loading component
function ProjectSkeleton() {
  return (
    <div
      className="flex flex-col rounded-xl overflow-hidden animate-pulse"
      style={{
        background: "var(--graphite)",
        border: "1px solid var(--charcoal-light)",
      }}
    >
      <div className="h-0.5 w-full" style={{ background: "transparent" }} />
      <div className="p-6 flex flex-col flex-1 gap-4">
        {/* Header skeleton */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg"
              style={{
                background: "rgba(0,212,255,0.08)",
              }}
            />
            <div
              className="w-16 h-4 rounded"
              style={{
                background: "linear-gradient(90deg, rgba(0,212,255,0.1) 0%, rgba(0,212,255,0.05) 50%, rgba(0,212,255,0.1) 100%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 2s infinite",
              }}
            />
          </div>
        </div>

        {/* Title skeleton */}
        <div
          className="h-6 rounded"
          style={{
            background: "linear-gradient(90deg, rgba(0,212,255,0.1) 0%, rgba(0,212,255,0.05) 50%, rgba(0,212,255,0.1) 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2s infinite",
          }}
        />

        {/* Description skeleton */}
        <div className="space-y-2">
          <div
            className="h-4 rounded w-full"
            style={{
              background: "linear-gradient(90deg, rgba(0,212,255,0.1) 0%, rgba(0,212,255,0.05) 50%, rgba(0,212,255,0.1) 100%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 2s infinite",
            }}
          />
          <div
            className="h-4 rounded w-4/5"
            style={{
              background: "linear-gradient(90deg, rgba(0,212,255,0.1) 0%, rgba(0,212,255,0.05) 50%, rgba(0,212,255,0.1) 100%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 2s infinite",
            }}
          />
        </div>

        {/* Tech tags skeleton */}
        <div className="flex gap-2 flex-wrap">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-6 w-16 rounded-full"
              style={{
                background: "linear-gradient(90deg, rgba(0,212,255,0.1) 0%, rgba(0,212,255,0.05) 50%, rgba(0,212,255,0.1) 100%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 2s infinite",
              }}
            />
          ))}
        </div>

        {/* Buttons skeleton */}
        <div className="flex gap-2 mt-4">
          <div
            className="h-8 flex-1 rounded"
            style={{
              background: "linear-gradient(90deg, rgba(0,212,255,0.1) 0%, rgba(0,212,255,0.05) 50%, rgba(0,212,255,0.1) 100%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 2s infinite",
            }}
          />
          <div
            className="h-8 flex-1 rounded"
            style={{
              background: "linear-gradient(90deg, rgba(0,212,255,0.1) 0%, rgba(0,212,255,0.05) 50%, rgba(0,212,255,0.1) 100%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 2s infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("todos");
  const [isLoading, setIsLoading] = useState(true);

  // Simular carregamento de dados
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [filter]);

  // Resetar loading ao trocar filtro
  const handleFilterChange = (newFilter: Filter) => {
    setFilter(newFilter);
    setIsLoading(true);
  };

  const filtered = projects.filter((p) =>
    filter === "todos" ? true : p.type === filter
  );

  return (
    <section
      id="projetos"
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--charcoal)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{ backgroundImage: `url(${PROJECTS_BG})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "rgba(28, 28, 30, 0.88)" }}
      />

      <style>{`
        @keyframes shimmer {
          0% {
            backgroundPosition: -200% 0;
          }
          100% {
            backgroundPosition: 200% 0;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .project-card-enter {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <div className="container relative z-10">
        <div className="animate-fade-up">
          <SectionHeader
            number="03 / 06"
            title="Projetos"
            subtitle="Uma seleção dos meus trabalhos — projetos individuais e colaborativos que demonstram minhas habilidades técnicas."
          />
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-10 animate-fade-up delay-100">
          {(["todos", "individual", "equipe"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              className="text-xs font-mono px-4 py-2 rounded-md border capitalize transition-all duration-200"
              style={{
                borderColor: filter === f ? "var(--neon)" : "var(--charcoal-light)",
                color: filter === f ? "var(--neon)" : "var(--gray-text)",
                background: filter === f ? "rgba(0,212,255,0.06)" : "transparent",
                boxShadow: filter === f ? "0 0 10px rgba(0,212,255,0.1)" : "none",
              }}
            >
              {f === "todos" ? "Todos" : f === "individual" ? "Individual" : "Em Equipe"}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {isLoading
            ? // Mostrar skeletons durante carregamento
              Array.from({ length: filtered.length || 3 }).map((_, i) => (
                <ProjectSkeleton key={`skeleton-${i}`} />
              ))
            : // Mostrar projetos com animação
              filtered.map((project, i) => (
                <div
                  key={project.id}
                  className="project-card-enter flex flex-col rounded-xl overflow-hidden transition-all duration-300"
                  style={{
                    background: "var(--graphite)",
                    border: project.featured
                      ? "1px solid rgba(0, 212, 255, 0.3)"
                      : "1px solid var(--charcoal-light)",
                    boxShadow: project.featured
                      ? "0 0 25px rgba(0, 212, 255, 0.07)"
                      : "none",
                    animationDelay: `${i * 100}ms`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.4)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.4), 0 0 20px rgba(0,212,255,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = project.featured ? "rgba(0, 212, 255, 0.3)" : "var(--charcoal-light)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = project.featured ? "0 0 25px rgba(0, 212, 255, 0.07)" : "none";
                  }}
                >
                  {/* Card top accent */}
                  <div
                    className="h-0.5 w-full"
                    style={{
                      background: project.featured
                        ? "linear-gradient(to right, var(--neon), transparent)"
                        : "transparent",
                    }}
                  />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{
                            background: "rgba(0,212,255,0.08)",
                            border: "1px solid rgba(0,212,255,0.15)",
                          }}
                        >
                          <Code2 size={14} style={{ color: "var(--neon)" }} />
                        </div>
                        <div className="flex items-center gap-1.5">
                          {project.type === "individual" ? (
                            <User size={11} style={{ color: "var(--gray-text)" }} />
                          ) : (
                            <Users size={11} style={{ color: "var(--gray-text)" }} />
                          )}
                          <span
                            className="text-xs font-mono"
                            style={{ color: "var(--gray-text)" }}
                          >
                            {project.type === "individual" ? "Individual" : "Equipe"}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {project.featured && (
                          <span
                            className="text-xs font-mono px-2 py-0.5 rounded"
                            style={{
                              background: "rgba(0,212,255,0.08)",
                              color: "var(--neon)",
                              border: "1px solid rgba(0,212,255,0.2)",
                            }}
                          >
                            ★
                          </span>
                        )}
                        <span
                          className="text-xs font-mono"
                          style={{ color: "var(--charcoal-light)" }}
                        >
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-bold text-lg mb-3 leading-tight"
                      style={{ color: "oklch(0.93 0.005 240)" }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm font-light leading-relaxed flex-1 mb-5"
                      style={{ color: "var(--gray-text)" }}
                    >
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex gap-2 flex-wrap mb-5">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2.5 py-1 rounded-full"
                          style={{
                            background: "rgba(0,212,255,0.08)",
                            color: "var(--neon)",
                            border: "1px solid rgba(0,212,255,0.15)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border text-xs font-mono transition-all duration-200"
                        style={{
                          borderColor: "rgba(0,212,255,0.2)",
                          color: "var(--neon)",
                          background: "rgba(0,212,255,0.03)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.08)";
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.4)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.03)";
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.2)";
                        }}
                      >
                        <Github size={12} />
                        Código
                      </a>
                      <a
                        href={project.demo}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border text-xs font-mono transition-all duration-200"
                        style={{
                          borderColor: "rgba(0,212,255,0.2)",
                          color: "var(--neon)",
                          background: "rgba(0,212,255,0.03)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.08)";
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.4)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.03)";
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.2)";
                        }}
                      >
                        <ExternalLink size={12} />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}

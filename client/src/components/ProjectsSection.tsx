/* ============================================================
   ProjectsSection — "Precision Dark — Editorial Tech"
   Design: Grid de cards com filtro por tipo, tags de tech, botões de ação
   Imagem de fundo: projects-bg para textura
   Animação: Skeleton loading com shimmer effect
   ============================================================ */
import { useState, useEffect } from "react";
import { ExternalLink, Github, Users, User, Code2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { trpc } from "@/lib/trpc";

const PROJECTS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663397639934/VuzrUVVs5i96bHktR5Gwxp/projects-bg-3cZiUG3uxQnKjTLEp96ZJG.webp";

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
            className="h-4 rounded w-3/4"
            style={{
              background: "linear-gradient(90deg, rgba(0,212,255,0.1) 0%, rgba(0,212,255,0.05) 50%, rgba(0,212,255,0.1) 100%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 2s infinite",
            }}
          />
        </div>

        {/* Tags skeleton */}
        <div className="flex flex-wrap gap-2">
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
        <div className="flex gap-2 mt-auto">
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
  const [visibleCount, setVisibleCount] = useState(6);
  const itemsPerPage = 3;

  // Query para carregar projetos do banco
  const projectsQuery = trpc.portfolio.projects.list.useQuery();

  // Filtra projetos baseado no filtro selecionado
  const filteredProjects = projectsQuery.data?.filter((project) => {
    if (filter === "todos") return true;
    const projectType = project.type === "individual" ? "individual" : "equipe";
    return projectType === filter;
  }) || [];

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + itemsPerPage);
  };

  // Reseta visibleCount quando o filtro muda
  useEffect(() => {
    setVisibleCount(6);
  }, [filter]);

  return (
    <section
      id="projetos"
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--charcoal)" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('${PROJECTS_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
        style={{
          background: "linear-gradient(to right, transparent, var(--neon), transparent)",
          opacity: 0.2,
        }}
      />

      <div className="container relative z-10">
        <div className="animate-fade-up">
          <SectionHeader
            number="02 / 06"
            title="Projetos"
            subtitle="Trabalhos que demonstram minha capacidade de análise, desenvolvimento e resolução de problemas."
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12 animate-fade-up delay-100">
          {(["todos", "individual", "equipe"] as const).map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className="px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300"
              style={{
                background: filter === filterType ? "var(--neon)" : "transparent",
                border: `1.5px solid ${filter === filterType ? "var(--neon)" : "var(--charcoal-light)"}`,
                color: filter === filterType ? "#0A0A0A" : "var(--neon)",
              }}
              onMouseEnter={(e) => {
                if (filter !== filterType) {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--neon)";
                  (e.currentTarget as HTMLElement).style.color = "var(--neon)";
                }
              }}
              onMouseLeave={(e) => {
                if (filter !== filterType) {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--charcoal-light)";
                  (e.currentTarget as HTMLElement).style.color = "var(--neon)";
                }
              }}
            >
              {filterType === "todos" && "Todos"}
              {filterType === "individual" && "Individual"}
              {filterType === "equipe" && "Em Equipe"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsQuery.isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`animate-fade-up delay-${Math.min((i + 1) * 100, 500)}`}
                >
                  <ProjectSkeleton />
                </div>
              ))
            : visibleProjects.map((project, i) => {
                let technologies: string[] = [];
                try {
                  // Try to parse as JSON first
                  technologies = JSON.parse(project.technologies || "[]");
                } catch (e) {
                  // Fallback: treat as CSV
                  technologies = (project.technologies || "")
                    .split(",")
                    .map((t) => t.trim())
                    .filter(Boolean);
                }
                const isIndividual = project.type === "individual";

                return (
                  <div
                    key={project.id}
                    className={`animate-fade-up delay-${Math.min((i + 1) * 100, 500)} flex flex-col rounded-xl overflow-hidden transition-all duration-300`}
                    style={{
                      background: "var(--graphite)",
                      border: "1px solid var(--charcoal-light)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--neon)40";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 8px 25px rgba(0,0,0,0.3), 0 0 15px rgba(0,212,255,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--charcoal-light)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {/* Top accent */}
                    <div
                      className="h-0.5 w-full"
                      style={{
                        background: "linear-gradient(to right, var(--neon), transparent)",
                      }}
                    />

                    <div className="p-6 flex flex-col flex-1">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          {isIndividual ? (
                            <User size={18} style={{ color: "var(--neon)" }} />
                          ) : (
                            <Users size={18} style={{ color: "var(--neon)" }} />
                          )}
                          <span
                            className="text-xs font-semibold uppercase tracking-wider"
                            style={{ color: "var(--neon)" }}
                          >
                            {isIndividual ? "Individual" : "Em Equipe"}
                          </span>
                        </div>

                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold mb-3">{project.title}</h3>

                      {/* Description */}
                      <p
                        className="text-sm mb-4 flex-1"
                        style={{ color: "var(--gray-text)" }}
                      >
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {technologies.map((tech: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{
                              background: "var(--neon)15",
                              color: "var(--neon)",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-2">
                        <a
                          href={project.link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                          style={{
                            background: "transparent",
                            border: "1px solid var(--neon)",
                            color: "var(--neon)",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background = "var(--neon)15";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background = "transparent";
                          }}
                        >
                          <Code2 size={14} />
                          Código
                        </a>
                        <a
                          href={project.link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                          style={{
                            background: "var(--neon)",
                            color: "#0A0A0A",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.boxShadow =
                              "0 0 20px var(--neon)40";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.boxShadow = "none";
                          }}
                        >
                          <ExternalLink size={14} />
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
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
              Ver Mais Projetos
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

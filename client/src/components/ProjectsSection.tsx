/* ============================================================
   ProjectsSection — "Precision Dark — Editorial Tech"
   Design: Grid de cards com filtro por tipo, tags de tech, botões de ação
   Imagem de fundo: projects-bg para textura
   ============================================================ */
import { useState } from "react";
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
    id: 1,
    type: "individual",
    title: "Sistema de Gestão",
    description:
      "Aplicação web completa para gestão de tarefas e projetos com autenticação, dashboard interativo e relatórios em tempo real.",
    techs: ["React", "Node.js", "PostgreSQL", "Docker"],
    github: "#",
    demo: "#",
    featured: true,
    year: "2024",
  },
  {
    id: 2,
    type: "equipe",
    title: "E-commerce Platform",
    description:
      "Plataforma de comércio eletrônico desenvolvida em equipe com integração de pagamentos, controle de estoque e painel administrativo.",
    techs: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    github: "#",
    demo: "#",
    featured: false,
    year: "2024",
  },
  {
    id: 3,
    type: "individual",
    title: "API REST Financeira",
    description:
      "API robusta para controle financeiro pessoal com autenticação JWT, categorização automática e relatórios mensais detalhados.",
    techs: ["Python", "FastAPI", "SQLite", "JWT"],
    github: "#",
    demo: "#",
    featured: false,
    year: "2024",
  },
  {
    id: 4,
    type: "equipe",
    title: "App Mobile de Saúde",
    description:
      "Aplicativo mobile para acompanhamento de saúde e bem-estar, desenvolvido em equipe com foco em UX e acessibilidade.",
    techs: ["React Native", "Firebase", "Redux", "Expo"],
    github: "#",
    demo: "#",
    featured: false,
    year: "2023",
  },
  {
    id: 5,
    type: "individual",
    title: "Dashboard Analytics",
    description:
      "Dashboard interativo para visualização de dados e métricas de negócio com gráficos dinâmicos e filtros avançados.",
    techs: ["Vue.js", "D3.js", "Express", "MySQL"],
    github: "#",
    demo: "#",
    featured: false,
    year: "2023",
  },
  {
    id: 6,
    type: "equipe",
    title: "Plataforma de Ensino",
    description:
      "LMS completo para cursos online com videoaulas, quizzes, certificados automáticos e fórum de discussão entre alunos.",
    techs: ["Angular", "Spring Boot", "AWS S3", "WebSocket"],
    github: "#",
    demo: "#",
    featured: false,
    year: "2023",
  },
];

type Filter = "todos" | "individual" | "equipe";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("todos");

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
              onClick={() => setFilter(f)}
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
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`animate-fade-up delay-${Math.min((i + 1) * 100, 500)} flex flex-col rounded-xl overflow-hidden transition-all duration-300`}
              style={{
                background: "var(--graphite)",
                border: project.featured
                  ? "1px solid rgba(0, 212, 255, 0.3)"
                  : "1px solid var(--charcoal-light)",
                boxShadow: project.featured
                  ? "0 0 25px rgba(0, 212, 255, 0.07)"
                  : "none",
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
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techs.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div
                  className="flex gap-4 pt-4"
                  style={{ borderTop: "1px solid var(--charcoal-light)" }}
                >
                  <a
                    href={project.demo}
                    className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group"
                    style={{ color: "var(--neon)" }}
                  >
                    <ExternalLink size={11} />
                    Visualizar
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
                    style={{ color: "var(--gray-text)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.93 0.005 240)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-text)")}
                  >
                    <Github size={11} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12 animate-fade-up delay-500">
          <a
            href="https://github.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon inline-flex items-center gap-2"
          >
            <Github size={14} />
            Ver todos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

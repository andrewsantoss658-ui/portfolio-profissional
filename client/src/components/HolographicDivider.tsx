/* ============================================================
   HolographicDivider — Seção divisora holográfica
   Design: Elementos tecnológicos flutuantes com efeito holograma
   Animações: Flutuação, glow, hover effects
   ============================================================ */
import { useState } from "react";
import {
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Package,
  Zap,
  FileCode,
} from "lucide-react";

interface TechIcon {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
}

const technologies: TechIcon[] = [
  {
    id: "python",
    name: "Python",
    icon: <Code2 size={32} />,
    color: "#3776AB",
    delay: 0,
  },
  {
    id: "html-css",
    name: "HTML / CSS / Tailwind",
    icon: <FileCode size={32} />,
    color: "#F16529",
    delay: 0.1,
  },
  {
    id: "js-ts",
    name: "JavaScript / TypeScript",
    icon: <Zap size={32} />,
    color: "#F7DF1E",
    delay: 0.2,
  },
  {
    id: "git",
    name: "Git / GitHub",
    icon: <GitBranch size={32} />,
    color: "#181717",
    delay: 0.3,
  },
  {
    id: "nodejs",
    name: "Node.js / Express",
    icon: <Package size={32} />,
    color: "#339933",
    delay: 0.4,
  },
  {
    id: "react",
    name: "React / Next.js",
    icon: <Layers size={32} />,
    color: "#61DAFB",
    delay: 0.5,
  },
  {
    id: "sql",
    name: "SQL / PostgreSQL",
    icon: <Database size={32} />,
    color: "#336791",
    delay: 0.6,
  },
  {
    id: "docker",
    name: "Docker",
    icon: <Cpu size={32} />,
    color: "#2496ED",
    delay: 0.7,
  },
];

export default function HolographicDivider() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, var(--graphite) 0%, rgba(26, 26, 28, 0.5) 100%)",
      }}
    >
      {/* Background gradient effect */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0, 212, 255, 0.05) 0%, transparent 70%)",
        }}
      />

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="var(--neon)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Tech icons grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="flex justify-center"
              style={{
                animation: `float 6s ease-in-out infinite`,
                animationDelay: `${tech.delay}s`,
              }}
              onMouseEnter={() => setHoveredId(tech.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className="relative group cursor-pointer transition-all duration-300"
                style={{
                  transform:
                    hoveredId === tech.id ? "scale(1.2)" : "scale(1)",
                }}
              >
                {/* Glow background */}
                <div
                  className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${tech.color}40 0%, transparent 70%)`,
                  }}
                />

                {/* Icon container */}
                <div
                  className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl border transition-all duration-300"
                  style={{
                    background: `${tech.color}08`,
                    border: `1.5px solid ${tech.color}30`,
                    boxShadow:
                      hoveredId === tech.id
                        ? `0 0 20px ${tech.color}60, inset 0 0 20px ${tech.color}20`
                        : `0 0 10px ${tech.color}20`,
                    color: tech.color,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      `${tech.color}80`;
                    (e.currentTarget as HTMLElement).style.background =
                      `${tech.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      `${tech.color}30`;
                    (e.currentTarget as HTMLElement).style.background =
                      `${tech.color}08`;
                  }}
                >
                  {/* Icon with glow effect */}
                  <div
                    className="transition-all duration-300"
                    style={{
                      filter:
                        hoveredId === tech.id
                          ? `drop-shadow(0 0 8px ${tech.color})`
                          : "none",
                    }}
                  >
                    {tech.icon}
                  </div>
                </div>

                {/* Tooltip */}
                <div
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `${tech.color}20`,
                    border: `1px solid ${tech.color}50`,
                    color: tech.color,
                  }}
                >
                  {tech.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider line */}
        <div className="mt-16 relative">
          <div
            className="h-px relative"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, var(--neon) 50%, transparent 100%)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
            style={{
              background: "var(--neon)",
              boxShadow: "0 0 20px var(--neon), 0 0 40px var(--neon)80",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 10px currentColor;
          }
          50% {
            box-shadow: 0 0 20px currentColor, 0 0 30px currentColor;
          }
        }
      `}</style>
    </section>
  );
}

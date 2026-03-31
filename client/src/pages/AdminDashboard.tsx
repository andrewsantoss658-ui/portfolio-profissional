import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { BarChart3, FileText, Mail, Settings, Briefcase } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function AdminDashboard() {
  const { user, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  // Redireciona para login se não autenticado
  useEffect(() => {
    if (!isAuthenticated && user === null) {
      setLocation("/");
    }
  }, [isAuthenticated, user, setLocation]);

  // Queries para dados
  const projectsQuery = trpc.portfolio.projects.list.useQuery();
  const certificatesQuery = trpc.portfolio.certificates.list.useQuery();
  const messagesQuery = trpc.portfolio.messages.list.useQuery();

  const stats = [
    {
      label: "Projetos",
      value: projectsQuery.data?.length || 0,
      icon: Briefcase,
      color: "#2ca098",
    },
    {
      label: "Certificados",
      value: certificatesQuery.data?.length || 0,
      icon: FileText,
      color: "#F59E0B",
    },
    {
      label: "Mensagens",
      value: messagesQuery.data?.length || 0,
      icon: Mail,
      color: "#EF4444",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--graphite)",
        color: "oklch(0.93 0.005 240)",
      }}
    >
      {/* Header */}
      <div
        className="border-b"
        style={{
          borderColor: "var(--charcoal-light)",
          background: "var(--charcoal)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Painel Administrativo</h1>
          <p style={{ color: "var(--gray-text)" }}>
            Bem-vindo, {user?.name || "Usuário"}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-6 rounded-xl border transition-all duration-300"
                style={{
                  background: "var(--graphite)",
                  borderColor: "var(--charcoal-light)",
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p style={{ color: "var(--gray-text)" }} className="text-sm mb-2">
                      {stat.label}
                    </p>
                    <p className="text-4xl font-bold" style={{ color: stat.color }}>
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className="p-3 rounded-lg"
                    style={{
                      background: `${stat.color}15`,
                    }}
                  >
                    <Icon size={24} style={{ color: stat.color }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div
          className="p-8 rounded-xl border"
          style={{
            background: "var(--graphite)",
            borderColor: "var(--charcoal-light)",
          }}
        >
          <h2 className="text-xl font-bold mb-6">Gerenciar</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="/admin/projects"
              className="p-4 rounded-lg border transition-all duration-300 flex items-center gap-3"
              style={{
                background: "var(--charcoal)",
                borderColor: "var(--charcoal-light)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#2ca098";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 15px rgba(44, 160, 152, 0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--charcoal-light)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <Briefcase size={20} style={{ color: "#2ca098" }} />
              <span>Gerenciar Projetos</span>
            </a>
            <a
              href="/admin/certificates"
              className="p-4 rounded-lg border transition-all duration-300 flex items-center gap-3"
              style={{
                background: "var(--charcoal)",
                borderColor: "var(--charcoal-light)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#F59E0B";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 15px rgba(245, 158, 11, 0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--charcoal-light)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <FileText size={20} style={{ color: "#F59E0B" }} />
              <span>Gerenciar Certificados</span>
            </a>
            <a
              href="/admin/messages"
              className="p-4 rounded-lg border transition-all duration-300 flex items-center gap-3"
              style={{
                background: "var(--charcoal)",
                borderColor: "var(--charcoal-light)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#EF4444";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 15px rgba(239, 68, 68, 0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--charcoal-light)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <Mail size={20} style={{ color: "#EF4444" }} />
              <span>Mensagens de Contato</span>
            </a>
            <a
              href="/admin/settings"
              className="p-4 rounded-lg border transition-all duration-300 flex items-center gap-3"
              style={{
                background: "var(--charcoal)",
                borderColor: "var(--charcoal-light)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#00D4FF";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 15px rgba(0, 212, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--charcoal-light)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <Settings size={20} style={{ color: "#00D4FF" }} />
              <span>Configurações</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

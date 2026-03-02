/* ============================================================
   Footer — "Precision Dark — Editorial Tech"
   Design: Footer com logo, links rápidos, redes sociais e copyright
   ============================================================ */
import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";

const quickLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Competências", href: "#competencias" },
  { label: "Certificados", href: "#certificados" },
  { label: "Contato", href: "#contato" },
];

const socials = [
  { icon: Github, href: "https://github.com/andrewsantoss658-ui", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/andrew-santoss/", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/5571997383026", label: "WhatsApp" },
  { icon: Mail, href: "mailto:andrew.santoss@outlook.com", label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative"
      style={{
        background: "var(--charcoal)",
        borderTop: "1px solid var(--charcoal-light)",
      }}
    >
      {/* Top neon line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent 0%, var(--neon) 50%, transparent 100%)",
          opacity: 0.35,
        }}
      />

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="font-mono text-base font-bold"
                style={{ color: "var(--neon)" }}
              >
                &lt;/&gt;
              </span>
              <span
                className="font-bold text-base"
                style={{ color: "oklch(0.85 0.005 240)" }}
              >
                Dev<span style={{ color: "var(--neon)" }}>.</span>Portfolio
              </span>
            </div>
            <p
              className="text-xs font-light leading-relaxed max-w-xs"
              style={{ color: "var(--gray-text)" }}
            >
              Portfólio profissional desenvolvido com React, TypeScript e Tailwind CSS.
              Design editorial dark com detalhes tecnológicos em azul neon.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div
              className="text-xs font-mono mb-4"
              style={{ color: "var(--neon)" }}
            >
              Navegação
            </div>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-xs font-medium transition-colors duration-200"
                    style={{ color: "var(--gray-text)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--neon)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-text)")}
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <div
              className="text-xs font-mono mb-4"
              style={{ color: "var(--neon)" }}
            >
              Redes Sociais
            </div>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "var(--graphite)",
                    border: "1px solid var(--charcoal-light)",
                    color: "var(--gray-text)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--neon)";
                    (e.currentTarget as HTMLElement).style.color = "var(--neon)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 10px var(--neon-glow)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--charcoal-light)";
                    (e.currentTarget as HTMLElement).style.color = "var(--gray-text)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid var(--charcoal-light)" }}
        >
          <p
            className="text-xs font-mono"
            style={{ color: "var(--gray-text)" }}
          >
            © {year} Dev.Portfolio — Todos os direitos reservados
          </p>

          <div className="flex items-center gap-4">
            <span
              className="text-xs font-mono"
              style={{ color: "var(--gray-text)" }}
            >
              Feito com{" "}
              <span style={{ color: "var(--neon)" }}>React</span> +{" "}
              <span style={{ color: "var(--neon)" }}>TypeScript</span>
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs font-mono px-3 py-1.5 rounded border transition-all duration-200"
              style={{
                color: "var(--gray-text)",
                borderColor: "var(--charcoal-light)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--neon)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--neon)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--gray-text)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--charcoal-light)";
              }}
            >
              ↑ Topo
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   Navbar — "Precision Dark — Editorial Tech"
   Design: Sticky top nav com logo neon, links de seção e menu mobile
   Comportamento: Transparente no topo, escurece ao scroll
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Competências", href: "#competencias" },
  { label: "Certificados", href: "#certificados" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["hero", "sobre", "projetos", "competencias", "certificados", "contato"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled
          ? "rgba(10, 10, 10, 0.96)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          className="flex items-center gap-2 group"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
            style={{
              background: "rgba(0,212,255,0.1)",
              border: "1px solid rgba(0,212,255,0.25)",
            }}
          >
            <Code2 size={14} style={{ color: "var(--neon)" }} />
          </div>
          <span
            className="font-bold text-sm tracking-tight hidden sm:block"
            style={{ color: "oklch(0.93 0.005 240)" }}
          >
            Dev<span style={{ color: "var(--neon)" }}>.</span>Portfolio
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="relative px-4 py-2 text-xs font-medium rounded-md transition-all duration-200"
                style={{
                  color: isActive ? "var(--neon)" : "var(--gray-text)",
                  background: isActive ? "rgba(0,212,255,0.06)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "oklch(0.93 0.005 240)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--gray-text)";
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "var(--neon)" }}
                  />
                )}
              </a>
            );
          })}
          <a
            href="#contato"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contato"); }}
            className="btn-neon text-xs ml-2"
          >
            Contato
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors duration-200"
          style={{
            color: "var(--neon)",
            background: mobileOpen ? "rgba(0,212,255,0.1)" : "transparent",
          }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(10, 10, 10, 0.98)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            backdropFilter: "blur(16px)",
          }}
        >
          <nav className="flex flex-col py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors"
                style={{
                  color: activeSection === link.href ? "var(--neon)" : "var(--gray-text)",
                }}
              >
                {activeSection === link.href && (
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: "var(--neon)" }}
                  />
                )}
                {link.label}
              </a>
            ))}
            <div className="px-6 pt-3 pb-4">
              <a
                href="#contato"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contato"); }}
                className="btn-neon text-xs block text-center"
              >
                Contato
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

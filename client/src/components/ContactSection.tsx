/* ============================================================
   ContactSection — "Precision Dark — Editorial Tech"
   Design: Redes sociais com cards interativos + formulário de contato elegante
   ============================================================ */
import { useState } from "react";
import { Github, Linkedin, MessageCircle, Mail, Send, MapPin, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/andrewsantoss658-ui",
    handle: "andrewsantoss658-ui",
    color: "#E5E7EB",
    desc: "Veja meus repositórios e contribuições",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/andrew-santoss/",
    handle: "andrew-santoss",
    color: "#0A66C2",
    desc: "Conecte-se profissionalmente comigo",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/5571997383026",
    handle: "+55 (71) 99738-3026",
    color: "#25D366",
    desc: "Mensagem direta e rápida",
  },
  {
    name: "E-mail",
    icon: Mail,
    url: "mailto:andrew.santoss@outlook.com",
    handle: "andrew.santoss@outlook.com",
    color: "#00D4FF",
    desc: "Para propostas e oportunidades formais",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const inputBase: React.CSSProperties = {
    background: "var(--charcoal)",
    border: "1px solid var(--charcoal-light)",
    color: "oklch(0.93 0.005 240)",
    borderRadius: "6px",
    padding: "0.75rem 1rem",
    width: "100%",
    fontSize: "0.875rem",
    fontFamily: "'Poppins', sans-serif",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "var(--neon)";
    e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.08)";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "var(--charcoal-light)";
    e.target.style.boxShadow = "none";
  };

  return (
    <section
      id="contato"
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--graphite)" }}
    >
      {/* Decorative glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
        style={{
          background: "linear-gradient(to right, transparent, var(--neon), transparent)",
          opacity: 0.4,
        }}
      />
      <div
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-40 blur-3xl pointer-events-none"
        style={{ background: "rgba(0, 212, 255, 0.06)" }}
      />

      <div className="container relative z-10">
        <div className="animate-fade-up">
          <SectionHeader
            number="06 / 06"
            title="Contato"
            subtitle="Vamos trabalhar juntos? Entre em contato pelas redes sociais ou envie uma mensagem diretamente."
          />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Social links — 2 cols */}
          <div className="lg:col-span-2 animate-fade-up delay-100">
            <p
              className="text-sm font-light mb-6"
              style={{ color: "var(--gray-text)" }}
            >
              Estou disponível para projetos freelance, oportunidades de estágio, emprego
              e colaborações. Respondo em até 24 horas.
            </p>

            <div className="space-y-3 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                    style={{
                      background: "var(--charcoal)",
                      border: "1px solid var(--charcoal-light)", fontSize: '14px',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${social.color}50`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 15px ${social.color}15`;
                      (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--charcoal-light)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${social.color}12`,
                        border: `1px solid ${social.color}25`,
                      }}
                    >
                      <Icon size={17} style={{ color: social.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-sm font-semibold"
                        style={{ color: "oklch(0.93 0.005 240)" }}
                      >
                        {social.name}
                      </div>
                      <div
                        className="text-xs font-mono truncate"
                        style={{ color: "var(--gray-text)" }}
                      >
                        {social.handle}
                      </div>
                    </div>
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      style={{ color: social.color }}
                    />
                  </a>
                );
              })}
            </div>

            {/* Location */}
            <div
              className="flex items-center gap-3 p-4 rounded-xl"
              style={{
                background: "var(--charcoal)",
                border: "1px solid var(--charcoal-light)",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(0,212,255,0.08)",
                  border: "1px solid rgba(0,212,255,0.15)",
                }}
              >
                <MapPin size={14} style={{ color: "var(--neon)" }} />
              </div>
              <div>
                <div
                  className="text-xs font-mono"
                  style={{ color: "var(--neon)" }}
                >
                  Localização
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: "oklch(0.85 0.005 240)" }}
                >
                  Salvador, Bahia - Brasil
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form — 3 cols */}
          <div className="lg:col-span-3 animate-fade-up delay-200">
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "var(--charcoal)",
                border: "1px solid var(--charcoal-light)",
              }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="text-xs font-mono"
                  style={{ color: "var(--neon)" }}
                >
                  &gt;_ Enviar Mensagem
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-mono mb-2"
                      style={{ color: "var(--gray-text)" }}
                    >
                      nome
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      style={inputBase}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-mono mb-2"
                      style={{ color: "var(--gray-text)" }}
                    >
                      email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      style={inputBase}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-mono mb-2"
                    style={{ color: "var(--gray-text)" }}
                  >
                    assunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Sobre o que você quer falar?"
                    required
                    style={inputBase}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-mono mb-2"
                    style={{ color: "var(--gray-text)" }}
                  >
                    mensagem
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Escreva sua mensagem aqui..."
                    required
                    rows={5}
                    style={{ ...inputBase, resize: "vertical" }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || sent}
                  className="btn-solid w-full flex items-center justify-center gap-2 mt-2"
                  style={{
                    opacity: loading ? 0.8 : 1,
                    background: sent ? "#10B981" : "var(--neon)",
                    borderColor: sent ? "#10B981" : "var(--neon)",
                  }}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : sent ? (
                    <>✓ Mensagem Enviada com Sucesso!</>
                  ) : (
                    <>
                      <Send size={14} />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

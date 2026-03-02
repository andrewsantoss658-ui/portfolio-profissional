/* ============================================================
   SectionHeader — "Precision Dark — Editorial Tech"
   Design: Numeração editorial "01 / 06" + linha neon + título + subtítulo
   ============================================================ */
interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  number,
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      {/* Section number + line */}
      <div
        className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}
      >
        <span
          className="section-number"
          style={{ color: "var(--neon)", letterSpacing: "0.2em" }}
        >
          {number}
        </span>
        <div
          style={{
            height: "1px",
            width: align === "center" ? "48px" : "64px",
            background: "linear-gradient(to right, var(--neon), transparent)",
            boxShadow: "0 0 6px rgba(0, 212, 255, 0.3)",
          }}
        />
      </div>

      {/* Title */}
      <h2
        className="section-title mb-4"
        style={{ letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className="text-sm font-light leading-relaxed"
          style={{
            color: "var(--gray-text)",
            maxWidth: align === "center" ? "500px" : "520px",
            margin: align === "center" ? "0 auto" : "0",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/*
   VisualEffectsSection — Seção com efeitos visuais modernos
   Design: Integra código animado, gráficos, rede e contadores
   Paleta: Azul escuro, preto, verde tecnológico
   ============================================================ */
import CodeTypingAnimation from "./CodeTypingAnimation";
import DataFlowBackground from "./DataFlowBackground";
import AnimatedChart from "./AnimatedChart";
import AnimatedCounter from "./AnimatedCounter";
import NetworkGraph from "./NetworkGraph";
import SectionHeader from "./SectionHeader";

const codeSnippet = [
  "// Análise de Dados em Tempo Real",
  "const analyzeData = async (dataset) => {",
  "  const processed = await pipeline.transform(dataset);",
  "  const insights = ml.analyze(processed);",
  "  return insights.filter(x => x.confidence > 0.85);",
  "};",
];

export default function VisualEffectsSection() {
  return (
    <section
      id="efeitos"
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--graphite)" }}
    >
      {/* Background com fluxo de dados */}
      <div className="absolute inset-0 opacity-20">
        <DataFlowBackground particleCount={40} speed={1.5} opacity={0.1} />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="animate-fade-up mb-16">
          <SectionHeader
            number="04 / 06"
            title="Tecnologia & Análise"
            subtitle="Efeitos visuais que remetem à programação, análise de dados e estruturas de rede"
          />
        </div>

        {/* Grid de conteúdo */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Coluna 1: Código e Contadores */}
          <div className="animate-fade-up delay-100">
            {/* Código animado */}
            <div className="mb-8">
              <h3
                className="text-sm font-mono mb-4"
                style={{ color: "var(--neon)" }}
              >
                &gt;_ Código em Ação
              </h3>
              <CodeTypingAnimation
                lines={codeSnippet}
                speed={40}
                className="text-xs"
              />
            </div>

            {/* Contadores */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Projetos", value: 15, suffix: "+" },
                { label: "Tecnologias", value: 12, suffix: "+" },
                { label: "Clientes", value: 8, suffix: "+" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-lg border"
                  style={{
                    background: "rgba(44, 160, 152, 0.05)",
                    border: "1px solid rgba(44, 160, 152, 0.2)",
                  }}
                >
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ color: "var(--neon)" }}
                  >
                    <AnimatedCounter
                      end={item.value}
                      duration={2000}
                      suffix={item.suffix}
                    />
                  </div>
                  <div
                    className="text-xs font-mono"
                    style={{ color: "var(--gray-text)" }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna 2: Gráficos */}
          <div className="animate-fade-up delay-200">
            <h3
                className="text-sm font-mono mb-4"
                style={{ color: "var(--neon)" }}
              >
                &gt;_ Análise de Desempenho
              </h3>

            {/* Gráfico de linha */}
            <div className="mb-8">
              <AnimatedChart
                type="line"
                data={[20, 35, 45, 60, 75, 85, 90, 95]}
                labels={["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago"]}
                height={200}
              />
            </div>

            {/* Gráfico de barras */}
            <div>
              <AnimatedChart
                type="bar"
                data={[40, 60, 50, 70, 80, 65, 75]}
                labels={["React", "Node", "SQL", "Python", "AWS", "Docker", "Git"]}
                height={180}
              />
            </div>
          </div>
        </div>

        {/* Rede de Conexões */}
        <div className="animate-fade-up delay-300">
          <h3
            className="text-sm font-mono mb-4"
            style={{ color: "var(--neon)" }}
          >
            &gt;_ Arquitetura de Sistemas
          </h3>
          <NetworkGraph nodeCount={12} connectionDistance={200} height={400} />
        </div>

        {/* Stats em linha */}
        <div className="grid md:grid-cols-4 gap-4 mt-16 animate-fade-up delay-400">
          {[
            { label: "Linhas de Código", value: "50K+" },
            { label: "Commits", value: "1.2K+" },
            { label: "Testes Automatizados", value: "500+" },
            { label: "Uptime", value: "99.9%" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-lg border text-center"
              style={{
                background: "rgba(44, 160, 152, 0.05)",
                border: "1px solid rgba(44, 160, 152, 0.2)",
              }}
            >
              <div
                className="text-xl font-bold mb-2"
                style={{ color: "var(--neon)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs font-mono"
                style={{ color: "var(--gray-text)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

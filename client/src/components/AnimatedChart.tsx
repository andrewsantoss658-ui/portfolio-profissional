/*
   AnimatedChart — Gráficos animados (linha e barra)
   Design: Gráficos que se animam ao aparecer na viewport
   ============================================================ */
import { useEffect, useRef, useState } from "react";

interface AnimatedChartProps {
  type: "line" | "bar";
  data: number[];
  labels: string[];
  height?: number;
  animated?: boolean;
}

export default function AnimatedChart({
  type,
  data,
  labels,
  height = 250,
  animated = true,
}: AnimatedChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!animated) {
      setProgress(1);
      return;
    }

    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / duration, 1);
      setProgress(newProgress);

      if (newProgress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [animated]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const canvasHeight = canvas.height;
    const padding = 40;
    const graphWidth = width - padding * 2;
    const graphHeight = canvasHeight - padding * 2;

    // Limpar canvas
    ctx.fillStyle = "rgba(10, 10, 10, 0)";
    ctx.fillRect(0, 0, width, canvasHeight);

    // Encontrar min e max
    const maxValue = Math.max(...data);
    const minValue = 0;
    const range = maxValue - minValue;

    if (type === "line") {
      // Desenhar gráfico de linha
      const pointSpacing = graphWidth / (data.length - 1 || 1);

      // Desenhar linha
      ctx.strokeStyle = "rgba(44, 160, 152, 0.8)";
      ctx.lineWidth = 2;
      ctx.beginPath();

      data.forEach((value, i) => {
        const x = padding + i * pointSpacing;
        const normalizedValue = (value - minValue) / range;
        const y = canvasHeight - padding - normalizedValue * graphHeight * progress;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();

      // Desenhar pontos
      ctx.fillStyle = "rgba(44, 160, 152, 1)";
      data.forEach((value, i) => {
        const x = padding + i * pointSpacing;
        const normalizedValue = (value - minValue) / range;
        const y = canvasHeight - padding - normalizedValue * graphHeight * progress;

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Desenhar área sob a linha
      ctx.fillStyle = "rgba(44, 160, 152, 0.1)";
      ctx.beginPath();
      ctx.moveTo(padding, canvasHeight - padding);

      data.forEach((value, i) => {
        const x = padding + i * pointSpacing;
        const normalizedValue = (value - minValue) / range;
        const y = canvasHeight - padding - normalizedValue * graphHeight * progress;
        ctx.lineTo(x, y);
      });

      ctx.lineTo(padding + (data.length - 1) * pointSpacing, canvasHeight - padding);
      ctx.closePath();
      ctx.fill();
    } else if (type === "bar") {
      // Desenhar gráfico de barras
      const barWidth = graphWidth / data.length * 0.7;
      const barSpacing = graphWidth / data.length;

      data.forEach((value, i) => {
        const x = padding + i * barSpacing + (barSpacing - barWidth) / 2;
        const normalizedValue = (value - minValue) / range;
        const barHeight = normalizedValue * graphHeight * progress;
        const y = canvasHeight - padding - barHeight;

        // Desenhar barra com gradiente
        const gradient = ctx.createLinearGradient(x, y, x, canvasHeight - padding);
        gradient.addColorStop(0, "rgba(44, 160, 152, 0.9)");
        gradient.addColorStop(1, "rgba(44, 160, 152, 0.4)");

        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, barHeight);

        // Desenhar borda
        ctx.strokeStyle = "rgba(44, 160, 152, 0.5)";
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, barWidth, barHeight);
      });
    }

    // Desenhar eixos
    ctx.strokeStyle = "rgba(44, 160, 152, 0.2)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, canvasHeight - padding);
    ctx.lineTo(width - padding, canvasHeight - padding);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvasHeight - padding);
    ctx.stroke();

    // Desenhar labels
    ctx.fillStyle = "rgba(44, 160, 152, 0.6)";
    ctx.font = "12px monospace";
    ctx.textAlign = "center";

    labels.forEach((label, i) => {
      const x = padding + (i / (labels.length - 1 || 1)) * graphWidth;
      ctx.fillText(label, x, canvasHeight - padding + 20);
    });
  }, [type, data, labels, progress]);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={height}
      style={{
        width: "100%",
        height: "auto",
        border: "1px solid rgba(44, 160, 152, 0.2)",
        borderRadius: "0.5rem",
        background: "rgba(0, 0, 0, 0.2)",
      }}
    />
  );
}

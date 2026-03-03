/*
   NetworkGraph — Rede de conexões como banco de dados ou rede
   Design: Nós conectados com linhas animadas, simula estrutura de dados
   ============================================================ */
import { useEffect, useRef } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  label: string;
}

interface NetworkGraphProps {
  nodeCount?: number;
  connectionDistance?: number;
  height?: number;
}

export default function NetworkGraph({
  nodeCount = 12,
  connectionDistance = 200,
  height = 400,
}: NetworkGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Definir tamanho do canvas
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Criar nós
    const nodes: Node[] = [];
    const labels = ["API", "DB", "Cache", "Queue", "Auth", "Analytics", "Storage", "CDN", "Monitor", "Logger", "Router", "Gateway"];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        label: labels[i % labels.length],
      });
    }

    // Loop de animação
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Atualizar posições dos nós
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Rebote nas bordas
        if (node.x < 30 || node.x > canvas.width - 30) node.vx *= -1;
        if (node.y < 30 || node.y > canvas.height - 30) node.vy *= -1;

        // Manter dentro dos limites
        node.x = Math.max(30, Math.min(canvas.width - 30, node.x));
        node.y = Math.max(30, Math.min(canvas.height - 30, node.y));
      });

      // Desenhar conexões
      ctx.strokeStyle = "rgba(44, 160, 152, 0.2)";
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const alpha = (1 - distance / connectionDistance) * 0.4;
            ctx.strokeStyle = `rgba(44, 160, 152, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Desenhar nós
      nodes.forEach((node) => {
        // Sombra
        ctx.fillStyle = "rgba(44, 160, 152, 0.1)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, 18, 0, Math.PI * 2);
        ctx.fill();

        // Nó
        const gradient = ctx.createRadialGradient(node.x - 5, node.y - 5, 0, node.x, node.y, 12);
        gradient.addColorStop(0, "rgba(44, 160, 152, 0.9)");
        gradient.addColorStop(1, "rgba(44, 160, 152, 0.5)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 12, 0, Math.PI * 2);
        ctx.fill();

        // Borda do nó
        ctx.strokeStyle = "rgba(44, 160, 152, 0.8)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 12, 0, Math.PI * 2);
        ctx.stroke();

        // Label
        ctx.fillStyle = "rgba(44, 160, 152, 0.7)";
        ctx.font = "bold 10px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(node.label, node.x, node.y);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [nodeCount, connectionDistance]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: `${height}px`,
        border: "1px solid rgba(44, 160, 152, 0.2)",
        borderRadius: "0.5rem",
        background: "rgba(0, 0, 0, 0.3)",
        display: "block",
      }}
    />
  );
}

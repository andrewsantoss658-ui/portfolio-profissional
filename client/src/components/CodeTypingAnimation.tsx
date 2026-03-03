/*
   CodeTypingAnimation — Animação de código sendo digitado
   Design: Simula digitação de código com cursor piscante
   ============================================================ */
import { useEffect, useState } from "react";

interface CodeTypingAnimationProps {
  lines: string[];
  speed?: number;
  className?: string;
}

export default function CodeTypingAnimation({
  lines,
  speed = 50,
  className = "",
}: CodeTypingAnimationProps) {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const fullCode = lines.join("\n");

  useEffect(() => {
    if (!isTyping || currentCharIndex >= fullCode.length) {
      setIsTyping(false);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedCode(fullCode.substring(0, currentCharIndex + 1));
      setCurrentCharIndex(currentCharIndex + 1);

      // Atualizar índice de linha
      const currentLine = displayedCode.split("\n").length - 1;
      setCurrentLineIndex(currentLine);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentCharIndex, isTyping, fullCode, displayedCode, speed]);

  return (
    <div
      className={`font-mono text-sm leading-relaxed overflow-hidden ${className}`}
      style={{
        color: "var(--neon)",
        background: "rgba(0, 212, 255, 0.02)",
        border: "1px solid rgba(0, 212, 255, 0.1)",
        padding: "1rem",
        borderRadius: "0.5rem",
      }}
    >
      <pre style={{ margin: 0, whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
        {displayedCode}
        {isTyping && (
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "1em",
              background: "var(--neon)",
              marginLeft: "2px",
              animation: "blink 1s infinite",
            }}
          />
        )}
      </pre>
      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

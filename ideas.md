# Brainstorming de Design — Portfólio Profissional

## Contexto
Portfólio profissional moderno, responsivo e minimalista.
Paleta: preto grafite, cinza carvão, azul neon discreto.
Tipografia: Poppins.

---

<response>
<probability>0.07</probability>
<text>
**Abordagem 1: "Dark Terminal Brutalism"**

- **Design Movement:** Brutalismo Digital / Estética de Terminal
- **Core Principles:**
  1. Contraste extremo entre fundo escuro e elementos iluminados
  2. Tipografia monospace mesclada com sans-serif para criar tensão visual
  3. Bordas nítidas e arestas vivas — sem arredondamentos excessivos
  4. Hierarquia construída por luminosidade, não por tamanho
- **Color Philosophy:** Fundo quase preto (#0D0D0D), cinza carvão (#1A1A1A) para cards, azul neon elétrico (#00BFFF) como único acento — transmite precisão técnica e confiança tecnológica
- **Layout Paradigm:** Layout assimétrico com colunas de largura variável; seções alternadas entre full-width e conteúdo recuado à esquerda
- **Signature Elements:**
  1. Linha horizontal neon pulsante separando seções
  2. Tags de código `</>` decorativas em cantos de cards
  3. Cursor piscante animado ao lado do nome no Hero
- **Interaction Philosophy:** Hover revela detalhes escondidos; scroll aciona animações de entrada por linha
- **Animation:** Entrada de texto letra por letra (typewriter) no Hero; cards deslizam da esquerda com fade; barras de skill preenchem ao entrar no viewport
- **Typography System:** Poppins Bold 700 para títulos + JetBrains Mono para labels técnicos + Poppins 400 para corpo
</text>
</response>

<response>
<probability>0.05</probability>
<text>
**Abordagem 2: "Graphite Glassmorphism"**

- **Design Movement:** Glassmorphism Escuro / Material Design 3
- **Core Principles:**
  1. Superfícies translúcidas sobre fundo profundo
  2. Luz difusa e reflexos sutis simulando vidro fosco
  3. Profundidade por camadas de blur e opacidade
  4. Acento neon usado apenas em bordas e ícones ativos
- **Color Philosophy:** Fundo #111827 (grafite azulado), cards com backdrop-blur e opacidade 15%, azul neon #38BDF8 em bordas e highlights — evoca modernidade e sofisticação tecnológica
- **Layout Paradigm:** Grid centrado com cards flutuantes; seções com padding generoso e separação por gradientes verticais
- **Signature Elements:**
  1. Cards com borda neon de 1px e blur interno
  2. Avatar circular com glow neon ao redor
  3. Gradiente radial no Hero partindo do centro
- **Interaction Philosophy:** Hover eleva cards com sombra neon; botões têm ripple effect ao clicar
- **Animation:** Partículas flutuantes no background do Hero; seções entram com scale + fade; skill bars com animação de preenchimento
- **Typography System:** Poppins 800 para hero + Poppins 500 para subtítulos + Poppins 300 para corpo
</text>
</response>

<response>
<probability>0.08</probability>
<text>
**Abordagem 3: "Precision Dark — Editorial Tech"**

- **Design Movement:** Editorial Minimalismo / Swiss Design adaptado ao digital escuro
- **Core Principles:**
  1. Grade editorial rigorosa com alinhamento preciso à esquerda
  2. Uso de espaço negativo como elemento de design ativo
  3. Tipografia como elemento visual principal — hierarquia clara
  4. Detalhes neon como pontuação visual, não decoração
- **Color Philosophy:** Fundo #0A0A0A (preto grafite puro), cinza #1C1C1E para superfícies, cinza médio #3A3A3C para bordas, azul neon #00D4FF apenas em elementos interativos e destaques — transmite profissionalismo austero e competência técnica
- **Layout Paradigm:** Layout de página editorial com numeração de seções à esquerda, conteúdo principal à direita; linha vertical neon conectando as seções
- **Signature Elements:**
  1. Numeração de seção em estilo "01 / 06" com linha neon
  2. Linha vertical de 2px neon percorrendo o lado esquerdo da página
  3. Tags de tecnologia com borda neon e fundo transparente
- **Interaction Philosophy:** Interações minimalistas — hover muda cor de texto para neon; scroll suave com snap opcional
- **Animation:** Fade-in por seção ao scroll com Intersection Observer; nome no Hero com animação de revelação por máscara; barras de skill com preenchimento sequencial
- **Typography System:** Poppins 900 para nome hero (muito grande, ~5rem) + Poppins 400 para corpo + Poppins 600 para títulos de seção
</text>
</response>

---

## Abordagem Escolhida: **Abordagem 3 — "Precision Dark — Editorial Tech"**

Esta abordagem combina rigor editorial com estética tecnológica escura, criando um portfólio que transmite competência e sofisticação sem exageros visuais. A numeração de seções, a linha vertical neon e a tipografia Poppins em peso extremo criam uma identidade visual única e memorável.

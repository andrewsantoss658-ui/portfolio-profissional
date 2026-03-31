# 📚 Documentação Técnica — Portfólio Profissional

## 1. Visão Geral do Projeto

### Objetivo
O **Portfólio Profissional** é uma aplicação web moderna, responsiva e minimalista desenvolvida para apresentar a trajetória profissional, projetos, competências e certificados de um desenvolvedor. O projeto resolve o problema de criar um portfólio visualmente impressionante sem necessidade de conhecimentos avançados em design, oferecendo uma experiência de usuário fluida com animações sofisticadas.

### Problema Resolvido
- Falta de uma plataforma centralizada para apresentar trabalhos e competências
- Dificuldade em criar interfaces modernas e responsivas
- Necessidade de animações e efeitos visuais sem comprometer performance

### Funcionalidades Principais
- ✨ **Seções Dinâmicas**: Hero, Sobre, Projetos, Competências, Certificados, Contato
- 🎨 **Design Dark Editorial**: Paleta minimalista com neon azul
- 📱 **100% Responsivo**: Funciona perfeitamente em mobile, tablet e desktop
- ⚡ **Animações Suaves**: Typewriter, fade-in, scroll-triggered animations
- 🖼️ **Upload de Foto**: Permite alterar foto de perfil dinamicamente
- 📥 **Download de Currículo**: Botão para acessar currículo no Google Drive
- 🎯 **Holografia Visual**: Seção com efeitos futuristas e glow animado
- 📊 **Contadores Animados**: Estatísticas com animações numéricas

---

## 2. Estrutura de Pastas e Arquivos

```
portfolio-profissional/
├── client/                          # Frontend (React + TypeScript)
│   ├── public/                      # Arquivos estáticos
│   │   ├── favicon.svg              # Ícone do site
│   │   ├── robots.txt               # SEO
│   │   └── manifest.json            # PWA
│   │
│   ├── src/
│   │   ├── components/              # Componentes reutilizáveis
│   │   │   ├── ui/                  # Componentes shadcn/ui
│   │   │   ├── Navbar.tsx           # Barra de navegação sticky
│   │   │   ├── HeroSection.tsx      # Seção hero com typewriter
│   │   │   ├── AboutSection.tsx     # Sobre mim com upload de foto
│   │   │   ├── ProjectsSection.tsx  # Galeria de projetos
│   │   │   ├── SkillsSection.tsx    # Competências com barras
│   │   │   ├── CertificatesSection.tsx # Licenças e certificados
│   │   │   ├── ContactSection.tsx   # Formulário de contato
│   │   │   ├── VisualEffectsSection.tsx # Tecnologias holográficas
│   │   │   ├── SectionHeader.tsx    # Header reutilizável
│   │   │   ├── AnimatedCounter.tsx  # Contador com animação
│   │   │   ├── CodeTypingAnimation.tsx # Código sendo digitado
│   │   │   ├── DataFlowBackground.tsx # Fluxo de dados animado
│   │   │   ├── NetworkGraph.tsx     # Grafo de conexões
│   │   │   ├── AnimatedChart.tsx    # Gráficos animados
│   │   │   ├── Footer.tsx           # Rodapé
│   │   │   ├── Navbar.tsx           # Navegação
│   │   │   └── ErrorBoundary.tsx    # Tratamento de erros
│   │   │
│   │   ├── pages/                   # Páginas principais
│   │   │   ├── Home.tsx             # Página principal
│   │   │   └── NotFound.tsx         # Página 404
│   │   │
│   │   ├── contexts/                # Context API
│   │   │   └── ThemeContext.tsx     # Gerenciamento de tema
│   │   │
│   │   ├── hooks/                   # Custom hooks
│   │   │   └── useScrollAnimation.ts # Hook para animações ao scroll
│   │   │
│   │   ├── lib/                     # Utilitários
│   │   │   └── utils.ts             # Funções auxiliares
│   │   │
│   │   ├── App.tsx                  # Componente raiz
│   │   ├── main.tsx                 # Entry point
│   │   └── index.css                # Estilos globais + Tailwind
│   │
│   ├── index.html                   # HTML template
│   └── vite.config.ts               # Configuração Vite
│
├── server/                          # Backend (Express.js)
│   └── index.ts                     # Servidor Express
│
├── shared/                          # Código compartilhado
│   └── const.ts                     # Constantes globais
│
├── package.json                     # Dependências do projeto
├── tsconfig.json                    # Configuração TypeScript
├── tailwind.config.ts               # Configuração Tailwind CSS
├── postcss.config.ts                # Configuração PostCSS
└── DOCUMENTACAO.md                  # Este arquivo
```

### Papel de Cada Pasta

| Pasta | Responsabilidade |
|-------|------------------|
| **client/src/components** | Componentes React reutilizáveis e seções específicas |
| **client/src/pages** | Páginas principais da aplicação |
| **client/src/contexts** | Gerenciamento de estado global (tema) |
| **client/src/hooks** | Lógica reutilizável em componentes |
| **client/src/lib** | Funções utilitárias e helpers |
| **server** | Servidor Express para servir a aplicação |
| **public** | Arquivos estáticos (favicon, robots.txt) |

---

## 3. Tecnologias Utilizadas

### Frontend

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | 19.2.1 | Framework UI para construir interfaces |
| **TypeScript** | 5.6.3 | Tipagem estática para JavaScript |
| **Tailwind CSS** | 4.1.14 | Utility-first CSS framework |
| **Vite** | 7.1.7 | Build tool e dev server rápido |
| **Wouter** | 3.3.5 | Roteamento leve para SPA |
| **Framer Motion** | 12.23.22 | Animações e transições fluidas |
| **Lucide React** | 0.453.0 | Ícones SVG modernos |
| **shadcn/ui** | - | Componentes UI acessíveis |
| **Recharts** | 2.15.2 | Gráficos interativos |
| **React Hook Form** | 7.64.0 | Gerenciamento de formulários |

### Backend

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **Express.js** | 4.21.2 | Servidor web minimalista |
| **Node.js** | - | Runtime JavaScript |

### Desenvolvimento

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **ESBuild** | 0.25.0 | Bundler rápido |
| **Prettier** | 3.6.2 | Formatação de código |
| **PostCSS** | 8.4.47 | Processamento de CSS |
| **Autoprefixer** | 10.4.20 | Prefixos de navegador automáticos |

### Gerenciador de Pacotes
- **pnpm** 10.4.1 — Gerenciador de pacotes rápido e eficiente

---

## 4. Explicação do Código por Área

### 4.1 Interface (UI/Frontend)

#### **App.tsx — Componente Raiz**
```typescript
// Estrutura principal da aplicação
- ErrorBoundary: Captura erros em componentes filhos
- ThemeProvider: Fornece tema (dark/light) via Context
- TooltipProvider: Habilita tooltips globalmente
- Toaster: Sistema de notificações
- Router: Gerencia rotas da aplicação
```

**Fluxo:**
1. App.tsx renderiza o ErrorBoundary
2. ThemeProvider envolve toda a aplicação
3. Router define as rotas (/ e /404)
4. Home.tsx é renderizada na rota raiz

#### **Navbar.tsx — Navegação Sticky**
```typescript
Responsabilidades:
- Navegação entre seções via smooth scroll
- Detecção de seção ativa durante scroll
- Menu mobile responsivo
- Botão de download do currículo
- Efeito de glassmorphism ao scroll

Estados:
- scrolled: boolean (ativa background ao scroll)
- mobileOpen: boolean (menu mobile aberto/fechado)
- activeSection: string (seção atual)
```

**Funcionalidades:**
- Scroll suave para seções
- Indicador visual da seção ativa
- Responsive design (desktop/mobile)
- Link para Google Drive do currículo

---

### 4.2 Seções Principais

#### **HeroSection.tsx — Seção Principal**

**O que faz:**
- Apresenta o nome do desenvolvedor em destaque
- Exibe frases em efeito typewriter alternadas
- Mostra estatísticas (projetos, formação)
- Oferece CTAs (Contato, Projetos)

**Como funciona:**

```typescript
// Lógica de typewriter
1. Array de frases: ["Análise de Dados", "Entusiasta de Tecnologia", ...]
2. useEffect monitora typing e phraseIndex
3. Se typing=true: adiciona caracteres à frase
4. Se typing=false: remove caracteres
5. Ao terminar remover: muda para próxima frase
6. Ciclo infinito com transições suaves
```

**Animações:**
- Fade-in do nome ao montar
- Typewriter com cursor piscante
- Slide-up dos botões CTA
- Scroll indicator animado

---

#### **AboutSection.tsx — Sobre Mim**

**O que faz:**
- Apresenta informação pessoal e profissional
- Permite upload interativo de foto de perfil
- Exibe cards com informações estruturadas
- Oferece CTAs para contato e projetos

**Upload de Foto:**
```typescript
const [profileImg, setProfileImg] = useState(DEFAULT_ABOUT_IMG);

const handleImageUpload = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    setProfileImg(event.target.result); // Converte para Data URL
  };
  reader.readAsDataURL(file);
};
```

**Hover Effects:**
- Overlay com ícone de câmera ao passar mouse
- Opacidade reduzida na imagem
- Label clicável para input file

---

#### **ProjectsSection.tsx — Galeria de Projetos**

**O que faz:**
- Exibe projetos com filtro por tipo (Individual/Equipe)
- Skeleton loading durante carregamento
- Cards com animação fadeInUp
- Informações de tecnologias usadas

**Estrutura de Dados:**
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  type: "individual" | "team";
}
```

**Animações:**
- Skeleton shimmer enquanto carrega
- FadeInUp com delay progressivo
- Hover effects nos cards

---

#### **SkillsSection.tsx — Competências**

**O que faz:**
- Exibe hard skills com barras de progresso animadas
- Mostra soft skills em cards
- Barras animam ao entrar na viewport

**Hard Skills:**
```typescript
const hardSkills = [
  { name: "HTML / CSS / Tailwind", level: 80, color: "#E34F26" },
  { name: "JavaScript / TypeScript", level: 90, color: "#F7DF1E" },
  { name: "React / Next.js", level: 80, color: "#61DAFB" },
  // ...
];
```

**Animação de Barra:**
- Usa IntersectionObserver para detectar quando entra na viewport
- Anima width de 0% até o valor final
- Transição cubic-bezier para efeito suave

---

#### **VisualEffectsSection.tsx — Tecnologias Holográficas**

**O que faz:**
- Exibe contadores animados
- Apresenta stack principal (Python, Git, SQL)
- Cards com efeito holográfico futurista

**Efeito Holográfico:**
```typescript
// Glow animado ao hover
onMouseEnter={(e) => {
  el.style.borderColor = `${tech.color}80`;
  el.style.boxShadow = `0 0 30px ${tech.color}30`;
}}

// Animação de pulso
@keyframes holographicPulse {
  0%, 100% { filter: drop-shadow(0 0 8px rgba(44, 160, 152, 0.2)); }
  50% { filter: drop-shadow(0 0 16px rgba(44, 160, 152, 0.4)); }
}
```

---

### 4.3 Componentes de Animação

#### **AnimatedCounter.tsx — Contador Dinâmico**

**Funcionalidade:**
- Anima número de 0 até o valor final
- Usado para estatísticas (projetos, tecnologias)

```typescript
useEffect(() => {
  const interval = setInterval(() => {
    setCount(prev => Math.min(prev + increment, end));
  }, duration / end);
  return () => clearInterval(interval);
}, [end, duration]);
```

---

#### **CodeTypingAnimation.tsx — Código Sendo Digitado**

**Funcionalidade:**
- Simula código sendo digitado linha por linha
- Efeito visual de programação em tempo real

```typescript
// Renderiza cada linha com delay progressivo
lines.map((line, i) => (
  <div key={i} style={{ animationDelay: `${i * speed}ms` }}>
    {line}
  </div>
))
```

---

#### **DataFlowBackground.tsx — Fluxo de Dados**

**Funcionalidade:**
- Partículas animadas em background
- Simula fluxo de dados em tempo real
- Usa canvas para performance

**Otimização:**
- Canvas em vez de DOM para melhor performance
- Partículas reutilizáveis
- Animação via requestAnimationFrame

---

#### **NetworkGraph.tsx — Grafo de Conexões**

**Funcionalidade:**
- Nós conectados simulando arquitetura de sistemas
- Linhas animadas entre nós
- Efeito visual de rede

---

### 4.4 Gerenciamento de Estado

#### **ThemeContext.tsx — Contexto de Tema**

```typescript
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children, defaultTheme }) {
  const [theme, setTheme] = useState(defaultTheme);
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

**Uso:**
- Fornece tema para toda a aplicação
- Permite alternância light/dark
- Persiste preferência no localStorage

---

### 4.5 Hooks Customizados

#### **useScrollAnimation.ts — Animações ao Scroll**

```typescript
// Detecta quando elemento entra na viewport
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  },
  { threshold: 0.08 }
);
```

**Uso:**
- Ativa animações fade-up quando elemento entra na viewport
- Melhora performance ao não animar elementos fora da tela

---

### 4.6 Estilos Globais (index.css)

#### **Design System**

```css
/* Paleta de Cores */
--graphite: #0A0A0A;        /* Preto grafite puro */
--charcoal: #1C1C1E;        /* Cinza carvão */
--neon: #00D4FF;            /* Azul neon */

/* Tipografia */
font-family: 'Poppins', sans-serif;
font-weights: 300, 400, 600, 700, 900

/* Espaçamento */
--radius: 0.375rem;
```

#### **Animações Globais**

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes neonPulse {
  0%, 100% { box-shadow: 0 0 20px var(--neon); }
  50% { box-shadow: 0 0 40px var(--neon); }
}
```

---

### 4.7 Roteamento

#### **Wouter — Roteamento Leve**

```typescript
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} /> {/* Fallback */}
    </Switch>
  );
}
```

**Vantagens:**
- Mais leve que React Router
- Suporta SPA sem necessidade de servidor
- Integração simples com Vite

---

### 4.8 Tratamento de Erros

#### **ErrorBoundary.tsx**

```typescript
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.error("Erro capturado:", error);
    this.setState({ hasError: true });
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Algo deu errado. Tente recarregar.</div>;
    }
    return this.props.children;
  }
}
```

---

## 5. Fluxo de Funcionamento

### Fluxo Completo da Aplicação

```
┌─────────────────────────────────────────────────────────────┐
│ 1. INICIALIZAÇÃO                                             │
├─────────────────────────────────────────────────────────────┤
│ - Browser carrega index.html                                 │
│ - Vite injeta main.tsx                                       │
│ - React renderiza App.tsx                                    │
│ - ThemeProvider envolve toda a aplicação                     │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. RENDERIZAÇÃO INICIAL                                      │
├─────────────────────────────────────────────────────────────┤
│ - Router renderiza Home.tsx                                  │
│ - Home.tsx renderiza todas as seções                         │
│ - Navbar fica sticky no topo                                 │
│ - HeroSection inicia animação de typewriter                  │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. INTERAÇÃO DO USUÁRIO                                      │
├─────────────────────────────────────────────────────────────┤
│ Usuário clica em link de navegação                           │
│ ↓                                                             │
│ handleNavClick executa smooth scroll                         │
│ ↓                                                             │
│ Navbar detecta seção ativa via scroll listener               │
│ ↓                                                             │
│ Indicador visual atualiza na Navbar                          │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. ANIMAÇÕES AO SCROLL                                       │
├─────────────────────────────────────────────────────────────┤
│ - IntersectionObserver detecta elementos na viewport         │
│ - Adiciona classe "visible" ao elemento                      │
│ - CSS anima o elemento com fadeUp                            │
│ - Barras de skill animam ao entrar na viewport               │
│ - Contadores começam a contar                                │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ 5. UPLOAD DE FOTO (AboutSection)                             │
├─────────────────────────────────────────────────────────────┤
│ - Usuário passa mouse sobre foto                             │
│ - Overlay com ícone de câmera aparece                        │
│ - Usuário clica                                              │
│ - Input file dialog abre                                     │
│ - Seleciona arquivo                                          │
│ - FileReader converte para Data URL                          │
│ - setProfileImg atualiza estado                              │
│ - Imagem renderiza instantaneamente                          │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ 6. DOWNLOAD DO CURRÍCULO                                     │
├─────────────────────────────────────────────────────────────┤
│ - Usuário clica em "Baixar currículo"                        │
│ - Link abre Google Drive em nova aba                         │
│ - target="_blank" e rel="noopener noreferrer"                │
└─────────────────────────────────────────────────────────────┘
```

### Exemplo: Navegação até Seção de Contato

```
1. Usuário clica em "Contato" na Navbar
   ↓
2. handleNavClick("#contato") é chamado
   ↓
3. document.querySelector("#contato").scrollIntoView({ behavior: "smooth" })
   ↓
4. Página faz scroll suave até ContactSection
   ↓
5. Scroll listener detecta que #contato está visível
   ↓
6. activeSection muda para "#contato"
   ↓
7. Navbar atualiza indicador visual
   ↓
8. IntersectionObserver ativa animações de ContactSection
```

---

## 6. Boas Práticas e Arquitetura

### 6.1 Padrões de Organização

#### **Separação de Responsabilidades**
- ✅ Componentes focam apenas em UI
- ✅ Lógica de negócio em hooks customizados
- ✅ Estilos globais em index.css
- ✅ Constantes em arquivos separados

#### **Composição de Componentes**
```typescript
// ❌ Ruim: Componente monolítico
function Page() {
  return (
    <div>
      {/* 500+ linhas de código */}
    </div>
  );
}

// ✅ Bom: Componentes pequenos e reutilizáveis
function Page() {
  return (
    <div>
      <SectionHeader />
      <ContentArea />
      <CTA />
    </div>
  );
}
```

#### **Props Bem Definidas**
```typescript
interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  // ...
}
```

### 6.2 Performance

#### **Lazy Loading**
- ✅ Imagens em CDN com otimização automática
- ✅ Canvas para animações complexas (DataFlowBackground)
- ✅ IntersectionObserver para animações ao scroll

#### **Otimizações**
```typescript
// ✅ Memoização de callbacks
const handleScroll = useCallback(() => {
  // ...
}, []);

// ✅ useEffect com dependências corretas
useEffect(() => {
  // ...
}, [dependency]);

// ✅ Cleanup de listeners
return () => {
  window.removeEventListener("scroll", onScroll);
};
```

### 6.3 Acessibilidade

#### **Semântica HTML**
```typescript
// ✅ Uso correto de tags semânticas
<section id="sobre">
  <header>
    <h1>Sobre Mim</h1>
  </header>
  <article>
    {/* Conteúdo */}
  </article>
</section>
```

#### **ARIA Labels**
```typescript
// ✅ Labels para elementos interativos
<button aria-label="Menu">
  <Menu size={18} />
</button>
```

### 6.4 Responsividade

#### **Mobile-First Approach**
```typescript
// ✅ Tailwind mobile-first
<div className="text-sm md:text-base lg:text-lg">
  {/* Começa pequeno, cresce em telas maiores */}
</div>
```

#### **Breakpoints Utilizados**
```
sm: 640px   (tablets pequenos)
md: 768px   (tablets)
lg: 1024px  (desktops)
xl: 1280px  (desktops grandes)
```

### 6.5 TypeScript

#### **Tipagem Forte**
```typescript
// ✅ Interfaces bem definidas
interface Skill {
  name: string;
  level: number;
  color: string;
}

// ✅ Props tipadas
function SkillBar({ name, level, color }: Skill) {
  // ...
}
```

---

## 7. Sugestões de Melhoria

### 7.1 Organização

#### **Problema Atual**
- Muitos componentes na pasta `components/`

#### **Solução Sugerida**
```
components/
├── sections/           # Seções principais
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   └── ...
├── ui/                 # Componentes UI reutilizáveis
│   ├── Button.tsx
│   ├── Card.tsx
│   └── ...
├── animations/         # Componentes de animação
│   ├── AnimatedCounter.tsx
│   ├── CodeTypingAnimation.tsx
│   └── ...
└── common/            # Componentes comuns
    ├── Navbar.tsx
    ├── Footer.tsx
    └── ...
```

### 7.2 Performance

#### **Implementar Code Splitting**
```typescript
// ✅ Lazy load seções
const AboutSection = lazy(() => import("./sections/AboutSection"));

// Com Suspense
<Suspense fallback={<LoadingSpinner />}>
  <AboutSection />
</Suspense>
```

#### **Otimizar Imagens**
```typescript
// ✅ Usar WebP com fallback
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.png" alt="..." />
</picture>
```

#### **Implementar Service Worker**
```typescript
// ✅ Cache offline
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

### 7.3 Legibilidade

#### **Extrair Constantes**
```typescript
// ❌ Ruim: Valores hardcoded
const timeout = setTimeout(() => setTyping(false), 2200);

// ✅ Bom: Constantes nomeadas
const TYPING_PAUSE_DURATION = 2200;
const timeout = setTimeout(() => setTyping(false), TYPING_PAUSE_DURATION);
```

#### **Documentar Componentes**
```typescript
/**
 * HeroSection
 * 
 * Seção principal do portfólio com:
 * - Imagem de fundo
 * - Nome em destaque
 * - Efeito typewriter
 * - Botões CTA
 * 
 * @example
 * <HeroSection />
 */
export function HeroSection() {
  // ...
}
```

### 7.4 Escalabilidade

#### **Implementar Sistema de Temas**
```typescript
// ✅ Suportar múltiplos temas
const themes = {
  dark: { primary: "#00D4FF", background: "#0A0A0A" },
  light: { primary: "#0066FF", background: "#FFFFFF" },
  neon: { primary: "#FF00FF", background: "#000000" },
};
```

#### **Adicionar CMS**
```typescript
// ✅ Dados dinâmicos em vez de hardcoded
const [projects, setProjects] = useState([]);

useEffect(() => {
  fetch("/api/projects").then(res => res.json()).then(setProjects);
}, []);
```

#### **Implementar Backend API**
```typescript
// ✅ Endpoints para:
// - Envio de formulário de contato
// - Upload de projetos
// - Gerenciamento de certificados
// - Autenticação (opcional)
```

### 7.5 Testes

#### **Adicionar Testes Unitários**
```typescript
// ✅ Testar componentes com Vitest
import { render, screen } from "@testing-library/react";
import { HeroSection } from "./HeroSection";

test("renders hero section", () => {
  render(<HeroSection />);
  expect(screen.getByText("ANDREW SANTOS")).toBeInTheDocument();
});
```

#### **Testes de Integração**
```typescript
// ✅ Testar fluxos completos
test("navegação funciona corretamente", async () => {
  render(<App />);
  const link = screen.getByText("Projetos");
  fireEvent.click(link);
  expect(window.location.hash).toBe("#projetos");
});
```

### 7.6 SEO

#### **Adicionar Meta Tags**
```html
<!-- ✅ SEO melhorado -->
<meta name="description" content="Portfólio profissional de Andrew Santos" />
<meta name="keywords" content="desenvolvedor, análise de dados, python" />
<meta property="og:title" content="Andrew Santos - Portfólio" />
<meta property="og:image" content="https://..." />
```

#### **Implementar Schema.org**
```typescript
// ✅ Dados estruturados
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Andrew Santos",
  "url": "https://portfolio.com",
  "jobTitle": "Desenvolvedor"
}
</script>
```

### 7.7 Segurança

#### **Validar Inputs**
```typescript
// ✅ Validar antes de processar
import { z } from "zod";

const ContactSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});

const result = ContactSchema.parse(formData);
```

#### **Sanitizar HTML**
```typescript
// ✅ Prevenir XSS
import DOMPurify from "dompurify";

const cleanHTML = DOMPurify.sanitize(userInput);
```

---

## 8. Resumo Executivo

### Pontos Fortes
✅ Design moderno e minimalista  
✅ Animações suaves e profissionais  
✅ 100% responsivo  
✅ Código bem organizado com TypeScript  
✅ Performance otimizada  
✅ Acessibilidade considerada  

### Áreas de Melhoria
⚠️ Adicionar testes automatizados  
⚠️ Implementar CMS para conteúdo dinâmico  
⚠️ Melhorar SEO com schema.org  
⚠️ Adicionar backend para formulários  
⚠️ Implementar code splitting  

### Próximos Passos Recomendados
1. **Curto Prazo**: Adicionar testes unitários e E2E
2. **Médio Prazo**: Implementar backend para formulário de contato
3. **Longo Prazo**: Adicionar CMS para gerenciar conteúdo dinamicamente

---

## 📞 Contato e Suporte

Para dúvidas sobre a arquitetura ou implementação, consulte:
- **Documentação React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **TypeScript**: https://www.typescriptlang.org
- **Vite**: https://vitejs.dev

---

**Documentação gerada em**: Março de 2026  
**Versão do Projeto**: 1.0.0  
**Desenvolvedor**: Andrew Santos

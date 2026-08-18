# DevFlow AI — Developer Productivity Workspace

> Understand your codebase. Ship better software.

**DevFlow AI** is a premium developer productivity workspace that helps software engineers analyze complex codebases, understand intricate runtime errors, and transform debugging sessions into actionable, verified solutions.

---

## ⚡ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler & Dev Server**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: JavaScript (ESModules) + JSX

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or pnpm / yarn)

### 2. Installation
Clone or navigate to the project directory and install dependencies:

```bash
npm install
```

### 3. Run Locally (Development)
Start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be accessible at: `http://localhost:3000` (or the port specified in terminal output).

### 4. Build for Production
Create an optimized production bundle:

```bash
npm run build
```

The production assets will be output to the `dist/` directory.

### 5. Preview Production Build
Preview the local production build:

```bash
npm run preview
```

---

## 🌟 Key Features & Architecture

1. **Dark-First SaaS Aesthetic**: High-contrast, refined developer aesthetic with subtle glows, bespoke typography, and minimal noise.
2. **Interactive AST Dashboard Mockup**: Realistic code editor with project explorer, syntax-highlighted TypeScript snippet, unhandled async rejection warnings, live diff toggle, and interactive patch resolution.
3. **Restrained Motion Design**: Purposeful entrance and state transitions using Framer Motion without visual distractions.
4. **Fully Responsive Layout**: Tested and optimized for 390px mobile viewports up to 1440px+ ultra-wide desktop monitors without horizontal overflow.
5. **Developer Easter Egg**: Try typing the Konami Code (`↑ ↑ ↓ ↓ ← → ← → B A`) anywhere on the page to unlock Developer Mode!

---

## 📄 Documentation

- Architectural rationale, trade-offs, and verification logs are documented in [`DECISIONS.md`](./DECISIONS.md).

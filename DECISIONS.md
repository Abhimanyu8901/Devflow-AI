# Engineering & Design Decisions — DevFlow AI

### 1. Why did you choose this implementation/design approach over the obvious alternative?
The obvious alternative for AI developer landing pages is a heavy gradient-soaked marketing template filled with generic AI illustrations, faux customer testimonials, and static screenshots. 

Instead, I chose a **functional dark-first developer tool aesthetic** with an **interactive AST code-analysis dashboard mockup**. Developers evaluate tools based on tangible workflow improvements rather than vague AI promises. 
- **Interactive Code Inspector**: Rather than static PNG images, the dashboard is constructed with native HTML/CSS/React components, featuring real syntax-highlighted TypeScript, realistic unhandled async rejection warnings, live diff toggle mechanisms, and an interactive "Explain Issue / Apply Fix" action flow.
- **Restrained Motion Architecture**: Used Framer Motion strictly for semantic reveal cues and subtle state feedback rather than distracting parallax or floating particles.
- **Zero-clutter Honest Messaging**: Emphasized local-first static AST indexing, transparent telemetry practices, and actionable diagnostics without invented metrics.

---

### 2. What trade-off did you make under the assessment time limit, and what would you improve with a real week?
- **Current Trade-off**: The interactive dashboard simulates AST parsing, code diffing, and project tree state with high-fidelity React state logic rather than bundling a full client-side WebAssembly parser (such as Tree-sitter or Biome).
- **With a Full Week**:
  1. **Monaco / CodeMirror Integration**: Embed a lightweight, virtualized code editor with real LSP diagnostic squigglies, multi-file diffing, and mini-map rendering.
  2. **WASM-Powered AST Engine**: Run a real client-side parser against user-uploaded snippets or GitHub repos using Web Workers so visitors can paste their own code and inspect real AST node graphs.
  3. **Theme & Density Customization**: Provide high-density IDE viewports, custom font ligatures, and terminal colorway preferences (e.g., Tokyo Night, Catppuccin, Nord).
  4. **End-to-End Visual Regression Suite**: Integrate Playwright with Percy/Chromatic for pixel-perfect cross-browser regression testing across 320px to 4K displays.

---

### 3. Where did you use AI tools, and what did you personally verify or change afterward?
- **AI Tool Usage**:
  - Leveraged AI for scaffolding component templates, generating the TypeScript hook snippet with the unhandled async rejection scenario, and formatting structured copy.
- **Personal Verification & Manual Changes**:
  - **Layout & Responsiveness**: Manually inspected CSS grid breakpoints and flex layouts to guarantee zero horizontal overflow at 390px (mobile) and 1440px (desktop), ensuring the multi-pane dashboard gracefully stacks without clipping code lines.
  - **Accessible Keyboard Flow & Konami Code**: Implemented and verified the Konami keyboard listener sequence (`↑ ↑ ↓ ↓ ← → ← → B A`), ensuring key normalization, non-intrusive event propagation, and accessible dismissability.
  - **Design Polish & Contrast**: Refined Tailwind color values to meet WCAG AA/AAA contrast ratios against deep `#07090E` backgrounds, calibrated glow radiuses, and tuned Framer Motion transition curves (`[0.22, 1, 0.36, 1]`) for snappy, native-feeling interactions.

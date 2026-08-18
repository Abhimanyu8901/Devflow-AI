import React from 'react';
import { Terminal } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#05070B] py-12 md:py-16 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Col 1: Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-slate-100 text-base">
                <span>DevFlow</span>
                <span className="text-[10px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  AI
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              DevFlow AI is an intelligent developer workspace engineered for codebase comprehension,
              architectural analysis, and structured error diagnostics.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>All static indexing nodes active</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-semibold text-slate-200 text-xs uppercase tracking-wider font-mono mb-3.5">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#product')}
                  className="hover:text-slate-200 transition-colors"
                >
                  Interactive Preview
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#features')}
                  className="hover:text-slate-200 transition-colors"
                >
                  Capabilities
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#how-it-works')}
                  className="hover:text-slate-200 transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#cta')}
                  className="hover:text-slate-200 transition-colors"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Developer Info */}
          <div>
            <h4 className="font-semibold text-slate-200 text-xs uppercase tracking-wider font-mono mb-3.5">
              Developer Info
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="text-slate-400">React + Vite + Tailwind</li>
              <li className="text-slate-400">Framer Motion animations</li>
              <li className="text-slate-400">Lucide React icons</li>
              <li className="pt-2">
                <span className="inline-block px-2 py-1 rounded bg-surface-100 border border-white/[0.06] text-[11px] font-mono text-indigo-300">
                  Tip: Konami code enabled 🎮
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} DevFlow AI. Engineered with precision.
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>Local-first Security</span>
            <span>•</span>
            <span>TypeScript Native</span>
            <span>•</span>
            <span>Zero Telemetry</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

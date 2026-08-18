import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, CheckCircle2 } from 'lucide-react';

export default function FinalCTA() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-b from-[#0F1424] to-[#080B13] border border-white/[0.12] p-8 sm:p-12 md:p-16 text-center shadow-2xl shadow-black/80 overflow-hidden"
        >
          {/* Subtle radial light highlight inside card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-indigo-500/15 blur-[90px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-6">
              <Terminal className="w-3.5 h-3.5" />
              <span>Ready for Immediate Workspace Integration</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Understand your codebase.{' '}
              <span className="bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                Ship with confidence.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Eliminate blind debugging and silent asynchronous failures. Start inspecting your
              projects today.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                type="button"
                onClick={() => scrollTo('#product')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-xl transition-all duration-150 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <span>Start Exploring</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#how-it-works')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-slate-300 hover:text-white bg-surface-100/80 hover:bg-surface-50 border border-white/[0.1] rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>See Architecture</span>
              </button>
            </div>

            {/* Honest Technical Highlights */}
            <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero cloud transmission</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>No complex migration</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Standard AST verification</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

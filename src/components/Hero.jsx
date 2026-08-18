import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Terminal, Cpu, GitBranch } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.12,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[200px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/25 backdrop-blur-sm shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="font-mono">DevFlow Core 1.2</span>
              <span className="text-slate-500">•</span>
              <span>Intelligent Developer Workspace</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
          >
            Understand your codebase.{' '}
            <span className="bg-gradient-to-r from-indigo-300 via-indigo-200 to-sky-300 bg-clip-text text-transparent">
              Ship better software.
            </span>
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal"
          >
            DevFlow AI helps developers analyze complex codebases, understand errors, and turn
            debugging sessions into actionable solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
          >
            <button
              type="button"
              onClick={() => scrollTo('#product')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-xl transition-all duration-150 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/45 focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <span>Start Exploring</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('#how-it-works')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-slate-200 hover:text-white bg-surface-100/90 hover:bg-surface-50 active:bg-surface-200 border border-white/[0.1] rounded-xl transition-all duration-150 focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <Play className="w-4 h-4 text-slate-400 fill-slate-400/40" />
              <span>See How It Works</span>
            </button>
          </motion.div>

          {/* Honest Technical Highlights */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-400"
          >
            <div className="flex items-center justify-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>Local-first AST indexing</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              <span>Zero telemetry on code</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <GitBranch className="w-3.5 h-3.5 text-emerald-400" />
              <span>Git & Monorepo native</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldAlert, Terminal, Workflow, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      id: 'understand',
      title: 'Understand Your Code',
      description:
        'Map architectural dependencies, trace data flow across asynchronous boundaries, and query complex logic in plain English.',
      icon: Layers,
      accentColor: 'from-indigo-500/20 to-indigo-500/5',
      iconColor: 'text-indigo-400',
      badge: 'AST Graphing',
      meta: 'Trace 100k+ lines of cross-module dependencies in milliseconds.',
    },
    {
      id: 'detect',
      title: 'Detect Problems Earlier',
      description:
        'Catch silent asynchronous rejections, race conditions, memory leaks, and missing error boundaries before they reach code review.',
      icon: ShieldAlert,
      accentColor: 'from-amber-500/20 to-amber-500/5',
      iconColor: 'text-amber-400',
      badge: 'Static Heuristics',
      meta: 'Eliminates unhandled promise crashes in production environments.',
    },
    {
      id: 'explain',
      title: 'Explain Complex Errors',
      description:
        'Transform cryptic multi-stack trace dumps and minified exceptions into clean, human-readable causal breakdowns with exact line pointers.',
      icon: Terminal,
      accentColor: 'from-sky-500/20 to-sky-500/5',
      iconColor: 'text-sky-400',
      badge: 'Root Cause AI',
      meta: 'Source-mapped precision across client and backend runtimes.',
    },
    {
      id: 'improve',
      title: 'Improve Development Flow',
      description:
        'Reduce context switching with contextual inline suggestions and verified patch diffs that integrate directly into your existing workflow.',
      icon: Workflow,
      accentColor: 'from-emerald-500/20 to-emerald-500/5',
      iconColor: 'text-emerald-400',
      badge: 'Workflow Velocity',
      meta: 'One-click diff review with AST verification before applying.',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-indigo-900/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Built for developers who value clarity
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Honest, deep technical tools designed to cut through debugging friction without bloated
            gimmicks.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -3 }}
                className="group relative rounded-2xl bg-[#0C101B] border border-white/[0.08] hover:border-indigo-500/40 p-6 sm:p-8 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between"
              >
                <div>
                  {/* Top card bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.accentColor} border border-white/[0.08] flex items-center justify-center shadow-inner`}
                    >
                      <Icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>

                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-surface-100 border border-white/[0.06] text-slate-300">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom meta */}
                <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center text-xs font-mono text-slate-400">
                  <span>{item.meta}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

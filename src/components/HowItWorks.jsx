import React from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, Search, CheckCircle2, Cpu } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Connect',
      subtitle: 'Bring your project into your workspace.',
      description:
        'Point DevFlow AI to your local repository or Git remote. It indexes your codebase structure locally using our lightweight AST engine with zero telemetry.',
      icon: GitPullRequest,
      badge: 'Zero Configuration',
    },
    {
      step: '02',
      title: 'Analyze',
      subtitle: 'Let DevFlow AI inspect structure, errors, and potential issues.',
      description:
        'The static analyzer maps cross-file dependencies, tracks state lifecycles, and flags unhandled promise rejections or fragile error boundaries before build time.',
      icon: Search,
      badge: 'Deep AST Inspection',
    },
    {
      step: '03',
      title: 'Improve',
      subtitle: 'Turn analysis into clear next steps.',
      description:
        'Review human-readable causal breakdowns, inspect verified diff proposals, and apply verified fixes directly into your workspace with a single click.',
      icon: CheckCircle2,
      badge: 'Actionable Solutions',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-600/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Structured Pipeline</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            How DevFlow AI works
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            A seamless three-step developer flow designed to diagnose and resolve code fragility.
          </p>
        </div>

        {/* Connected 3-Step Flow */}
        <div className="relative">
          {/* Horizontal connecting line on desktop */}
          <div
            className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent -translate-y-12 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl bg-[#0B0F19] border border-white/[0.08] hover:border-white/[0.16] p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Step Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-sm font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-lg border border-indigo-500/20">
                          {item.step}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                          {item.title}
                        </span>
                      </div>

                      <div className="w-9 h-9 rounded-lg bg-surface-100 border border-white/[0.06] flex items-center justify-center text-slate-300">
                        <Icon className="w-4 h-4 text-indigo-400" />
                      </div>
                    </div>

                    {/* Step Subtitle */}
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      "{item.subtitle}"
                    </h3>

                    {/* Step Description */}
                    <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Step bottom badge */}
                  <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                    <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/15">
                      {item.badge}
                    </span>
                    {index < 2 && (
                      <span className="text-slate-600 hidden md:block text-xs font-mono">
                        Step {index + 1} → {index + 2}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

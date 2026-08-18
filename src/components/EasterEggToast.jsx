import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Rocket, Activity } from 'lucide-react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export default function EasterEggToast() {
  const [inputSequence, setInputSequence] = useState([]);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expectedKey = KONAMI_CODE[inputSequence.length];

      if (key === expectedKey || (key === 'b' && expectedKey === 'b') || (key === 'a' && expectedKey === 'a')) {
        const nextSequence = [...inputSequence, key];
        if (nextSequence.length === KONAMI_CODE.length) {
          setIsUnlocked(true);
          setInputSequence([]);
        } else {
          setInputSequence(nextSequence);
        }
      } else {
        if (key === 'ArrowUp') {
          setInputSequence(['ArrowUp']);
        } else {
          setInputSequence([]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inputSequence]);

  return (
    <AnimatePresence>
      {isUnlocked && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-5 sm:bottom-5 sm:max-w-sm z-50 p-4 rounded-2xl bg-[#0C101B]/95 backdrop-blur-xl border border-indigo-500/40 shadow-2xl shadow-indigo-950/80 text-slate-100"
          role="status"
          aria-live="polite"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                <Rocket className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                <span>Developer mode unlocked</span>
                <span role="img" aria-label="rocket">🚀</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsUnlocked(false)}
              className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded-lg hover:bg-surface-100 text-slate-400 hover:text-white transition-colors"
              aria-label="Dismiss developer mode toast"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Telemetry metrics */}
          <div className="mt-3 space-y-2 text-xs font-mono text-slate-300 bg-[#080B13] p-2.5 rounded-xl border border-white/[0.04]">
            <div className="flex items-center justify-between text-indigo-300">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-indigo-400" />
                <span>AST Engine Status:</span>
              </span>
              <span className="text-emerald-400 font-bold">OPTIMIZED</span>
            </div>
            <div className="flex items-center justify-between text-slate-400">
              <span>AST Nodes parsed:</span>
              <span className="text-slate-200">14,280 symbols</span>
            </div>
            <div className="flex items-center justify-between text-slate-400">
              <span>Memory overhead:</span>
              <span className="text-slate-200">32.4 MB</span>
            </div>
            <div className="flex items-center justify-between text-slate-400">
              <span>Analysis traversal:</span>
              <span className="text-slate-200">4.2 ms</span>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
            <span>Konami sequence verified</span>
            <button
              type="button"
              onClick={() => setIsUnlocked(false)}
              className="text-indigo-300 hover:text-indigo-200 underline font-medium p-1"
            >
              Dismiss
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

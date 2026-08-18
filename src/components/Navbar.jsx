import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { label: 'Product', href: '#product' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
  ];

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only-focusable z-[100] fixed top-3 left-3 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-[#07090E]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3.5'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1 transition-transform"
              aria-label="DevFlow AI Homepage"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-slate-100 text-lg tracking-tight">
                <span>DevFlow</span>
                <span className="text-[10px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  AI
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150 relative py-1 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-400 font-mono px-2.5 py-1 rounded-full bg-surface-100 border border-white/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>v1.2.0 Active</span>
              </div>
              <a
                href="#product"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#product');
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg transition-all duration-150 shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-surface-100 border border-white/[0.08] focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-b border-white/[0.08] bg-[#07090E]/98 backdrop-blur-xl overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-3">
                <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className="min-h-[44px] flex items-center px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-surface-100/70 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="pt-3 border-t border-white/[0.06] flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 px-3 py-2 rounded-lg bg-surface-200 border border-white/[0.04] font-mono">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Workspace Engine</span>
                    </span>
                    <span className="text-slate-300">Ready</span>
                  </div>
                  <a
                    href="#product"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('#product');
                    }}
                    className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md shadow-indigo-600/30 transition-colors"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

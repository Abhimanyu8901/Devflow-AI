import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderTree,
  FileCode,
  AlertTriangle,
  Sparkles,
  GitBranch,
  Layers,
  CheckCircle2,
  RefreshCw,
  Cpu,
  Wand2,
  Check,
  Copy,
  SplitSquareVertical,
} from 'lucide-react';

export default function ProductPreview() {
  const [activeTab, setActiveTab] = useState('useUserData.ts');
  const [activeProject, setActiveProject] = useState('devflow-dashboard');
  const [isExplaining, setIsExplaining] = useState(false);
  const [showPatch, setShowPatch] = useState(false);
  const [patchApplied, setPatchApplied] = useState(false);
  const [copied, setCopied] = useState(false);

  const projects = [
    { id: 'devflow-dashboard', name: 'devflow-dashboard', issues: 1 },
    { id: 'api-gateway', name: 'api-gateway', issues: 0 },
    { id: 'auth-service', name: 'auth-service', issues: 0 },
    { id: 'analytics-worker', name: 'analytics-worker', issues: 0 },
  ];

  const files = [
    { name: 'useUserData.ts', path: 'src/hooks/useUserData.ts', warning: true },
    { name: 'UserProfile.tsx', path: 'src/components/UserProfile.tsx', warning: false },
    { name: 'ErrorBoundary.tsx', path: 'src/components/ErrorBoundary.tsx', warning: false },
    { name: 'apiClient.ts', path: 'src/utils/apiClient.ts', warning: false },
  ];

  const handleApplyPatch = () => {
    setPatchApplied(true);
    setShowPatch(false);
  };

  const handleCopyCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Render code depending on active tab and patch status
  const renderCodeContent = () => {
    if (activeTab === 'useUserData.ts') {
      if (showPatch) {
        // Unified Diff View
        return (
          <div className="space-y-0.5 min-w-[340px] text-xs font-mono select-text">
            <div className="text-slate-500 py-1 font-semibold text-[11px] border-b border-white/[0.06] mb-2 flex items-center justify-between">
              <span className="text-indigo-300">Proposed AST Patch: src/hooks/useUserData.ts</span>
              <span className="text-amber-400 font-mono text-[10px] bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                Diff +3 -2 lines
              </span>
            </div>

            <div className="text-slate-400 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">1</span><span>import &#123; useState, useEffect &#125; from 'react';</span></div>
            <div className="text-slate-400 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">2</span><span>import &#123; fetchUserProfile &#125; from '../api/users';</span></div>
            <div className="bg-emerald-950/40 text-emerald-300 flex border-l-2 border-emerald-500 pl-1"><span className="w-7 shrink-0 text-emerald-500 font-bold text-right pr-2 select-none">+</span><span>import &#123; useErrorBoundary &#125; from './ErrorBoundary';</span></div>
            <div className="text-slate-400 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">4</span><span>export function useUserData(userId: string) &#123;</span></div>
            <div className="text-slate-400 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">5</span><span className="pl-4">const [user, setUser] = useState&lt;User | null&gt;(null);</span></div>
            <div className="bg-emerald-950/40 text-emerald-300 flex border-l-2 border-emerald-500 pl-1"><span className="w-7 shrink-0 text-emerald-500 font-bold text-right pr-2 select-none">+</span><span className="pl-4">const [error, setError] = useState&lt;Error | null&gt;(null);</span></div>
            <div className="text-slate-400 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">7</span><span className="pl-4">useEffect(() =&gt; &#123;</span></div>
            
            {/* Removed lines */}
            <div className="bg-rose-950/40 text-rose-300 flex border-l-2 border-rose-500 pl-1 line-through opacity-80"><span className="w-7 shrink-0 text-rose-500 font-bold text-right pr-2 select-none">-</span><span className="pl-6">fetchUserProfile(userId).then(data =&gt; &#123;</span></div>
            <div className="bg-rose-950/40 text-rose-300 flex border-l-2 border-rose-500 pl-1 line-through opacity-80"><span className="w-7 shrink-0 text-rose-500 font-bold text-right pr-2 select-none">-</span><span className="pl-8">setUser(data); setLoading(false); &#125;);</span></div>

            {/* Added lines */}
            <div className="bg-emerald-950/40 text-emerald-300 flex border-l-2 border-emerald-500 pl-1"><span className="w-7 shrink-0 text-emerald-500 font-bold text-right pr-2 select-none">+</span><span className="pl-6">fetchUserProfile(userId)</span></div>
            <div className="bg-emerald-950/40 text-emerald-300 flex border-l-2 border-emerald-500 pl-1"><span className="w-7 shrink-0 text-emerald-500 font-bold text-right pr-2 select-none">+</span><span className="pl-8">.then(setUser)</span></div>
            <div className="bg-emerald-950/40 text-emerald-300 flex border-l-2 border-emerald-500 pl-1"><span className="w-7 shrink-0 text-emerald-500 font-bold text-right pr-2 select-none">+</span><span className="pl-8">.catch(setError)</span></div>
            <div className="bg-emerald-950/40 text-emerald-300 flex border-l-2 border-emerald-500 pl-1"><span className="w-7 shrink-0 text-emerald-500 font-bold text-right pr-2 select-none">+</span><span className="pl-8">.finally(() =&gt; setLoading(false));</span></div>

            <div className="text-slate-400 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">14</span><span className="pl-4">&#125;, [userId]);</span></div>
            <div className="text-slate-400 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">15</span><span className="pl-4">return &#123; user, loading, error &#125;;</span></div>
            <div className="text-slate-400 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">16</span><span>&#125;</span></div>
          </div>
        );
      }

      if (!patchApplied) {
        return (
          <div className="space-y-0.5 min-w-[340px] text-xs font-mono select-text">
            <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">1</span><span className="text-indigo-400">import</span> <span className="text-slate-300">&#123; useState, useEffect &#125;</span> <span className="text-indigo-400">from</span> <span className="text-emerald-300">'react'</span>;</div>
            <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">2</span><span className="text-indigo-400">import</span> <span className="text-slate-300">&#123; fetchUserProfile &#125;</span> <span className="text-indigo-400">from</span> <span className="text-emerald-300">'../api/users'</span>;</div>
            <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">3</span><span></span></div>
            <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">4</span><span className="text-indigo-400">export function</span> <span className="text-sky-300">useUserData</span>(<span className="text-amber-200">userId</span>: <span className="text-indigo-300">string</span>) &#123;</div>
            <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">5</span><span className="pl-4"><span className="text-indigo-400">const</span> [user, setUser] = <span className="text-sky-300">useState</span>&lt;<span className="text-indigo-300">User | null</span>&gt;(<span className="text-indigo-400">null</span>);</span></div>
            <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">6</span><span className="pl-4"><span className="text-indigo-400">const</span> [loading, setLoading] = <span className="text-sky-300">useState</span>(<span className="text-indigo-400">true</span>);</span></div>
            <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">7</span><span className="pl-4"><span className="text-sky-300">useEffect</span>(() =&gt; &#123;</span></div>

            {/* Highlighted Warning Gutter */}
            <div className="bg-amber-500/10 border-y border-amber-500/30 -mx-3 px-3 py-1 rounded-sm flex items-start">
              <div className="w-8 shrink-0 flex items-center justify-between pr-3 select-none">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-amber-400 font-bold">8</span>
              </div>
              <div className="pl-4 text-slate-200">
                <span className="text-slate-400">// Warning: Unhandled rejection</span><br />
                <span className="text-sky-300">fetchUserProfile</span>(userId).<span className="text-sky-300">then</span>((data) =&gt; &#123;<br />
                <span className="pl-4">setUser(data);</span><br />
                <span className="pl-4">setLoading(<span className="text-indigo-400">false</span>);</span><br />
                &#125;);
              </div>
            </div>

            <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">13</span><span className="pl-4">&#125;, [userId]);</span></div>
            <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">14</span><span></span></div>
            <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">15</span><span className="pl-4"><span className="text-indigo-400">return</span> &#123; user, loading &#125;;</span></div>
            <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">16</span><span>&#125;</span></div>
          </div>
        );
      }

      // Patched state
      return (
        <div className="space-y-0.5 min-w-[340px] text-xs font-mono select-text">
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">1</span><span className="text-indigo-400">import</span> <span className="text-slate-300">&#123; useState, useEffect &#125;</span> <span className="text-indigo-400">from</span> <span className="text-emerald-300">'react'</span>;</div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">2</span><span className="text-indigo-400">import</span> <span className="text-slate-300">&#123; fetchUserProfile &#125;</span> <span className="text-indigo-400">from</span> <span className="text-emerald-300">'../api/users'</span>;</div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">3</span><span className="text-indigo-400">import</span> <span className="text-slate-300">&#123; useErrorBoundary &#125;</span> <span className="text-indigo-400">from</span> <span className="text-emerald-300">'./ErrorBoundary'</span>;</div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">4</span><span className="text-indigo-400">export function</span> <span className="text-sky-300">useUserData</span>(<span className="text-amber-200">userId</span>: <span className="text-indigo-300">string</span>) &#123;</div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">5</span><span className="pl-4"><span className="text-indigo-400">const</span> [user, setUser] = <span className="text-sky-300">useState</span>&lt;<span className="text-indigo-300">User | null</span>&gt;(<span className="text-indigo-400">null</span>);</span></div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">6</span><span className="pl-4"><span className="text-indigo-400">const</span> [error, setError] = <span className="text-sky-300">useState</span>&lt;<span className="text-indigo-300">Error | null</span>&gt;(<span className="text-indigo-400">null</span>);</span></div>

          <div className="bg-emerald-500/10 border-y border-emerald-500/30 -mx-3 px-3 py-1 rounded-sm flex items-start">
            <div className="w-8 shrink-0 flex items-center justify-between pr-3 select-none">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-emerald-400 font-bold">8</span>
            </div>
            <div className="pl-4 text-slate-200">
              <span className="text-emerald-400">// Fixed: Rejection safely handled</span><br />
              <span className="text-sky-300">fetchUserProfile</span>(userId)<br />
              <span className="pl-4">.<span className="text-sky-300">then</span>((data) =&gt; &#123; setUser(data); setLoading(<span className="text-indigo-400">false</span>); &#125;)</span><br />
              <span className="pl-4">.<span className="text-rose-300">catch</span>((err) =&gt; &#123; setError(err); setLoading(<span className="text-indigo-400">false</span>); &#125;);</span>
            </div>
          </div>

          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">13</span><span className="pl-4">&#125;, [userId]);</span></div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">14</span><span className="pl-4"><span className="text-indigo-400">return</span> &#123; user, loading, error &#125;;</span></div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">15</span><span>&#125;</span></div>
        </div>
      );
    }

    if (activeTab === 'UserProfile.tsx') {
      return (
        <div className="space-y-0.5 min-w-[340px] text-xs font-mono select-text">
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">1</span><span className="text-indigo-400">import</span> <span className="text-slate-300">&#123; FC &#125;</span> <span className="text-indigo-400">from</span> <span className="text-emerald-300">'react'</span>;</div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">2</span><span className="text-indigo-400">import</span> <span className="text-slate-300">&#123; useUserData &#125;</span> <span className="text-indigo-400">from</span> <span className="text-emerald-300">'../hooks/useUserData'</span>;</div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">3</span><span></span></div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">4</span><span className="text-indigo-400">export const</span> <span className="text-sky-300">UserProfile</span>: <span className="text-indigo-300">FC</span> = ({ userId }) =&gt; &#123;</div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">5</span><span className="pl-4"><span className="text-indigo-400">const</span> &#123; user, loading, error &#125; = <span className="text-sky-300">useUserData</span>(userId);</span></div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">6</span><span></span></div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">7</span><span className="pl-4"><span className="text-indigo-400">if</span> (loading) <span className="text-indigo-400">return</span> &lt;<span className="text-rose-400">SkeletonCard</span> /&gt;;</span></div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">8</span><span className="pl-4"><span className="text-indigo-400">if</span> (error) <span className="text-indigo-400">return</span> &lt;<span className="text-rose-400">ErrorBanner</span> message=&#123;error.message&#125; /&gt;;</span></div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">9</span><span></span></div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">10</span><span className="pl-4"><span className="text-indigo-400">return</span> &lt;<span className="text-rose-400">div</span> className=<span className="text-emerald-300">"user-card"</span>&gt;&#123;user?.name&#125;&lt;/<span className="text-rose-400">div</span>&gt;;</span></div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">11</span><span>&#125;;</span></div>
        </div>
      );
    }

    if (activeTab === 'ErrorBoundary.tsx') {
      return (
        <div className="space-y-0.5 min-w-[340px] text-xs font-mono select-text">
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">1</span><span className="text-indigo-400">import</span> <span className="text-slate-300">React, &#123; Component, ErrorInfo &#125;</span> <span className="text-indigo-400">from</span> <span className="text-emerald-300">'react'</span>;</div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">2</span><span></span></div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">3</span><span className="text-indigo-400">export class</span> <span className="text-sky-300">ErrorBoundary</span> <span className="text-indigo-400">extends</span> <span className="text-sky-300">Component</span> &#123;</div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">4</span><span className="pl-4">state = &#123; hasError: <span className="text-indigo-400">false</span>, error: <span className="text-indigo-400">null</span> &#125;;</span></div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">5</span><span className="pl-4"><span className="text-indigo-400">static</span> <span className="text-sky-300">getDerivedStateFromError</span>(error: <span className="text-indigo-300">Error</span>) &#123;</span></div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">6</span><span className="pl-8"><span className="text-indigo-400">return</span> &#123; hasError: <span className="text-indigo-400">true</span>, error &#125;;</span></div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">7</span><span className="pl-4">&#125;</span></div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">8</span><span></span></div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">9</span><span className="pl-4"><span className="text-sky-300">componentDidCatch</span>(error: <span className="text-indigo-300">Error</span>, info: <span className="text-indigo-300">ErrorInfo</span>) &#123;</span></div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">10</span><span className="pl-8"><span className="text-slate-400">// Handled by DevFlow client diagnostics</span></span></div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">11</span><span className="pl-4">&#125;</span></div>
          <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">12</span><span>&#125;</span></div>
        </div>
      );
    }

    // apiClient.ts
    return (
      <div className="space-y-0.5 min-w-[340px] text-xs font-mono select-text">
        <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">1</span><span className="text-indigo-400">export const</span> <span className="text-sky-300">fetchUserProfile</span> = <span className="text-indigo-400">async</span> (id: <span className="text-indigo-300">string</span>) =&gt; &#123;</div>
        <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">2</span><span className="pl-4"><span className="text-indigo-400">const</span> res = <span className="text-indigo-400">await</span> <span className="text-sky-300">fetch</span>(<span className="text-emerald-300">`/api/v1/users/&#36;&#123;id&#125;`</span>);</span></div>
        <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">3</span><span className="pl-4"><span className="text-indigo-400">if</span> (!res.ok) <span className="text-indigo-400">throw new</span> <span className="text-sky-300">Error</span>(<span className="text-emerald-300">`HTTP &#36;&#123;res.status&#125;`</span>);</span></div>
        <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">4</span><span className="pl-4"><span className="text-indigo-400">return</span> res.<span className="text-sky-300">json</span>();</span></div>
        <div className="text-slate-500 flex"><span className="w-8 shrink-0 text-slate-600 text-right pr-3 select-none">5</span><span>&#125;;</span></div>
      </div>
    );
  };

  return (
    <section id="product" className="py-16 md:py-24 relative overflow-hidden" aria-label="Interactive Product Preview">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Workspace</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Real-time codebase intelligence in action
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Inspect AST structures, detect unhandled async failures, and generate context-aware fixes.
          </p>
        </div>

        {/* Dashboard Mockup Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-white/[0.12] bg-[#0B0F19] shadow-2xl shadow-black/80 overflow-hidden"
        >
          {/* Top Window Bar */}
          <div className="px-4 py-3 bg-[#080B13] border-b border-white/[0.08] flex items-center justify-between gap-3 min-w-0">
            {/* Window Controls & Breadcrumb */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/40"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/40"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40"></div>
              </div>

              <div className="h-4 w-[1px] bg-white/[0.1] hidden sm:block shrink-0"></div>

              {/* Project & Branch Tag */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 truncate">
                <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-surface-100 border border-white/[0.06] text-slate-200 shrink-0">
                  <Layers className="w-3 h-3 text-indigo-400" />
                  <span className="font-semibold">{activeProject}</span>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-slate-400 shrink-0">
                  <GitBranch className="w-3 h-3 text-slate-400" />
                  <span>main</span>
                </div>
                <span className="text-slate-600 hidden md:inline">/</span>
                <span className="text-slate-400 hidden md:inline truncate">{activeTab}</span>
              </div>
            </div>

            {/* Status Pulse Indicator */}
            <div className="flex items-center gap-3 text-xs font-mono shrink-0">
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-medium hidden sm:inline">AST Engine Synced (14ms)</span>
                <span className="text-[11px] font-medium sm:hidden">Synced</span>
              </div>
            </div>
          </div>

          {/* Mobile Horizontal File Selector (screens < lg) */}
          <div className="lg:hidden bg-[#070A11] border-b border-white/[0.06] p-2 flex items-center gap-2 overflow-x-auto">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider px-2 shrink-0">Files:</span>
            {files.map((file) => (
              <button
                key={file.name}
                type="button"
                onClick={() => {
                  setActiveTab(file.name);
                  setShowPatch(false);
                }}
                className={`min-h-[34px] px-3 py-1 rounded-md text-xs font-mono shrink-0 flex items-center gap-1.5 transition-colors ${
                  activeTab === file.name
                    ? 'bg-indigo-600/25 text-indigo-200 border border-indigo-500/40 font-semibold'
                    : 'bg-surface-100 text-slate-400 hover:text-slate-200 border border-white/[0.04]'
                }`}
              >
                <FileCode className="w-3 h-3 text-indigo-400" />
                <span>{file.name}</span>
                {file.warning && !patchApplied && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                )}
              </button>
            ))}
          </div>

          {/* Main Dashboard Body: 3-column on desktop / stacked on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
            {/* 1. Desktop Sidebar - Projects & Files (3 cols on desktop) */}
            <div className="hidden lg:flex lg:col-span-3 bg-[#080B12] border-r border-white/[0.06] p-4 flex-col justify-between">
              <div>
                {/* Project Header */}
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold px-2 mb-2 flex items-center justify-between">
                  <span>Workspace Projects</span>
                  <span className="text-indigo-400 text-[10px] bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">
                    4 Repos
                  </span>
                </div>

                {/* Project List */}
                <div className="space-y-1 mb-5">
                  {projects.map((proj) => (
                    <button
                      key={proj.id}
                      type="button"
                      onClick={() => setActiveProject(proj.name)}
                      className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-colors ${
                        activeProject === proj.name
                          ? 'bg-indigo-600/15 text-indigo-200 border border-indigo-500/30 font-semibold'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-surface-100/50'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <FolderTree className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                        <span className="truncate">{proj.name}</span>
                      </div>
                      {proj.issues > 0 && !patchApplied && (
                        <span className="shrink-0 px-1.5 py-0.2 rounded-full text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono">
                          {proj.issues} issue
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* File Tree */}
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold px-2 mb-2 pt-3 border-t border-white/[0.04]">
                  <span>Active Project Files</span>
                </div>

                <div className="space-y-1">
                  {files.map((file) => (
                    <button
                      key={file.name}
                      type="button"
                      onClick={() => {
                        setActiveTab(file.name);
                        setShowPatch(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                        activeTab === file.name
                          ? 'bg-surface-100 text-slate-100 border border-white/[0.08]'
                          : 'text-slate-400 hover:text-slate-300 hover:bg-surface-100/30'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <FileCode className="w-3.5 h-3.5 shrink-0 text-indigo-400" />
                        <span className="truncate">{file.name}</span>
                      </div>
                      {file.warning && !patchApplied && (
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sidebar bottom telemetry */}
              <div className="pt-4 mt-4 border-t border-white/[0.06]">
                <div className="bg-[#0D121F] rounded-lg p-2.5 border border-white/[0.06] text-[11px] font-mono text-slate-400 space-y-1">
                  <div className="flex justify-between">
                    <span>AST Index</span>
                    <span className="text-emerald-400">100% complete</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Parsed symbols</span>
                    <span className="text-slate-300">1,420 nodes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Code Analysis Area (5 cols on desktop) */}
            <div className="lg:col-span-5 bg-[#090D17] border-b lg:border-b-0 lg:border-r border-white/[0.06] flex flex-col justify-between min-w-0">
              <div>
                {/* Code Tab bar */}
                <div className="flex items-center justify-between bg-[#07090F] border-b border-white/[0.06] px-3 py-1.5">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center gap-2 px-3 py-1 bg-[#090D17] border-t border-r border-l border-white/[0.08] rounded-t text-xs font-mono text-indigo-200">
                      <FileCode className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{activeTab}</span>
                      {activeTab === 'useUserData.ts' && !patchApplied && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" title="Modified / Warning"></span>
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="p-1.5 rounded hover:bg-surface-100 text-slate-400 hover:text-slate-200 text-xs flex items-center gap-1 transition-colors"
                    title="Copy snippet"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="text-[10px] font-mono">{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Code Editor Body with Line Numbers */}
                <div className="p-3 sm:p-4 font-mono text-xs overflow-x-auto leading-relaxed overscroll-x-contain">
                  {renderCodeContent()}
                </div>
              </div>

              {/* Code footer status */}
              <div className="p-3 bg-[#080B13] border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">{activeTab === 'useUserData.ts' ? 'Ln 8, Col 12' : 'Ln 1, Col 1'}</span>
                <span className="text-slate-400">TypeScript 5.3</span>
              </div>
            </div>

            {/* 3. AI Analysis Panel (4 cols on desktop) */}
            <div className="lg:col-span-4 bg-[#0A0E1A] p-4 sm:p-5 flex flex-col justify-between">
              <div>
                {/* AI Panel Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                    <span className="font-semibold text-sm text-slate-100">AI Code Analysis</span>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-medium font-mono ${
                      patchApplied
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        patchApplied ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'
                      }`}
                    ></span>
                    <span>{patchApplied ? '0 Issues (Healthy)' : '1 Issue Detected'}</span>
                  </span>
                </div>

                {/* Detected Issue Card */}
                <div className="mt-4 space-y-3">
                  <div className="rounded-xl bg-[#0F1526] border border-white/[0.08] p-3.5 space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold">
                        <AlertTriangle className="w-4 h-4 shrink-0" />
                        <span>Detected issue:</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-surface-100 border border-white/[0.04]">
                        src/hooks/useUserData.ts:8
                      </span>
                    </div>

                    <div className="text-sm font-semibold text-slate-100">
                      Potential missing error boundary
                    </div>

                    <div className="text-xs text-slate-300 leading-relaxed bg-[#0A0E1A] p-2.5 rounded-lg border border-white/[0.04]">
                      <span className="text-indigo-300 font-semibold block mb-1">AI explanation:</span>
                      "This component can fail silently when an asynchronous request rejects. Consider adding an error
                      boundary around the data-fetching section."
                    </div>
                  </div>

                  {/* Deep dive expansion */}
                  <AnimatePresence>
                    {isExplaining && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="rounded-xl bg-indigo-950/30 border border-indigo-500/20 p-3 text-xs text-slate-300 space-y-2">
                          <div className="font-semibold text-indigo-200 flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                            <span>AST Control Flow Diagnostics:</span>
                          </div>
                          <ul className="space-y-1 text-[11px] list-disc list-inside text-slate-300">
                            <li>Async promise chain lacks a terminating <code>.catch()</code> handler.</li>
                            <li>Unhandled network timeouts propagate to React root, causing UI freezes.</li>
                            <li>Recommended solution wraps response in error state & triggers boundary fallback.</li>
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Action Buttons & Interactions */}
              <div className="pt-4 mt-4 border-t border-white/[0.08] space-y-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setIsExplaining(!isExplaining)}
                    className="min-h-[40px] py-2 px-3 rounded-lg text-xs font-medium bg-surface-100 hover:bg-surface-50 text-slate-200 border border-white/[0.08] transition-colors flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-indigo-500"
                  >
                    <Wand2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{isExplaining ? 'Hide Breakdown' : 'Explain Issue'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('useUserData.ts');
                      setShowPatch(!showPatch);
                    }}
                    className="min-h-[40px] py-2 px-3 rounded-lg text-xs font-medium bg-surface-100 hover:bg-surface-50 text-slate-200 border border-white/[0.08] transition-colors flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-indigo-500"
                  >
                    <SplitSquareVertical className="w-3.5 h-3.5 text-sky-400" />
                    <span>{showPatch ? 'Show Code' : 'View Patch'}</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleApplyPatch}
                  disabled={patchApplied}
                  className={`w-full min-h-[42px] py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                    patchApplied
                      ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 cursor-default'
                      : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 hover:shadow-indigo-600/40'
                  }`}
                >
                  {patchApplied ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Patch Applied & Verified by AST</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Apply Suggested Fix</span>
                    </>
                  )}
                </button>

                {patchApplied && (
                  <button
                    type="button"
                    onClick={() => {
                      setPatchApplied(false);
                      setShowPatch(false);
                    }}
                    className="w-full min-h-[32px] text-center text-[11px] text-slate-400 hover:text-slate-200 py-1 transition-colors flex items-center justify-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reset to initial state</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

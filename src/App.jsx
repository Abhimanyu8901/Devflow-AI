import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductPreview from './components/ProductPreview';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import EasterEggToast from './components/EasterEggToast';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-100 flex flex-col justify-between overflow-x-hidden font-sans">
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <ProductPreview />
        <Features />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
      <EasterEggToast />
    </div>
  );
}

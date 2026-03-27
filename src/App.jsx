import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AntigravityParticles from './components/AntigravityParticles';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-white relative font-inter selection:bg-blue-500/30">
      <AntigravityParticles count={800} />

      <AnimatePresence>
        {loading && (
          <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: 'easeInOut' }} className="fixed inset-0 z-[10000] bg-[#030305] flex flex-col items-center justify-center">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="flex flex-col items-center">
              <h1 className="text-2xl font-outfit font-medium text-white tracking-tight mb-6">Satyajit Mohapatra</h1>
              <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 2, ease: 'easeInOut' }} className="h-full rounded-full bg-blue-500" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="relative z-10">
          <Navbar />
          <Hero />
          <div className="bg-[#030305]/70 backdrop-blur-md relative z-10 border-t border-white/[0.04]">
            <About />
            <Skills />
            <Projects />
            <Blog />
            <Experience />
            <Contact />
            <footer className="py-12 border-t border-white/[0.04]">
              <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="text-sm font-outfit font-medium text-white/50">Satyajit Mohapatra</span>
                <p className="text-white/25 text-xs tracking-wider">© {new Date().getFullYear()} Satyajit Mohapatra — ML Portfolio</p>
                <div className="flex items-center space-x-4">
                  <a href="https://www.github.com" target="_blank" rel="noreferrer" className="text-white/25 hover:text-white/60 text-xs tracking-wider transition-colors">GitHub</a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-white/25 hover:text-white/60 text-xs tracking-wider transition-colors">LinkedIn</a>
                </div>
              </div>
            </footer>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Satyajit's\nAntigravity\nSpace";

  useEffect(() => {
    let timeout;
    if (text === '') timeout = setTimeout(() => setText(fullText[0]), 600);
    else if (text.length < fullText.length) timeout = setTimeout(() => setText(fullText.slice(0, text.length + 1)), Math.random() * 40 + 60);
    return () => clearTimeout(timeout);
  }, [text, fullText]);

  const renderText = text.split('\n').map((line, i, arr) => (
    <React.Fragment key={i}>{line}{i !== arr.length - 1 && <br />}</React.Fragment>
  ));

  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden">
      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full flex flex-col items-start justify-center mt-12">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-outfit font-medium text-white leading-[1.1] tracking-tight mb-8 max-w-xl min-h-[3.3em]">
          {renderText}
          <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }} className="inline-block w-[3px] md:w-[5px] bg-white ml-2" style={{ height: '0.85em', verticalAlign: 'text-bottom' }} />
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg md:text-xl text-gray-400 max-w-xs sm:max-w-sm md:max-w-md mb-10 leading-relaxed font-inter">
          I am an aspiring MLOps Engineer pursuing B.Tech CSE (Data Science) at DRIEMS University and a kind of student who loves building stuff, also loves to learn new things.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a href="#projects" className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-all duration-300 w-full sm:w-auto">
            Explore Projects
          </a>
          <a href="/Satyajit-resume.pdf" download className="inline-flex items-center justify-center px-8 py-3.5 bg-white/[0.08] text-white border border-white/[0.05] text-sm font-medium rounded-full hover:bg-white/[0.12] transition-all duration-300 w-full sm:w-auto">
            Download Resume
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030305] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;

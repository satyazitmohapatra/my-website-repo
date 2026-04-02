import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: '-100px' }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/[0.08] text-xs font-space text-white/40 tracking-widest uppercase mb-6">About Me</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-semibold text-white leading-tight tracking-tight max-w-3xl mx-auto">
            Turning data into
            <span className="gradient-text"> practical ML products</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }} className="floating-window bg-[#050508]/80 backdrop-blur-md">
            <div className="p-6">
              <h3 className="text-lg font-outfit font-semibold text-white mb-3">👋 Who I Am</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                I’m <span className="text-white/90">Satyajit Mohapatra</span>, an aspiring Machine Learning Operations Engineer from Jajapur, India, currently pursuing B.Tech in CSE (Data Science) at DRIEMS University.
              </p>
              <p className="text-sm text-white/50 leading-relaxed mt-3">
                My core work includes predictive modeling, exploratory data analysis, and integrating ML solutions into Flask and Streamlit web applications.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }} className="floating-window bg-[#050508]/80 backdrop-blur-md">
            <div className="p-6">
              <h3 className="text-lg font-outfit font-semibold text-white mb-3">🚀 What I Build</h3>
              <div className="space-y-3">
                {[
                  { emoji: '🌐', title: 'ML Web Apps', desc: 'Flask and Streamlit integration' },
                  { emoji: '🏙️', title: 'Civic/Data Platforms', desc: 'User-focused data-driven tools' },
                ].map(item => (
                  <div key={item.title} className="flex items-start space-x-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] transition-colors">
                    <span className="text-lg mt-0.5">{item.emoji}</span>
                    <div>
                      <p className="text-sm font-medium text-white/80">{item.title}</p>
                      <p className="text-xs text-white/40">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: true }} className="floating-window md:col-span-2 bg-[#050508]/80 backdrop-blur-md">
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: '5+', label: 'Projects Built', color: '#60a5fa' },
                  { value: '9.5', label: 'Current CGPA', color: '#3b82f6' },
                  { value: '3', label: 'Education Milestones', color: '#93c5fd' },
                  { value: 'Strong', label: 'ML Foundation', color: '#bfdbfe' },
                ].map(stat => (
                  <div key={stat.label} className="text-center py-4">
                    <div className="text-3xl md:text-4xl font-outfit font-bold mb-1" style={{ color: stat.color, textShadow: `0 0 20px ${stat.color}40` }}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-white/30 font-space tracking-wider uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Laptop Price Predictor',
    desc: 'Predictive model to estimate laptop prices from hardware configurations, with categorical and numerical preprocessing.',
    filter: 'ml',
    tech: ['Python', 'Scikit-Learn', 'Pandas'],
    link: 'https://github.com/satyazitmohapatra/Laptop_Price_Predictor',
    color: '#3b82f6',
    preview: { type: 'terminal', lines: ['> Load dataset', '> Feature engineering', '> Train regression model', '> Predict laptop price'] },
  },
  {
    id: 2,
    title: 'Bangalore House Price Predictor',
    desc: 'Regression-based model for Bangalore home prices, integrated with a user-friendly UI for real-time estimation.',
    filter: 'ml',
    tech: ['Python', 'Regression', 'Flask'],
    link: 'https://github.com/satyazitmohapatra/Bangalore-HousePrice-Prediction-Model',
    color: '#60a5fa',
    preview: { type: 'ui', elements: ['Area, BHK, Location Inputs', 'Live Price Estimate', 'Model Confidence View'] },
  },
  {
    id: 3,
    title: 'Health Diagnostic Hub',
    desc: 'Centralized web app hosting multiple ML disease prediction models with real-time diagnostic insights.',
    filter: 'web',
    tech: ['Flask', 'Streamlit', 'ML Models'],
    link: 'https://github.com/satyazitmohapatra/Heart_disease_Predictor',
    color: '#93c5fd',
    preview: { type: 'ui', elements: ['Disease Prediction Panels', 'Input Validation', 'Fast Response Interface'] },
  },
  {
    id: 4,
    title: 'Olympic Data Analysis',
    desc: 'EDA on 120 years of Olympic data with visual trend analysis for medals, participation, and athlete performance.',
    filter: 'data',
    tech: ['Pandas', 'Seaborn', 'Matplotlib'],
    link: '',
    color: '#1d4ed8',
    preview: { type: 'chart', data: [20, 35, 42, 58, 61, 74, 80, 93] },
  },
  {
    id: 5,
    title: 'CityZen - Civic Issue Reporting Platform',
    desc: 'Crowd-sourced web platform for reporting/tracking civic issues with backend integration and report visualization.',
    filter: 'web',
    tech: ['Flask', 'MySQL', 'HTML/CSS'],
    link: 'https://github.com/satyazitmohapatra/Citizen-Gravience-System',
    color: '#2563eb',
    preview: { type: 'ui', elements: ['Issue Submission', 'Tracking Dashboard', 'Community Reports'] },
  },
];

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'web', label: 'Web Apps' },
  { id: 'data', label: 'Data Analysis' },
];

const MiniTerminal = ({ lines }) => <div className="font-mono text-[10px] sm:text-xs space-y-1.5 text-[#60a5fa]/90">{lines.map((l, i) => <div key={i}>{l}</div>)}</div>;
const MiniUI = ({ elements }) => <div className="space-y-2">{elements.map((e, i) => <div key={i} className="px-3 py-2 rounded-lg bg-white/[0.04] text-white/60 text-[10px] sm:text-xs font-space border border-white/[0.02]">{e}</div>)}</div>;
const MiniChart = ({ data, color }) => {
  const max = Math.max(...data);
  return <div className="flex items-end justify-between h-24 gap-1.5">{data.map((v, i) => <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${(v / max) * 100}%` }} transition={{ delay: i * 0.08, duration: 0.5 }} className="flex-1 rounded-t-sm" style={{ backgroundColor: color, opacity: 0.7 }} />)}</div>;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const filtered = activeFilter === 'all' ? projectsData : projectsData.filter(p => p.filter === activeFilter);

  const handleProjectClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/[0.08] text-xs font-space text-white/40 tracking-widest uppercase mb-6">Projects</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-semibold text-white leading-tight tracking-tight max-w-3xl mx-auto">
            Selected
            <span className="gradient-text"> work</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(f => (
            <button key={f.id} onClick={() => setActiveFilter(f.id)} className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${activeFilter === f.id ? 'bg-white text-black' : 'bg-white/[0.04] text-white/40 border border-white/[0.05] hover:bg-white/[0.08] hover:text-white/80'}`}>
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <motion.div 
                layout 
                key={project.id} 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.95 }} 
                transition={{ duration: 0.3 }} 
                onClick={() => handleProjectClick(project.link)}
                className={`floating-window group ${project.link ? 'cursor-pointer hover:scale-105' : ''} transition-transform duration-300`}
              >
                <div className="px-4 py-3 border-b border-white/[0.04] bg-[#050508]">
                  <span className="text-[10px] text-white/30 font-mono">{project.title.toLowerCase().replace(/ /g, '_')}</span>
                </div>
                <div className="p-4 h-40 overflow-hidden border-b border-white/[0.02] bg-gradient-to-br from-white/[0.02] to-transparent">
                  {project.preview.type === 'terminal' && <MiniTerminal lines={project.preview.lines} />}
                  {project.preview.type === 'ui' && <MiniUI elements={project.preview.elements} />}
                  {project.preview.type === 'chart' && <MiniChart data={project.preview.data} color={project.color} />}
                </div>
                <div className="p-5">
                  <h3 className="text-base font-outfit font-semibold text-white/90 mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map(t => <span key={t} className="text-[10px] px-2 py-0.5 rounded-md font-medium border border-white/[0.04]" style={{ backgroundColor: `${project.color}15`, color: '#ffffff' }}>{t}</span>)}
                  </div>
                  {project.link && (
                    <div className="mt-3 text-[10px] text-white/50 font-space">
                      → Click to view on GitHub
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
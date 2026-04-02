import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2024 - 2028',
    title: 'B.Tech in CSE (Data Science) — DRIEMS University, Cuttack',
    desc: 'Current CGPA: 9.5. Focused on machine learning, data science, and practical software development.',
    tags: ['B.Tech', 'Data Science', 'CGPA 9.5'],
    color: '#3b82f6',
  },
  {
    year: '2022 - 2024',
    title: 'Higher Secondary (XII) — Tetrahedron Junior College, Cuttack',
    desc: 'Academic score: 90.33%. Built strong foundations in mathematics and analytical thinking.',
    tags: ['XII', '90.33%'],
    color: '#60a5fa',
  },
  {
    year: '2022',
    title: 'Secondary Education (X) — Chhatia Nodal HighSchool, Jajapur',
    desc: 'Academic score: 80.4%. Developed early interest in computing and problem solving.',
    tags: ['X', '80.4%'],
    color: '#93c5fd',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/[0.08] text-xs font-space text-white/40 tracking-widest uppercase mb-6">Education & Journey</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-semibold text-white leading-tight tracking-tight max-w-3xl mx-auto">
            Academic
            <span className="gradient-text"> trajectory</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div key={item.year} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.15 }} viewport={{ once: true }} className="relative flex mb-8 last:mb-0">
              <div className="flex flex-col items-center mr-6 md:mr-8">
                <div className="w-3 h-3 rounded-full border-2 flex-shrink-0" style={{ borderColor: item.color, backgroundColor: '#030305', boxShadow: `0 0 12px ${item.color}60` }} />
                {index < timeline.length - 1 && <div className="w-px flex-1 mt-2 bg-gradient-to-b from-white/20 to-transparent"></div>}
              </div>
              <div className="floating-window flex-1 mb-2 bg-[#050508]/80 backdrop-blur-md">
                <div className="p-5 md:p-6">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider mb-3 border border-white/10" style={{ backgroundColor: `${item.color}15`, color: '#ffffff' }}>
                    {item.year}
                  </span>
                  <h3 className="text-lg font-outfit font-semibold text-white/90 mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map(tag => <span key={tag} className="text-[10px] px-2 py-0.5 rounded border border-white/[0.08] text-white/50 font-space">{tag}</span>)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="/Satyajit-resume.pdf" download className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300">
            <span>Download Resume (PDF)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

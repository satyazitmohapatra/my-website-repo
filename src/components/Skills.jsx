import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming & Databases',
    icon: '💻',
    color: '#3b82f6',
    skills: ['Python (DSA)', 'C', 'Java', 'SQL'],
  },
  {
    title: 'ML & Data Science',
    icon: '🧠',
    color: '#60a5fa',
    skills: ['Pandas', 'NumPy', 'Scikit-Learn', 'Data Preprocessing', 'Model Evaluation', 'Regression', 'Classification'],
  },
  {
    title: 'Visualization & App Dev',
    icon: '📈',
    color: '#93c5fd',
    skills: ['Matplotlib', 'Seaborn', 'Flask', 'Streamlit', 'Data Visualization', 'HTML', 'CSS'],
  },
  {
    title: 'Tools & Workflow',
    icon: '🛠️',
    color: '#2563eb',
    skills: ['Git/GitHub', 'Linux CLI', 'VS Code', 'Jupyter Notebook', 'Problem-Solving', 'Team Collaboration'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: '-100px' }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/[0.08] text-xs font-space text-white/40 tracking-widest uppercase mb-6">Skills & Tools</span>
          <h2 className="text-4xl md:text-5xl font-outfit font-semibold text-white tracking-tight">My technology stack</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((cat, idx) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} viewport={{ once: true }} className="glass-card p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-inner" style={{ backgroundColor: `${cat.color}15`, border: `1px solid ${cat.color}30` }}>
                  {cat.icon}
                </div>
                <h3 className="text-lg font-outfit font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-300" style={{ borderColor: `${cat.color}30`, color: '#ffffff', backgroundColor: `${cat.color}10` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

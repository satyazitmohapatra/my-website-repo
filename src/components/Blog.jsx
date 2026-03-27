import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  {
    id: 1,
    title: 'Price Prediction Workflow',
    excerpt: 'Built laptop and house price prediction systems with preprocessing, regression modeling, and practical UI integration.',
    tag: 'ML + Web',
    color: '#60a5fa',
  },
  {
    id: 2,
    title: 'Healthcare ML Integration',
    excerpt: 'Developed Health Diagnostic Hub to combine multiple disease prediction models in one streamlined app.',
    tag: 'Applied ML',
    color: '#93c5fd',
  },
  {
    id: 3,
    title: 'Data Storytelling at Scale',
    excerpt: 'Analyzed 120 years of Olympic data with visualizations to identify medal and participation trends.',
    tag: 'Data Analysis',
    color: '#3b82f6',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/[0.08] text-xs font-space text-white/40 tracking-widest uppercase mb-6">Highlights</span>
          <h2 className="text-4xl md:text-5xl font-outfit font-semibold text-white tracking-tight">Resume-based achievements</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <motion.article key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.08 }} viewport={{ once: true }} className="glass-card p-6">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-medium border border-white/10" style={{ backgroundColor: `${item.color}20`, color: '#fff' }}>
                {item.tag}
              </span>
              <h3 className="text-base font-outfit font-semibold text-white/90 mt-4 mb-2">{item.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{item.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

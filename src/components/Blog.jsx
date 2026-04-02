import React from 'react';
import { motion } from 'framer-motion';

const hackathons = [
  {
    id: 1,
    title: 'Smart India Hackathon (SIH)',
    role: 'Participant & Developer',
    excerpt: 'Collaborated with a dedicated team in the prestigious Smart India Hackathon. We rapidly architected and developed a data-driven solution to tackle a complex real-world problem statement. The experience involved leveraging intelligent models, creating an intuitive user interface, and prototyping under intense 36-hour time constraints.',
    tag: 'National Level Hackathon',
    color: '#8b5cf6',
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/[0.08] text-xs font-space text-white/40 tracking-widest uppercase mb-6">Competitions</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-semibold text-white leading-tight tracking-tight max-w-3xl mx-auto">
            Hackathon
            <span className="gradient-text"> Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {hackathons.map((item, index) => (
            <motion.article key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.08 }} viewport={{ once: true }} className="glass-card p-8 md:p-10 text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1" style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}></div>
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-medium border border-white/10 mb-6" style={{ backgroundColor: `${item.color}20`, color: '#fff' }}>
                {item.tag}
              </span>
              <h3 className="text-2xl font-outfit font-semibold text-white/90 mb-3">{item.title}</h3>
              <p className="text-[11px] font-medium opacity-60 uppercase tracking-widest mb-6 font-space" style={{ color: item.color }}>{item.role}</p>
              <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-2xl mx-auto">{item.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

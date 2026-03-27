import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');
    setTimeout(() => {
      setSending(false);
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    }, 1400);
  };

  const socials = [
    { name: 'GitHub', href: 'https://www.github.com' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/[0.08] text-xs font-space text-white/40 tracking-widest uppercase mb-6">Contact</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-semibold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Let’s build something
            <span className="gradient-text"> impactful</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="space-y-6">
            {[
              { label: 'Email', value: 'mohapatrasatyajit2006@gmail.com' },
              { label: 'Phone', value: '+91 7978289942' },
              { label: 'Location', value: 'Jajapur, India 754023' },
            ].map(item => (
              <div key={item.label} className="flex items-center space-x-4 glass-card p-4">
                <div>
                  <p className="text-xs text-white/40 font-space tracking-wider uppercase">{item.label}</p>
                  <p className="text-sm font-medium text-white/90">{item.value}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center space-x-3 pt-2">
              {socials.map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.05] text-white/70 hover:text-white hover:bg-white/[0.08] transition-all duration-300">
                  {s.name}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
            <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#3b82f6]" placeholder="Your name" />
            <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#3b82f6]" placeholder="you@example.com" />
            <textarea required rows="4" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#3b82f6] resize-none" placeholder="Tell me about your project..." />
            <button type="submit" disabled={sending} className="w-full py-3.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all duration-300 disabled:opacity-50">
              {sending ? 'Sending...' : 'Send Message'}
            </button>
            {status && <p className="text-sm text-[#3b82f6] font-medium text-center">✓ {status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

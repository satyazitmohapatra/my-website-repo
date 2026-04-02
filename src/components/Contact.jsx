import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');

    const formData = new FormData();
    // ----------------------------------------------------
    // Web3Forms Access Key
    // ----------------------------------------------------
    formData.append("access_key", "5298ebb1-6069-4286-8756-5f472c6b9dcd");
    formData.append("subject", `🚀 New Message from ${form.name} (Portfolio)`);
    formData.append("from_name", "Portfolio Contact Form");
    formData.append("replyto", form.email);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();

      if (data.success) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Something went wrong. Please try again.');
    } finally {
      setSending(false);
      setTimeout(() => setStatus(''), 4000);
    }
  };

  const socials = [
    { name: 'GitHub', href: 'https://www.github.com' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/satyajit-mohapatra-48838a343' },
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

          <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} onSubmit={handleSubmit} className="glass-card relative overflow-hidden group p-8 space-y-6 border border-white/[0.08] bg-gradient-to-b from-white/[0.02] to-transparent rounded-2xl">
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="space-y-5 relative z-10">
              <div>
                <label className="block text-xs font-space text-white/50 uppercase tracking-widest mb-2 ml-1">Name</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-black/40 border border-white/[0.08] rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all duration-300 font-outfit" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-space text-white/50 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-black/40 border border-white/[0.08] rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all duration-300 font-outfit" placeholder="hello@example.com" />
              </div>
              <div>
                <label className="block text-xs font-space text-white/50 uppercase tracking-widest mb-2 ml-1">Your Message</label>
                <textarea required rows="4" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-black/40 border border-white/[0.08] rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all duration-300 font-outfit resize-none" placeholder="Tell me about your project..." />
              </div>
            </div>
            <button type="submit" disabled={sending} className="relative w-full py-4 rounded-xl bg-white text-black text-sm font-semibold tracking-wide hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10 overflow-hidden group/btn mt-2">
              <span className="relative z-10 transition-colors duration-300">{sending ? 'Sending...' : 'Send Message'}</span>
              <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
            </button>
            {status && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className={`text-sm font-medium text-center relative z-10 py-2 rounded-lg ${status.includes('wrong') ? 'bg-red-500/10 text-red-400' : 'bg-blue-500/10 text-blue-400'}`}>
                {status.includes('wrong') ? '⚠️' : '✨'} {status}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

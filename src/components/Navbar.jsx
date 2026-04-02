import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Highlights', href: '#blog' },
  { label: 'Education', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pendingHref, setPendingHref] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (href) => {
    const target = document.querySelector(href);
    if (!target) return;

    const headerOffset = 90;
    const elementTop = target.getBoundingClientRect().top + window.scrollY;
    const scrollTop = elementTop - headerOffset;

    window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    if (href.startsWith('#')) window.history.replaceState(null, '', href);
  };

  useEffect(() => {
    if (!pendingHref || mobileOpen) return;

    const timer = window.setTimeout(() => {
      scrollToSection(pendingHref);
      setPendingHref('');
    }, 120);

    return () => window.clearTimeout(timer);
  }, [pendingHref, mobileOpen]);

  const handleNavClick = (event, href) => {
    event.preventDefault();

    if (window.innerWidth < 768) {
      setPendingHref(href);
      setMobileOpen(false);
      return;
    }

    scrollToSection(href);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#030305]/80 backdrop-blur-xl border-b border-white/[0.04]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center space-x-2.5 group"
        >
          <svg width="28" height="28" viewBox="0 0 48 48" fill="none" className="transition-transform group-hover:scale-110">
            <path d="M24 4L4 44h12l8-16 8 16h12L24 4z" fill="#3b82f6" />
          </svg>
          <span className="text-base font-outfit font-semibold tracking-tight text-white">Satyajit Mohapatra</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium transition-colors duration-300 text-white/50 hover:text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i + 0.2 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="hidden md:inline-flex px-5 py-2 text-sm font-medium rounded-full bg-white text-black hover:bg-gray-200 transition-all duration-300"
        >
          Let’s Talk
        </a>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden flex flex-col space-y-1.5 p-2 touch-manipulation"
        >
          <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-5 h-[1.5px] block bg-white/70" />
          <motion.span animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }} className="w-5 h-[1.5px] block bg-white/70" />
          <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-5 h-[1.5px] block bg-white/70" />
        </button>
      </div>

      <motion.div
        initial={false}
        animate={mobileOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className={`md:hidden overflow-hidden bg-[#030305]/95 backdrop-blur-xl border-b border-white/[0.04] ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 flex flex-col space-y-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-white/60 hover:text-white font-medium text-sm py-2 border-b border-white/[0.04] touch-manipulation"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;

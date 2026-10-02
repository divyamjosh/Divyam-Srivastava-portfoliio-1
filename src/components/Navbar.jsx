import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Timeline', href: '#timeline' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 120) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-2xl border-b border-zinc-200/60 bg-white/70 px-6 py-3 shadow-soft backdrop-blur-md">
        
        {/* Brand */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-lg font-bold tracking-tight text-ink">
            DS<span className="text-rose-500">.</span>
          </a>
          
          <div className="hidden h-4 w-px bg-zinc-200 md:block" />
          
          <div className="hidden items-center gap-2 md:flex">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ripple rounded-full bg-cyan-400"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
            </span>
            <span className="text-xs font-medium text-slate">Available for Projects</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors hover:text-ink",
                  isActive ? "text-ink" : "text-slate"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 rounded-lg bg-zinc-100 shadow-sm border border-zinc-200/60"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
          
          <a 
            href="#contact"
            className="ml-4 rounded-lg bg-gradient-to-r from-rose-500 to-orange-400 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:scale-[1.02] hover:shadow-rose-300/40 active:scale-[0.98]"
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="p-1 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6 text-ink" /> : <Menu className="h-6 w-6 text-ink" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-4 right-4 top-20 rounded-2xl border border-zinc-200/60 bg-white/95 p-4 shadow-soft backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-slate transition-colors hover:bg-zinc-50 hover:text-ink"
                >
                  {link.name}
                </a>
              ))}
              <div className="my-2 h-px bg-zinc-200/60" />
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg bg-gradient-to-r from-rose-500 to-orange-400 px-4 py-3 text-center text-sm font-medium text-white shadow-sm transition-all active:scale-95"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

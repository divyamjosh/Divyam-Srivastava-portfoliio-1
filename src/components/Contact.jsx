import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ArrowUpRight, Mail } from 'lucide-react';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "divyamjosh@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative z-10">
      <div className="mx-auto w-full max-w-2xl px-6 md:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8 rounded-3xl border border-line bg-white/50 backdrop-blur-md p-8 md:p-12 shadow-soft hover:shadow-glow-rose transition-shadow duration-500"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-line bg-gradient-to-br from-rose-50 to-orange-50">
            <Mail className="h-6 w-6 text-rose-500" />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Let's Build Together.
            </h2>
            <p className="text-lg text-slate text-balance">
              Currently available for technical internships and collaborative research. I'm always open to discussing system architecture or new engineering challenges.
            </p>
          </div>

          <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
            
            <button
              onClick={handleCopy}
              className="group flex w-full items-center justify-between gap-4 rounded-xl border border-line bg-canvas px-4 py-3 sm:w-auto transition-all hover:border-sky-300 hover:shadow-sm active:scale-95"
            >
              <span className="font-mono text-sm text-ink">{email}</span>
              {copied ? (
                <Check className="h-4 w-4 text-sky-500" />
              ) : (
                <Copy className="h-4 w-4 text-slate group-hover:text-ink transition-colors" />
              )}
            </button>
            
            <a 
              href="https://www.linkedin.com/in/divyam-srivastava-7940a0365"
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-orange-400 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:scale-[1.02] hover:shadow-rose-300/40 active:scale-[0.98] sm:w-auto"
            >
              Connect on LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Code2 } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[90vh] items-center pt-24 pb-12">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
        <div className="flex flex-col-reverse items-start gap-12 md:flex-row md:items-center md:justify-between">
          
          <div className="flex max-w-2xl flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 text-sm font-mono text-slate"
            >
              <div className="flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 text-sky-700 px-3 py-1 shadow-sm">
                <MapPin className="h-3.5 w-3.5" />
                Jaipur, IN
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 text-rose-700 px-3 py-1 shadow-sm">
                <Code2 className="h-3.5 w-3.5" />
                DSA & GenAI
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl font-bold tracking-tight text-ink md:text-7xl lg:text-8xl"
            >
              Divyam Srivastava.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl text-lg leading-relaxed text-slate md:text-xl text-balance"
            >
              B.Tech Computer Science student specializing in Systems, AI & Software Architecture. Building high-performance, generative interfaces and scalable applications.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 flex flex-wrap items-center gap-4"
            >
              <a 
                href="#projects"
                className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-rose-500 to-orange-400 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:scale-[1.02] hover:shadow-rose-300/40 active:scale-[0.98]"
              >
                View Architecture
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              
              <a 
                href="https://github.com/divyamjosh" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-lg border border-line bg-surface px-6 py-3 text-sm font-medium text-ink shadow-sm transition-all hover:scale-[1.02] hover:border-zinc-300 active:scale-[0.98]"
              >
                GitHub Profile
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-64 w-64 shrink-0 md:h-80 md:w-80 lg:h-96 lg:w-96"
          >
            {/* Prismatic Glass Display Container */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-2xl p-1 bg-gradient-to-tr from-sky-400 via-rose-400 to-amber-300 shadow-glow-rose"
            >
              {/* Inner frosted glass frame */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-2xl"></div>
              {/* Actual Image */}
              <img 
                src="/profile.jpg" 
                alt="Divyam Srivastava"
                className="relative h-full w-full rounded-[14px] object-cover shadow-sm bg-white"
              />
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

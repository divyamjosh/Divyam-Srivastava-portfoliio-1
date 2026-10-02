import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, LayoutTemplate } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative z-10">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
        
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest text-slate"
          >
            01. Mission
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-3xl text-3xl font-medium leading-tight text-ink md:text-4xl"
          >
            Personal Mission & Engineering Philosophy.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Systems Over Syntax",
              desc: "I believe in building clean, robust architectures rather than just writing code. A disciplined focus on algorithms and data structures forms the core of my approach to solving complex problems.",
              icon: <Terminal className="h-6 w-6 text-sky-500" />,
              glow: "hover:shadow-glow-sky"
            },
            {
              title: "Generative Workflows",
              desc: "Integrating AI into software shouldn't be an afterthought. I engineer pipelines and interfaces that seamlessly bridge Large Language Models with predictable, high-performance web applications.",
              icon: <Cpu className="h-6 w-6 text-rose-500" />,
              glow: "hover:shadow-glow-rose"
            },
            {
              title: "Disciplined Interfaces",
              desc: "User interfaces should feel tactile, responsive, and effortless. I adhere to strict visual guidelines—opting for sharp micro-borders, logical spacing, and purposeful animations over unnecessary flash.",
              icon: <LayoutTemplate className="h-6 w-6 text-amber-500" />,
              glow: "hover:shadow-glow-sky" // Alternate glow
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 ${item.glow}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-100 bg-canvas">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-ink">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

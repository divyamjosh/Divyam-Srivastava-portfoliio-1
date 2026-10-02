import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../utils';

const projects = [
  {
    title: "Algorithmic Workspace & Systems Dashboard",
    tags: [
      { name: "React", style: "bg-sky-50 text-sky-700 border-sky-200" },
      { name: "Tailwind", style: "bg-teal-50 text-teal-700 border-teal-200" },
      { name: "System Design", style: "bg-rose-50 text-rose-700 border-rose-200" }
    ],
    shortDesc: "High-performance task architecture with keyboard-first navigation and state persistence.",
    archDetails: "Engineered a zero-latency client-side dashboard avoiding external round-trips. Employs React Context for state propagation, standardizing keyboard bindings for power-user accessibility, and implements robust local-storage adapters for persistence.",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Cognitive AI Pipeline Interface",
    tags: [
      { name: "Python", style: "bg-amber-50 text-amber-700 border-amber-200" },
      { name: "API Architecture", style: "bg-rose-50 text-rose-700 border-rose-200" },
      { name: "Generative AI", style: "bg-sky-50 text-sky-700 border-sky-200" }
    ],
    shortDesc: "Streamlined conversational frontend with real-time streaming simulation and token telemetry.",
    archDetails: "Built a robust ingestion layer interfacing directly with LLM endpoints. Implemented a custom event-source listener for token-by-token streaming simulation, paired with a telemetry sidebar analyzing context window usage and prompt token metrics in real-time.",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Editorial Portfolio Engine",
    tags: [
      { name: "Vite", style: "bg-indigo-50 text-indigo-700 border-indigo-200" },
      { name: "Framer Motion", style: "bg-rose-50 text-rose-700 border-rose-200" },
      { name: "Typography", style: "bg-teal-50 text-teal-700 border-teal-200" }
    ],
    shortDesc: "Minimalist, zero-latency showcase built for maximum visual discipline and mobile responsiveness.",
    archDetails: "Statically generated via Vite, utilizing Framer Motion for hardware-accelerated layout transitions. Designed a rigorous typographic scale leveraging Inter/JetBrains Mono and deployed on edge infrastructure (Vercel) for sub-second LCP (Largest Contentful Paint).",
    demoUrl: "#",
    githubUrl: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative z-10">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
        
        <div className="mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate">03. Work</h2>
          <p className="mt-4 max-w-3xl text-3xl font-medium leading-tight text-ink md:text-4xl">
            Featured Projects & Architecture.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 ${isEven ? 'hover:shadow-glow-sky' : 'hover:shadow-glow-rose'}`}
    >
      <div className="p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-ink">{project.title}</h3>
            <div className="flex flex-wrap items-center gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className={`rounded-full border px-3 py-1 text-xs font-mono ${tag.style}`}>
                  {tag.name}
                </span>
              ))}
            </div>
            <p className="max-w-2xl text-slate text-balance leading-relaxed">
              {project.shortDesc}
            </p>
          </div>
          
          <div className="flex items-center gap-3 md:shrink-0">
            <a href={project.githubUrl} className="group flex h-10 w-10 items-center justify-center rounded-full border border-line bg-canvas transition-all hover:bg-white hover:border-zinc-300 hover:shadow-sm active:scale-95">
              <GitBranch className="h-4 w-4 text-slate group-hover:text-ink" />
            </a>
            <a href={project.demoUrl} className="group flex h-10 px-4 items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-glow-sky active:scale-95">
              Live Demo
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-line pt-4">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex w-full items-center justify-between py-2 text-sm font-medium text-ink transition-colors hover:text-sky-600"
          >
            Technical Architecture Breakdown
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-4 pb-2">
                  <p className="rounded-xl bg-canvas p-4 text-sm font-mono leading-relaxed text-slate border border-line">
                    {project.archDetails}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

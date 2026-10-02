import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Bot, Wrench } from 'lucide-react';

const skillClusters = [
  {
    title: "Core Engineering",
    icon: <Code className="h-5 w-5 text-sky-500" />,
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    dotColor: "bg-sky-400",
    shadowHover: "hover:shadow-glow-sky",
    skills: ["Python", "JavaScript (ES6+)", "C/C++", "Data Structures", "Algorithms", "OOP"]
  },
  {
    title: "Modern Web Arch",
    icon: <Layout className="h-5 w-5 text-rose-500" />,
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    dotColor: "bg-rose-400",
    shadowHover: "hover:shadow-glow-rose",
    skills: ["React.js", "Vite", "Tailwind CSS", "Responsive Systems", "Framer Motion", "HTML5/CSS3"]
  },
  {
    title: "Artificial Intelligence",
    icon: <Bot className="h-5 w-5 text-teal-600" />,
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    dotColor: "bg-teal-500",
    shadowHover: "hover:shadow-glow-sky",
    skills: ["LLM Integration", "Prompt Engineering", "Generative AI", "Token Telemetry", "OpenAI API"]
  },
  {
    title: "Tooling & Workflow",
    icon: <Wrench className="h-5 w-5 text-amber-500" />,
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    dotColor: "bg-amber-400",
    shadowHover: "hover:shadow-glow-rose",
    skills: ["Git", "GitHub", "Digital Systems", "Shell/CLI", "Vercel", "VS Code"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative z-10">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
        
        <div className="mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate">02. Expertise</h2>
          <p className="mt-4 max-w-3xl text-3xl font-medium leading-tight text-ink md:text-4xl">
            Engineering Matrix.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillClusters.map((cluster, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white ${cluster.shadowHover}`}
            >
              <div className="mb-4 flex flex-col items-start gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${cluster.badgeColor}`}>
                  {cluster.icon}
                </div>
                <h3 className="font-bold text-ink">{cluster.title}</h3>
              </div>
              
              <ul className="flex flex-col gap-2 mt-2">
                {cluster.skills.map((skill, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm font-mono text-slate group-hover:text-ink transition-colors">
                    <span className={`h-1.5 w-1.5 rounded-full ${cluster.dotColor}`} />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

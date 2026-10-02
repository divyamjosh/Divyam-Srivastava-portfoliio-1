import React from 'react';
import { motion } from 'framer-motion';

export function Timeline() {
  return (
    <section id="timeline" className="py-20 md:py-32 bg-surface relative z-10 border-y border-line/50">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
        
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest text-slate"
          >
            04. History
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-3xl text-3xl font-medium leading-tight text-ink md:text-4xl"
          >
            Education & Milestones.
          </motion.p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          
          {/* Timeline */}
          <div className="relative border-l border-line pl-6 md:pl-8">
            <TimelineItem 
              title="B.Tech Computer Science & Engineering"
              subtitle="JECRC University, Jaipur"
              date="Present"
              description="Core coursework in Data Structures, Algorithms, OS, and Database Management. Focused on systems architecture and modern web development."
              active
            />
            <TimelineItem 
              title="Continuous Technical Experiments"
              subtitle="Independent Research"
              date="Ongoing"
              description="Building Generative AI pipelines, local state-management paradigms, and studying design systems."
            />
            <TimelineItem 
              title="Problem Solving Foundation"
              subtitle="Algorithms & Logic"
              date="2023 - Present"
              description="Consistent practice on competitive programming platforms to sharpen logical thinking and C/C++ memory management skills."
            />
          </div>

          {/* Achievements Grid */}
          <div className="flex flex-col gap-6">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-ink mb-2"
            >
              Milestones & Sprints
            </motion.h3>
            
            <AchievementCard 
              category="Hackathons"
              title="Engineering Sprints"
              desc="Participated in rapid-prototyping events, delivering functional MVPs within tight 48-hour technical constraints."
              delay={0}
              color="sky"
            />
            
            <AchievementCard 
              category="Certifications"
              title="Continuous Learning"
              desc="Acquired verifiable credentials in Modern Web Architecture, Python scripting, and system design fundamentals."
              delay={0.1}
              color="rose"
            />
            
            <AchievementCard 
              category="Open Source"
              title="Code Milestones"
              desc="Maintained a disciplined Git workflow, pushing consistent algorithmic solutions and modular frontend components."
              delay={0.2}
              color="teal"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

function TimelineItem({ title, subtitle, date, description, active = false }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative mb-10 last:mb-0"
    >
      <div className={`absolute -left-[31px] md:-left-[39px] top-1.5 h-3 w-3 rounded-full border-2 bg-surface transition-colors ${active ? 'border-sky-500 bg-sky-500 shadow-glow-sky' : 'border-line'}`} />
      
      <div className="flex flex-col gap-1">
        <span className="text-xs font-mono font-medium text-sky-600">{date}</span>
        <h3 className="text-lg font-bold text-ink">{title}</h3>
        <h4 className="text-sm font-medium text-slate mb-2">{subtitle}</h4>
        <p className="text-sm leading-relaxed text-slate">{description}</p>
      </div>
    </motion.div>
  );
}

function AchievementCard({ category, title, desc, delay, color }) {
  const colorMap = {
    sky: 'text-sky-600',
    rose: 'text-rose-600',
    teal: 'text-teal-600'
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex flex-col gap-2 rounded-xl border border-line bg-canvas p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sky"
    >
      <span className={`text-xs font-mono font-medium uppercase tracking-wider ${colorMap[color]}`}>{category}</span>
      <h4 className="font-bold text-ink">{title}</h4>
      <p className="text-sm text-slate">{desc}</p>
    </motion.div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Cpu, Layout, Terminal } from 'lucide-react';

const techStack = [
  {
    category: "Languages",
    icon: <Code2 className="text-primary" />,
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"]
  },
  {
    category: "Frameworks",
    icon: <Layout className="text-primary" />,
    skills: ["Django", "FastAPI", "React", "Node.js", "Express"]
  },
  {
    category: "Databases",
    icon: <Database className="text-primary" />,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Redis"]
  },
  {
    category: "Infrastructure",
    icon: <Globe className="text-primary" />,
    skills: ["Docker", "Git/GitHub", "Vite", "Linux", "REST APIs"]
  }
];

const TechCard = ({ cat, index }: { cat: typeof techStack[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="glass-panel p-8 group hover:border-primary/30 transition-colors duration-500"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          {cat.icon}
        </div>
        <h3 className="text-xl font-bold tracking-tight">{cat.category}</h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {cat.skills.map((skill) => (
          <span 
            key={skill}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-text-secondary hover:text-white hover:bg-primary/10 hover:border-primary/20 transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Tech: React.FC = () => {
  return (
    <section id="tech" className="py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
      
      <div className="pro-container relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4"
          >
            My Stack
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold tracking-tighter"
          >
            Core <span className="text-white/20">Technologies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-text-secondary max-w-2xl"
          >
            A curated list of tools and frameworks I use to build production-ready software.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {techStack.map((cat, i) => (
            <TechCard key={cat.category} cat={cat} index={i} />
          ))}
        </div>
        
        {/* Soft infinite marquee placeholder or branding area */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 py-10 border-t border-b border-white/5 flex justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
        >
          {/* We could add some iconic brand logos here if needed */}
          <div className="flex items-center gap-2 text-white/40 font-bold tracking-tighter text-2xl">
            <Cpu size={28} /> PYTHON
          </div>
          <div className="flex items-center gap-2 text-white/40 font-bold tracking-tighter text-2xl">
            <Layout size={28} /> DJANGO
          </div>
          <div className="flex items-center gap-2 text-white/40 font-bold tracking-tighter text-2xl">
            <Terminal size={28} /> FASTAPI
          </div>
          <div className="flex items-center gap-2 text-white/40 font-bold tracking-tighter text-2xl">
            <Globe size={28} /> REACT
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GitHubIcon as Github } from './Icons';

const projects = [
  {
    title: "Pretty Gal",
    category: "Luxury E-Commerce",
    description: "A high-end fashion experience with fluid transitions, minimalist aesthetics, and custom order management backend.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    link: "#", // Placeholder as requested
    github: "#",
    tech: ["Django", "React", "PostgreSQL", "Framer Motion"]
  },
  {
    title: "Gaming Hub",
    category: "Entertainment Platform",
    description: "A cinematic game discovery hub featuring Steam integration, luxury 'Dark Mode' UI, and dynamic content ingestion.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    link: "#", // Placeholder as requested
    github: "#",
    tech: ["Python", "FastAPI", "React", "Supabase"]
  },
  {
    title: "Skycast",
    category: "Weather SaaS",
    description: "Precision weather monitoring platform with real-time analytics and predictive data visualization.",
    image: "https://images.unsplash.com/photo-1592210633467-3b9110d33d1c?q=80&w=2070&auto=format&fit=crop",
    link: "https://sky-castt.vercel.app/",
    github: "https://github.com/shudhanshu-03/skycast",
    tech: ["React", "FastAPI", "Tailwind CSS", "Chart.js"]
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
      className="group relative flex flex-col md:flex-row gap-12 items-center py-20 border-b border-white/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Info */}
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-4">
          <span className="text-primary font-bold text-sm tracking-widest uppercase">0{index + 1}</span>
          <span className="text-white/40 text-sm">{project.category}</span>
        </div>
        
        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter group-hover:text-primary transition-colors duration-500">
          {project.title}
        </h3>
        
        <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/40">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 pt-4">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-primary transition-colors group/link">
            <span>View Live</span>
            <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
          </a>
          <a href={project.github} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
            <Github size={18} />
            <span>Source Code</span>
          </a>
        </div>
      </div>

      {/* Project Image Preview */}
      <div className="flex-1 relative aspect-video w-full overflow-hidden rounded-[2.5rem] bg-surface border border-white/5">
        <motion.img
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000"
        />
        
        {/* Floating Label */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ scale: 0, x: "-50%", y: "-50%" }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-black font-bold text-sm shadow-[0_0_40px_rgba(190,242,100,0.5)] z-20"
            >
              Explore
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="pro-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block"
            >
              Selected Works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-bold tracking-tighter"
            >
              Crafting <span className="text-white/20">Digital Excellence</span>
            </motion.h2>
          </div>
          
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            href="https://github.com/shudhanshu-03"
            className="flex items-center gap-3 text-white/40 hover:text-primary transition-colors group text-lg"
          >
            <span>View All Repositories</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </div>

        <div className="flex flex-col">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

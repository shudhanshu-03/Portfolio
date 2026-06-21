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
    link: "https://pretty-gal.vercel.app/",
    github: "#",
    tech: ["Django", "React", "PostgreSQL", "Framer Motion"]
  },
  {
    title: "Veltrix",
    category: "Entertainment Platform",
    description: "A cinematic game discovery hub featuring Steam integration, luxury 'Dark Mode' UI, and dynamic content ingestion.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    link: "https://veltrix-gold.vercel.app/",
    github: "#",
    tech: ["Python", "FastAPI", "React", "Supabase"]
  },
  {
    title: "Skycast",
    category: "Weather SaaS",
    description: "Precision weather monitoring platform with real-time analytics and predictive data visualization.",
    image: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?q=80&w=2070&auto=format&fit=crop",
    link: "https://sky-castt.vercel.app/",
    github: "https://github.com/shudhanshu-03/skycast",
    tech: ["React", "FastAPI", "Tailwind CSS", "Chart.js"]
  },
  {
    title: "Sanskrit RAG",
    category: "AI & Machine Learning",
    description: "A sophisticated Retrieval-Augmented Generation system capable of processing ancient Sanskrit texts to synthesize intelligent, contextual answers.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    link: "",
    github: "https://github.com/shudhanshu-03/Retrieval-Augmented-Generation--Sanskrit",
    tech: ["Python", "RAG", "LLMs", "Vector DB"]
  },
  {
    title: "FB Agentic Analyst",
    category: "Multi-Agent AI",
    description: "An autonomous AI orchestration tool that diagnoses Facebook ad performance via multi-LLM providers with recursive self-reflection.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "",
    github: "https://github.com/shudhanshu-03/Agentic-Facebook-Performance-Analyst",
    tech: ["Python", "Streamlit", "Groq API", "Agentic AI"]
  }
];

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">
          {/* Left Side: List of Projects */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {projects.map((project, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={project.title}
                  onClick={() => setActiveIndex(index)}
                  className={`group text-left p-6 border-l-4 transition-all duration-300 flex flex-col justify-center min-h-[120px] ${
                    isActive 
                      ? 'border-primary bg-white/5' 
                      : 'border-white/10 hover:border-white/30 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <span className={`font-bold text-xs tracking-widest uppercase transition-colors ${
                      isActive ? 'text-primary' : 'text-white/20 group-hover:text-white/40'
                    }`}>
                      0{index + 1}
                    </span>
                    <span className={`text-xs transition-colors ${
                      isActive ? 'text-white/80' : 'text-white/40 group-hover:text-white/60'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className={`text-3xl md:text-4xl font-bold tracking-tighter transition-colors ${
                    isActive ? 'text-white' : 'text-white/40 group-hover:text-white/80'
                  }`}>
                    {project.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right Side: Active Project Details & Image */}
          <div className="w-full lg:w-2/3 relative h-[500px] lg:h-[650px] rounded-[2rem] overflow-hidden bg-surface border border-white/5 group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <img 
                  src={projects[activeIndex].image} 
                  alt={projects[activeIndex].title} 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mb-8">
                      {projects[activeIndex].description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {projects[activeIndex].tech.map(t => (
                        <span key={t} className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold text-white/70">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      {projects[activeIndex].link && (
                        <a href={projects[activeIndex].link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-primary text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform group/link">
                          <span>View Live</span>
                          <ExternalLink size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </a>
                      )}
                      {projects[activeIndex].github && projects[activeIndex].github !== "#" && (
                        <a href={projects[activeIndex].github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 text-white px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-colors">
                          <Github size={20} />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

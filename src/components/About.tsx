import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Award, Zap } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="pro-container relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4"
          >
            Behind the Code
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold tracking-tighter"
          >
            Engineering <span className="text-white/20">Human-Centric</span> Systems
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Main Bio - Large Card */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-8 glass-panel p-8 md:p-12 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Code2 size={24} />
                </div>
                <h3 className="text-2xl font-bold">The Vision</h3>
              </div>
              <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
                I'm a <span className="text-white font-semibold">Python Full Stack Developer</span> with 
                <span className="text-primary"> 1 year of hands-on experience</span> in building scalable web architectures. 
                My focus lies at the intersection of robust backend logic and fluid user experiences. I thrive on translating complex requirements into elegant, high-performance digital products.
              </p>
              <p className="mt-6 text-xl text-text-secondary leading-relaxed max-w-2xl">
                Whether it's optimizing Django queries or crafting micro-interactions in React, I approach every challenge with a tech-focused mindset and a commitment to clean, maintainable code.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/5">
              <div>
                <span className="text-white/40 text-xs uppercase tracking-widest block mb-2">Location</span>
                <span className="text-lg font-medium">India</span>
              </div>
              <div>
                <span className="text-white/40 text-xs uppercase tracking-widest block mb-2">Availability</span>
                <span className="text-lg font-medium text-primary">Open to Work</span>
              </div>
              <div className="hidden md:block">
                <span className="text-white/40 text-xs uppercase tracking-widest block mb-2">Experience</span>
                <span className="text-lg font-medium">1 Year +</span>
              </div>
            </div>
          </motion.div>

          {/* Education - Small Card */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-4 glass-panel p-8 md:p-10 bg-primary/5 border-primary/20"
          >
            <div className="flex items-center gap-3 mb-8 text-primary">
              <GraduationCap size={24} />
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <div className="space-y-8">
              <div>
                <span className="text-white/40 text-xs uppercase tracking-widest mb-1 block">B.Tech in CS</span>
                <h4 className="text-lg font-semibold leading-tight">Lovely Professional University</h4>
                <p className="text-sm text-text-secondary mt-1">Focusing on Full Stack Engineering and System Design.</p>
              </div>
              <div>
                <span className="text-white/40 text-xs uppercase tracking-widest mb-1 block">Highlights</span>
                <ul className="space-y-2 text-sm font-medium">
                  <li className="flex items-center gap-2">
                    <Zap size={14} className="text-primary" />
                    Python Professional
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap size={14} className="text-primary" />
                    Full Stack Excellence
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Core Values - Horizontal Card */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-12 glass-panel p-8 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden group"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary group-hover:rotate-12 transition-transform duration-500">
                  <Award size={40} />
                </div>
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Commitment to Excellence</h3>
                <p className="text-text-secondary max-w-xl italic">
                  "I believe that code is a craft. Every pixel and every line of backend logic should serve a purpose and provide real value to the end user."
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex flex-col items-center p-4 rounded-3xl bg-white/5 border border-white/10 min-w-[120px]">
                <span className="text-primary font-bold text-3xl mb-1">01</span>
                <span className="text-white/40 text-[10px] uppercase tracking-wider">Years Exp</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-3xl bg-white/5 border border-white/10 min-w-[120px]">
                <span className="text-primary font-bold text-3xl mb-1">4+</span>
                <span className="text-white/40 text-[10px] uppercase tracking-wider">Major Projects</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

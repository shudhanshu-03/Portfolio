import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GitHubIcon as Github, LinkedInIcon as Linkedin, TwitterIcon as Twitter } from './Icons';


const Hero: React.FC = () => {
  const name = "Shudhanshu";
  const surname = "Prajapati";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 100, opacity: 0, rotateX: -90 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary-dark/10 rounded-full blur-[100px] animate-pulse" />

      <div className="pro-container relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-primary text-sm font-medium backdrop-blur-md">
            Python Full Stack Developer
          </span>
        </motion.div>

        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-7xl md:text-9xl font-bold text-center flex flex-col leading-[0.85] tracking-tighter"
        >
          <div className="flex justify-center overflow-hidden h-[1.1em]">
            {name.split('').map((char, i) => (
              <motion.span key={i} variants={letterVariants} className="inline-block">
                {char}
              </motion.span>
            ))}
          </div>
          <div className="flex justify-center overflow-hidden h-[1.1em] text-white/20">
            {surname.split('').map((char, i) => (
              <motion.span key={i} variants={letterVariants} className="inline-block">
                {char}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8 text-xl text-text-secondary text-center max-w-2xl leading-relaxed"
        >
          Building high-performance <span className="text-white font-medium">SaaS platforms</span>, 
          robust <span className="text-white font-medium">CRMs</span>, and immersive 
          <span className="text-white font-medium"> Web Experiences</span> with modern tech stacks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <a href="#projects" className="pro-button-primary">
            View My Work
          </a>
          <a href="#contact" className="pro-button-outline">
            Let's Talk
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-16 flex gap-8 items-center"
        >
          {[
            { icon: Github, href: "https://github.com/shudhanshu-03" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/shudhanshu-prajapati1902/" },
            { icon: Twitter, href: "#" },
            { icon: Mail, href: "mailto:shudhanshuprajapati1234@gmail.com" }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              whileHover={{ y: -5, color: '#bef264' }}
              className="text-white/40 transition-colors"
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;

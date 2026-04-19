import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { GitHubIcon as Github, LinkedInIcon as Linkedin, TwitterIcon as Twitter } from './Icons';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 relative overflow-hidden border-t border-white/5">
      <div className="pro-container">
        <div className="flex flex-col items-center gap-12">
          {/* Brand Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter"
          >
            SP<span className="text-primary">.</span>
          </motion.div>

          {/* Social Links */}
          <div className="flex gap-10">
            {[
              { icon: Github, href: "https://github.com/shudhanshu-03" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/shudhanshu-prajapati1902/" },
              { icon: Twitter, href: "#" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-white/40 hover:text-primary transition-colors p-2"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center gap-3 text-white/30 hover:text-white transition-colors group"
          >
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
              <ArrowUp size={20} />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest">Back to Top</span>
          </motion.button>

          <div className="flex flex-col items-center gap-2">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Shudhanshu Prajapati. All rights reserved.
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">
              Built with React + Framer Motion + Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

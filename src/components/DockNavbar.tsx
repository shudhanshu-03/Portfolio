import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail } from 'lucide-react';
import { cn } from '../utils/cn';

const navItems = [
  { name: 'Home', icon: Home, href: '#hero' },
  { name: 'About', icon: User, href: '#about' },
  { name: 'Tech', icon: Code, href: '#tech' },
  { name: 'Works', icon: Briefcase, href: '#projects' },
  { name: 'Contact', icon: Mail, href: '#contact' },
];

const DockNavbar: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring' as const, damping: 20, stiffness: 100 }}
        className="glass-panel px-4 py-3 flex items-center gap-2"
      >
        {navItems.map((item, idx) => (
          <a
            key={item.name}
            href={item.href}
            className="relative p-3 group"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <item.icon className={cn(
              "w-6 h-6 transition-all duration-300 relative z-10",
              hoveredIdx === idx ? "text-primary scale-125" : "text-white/60"
            )} />
            
            {/* Hover Indicator */}
            <AnimatePresence>
              {hoveredIdx === idx && (
                <motion.div
                  layoutId="nav-bg"
                  className="absolute inset-0 bg-white/10 rounded-2xl -z-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: 'spring' as const, damping: 15, stiffness: 150 }}
                />
              )}
            </AnimatePresence>

            {/* Tooltip */}
            <AnimatePresence>
              {hoveredIdx === idx && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: -45 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-1/2 -translate-x-1/2 bg-surface border border-white/10 px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap"
                >
                  {item.name}
                </motion.span>
              )}
            </AnimatePresence>
          </a>
        ))}
      </motion.div>
    </nav>
  );
};

export default DockNavbar;

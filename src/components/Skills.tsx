import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  level: number; // 0-100
  color: string;
}

interface SkillCategory {
  label: string;
  icon: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    icon: '⌨️',
    skills: [
      { name: 'Python', level: 88, color: '#3b82f6' },
      { name: 'JavaScript', level: 78, color: '#f59e0b' },
      { name: 'TypeScript', level: 72, color: '#06b6d4' },
      { name: 'HTML / CSS', level: 85, color: '#f97316' },
      { name: 'SQL', level: 75, color: '#8b5cf6' },
    ],
  },
  {
    label: 'Frameworks',
    icon: '🧩',
    skills: [
      { name: 'Django', level: 85, color: '#22c55e' },
      { name: 'FastAPI', level: 75, color: '#06b6d4' },
      { name: 'Flask', level: 70, color: '#94a3b8' },
      { name: 'React', level: 80, color: '#38bdf8' },
      { name: 'Node.js', level: 60, color: '#84cc16' },
    ],
  },
  {
    label: 'Databases & Cloud',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', level: 78, color: '#60a5fa' },
      { name: 'MySQL', level: 72, color: '#f59e0b' },
      { name: 'MongoDB', level: 65, color: '#22c55e' },
      { name: 'Supabase', level: 80, color: '#3ecf8e' },
      { name: 'REST APIs', level: 85, color: '#a855f7' },
    ],
  },
  {
    label: 'Tools & Others',
    icon: '🔧',
    skills: [
      { name: 'Git & GitHub', level: 82, color: '#f97316' },
      { name: 'Docker', level: 55, color: '#38bdf8' },
      { name: 'Vite', level: 75, color: '#a855f7' },
      { name: 'Web Scraping', level: 70, color: '#84cc16' },
      { name: 'Linux / CLI', level: 65, color: '#94a3b8' },
    ],
  },
];

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.fromTo('.skills__header > *',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.skills__header', start: 'top 85%' } }
      );

      // Animate category cards
      gsap.fromTo('.skills__category',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.skills__grid', start: 'top 80%' } }
      );

      // Animate skill bars
      ScrollTrigger.create({
        trigger: '.skills__grid',
        start: 'top 80%',
        onEnter: () => {
          document.querySelectorAll('.skills__bar-fill').forEach((bar) => {
            const el = bar as HTMLElement;
            const target = el.dataset.level || '0';
            gsap.fromTo(el,
              { width: '0%' },
              { width: target + '%', duration: 1.2, ease: 'power3.out', delay: 0.3 }
            );
          });
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className="glow-orb skills__orb-1" />
      <div className="glow-orb skills__orb-2" />
      <div className="grid-lines" />

      <div className="container">
        <div className="skills__header">
          <span className="section-tag">My Toolkit</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="skills__subtitle">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat) => (
            <div key={cat.label} className="glass-card skills__category">
              <div className="skills__cat-header">
                <span className="skills__cat-icon">{cat.icon}</span>
                <span className="skills__cat-label">{cat.label}</span>
              </div>

              <div className="skills__list">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skills__item">
                    <div className="skills__item-top">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-pct">{skill.level}%</span>
                    </div>
                    <div className="skills__bar">
                      <div
                        className="skills__bar-fill"
                        data-level={skill.level}
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                          width: '0%',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

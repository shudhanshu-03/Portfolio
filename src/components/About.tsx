import React, { useEffect, useRef } from 'react';
import { GraduationCap, MapPin, Briefcase, Code2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '2+', label: 'Projects Built', icon: <Code2 size={20} /> },
  { value: 'B.Tech', label: 'Degree', icon: <GraduationCap size={20} /> },
  { value: 'LPU', label: 'University', icon: <MapPin size={20} /> },
  { value: 'Open', label: 'To Work', icon: <Briefcase size={20} /> },
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about__tag, .about__title, .about__bio, .about__edu-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, stagger: 0.1, duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.about__left', start: 'top 80%' }
        }
      );
      gsap.fromTo('.about__stat',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, stagger: 0.1, duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.about__stats', start: 'top 80%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="grid-lines" />
      <div className="glow-orb about__orb" />
      <div className="container">
        <div className="about__grid">
          {/* Left — Text content */}
          <div className="about__left">
            <span className="section-tag about__tag">Who I Am</span>
            <h2 className="section-title about__title">
              Crafting Digital <span className="gradient-text">Experiences</span>
            </h2>

            <p className="about__bio">
              I'm <strong>Shudhanshu Prajapati</strong>, a Python Full Stack Developer and a fresh graduate
              passionate about building robust, scalable, and beautiful digital products.
              I love working across the entire stack — from engineering powerful Python backends
              to crafting polished React frontends.
            </p>
            <p className="about__bio">
              Whether it's designing a database schema, building REST APIs, or bringing
              a pixel-perfect UI to life, I'm all in. Currently looking for my first
              role where I can grow fast and ship great products.
            </p>

            {/* Education card */}
            <div className="glass-card about__edu-card">
              <div className="about__edu-icon">
                <GraduationCap size={22} />
              </div>
              <div className="about__edu-info">
                <span className="about__edu-degree">Bachelor of Technology (B.Tech)</span>
                <span className="about__edu-uni">Lovely Professional University &nbsp;·&nbsp; Fresher</span>
              </div>
            </div>
          </div>

          {/* Right — Stats grid */}
          <div className="about__right">
            <div className="about__stats">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card about__stat">
                  <div className="about__stat-icon">{stat.icon}</div>
                  <div className="about__stat-value">{stat.value}</div>
                  <div className="about__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Decorative element */}
            <div className="about__deco">
              <div className="about__deco-ring" />
              <div className="about__deco-ring about__deco-ring--2" />
              <div className="about__deco-ring about__deco-ring--3" />
              <span className="about__deco-text">SP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

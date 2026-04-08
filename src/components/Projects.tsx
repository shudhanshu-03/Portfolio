import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  color: string;
  gradient: string;
  emoji: string;
  github: string;
  live: string;
  status: 'live' | 'wip' | 'placeholder';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Pretty Gal',
    subtitle: 'Luxury E-Commerce Platform',
    description:
      'A high-end fashion e-commerce platform featuring a curated boutique experience, advanced product filtering, user authentication, shopping cart, and seamless checkout — built with a full-stack architecture.',
    tags: ['Django', 'React', 'Supabase', 'TypeScript', 'PostgreSQL','TailwindCSS'],
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b22, #ef444422)',
    emoji: '👗',
    github: 'https://github.com/shudhanshu-03',
    live: '#',
    status: 'placeholder',
  },
  {
    id: 2,
    title: 'Gaming Hub',
    subtitle: 'Game Discovery Platform',
    description:
      'An immersive gaming discovery platform powered by the Steam API, featuring real-time game stats, user favorites, genre filtering, and a sleek dark-mode interface designed for gamers.',
    tags: ['React', 'TypeScript', 'Steam API', 'Supabase', 'GSAP', 'Three.js'],
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d422, #7c3aed22)',
    emoji: '🎮',
    github: 'https://github.com/shudhanshu-03',
    live: '#',
    status: 'placeholder',
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={cardRef}
      className="projects__card glass-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: tilt.x === 0 ? 'transform 0.6s ease' : 'none',
      }}
    >
      {/* Top gradient bar */}
      <div className="projects__card-bar" style={{ background: project.gradient }} />

      {/* Card inner */}
      <div className="projects__card-inner">
        {/* Header */}
        <div className="projects__card-header">
          <div className="projects__emoji" style={{ background: project.gradient }}>
            {project.emoji}
          </div>
          {project.status === 'placeholder' && (
            <span className="projects__status-badge">Live links coming soon</span>
          )}
        </div>

        <h3 className="projects__card-title">{project.title}</h3>
        <span className="projects__card-subtitle">{project.subtitle}</span>

        <p className="projects__card-desc">{project.description}</p>

        {/* Tags */}
        <div className="projects__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="projects__tag" style={{ borderColor: project.color + '44', color: project.color }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="projects__actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="projects__action-btn"
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
          <a
            href={project.live}
            className={`projects__action-btn projects__action-btn--primary ${project.status === 'placeholder' ? 'disabled' : ''}`}
            style={{ borderColor: project.color, color: project.color }}
            onClick={project.status === 'placeholder' ? (e) => e.preventDefault() : undefined}
          >
            <ExternalLink size={16} />
            {project.status === 'placeholder' ? 'Coming Soon' : 'Live Demo'}
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.projects__header > *',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.projects__header', start: 'top 85%' } }
      );
      gsap.fromTo('.projects__card',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.projects__grid', start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="section projects" ref={sectionRef}>
      <div className="grid-lines" />
      <div className="glow-orb projects__orb" />

      <div className="container">
        <div className="projects__header">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="projects__subtitle">
            A selection of projects I've built — more on the way.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* More projects CTA */}
        <div className="projects__more">
          <a
            href="https://github.com/shudhanshu-03"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline projects__more-btn"
          >
            <GitHubIcon size={18} />
            See All on GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

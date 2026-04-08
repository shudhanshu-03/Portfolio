import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ExternalLink } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import HeroCanvas from '../canvas/HeroCanvas';
import './Hero.css';

const roles = [
  'Python Full Stack Developer',
  'Django & React Builder',
  'Backend Architect',
  'Creative Problem Solver',
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];

    if (!isDeleting && charIndex < current.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 65);
    } else if (!isDeleting && charIndex === current.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 35);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      {/* 3D Canvas Background */}
      <div className="hero__canvas">
        <HeroCanvas />
      </div>

      {/* Gradient overlays */}
      <div className="hero__overlay" />
      <div className="hero__bottom-fade" />

      {/* Grid lines */}
      <div className="grid-lines" />

      {/* Glow orbs */}
      <div className="glow-orb hero__orb-1" />
      <div className="glow-orb hero__orb-2" />

      {/* Content */}
      <div className="hero__content container">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Available for opportunities
        </div>

        <h1 className="hero__name">
          Hi, I'm{' '}
          <span className="hero__name-highlight">
            Shudhanshu
            <br />
            Prajapati
          </span>
        </h1>

        <div className="hero__role">
          <span className="hero__role-prefix">I build </span>
          <span className="hero__typewriter">
            {displayed}
            <span className="hero__cursor">|</span>
          </span>
        </div>

        <p className="hero__desc">
          A passionate fresher turning ideas into immersive digital experiences.
          Specializing in Python backends, React frontends, and everything in between.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View My Work
            <ExternalLink size={16} />
          </a>
          <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Get In Touch
          </a>
        </div>

        <div className="hero__socials">
          <a href="https://github.com/shudhanshu-03" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
            <GitHubIcon size={20} />
          </a>
          <a href="https://www.linkedin.com/in/shudhanshu-prajapati1902/" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
            <LinkedInIcon size={20} />
          </a>
        </div>

        {/* Scroll indicator */}
        <button className="hero__scroll" onClick={scrollToNext} aria-label="Scroll down">
          <div className="hero__scroll-line" />
          <ArrowDown size={16} />
        </button>
      </div>
    </section>
  );
};

export default Hero;

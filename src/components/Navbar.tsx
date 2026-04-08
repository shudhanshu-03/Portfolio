import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';


const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#hero" className="navbar__logo" onClick={() => handleLinkClick('#hero')}>
          <span className="navbar__logo-badge">SP</span>
          <span className="navbar__logo-text">Shudhanshu</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`navbar__link ${activeSection === link.href ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:shudhanshu@example.com"
          className="btn btn-primary navbar__cta"
        >
          Hire Me
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="navbar__mobile-link"
            onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
          >
            {link.label}
          </a>
        ))}
        <a href="mailto:shudhanshu@example.com" className="btn btn-primary" style={{ marginTop: '12px', justifyContent: 'center' }}>
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

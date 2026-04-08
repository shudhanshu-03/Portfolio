import React, { useEffect, useRef, useState } from 'react';
import { Mail, Send, MapPin } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactOrb from '../canvas/ContactOrb';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'shudhanshu@email.com',
    href: 'mailto:shudhanshu@email.com',
    color: '#f59e0b',
  },
  {
    icon: <GitHubIcon size={20} />,
    label: 'GitHub',
    value: 'github.com/shudhanshu-03',
    href: 'https://github.com/shudhanshu-03',
    color: '#a855f7',
  },
  {
    icon: <LinkedInIcon size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shudhanshu-prajapati1902',
    href: 'https://www.linkedin.com/in/shudhanshu-prajapati1902/',
    color: '#06b6d4',
  },
];

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact__left > *',
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact__grid', start: 'top 80%' } }
      );
      gsap.fromTo('.contact__right',
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact__grid', start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:shudhanshu@email.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <div className="grid-lines" />
      <div className="glow-orb contact__orb-1" />
      <div className="glow-orb contact__orb-2" />

      <div className="container">
        <div className="contact__header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="contact__subtitle">
            I'm currently open to new opportunities. Whether you have a project in mind,
            a job offer, or just want to say hi — my inbox is always open.
          </p>
        </div>

        <div className="contact__grid">
          {/* Left — contact info + 3D orb */}
          <div className="contact__left">
            {/* 3D Orb */}
            <div className="contact__orb-canvas">
              <ContactOrb />
            </div>

            <div className="contact__location">
              <MapPin size={16} />
              <span>India &nbsp;·&nbsp; Open to Remote</span>
            </div>

            <div className="contact__links">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact__link glass-card"
                >
                  <div className="contact__link-icon" style={{ background: link.color + '22', color: link.color }}>
                    {link.icon}
                  </div>
                  <div className="contact__link-info">
                    <span className="contact__link-label">{link.label}</span>
                    <span className="contact__link-value">{link.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact__right">
            <div className="glass-card contact__form-card">
              <h3 className="contact__form-title">Send a Message</h3>

              <form onSubmit={handleSubmit} className="contact__form">
                <div className="contact__field">
                  <label htmlFor="name" className="contact__label">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="contact__input"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="email" className="contact__label">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="contact__input"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="message" className="contact__label">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="contact__input contact__textarea"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary contact__submit">
                  {sent ? '✓ Opening mail client...' : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

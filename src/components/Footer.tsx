import React from 'react';
import { Heart } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__divider" />
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__logo-badge">SP</span>
          <span className="footer__copy">
            © {new Date().getFullYear()} Shudhanshu Prajapati. Built with{' '}
            <Heart size={12} className="footer__heart" /> and lots of ☕
          </span>
        </div>

        <div className="footer__socials">
          <a href="https://github.com/shudhanshu-03" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="GitHub">
            <GitHubIcon size={18} />
          </a>
          <a href="https://www.linkedin.com/in/shudhanshu-prajapati1902/" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="LinkedIn">
            <LinkedInIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

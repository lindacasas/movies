import React from 'react';

import githubIcon from '../assets/github.svg';
import instagramIcon from '../assets/instagram.svg';
import tiktokIcon from '../assets/tiktok.svg';
import linkedinIcon from '../assets/linkedin.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/lindacasas" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/mely_houses/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.tiktok.com/@mely.houses" target="_blank" rel="noopener noreferrer">
          <img src={tiktokIcon} alt="TikTok" />
        </a>
        <a href="https://www.linkedin.com/in/linda-casas-092018270/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

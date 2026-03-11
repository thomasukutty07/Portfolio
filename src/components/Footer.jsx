import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-inner">
          <div>
            <p className="footer-copy">
              © {year} <span>Thomasukutty Reji</span> · Built with React + Three.js + GSAP
            </p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/thomasukutty07" target="_blank" rel="noopener noreferrer" className="f-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/thomasukutty-reji-431b9027b/" target="_blank" rel="noopener noreferrer" className="f-link">
              LinkedIn
            </a>
            <a href="mailto:thomasmern007@gmail.com" className="f-link">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
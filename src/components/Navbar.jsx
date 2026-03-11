import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Navbar({ sections, activeSection, scrollToSection }) {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out', delay: 0.3 }
      );
    }
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav ref={navRef} className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a className="nav-logo" href="#home"
          onClick={e => { e.preventDefault(); scrollToSection('home'); }}
        >
          &lt;<span>TR</span>/&gt;
        </a>

        <ul className="nav-links">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://www.linkedin.com/in/thomasukutty-reji-431b9027b/"
              target="_blank" rel="noopener noreferrer"
              className="nav-hire"
            >
              Hire Me ↗
            </a>
          </li>
        </ul>

        <button
          className="mob-btn"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen
            ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          }
        </button>
      </nav>

      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, top: 0,
          background: 'rgba(5,5,5,0.97)', backdropFilter: 'blur(20px)',
          zIndex: 999, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '3rem',
          borderTop: '1px solid var(--border)',
        }}>
          <button
            onClick={() => setMobileOpen(false)}
            style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: '1px solid var(--border2)', padding: '0.4rem 0.6rem', cursor: 'pointer', color: 'var(--white)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          {sections.map(({ id, label }) => (
            <button key={id}
              onClick={() => { scrollToSection(id); setMobileOpen(false); }}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--display)', fontSize: 'clamp(2.5rem,8vw,4rem)',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: activeSection === id ? 'var(--lime)' : 'var(--white-60)',
                transition: 'color 0.2s',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
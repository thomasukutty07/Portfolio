import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { gsap }          from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

// Lazy-load the heavy Three.js canvas — text/UI renders immediately on first paint
const LazyHeroCanvas = lazy(() => import('./HeroCanvas'));

const ROLES = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'React Craftsman',
  '3D Web Developer',
  'UI/UX Architect',
];

const NAME_LETTERS = 'THOMASUKUTTY'.split('');

export default function HeroSection({ scrollToSection }) {
  const [roleIdx, setRoleIdx]     = useState(0);
  const [text,    setText]        = useState('');
  const [typing,  setTyping]      = useState(true);
  const [canvas3dReady, set3dReady] = useState(false);

  const sectionRef  = useRef(null);
  const headRef     = useRef(null);
  const lettersRef  = useRef(null);   // container for THOMASUKUTTY letters
  const metaRef     = useRef(null);
  const canvasRef   = useRef(null);

  /* Typewriter */
  useEffect(() => {
    const role = ROLES[roleIdx];
    let t;
    if (typing) {
      if (text.length < role.length) t = setTimeout(() => setText(role.slice(0, text.length + 1)), 54);
      else t = setTimeout(() => setTyping(false), 2800);
    } else {
      if (text.length > 0) t = setTimeout(() => setText(text.slice(0, -1)), 22);
      else { setRoleIdx(i => (i + 1) % ROLES.length); setTyping(true); }
    }
    return () => clearTimeout(t);
  }, [text, typing, roleIdx]);

  /* Mount 3D canvas after first paint — keeps TBT low */
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => set3dReady(true));
    });
    return () => cancelAnimationFrame(id);
  }, []);

  /* GSAP entrance + scroll-driven letter fall */
  useEffect(() => {
    if (!headRef.current || !lettersRef.current) return;

    const lines   = Array.from(headRef.current.querySelectorAll('.h-line'));
    const letters = Array.from(lettersRef.current.querySelectorAll('.hero-letter'));

    /* ── Entrance animation ── */
    gsap.set(letters, { y: 0, opacity: 1 });
    gsap.set(lines,   { y: '110%', opacity: 0 });
    gsap.set(metaRef.current,   { opacity: 0, y: 30 });
    gsap.set(canvasRef.current, { opacity: 0, scale: 0.6 });

    gsap.timeline({ delay: 0.35 })
      .to(lines,  { y: '0%', opacity: 1, duration: 1.1, ease: 'power4.out', stagger: 0.08 })
      .to(metaRef.current,  { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.5')
      .to(canvasRef.current,{ opacity: 1, scale: 1, duration: 1.6, ease: 'power4.out' }, 0.2);

    /* ── Canvas parallax ── */
    gsap.to(canvasRef.current, {
      y: 120,
      scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 2 },
    });

    /* ── RAINDROP FALL ─────────────────────────────────────────────
       Single timeline driven by one ScrollTrigger.
       Starts when hero bottom is near the top (just finished scrolling past hero).
       Short end window = fast, snappy fall clearly visible.
       scrub: 1 makes it fully reversible on scroll-up.
    ──────────────────────────────────────────────────────────────── */
    const fallTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'bottom 95%',   // fires right as hero bottom approaches viewport top
        end:   'bottom 20%',   // completes fast — snappy raindrop feel
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    fallTl.to(letters, {
      y: 500,                  // 500px straight down — shoots below the hero clearly
      opacity: 0,
      ease: 'power3.in',       // gravity: slow at top, fast at bottom
      stagger: 0.05,           // each letter starts 5% later — cascade / rain effect
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);


  const socials = [
    { href: 'https://github.com/thomasukutty07',                        icon: FaGithub,   label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/thomasukutty-reji-431b9027b/', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'mailto:thomasmern007@gmail.com',                           icon: FaEnvelope, label: 'Email' },
  ];

  return (
    <section id="home" ref={sectionRef} className="hero">
      {/* WebGL canvas — lazy-loaded after first paint */}
      <div ref={canvasRef} className="hero-canvas" style={{ opacity: canvas3dReady ? 1 : 0, transition: 'opacity 0.8s' }}>
        {canvas3dReady && (
          <Suspense fallback={null}>
            <LazyHeroCanvas />
          </Suspense>
        )}
      </div>

      {/* Grid lines overlay */}
      <div className="hero-grid-overlay" />

      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.72) 100%)',
      }} />

      {/* Content */}
      <div className="hero-content">
        {/* Eyebrow */}
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          Available for work · Based in India
        </div>

        {/* Headline */}
        <div ref={headRef}>

          {/* ── THOMASUKUTTY — individual falling letters ── */}
          <div
            ref={lettersRef}
            style={{
              overflow: 'visible',          /* allow letters to fall outside clip */
              display: 'flex',
              flexWrap: 'nowrap',
              alignItems: 'baseline',
              gap: 0,
              lineHeight: 0.92,
            }}
          >
            {NAME_LETTERS.map((letter, i) => (
              <span
                key={i}
                className="hero-letter"
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--display)',
                  fontSize: 'clamp(2.8rem, 7.5vw, 9.5rem)',
                  letterSpacing: '-0.01em',
                  color: 'var(--white)',
                  transformOrigin: 'center bottom',
                  willChange: 'transform, opacity',
                  /* Space between letters preserved */
                  marginRight: letter === ' ' ? '0.25em' : '0',
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* REJI subtitle — slides in from entrance, NOT part of fall */}
          <div style={{ overflow: 'hidden', marginTop: '0.1em' }}>
            <div
              className="h-line"
              style={{
                fontFamily: 'var(--display)',
                fontSize: 'clamp(1.2rem, 3vw, 3.8rem)',
                lineHeight: 1,
                letterSpacing: '0.35em',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(240,240,238,0.35)',
                textTransform: 'uppercase',
              }}
            >
              REJI
            </div>
          </div>

          {/* Typewriter role */}
          <div style={{
            fontFamily: 'var(--mono)', fontSize: 'clamp(0.72rem, 1.4vw, 0.88rem)',
            color: 'var(--lime)', letterSpacing: '0.18em', textTransform: 'uppercase',
            marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem',
          }}>
            <span style={{ color: 'var(--white-40)' }}>→</span>
            {text}
            <span style={{ display: 'inline-block', width: 2, height: '1em', background: 'var(--lime)', verticalAlign: 'text-bottom', animation: 'blink 1s ease infinite' }} />
          </div>
        </div>

        {/* Meta row */}
        <div ref={metaRef} className="hero-meta">
          <p className="hero-desc">
            I craft full-stack digital experiences — scalable MERN applications, immersive 3D interfaces, and motion-rich UIs that ship fast and perform at scale.
          </p>
          <div className="hero-ctas">
            <button className="btn-lime" onClick={() => scrollToSection('projects')}>
              View Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button className="btn-ghost" onClick={() => scrollToSection('contact')}>
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Social strip */}
      <div className="hero-socials">
        {socials.map(({ href, icon: Icon, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="hero-social-link">
            <Icon /> {label}
          </a>
        ))}
        <div style={{ height: 1, flex: 1, background: 'var(--border)', marginLeft: 'auto' }} />
        {/* Mini stats */}
        {[['7+','Projects'], ['2+','Years'], ['15+','Tech']].map(([n, l]) => (
          <div key={l} style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
            <span style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', color: 'var(--lime)', lineHeight: 1 }}>{n}</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.56rem', color: 'var(--white-40)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{l}</span>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint" onClick={() => scrollToSection('about')}>
        <div className="hero-scroll-line" />
        <span className="hero-scroll-label">Scroll</span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-content { padding-bottom: 6rem; }
        }
      `}</style>
    </section>
  );
}
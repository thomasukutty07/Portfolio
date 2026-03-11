import React, { useEffect, useRef } from 'react';
import { gsap }          from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────── HORIZONTAL PROJECT CARD ─────────────────── */
const ProjectCard = ({ project, index, accentColor }) => {
  const cardRef = useRef();

  const onEnter = () => {
    gsap.to(cardRef.current.querySelector('.pc-img'), { scale: 1.06, duration: 0.55, ease: 'power2.out' });
    gsap.to(cardRef.current.querySelector('.pc-arrow'), { rotate: 0, opacity: 1, duration: 0.3 });
  };
  const onLeave = () => {
    gsap.to(cardRef.current.querySelector('.pc-img'), { scale: 1, duration: 0.55, ease: 'power2.out' });
    gsap.to(cardRef.current.querySelector('.pc-arrow'), { rotate: -45, opacity: 0.4, duration: 0.3 });
  };

  return (
    <a
      ref={cardRef}
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        width: 'clamp(320px, 38vw, 520px)',
        flexShrink: 0,
        background: 'linear-gradient(145deg, #181816 0%, #111110 100%)',
        border: '1px solid rgba(240,240,236,0.1)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        position: 'relative',
        overflow: 'hidden',
        textDecoration: 'none',
      }}
    >
      {/* Image */}
      <div style={{ overflow: 'hidden', height: '240px', position: 'relative', flexShrink: 0 }}>
        <img
          className="pc-img"
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transformOrigin: 'center', transition: 'transform 0.55s' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.75) 100%)', pointerEvents: 'none' }} />

        {/* Index badge */}
        <div style={{
          position: 'absolute', top: '1rem', left: '1.1rem',
          fontFamily: 'var(--display)', fontSize: '4rem', color: 'rgba(255,255,255,0.06)',
          lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
        }}>
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Live badge */}
        <div style={{
          position: 'absolute', top: '1rem', right: '1rem',
          padding: '0.2rem 0.65rem', fontFamily: 'var(--mono)', fontSize: '0.48rem',
          border: `1px solid ${accentColor}55`, color: accentColor,
          background: 'rgba(12,12,10,0.85)', backdropFilter: 'blur(8px)',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: '0.4rem',
        }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: accentColor, boxShadow: `0 0 6px ${accentColor}` }} />
          LIVE
        </div>

        {/* Arrow */}
        <div
          className="pc-arrow"
          style={{
            position: 'absolute', bottom: '1rem', right: '1rem',
            width: 36, height: 36,
            border: `1px solid ${accentColor}55`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: accentColor, fontSize: '0.75rem',
            transform: 'rotate(-45deg)', opacity: 0.4,
            backdropFilter: 'blur(6px)', background: 'rgba(12,12,10,0.75)',
          }}
        >
          ↗
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
        {/* Category */}
        <div style={{ fontFamily: 'var(--mono)', fontSize: '0.52rem', color: accentColor, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          {
            ['HooBank', 'Baytebar', 'Edusity'].some(t => project.title.includes(t)) ? 'Static Website' :
            project.title.includes('Cineflix') ? 'API Integrated' :
            'Full Stack Project'
          }
        </div>

        {/* Title */}
        <h3 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', color: 'var(--white)', letterSpacing: '0.04em', lineHeight: 1.05 }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: '0.82rem', color: 'var(--white-40)', lineHeight: 1.75,
          display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto' }}>
          {project.technologies.slice(0, 4).map(t => (
            <span key={t} style={{
              fontFamily: 'var(--mono)', fontSize: '0.5rem', padding: '0.14rem 0.55rem',
              border: '1px solid var(--border2)', color: 'var(--white-40)', letterSpacing: '0.06em',
            }}>{t}</span>
          ))}
          {project.technologies.length > 4 && (
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.5rem', padding: '0.14rem 0.55rem', border: '1px solid var(--border)', color: 'var(--white-20)', letterSpacing: '0.06em' }}>
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.65rem', marginTop: '0.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
          <span
            className="btn-lime"
            style={{ padding: '0.55rem 1.1rem', fontSize: '0.65rem', flex: 1, justifyContent: 'center', clipPath: 'none' }}
          >
            <FaExternalLinkAlt style={{ fontSize: '0.6rem' }} /> Visit
          </span>
          <a
            href={project.githubLink} target="_blank" rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="btn-ghost"
            style={{ textDecoration: 'none', padding: '0.55rem 1.1rem', fontSize: '0.65rem', flex: 1, justifyContent: 'center' }}
          >
            <FaGithub /> Code
          </a>
        </div>
      </div>
    </a>
  );
};

/* ─────────────────── MAIN SECTION ─────────────────── */
export default function ProjectsSection({ projects }) {
  const outerRef  = useRef(null);
  const stickyRef = useRef(null);
  const railRef   = useRef(null);
  const headerRef = useRef(null);

  const ACCENTS = ['#A3FF47', '#FF4D6D', '#4DFFEA', '#F59E0B', '#A78BFA', '#EC4899', '#38BDF8'];

  useEffect(() => {
    if (!outerRef.current || !railRef.current) return;

    // Wait a frame for layout to settle
    const id = requestAnimationFrame(() => {
      const railWidth   = railRef.current.scrollWidth;
      const viewWidth   = stickyRef.current.offsetWidth;
      const totalScroll = railWidth - viewWidth;

      // Horizontal scrub scrollTrigger
      const hx = gsap.to(railRef.current, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: outerRef.current,
          start: 'top top',
          // Scroll distance = how far the rail needs to travel + viewport height
          end: () => `+=${totalScroll + viewWidth * 0.3}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Header fade-in
      if (headerRef.current) {
        gsap.fromTo(headerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: outerRef.current, start: 'top 85%', once: true },
          }
        );
      }

      return () => { hx.scrollTrigger?.kill(); hx.kill(); };
    });

    return () => cancelAnimationFrame(id);
  }, [projects]);

  return (
    <section id="projects">
      {/* ── Pinned horizontal scroll container ── */}
      <div ref={outerRef} style={{ background: 'var(--black2)' }}>
        <div
          ref={stickyRef}
          style={{
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Bg watermark number */}
          <div style={{
            position: 'absolute', top: '50%', right: '3rem',
            transform: 'translateY(-50%)',
            fontFamily: 'var(--display)',
            fontSize: 'clamp(8rem, 22vw, 20rem)',
            color: 'rgba(163,255,71,0.03)',
            lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
            letterSpacing: '-0.02em',
          }}>02</div>

          {/* Header strip */}
          <div ref={headerRef} style={{
            padding: '0 clamp(1.5rem, 5vw, 5rem)',
            marginBottom: '2.5rem',
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '1rem',
          }}>
            <div>
              <div className="sec-label" style={{ marginBottom: '0.9rem' }}>Portfolio</div>
              <h2 style={{
                fontFamily: 'var(--display)',
                fontSize: 'clamp(2.4rem, 5vw, 5rem)',
                lineHeight: 0.95, letterSpacing: '0.02em', color: 'var(--white)',
              }}>
                SELECTED <span style={{ color: 'var(--lime)' }}>WORK</span>
              </h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              {/* Scroll hint */}
              <div style={{
                fontFamily: 'var(--mono)', fontSize: '0.54rem',
                color: 'var(--white-40)', letterSpacing: '0.18em',
                textTransform: 'uppercase',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                  <path d="M0 6h16M11 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Scroll to explore
              </div>
              <a href="https://github.com/thomasukutty07" target="_blank" rel="noopener noreferrer"
                className="btn-ghost" style={{ textDecoration: 'none', fontSize: '0.65rem', padding: '0.55rem 1.1rem' }}>
                <FaGithub /> All Projects
              </a>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
            background: 'var(--border)',
          }}>
            <div
              id="proj-progress"
              style={{ height: '100%', background: 'var(--lime)', width: 0, transition: 'none', boxShadow: '0 0 10px rgba(163,255,71,0.7)' }}
            />
          </div>

          {/* ── Horizontal rail ── */}
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <div
              ref={railRef}
              style={{
                display: 'flex',
                gap: '1.5rem',
                paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
                paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
                willChange: 'transform',
              }}
            >
              {projects.map((p, i) => (
                <ProjectCard
                  key={i}
                  project={p}
                  index={i}
                  accentColor={ACCENTS[i % ACCENTS.length]}
                />
              ))}

              {/* End card — CTA */}
              <div style={{
                width: 'clamp(240px, 28vw, 340px)',
                flexShrink: 0,
                border: '1px solid var(--border)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: '1.5rem', padding: '2.5rem',
                background: 'var(--lime-03)',
              }}>
                <div style={{ fontFamily: 'var(--display)', fontSize: '3rem', color: 'var(--lime)', lineHeight: 1, letterSpacing: '0.04em', textAlign: 'center' }}>
                  MORE ON<br/>GITHUB
                </div>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'var(--white-40)', letterSpacing: '0.1em', textAlign: 'center', lineHeight: 1.7 }}>
                  {projects.length} projects and counting
                </p>
                <a
                  href="https://github.com/thomasukutty07"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-lime"
                  style={{ textDecoration: 'none', fontSize: '0.68rem' }}
                >
                  <FaGithub /> View Profile ↗
                </a>
              </div>
            </div>
          </div>

          {/* Card counter */}
          <div style={{
            position: 'absolute', bottom: '1.8rem', right: '2.5rem',
            fontFamily: 'var(--mono)', fontSize: '0.55rem',
            color: 'var(--white-20)', letterSpacing: '0.14em',
          }}>
            {projects.length} PROJECTS
          </div>
        </div>
      </div>
    </section>
  );
}
import React, { useEffect, useRef, useMemo, useState } from 'react';
import { gsap }          from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  FaReact, FaNodeJs, FaHtml5, FaDatabase, FaGitAlt,
} from 'react-icons/fa';
import {
  SiJavascript, SiTailwindcss, SiMongodb, SiExpress,
  SiRedux, SiGithub, SiPostman, SiOpenai, SiCss3,
} from 'react-icons/si';
import { VscCode }   from 'react-icons/vsc';

gsap.registerPlugin(ScrollTrigger);

/* ─── Floating lattice ─── */
const Lattice = () => {
  const groupRef = useRef();
  const COUNT = 60;

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const col = new Float32Array(COUNT * 3);
    const lime  = new THREE.Color('#A3FF47');
    const white = new THREE.Color('#F0F0EE');
    for (let i = 0; i < COUNT; i++) {
      pos[i*3]   = (Math.random() - 0.5) * 10;
      pos[i*3+1] = (Math.random() - 0.5) * 10;
      pos[i*3+2] = (Math.random() - 0.5) *  4;
      const c = Math.random() < 0.4 ? lime : white;
      col[i*3] = c.r; col[i*3+1] = c.g; col[i*3+2] = c.b;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.04;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.05;
    }
  });

  return (
    <points ref={groupRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={COUNT} />
        <bufferAttribute attach="attributes-color"    args={[colors, 3]}    count={COUNT} />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.8} sizeAttenuation depthWrite={false} />
    </points>
  );
};

const SkillsCanvas = () => (
  <Canvas
    camera={{ position: [0, 0, 8], fov: 60 }}
    gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
    dpr={Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 1.5)}
    style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, pointerEvents: 'none' }}
  >
    <Lattice />
  </Canvas>
);

export default function SkillsSection({ allSkills }) {
  const sectionRef = useRef(null);
  const headRef    = useRef(null);
  const gridRef    = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const triggers = [];

    /* ── Headline: split into chars, clip-path reveal ── */
    if (headRef.current) {
      const title = headRef.current.querySelector('.skills-title');
      if (title) {
        const text  = title.textContent;
        title.innerHTML = text.split('').map(ch =>
          `<span class="s-char" style="display:inline-block;overflow:hidden"><span class="s-char-inner" style="display:inline-block">${ch === ' ' ? '&nbsp;' : ch}</span></span>`
        ).join('');
        const inners = title.querySelectorAll('.s-char-inner');
        gsap.set(inners, { y: '110%' });
        triggers.push(ScrollTrigger.create({
          trigger: headRef.current, start: 'top 85%', once: true,
          onEnter: () => gsap.to(inners, { y: '0%', duration: 0.9, ease: 'power4.out', stagger: 0.028 }),
        }));
      }

      /* Sub-label fade */
      const sub = headRef.current.querySelector('.skills-sub');
      if (sub) {
        gsap.set(sub, { opacity: 0, y: 20 });
        triggers.push(ScrollTrigger.create({
          trigger: sub, start: 'top 88%', once: true,
          onEnter: () => gsap.to(sub, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 }),
        }));
      }
    }

    /* ── Category boxes: slide up with stagger ── */
    if (gridRef.current) {
      const boxes = gridRef.current.querySelectorAll('.sk-cat');
      gsap.set(boxes, { y: 60, opacity: 0 });
      triggers.push(ScrollTrigger.create({
        trigger: gridRef.current, start: 'top 85%', once: true,
        onEnter: () => gsap.to(boxes, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12 }),
      }));

      /* ── Skill pills burst in ── */
      const pills = gridRef.current.querySelectorAll('.sk-pill');
      gsap.set(pills, { scale: 0.7, opacity: 0 });
      triggers.push(ScrollTrigger.create({
        trigger: gridRef.current, start: 'top 80%', once: true,
        onEnter: () => gsap.to(pills, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.4)', stagger: 0.04 }),
      }));

      /* ── Proficiency bars sweep ── */
      triggers.push(ScrollTrigger.create({
        trigger: gridRef.current, start: 'top 75%', once: true,
        onEnter: () => gsap.to('.s-bar', { scaleX: 1, duration: 1.4, ease: 'power3.out', stagger: 0.1 }),
      }));
    }

    /* ── Canvas: mount on enter ── */
    triggers.push(ScrollTrigger.create({
      trigger: sectionRef.current, start: 'top 90%', once: true,
      onEnter: () => setInView(true),
    }));

    return () => triggers.forEach(t => t.kill());
  }, []);

  const cats = [
    {
      label: 'Frontend',
      items: ['React JS', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Redux', 'Framer Motion'],
    },
    {
      label: 'Backend',
      items: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs', 'JWT Auth'],
    },
    {
      label: 'Dev Tools',
      items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Ubuntu', 'Figma', 'ChatGPT'],
    },
  ];

  const bars = [
    { name: 'React / Next.js',   pct: 92 },
    { name: 'Node.js / Express', pct: 85 },
    { name: 'MongoDB',           pct: 82 },
    { name: 'Tailwind CSS',      pct: 90 },
    { name: 'Three.js / GSAP',   pct: 72 },
  ];

  /* Marquee items */
  const marqueeItems = [
    { icon: FaReact,      name: 'React',      color: '#38BDF8' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F59E0B' },
    { icon: FaNodeJs,     name: 'Node.js',    color: '#4ADE80' },
    { icon: SiMongodb,    name: 'MongoDB',    color: '#4ADE80' },
    { icon: SiTailwindcss,name: 'Tailwind',   color: '#06B6D4' },
    { icon: SiExpress,    name: 'Express',    color: '#A0A0A0' },
    { icon: SiRedux,      name: 'Redux',      color: '#A78BFA' },
    { icon: FaHtml5,      name: 'HTML5',      color: '#E34F26' },
    { icon: SiCss3,       name: 'CSS3',       color: '#1572B6' },
    { icon: FaGitAlt,     name: 'Git',        color: '#F97316' },
    { icon: VscCode,      name: 'VS Code',    color: '#38BDF8' },
    { icon: SiGithub,     name: 'GitHub',     color: '#A0A0A0' },
  ];


  return (
    <section id="skills" ref={sectionRef} className="skills">
      {/* Background canvas */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {inView && <SkillsCanvas />}
      </div>

      {/* Watermark */}
      <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(6rem, 18vw, 16rem)', color: 'rgba(163,255,71,0.025)', position: 'absolute', top: '5rem', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none', letterSpacing: '0.02em' }}>
        STACK
      </div>

      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div ref={headRef}>
          <div className="sec-label" style={{ marginBottom: '1.5rem' }}>Tech Stack</div>
          <h2
            className="skills-title"
            style={{ fontFamily: 'var(--display)', fontSize: 'clamp(3rem, 7vw, 6.5rem)', lineHeight: 0.95, letterSpacing: '0.02em', color: 'var(--white)', marginBottom: '1.5rem', display: 'block' }}
          >
            TOOLS I MASTER
          </h2>
          <p className="skills-sub" style={{ maxWidth: 440, color: 'var(--white-40)', lineHeight: 1.78, fontSize: '0.9rem', fontWeight: 300 }}>
            A curated stack that powers full-stack applications from concept to deployment — fast, scalable, and maintainable.
          </p>
        </div>
      </div>

      {/* ── Marquee ── */}
      <div className="skills-marquee-wrap">
        <div className="skills-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div className="skills-marquee-item" key={i}>
              <item.icon className="skills-marquee-icon" style={{ color: item.color }} />
              <span className="skills-marquee-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3-col grid: bars | categories | categories ── */}
      <div ref={gridRef} className="wrap" style={{ marginTop: '1px', position: 'relative', zIndex: 2, paddingBottom: '2rem' }}>
        <div className="skills-grid">
          {/* Proficiency bars */}
          <div className="skill-cat">
            <div className="skill-cat-label">Proficiency</div>
            {bars.map(({ name, pct }) => (
              <div className="skill-bar-row" key={name}>
                <div className="skill-bar-top">
                  <span className="skill-bar-name">{name}</span>
                  <span className="skill-bar-pct">{pct}%</span>
                </div>
                <div className="skill-bar-track">
                  <div className="skill-bar-fill s-bar" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Tech categories — sk-cat for stagger, sk-pill for burst */}
          {cats.slice(0, 2).map(({ label, items }) => (
            <div className="skill-cat sk-cat" key={label}>
              <div className="skill-cat-label">{label}</div>
              <div className="skill-pills">
                {items.map(s => <span key={s} className="skill-pill sk-pill">{s}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip: extra cat + statement */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1px', background: 'var(--border)', marginTop: '1px' }}>
          <div className="skill-cat sk-cat" style={{ borderTop: 'none' }}>
            <div className="skill-cat-label">{cats[2].label}</div>
            <div className="skill-pills">
              {cats[2].items.map(s => <span key={s} className="skill-pill sk-pill">{s}</span>)}
            </div>
          </div>
          <div className="skill-cat" style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: 'var(--white)', lineHeight: 1.05, letterSpacing: '0.02em' }}>
              ALWAYS LEARNING.{' '}
              <span style={{ color: 'var(--white-40)', fontFamily: 'var(--display)' }}>ALWAYS BUILDING.</span>{' '}
              <span style={{ color: 'var(--lime)' }}>ALWAYS IMPROVING.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
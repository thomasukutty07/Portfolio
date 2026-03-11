import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { gsap }          from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

/* ─── DNA Double-Helix ─── */
const STRAND_COUNT = 18;   // nodes per strand
const RADIUS       = 1.1;  // helix radius
const HEIGHT       = 3.8;  // total height
const LIME         = new THREE.Color('#A3FF47');
const CYAN         = new THREE.Color('#4DFFEA');
const WHITE        = new THREE.Color('#F0F0EC');

const DNAHelix = () => {
  const groupRef = useRef();

  /* Pre-build node positions for both strands */
  const { strandA, strandB, bars } = useMemo(() => {
    const a = [], b = [], bars = [];
    for (let i = 0; i < STRAND_COUNT; i++) {
      const t  = i / (STRAND_COUNT - 1);        // 0..1
      const y  = (t - 0.5) * HEIGHT;
      const θA = (i / STRAND_COUNT) * Math.PI * 4;  // 2 full turns
      const θB = θA + Math.PI;                       // opposite strand
      const pA = [Math.cos(θA) * RADIUS, y, Math.sin(θA) * RADIUS];
      const pB = [Math.cos(θB) * RADIUS, y, Math.sin(θB) * RADIUS];
      a.push(pA);
      b.push(pB);
      /* Cross-bar every 2 nodes */
      if (i % 2 === 0) bars.push({ a: pA, b: pB, t });
    }
    return { strandA: a, strandB: b, bars };
  }, []);

  /* Build line geometry for the two backbone strands */
  const strandAGeo = useMemo(() => {
    const pts = strandA.map(([x,y,z]) => new THREE.Vector3(x, y, z));
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, [strandA]);

  const strandBGeo = useMemo(() => {
    const pts = strandB.map(([x,y,z]) => new THREE.Vector3(x, y, z));
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, [strandB]);

  /* Slow rotation */
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.25;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.15) * 0.12;
    }
  });

  const nodeSphere = <sphereGeometry args={[0.08, 8, 8]} />;

  return (
    <group ref={groupRef}>
      {/* Strand A backbone */}
      <line geometry={strandAGeo}>
        <lineBasicMaterial color="#A3FF47" transparent opacity={0.5} />
      </line>

      {/* Strand B backbone */}
      <line geometry={strandBGeo}>
        <lineBasicMaterial color="#4DFFEA" transparent opacity={0.5} />
      </line>

      {/* Strand A nodes */}
      {strandA.map(([x, y, z], i) => (
        <mesh key={`a${i}`} position={[x, y, z]}>
          {nodeSphere}
          <meshStandardMaterial
            color="#A3FF47" emissive="#A3FF47" emissiveIntensity={0.9}
            roughness={0.1} metalness={0.8}
          />
        </mesh>
      ))}

      {/* Strand B nodes */}
      {strandB.map(([x, y, z], i) => (
        <mesh key={`b${i}`} position={[x, y, z]}>
          {nodeSphere}
          <meshStandardMaterial
            color="#4DFFEA" emissive="#4DFFEA" emissiveIntensity={0.9}
            roughness={0.1} metalness={0.8}
          />
        </mesh>
      ))}

      {/* Cross-bars (base pairs) */}
      {bars.map(({ a, b, t }, i) => {
        const mid   = [(a[0]+b[0])/2, (a[1]+b[1])/2, (a[2]+b[2])/2];
        const vec   = new THREE.Vector3(b[0]-a[0], b[1]-a[1], b[2]-a[2]);
        const len   = vec.length();
        const axis  = new THREE.Vector3(0, 1, 0);
        const quat  = new THREE.Quaternion().setFromUnitVectors(axis, vec.clone().normalize());
        const color = i % 2 === 0 ? '#A3FF47' : '#4DFFEA';
        return (
          <mesh key={`bar${i}`} position={mid} quaternion={quat}>
            <cylinderGeometry args={[0.022, 0.022, len, 6]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.75} />
          </mesh>
        );
      })}

      {/* Central axis glow */}
      <mesh>
        <cylinderGeometry args={[0.008, 0.008, HEIGHT, 6]} />
        <meshBasicMaterial color="#FFFFFF" transparent opacity={0.06} />
      </mesh>
    </group>
  );
};

/* Only mount canvas once visible — prevents 2nd WebGL ctx at page load */
const AboutCanvas = () => (
  <Canvas
    camera={{ position: [0, 0, 5.5], fov: 52 }}
    gl={{ antialias: true, alpha: true, powerPreference: 'low-power', stencil: false, depth: true }}
    dpr={Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 1.5)}
    style={{ width: '100%', height: '420px', display: 'block' }}
  >
    <ambientLight intensity={0.3} />
    <pointLight position={[4, 4, 4]}   intensity={6}   color="#A3FF47" />
    <pointLight position={[-4,-4, 3]}  intensity={4}   color="#4DFFEA" />
    <pointLight position={[0, 0, 6]}   intensity={1.5} color="#FFFFFF" />
    <DNAHelix />
  </Canvas>
);

const Terminal = () => {
  const lines = [
    { p: '$', cmd: 'whoami',           out: 'thomasukutty_reji'              },
    { p: '$', cmd: 'cat role.txt',     out: 'Full Stack · MERN · WebGL'     },
    { p: '$', cmd: 'echo $LOCATION',   out: 'India 🇮🇳 · Remote ✓'         },
    { p: '$', cmd: 'ls stack/',        out: 'react  node  mongo  three  gsap' },
    { p: '$', cmd: 'git log --oneline',out: 'a3f2d1 ✨ Add torus knot hero'  },
    { p: '',  cmd: '',                 out: 'b7e9c4 🚀 Deploy v3 portfolio'   },
    { p: '',  cmd: '',                 out: 'c1d8e0 🎨 New VOID design system' },
  ];

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="t-dot" style={{ background: '#FF5F57' }} />
        <span className="t-dot" style={{ background: '#FEBC2E' }} />
        <span className="t-dot" style={{ background: '#28C840' }} />
        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.53rem', color: 'var(--white-40)', marginLeft: '0.5rem', letterSpacing: '0.1em' }}>~/portfolio</span>
      </div>
      <div className="terminal-body">
        {lines.map((l, i) => (
          <div className="t-line" key={i}>
            {l.cmd && (
              <div><span className="t-prompt">{l.p} </span><span className="t-cmd">{l.cmd}</span></div>
            )}
            <div className="t-out">{l.out}</div>
          </div>
        ))}
        <div className="t-line" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span className="t-prompt">$</span>
          <span className="t-cursor" />
        </div>
      </div>
    </div>
  );
};

export default function AboutSection() {
  const sectionRef   = useRef(null);
  const headRef      = useRef(null);
  const col1Ref      = useRef(null);
  const col2Ref      = useRef(null);
  const col3Ref      = useRef(null);
  const statsRef     = useRef(null);
  const timelineRef  = useRef(null);
  const [canvasReady, setCanvasReady] = useState(false);

  const STATS = [
    { num: 7,  sup: '+', label: 'Projects Shipped' },
    { num: 2,  sup: '+', label: 'Years Experience'  },
    { num: 15, sup: '+', label: 'Technologies'      },
    { num: 99, sup: '%', label: 'Dedication'        },
  ];
  const [counts, setCounts] = useState(STATS.map(() => 0));

  /* Defer canvas until in-view */
  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setCanvasReady(true); obs.disconnect(); } },
      { rootMargin: '200px' }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const triggers = [];

    /* ── Headline: words clip-path reveal ── */
    if (headRef.current) {
      const words = headRef.current.querySelectorAll('.h-word');
      gsap.set(words, { y: '105%', opacity: 0 });
      triggers.push(ScrollTrigger.create({
        trigger: headRef.current, start: 'top 85%', once: true,
        onEnter: () => gsap.to(words, { y: '0%', opacity: 1, duration: 1, ease: 'power4.out', stagger: 0.08 }),
      }));
    }

    /* ── Col 1: slide from left ── */
    if (col1Ref.current) {
      gsap.set(col1Ref.current, { x: -60, opacity: 0 });
      triggers.push(ScrollTrigger.create({
        trigger: col1Ref.current, start: 'top 82%', once: true,
        onEnter: () => gsap.to(col1Ref.current, { x: 0, opacity: 1, duration: 1, ease: 'power4.out' }),
      }));
    }

    /* ── Col 2 (canvas+stats): slide from below ── */
    if (col2Ref.current) {
      gsap.set(col2Ref.current, { y: 80, opacity: 0 });
      triggers.push(ScrollTrigger.create({
        trigger: col2Ref.current, start: 'top 85%', once: true,
        onEnter: () => {
          gsap.to(col2Ref.current, { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out', delay: 0.12 });
          /* Count-up animation */
          STATS.forEach((s, i) => {
            if (typeof s.num !== 'number') return;
            gsap.fromTo({ val: 0 }, { val: 0 }, {
              val: s.num, duration: 1.6, ease: 'power2.out', delay: 0.4 + i * 0.12,
              onUpdate() { setCounts(c => { const n = [...c]; n[i] = Math.round(this.targets()[0].val); return n; }); },
            });
          });
        },
      }));
    }

    /* ── Col 3: slide from right ── */
    if (col3Ref.current) {
      gsap.set(col3Ref.current, { x: 60, opacity: 0 });
      triggers.push(ScrollTrigger.create({
        trigger: col3Ref.current, start: 'top 82%', once: true,
        onEnter: () => gsap.to(col3Ref.current, { x: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.2 }),
      }));
    }

    /* ── Skill bars fill ── */
    triggers.push(ScrollTrigger.create({
      trigger: sectionRef.current, start: 'top 70%', once: true,
      onEnter: () => gsap.to('.a-bar', { scaleX: 1, duration: 1.4, ease: 'power3.out', stagger: 0.12 }),
    }));

    /* ── Timeline cascade ── */
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.tl-item');
      gsap.set(items, { x: 30, opacity: 0 });
      triggers.push(ScrollTrigger.create({
        trigger: timelineRef.current, start: 'top 88%', once: true,
        onEnter: () => gsap.to(items, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.15 }),
      }));
    }

    return () => triggers.forEach(t => t.kill());
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about">
      <div className="wrap">
        {/* Header — word-by-word clip reveal */}
        <div ref={headRef} style={{ marginBottom: '4rem', overflow: 'hidden' }}>
          <div className="sec-label" style={{ marginBottom: '1.5rem' }}>About</div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(3rem, 7vw, 6.5rem)', lineHeight: 0.95, letterSpacing: '0.02em', color: 'var(--white)', display: 'flex', flexWrap: 'wrap', gap: '0.12em' }}>
            {['BUILDING', 'SCALABLE', 'EXPERIENCES'].map((w, i) => (
              <div key={w} style={{ overflow: 'hidden' }}>
                <span
                  className="h-word"
                  style={{ display: 'block', color: i === 1 ? 'var(--lime)' : 'var(--white)' }}
                >{w}</span>
              </div>
            ))}
          </h2>
        </div>

        {/* 3-col grid */}
        <div className="about-layout">
          {/* Col 1 — bio + bars — slides from LEFT */}
          <div className="about-col" ref={col1Ref}>
            <div className="about-col-label">Bio</div>
            <p className="about-body" style={{ marginBottom: '2.5rem' }}>
              I'm <strong style={{ color: 'var(--white)', fontWeight: 600 }}>Thomasukutty Reji</strong>, a Full Stack
              Developer who specialises in building fast, scalable MERN applications
              layered with motion design, 3D web, and a strong focus on craft.
            </p>
            <p className="about-body" style={{ marginBottom: '2.5rem', color: 'var(--white-40)' }}>
              Currently exploring the intersection of WebGL, AI integrations,
              and cinematic UX to push what's possible in the browser.
            </p>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.52rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--white-40)', marginBottom: '1.5rem' }}>
              Proficiency
            </div>
            {[
              { name: 'React / Next.js',   pct: 92 },
              { name: 'Node.js / Express', pct: 85 },
              { name: 'MongoDB',           pct: 82 },
              { name: 'Tailwind CSS',      pct: 90 },
              { name: 'Three.js / GSAP',   pct: 72 },
            ].map(({ name, pct }) => (
              <div className="skill-bar-row" key={name}>
                <div className="skill-bar-top">
                  <span className="skill-bar-name">{name}</span>
                  <span className="skill-bar-pct">{pct}%</span>
                </div>
                <div className="skill-bar-track">
                  <div className="skill-bar-fill a-bar" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Col 2 — 3D canvas + count-up stats — slides from BELOW */}
          <div className="about-col" ref={col2Ref} style={{ padding: 0, background: 'var(--black3)' }}>
          <div className="about-canvas-wrap" style={{ height: '420px' }}>
              {canvasReady && <AboutCanvas />}
            </div>
            <div className="about-stat-grid" style={{ borderTop: '1px solid var(--border)' }}>
              {STATS.map(({ num, sup, label }, i) => (
                <div className="about-stat" key={label}>
                  <div className="about-stat-num">
                    {counts[i]}<span>{sup}</span>
                  </div>
                  <div className="about-stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3 — terminal + timeline — slides from RIGHT */}
          <div className="about-col" ref={col3Ref}>
            <div className="about-col-label">Terminal</div>
            <Terminal />

            {/* Timeline with cascade */}
            <div ref={timelineRef} style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingLeft: '1rem', borderLeft: '1px solid var(--border)' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.52rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--white-40)', marginBottom: '0.5rem' }}>
                Timeline
              </div>
              {[
                { year: '2024 – Now', role: 'Freelance Developer',   desc: 'MERN · 3D Web · Motion Design' },
                { year: '2023',       role: 'Self-Taught Full Stack', desc: 'React · Node · Express · MongoDB' },
                { year: '2022',       role: 'Started Coding',         desc: 'HTML · CSS · JavaScript' },
              ].map(({ year, role, desc }) => (
                <div key={year} className="tl-item" style={{ position: 'relative', paddingLeft: '1rem' }}>
                  <div style={{ position: 'absolute', left: -21, top: 6, width: 8, height: 8, borderRadius: '50%', background: 'var(--lime)', boxShadow: '0 0 8px rgba(163,255,71,0.8)', border: '2px solid var(--black)' }} />
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.54rem', color: 'var(--lime)', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>{year}</div>
                  <div style={{ fontWeight: 600, color: 'var(--white)', fontSize: '0.88rem', marginBottom: '0.12rem' }}>{role}</div>
                  <div style={{ color: 'var(--white-40)', fontSize: '0.78rem' }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-layout { grid-template-columns: 1fr !important; }
          .about-col { border-right: none !important; border-bottom: 1px solid var(--border) !important; }
          .about-stat-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
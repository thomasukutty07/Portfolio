import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

/* ── Individual skill node ── */
const SkillNode = ({ position, skill, isHovered, onHover, onLeave }) => {
  const groupRef = useRef();
  useFrame((state) => {
    if (!groupRef.current || !isHovered) return;
    groupRef.current.scale.setScalar(1.25 + Math.sin(state.clock.getElapsedTime() * 5) * 0.04);
  });

  return (
    <group ref={groupRef} position={position}>
      <Html center distanceFactor={11} zIndexRange={[0, 100]}>
        <div
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            cursor: 'pointer',
            transform: isHovered ? 'scale(1.2)' : 'scale(1)',
            transition: 'transform 0.3s ease',
          }}
        >
          <div style={{
            width: 42, height: 42, borderRadius: 12,
            background: isHovered
              ? 'linear-gradient(135deg,rgba(91,33,182,0.25),rgba(192,38,211,0.15))'
              : 'rgba(255,255,255,0.08)',
            border: `1.5px solid ${isHovered ? 'rgba(91,33,182,0.5)' : 'rgba(0,0,0,0.1)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.3s ease',
            boxShadow: isHovered ? '0 0 16px rgba(91,33,182,0.2)' : 'none',
          }}>
            <skill.icon style={{ fontSize: '1.2rem', color: isHovered ? '#5B21B6' : skill.color }} />
          </div>
          {isHovered && (
            <div style={{
              fontSize: '0.56rem', fontFamily: 'JetBrains Mono, monospace',
              color: '#5B21B6', background: 'rgba(255,255,255,0.95)',
              border: '1px solid rgba(91,33,182,0.2)',
              padding: '2px 8px', borderRadius: 4,
              whiteSpace: 'nowrap', letterSpacing: '0.05em',
            }}>
              {skill.name}
            </div>
          )}
        </div>
      </Html>
    </group>
  );
};

/* ── Connection lines (computed once) ── */
const Lines = ({ points }) => {
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const pos = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < 3.4) {
          pos.push(points[i].x, points[i].y, points[i].z,
                   points[j].x, points[j].y, points[j].z);
        }
      }
    }
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    return g;
  }, [points]);

  return (
    <lineSegments geometry={geo}>
      <lineBasicMaterial color="#5B21B6" transparent opacity={0.1} />
    </lineSegments>
  );
};

/* ── Scene ── */
const Scene = ({ skills }) => {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(null);

  const points = useMemo(() => {
    const phi = Math.PI * (3 - Math.sqrt(5));
    return skills.map((_, i) => {
      const y = 1 - (i / (skills.length - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;
      return new THREE.Vector3(Math.cos(theta) * r * 3, y * 3, Math.sin(theta) * r * 3);
    });
  }, [skills.length]);

  useFrame((state, delta) => {
    if (!groupRef.current || hovered !== null) return;
    groupRef.current.rotation.y += delta * 0.08;
    groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.18) * 0.05;
  });

  return (
    <>
      <ambientLight intensity={1.2} />
      <pointLight position={[6, 6, 6]} intensity={0.4} color="#5B21B6" />
      <group ref={groupRef}>
        <Lines points={points} />
        {skills.map((skill, i) => (
          <SkillNode
            key={i}
            position={[points[i].x, points[i].y, points[i].z]}
            skill={skill}
            isHovered={hovered === i}
            onHover={() => setHovered(i)}
            onLeave={() => setHovered(null)}
          />
        ))}
      </group>
    </>
  );
};

/* ── Canvas — only mounts when section is in view ── */
const SkillSphere = ({ skills }) => {
  const wrapRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!wrapRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '200px' }
    );
    obs.observe(wrapRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={wrapRef} style={{ width: '100%', height: '100%' }}>
      {inView && (
        <Canvas
          camera={{ position: [0, 0, 9], fov: 55 }}
          style={{ width: '100%', height: '100%' }}
          gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
          dpr={Math.min(window.devicePixelRatio, 1.5)}
        >
          <Scene skills={skills} />
        </Canvas>
      )}
    </div>
  );
};

export default SkillSphere;
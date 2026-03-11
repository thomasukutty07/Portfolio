/**
 * HeroCanvas.jsx — Lazy-loaded Three.js canvas for the Hero section.
 * Splitting Three.js into its own file keeps it out of the main JS bundle
 * and off the critical path, improving FCP/LCP/TBT in Lighthouse.
 */
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Wireframe torus knot ─── */
const WireKnot = () => {
  const knotRef = useRef();
  const rimRef  = useRef();
  const icos    = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (knotRef.current) { knotRef.current.rotation.x = t * 0.11; knotRef.current.rotation.y = t * 0.17; }
    if (rimRef.current)  { rimRef.current.rotation.x = -t * 0.08; rimRef.current.rotation.z  = t * 0.12; }
    if (icos.current)    { icos.current.rotation.y = t * 0.22;    icos.current.rotation.x    = t * 0.14; }
  });

  return (
    <Float speed={0.9} rotationIntensity={0.14} floatIntensity={0.4}>
      <mesh ref={knotRef}>
        <torusKnotGeometry args={[1.4, 0.38, 100, 20, 2, 3]} />
        <meshStandardMaterial
          color="#A3FF47" emissive="#3A6600" emissiveIntensity={0.45}
          roughness={0.12} metalness={0.95} transparent opacity={0.9}
        />
      </mesh>
      <mesh ref={rimRef} scale={1.015}>
        <torusKnotGeometry args={[1.4, 0.38, 60, 12, 2, 3]} />
        <meshBasicMaterial color="#A3FF47" wireframe transparent opacity={0.15} />
      </mesh>
      <mesh ref={icos}>
        <icosahedronGeometry args={[0.7, 1]} />
        <MeshDistortMaterial
          color="#050505" emissive="#A3FF47" emissiveIntensity={0.2}
          distort={0.28} speed={1.5} roughness={0.04} metalness={1}
        />
      </mesh>
    </Float>
  );
};

/* ─── Background particles (180) ─── */
const BgParticles = () => {
  const ref = useRef();
  const { pos, col } = useMemo(() => {
    const COUNT = 180;
    const p = new Float32Array(COUNT * 3);
    const c = new Float32Array(COUNT * 3);
    const limeC  = new THREE.Color('#A3FF47');
    const whiteC = new THREE.Color('#F0F0EE');
    const darkC  = new THREE.Color('#303030');
    for (let i = 0; i < COUNT; i++) {
      p[i*3]   = (Math.random() - 0.5) * 18;
      p[i*3+1] = (Math.random() - 0.5) * 18;
      p[i*3+2] = (Math.random() - 0.5) * 10;
      const pick = Math.random();
      const chosen = pick < 0.3 ? limeC : pick < 0.6 ? whiteC : darkC;
      c[i*3] = chosen.r; c[i*3+1] = chosen.g; c[i*3+2] = chosen.b;
    }
    return { pos: p, col: c };
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.018;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[pos, 3]} count={pos.length / 3} />
        <bufferAttribute attach="attributes-color"    args={[col, 3]} count={col.length / 3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.7} sizeAttenuation depthWrite={false} />
    </points>
  );
};

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 52 }}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance',
        stencil: false,
        depth: false,
      }}
      dpr={Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 1.5)}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]}  intensity={7}   color="#A3FF47" />
      <pointLight position={[-5,-5,-3]} intensity={2.5} color="#4DFFEA" />
      <WireKnot />
      <BgParticles />
    </Canvas>
  );
}

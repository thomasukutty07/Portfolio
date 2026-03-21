/**
 * HeroCanvas.jsx — Lazy-loaded Three.js canvas for the Hero section.
 * Splitting Three.js into its own file keeps it out of the main JS bundle
 * and off the critical path, improving FCP/LCP/TBT in Lighthouse.
 */
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Cybernetic Data Swarm ─── */
const DataSwarm = () => {
  const coreRef = useRef();
  const swarmRef = useRef();

  // Pre-calculate positions, rotations, and scales for the orbiting data cubes
  const cubes = useMemo(() => {
    return Array.from({ length: 45 }).map(() => {
      // Create a spherical distribution for the swarm
      const radius = 1.8 + Math.random() * 1.5;
      const theta  = Math.random() * 2 * Math.PI;
      const phi    = Math.acos((Math.random() * 2) - 1);
      
      return {
        position: [
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        scale: Math.random() * 0.12 + 0.04,
        emissiveSpeed: Math.random() * 2 + 1,
      };
    });
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.2;
      coreRef.current.rotation.y = t * 0.3;
    }
    if (swarmRef.current) {
      swarmRef.current.rotation.y = t * 0.12;
      swarmRef.current.rotation.z = Math.sin(t * 0.1) * 0.2;
      
      // Make the data cubes gently pulse their glow
      const children = swarmRef.current.children;
      for (let i = 0; i < children.length; i++) {
        children[i].rotation.x += 0.01;
        children[i].rotation.y += 0.015;
      }
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.6}>
      <group>
        {/* Outer glowing containment sphere */}
        <mesh ref={coreRef} scale={1.3}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial 
            color="#0C0C0A" emissive="#A3FF47" emissiveIntensity={0.15}
            wireframe transparent opacity={0.3}
          />
        </mesh>
        {/* Orbiting Data Blocks */}
        <group ref={swarmRef}>
          {cubes.map((cube, i) => (
            <mesh key={i} position={cube.position} rotation={cube.rotation} scale={cube.scale}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial 
                color="#0C0C0A" 
                emissive="#A3FF47"
                emissiveIntensity={0.3}
                wireframe={i % 3 === 0} // 1 in 3 cubes are wireframe
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          ))}
        </group>
      </group>
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
      <DataSwarm />
      <BgParticles />
    </Canvas>
  );
}

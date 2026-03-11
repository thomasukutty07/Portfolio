import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';

const Blob = () => {
  const meshRef = useRef();
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.14;
    meshRef.current.rotation.y = t * 0.20;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.4}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 3]} />
        <MeshDistortMaterial color="#7C3AED" distort={0.32} speed={1.6} roughness={0} opacity={0.1} transparent />
      </mesh>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.83, 3]} />
        <MeshDistortMaterial color="#5B21B6" distort={0.32} speed={1.6} wireframe opacity={0.2} transparent />
      </mesh>
    </Float>
  );
};

const FloatingGeometry = () => {
  const wrapRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!wrapRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '150px' }
    );
    obs.observe(wrapRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={wrapRef} style={{ width: '100%', height: '100%' }}>
      {inView && (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          style={{ width: '100%', height: '100%' }}
          gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
          dpr={Math.min(window.devicePixelRatio, 1.5)}
        >
          <ambientLight intensity={1.1} />
          <pointLight position={[4, 4, 4]} intensity={0.7} color="#7C3AED" />
          <Blob />
        </Canvas>
      )}
    </div>
  );
};

export default FloatingGeometry;

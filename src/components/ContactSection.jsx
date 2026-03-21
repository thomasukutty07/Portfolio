import React, { useEffect, useRef, useState } from 'react';
import { gsap }          from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Canvas, createPortal } from '@react-three/fiber';
import { useGLTF, Html, PresentationControls, Center, Bounds } from '@react-three/drei';
import * as THREE from 'three';
gsap.registerPlugin(ScrollTrigger);

/* ── Magnetic submit button ── */
const MagBtn = ({ children, ...props }) => {
  const ref = useRef();
  const onMove = (e) => {
    const r  = ref.current.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width/2))  * 0.3;
    const dy = (e.clientY - (r.top  + r.height/2)) * 0.3;
    gsap.to(ref.current, { x: dx, y: dy, duration: 0.35, ease: 'power2.out' });
  };
  const onLeave = () => gsap.to(ref.current, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1,0.4)' });
  return (
    <button ref={ref} {...props} onMouseMove={onMove} onMouseLeave={onLeave}>{children}</button>
  );
};

/* ── Embedded 3D Computer & CRT Screen Component ── */
const Computer3D = ({ formData, handleChange, handleSubmit, formStatus }) => {
  const { nodes, materials } = useGLTF('/computer.glb');

  // Synchronously compute the exact facial center of the screen geometry
  const screenGeo = nodes.Monitor_Dark_Green_0.geometry;
  if (!screenGeo.boundingBox) screenGeo.computeBoundingBox();
  const screenCenter = new THREE.Vector3();
  screenGeo.boundingBox.getCenter(screenCenter);
  
  // The bounding box revealed the glass is completely flat along the X-axis (minX == maxX == -0.888). 
  // This means the screen faces exactly sideways (-X) in local space!
  const htmlPos = [screenCenter.x - 0.015, screenCenter.y, screenCenter.z];
  // Rotate HTML exactly 90 degrees so it faces out of the glass (-X direction) instead of default +Z.
  const htmlRot = [0, -Math.PI / 2, 0];

  return (
    <PresentationControls 
      global rotation={[0, -0.15, 0]} 
      polar={[-0.1, 0.1]} azimuth={[-0.4, 0.4]}
      config={{ mass: 2, tension: 400 }}
      cursor={false}
    >
      <Center position={[0, -0.4, 0]} scale={0.9}>
        <group dispose={null}>
          <group name="Sketchfab_Scene">
            {/* The model's origin has some wild rotations, these cleanly resolve them */}
            <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
              <group name="computerfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <group name="Object_2">
                  <group name="RootNode">
                    
                    {/* Disk Tray */}
                    <group name="Disk_Tray" position={[-135, 80, 394]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                      <mesh geometry={nodes.Disk_Tray_White_0.geometry} material={materials.White} />
                      <mesh geometry={nodes.Disk_Tray_Black_0.geometry} material={materials.Black} />
                    </group>

                    {/* Monitor (We attach the form right here!) */}
                    <group name="Monitor" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                      <mesh geometry={nodes.Monitor_White_0.geometry} material={materials.White} />
                      <mesh geometry={nodes.Monitor_Lime_Green_0.geometry} material={materials.Lime_Green} />
                      <mesh geometry={nodes.Monitor_Black_0.geometry} material={materials.Black} />
                      <mesh geometry={nodes.Monitor_Cable_0.geometry} material={materials.Cable} />
                      
                      {/* We hijack the Dark_Green screen mesh and make it solid black glass! */}
                      <mesh geometry={nodes.Monitor_Dark_Green_0.geometry}>
                        <meshStandardMaterial color="#081105" roughness={0.1} metalness={0.8} />
                      </mesh>
                    </group>

                    {/* CPU Box */}
                    <group name="CPU" position={[0, 80, 394]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                      <mesh geometry={nodes.CPU_White_0.geometry} material={materials.White} />
                      <mesh geometry={nodes.CPU_Black_0.geometry} material={materials.Black} />
                    </group>

                    {/* Keyboard */}
                    <group name="Keyboard" position={[-253.881, -11.355, -2.605]} rotation={[-Math.PI / 2, 1.571, 0]} scale={100}>
                      <mesh geometry={nodes.Keyboard_Cable_0.geometry} material={materials.Cable} />
                      <mesh geometry={nodes.Keyboard_White_0.geometry} material={materials.White} />
                      <mesh geometry={nodes.Keyboard_Black_0.geometry} material={materials.Black} />
                    </group>

                    {/* Floppy Disk */}
                    <group name="Floppy_Disk" position={[-252.778, -22.232, 432.976]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100}>
                      <mesh geometry={nodes.Floppy_Disk_Black_0.geometry} material={materials.Black} />
                      <mesh geometry={nodes.Floppy_Disk_White_0.geometry} material={materials.White} />
                    </group>

                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </Center>
    </PresentationControls>
  );
};

export default function ContactSection({ formData, formStatus, handleChange, handleSubmit }) {
  const sectionRef = useRef(null);
  const topRef     = useRef(null);
  const formRef    = useRef(null);
  const linksRef   = useRef(null);
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const triggers = [];
    gsap.set([topRef.current, formRef.current, linksRef.current], { opacity: 0, y: 36 });
    triggers.push(ScrollTrigger.create({
      trigger: sectionRef.current, start: 'top 85%', once: true,
      onEnter: () => {
        gsap.to(topRef.current,   { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out' });
        gsap.to(formRef.current,  { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', delay: 0.14 });
        gsap.to(linksRef.current, { opacity: 1, y: 0, duration: 0.8,  ease: 'power3.out', delay: 0.26 });
      },
    }));
    const fb = setTimeout(() => {
      [topRef, formRef, linksRef].forEach(r => {
        if (r.current) gsap.set(r.current, { opacity: 1, y: 0 });
      });
    }, 2800);
    return () => { triggers.forEach(t => t.kill()); clearTimeout(fb); };
  }, []);

  const links = [
    { icon: FaEnvelope, label: 'Email',    value: 'thomasmern007@gmail.com',    href: 'mailto:thomasmern007@gmail.com' },
    { icon: FaGithub,   label: 'GitHub',   value: 'github.com/thomasukutty07',  href: 'https://github.com/thomasukutty07' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'Thomasukutty Reji',           href: 'https://www.linkedin.com/in/thomasukutty-reji-431b9027b/' },
  ];

  const iStyle = (name) => ({
    borderColor: focused === name ? 'var(--lime)' : undefined,
    background:  focused === name ? 'var(--lime-03)' : undefined,
  });

  return (
    <>
    <section id="contact" ref={sectionRef} className="contact relative bg-black py-24 sm:py-32">
      <div className="wrap relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Big header */}
        <div ref={topRef}>
          <div className="sec-label" style={{ marginBottom: '2rem' }}>Contact</div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.95, letterSpacing: '0.02em', color: 'var(--white)', marginBottom: '2.5rem' }}>
            LET'S BUILD<br /><span style={{ color: 'var(--lime)' }}>SOMETHING</span><br />GREAT
          </h2>

          {/* Big email */}
          <a
            href="mailto:thomasmern007@gmail.com"
            className="contact-big-email"
            data-text="thomasmern007@gmail.com"
          >
            thomasmern007@gmail.com
          </a>
        </div>

        {/* 2-col layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 w-full">
          {/* Left Column — 3D Computer & Regular Form */}
          <div className="flex flex-col gap-8 w-full">
            {/* 3D Computer (Desktop only) */}
            <div ref={formRef} className="relative hidden md:flex items-center justify-center w-full min-h-[350px] cursor-grab active:cursor-grabbing">
               <Canvas camera={{ position: [0, 0, 800], fov: 35 }}>
                 <ambientLight intensity={1.2} />
                 <directionalLight position={[500, 1000, 800]} intensity={1.5} />
                 <pointLight position={[-500, -500, 500]} intensity={0.5} />
                 <Bounds fit clip observe margin={1}>
                   <Computer3D 
                     formData={formData} 
                     formStatus={formStatus} 
                     handleChange={handleChange} 
                     handleSubmit={handleSubmit} 
                   />
                 </Bounds>
               </Canvas>
            </div>

            {/* Regular Flat Form (Now visible on all devices) */}
            <div className="w-full">
              {formStatus.success && (
                <div className="bg-[var(--lime-10)] border border-[var(--lime-03)] text-[var(--lime)] p-4 mb-6 text-sm font-medium flex items-center gap-2">
                  ✓ Message sent — I'll be in touch soon!
                </div>
              )}
              {formStatus.error && (
                <div className="bg-[var(--coral-10)] border border-[var(--coral)] text-[var(--coral)] p-4 mb-6 text-sm font-medium flex items-center gap-2">
                  ✕ Something went wrong — please try again.
                </div>
              )}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-[var(--white-40)] font-mono">Name *</label>
                    <input name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="Thomas" className="bg-[var(--black3)] border border-[var(--border)] text-[var(--white)] p-3 focus:outline-none focus:border-[var(--lime)] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-[var(--white-40)] font-mono">Email *</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className="bg-[var(--black3)] border border-[var(--border)] text-[var(--white)] p-3 focus:outline-none focus:border-[var(--lime)] transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest text-[var(--white-40)] font-mono">Subject</label>
                  <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Project inquiry..." className="bg-[var(--black3)] border border-[var(--border)] text-[var(--white)] p-3 focus:outline-none focus:border-[var(--lime)] transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest text-[var(--white-40)] font-mono">Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Tell me about your project..." rows="4" className="bg-[var(--black3)] border border-[var(--border)] text-[var(--white)] p-3 focus:outline-none focus:border-[var(--lime)] transition-colors" />
                </div>
                <MagBtn type="submit" disabled={formStatus.submitting} className="w-full mt-2 bg-[var(--lime)] text-[var(--black)] py-3.5 font-medium text-sm disabled:opacity-60 flex justify-center items-center rounded-none cursor-pointer hover:bg-[var(--lime-bright)] transition-colors">
                  {formStatus.submitting ? <div className="w-4 h-4 border-2 border-[var(--black5)] border-t-[var(--black)] rounded-full animate-spin mr-2"/> : null}
                  {formStatus.submitting ? 'Sending...' : 'Send Message →'}
                </MagBtn>
              </form>
            </div>
          </div>

          {/* Right — links + info */}
          <div ref={linksRef} className="flex flex-col justify-center max-w-lg lg:pl-10">
            <h3 style={{ fontFamily: 'var(--display)' }} className="text-4xl text-[var(--white)] tracking-wide mb-4">CONNECT</h3>
            <p className="text-[var(--white-60)] text-sm leading-relaxed font-light mb-10">
              Whether it's a startup MVP, a freelance project, or just wanting to say hello — my inbox is always open.
            </p>

            <div className="flex flex-col">
              {links.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 py-5 border-b border-[var(--border)] text-inherit hover:text-[var(--lime)] hover:pl-2 transition-all group first:border-t">
                  <Icon className="text-[var(--lime)] text-base shrink-0" />
                  <div>
                    <div style={{ fontFamily: 'var(--mono)' }} className="text-[10px] text-[var(--white-40)] tracking-[0.15em] uppercase mb-0.5">{label}</div>
                    <div className="text-[15px] font-medium text-[var(--white-80)] group-hover:text-[var(--white)] transition-colors">{value}</div>
                  </div>
                  <span className="ml-auto text-[var(--white-40)] text-xs transition-transform transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--lime)]">↗</span>
                </a>
              ))}
            </div>

            <div style={{ fontFamily: 'var(--mono)' }} className="inline-flex items-center gap-2.5 px-4 py-2 mt-8 bg-[var(--lime-06)] border border-[var(--lime-10)] text-[10px] text-[var(--lime)] tracking-widest uppercase self-start rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--lime)] animate-[pulse-lime_2s_ease_infinite]" />
              Available for freelance &amp; full-time — response within 24h
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes crt-flicker {
          0%   { opacity: 0.95; }
          3%   { opacity: 0.85; }
          6%   { opacity: 0.98; }
          8%   { opacity: 0.90; }
          12%  { opacity: 1; }
          100% { opacity: 1; }
        }
        .crt-screen { animation: crt-flicker 5s infinite; }
        .crt-text { text-shadow: 0 0 6px var(--lime); font-weight: bold; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
    </>
  );
}

useGLTF.preload('/computer.glb');
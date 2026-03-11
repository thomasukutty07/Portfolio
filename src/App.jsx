import React, { useState, useEffect, lazy, Suspense } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor   from './components/CustomCursor';
import Navbar         from './components/Navbar';
import HeroSection    from './components/HeroSection';
import ContactSection from './components/ContactSection';
import Footer         from './components/Footer';
import PageLoader     from './components/PageLoader';

const AboutSection    = lazy(() => import('./components/AboutSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const SkillsSection   = lazy(() => import('./components/SkillsSection'));

gsap.registerPlugin(ScrollTrigger);

const Spinner = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: 28, height: 28, border: '2px solid rgba(163,255,71,0.2)', borderTopColor: '#A3FF47', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

/* ─── Projects data — featured first (QuickBite, Fildex, UrbanHut) ─── */
const PROJECTS = [
  {
    title: 'QuickBite',
    description: 'A full-stack food delivery platform with menu browsing, cart management, real-time order tracking, and seamless checkout. Built with React, Node.js, and Express — optimised for speed and a smooth UX.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Vite'],
    githubLink: 'https://github.com/thomasukutty07',
    liveLink:   'https://quick-bite-neon.vercel.app/',
    image: 'https://placehold.co/800x480/0A0A00/A3FF47?text=QuickBite&font=raleway',
  },
  {
    title: 'Fildex Solutions',
    description: 'A professional Recruitment SaaS platform built for an Irish company. Features service showcases, candidate management, and a clean corporate design with smooth animations.',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'GSAP'],
    githubLink: 'https://github.com/thomasukutty07',
    liveLink:   'https://fildex.ie',
    image: 'https://placehold.co/800x480/00050A/4DFFEA?text=Fildex+Solutions&font=raleway',
  },
  {
    title: 'UrbanHunt E-Commerce',
    description: 'A full-featured MERN e-commerce platform with cart, authentication, admin dashboard and payment integration. Built for performance and scalability with React, Node.js, Express, and MongoDB.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    githubLink: 'https://github.com/thomasukutty07/UrbanHut',
    liveLink:   'https://e-com-1-8ewb.onrender.com/#/shop/home',
    image: 'https://placehold.co/800x480/050005/A78BFA?text=UrbanHunt&font=raleway',
  },
  {
    title: 'Baytebar IT Solutions',
    description: 'A professional IT solutions company website built for a commercial client. Showcases services, team, and portfolio with smooth animations and a modern aesthetic.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    githubLink: 'https://github.com/thomasukutty07',
    liveLink:   'https://baytebar.com/',
    image: 'https://placehold.co/640x400/0A0A0A/F0F0EE?text=Baytebar+IT&font=raleway',
  },
  {
    title: 'HooBank',
    description: 'A sleek modern banking interface with interactive dashboards demonstrating UI/UX excellence. Features responsive layouts, glassmorphism cards, and smooth scroll effects.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    githubLink: 'https://github.com/thomasukutty07',
    liveLink:   'https://stunning-scone-45b046.netlify.app/',
    image: 'https://placehold.co/640x400/000A10/06B6D4?text=HooBank&font=raleway',
  },
  {
    title: 'CineFlix',
    description: 'Interactive movie discovery platform with search, filtering, and detailed movie info from the TMDB API. Built with React and Tailwind CSS.',
    technologies: ['React', 'Tailwind CSS', 'TMDB API', 'Vite'],
    githubLink: 'https://github.com/thomasukutty07',
    liveLink:   'https://dynamic-cocada-c83d76.netlify.app/',
    image: 'https://placehold.co/640x400/0A0005/EC4899?text=CineFlix&font=raleway',
  },
  {
    title: 'Edusity',
    description: 'Comprehensive educational platform with course listings, faculty profiles, and admissions portal. Designed for university-level institutions.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    githubLink: 'https://github.com/thomasukutty07',
    liveLink:   'https://magenta-cucurucho-c3f8ae.netlify.app/',
    image: 'https://placehold.co/640x400/000A05/10B981?text=Edusity&font=raleway',
  },
];

const SECTIONS = [
  { id: 'home',     label: 'Home'     },
  { id: 'about',    label: 'About'    },
  { id: 'projects', label: 'Projects' },
  { id: 'skills',   label: 'Skills'   },
  { id: 'contact',  label: 'Contact'  },
];

const App = () => {
  const [activeSection,  setActiveSection]  = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop,  setShowScrollTop]  = useState(false);
  const [loaderDone,     setLoaderDone]     = useState(false);
  const [formData,       setFormData]       = useState({ firstName: '', email: '', subject: '', message: '' });
  const [formStatus,     setFormStatus]     = useState({ submitting: false, success: false, error: false });

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); setActiveSection(id); }
  };

  /* Smooth scroll via Lenis */
  useEffect(() => {
    let lenis;
    (async () => {
      const { default: Lenis } = await import('lenis');
      lenis = new Lenis({
        duration: 1.4,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
      lenis.on('scroll', ScrollTrigger.update);
    })();
    return () => { lenis && lenis.destroy(); };
  }, []);

  /* ScrollTrigger refresh after mount */
  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 1400);
    return () => clearTimeout(t);
  }, []);

  /* Scroll tracking */
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct   = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrollProgress(pct);
      setShowScrollTop(window.scrollY > 500);

      document.querySelectorAll('section[id]').forEach(sec => {
        const top = sec.offsetTop;
        if (window.scrollY + 160 >= top && window.scrollY + 160 < top + sec.offsetHeight) {
          setActiveSection(sec.id);
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Form handlers */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false });
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '5ca4975c-ea30-422d-9aae-f579a5d73eaa',
          name: formData.firstName, email: formData.email,
          subject: formData.subject, message: formData.message,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setFormStatus({ submitting: false, success: true, error: false });
        setFormData({ firstName: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus(s => ({ ...s, success: false })), 5000);
      } else throw new Error(result.message);
    } catch {
      setFormStatus({ submitting: false, success: false, error: true });
    }
  };

  return (
    <div className="noise" style={{ minHeight: '100vh', background: 'var(--black)', color: 'var(--white)', overflowX: 'hidden', position: 'relative' }}>
      {/* Loader */}
      <PageLoader onComplete={() => setLoaderDone(true)} />

      {/* Scroll progress bar */}
      <div className="sp" style={{ width: `${scrollProgress}%` }} />

      <CustomCursor />
      <Navbar sections={SECTIONS} activeSection={activeSection} scrollToSection={scrollToSection} />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection scrollToSection={scrollToSection} />

        <Suspense fallback={<Spinner />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<Spinner />}>
          <ProjectsSection projects={PROJECTS} />
        </Suspense>

        <Suspense fallback={<Spinner />}>
          <SkillsSection allSkills={[]} />
        </Suspense>

        <ContactSection
          formData={formData}
          formStatus={formStatus}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </main>

      <Footer />

      {showScrollTop && (
        <button
          className="scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default App;
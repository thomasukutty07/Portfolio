import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { LiveProjectButton } from '../ui/LiveProjectButton';

interface ProjectItem {
  id: string;
  name: string;
  category: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  liveUrl?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: '01',
    name: 'QuickBite',
    category: 'Food Delivery Platform',
    col1Image1: '/assets/projects/quickbite-1.jpg',
    col1Image2: '/assets/projects/quickbite-2.jpg',
    col2Image: '/assets/projects/quickbite-3.jpg',
    liveUrl: 'https://silver-platypus-609adb.netlify.app/',
  },
  {
    id: '02',
    name: 'Lasyhuman',
    category: 'AI Agents & Automation',
    col1Image1: '/assets/projects/lasyhuman-1.jpg',
    col1Image2: '/assets/projects/lasyhuman-2.jpg',
    col2Image: '/assets/projects/lasyhuman-3.jpg',
    liveUrl: 'https://lasyhuman.com/',
  },
  {
    id: '03',
    name: 'Fildex Solutions',
    category: 'Recruitment SaaS Platform',
    col1Image1: '/assets/projects/fildex-1.jpg',
    col1Image2: '/assets/projects/fildex-2.jpg',
    col2Image: '/assets/projects/fildex-3.jpg',
    liveUrl: 'https://fildex.ie',
  },
  {
    id: '04',
    name: 'UrbanHunt',
    category: 'E-Commerce Platform',
    col1Image1: '/assets/projects/urbanhunt-1.jpg',
    col1Image2: '/assets/projects/urbanhunt-2.jpg',
    col2Image: '/assets/projects/urbanhunt-3.jpg',
    liveUrl: 'https://e-com-1-8ewb.onrender.com/#/shop/home',
  },
  {
    id: '05',
    name: 'Baytebar IT Solutions',
    category: 'Corporate Web Platform',
    col1Image1: '/assets/projects/baytebar-1.jpg',
    col1Image2: '/assets/projects/baytebar-2.jpg',
    col2Image: '/assets/projects/baytebar-3.jpg',
    liveUrl: 'https://www.baytebar.com/',
  },
];

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[90vh] sm:min-h-screen flex items-center justify-center sticky px-3 sm:px-6 md:px-8"
      style={{
        top: `max(1.5rem, calc(50vh - 380px + ${index * 24}px))`,
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
          padding: 'clamp(20px, 3.5vw, 48px)',
        }}
        className="w-full max-w-6xl mx-auto rounded-[28px] sm:rounded-[40px] md:rounded-[52px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] shadow-2xl relative overflow-hidden"
      >
        {/* Top row - header without dividing line matching reference */}
        <div
          className="flex items-center justify-between gap-2.5 sm:gap-6 w-full"
          style={{ marginBottom: 'clamp(12px, 2vw, 28px)' }}
        >
          <div className="flex items-center gap-2.5 sm:gap-6 md:gap-8 min-w-0">
            {/* Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none shrink-0"
              style={{ fontSize: 'clamp(1.5rem, 4.2vw, 4.2rem)' }}
            >
              {project.id}
            </span>

            {/* Category + Name */}
            <div className="flex flex-col justify-center min-w-0">
              <span className="uppercase text-[9px] sm:text-xs md:text-sm font-bold tracking-wider sm:tracking-widest text-[#D7E2EA] truncate">
                {project.category}
              </span>
              <h3 className="text-xs sm:text-base md:text-lg lg:text-xl font-medium tracking-wide text-[#D7E2EA]/85 mt-0.5 truncate">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Live Project ghost button with dedicated spacing */}
          <div className="shrink-0">
            <LiveProjectButton href={project.liveUrl || '#'} label="Live Project" />
          </div>
        </div>

        {/* Bottom row: Two-column image grid (40% left, 60% right) */}
        <div
          className="grid grid-cols-5 w-full items-center"
          style={{ gap: 'clamp(10px, 1.8vw, 30px)' }}
        >
          {/* Left column (40% width / 2 of 5 cols): 2 stacked images */}
          <div
            className="col-span-2 flex flex-col w-full"
            style={{ gap: 'clamp(8px, 1.4vw, 20px)' }}
          >
            <img
              src={project.col1Image1}
              alt={`${project.name} visual 1`}
              className="w-full object-cover rounded-[12px] sm:rounded-[18px] md:rounded-[26px] bg-[#161616] shadow-md"
              style={{ height: 'clamp(70px, 11vw, 175px)' }}
              loading="lazy"
            />
            <img
              src={project.col1Image2}
              alt={`${project.name} visual 2`}
              className="w-full object-cover rounded-[12px] sm:rounded-[18px] md:rounded-[26px] bg-[#161616] shadow-md"
              style={{ height: 'clamp(85px, 13.5vw, 215px)' }}
              loading="lazy"
            />
          </div>

          {/* Right column (60% width / 3 of 5 cols): 1 tall image matching left height */}
          <div className="col-span-3 flex w-full h-full">
            <img
              src={project.col2Image}
              alt={`${project.name} main visual`}
              className="w-full h-full object-cover rounded-[12px] sm:rounded-[18px] md:rounded-[26px] bg-[#161616] shadow-md"
              style={{ minHeight: 'clamp(163px, 25.9vw, 410px)', maxHeight: '420px' }}
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[32px] sm:rounded-t-[48px] md:rounded-t-[60px] -mt-8 sm:-mt-10 md:-mt-14 z-10 relative pt-16 sm:pt-28 md:pt-40 pb-20 sm:pb-32 md:pb-40 px-3 sm:px-6 md:px-8 select-none min-h-screen flex flex-col items-center justify-center"
    >
      {/* Heading: "Project" */}
      <div className="text-center mb-10 sm:mb-20 md:mb-32 w-full">
        <FadeIn delay={0} y={30} className="w-full flex justify-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 11vw, 150px)' }}
          >
            Project
          </h2>
        </FadeIn>
      </div>

      {/* Sticky Stacking Project Cards */}
      <div className="w-full max-w-6xl mx-auto relative pb-20 flex flex-col items-center justify-center">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
};

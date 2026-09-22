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
}

const PROJECTS: ProjectItem[] = [
  {
    id: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    id: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    id: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
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
      className="w-full min-h-[90vh] sm:min-h-screen flex items-center justify-center sticky"
      style={{
        top: `max(1.5rem, calc(50vh - 340px + ${index * 24}px))`,
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
          padding: 'clamp(28px, 4.2vw, 56px)',
        }}
        className="w-full max-w-6xl mx-auto rounded-[32px] sm:rounded-[44px] md:rounded-[56px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] shadow-2xl relative overflow-hidden"
      >
        {/* Top row - header without dividing line matching reference */}
        <div
          className="flex flex-wrap items-center justify-between gap-6 w-full"
          style={{ marginBottom: 'clamp(24px, 3.5vw, 48px)' }}
        >
          <div className="flex items-center gap-5 sm:gap-7 md:gap-9">
            {/* Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none shrink-0"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.2rem)' }}
            >
              {project.id}
            </span>

            {/* Category + Name */}
            <div className="flex flex-col justify-center">
              <span className="uppercase text-xs sm:text-sm font-bold tracking-widest text-[#D7E2EA]">
                {project.category}
              </span>
              <h3 className="text-base sm:text-lg md:text-xl font-medium tracking-wide text-[#D7E2EA]/85 mt-1">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Live Project ghost button with dedicated spacing */}
          <div className="shrink-0 my-1">
            <LiveProjectButton href="#" label="Live Project" />
          </div>
        </div>

        {/* Bottom row: Two-column image grid with ample gaps (40% left, 60% right) */}
        <div
          className="grid grid-cols-1 md:grid-cols-5 w-full"
          style={{ gap: 'clamp(24px, 3.2vw, 44px)' }}
        >
          {/* Left column (40% width / 2 of 5 cols): 2 stacked images with explicit gap */}
          <div
            className="md:col-span-2 flex flex-col w-full"
            style={{ gap: 'clamp(20px, 2.5vw, 32px)' }}
          >
            <img
              src={project.col1Image1}
              alt={`${project.name} visual 1`}
              className="w-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[38px] bg-[#161616] shadow-md"
              style={{ height: 'clamp(140px, 16vw, 210px)' }}
              loading="lazy"
            />
            <img
              src={project.col1Image2}
              alt={`${project.name} visual 2`}
              className="w-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[38px] bg-[#161616] shadow-md"
              style={{ height: 'clamp(170px, 20vw, 260px)' }}
              loading="lazy"
            />
          </div>

          {/* Right column (60% width / 3 of 5 cols): 1 tall image matching left height */}
          <div className="md:col-span-3 flex w-full">
            <img
              src={project.col2Image}
              alt={`${project.name} main visual`}
              className="w-full h-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[38px] bg-[#161616] shadow-md"
              style={{ minHeight: 'clamp(330px, 38.5vw, 502px)' }}
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
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-24 sm:pt-32 md:pt-40 pb-32 sm:pb-40 px-4 sm:px-6 md:px-8 select-none min-h-screen flex flex-col items-center justify-center"
    >
      {/* Heading: "Project" */}
      <div className="text-center mb-16 sm:mb-24 md:mb-32 w-full">
        <FadeIn delay={0} y={30} className="w-full flex justify-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
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

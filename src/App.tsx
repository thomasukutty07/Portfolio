import React from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactButton } from './components/ui/ContactButton';
import { FadeIn } from './components/ui/FadeIn';

export const App: React.FC = () => {
  return (
    <div
      className="w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] relative"
      style={{ overflowX: 'clip', fontFamily: "'Kanit', sans-serif" }}
    >
      <main className="w-full">
        <HeroSection />

        {/* Spacer between Hero and Marquee */}
        <div style={{ height: '150px' }} className="bg-[#0C0C0C]" />

        {/* 2. Marquee Section */}
        <MarqueeSection />

        {/* Spacer */}
        <div style={{ height: '150px' }} className="bg-[#0C0C0C]" />

        {/* 3. About Section */}
        <AboutSection />

        {/* Spacer */}
        <div style={{ height: '150px' }} className="bg-[#0C0C0C]" />

        {/* 4. Services Section */}
        <ServicesSection />

        {/* Spacer */}
        <div style={{ height: '150px' }} className="bg-[#0C0C0C]" />

        {/* 5. Projects Section */}
        <ProjectsSection />
      </main>

      {/* Footer / Contact Section - Centered Horizontally & Vertically */}
      <footer
        id="contact"
        className="w-full bg-[#0C0C0C] border-t border-[#D7E2EA]/10 min-h-[50vh] sm:min-h-[60vh] flex flex-col items-center justify-center text-center px-6 md:px-10 py-20 sm:py-28 relative z-20"
      >
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-6 sm:gap-8">
          <FadeIn delay={0} y={20} className="flex flex-col items-center justify-center text-center">
            <span className="hero-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-center">
              Thomas
            </span>
            <p className="text-[#D7E2EA]/70 text-sm sm:text-base md:text-lg uppercase tracking-wider mt-3 max-w-xl text-center">
              A 3D creator driven by crafting striking and unforgettable projects
            </p>
          </FadeIn>

          {/* Contact Button with generous spacing */}
          <FadeIn delay={0.15} y={20} className="my-3 sm:my-5 flex justify-center">
            <ContactButton href="mailto:hello@thomas.design" />
          </FadeIn>

          {/* Centered Navigation */}
          <FadeIn delay={0.25} y={20}>
            <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60">
              <a href="#about" className="hover:text-[#D7E2EA] transition-colors duration-200">
                About
              </a>
              <a href="#services" className="hover:text-[#D7E2EA] transition-colors duration-200">
                Services
              </a>
              <a href="#projects" className="hover:text-[#D7E2EA] transition-colors duration-200">
                Projects
              </a>
              <a href="#contact" className="hover:text-[#D7E2EA] transition-colors duration-200">
                Contact
              </a>
            </nav>
          </FadeIn>

          <FadeIn delay={0.3} y={20}>
            <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest mt-2 block">
              &copy; {new Date().getFullYear()} Thomas. All rights reserved.
            </span>
          </FadeIn>
        </div>
      </footer>
    </div>
  );
};

export default App;

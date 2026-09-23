import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Magnet } from '../ui/Magnet';
import { ContactButton } from '../ui/ContactButton';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[100dvh] min-h-[560px] w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Navbar */}
      <FadeIn delay={0} y={0} className="w-full z-30">
        <header className="flex justify-between items-center w-full px-3.5 sm:px-8 md:px-10 pt-3.5 sm:pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-[11px] sm:text-sm md:text-base lg:text-[1.3rem]">
          <a
            href="#about"
            className="hover:opacity-70 transition-opacity duration-200 no-underline text-[#D7E2EA]"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:opacity-70 transition-opacity duration-200 no-underline text-[#D7E2EA]"
          >
            Services
          </a>
          <a
            href="#projects"
            className="hover:opacity-70 transition-opacity duration-200 no-underline text-[#D7E2EA]"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:opacity-70 transition-opacity duration-200 no-underline text-[#D7E2EA]"
          >
            Contact
          </a>
        </header>
      </FadeIn>

      {/* Massive Hero Heading */}
      <div className="w-full overflow-hidden text-center z-10 relative px-2">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full mt-3 sm:mt-2 md:-mt-4"
            style={{ fontSize: 'clamp(1.75rem, 8.8vw, 13vw)' }}
          >
            Hi, i&apos;m Thomas
          </h1>
        </FadeIn>
      </div>

      {/* Centered Hero Portrait with Magnet */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20 w-[220px] sm:w-[320px] md:w-[420px] lg:w-[500px] bottom-0 pointer-events-auto flex justify-center items-end">
        <FadeIn delay={0.6} y={30} className="w-full flex justify-center items-end">
          <Magnet
            padding={100}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center items-end"
          >
            <img
              src="/assets/hero-avatar.png"
              alt="Thomas - Full-Stack Developer Portrait"
              className="w-full max-h-[50vh] sm:max-h-[64vh] md:max-h-[74vh] object-contain pointer-events-none drop-shadow-2xl"
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-5 sm:pb-10 md:pb-14 px-3.5 sm:px-8 md:px-16 w-full z-30 relative gap-2 sm:gap-4">
        {/* Left text */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-tight sm:leading-snug max-w-[125px] sm:max-w-[200px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.6rem, 1.1vw, 1.35rem)' }}
          >
            Full-stack developer building scalable web apps &amp; digital products
          </p>
        </FadeIn>

        {/* Right: ContactButton */}
        <FadeIn delay={0.5} y={10} className="shrink-0">
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
};

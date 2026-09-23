import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { ContactButton } from '../ui/ContactButton';
import { AnimatedText } from '../ui/AnimatedText';

export const AboutSection: React.FC = () => {
  const aboutText =
    "As a full-stack developer, I specialize in building scalable web applications and digital products using React, Node.js, and MongoDB. I focus on bridging intuitive user interfaces with robust backend architectures. Let's build something incredible together!";

  return (
    <section
      id="about"
      className="relative min-h-screen px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center overflow-hidden bg-[#0C0C0C] select-none"
    >
      {/* 1. Top-left: Moon icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[3%] sm:top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon 3D icon"
          className="w-[65px] sm:w-[120px] md:w-[170px] lg:w-[210px] h-auto object-contain drop-shadow-xl opacity-40 sm:opacity-90 md:opacity-100"
          loading="lazy"
        />
      </FadeIn>

      {/* 2. Bottom-left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[5%] sm:bottom-[8%] left-[2%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D object decoration"
          className="w-[55px] sm:w-[100px] md:w-[140px] lg:w-[180px] h-auto object-contain drop-shadow-xl opacity-40 sm:opacity-90 md:opacity-100"
          loading="lazy"
        />
      </FadeIn>

      {/* 3. Top-right: Lego icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[3%] sm:top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego 3D icon"
          className="w-[65px] sm:w-[120px] md:w-[170px] lg:w-[210px] h-auto object-contain drop-shadow-xl opacity-40 sm:opacity-90 md:opacity-100"
          loading="lazy"
        />
      </FadeIn>

      {/* 4. Bottom-right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[5%] sm:bottom-[8%] right-[2%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D group decoration"
          className="w-[70px] sm:w-[120px] md:w-[170px] lg:w-[220px] h-auto object-contain drop-shadow-xl opacity-40 sm:opacity-90 md:opacity-100"
          loading="lazy"
        />
      </FadeIn>

      {/* Center content block */}
      <div className="flex flex-col items-center justify-center max-w-4xl z-20 text-center px-2">
        {/* Heading: "About me" */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading/text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="mt-10 sm:mt-14 md:mt-16 w-full flex justify-center">
          <div
            className="max-w-[560px] text-[#D7E2EA] font-medium text-center leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          >
            <AnimatedText text={aboutText} />
          </div>
        </div>

        {/* Gap between text block and button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.2} y={20}>
            <ContactButton href="#contact" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

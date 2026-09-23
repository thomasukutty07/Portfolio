import React, { useRef, useState, useEffect } from 'react';

const ROW1_IMAGES = [
  '/assets/showcase/showcase-01.jpg',
  '/assets/showcase/showcase-02.jpg',
  '/assets/showcase/showcase-03.jpg',
  '/assets/showcase/showcase-04.jpg',
  '/assets/showcase/showcase-05.jpg',
];

const ROW2_IMAGES = [
  '/assets/showcase/showcase-06.jpg',
  '/assets/showcase/showcase-07.jpg',
  '/assets/showcase/showcase-08.jpg',
  '/assets/showcase/showcase-09.jpg',
  '/assets/showcase/showcase-10.jpg',
];

// Repeated image lists for seamless scrolling coverage
const ROW1_TRIPLED = [...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES];
const ROW2_TRIPLED = [...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const currentOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
            setOffset(currentOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-14 sm:pt-24 md:pt-36 pb-6 sm:pb-10 overflow-hidden flex flex-col gap-2.5 sm:gap-3 relative"
    >
      {/* Row 1: Moves RIGHT on scroll (translateX(offset - 200)) */}
      <div
        className="flex gap-2.5 sm:gap-3 w-max"
        style={{
          transform: `translateX(${offset - 200}px)`,
          willChange: 'transform',
        }}
      >
        {ROW1_TRIPLED.map((src, index) => (
          <img
            key={`row1-${index}`}
            src={src}
            alt={`Work Showcase 1-${(index % ROW1_IMAGES.length) + 1}`}
            className="w-[240px] h-[155px] sm:w-[320px] sm:h-[205px] md:w-[420px] md:h-[270px] shrink-0 rounded-xl sm:rounded-2xl object-cover bg-[#161616]"
            loading="lazy"
          />
        ))}
      </div>

      {/* Row 2: Moves LEFT on scroll (translateX(-(offset - 200))) */}
      <div
        className="flex gap-2.5 sm:gap-3 w-max"
        style={{
          transform: `translateX(${-(offset - 200)}px)`,
          willChange: 'transform',
        }}
      >
        {ROW2_TRIPLED.map((src, index) => (
          <img
            key={`row2-${index}`}
            src={src}
            alt={`Work Showcase 2-${(index % ROW2_IMAGES.length) + 1}`}
            className="w-[240px] h-[155px] sm:w-[320px] sm:h-[205px] md:w-[420px] md:h-[270px] shrink-0 rounded-xl sm:rounded-2xl object-cover bg-[#161616]"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

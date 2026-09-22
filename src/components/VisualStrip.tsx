import React from 'react';

interface StripItem {
  id: string;
  src: string;
  label: string;
  category: string;
}

const STRIP_ITEMS: StripItem[] = [
  {
    id: 'strip-01',
    src: '/assets/generated/strip_01.jpg',
    label: 'Architectural Monolith',
    category: 'Form & Shadow'
  },
  {
    id: 'strip-02',
    src: '/assets/generated/strip_02.jpg',
    label: 'Precision Milled Disc',
    category: 'Tactile Material'
  },
  {
    id: 'strip-03',
    src: '/assets/generated/strip_03.jpg',
    label: 'Interface Plane',
    category: 'Digital Object'
  },
  {
    id: 'strip-04',
    src: '/assets/generated/strip_04.jpg',
    label: 'Dual Ceramic Cylinder',
    category: 'Product Study'
  },
  {
    id: 'strip-05',
    src: '/assets/generated/strip_05.jpg',
    label: 'Refractive Prism',
    category: 'Geometry & Light'
  },
  {
    id: 'strip-06',
    src: '/assets/generated/strip_06.jpg',
    label: 'Modular Capsule',
    category: 'Industrial Design'
  },
  {
    id: 'strip-07',
    src: '/assets/generated/strip_07.jpg',
    label: 'Minimalist Torus',
    category: 'Spatial Balance'
  },
  {
    id: 'strip-08',
    src: '/assets/generated/strip_08.jpg',
    label: 'System Framework',
    category: 'Structural 3D'
  }
];

export const VisualStrip: React.FC = () => {
  return (
    <section
      className="relative w-full py-12 sm:py-16 overflow-hidden border-y border-[#E6E4DD] bg-[#F7F6F0]"
      aria-label="3D visual atmosphere strip"
    >
      {/* Strip Subtitle Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-6 flex items-center justify-between text-xs text-[#888780] font-mono">
        <span className="uppercase tracking-wider">Atmospheric 3D Study · Visual Identity</span>
        <span className="hidden sm:inline">Pause on hover</span>
      </div>

      {/* Marquee Track (Duplicated for seamless looping) */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8 px-4">
          {[...STRIP_ITEMS, ...STRIP_ITEMS].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-52 sm:w-64 group relative rounded-md border border-[#E6E4DD] bg-[#FFFFFF] overflow-hidden shadow-[0_4px_16px_rgba(20,20,19,0.04)] hover:shadow-[0_12px_28px_rgba(20,20,19,0.08)] transition-all duration-300"
            >
              <div className="aspect-square w-full overflow-hidden bg-[#FAF9F5]">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="p-3 border-t border-[#E6E4DD] bg-[#FAF9F5] flex items-center justify-between text-[11px]">
                <span className="font-medium text-[#141413] truncate max-w-[120px]">
                  {item.label}
                </span>
                <span className="font-mono text-[#888780] text-[10px] uppercase">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

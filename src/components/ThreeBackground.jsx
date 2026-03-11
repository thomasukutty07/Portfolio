import React, { useMemo } from 'react';

/* Pure CSS animated background — no Three.js, no Canvas, no WebGL
   Identical visual feel to the old ThreeBackground: rotating rings + dots */

const RINGS = [
  { w: 320, h: 320, top: '8%',  left: '72%', d: 14, opacity: 0.13, color: '#5B21B6', delay: '0s'   },
  { w: 480, h: 480, top: '55%', left: '80%', d: 20, opacity: 0.10, color: '#C026D3', delay: '-6s'  },
  { w: 220, h: 220, top: '70%', left: '10%', d: 12, opacity: 0.12, color: '#5B21B6', delay: '-3s'  },
  { w: 380, h: 380, top: '25%', left: '-5%', d: 18, opacity: 0.09, color: '#C026D3', delay: '-9s'  },
  { w: 160, h: 160, top: '5%',  left: '40%', d: 10, opacity: 0.08, color: '#5B21B6', delay: '-2s'  },
];

const DOTS = [
  { size: 3, top: '15%', left: '20%', delay: '0s',   dur: '4s'  },
  { size: 2, top: '35%', left: '85%', delay: '-2s',  dur: '5s'  },
  { size: 4, top: '60%', left: '30%', delay: '-1s',  dur: '6s'  },
  { size: 2, top: '80%', left: '70%', delay: '-3s',  dur: '4.5s'},
  { size: 3, top: '10%', left: '60%', delay: '-4s',  dur: '5.5s'},
  { size: 2, top: '50%', left: '50%', delay: '-1.5s',dur: '7s'  },
  { size: 5, top: '90%', left: '20%', delay: '-2.5s',dur: '5s'  },
  { size: 2, top: '25%', left: '45%', delay: '-0.5s',dur: '6s'  },
  { size: 3, top: '70%', left: '90%', delay: '-3.5s',dur: '4s'  },
  { size: 2, top: '45%', left: '15%', delay: '-5s',  dur: '5.5s'},
  { size: 4, top: '5%',  left: '80%', delay: '-4.5s',dur: '6.5s'},
  { size: 2, top: '88%', left: '55%', delay: '-6s',  dur: '4.5s'},
];

const ThreeBackground = () => (
  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }} aria-hidden="true">
    <style>{`
      @keyframes ring-spin {
        from { transform: translate(-50%,-50%) rotate(0deg); }
        to   { transform: translate(-50%,-50%) rotate(360deg); }
      }
      @keyframes dot-float {
        0%,100% { transform: translateY(0); opacity: 0.6; }
        50%      { transform: translateY(-18px); opacity: 1; }
      }
    `}</style>

    {/* Animated rings */}
    {RINGS.map((r, i) => (
      <div key={i} style={{
        position: 'absolute',
        top: r.top, left: r.left,
        width: r.w, height: r.h,
        borderRadius: '50%',
        border: `1px solid ${r.color}`,
        opacity: r.opacity,
        animation: `ring-spin ${r.d}s linear infinite`,
        animationDelay: r.delay,
        transform: 'translate(-50%,-50%)',
      }} />
    ))}

    {/* Floating dots */}
    {DOTS.map((d, i) => (
      <div key={i} style={{
        position: 'absolute',
        top: d.top, left: d.left,
        width: d.size, height: d.size,
        borderRadius: '50%',
        background: i % 2 === 0 ? '#5B21B6' : '#C026D3',
        opacity: 0.25,
        animation: `dot-float ${d.dur} ease-in-out infinite`,
        animationDelay: d.delay,
      }} />
    ))}
  </div>
);

export default ThreeBackground;

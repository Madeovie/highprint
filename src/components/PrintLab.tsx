import { useState } from 'react';
import { RegMark, PrintLabel } from './PrintMarks';
import { useReveal } from '@/hooks/useReveal';

type Frame = {
  name: string;
  category: string;
  desc: string;
  img: string;
  alt: string;
  accent: string;
  borderClass: string;
  borderHoverClass: string;
};

const frames: Frame[] = [
  {
    name: 'Classic Wood',
    category: 'Portrait',
    desc: 'Warm natural-wood moulding. A timeless choice for individual and family portraits hung on a living-room wall.',
    img: 'https://images.pexels.com/photos/33242998/pexels-photo-33242998.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    alt: 'Nigerian man in traditional attire and cultural cap in classic wood frame',
    accent: '#c9933e',
    borderClass: 'border-[10px] border-[#9c6b2f]',
    borderHoverClass: 'group-hover:border-[#c9933e]',
  },
  {
    name: 'Black Frame',
    category: 'Passport & ID',
    desc: 'Sleek matte-black frame. Clean and professional — suited for passport photos, ID prints and official document photos.',
    img: 'https://images.pexels.com/photos/5864961/pexels-photo-5864961.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    alt: 'Nigerian man portrait suited for passport photo in black frame',
    accent: '#e0e0e0',
    borderClass: 'border-[10px] border-[#1a1a1a]',
    borderHoverClass: 'group-hover:border-[#666]',
  },
  {
    name: 'White Frame',
    category: 'Wedding',
    desc: 'Bright white frame that keeps the focus on the photograph. A popular choice for wedding and celebration prints.',
    img: 'https://images.pexels.com/photos/38477715/pexels-photo-38477715.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    alt: 'Nigerian couple in traditional attire in white frame',
    accent: '#ffffff',
    borderClass: 'border-[10px] border-[#f0eee8]',
    borderHoverClass: 'group-hover:border-white',
  },
  {
    name: 'Gold Frame',
    category: 'Family',
    desc: 'Classic gold frame with decorative detail. Adds a premium, ceremonial feel to family portraits and special occasions.',
    img: 'https://images.pexels.com/photos/20434743/pexels-photo-20434743.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    alt: 'Nigerian family in vibrant traditional attire in gold frame',
    accent: '#ffd400',
    borderClass: 'border-[10px] border-[#c4a434]',
    borderHoverClass: 'group-hover:border-[#ffd400]',
  },
  {
    name: 'Modern Slim',
    category: 'Portrait',
    desc: 'Thin metal frame with a minimalist profile. Contemporary and understated — lets the image speak for itself.',
    img: 'https://images.pexels.com/photos/39093541/pexels-photo-39093541.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    alt: 'Nigerian woman in traditional attire with white pearls and headwrap in slim modern frame',
    accent: '#00c2d6',
    borderClass: 'border-[4px] border-[#4a4a4a]',
    borderHoverClass: 'group-hover:border-[#00c2d6]',
  },
  {
    name: 'Collage Frame',
    category: 'Group & Events',
    desc: 'Multi-aperture collage frame for displaying several moments together — weddings, graduations, family gatherings.',
    img: 'https://images.pexels.com/photos/29865466/pexels-photo-29865466.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    alt: 'Nigerian couple in vibrant traditional wedding attire in collage frame',
    accent: '#e6007a',
    borderClass: 'border-[10px] border-[#5a3a5a]',
    borderHoverClass: 'group-hover:border-[#e6007a]',
  },
  {
    name: 'Tabletop Frame',
    category: 'Child Portrait',
    desc: 'Compact freestanding frame for desks and shelves. Perfect for child portraits, passport photos and small prints.',
    img: 'https://images.pexels.com/photos/37427143/pexels-photo-37427143.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    alt: 'Joyful Nigerian child in traditional blue attire in tabletop frame',
    accent: '#ff5a1f',
    borderClass: 'border-[8px] border-[#3a3a3a]',
    borderHoverClass: 'group-hover:border-[#ff5a1f]',
  },
  {
    name: 'Large Wall Frame',
    category: 'Photo Enlargement',
    desc: 'Oversized prints and enlargements in a sturdy gallery frame. Turn a favourite photograph into a statement wall piece.',
    img: 'https://images.pexels.com/photos/39093553/pexels-photo-39093553.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    alt: 'Nigerian woman in traditional attire in large wall frame',
    accent: '#1a1aff',
    borderClass: 'border-[12px] border-[#2a2a2a]',
    borderHoverClass: 'group-hover:border-[#1a1aff]',
  },
];

export default function PrintLab() {
  const ref = useReveal<HTMLElement>();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="print-lab" ref={ref} className="relative bg-[var(--near-black)] text-[var(--ivory)] py-20 md:py-32 overflow-hidden">
      {/* halftone backdrop */}
      <div className="absolute inset-0 halftone-white opacity-40 pointer-events-none" />

      <div className="relative px-5 md:px-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 reveal">
          <PrintLabel className="text-[var(--ivory)]/60">Section 04 · Frame Lab</PrintLabel>
          <span className="flex-1 h-px bg-white/15" />
          <RegMark size={12} className="text-white/40" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2 className="font-display uppercase leading-[0.82] tracking-[-0.03em] text-[16vw] md:text-[11vw] reveal">
            The Frame<br /><span className="text-outline-white">Lab</span><span className="text-[var(--cyan)]">.</span>
          </h2>
          <p className="max-w-sm font-body text-sm text-white/70 reveal">
            Different frames. Different finishes. Different ways to display a photograph. Hover a frame to inspect it.
          </p>
        </div>

        {/* Frame samples */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {frames.map((f, i) => (
            <button
              key={f.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative overflow-hidden text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                hovered === i ? 'col-span-2 md:col-span-2 row-span-2' : 'col-span-1'
              } ${hovered !== null && hovered !== i ? 'opacity-40' : 'opacity-100'}`}
              style={{ minHeight: hovered === i ? 360 : 180 }}
            >
              {/* Frame border wrapping the image */}
              <div className={`absolute inset-0 transition-colors duration-500 ${f.borderClass} ${f.borderHoverClass}`}>
                {/* Inner matboard / passe-partout */}
                <div className="absolute inset-0 border border-white/8 m-1" />
              </div>

              {/* The photograph inside the frame */}
              <div className="absolute inset-[10px] overflow-hidden">
                <img
                  src={f.img}
                  alt={f.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              {/* Label overlay */}
              <div className="relative h-full flex flex-col justify-between p-3 md:p-4 z-10" style={{ minHeight: hovered === i ? 360 : 180 }}>
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/80 bg-black/50 px-1.5 py-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <RegMark size={10} className="text-white/60" />
                </div>
                <div className="self-start bg-black/60 px-2 py-1">
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/70 block">
                    {f.category}
                  </span>
                  <h3
                    className="font-display uppercase leading-none tracking-tight transition-all duration-300"
                    style={{
                      fontSize: hovered === i ? 'clamp(1.6rem,5vw,2.8rem)' : 'clamp(0.8rem,2.5vw,1.2rem)',
                      color: hovered === i ? f.accent : 'var(--ivory)',
                    }}
                  >
                    {f.name}
                  </h3>
                  {hovered === i && (
                    <p className="mt-2 font-body text-xs md:text-sm text-white/80 max-w-sm" style={{ animation: 'hero-fade 0.4s ease both' }}>
                      {f.desc}
                    </p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

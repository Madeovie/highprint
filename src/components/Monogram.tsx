import { useState, useEffect } from 'react';
import { RegMark, PrintLabel } from './PrintMarks';
import { useReveal } from '@/hooks/useReveal';

const treatments = [
  { name: 'Sans Bold', style: { fontFamily: 'Archivo Black, sans-serif', letterSpacing: '-0.04em' }, accent: 'var(--near-black)' },
  { name: 'Outline', style: { fontFamily: 'Archivo Black, sans-serif', letterSpacing: '-0.04em', WebkitTextStroke: '2px var(--near-black)', color: 'transparent' }, accent: 'transparent' },
  { name: 'Serif Classic', style: { fontFamily: 'Georgia, serif', letterSpacing: '0.02em', fontStyle: 'italic' }, accent: 'var(--magenta)' },
  { name: 'Mono Stamp', style: { fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em', fontWeight: 700 }, accent: 'var(--electric)' },
];

const products = [
  { label: 'Shirts', img: 'https://images.pexels.com/photos/18930893/pexels-photo-18930893.jpeg?auto=compress&cs=tinysrgb&h=300&w=300' },
  { label: 'Caps', img: 'https://images.pexels.com/photos/16117426/pexels-photo-16117426.jpeg?auto=compress&cs=tinysrgb&h=300&w=300' },
  { label: 'Apparel', img: 'https://images.pexels.com/photos/6786614/pexels-photo-6786614.jpeg?auto=compress&cs=tinysrgb&h=300&w=300' },
  { label: 'Corporate', img: 'https://images.pexels.com/photos/14528152/pexels-photo-14528152.jpeg?auto=compress&cs=tinysrgb&h=300&w=300' },
];

export default function Monogram() {
  const ref = useReveal<HTMLElement>();
  const [text, setText] = useState('OG');
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setActive((a) => (a + 1) % treatments.length), 2200);
    return () => clearInterval(id);
  }, [auto]);

  const t = treatments[active];

  return (
    <section id="monogram" ref={ref} className="relative bg-[var(--ivory-deep)] py-20 md:py-32 overflow-hidden">
      <div className="px-5 md:px-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 reveal">
          <PrintLabel>Section 06 · Monogram</PrintLabel>
          <span className="flex-1 h-px bg-black/15" />
          <RegMark size={12} className="text-black/40" />
        </div>
        <h2 className="font-display uppercase leading-[0.82] tracking-[-0.03em] text-[14vw] md:text-[10vw] mb-14 reveal">
          Your Name.<br />Your Mark<span className="text-[var(--orange)]">.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Monogram generator demo */}
          <div className="reveal-scale">
            <div className="relative bg-[var(--ivory)] border border-black/15 aspect-square flex items-center justify-center overflow-hidden crop-marks">
              {/* halftone backdrop */}
              <div className="absolute inset-0 halftone opacity-50" />

              {/* corner reg marks */}
              <RegMark size={14} className="absolute top-4 left-4 text-black/40" />
              <RegMark size={14} className="absolute top-4 right-4 text-black/40" />
              <RegMark size={14} className="absolute bottom-4 left-4 text-black/40" />
              <RegMark size={14} className="absolute bottom-4 right-4 text-black/40" />

              {/* The monogram */}
              <div
                key={active}
                className="relative font-display leading-none select-none"
                style={{ fontSize: 'clamp(6rem,28vw,14rem)', ...t.style, color: t.accent !== 'transparent' ? t.accent : undefined, animation: 'hero-fade 0.5s ease both' }}
              >
                {text.slice(0, 4).toUpperCase()}
              </div>

              {/* treatment label */}
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">
                {t.name} · Treatment {active + 1}/{treatments.length}
              </span>
            </div>

            {/* Controls */}
            <div className="mt-5 flex flex-col gap-4">
              <label className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50 w-20">Initials</span>
                <input
                  value={text}
                  onChange={(e) => { setText(e.target.value); setAuto(false); }}
                  maxLength={4}
                  placeholder="OG"
                  className="flex-1 bg-transparent border-b border-black/25 focus:border-[var(--near-black)] outline-none font-grotesk text-xl uppercase tracking-wide py-1"
                />
              </label>
              <div className="flex flex-wrap gap-2">
                {treatments.map((tr, i) => (
                  <button
                    key={tr.name}
                    onClick={() => { setActive(i); setAuto(false); }}
                    className={`font-grotesk text-xs font-bold uppercase tracking-wide px-3 py-2 border transition-colors ${
                      active === i ? 'bg-[var(--near-black)] text-[var(--ivory)] border-[var(--near-black)]' : 'border-black/20 hover:border-black/60'
                    }`}
                  >
                    {tr.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product showcase */}
          <div className="reveal">
            <p className="font-body text-base text-black/70 mb-6 max-w-md">
              We monogram onto shirts, caps, bags, towels and corporate gifts — each piece personalised with precision embroidery on industrial machines and premium thread.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {products.map((p) => (
                <div key={p.label} className="relative overflow-hidden aspect-square group">
                  <img src={p.img} alt={`Monogrammed ${p.label}`} loading="lazy" className="w-full h-full object-cover cmyk-img transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
            <a href="#start" className="mt-6 inline-flex items-center gap-2 font-grotesk text-sm font-bold uppercase tracking-wide border-b-2 border-[var(--orange)] pb-1">
              Personalise your pieces
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

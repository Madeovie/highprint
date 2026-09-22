import { ArrowUpRight } from 'lucide-react';
import { RegMark, PrintLabel, CropFrame } from './PrintMarks';
import { useReveal } from '@/hooks/useReveal';

type Capability = { label: string; img: string; alt: string };

type Service = {
  num: string;
  title: string;
  tagline: string;
  items: string[];
  accent: string;
  layout: 'left' | 'right';
  img: string;
  capabilities?: Capability[];
};

const services: Service[] = [
  {
    num: '01',
    title: 'Printing',
    tagline: 'More than paper.',
    items: ['Business cards', 'Flyers', 'Brochures', 'Posters', 'Menus', 'Invitations', 'Packaging', 'Labels', 'Stickers'],
    accent: 'var(--electric)',
    layout: 'left',
    img: 'https://images.pexels.com/photos/4466420/pexels-photo-4466420.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    capabilities: [
      { label: 'UV Printing', img: 'https://images.pexels.com/photos/7005751/pexels-photo-7005751.jpeg?auto=compress&cs=tinysrgb&h=200&w=200', alt: 'Finished UV-printed acrylic award plaque' },
      { label: 'DTF Printing', img: 'https://images.pexels.com/photos/18930893/pexels-photo-18930893.jpeg?auto=compress&cs=tinysrgb&h=200&w=200', alt: 'Finished DTF-printed branded t-shirts' },
      { label: 'DI Printing', img: 'https://images.pexels.com/photos/8245196/pexels-photo-8245196.jpeg?auto=compress&cs=tinysrgb&h=200&w=200', alt: 'Finished digitally printed invitation cards' },
    ],
  },
  {
    num: '02',
    title: 'Branding',
    tagline: 'Identity made visible.',
    items: ['Corporate branding', 'Signage', 'Promotional branding', 'Vehicle branding', 'Customization'],
    accent: 'var(--magenta)',
    layout: 'right',
    img: 'https://images.pexels.com/photos/36402931/pexels-photo-36402931.png?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    num: '03',
    title: 'Monogram',
    tagline: 'Your name, your mark.',
    items: ['Embroidery', 'Apparel', 'Caps & accessories', 'Corporate orders'],
    accent: 'var(--orange)',
    layout: 'left',
    img: 'https://images.pexels.com/photos/16117426/pexels-photo-16117426.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    num: '04',
    title: 'Photolab',
    tagline: 'Print it. Frame it. Keep it.',
    items: ['Passport & ID', 'Photo printing', 'Photo enlargement', 'Photo restoration', 'Photo framing'],
    accent: 'var(--cyan)',
    layout: 'right',
    img: 'https://images.pexels.com/photos/7089003/pexels-photo-7089003.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    num: '05',
    title: 'Large Format',
    tagline: 'Big prints. Bold presence.',
    items: ['Flex banners', 'Window graphics', 'Reflective', 'SAV', 'Large signage'],
    accent: 'var(--electric)',
    layout: 'left',
    img: 'https://images.pexels.com/photos/32459951/pexels-photo-32459951.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
];

export default function Services() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="services" ref={ref} className="relative bg-[var(--ivory)] py-20 md:py-32">
      {/* Section header */}
      <div className="px-5 md:px-10 mb-16 md:mb-24">
        <div className="flex items-center gap-3 mb-6 reveal">
          <PrintLabel>Section 02 · Services</PrintLabel>
          <span className="flex-1 h-px bg-black/15" />
          <RegMark size={12} className="text-black/40" />
        </div>
        <h2 className="font-display uppercase leading-[0.85] tracking-[-0.03em] reveal">
          <span className="block text-[12vw] md:text-[9vw]">We Print</span>
          <span className="block text-[12vw] md:text-[9vw] text-outline">More Than</span>
          <span className="block text-[12vw] md:text-[9vw]">Paper<span className="text-[var(--electric)]">.</span></span>
        </h2>
      </div>

      {/* Service blocks — each visually distinct */}
      <div className="space-y-20 md:space-y-32">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`px-5 md:px-10 grid md:grid-cols-12 gap-6 md:gap-10 items-center ${s.layout === 'right' ? 'md:[direction:rtl]' : ''}`}
          >
            {/* Image side */}
            <div className={`md:col-span-5 reveal-scale [direction:ltr] ${s.layout === 'right' ? 'md:order-2' : ''}`}>
              <CropFrame className="overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover cmyk-img" />
                  <div className="absolute inset-0 mix-blend-multiply opacity-30" style={{ background: s.accent }} />
                </div>
              </CropFrame>
              <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">
                {String(i + 1).padStart(2, '0')} / 05 — {s.tagline}
              </span>

              {/* Capability thumbnails (Printing only) */}
              {s.capabilities && (
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {s.capabilities.map((c) => (
                    <div key={c.label} className="relative overflow-hidden aspect-square group">
                      <img src={c.img} alt={c.alt} loading="lazy" className="w-full h-full object-cover cmyk-img transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />
                      <span className="absolute bottom-1.5 left-1.5 right-1.5 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.1em] text-white text-center block">
                        {c.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Text side */}
            <div className="md:col-span-7 [direction:ltr]">
              <div className="flex items-baseline gap-4 mb-6 reveal">
                <span className="font-display text-6xl md:text-8xl leading-none" style={{ color: s.accent }}>{s.num}</span>
                <h3 className="font-display uppercase text-5xl md:text-7xl leading-[0.85] tracking-tight">{s.title}</h3>
              </div>

              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3 reveal">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-grotesk text-sm md:text-base border-b border-black/10 pb-2">
                    <span className="inline-block w-1.5 h-1.5" style={{ background: s.accent }} />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#start"
                className="mt-8 inline-flex items-center gap-1.5 font-grotesk text-sm font-bold uppercase tracking-wide group reveal"
                style={{ color: s.accent === 'var(--cyan)' ? 'var(--near-black)' : 'var(--near-black)' }}
              >
                <span className="border-b-2 pb-0.5" style={{ borderColor: s.accent }}>Start a {s.title} project</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { RegMark, PrintLabel } from './PrintMarks';
import { useReveal } from '@/hooks/useReveal';

type FrameCard = {
  name: string;
  category: string;
  img: string;
  alt: string;
  span: string;
  borderColor: string;
  borderHover: string;
};

const frames: FrameCard[] = [
  {
    name: 'Classic Wood',
    category: 'Portrait',
    img: 'https://images.pexels.com/photos/33242998/pexels-photo-33242998.jpeg?auto=compress&cs=tinysrgb&h=600&w=450',
    alt: 'Nigerian man in traditional attire and cultural cap in classic wood frame',
    span: 'row-span-2',
    borderColor: '#9c6b2f',
    borderHover: '#c9933e',
  },
  {
    name: 'Black Frame',
    category: 'Passport & ID',
    img: 'https://images.pexels.com/photos/5864961/pexels-photo-5864961.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Nigerian man portrait in black frame',
    span: '',
    borderColor: '#1a1a1a',
    borderHover: '#666',
  },
  {
    name: 'White Frame',
    category: 'Wedding',
    img: 'https://images.pexels.com/photos/38477715/pexels-photo-38477715.jpeg?auto=compress&cs=tinysrgb&h=600&w=450',
    alt: 'Nigerian couple in traditional attire in white frame',
    span: 'row-span-2',
    borderColor: '#f0eee8',
    borderHover: '#ffffff',
  },
  {
    name: 'Gold Frame',
    category: 'Family',
    img: 'https://images.pexels.com/photos/20434743/pexels-photo-20434743.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Nigerian family in vibrant traditional attire in gold frame',
    span: '',
    borderColor: '#c4a434',
    borderHover: '#ffd400',
  },
  {
    name: 'Modern Slim',
    category: 'Portrait',
    img: 'https://images.pexels.com/photos/39093541/pexels-photo-39093541.jpeg?auto=compress&cs=tinysrgb&h=600&w=450',
    alt: 'Nigerian woman in traditional attire with pearls and headwrap in slim modern frame',
    span: 'row-span-2',
    borderColor: '#4a4a4a',
    borderHover: '#00c2d6',
  },
  {
    name: 'Collage Frame',
    category: 'Group & Events',
    img: 'https://images.pexels.com/photos/29865466/pexels-photo-29865466.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Nigerian couple in vibrant traditional wedding attire in collage frame',
    span: '',
    borderColor: '#5a3a5a',
    borderHover: '#e6007a',
  },
  {
    name: 'Tabletop Frame',
    category: 'Child Portrait',
    img: 'https://images.pexels.com/photos/37427143/pexels-photo-37427143.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Joyful Nigerian child in traditional blue attire in tabletop frame',
    span: '',
    borderColor: '#3a3a3a',
    borderHover: '#ff5a1f',
  },
  {
    name: 'Large Wall Frame',
    category: 'Photo Enlargement',
    img: 'https://images.pexels.com/photos/39093553/pexels-photo-39093553.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Nigerian woman in traditional attire in large wall frame',
    span: '',
    borderColor: '#2a2a2a',
    borderHover: '#1a1aff',
  },
];

const services = [
  'Passport & ID',
  'Photo Printing',
  'Photo Enlargement',
  'Photo Restoration',
  'Photo Framing',
];

export default function PhotoLab() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="photolab" ref={ref} className="relative bg-[var(--navy)] text-[var(--ivory)] py-20 md:py-32 overflow-hidden">
      <div className="px-5 md:px-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 reveal">
          <PrintLabel className="text-white/60">Section 07 · Photolab</PrintLabel>
          <span className="flex-1 h-px bg-white/15" />
          <RegMark size={12} className="text-white/40" />
        </div>
        <h2 className="font-display uppercase leading-[0.8] tracking-[-0.03em] text-[14vw] md:text-[10vw] mb-4 reveal">
          Print It.<br />Frame It.<br /><span className="text-[var(--cyan)]">Keep It.</span>
        </h2>
        <p className="max-w-md font-body text-sm text-white/60 mb-12 reveal">
          From passport and ID photos to family portraits, wedding prints and old photo restoration — we print, enlarge and frame your photographs in classic wood, black, white, gold, modern slim, collage, tabletop and large wall frames.
        </p>

        {/* Frame grid — Nigerian subjects in physical frames */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-3 md:gap-4 mb-12">
          {frames.map((f, i) => (
            <figure key={i} className={`relative overflow-hidden group reveal-scale ${f.span}`}>
              {/* Physical frame border */}
              <div
                className="absolute inset-0 z-10 pointer-events-none transition-colors duration-500"
                style={{
                  borderWidth: f.name === 'Modern Slim' ? '4px' : f.name === 'Large Wall Frame' ? '12px' : '8px',
                  borderStyle: 'solid',
                  borderColor: f.borderColor,
                }}
              >
                <div
                  className="absolute inset-0 border border-white/8 m-1 transition-colors duration-500 group-hover:border-white/20"
                />
              </div>
              {/* Hover border color shift via overlay */}
              <div
                className="absolute inset-0 z-[11] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: `inset 0 0 0 ${f.name === 'Modern Slim' ? '4px' : f.name === 'Large Wall Frame' ? '12px' : '8px'} ${f.borderHover}`,
                }}
              />
              <img src={f.img} alt={f.alt} loading="lazy" className="w-full h-full object-cover cmyk-img transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors" />
              <figcaption className="absolute bottom-3 left-3 right-3 z-20">
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/70 block">{f.category}</span>
                <span className="font-display uppercase text-xs md:text-sm text-white/95 block leading-tight">{f.name}</span>
              </figcaption>
              <RegMark size={10} className="absolute top-3 right-3 z-20 text-white/50" />
            </figure>
          ))}
        </div>

        {/* Services list */}
        <div className="flex flex-wrap gap-x-5 gap-y-3 reveal">
          {services.map((s) => (
            <span key={s} className="font-grotesk text-xs md:text-sm font-medium uppercase tracking-wide text-white/80 border-b border-white/20 pb-1">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

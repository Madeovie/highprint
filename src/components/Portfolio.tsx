import { useState, useMemo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { RegMark, PrintLabel } from './PrintMarks';
import { useReveal } from '@/hooks/useReveal';

type Category = 'PRINT' | 'BRANDING' | 'MONOGRAM' | 'PHOTOLAB' | 'LARGE FORMAT';

type Project = {
  id: string;
  num: string;
  name: string;
  category: Category;
  type: string;
  img: string;
  span: string;
  alt: string;
};

const projects: Project[] = [
  { id: 'p01', num: '001', name: 'Okene Restaurant', category: 'BRANDING', type: 'Brand Identity + Print', img: 'https://images.pexels.com/photos/7967626/pexels-photo-7967626.jpeg?auto=compress&cs=tinysrgb&h=600&w=450', span: 'row-span-2', alt: 'Restaurant branding on paper bag' },
  { id: 'p02', num: '002', name: 'Kogi Tech Hub', category: 'PRINT', type: 'Business Cards + Flyers', img: 'https://images.pexels.com/photos/4466420/pexels-photo-4466420.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', span: '', alt: 'Stack of finished business cards' },
  { id: 'p03', num: '003', name: 'Family Portrait', category: 'PHOTOLAB', type: 'Photo Printing + Framing', img: 'https://images.pexels.com/photos/33242998/pexels-photo-33242998.jpeg?auto=compress&cs=tinysrgb&h=600&w=450', span: 'row-span-2', alt: 'Nigerian man portrait in traditional cap' },
  { id: 'p04', num: '004', name: 'Wedding Celebration', category: 'PHOTOLAB', type: 'Photo Printing + Framing', img: 'https://images.pexels.com/photos/29865466/pexels-photo-29865466.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', span: '', alt: 'Nigerian wedding couple in traditional attire' },
  { id: 'p05', num: '005', name: 'Corporate Gift Set', category: 'MONOGRAM', type: 'Monogrammed Caps + Apparel', img: 'https://images.pexels.com/photos/16117426/pexels-photo-16117426.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', span: '', alt: 'Embroidered cap with logo detail' },
  { id: 'p06', num: '006', name: 'Kabba Coffee Co.', category: 'BRANDING', type: 'Packaging + Labels', img: 'https://images.pexels.com/photos/29914081/pexels-photo-29914081.jpeg?auto=compress&cs=tinysrgb&h=600&w=450', span: 'row-span-2', alt: 'Custom printed kraft paper bag' },
  { id: 'p07', num: '007', name: 'Wedding Suite', category: 'PRINT', type: 'Invitation Cards', img: 'https://images.pexels.com/photos/8245196/pexels-photo-8245196.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', span: '', alt: 'Elegant wedding invitation card layout' },
  { id: 'p08', num: '008', name: 'Branded Apparel', category: 'MONOGRAM', type: 'Embroidered Corporate Wear', img: 'https://images.pexels.com/photos/18930893/pexels-photo-18930893.jpeg?auto=compress&cs=tinysrgb&h=600&w=450', span: 'row-span-2', alt: 'Finished branded t-shirts on models' },
  { id: 'p09', num: '009', name: 'City Billboard', category: 'LARGE FORMAT', type: 'Flex Banner + Outdoor Signage', img: 'https://images.pexels.com/photos/32459951/pexels-photo-32459951.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', span: '', alt: 'Large format outdoor advertising billboards' },
  { id: 'p10', num: '010', name: 'Food Delivery Fleet', category: 'BRANDING', type: 'Vehicle Wrap + Brand Identity', img: 'https://images.pexels.com/photos/36402931/pexels-photo-36402931.png?auto=compress&cs=tinysrgb&h=400&w=600', span: '', alt: 'Branded delivery van with full vehicle wrap in Nigeria' },
];

const filters: ('ALL' | Category)[] = ['ALL', 'PRINT', 'BRANDING', 'MONOGRAM', 'PHOTOLAB', 'LARGE FORMAT'];

export default function Portfolio() {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState<'ALL' | Category>('ALL');

  const filtered = useMemo(
    () => (active === 'ALL' ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="work" ref={ref} className="relative bg-[var(--ivory-deep)] py-20 md:py-32">
      <div className="px-5 md:px-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 reveal">
          <PrintLabel>Section 03 · Selected Work</PrintLabel>
          <span className="flex-1 h-px bg-black/15" />
          <RegMark size={12} className="text-black/40" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <h2 className="font-display uppercase leading-[0.82] tracking-[-0.03em] text-[14vw] md:text-[10vw] reveal">
            What We've<br />Made<span className="text-[var(--magenta)]">.</span>
          </h2>
          <p className="max-w-xs font-body text-sm text-black/60 reveal">
            A selection of recent work across print, branding, monogram, photolab and large format. Filter by discipline.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10 reveal">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-grotesk text-xs md:text-sm font-bold uppercase tracking-wide px-4 py-2 border transition-colors ${
                active === f
                  ? 'bg-[var(--near-black)] text-[var(--ivory)] border-[var(--near-black)]'
                  : 'border-black/20 hover:border-black/60'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-3 md:gap-4">
          {filtered.map((p) => (
            <article
              key={p.id}
              className={`group relative overflow-hidden bg-black reveal-scale ${p.span}`}
            >
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover cmyk-img transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-colors duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--cyan)]">Project {p.num}</span>
                <h3 className="font-display uppercase text-lg md:text-xl text-white leading-tight mt-1">{p.name}</h3>
                <span className="font-grotesk text-xs text-white/80 mt-1">{p.type}</span>
                <span className="mt-2 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                  <RegMark size={8} color="white" /> {p.category}
                </span>
              </div>
              {/* Always-visible number tag */}
              <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80 mix-blend-difference">
                {p.num}
              </span>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center reveal">
          <a href="#start" className="group inline-flex items-center gap-2 font-grotesk text-sm font-bold uppercase tracking-wide border-b-2 border-[var(--near-black)] pb-1">
            Start your project
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

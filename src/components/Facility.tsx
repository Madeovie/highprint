import { RegMark, PrintLabel, CropFrame } from './PrintMarks';
import { useReveal } from '@/hooks/useReveal';

const facility = [
  { src: 'https://images.pexels.com/photos/31788399/pexels-photo-31788399.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', alt: 'Modern printing facility with commercial equipment', caption: 'Press room — commercial digital production', span: 'md:col-span-2 md:row-span-2' },
  { src: 'https://images.pexels.com/photos/20042067/pexels-photo-20042067.jpeg?auto=compress&cs=tinysrgb&h=300&w=400', alt: 'Modern printing machine with touchscreen interface', caption: 'Digital press — DI printing', span: '' },
  { src: 'https://images.pexels.com/photos/32641546/pexels-photo-32641546.jpeg?auto=compress&cs=tinysrgb&h=300&w=400', alt: 'Commercial embroidery machines in textile workshop', caption: 'Industrial embroidery & monogramming', span: '' },
  { src: 'https://images.pexels.com/photos/17235421/pexels-photo-17235421.jpeg?auto=compress&cs=tinysrgb&h=300&w=400', alt: 'Modern printer with touchscreen interface', caption: 'UV printing station', span: '' },
  { src: 'https://images.pexels.com/photos/5727002/pexels-photo-5727002.jpeg?auto=compress&cs=tinysrgb&h=300&w=400', alt: 'Professional printer producing custom designs', caption: 'DTF printing — apparel production', span: '' },
];

export default function Facility() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="relative bg-[var(--ivory)] py-20 md:py-32">
      <div className="px-5 md:px-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 reveal">
          <PrintLabel>Section 08 · Production</PrintLabel>
          <span className="flex-1 h-px bg-black/15" />
          <RegMark size={12} className="text-black/40" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2 className="font-display uppercase leading-[0.82] tracking-[-0.03em] text-[13vw] md:text-[9vw] reveal">
            Behind The<br /><span className="text-outline">Finished</span><br />Product<span className="text-[var(--electric)]">.</span>
          </h2>
          <p className="max-w-sm font-body text-sm text-black/60 reveal">
            Modern commercial equipment — digital presses, UV and DTF printers, industrial embroidery machines. The technology behind every finished product.
          </p>
        </div>

        {/* Facility grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {facility.map((f, i) => (
            <div key={i} className={`relative overflow-hidden group reveal-scale ${f.span}`}>
              <CropFrame className="w-full h-full">
                <img src={f.src} alt={f.alt} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 cmyk-img" />
              </CropFrame>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors flex items-end p-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
                  {f.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* credibility line */}
        <div className="mt-12 flex flex-wrap items-center gap-4 reveal">
          <span className="font-display uppercase text-2xl md:text-3xl">Real people</span>
          <span className="text-[var(--electric)] font-display text-2xl">+</span>
          <span className="font-display uppercase text-2xl md:text-3xl">Real equipment</span>
          <span className="text-[var(--electric)] font-display text-2xl">+</span>
          <span className="font-display uppercase text-2xl md:text-3xl">Real production<span className="text-[var(--magenta)]">.</span></span>
        </div>
      </div>
    </section>
  );
}

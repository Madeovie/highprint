import { RegMark, PrintLabel } from './PrintMarks';
import { useReveal } from '@/hooks/useReveal';

const stages = [
  { num: '01', title: 'Idea', body: 'Tell us what you want to create. A business card, a brand, a monogrammed gift, a portrait. Every project starts with a conversation.', accent: 'var(--electric)' },
  { num: '02', title: 'Prepare', body: 'Artwork, dimensions, colours and materials are prepared. We refine the design and confirm every production detail with you.', accent: 'var(--magenta)' },
  { num: '03', title: 'Produce', body: 'Your project moves through the appropriate production process — press, embroidery, photography, cutting and finishing.', accent: 'var(--orange)' },
  { num: '04', title: 'Finish', body: 'The final product is checked, finished and prepared for delivery or collection. Quality control on every piece.', accent: 'var(--cyan)' },
];

export default function Process() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative bg-[var(--ivory)] py-20 md:py-32">
      <div className="px-5 md:px-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 reveal">
          <PrintLabel>Section 05 · Process</PrintLabel>
          <span className="flex-1 h-px bg-black/15" />
          <RegMark size={12} className="text-black/40" />
        </div>
        <h2 className="font-display uppercase leading-[0.82] tracking-[-0.03em] text-[11vw] md:text-[7vw] mb-16 reveal">
          Idea <span className="text-black/30">→</span> Design <span className="text-black/30">→</span> Produce <span className="text-black/30">→</span> Finish<span className="text-[var(--electric)]">.</span>
        </h2>

        {/* Stages — editorial timeline */}
        <div className="grid md:grid-cols-4 gap-px bg-black/10 border border-black/10">
          {stages.map((s, i) => (
            <div
              key={s.num}
              className="relative bg-[var(--ivory)] p-6 md:p-8 min-h-[300px] md:min-h-[360px] flex flex-col justify-between reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Massive number */}
              <div className="relative">
                <span
                  className="font-display leading-none block"
                  style={{ fontSize: 'clamp(5rem,16vw,11rem)', color: s.accent }}
                >
                  {s.num}
                </span>
                <RegMark size={12} className="absolute top-2 right-0 text-black/30" />
              </div>

              <div>
                <h3 className="font-display uppercase text-2xl md:text-3xl tracking-tight mb-3">{s.title}</h3>
                <p className="font-body text-sm leading-relaxed text-black/70">{s.body}</p>
              </div>

              {/* connecting arrow on desktop */}
              {i < stages.length - 1 && (
                <span className="hidden md:block absolute top-1/2 -right-3 z-10 text-black/30 font-display text-xl">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { RegMark, PrintLabel } from './PrintMarks';
import { useReveal } from '@/hooks/useReveal';
import { stats, testimonials } from '@/data/business';

export default function Stats() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative bg-[var(--ivory-deep)] py-20 md:py-32">
      <div className="px-5 md:px-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 reveal">
          <PrintLabel>Section 09 · Proof</PrintLabel>
          <span className="flex-1 h-px bg-black/15" />
          <RegMark size={12} className="text-black/40" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10 border border-black/10 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="bg-[var(--ivory-deep)] p-6 md:p-10 reveal">
              <span className="font-display uppercase leading-none tracking-tight block" style={{ fontSize: 'clamp(2.5rem,8vw,5.5rem)' }}>
                {s.value}
              </span>
              <span className="mt-3 block font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-black/55">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="flex items-center gap-3 mb-10 reveal">
          <PrintLabel>Client Words</PrintLabel>
          <span className="flex-1 h-px bg-black/15" />
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <figure key={i} className="relative bg-[var(--ivory)] border border-black/12 p-6 md:p-8 flex flex-col reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="font-display text-5xl leading-none text-[var(--electric)] mb-4">"</span>
              <blockquote className="font-body text-base leading-relaxed text-black/80 flex-1">{t.quote}</blockquote>
              <figcaption className="mt-6 pt-4 border-t border-black/10">
                <span className="font-grotesk text-sm font-bold uppercase tracking-wide block">{t.author}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">{t.role} · {t.location}</span>
              </figcaption>
              <RegMark size={10} className="absolute top-3 right-3 text-black/25" />
            </figure>
          ))}
        </div>

        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-black/40 reveal">
          Figures and testimonials are editable placeholders.
        </p>
      </div>
    </section>
  );
}

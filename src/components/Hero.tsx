import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { RegMark, PrintLabel, CropFrame } from './PrintMarks';
import { business } from '@/data/business';
import { whatsappLink } from '@/lib/whatsapp';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-[var(--ivory)] print-grid">
      {/* Top meta bar */}
      <div className="absolute top-20 md:top-30 left-0 right-0 px-5 md:px-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-black/50 hero-fade z-10" style={{ animationDelay: '0.2s' }}>
        <PrintLabel>{business.area} · NG</PrintLabel>
        <span className="hidden sm:flex items-center gap-2"><RegMark size={10} /> CMYK / 300 DPI</span>
      </div>

      {/* Two-column layout */}
      <div className="relative z-10 min-h-screen flex items-center px-5 md:px-10 pt-28 md:pt-36 pb-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 w-full items-center">

          {/* Left — headline + copy + CTAs */}
          <div className="order-1">
            <h1 className="font-display uppercase leading-[0.82] tracking-[-0.03em] select-none">
              <span className="block text-[16vw] md:text-[7.5vw] hero-rise" style={{ animationDelay: '0.05s' }}>From</span>
              <span className="block text-[18vw] md:text-[8.5vw] text-[var(--electric)] hero-rise cmyk-hover" style={{ animationDelay: '0.18s' }}>Idea</span>
              <span className="block text-[16vw] md:text-[7.5vw] hero-rise" style={{ animationDelay: '0.3s' }}>
                <span className="text-outline">To</span> Finished
              </span>
              <span className="block text-[18vw] md:text-[8.5vw] text-[var(--near-black)] hero-rise" style={{ animationDelay: '0.42s' }}>
                Product<span className="text-[var(--magenta)]">.</span>
              </span>
            </h1>

            <p className="mt-6 md:mt-8 max-w-md font-body text-sm md:text-lg leading-relaxed text-black/70 hero-fade" style={{ animationDelay: '0.6s' }}>
              We turn ideas into printed, branded and personalised products — from everyday business materials to custom projects.
            </p>

            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-start gap-3 hero-fade" style={{ animationDelay: '0.75s' }}>
              <a
                href="#start"
                className="group inline-flex items-center gap-2 bg-[var(--near-black)] text-[var(--ivory)] px-7 py-4 font-grotesk text-sm font-bold uppercase tracking-wide hover:bg-[var(--electric)] transition-colors"
              >
                Start a Project
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 border border-black/25 px-7 py-4 font-grotesk text-sm font-bold uppercase tracking-wide hover:border-[var(--near-black)] hover:bg-black/5 transition-colors"
              >
                Explore Our Work
                <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* WhatsApp quick link */}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-black/50 hover:text-[var(--electric)] transition-colors hero-fade"
              style={{ animationDelay: '0.9s' }}
            >
              <RegMark size={10} /> Or chat with us on WhatsApp →
            </a>
          </div>

          {/* Right — single premium Nigerian image */}
          <div className="order-2 hero-fade" style={{ animationDelay: '0.5s' }}>
            <CropFrame className="overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8490097/pexels-photo-8490097.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
                  alt="High Prints worktable — a premium composition of finished products: business cards, stationery, branded materials and printed items on a dark studio desk"
                  loading="eager"
                  className="w-full h-full object-cover cmyk-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                {/* Production label overlay */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] bg-[var(--near-black)] text-[var(--ivory)] px-2 py-1">
                    PRINTING + BRANDING + MONOGRAM + PHOTOLAB + LARGE FORMAT
                  </span>
                  <RegMark size={10} color="white" />
                </div>
              </div>
            </CropFrame>
            <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">
              Okene · Kogi State · Nigeria
            </span>
          </div>
        </div>
      </div>

      {/* Bottom scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-black/50 hero-fade z-10" style={{ animationDelay: '1.1s' }}>
        <span>Scroll</span>
        <span className="w-px h-8 bg-black/30 animate-pulse" />
      </div>
    </section>
  );
}

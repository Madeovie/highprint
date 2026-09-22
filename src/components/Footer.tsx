import { ArrowUpRight, Instagram, Facebook, MessageCircle, Phone, Mail } from 'lucide-react';
import { RegMark } from './PrintMarks';
import { business } from '@/data/business';
import { whatsappLink } from '@/lib/whatsapp';

const cols = [
  { title: 'Services', links: ['Print', 'Branding', 'Monogram', 'Photolab', 'Large Format'] },
  { title: 'Studio', links: ['Work', 'Print Lab', 'About', 'Start a Project'] },
];

export default function Footer() {
  return (
    <footer className="relative bg-[var(--ivory-deep)] pt-20 md:pt-32 pb-10 overflow-hidden">
      <div className="px-5 md:px-10">
        {/* Massive headline */}
        <h2 className="font-display uppercase leading-[0.78] tracking-[-0.04em] reveal">
          <span className="block text-[16vw] md:text-[12vw]">From Idea</span>
          <span className="block text-[16vw] md:text-[12vw] text-outline">To Finished</span>
          <span className="block text-[16vw] md:text-[12vw]">Product<span className="text-[var(--magenta)]">.</span></span>
        </h2>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pb-12 border-b border-black/12">
          {cols.map((c) => (
            <div key={c.title}>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50 block mb-4">{c.title}</span>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="font-grotesk text-sm font-medium uppercase tracking-wide hover:text-[var(--electric)] transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50 block mb-4">Contact</span>
            <ul className="space-y-2">
              <li><a href={`tel:${business.phoneRaw}`} className="inline-flex items-center gap-2 font-grotesk text-sm hover:text-[var(--electric)] transition-colors"><Phone size={14} /> {business.phone}</a></li>
              <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-grotesk text-sm hover:text-[#25D366] transition-colors"><MessageCircle size={14} /> WhatsApp</a></li>
              <li><a href={`mailto:${business.email}`} className="inline-flex items-center gap-2 font-grotesk text-sm hover:text-[var(--electric)] transition-colors"><Mail size={14} /> {business.email}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-8">
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 bg-[var(--near-black)]" />
            <span className="font-display text-sm uppercase tracking-tight">{business.name}</span>
          </div>

          <div className="flex items-center gap-5">
            <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[var(--magenta)] transition-colors"><Instagram size={20} /></a>
            <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[var(--electric)] transition-colors"><Facebook size={20} /></a>
            <a href="#start" className="group inline-flex items-center gap-1 font-grotesk text-xs font-bold uppercase tracking-wide">
              Start a Project <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">
          © {new Date().getFullYear()} {business.name}. {business.area}, {business.country}.
        </p>
      </div>

      {/* Registration mark graphic */}
      <div className="mt-10 flex justify-center">
        <div className="flex items-center gap-8 text-black/25">
          <RegMark size={20} />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">CMYK / 300 DPI / Proof</span>
          <RegMark size={20} />
        </div>
      </div>
    </footer>
  );
}

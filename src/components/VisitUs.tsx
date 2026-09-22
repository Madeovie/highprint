import { MapPin, Clock, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { RegMark, PrintLabel } from './PrintMarks';
import { useReveal } from '@/hooks/useReveal';
import { business } from '@/data/business';
import { whatsappLink } from '@/lib/whatsapp';

export default function VisitUs() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative bg-[var(--ivory)] py-20 md:py-28">
      <div className="px-5 md:px-10">
        <div className="flex items-center gap-3 mb-6 reveal">
          <PrintLabel>Section 11 · Visit Us</PrintLabel>
          <span className="flex-1 h-px bg-black/15" />
          <RegMark size={12} className="text-black/40" />
        </div>
        <h2 className="font-display uppercase leading-[0.85] tracking-[-0.03em] text-[12vw] md:text-[8vw] mb-12 reveal">
          Come To The<br />Print Shop<span className="text-[var(--electric)]">.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {/* Address */}
          <div className="reveal">
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={18} className="text-[var(--electric)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">Address</span>
            </div>
            <p className="font-grotesk text-lg leading-relaxed">{business.address}</p>
            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(business.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 font-grotesk text-sm font-bold uppercase tracking-wide border-b-2 border-[var(--near-black)] pb-0.5"
            >
              Open in Maps
            </a>
          </div>

          {/* Hours */}
          <div className="reveal">
            <div className="flex items-center gap-2 mb-3">
              <Clock size={18} className="text-[var(--electric)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">Opening Hours</span>
            </div>
            <ul className="space-y-2">
              {business.hours.map((h) => (
                <li key={h.day} className="flex justify-between border-b border-black/10 pb-2 font-grotesk text-sm">
                  <span>{h.day}</span>
                  <span className="text-black/60">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="reveal">
            <div className="flex items-center gap-2 mb-3">
              <Phone size={18} className="text-[var(--electric)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">Contact</span>
            </div>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${business.phoneRaw}`} className="font-grotesk text-lg hover:text-[var(--electric)] transition-colors">{business.phone}</a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-grotesk text-lg hover:text-[#25D366] transition-colors">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="font-grotesk text-lg hover:text-[var(--electric)] transition-colors">{business.email}</a>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-5">
              <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[var(--magenta)] transition-colors"><Instagram size={22} /></a>
              <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[var(--electric)] transition-colors"><Facebook size={22} /></a>
              <a href={business.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="font-mono text-sm font-bold uppercase hover:text-[var(--cyan)] transition-colors">TT</a>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-10 relative h-[280px] md:h-[360px] bg-[var(--ivory-deep)] border border-black/10 overflow-hidden crop-marks reveal-scale">
          <div className="absolute inset-0 halftone opacity-60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <MapPin size={32} className="text-[var(--near-black)] mb-2" />
            <span className="font-display uppercase text-2xl md:text-3xl">{business.area}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50 mt-1">Google Maps embed — replace placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}

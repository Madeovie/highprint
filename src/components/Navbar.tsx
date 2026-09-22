import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { business } from '@/data/business';
import { whatsappLink } from '@/lib/whatsapp';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Print Lab', href: '#print-lab' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
  }, [open]);

  return (
    <>
      {/* Lead-gen offer bar */}
      <div className="fixed top-0 left-0 right-0 z-[55] bg-[var(--near-black)] text-[var(--ivory)]">
        <div className="flex items-center justify-between px-4 md:px-10 h-9 md:h-10 gap-3">
          <p className="font-grotesk text-[10px] md:text-xs font-bold uppercase tracking-wide truncate">
            <span className="hidden sm:inline">Need help bringing your idea to life? </span>
            <span className="text-[var(--cyan)]">Get a free consultation.</span>
          </p>
          <a
            href={whatsappLink(business.freeConsultationMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 bg-[var(--electric)] text-white px-3 py-1.5 font-grotesk text-[9px] md:text-xs font-bold uppercase tracking-wide hover:bg-[var(--cyan)] hover:text-[var(--near-black)] transition-colors whitespace-nowrap"
          >
            <MessageCircle size={12} className="hidden sm:block" />
            Get Free Consultation
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      <header
        className={`fixed left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled ? 'bg-[var(--ivory)]/90 backdrop-blur-md border-b border-black/10' : 'bg-transparent'
        }`}
        style={{ top: '2.25rem' }}
      >
        <nav className="flex items-center justify-between px-5 md:px-10 h-14 md:h-20">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2 group" aria-label={business.name}>
            <span className="inline-block w-3 h-3 bg-[var(--near-black)] group-hover:bg-[var(--electric)] transition-colors" />
            <span className="font-display text-xs md:text-lg tracking-tight leading-none uppercase">
              {business.name.replace(/ /g, '\u00A0')}
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-grotesk text-sm font-medium uppercase tracking-wide hover:text-[var(--electric)] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#start"
              className="group inline-flex items-center gap-1.5 bg-[var(--near-black)] text-[var(--ivory)] px-5 py-2.5 font-grotesk text-sm font-semibold uppercase tracking-wide hover:bg-[var(--electric)] transition-colors"
            >
              Start a Project
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex items-center gap-2 font-grotesk text-sm font-semibold uppercase tracking-wide"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
            Menu
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-[60] md:hidden bg-[var(--near-black)] text-[var(--ivory)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 h-14">
          <span className="font-display text-xs uppercase">{business.name}</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="flex items-center gap-2 font-grotesk text-sm uppercase">
            <X size={22} /> Close
          </button>
        </div>

        <div className="flex flex-col justify-center px-6 gap-1 mt-4">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl sm:text-5xl uppercase leading-[1.05] py-2 border-b border-white/10 hover:text-[var(--cyan)] transition-colors"
              style={{ animation: open ? `hero-rise 0.5s ${0.1 + i * 0.07}s both` : 'none' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#start"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center justify-center gap-2 bg-[var(--electric)] text-white px-6 py-4 font-grotesk text-base font-bold uppercase tracking-wide"
          >
            Start a Project <ArrowUpRight size={18} />
          </a>
          <a
            href={whatsappLink(business.freeConsultationMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 bg-[var(--cyan)] text-[var(--near-black)] px-6 py-4 font-grotesk text-base font-bold uppercase tracking-wide"
          >
            <MessageCircle size={18} /> Get Free Consultation
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-4 font-grotesk text-base font-semibold uppercase tracking-wide"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

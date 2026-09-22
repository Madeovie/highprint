import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { whatsappLink } from '@/lib/whatsapp';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setShowLabel(true), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      {showLabel && (
        <span className="hidden sm:inline-flex items-center gap-2 bg-[var(--near-black)] text-[var(--ivory)] px-4 py-2 font-grotesk text-xs font-bold uppercase tracking-wide shadow-lg">
          Chat with us
          <X
            size={14}
            className="text-white/50 hover:text-white"
            onClick={(e) => { e.preventDefault(); setShowLabel(false); }}
          />
        </span>
      )}
      <span className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform">
        <MessageCircle size={26} className="text-[var(--near-black)]" />
      </span>
    </a>
  );
}

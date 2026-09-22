import type { CSSProperties } from 'react';

/** Small crosshair registration mark used throughout the print visual language */
export function RegMark({ size = 14, className = '', color }: { size?: number; className?: string; color?: string }) {
  return (
    <span
      className={`inline-block reg-mark ${className}`}
      style={{ width: size, height: size, color: color || 'currentColor', flexShrink: 0 }}
      aria-hidden
    />
  );
}

/** Corner crop marks wrapping children — a print-proof feel */
export function CropFrame({ children, className = '', markColor }: { children: React.ReactNode; className?: string; markColor?: string }) {
  const c = markColor || 'rgba(14,14,15,0.45)';
  const corner: CSSProperties = {
    position: 'absolute',
    width: 16,
    height: 16,
    pointerEvents: 'none',
  };
  return (
    <div className={`relative ${className}`}>
      <span style={{ ...corner, top: 0, left: 0, borderTop: `1px solid ${c}`, borderLeft: `1px solid ${c}` }} />
      <span style={{ ...corner, top: 0, right: 0, borderTop: `1px solid ${c}`, borderRight: `1px solid ${c}` }} />
      <span style={{ ...corner, bottom: 0, left: 0, borderBottom: `1px solid ${c}`, borderLeft: `1px solid ${c}` }} />
      <span style={{ ...corner, bottom: 0, right: 0, borderBottom: `1px solid ${c}`, borderRight: `1px solid ${c}` }} />
      {children}
    </div>
  );
}

/** A small production label, like a sticker on a print proof */
export function PrintLabel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] ${className}`}>
      <span className="inline-block w-2 h-2 bg-current" />
      {children}
    </span>
  );
}

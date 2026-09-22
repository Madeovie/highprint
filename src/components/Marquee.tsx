const items = ['PRINTING', 'BRANDING', 'MONOGRAM', 'PHOTOLAB', 'LARGE FORMAT', 'FROM IDEA', 'TO FINISHED PRODUCT', 'OKENE · KOGI · NIGERIA'];

export default function Marquee({ dark = false }: { dark?: boolean }) {
  const color = dark ? 'text-[var(--ivory)] border-white/15' : 'text-[var(--near-black)] border-black/15';
  return (
    <div className={`overflow-hidden border-y ${color} py-3 md:py-4 bg-inherit`}>
      <div className="marquee-track flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="font-display uppercase text-2xl md:text-4xl tracking-tight mx-6 flex items-center gap-6">
            {item}
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-current opacity-40" />
          </span>
        ))}
      </div>
    </div>
  );
}

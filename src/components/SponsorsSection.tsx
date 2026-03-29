import Link from 'next/link';

export default function SponsorsSection() {
  const sponsors = [
    { name: 'Grieskirchner', link: 'https://grieskirchner.at/', subtitle: 'Pils-Perfektion seit 1708.' },
    { name: 'MARIE', link: 'https://www.marie.or.at/', subtitle: '#jessasmarie' },
    { name: 'APED', link: 'https://aped.at/', subtitle: 'handprinted in vienna' },
  ];

  return (
    <section className="py-20 border-b-4 border-white bg-surface-container relative overflow-hidden">
      {/* Decorative grain background specific to this section to make it pop subtly */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="font-headline text-sm md:text-base font-bold uppercase tracking-[0.3em] text-white/50 text-center mb-12">
          Unterstützt von unseren Partnern
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          {sponsors.map((sponsor, index) => (
            <Link 
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center text-center transition-all hover:-translate-y-2"
            >
              {/* Typographic "Logo" fallback since we lack web-ready image files */}
              <div className="font-headline text-4xl md:text-5xl font-black uppercase tracking-tighter text-white group-hover:text-primary transition-colors">
                {sponsor.name}
              </div>
              <div className="font-label text-xs uppercase tracking-widest text-white/40 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {sponsor.subtitle}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

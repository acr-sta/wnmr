import Image from 'next/image';

export default function EventCalendar() {
  return (
    <section className="py-24 bg-surface-container border-y-4 border-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image 
          src="/images/team.jpg" 
          alt="Background Texture" 
          fill 
          className="object-cover grayscale"
        />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <h2 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16 text-center flex items-center justify-center gap-4">
          <span className="text-primary">+</span> KOMMENDE EVENTS <span className="text-primary">+</span>
        </h2>
        <div className="space-y-4">
          <div className="group flex flex-col md:flex-row items-stretch bg-background border-4 border-white hover:border-primary transition-colors">
            <div className="bg-primary text-black p-6 flex flex-col items-center justify-center min-w-[160px]">
              <span className="font-headline font-black text-3xl">TBA</span>
              <span className="font-label font-bold tracking-widest">WIEN</span>
            </div>
            <div className="flex-grow p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-headline font-black text-2xl uppercase italic">THE CONCRETE SESSION</h3>
                <p className="font-body text-white/70">LINE-UP: TBA</p>
              </div>
              <button className="border-2 border-white px-6 py-2 font-headline font-black uppercase text-xs hover:bg-white hover:text-black transition-colors">
                TICKETS SICHERN
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Kontakt | dann mit Kultur',
    description: 'Kontaktinformationen und Treffpunkte des WNMR Kulturvereins.',
  };
}

export default function KontaktPage() {
  return (
    <main className="pt-20">
      <section className="py-24 px-6 max-w-5xl mx-auto border-b-4 border-white">
        <h1 className="font-headline text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 flex items-center gap-4">
          <span className="text-primary">+</span> KONTAKT
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-surface-container border-4 border-white p-8 relative group hover:border-primary transition-colors">
            <div className="absolute top-0 right-0 w-4 h-4 bg-primary m-4 hidden group-hover:block"></div>
            <span className="material-symbols-outlined text-5xl text-white mb-6">alternate_email</span>
            <h2 className="font-headline text-2xl font-black uppercase mb-4">Mail</h2>
            <p className="font-body text-white/70 mb-6">
              Allgemeine Anfragen, Booking, Presse & Support.
            </p>
            {/* Schutz vor Scrapern: Wir nutzen ein Link mit Obfuskierung per CSS/HTML oder einfach plain Text */}
            <div className="inline-block bg-black border-2 border-white px-6 py-3 font-headline font-black text-xl hover:bg-primary hover:text-black transition-colors cursor-pointer select-all">
              <span className="unicode-bidi-override direction-rtl">
                ta.rmnw@eciffo
              </span>
            </div>
            <style dangerouslySetContent={{__html: `
              .direction-rtl { direction: rtl; unicode-bidi: bidi-override; }
            `}} />
          </div>

          <div className="bg-surface-container border-4 border-white p-8 relative group hover:border-primary transition-colors">
            <div className="absolute top-0 right-0 w-4 h-4 bg-primary m-4 hidden group-hover:block"></div>
            <span className="material-symbols-outlined text-5xl text-white mb-6">photo_camera</span>
            <h2 className="font-headline text-2xl font-black uppercase mb-4">Instagram</h2>
            <p className="font-body text-white/70 mb-6">
              Slide in unsere DMs. Die schnellste Art, mit uns in Kontakt zu treten.
            </p>
            <Link 
              href="https://www.instagram.com/wenn_nicht_mit_rap/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white px-6 py-3 font-headline font-black text-xl hover:bg-primary hover:text-black hover:border-primary transition-all uppercase"
            >
              @wenn_nicht_mit_rap
              <span className="material-symbols-outlined text-lg">arrow_outward</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-black border-4 border-white p-8 shadow-[8px_8px_0px_0px_#f8971d]">
          <div className="flex-1 w-full relative aspect-square md:aspect-auto md:h-[400px] border-4 border-black">
            <Image 
              src="/images/team.jpg" 
              alt="WNMR Crew" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
              <h2 className="font-headline text-3xl font-black uppercase tracking-tighter">Meet The Family</h2>
            </div>
            <p className="font-body text-lg text-white/90 leading-relaxed mb-6">
              Wir sind keine gesichtslose Brand. Du triffst die WNMR Crew auf unseren eigenen Events und überall dort, wo die Wiener Hip-Hop Szene zusammenkommt.
            </p>
            <p className="font-label text-white/60 mb-8 border-l-4 border-primary pl-4">
              "Support your local underground."
            </p>
            <Link href="/events" className="inline-block bg-white text-black px-6 py-3 font-headline font-black uppercase text-sm border-2 border-transparent hover:bg-primary transition-colors">
              ZU DEN EVENTS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

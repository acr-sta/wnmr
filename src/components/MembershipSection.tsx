import Image from 'next/image';
import Link from 'next/link';

export default function MembershipSection() {
  return (
    <section id="mitgliedschaft" className="py-24 px-6 relative bg-primary text-black border-b-4 border-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-black m-4"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 bg-white m-4"></div>
      
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 w-full relative">
          <div className="relative aspect-[4/3] w-full border-4 border-black shadow-[8px_8px_0px_0px_#ffffff] bg-black">
            <Image 
              src="/images/wnmr.jpg" 
              alt="WNMR Mitgliedschaft" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-black text-3xl">verified_user</span>
            <span className="font-label font-bold uppercase tracking-widest text-black">Offizieller Support</span>
          </div>
          
          <h2 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
            WNMR <br />
            <span className="text-white text-stroke" style={{ WebkitTextStroke: '2px black' }}>FAMILY</span>
          </h2>
          
          <div className="bg-black text-white p-6 border-4 border-white shadow-[6px_6px_0px_0px_#ffffff] mb-8">
            <div className="flex justify-between items-end border-b-2 border-white/20 pb-4 mb-4">
              <h3 className="font-headline font-black text-2xl uppercase tracking-tighter">Einjährige Mitgliedschaft</h3>
              <span className="font-headline font-black text-4xl text-primary">€60</span>
            </div>
            <ul className="space-y-3 font-body text-white/80 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">+</span>
                <span>Offizieller WNMR / DMK Mitgliedsausweis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">+</span>
                <span>Exklusiver Early-Access zu neuen Drops</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">+</span>
                <span>Vergünstigter Eintritt bei allen Events</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">+</span>
                <span>Supporte die Wiener Hip-Hop Kultur</span>
              </li>
            </ul>
            
            <div className="p-4 border-2 border-dashed border-primary/50 bg-primary/10">
              <p className="font-label text-sm text-white/90">
                <strong className="text-primary uppercase tracking-wider">Unkompliziert dabei sein:</strong><br />
                Klick auf den Button, schick uns die 60€ via PayPal und gib im Verwendungszweck deinen Namen & deine IG-Addy an. Wir melden uns dann manuell bei dir und machen dich offiziell zur Family! 
              </p>
            </div>
          </div>
          
          <Link 
            href="https://paypal.me/DeinVereinsName/60" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex w-full justify-center items-center gap-2 bg-black text-white px-8 py-4 font-headline font-black text-xl uppercase tracking-tighter border-4 border-white shadow-[6px_6px_0px_0px_#ffffff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <span className="material-symbols-outlined">payments</span>
            PER PAYPAL ABSCHLIESSEN
          </Link>
        </div>
      </div>
    </section>
  );
}

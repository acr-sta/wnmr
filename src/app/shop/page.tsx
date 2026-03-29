import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Shop | dann mit Kultur',
    description: 'Offizieller Merch-Bereich von dann mit Kultur: Shirts, Hoodies, Caps und mehr.',
  };
}

export default function ShopPage() {
  return (
    <main className="pt-20">
      <section className="py-24 px-6 max-w-5xl mx-auto border-b-4 border-white min-h-[60vh]">
        <h1 className="font-headline text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 flex items-center gap-4">
          <span className="text-primary">+</span> SHOP
        </h1>
        <p className="font-body text-xl text-white/70">
          Hier entsteht der Merch-Shop.
        </p>
      </section>
    </main>
  );
}

import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Shop | dann mit Kultur',
    description: 'Offizieller Merch-Bereich von dann mit Kultur: Shirts, Hoodies, Caps und mehr.',
  };
}

export default function ShopPage() {
  return (
    <main className="pt-20 px-6 max-w-7xl mx-auto py-24">
      <h1 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 italic">Shop</h1>
      <p className="font-body text-on-surface-variant">Hier entsteht der Merch-Shop.</p>
    </main>
  );
}

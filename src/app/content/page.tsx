import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Content | dann mit Kultur',
    description: 'Radio, YouTube und Instagram Embeds.',
  };
}

export default function ContentPage() {
  return (
    <main className="pt-20 px-6 max-w-7xl mx-auto py-24">
      <h1 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 italic">Content / Radio</h1>
      <p className="font-body text-on-surface-variant">Hier entsteht der Content Feed (YouTube / Radio / Instagram).</p>
    </main>
  );
}

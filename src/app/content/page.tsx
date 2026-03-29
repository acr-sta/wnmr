import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Content | dann mit Kultur',
    description: 'Radio, YouTube und Instagram Embeds.',
  };
}

export default function ContentPage() {
  return (
    <main className="pt-20">
      <section className="py-24 px-6 max-w-5xl mx-auto border-b-4 border-white min-h-[60vh]">
        <h1 className="font-headline text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 flex items-center gap-4">
          <span className="text-primary">+</span> CONTENT
        </h1>
        <p className="font-body text-xl text-white/70">
          Hier entsteht der Content Feed (YouTube / Radio / Instagram).
        </p>
      </section>
    </main>
  );
}

import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Events | dann mit Kultur',
    description: 'Auflistung der jährlichen Vereinsveranstaltungen und Events in Wien.',
  };
}

export default function EventsPage() {
  return (
    <main className="pt-20">
      <section className="py-24 px-6 max-w-5xl mx-auto border-b-4 border-white min-h-[60vh]">
        <h1 className="font-headline text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 flex items-center gap-4">
          <span className="text-primary">+</span> EVENTS
        </h1>
        <p className="font-body text-xl text-white/70">
          Hier entsteht die Event-Übersicht.
        </p>
      </section>
    </main>
  );
}

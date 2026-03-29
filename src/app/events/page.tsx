import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Events | dann mit Kultur',
    description: 'Auflistung der jährlichen Vereinsveranstaltungen und Events in Wien.',
  };
}

export default function EventsPage() {
  return (
    <main className="pt-20 px-6 max-w-7xl mx-auto py-24">
      <h1 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 italic">Events</h1>
      <p className="font-body text-on-surface-variant">Hier entsteht die Event-Übersicht.</p>
    </main>
  );
}

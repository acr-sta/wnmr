import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Network | dann mit Kultur',
    description: 'Künstler-Support, Roster und das Netzwerk hinter dann mit Kultur.',
  };
}

export default function NetworkPage() {
  return (
    <main className="pt-20 px-6 max-w-7xl mx-auto py-24">
      <h1 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 italic">Network</h1>
      <p className="font-body text-on-surface-variant">Hier entsteht die Roster- und Künstler-Übersicht.</p>
    </main>
  );
}

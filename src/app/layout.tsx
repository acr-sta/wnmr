import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'WNMR | DANN MIT KULTUR',
  description: 'Wenn nicht mit Rap, dann mit Kultur. Hip-Hop Kulturverein aus Wien.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className={`bg-background text-on-surface font-body selection:bg-primary selection:text-black overflow-x-hidden antialiased flex flex-col min-h-screen`}>
        <div className="fixed inset-0 grain-overlay z-[100]"></div>
        
        <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-20 bg-background border-b-4 border-white shadow-[4px_4px_0px_0px_rgba(255,150,30,1)]">
          <div className="flex items-center gap-4">
            <Link href="/" className="group relative flex items-center gap-4">
              <Image 
                src="/logos/WNMR_Logo_orange.svg" 
                alt="WNMR Logo Text" 
                width={150} 
                height={40} 
                className="h-8 w-auto object-contain" 
              />
              <div className="w-12 h-12 relative">
                <Image 
                  src="/logos/dmk_logo_weiss.svg" 
                  alt="WNMR Logo" 
                  fill 
                  className="object-contain border-2 border-primary grayscale group-hover:grayscale-0 transition-all bg-black p-1" 
                />
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link className="font-headline uppercase tracking-tighter font-black text-primary border-b-4 border-primary hover:text-primary hover:skew-x-[-2deg] transition-transform flex items-center gap-1 before:content-['+'] before:text-primary" href="/">START</Link>
            <Link className="font-headline uppercase tracking-tighter font-black text-white hover:text-primary hover:skew-x-[-2deg] transition-transform flex items-center gap-1 before:content-['+'] before:text-primary" href="/events">EVENTS</Link>
            <Link className="font-headline uppercase tracking-tighter font-black text-white hover:text-primary hover:skew-x-[-2deg] transition-transform flex items-center gap-1 before:content-['+'] before:text-primary" href="/#podcast">PODCAST</Link>
            <Link className="font-headline uppercase tracking-tighter font-black text-white hover:text-primary hover:skew-x-[-2deg] transition-transform flex items-center gap-1 before:content-['+'] before:text-primary" href="/shop">SHOP</Link>
          </nav>
          <Link href="/#mitgliedschaft" className="bg-primary text-black px-6 py-2 font-headline font-black uppercase tracking-tighter border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all">
            MITGLIED WERDEN
          </Link>
        </header>

        <div className="flex-grow flex flex-col pb-20">
          {children}
        </div>

        <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-8 bg-background border-t-4 border-white mt-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-4 h-4 bg-primary m-4"></div>
          <div className="flex flex-col items-center md:items-start gap-2 z-10">
            <span className="text-xl font-black text-white font-headline uppercase italic">dann mit Kultur</span>
            <span className="font-label font-bold uppercase text-sm text-[#e2e2e2]">
              © {new Date().getFullYear()} dann mit Kultur<br />
              Rechte Wienzeile 71<br />
              1050 Wien
            </span>
          </div>
          <div className="flex gap-8 items-center flex-wrap justify-center z-10">
            <Link className="font-headline font-bold uppercase text-sm text-[#e2e2e2] hover:bg-primary hover:text-black p-1 transition-all" href="https://www.instagram.com/wenn_nicht_mit_rap/" target="_blank" rel="noopener noreferrer">+ INSTAGRAM</Link>
            <Link className="font-headline font-bold uppercase text-sm text-[#e2e2e2] hover:bg-primary hover:text-black p-1 transition-all" href="https://www.youtube.com/@WNMRDMNP" target="_blank" rel="noopener noreferrer">+ YOUTUBE</Link>
            <Link className="font-headline font-bold uppercase text-sm text-[#e2e2e2] hover:bg-primary hover:text-black p-1 transition-all" href="https://open.spotify.com/playlist/60ZoteapNvRywdnLmTlix7?si=60ca5d084bc44c6f" target="_blank" rel="noopener noreferrer">+ SPOTIFY</Link>
            <Link className="font-headline font-bold uppercase text-sm text-[#e2e2e2] hover:bg-primary hover:text-black p-1 transition-all" href="/kontakt">+ KONTAKT</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}

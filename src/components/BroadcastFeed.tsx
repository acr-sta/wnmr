'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function BroadcastFeed() {
  const broadcastRef = useRef<HTMLDivElement>(null);
  const instaRef = useRef<HTMLDivElement>(null);

  const [hasScrolledBroadcast, setHasScrolledBroadcast] = useState(false);
  const [hasScrolledInsta, setHasScrolledInsta] = useState(false);

  useEffect(() => {
    const bEl = broadcastRef.current;
    const iEl = instaRef.current;

    const handleBroadcastScroll = () => {
      if (!hasScrolledBroadcast) setHasScrolledBroadcast(true);
    };

    const handleInstaScroll = () => {
      if (!hasScrolledInsta) setHasScrolledInsta(true);
    };
    
    if (bEl) bEl.addEventListener('scroll', handleBroadcastScroll, { passive: true });
    if (iEl) iEl.addEventListener('scroll', handleInstaScroll, { passive: true });
    
    return () => {
      if (bEl) bEl.removeEventListener('scroll', handleBroadcastScroll);
      if (iEl) iEl.removeEventListener('scroll', handleInstaScroll);
    };
  }, [hasScrolledBroadcast, hasScrolledInsta]);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const { current } = ref;
      const scrollAmount = direction === 'left' ? -current.offsetWidth * 0.8 : current.offsetWidth * 0.8;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const instagramPosts = [
    { id: 1, img: '/images/team.jpg', text: 'WNMR GANG', link: 'https://www.instagram.com/wenn_nicht_mit_rap/' },
    { id: 2, img: '/images/wnmr-shirt-test.jpg', text: 'NEUER DROP', link: 'https://www.instagram.com/wenn_nicht_mit_rap/' },
    { id: 3, img: '/images/products/wnmr-t-shirt-grau-1.jpg', text: 'BEHIND THE SCENES', link: 'https://www.instagram.com/wenn_nicht_mit_rap/' },
    { id: 4, img: '/images/products/wnmr-haube-schwarz-1.jpg', text: 'WINTER VIBES', link: 'https://www.instagram.com/wenn_nicht_mit_rap/' },
    { id: 5, img: '/images/products/wnmr-kappe-1.jpg', text: 'STAMP CAP NOW LIVE', link: 'https://www.instagram.com/wenn_nicht_mit_rap/' },
  ];

  return (
    <section id="podcast" className="py-24 overflow-hidden relative border-b-4 border-white">
      {/* Broadcast Section */}
      <div className="mb-20">
        <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-5xl text-primary">videocam</span>
            <h2 className="font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              WENN NICHT MIT RAP <br />
              DANN MIT NEM <span className="text-primary italic">PODCAST</span>
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll(broadcastRef, 'left')} className="bg-surface-container border-2 border-white p-2 hover:bg-primary hover:text-black transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button onClick={() => scroll(broadcastRef, 'right')} className="bg-surface-container border-2 border-white p-2 hover:bg-primary hover:text-black transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        
        <div className="relative group/slider">
          {/* Mobile Scroll Indicator Overlay */}
          <div 
            className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent md:hidden pointer-events-none transition-opacity duration-700 z-10 flex items-center justify-end pr-4 ${hasScrolledBroadcast ? 'opacity-0' : 'opacity-100'}`}
          >
            <div className="bg-primary text-black rounded-full w-12 h-12 flex items-center justify-center shadow-[0_0_15px_rgba(248,151,29,0.5)] animate-bounce-x">
              <span className="material-symbols-outlined text-2xl">swipe_left</span>
            </div>
          </div>

          <div 
            ref={broadcastRef}
            className="flex gap-8 overflow-x-auto overflow-y-hidden px-6 xl:px-[calc((100vw-80rem)/2+1.5rem)] pb-12 snap-x scrollbar-hide scroll-smooth"
          >
              <div className="flex-none w-[300px] md:w-[450px] snap-start group relative">
                <div className="relative mb-6 border-4 border-white shadow-[6px_6px_0px_0px_#ffffff] group-hover:shadow-[6px_6px_0px_0px_#f8971d] transition-all bg-gray-800 w-full aspect-video z-10">
                  <iframe 
                    src="https://www.youtube.com/embed/videoseries?list=PLyO2e-QGf-XoNxyxJ9bI1vNXZi-7B1h_y" 
                    title="WNMR YouTube Playlist" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full pointer-events-auto"
                  ></iframe>
                </div>
              <h3 className="font-headline font-black text-xl md:text-2xl uppercase italic tracking-tight group-hover:text-primary transition-colors">
                WNMR SESSIONS & INTERVIEWS
              </h3>
              <p className="font-label text-white/60 mt-2">AKTUELLE VIDEOS</p>
            </div>

              <div className="flex-none w-[300px] md:w-[450px] snap-start group relative">
                <div className="relative mb-6 border-4 border-white shadow-[6px_6px_0px_0px_#ffffff] group-hover:shadow-[6px_6px_0px_0px_#f8971d] transition-all bg-gray-800 w-full aspect-video z-10">
                  <iframe 
                    src="https://www.youtube.com/embed/S2aE_Sj5QpQ" 
                    title="WNMR Session Raf Camora" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full pointer-events-auto"
                  ></iframe>
                </div>
              <h3 className="font-headline font-black text-xl md:text-2xl uppercase italic tracking-tight group-hover:text-primary transition-colors">
                LATEST UPLOAD
              </h3>
              <p className="font-label text-white/60 mt-2">NEUESTES VIDEO</p>
            </div>
            
              <div className="flex-none w-[300px] md:w-[450px] snap-start group relative">
                <div className="relative mb-6 border-4 border-white shadow-[6px_6px_0px_0px_#ffffff] group-hover:shadow-[6px_6px_0px_0px_#f8971d] transition-all bg-gray-800 w-full aspect-video z-10">
                  <iframe 
                    src="https://www.youtube.com/embed/n42qF31Z0Wk" 
                    title="WNMR Session Raf Camora" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full pointer-events-auto"
                  ></iframe>
                </div>
                <h3 className="font-headline font-black text-xl md:text-2xl uppercase italic tracking-tight group-hover:text-primary transition-colors">
                  WNMR SESSION - RAF CAMORA
                </h3>
                <p className="font-label text-white/60 mt-2">CLASSIC</p>
              </div>
          </div>
        </div>
      </div>

      {/* Instagram Feed Section */}
      <div>
        <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-5xl text-primary">photo_camera</span>
            <h2 className="font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter">INSTAGRAM</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll(instaRef, 'left')} className="bg-surface-container border-2 border-white p-2 hover:bg-primary hover:text-black transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button onClick={() => scroll(instaRef, 'right')} className="bg-surface-container border-2 border-white p-2 hover:bg-primary hover:text-black transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        
        <div className="relative group/slider">
          {/* Mobile Scroll Indicator Overlay */}
          <div 
            className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent md:hidden pointer-events-none transition-opacity duration-700 z-10 flex items-center justify-end pr-4 ${hasScrolledInsta ? 'opacity-0' : 'opacity-100'}`}
          >
            <div className="bg-primary text-black rounded-full w-12 h-12 flex items-center justify-center shadow-[0_0_15px_rgba(248,151,29,0.5)] animate-bounce-x">
              <span className="material-symbols-outlined text-2xl">swipe_left</span>
            </div>
          </div>

          <div 
            ref={instaRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden px-6 xl:px-[calc((100vw-80rem)/2+1.5rem)] pb-12 snap-x scrollbar-hide scroll-smooth"
          >
            {/* Instagram Post 1 */}
            <Link 
              href="https://www.instagram.com/p/DFI76vRMbNn/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-none w-[250px] md:w-[320px] snap-start group cursor-pointer"
            >
              <div className="relative mb-4 border-4 border-white shadow-[4px_4px_0px_0px_#ffffff] group-hover:shadow-[4px_4px_0px_0px_#f8971d] group-hover:-translate-y-1 transition-all bg-gray-800 aspect-square overflow-hidden">
                <Image 
                  src="/images/products/wnmr-t-shirt-grau-1.jpg" 
                  alt="WNMR TEE" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-primary text-black font-headline font-black px-4 py-2 uppercase text-sm border-2 border-black rotate-[-2deg]">
                    Auf IG ansehen
                  </span>
                </div>
              </div>
              <p className="font-headline font-black text-lg uppercase italic tracking-tight group-hover:text-primary transition-colors line-clamp-2">
                HEAVY WEIGHT TEE
              </p>
            </Link>

            {/* Instagram Post 2 */}
            <Link 
              href="https://www.instagram.com/p/DFI76vRMbNn/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-none w-[250px] md:w-[320px] snap-start group cursor-pointer"
            >
              <div className="relative mb-4 border-4 border-white shadow-[4px_4px_0px_0px_#ffffff] group-hover:shadow-[4px_4px_0px_0px_#f8971d] group-hover:-translate-y-1 transition-all bg-gray-800 aspect-square overflow-hidden">
                <Image 
                  src="/images/team.jpg" 
                  alt="WNMR Team" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-primary text-black font-headline font-black px-4 py-2 uppercase text-sm border-2 border-black rotate-[-2deg]">
                    Auf IG ansehen
                  </span>
                </div>
              </div>
              <p className="font-headline font-black text-lg uppercase italic tracking-tight group-hover:text-primary transition-colors line-clamp-2">
                GANG
              </p>
            </Link>
            
            {/* Instagram Post 3 */}
            <Link 
              href="https://www.instagram.com/p/DFI76vRMbNn/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-none w-[250px] md:w-[320px] snap-start group cursor-pointer"
            >
              <div className="relative mb-4 border-4 border-white shadow-[4px_4px_0px_0px_#ffffff] group-hover:shadow-[4px_4px_0px_0px_#f8971d] group-hover:-translate-y-1 transition-all bg-gray-800 aspect-square overflow-hidden">
                <Image 
                  src="/images/products/wnmr-haube-schwarz-1.jpg" 
                  alt="Winter Beanie" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-primary text-black font-headline font-black px-4 py-2 uppercase text-sm border-2 border-black rotate-[-2deg]">
                    Auf IG ansehen
                  </span>
                </div>
              </div>
              <p className="font-headline font-black text-lg uppercase italic tracking-tight group-hover:text-primary transition-colors line-clamp-2">
                COLD DAYS
              </p>
            </Link>

            {/* Instagram Post 4 */}
            <Link 
              href="https://www.instagram.com/p/DFI76vRMbNn/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-none w-[250px] md:w-[320px] snap-start group cursor-pointer"
            >
              <div className="relative mb-4 border-4 border-white shadow-[4px_4px_0px_0px_#ffffff] group-hover:shadow-[4px_4px_0px_0px_#f8971d] group-hover:-translate-y-1 transition-all bg-gray-800 aspect-square overflow-hidden">
                <Image 
                  src="/images/products/wnmr-kappe-1.jpg" 
                  alt="Cap Drop" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-primary text-black font-headline font-black px-4 py-2 uppercase text-sm border-2 border-black rotate-[-2deg]">
                    Auf IG ansehen
                  </span>
                </div>
              </div>
              <p className="font-headline font-black text-lg uppercase italic tracking-tight group-hover:text-primary transition-colors line-clamp-2">
                RESTOCK
              </p>
            </Link>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center mt-12">
          <h3 className="font-headline text-sm md:text-base font-bold uppercase tracking-[0.3em] text-white/50 mb-6 text-center">
            Folgen
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-4 w-full">
            <Link 
              href="https://www.instagram.com/wenn_nicht_mit_rap/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-3 font-headline font-black text-lg md:text-base lg:text-lg uppercase tracking-tighter border-2 border-white hover:bg-white hover:text-black transition-all w-full md:w-auto"
            >
              <span className="material-symbols-outlined">open_in_new</span>
              @wenn_nicht_mit_rap
            </Link>
            <Link 
              href="https://www.instagram.com/dann_mit_kultur/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-3 font-headline font-black text-lg md:text-base lg:text-lg uppercase tracking-tighter border-2 border-white hover:bg-white hover:text-black transition-all w-full md:w-auto"
            >
              <span className="material-symbols-outlined">open_in_new</span>
              @dann_mit_kultur
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

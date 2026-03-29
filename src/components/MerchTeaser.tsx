'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function MerchTeaser() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (!hasScrolled) setHasScrolled(true);
    };
    
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth * 0.8 : current.offsetWidth * 0.8;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const products = [
    { id: 1, name: 'WNMR TEE_01', desc: 'SCHWERE BAUMWOLLE / GRAU', price: '€35', image: '/images/products/wnmr-t-shirt-grau-1.jpg' },
    { id: 2, name: 'CULTURE HAUBE', desc: 'WINTER / SCHWARZ', price: '€25', isOffset: true, image: '/images/products/wnmr-haube-schwarz-1.jpg' },
    { id: 3, name: 'STAMP CAP', desc: '5-PANEL / WEISS', price: '€30', image: '/images/products/wnmr-kappe-1.jpg' },
    { id: 4, name: 'WNMR SOCKEN', desc: 'CREW / LOGO WEISS', price: '€15', isOffset: true, image: '/images/products/wnmr-socken-logo-weiss-1.jpg' },
    { id: 5, name: 'WNMR SOCKEN', desc: 'CREW / SCHRIFTZUG', price: '€15', image: '/images/products/wnmr-socken-schriftzug-weiss.jpg' },
  ];

  return (
    <section className="py-24 overflow-hidden relative border-b-4 border-white">
      <div className="absolute top-0 right-0 w-4 h-4 bg-primary hidden md:block m-4"></div>
      
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex justify-between items-end border-b-4 border-white pb-4">
          <h2 className="font-headline text-4xl md:text-6xl font-black uppercase italic tracking-tighter flex items-center gap-4">
            <span className="text-primary">+</span> KOLLEKTION
          </h2>
          <div className="flex flex-col items-end gap-4">
            <p className="font-label text-primary font-bold">NEUER DROP {new Date().getFullYear()}</p>
            <div className="hidden md:flex gap-2">
              <button onClick={() => scroll('left')} className="bg-surface-container border-2 border-white p-2 hover:bg-primary hover:text-black transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button onClick={() => scroll('right')} className="bg-surface-container border-2 border-white p-2 hover:bg-primary hover:text-black transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative group/slider">
        {/* Mobile Scroll Indicator Overlay */}
        <div 
          className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent md:hidden pointer-events-none transition-opacity duration-700 z-10 flex items-center justify-end pr-4 ${hasScrolled ? 'opacity-0' : 'opacity-100'}`}
        >
          <div className="bg-primary text-black rounded-full w-12 h-12 flex items-center justify-center shadow-[0_0_15px_rgba(248,151,29,0.5)] animate-bounce-x">
            <span className="material-symbols-outlined text-2xl">swipe_left</span>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-12 overflow-x-auto overflow-y-hidden px-6 xl:px-[calc((100vw-80rem)/2+1.5rem)] pb-12 pt-8 snap-x scrollbar-hide scroll-smooth"
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`flex-none w-[300px] md:w-[calc(33.333%-2rem)] max-w-[400px] snap-start group relative bg-surface-container border-4 border-white shadow-[6px_6px_0px_0px_#f8971d] p-4 hover:-translate-y-2 transition-transform ${product.isOffset ? 'md:translate-y-8' : ''}`}
            >
              <div className="relative overflow-hidden aspect-square mb-6 border-2 border-white bg-gray-800 grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline font-black text-xl uppercase tracking-tighter">{product.name}</h3>
                  <p className="font-label text-on-surface-variant text-xs">{product.desc}</p>
                </div>
                <span className="font-headline font-black text-2xl text-primary">{product.price}</span>
              </div>
              <button className="w-full mt-6 py-3 border-2 border-white font-headline font-black uppercase text-sm hover:bg-primary hover:text-black transition-colors flex justify-center items-center gap-2">
                <span className="material-symbols-outlined text-lg">shopping_cart</span>
                IN DEN WARENKORB
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

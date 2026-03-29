'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden py-24 px-6 border-b-4 border-white">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/team.jpg" 
          alt="Hero Background" 
          fill 
          priority
          className="object-cover opacity-40 grayscale mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30"></div>
      </div>
      
      <div className="absolute top-8 right-8 w-4 h-4 bg-primary z-20"></div>
      <div className="absolute bottom-8 left-8 w-4 h-4 bg-primary z-20"></div>

      <div className="relative z-10 max-w-7xl w-full text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
        >
          <Image 
            src="/images/wnmr.jpg" 
            alt="WNMR" 
            fill 
            className="object-cover border-4 border-white shadow-[8px_8px_0px_0px_#f8971d] grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-headline text-5xl md:text-9xl font-black leading-none uppercase tracking-tighter mb-12"
        >
          WENN NICHT MIT <span className="text-primary italic">RAP</span>, <br />
          <span className="text-stroke">DANN MIT</span> KULTUR
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <Link href="/#mitgliedschaft" className="group relative bg-primary text-black px-12 py-6 text-2xl font-black uppercase tracking-tighter border-4 border-white shadow-[8px_8px_0px_0px_#ffffff] hover:shadow-[2px_2px_0px_0px_#ffffff] hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2">
            MITGLIED WERDEN
          </Link>
          <div className="md:-rotate-2 bg-background text-white font-headline font-black px-4 py-2 uppercase text-sm tracking-widest border-2 border-primary">
            Est. 2018 / Wien
          </div>
        </motion.div>
      </div>
    </section>
  );
}

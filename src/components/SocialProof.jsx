import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function SocialProof() {
  const partners = ["Sheriyans Coding School", "Naradflix", "Nexus", "Omni", "Velocity", "Aura"];

  return (
    <section className="py-20 bg-zinc-950 relative z-10 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <Reveal className="text-center">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold mb-4">Driving undeniable scale</p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mb-2">
            <span className="text-gradient">600K+</span> Subscribers Generated
          </h2>
          <p className="text-zinc-400 text-sm">Trusted by industry leaders and viral creators</p>
        </Reveal>
      </div>

      {/* Infinite Ticker */}
      <Reveal delay={0.2} className="relative w-full flex overflow-x-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>
        
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="flex whitespace-nowrap items-center gap-16 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 py-4 px-8"
        >
          {/* Double the array for seamless looping */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div key={index} className="font-headline text-2xl md:text-3xl font-black tracking-tighter text-zinc-300 select-none">
              {partner}
            </div>
          ))}
        </motion.div>
      </Reveal>
    </section>
  );
}

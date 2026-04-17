import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import NetworkBackground from './NetworkBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden selection:bg-primary/30">
      
      {/* Background Animated Neural Network */}
      <NetworkBackground />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center pointer-events-none">
        <div className="lg:col-span-10 lg:col-start-2 text-center flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-white/10 shadow-[0_0_20px_rgba(255,83,87,0.15)] pointer-events-auto"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-body text-[10px] sm:text-xs tracking-[0.2em] text-zinc-300 uppercase font-bold">
              Next-Gen AI Cinematography
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-headline text-5xl md:text-7xl lg:text-[6rem] leading-[1.05] font-extrabold tracking-tight mb-8 text-white drop-shadow-2xl"
          >
            Scale Your Content with <br className="hidden md:block" />
            <span className="text-gradient relative inline-block">
              AI-Powered
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary blur-md opacity-50"></span>
            </span> Video Systems
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed"
          >
            We engineer high-retention video architectures that turn viewers into loyalists. 
            Stop guessing the algorithm. Start scaling with precision.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-6 pointer-events-auto"
          >
            <button className="group relative bg-white text-black font-body uppercase tracking-widest text-[0.8rem] font-bold px-8 py-4 rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <span className="relative flex items-center justify-center gap-2">
                Book a Call <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="group glass-panel text-white font-body uppercase tracking-widest text-[0.8rem] font-bold px-8 py-4 rounded-full hover:bg-zinc-800/50 transition-colors w-full sm:w-auto flex items-center justify-center gap-3">
              <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Play size={10} className="text-primary ml-0.5" fill="currentColor" />
              </div>
              View Showreel
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 text-zinc-600 font-body text-xs font-semibold tracking-[0.2em] uppercase"
          >
            Led by creators Mayur & Rohan
          </motion.div>

        </div>
      </div>
    </section>
  );
}

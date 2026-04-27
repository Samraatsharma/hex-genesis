import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  // Sample MP4 URLs
  const cases = [
    {
      id: 1,
      client: "Sheriyans Coding School",
      metric: "300%",
      metricDesc: "Increase in Organic Reach",
      videoUrl: "/videos/video1.mp4",
    },
    {
      id: 2,
      client: "Naradflix",
      metric: "1.2M",
      metricDesc: "Views in 48 Hours",
      videoUrl: "/videos/video2.mp4",
    },
    {
      id: 3,
      client: "Zenith Studios",
      metric: "5x",
      metricDesc: "Subscriber Growth",
      videoUrl: "/videos/video3.mp4",
    }
  ];

  const handleNext = () => setActiveIndex((prev) => Math.min(prev + 1, cases.length - 1));
  const handlePrev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));

  const getCardStyle = (index) => {
    const diff = index - activeIndex; // -1 for left, 1 for right
    const absDiff = Math.abs(diff);

    // Default hidden
    let x = `${diff * 120}%`;
    let scale = 0.7;
    let rotateY = diff * -35; 
    let zIndex = 10 - absDiff;
    let filter = absDiff > 0 ? 'blur(8px) brightness(0.4)' : 'blur(0px) brightness(1)';
    let opacity = absDiff > 1 ? 0 : 1;

    return {
      x,
      scale,
      rotateY,
      zIndex,
      filter,
      opacity
    };
  };

  return (
    <section id="work" className="py-32 bg-zinc-950 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-20">
        
        <Reveal className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Our Work</h2>
            <p className="text-zinc-500 font-body text-lg uppercase tracking-widest font-semibold">Architecting Digital Empires</p>
          </div>
          
          <div className="flex gap-4">
            <button onClick={handlePrev} disabled={activeIndex === 0} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition-colors backdrop-blur-md">
              <ChevronLeft size={24} />
            </button>
            <button onClick={handleNext} disabled={activeIndex === cases.length - 1} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition-colors backdrop-blur-md">
              <ChevronRight size={24} />
            </button>
          </div>
        </Reveal>

        {/* 3D Video Slider Container */}
        <Reveal delay={0.2} className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center perspective-[1500px] mb-24 overflow-visible">
          {cases.map((item, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={item.id}
                animate={{
                  x: style.x,
                  scale: style.scale,
                  rotateY: style.rotateY,
                  zIndex: style.zIndex,
                  filter: style.filter,
                  opacity: style.opacity
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-full max-w-[320px] md:max-w-[450px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] cursor-pointer group"
                onClick={() => {
                  if (!isActive) setActiveIndex(index);
                  // Optional: If active, open full screen modal
                  else setSelectedVideo(item.videoUrl);
                }}
                onMouseEnter={() => isActive && setIsHovered(true)}
                onMouseLeave={() => isActive && setIsHovered(false)}
                style={{ transformOrigin: 'center center' }}
              >
                <div className="absolute inset-0 bg-black">
                  {/* Actual Playing Inline Video */}
                  <motion.video 
                    src={item.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: isActive && isHovered ? 1 : 0.6 }}
                    transition={{ 
                      delay: isActive && isHovered ? 0.2 : 0, 
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay to dim edges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>

                  <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                    {/* Top Bar Label */}
                    <div className="absolute top-6 left-6">
                      <span className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full font-body text-[10px] uppercase tracking-widest border border-white/10 shadow-lg">
                        {item.client}
                      </span>
                    </div>

                    {/* Stats */}
                    <motion.div 
                      animate={{ y: isActive && isHovered ? -10 : 0 }}
                      className="transition-transform duration-500"
                    >
                      <h3 className="font-headline text-5xl md:text-6xl font-black text-white mb-2 drop-shadow-lg">
                        {item.metric}
                      </h3>
                      <p className="text-zinc-300 font-headline font-semibold uppercase tracking-[0.2em] text-xs drop-shadow-md">
                        {item.metricDesc}
                      </p>
                    </motion.div>

                    {/* Hover Click-to-Expand Hint */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isActive && isHovered ? 1 : 0, y: isActive && isHovered ? 0 : 20 }}
                      className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center text-white border border-white/30"
                    >
                      <Play strokeWidth={2} size={20} className="ml-1" fill="currentColor" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Reveal>

        {/* Instagram Integration - Subtle CTA */}
        <Reveal className="flex justify-center">
          <a 
            href="https://instagram.com/hexagenisys" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 bg-zinc-900/50 backdrop-blur-md border border-white/10 px-8 py-4 rounded-full overflow-hidden hover:border-primary/50 transition-all duration-500 hover:scale-[1.03] shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center p-[2px]">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-[18px] h-[18px]">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-zinc-400 text-[10px] uppercase tracking-widest font-bold">Follow Our Work in Real Time</span>
              <span className="text-white font-headline tracking-wide group-hover:text-primary transition-colors">@hexagenisys</span>
            </div>
          </a>
        </Reveal>

      </div>

      {/* Full Screen Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 sm:p-12 pointer-events-auto"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-black/50 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors backdrop-blur-md"
              >
                <X size={24} />
              </button>
              <video 
                src={selectedVideo} 
                autoPlay 
                controls 
                className="w-full h-full object-contain bg-black"
                preload="none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

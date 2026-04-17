import { motion } from 'framer-motion';

export default function Founders() {
  const founders = [
    {
      name: "Mayur",
      title: "Creator & AI Technologist",
      desc: "Scaling digital footprint through data-backed creative direction."
    },
    {
      name: "Rohan",
      title: "Creator & System Architect",
      desc: "Engineering high-retention frameworks to dominate watch-time algorithms."
    }
  ];

  return (
    <section id="about" className="py-32 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] font-bold text-zinc-500 mb-4">Leadership</p>
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-white">
            Built by <span className="text-gradient">Creators</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative cursor-pointer"
            >
              <div className="py-8 border-b border-white/10 group-hover:border-primary/50 transition-colors">
                <h3 className="font-headline text-4xl font-black text-white mb-2 group-hover:text-primary transition-colors tracking-tight">
                  {founder.name}
                </h3>
                <p className="font-body text-sm uppercase tracking-widest text-zinc-500 font-semibold">
                  {founder.title}
                </p>
                <div className="h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 ease-out">
                  <p className="text-zinc-400 font-body text-sm leading-relaxed">
                    {founder.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      
      {/* Very faint background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-primary/5 blur-[120px] pointer-events-none"></div>
    </section>
  );
}

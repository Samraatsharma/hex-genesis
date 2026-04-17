import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    {
      client: "Sheriyans Coding School",
      metric: "300%",
      metricDesc: "Increase in Organic Reach",
      problem: "Low retention on technical videos leading to algorithmic suppression.",
      solution: "Implemented dynamic visual hooks and dopamine-driven pacing.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
    },
    {
      client: "Naradflix",
      metric: "1.2M",
      metricDesc: "Views in 48 Hours",
      problem: "Struggling to break out of established niches with generic content.",
      solution: "Designed viral short-form systems with AI-driven trend analysis.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="case-studies" className="py-32 bg-zinc-950 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Proven Architectures</h2>
            <p className="text-zinc-500 font-body text-lg uppercase tracking-widest font-semibold">Transforming ideas into digital empires.</p>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-primary-dim font-headline font-bold hover:text-primary transition-colors hover:gap-4 uppercase text-sm"
          >
            View All Cases <ArrowUpRight size={18} />
          </motion.button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {cases.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl block"
            >
              <div className="absolute inset-0 bg-black/40 z-10 transition-colors group-hover:bg-black/20"></div>
              
              <div className="h-[400px] w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.client} 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>

              <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 md:p-10 pointer-events-none">
                <div className="flex justify-between items-start">
                  <span className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full font-body text-xs uppercase tracking-widest border border-white/10">
                    {item.client}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-auto cursor-pointer hover:bg-red-500">
                    <ArrowUpRight strokeWidth={3} size={24} />
                  </div>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-6">
                    <h3 className="font-headline text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 mb-2">
                      {item.metric}
                    </h3>
                    <p className="text-primary-dim font-headline font-bold uppercase tracking-wide text-sm">{item.metricDesc}</p>
                  </div>
                  
                  <div className="space-y-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                    <div>
                      <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-1">Problem</p>
                      <p className="text-zinc-300 text-sm">{item.problem}</p>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-1">Solution</p>
                      <p className="text-zinc-300 text-sm">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

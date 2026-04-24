import Reveal, { RevealItem } from './Reveal';

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
        
        <Reveal className="mb-20">
          <p className="font-body text-xs uppercase tracking-[0.3em] font-bold text-zinc-500 mb-4">Leadership</p>
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-white">
            Built by <span className="text-gradient">Creators</span>
          </h2>
        </Reveal>

        <Reveal stagger delay={0.2} className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {founders.map((founder, i) => (
            <RevealItem key={i} className="group relative cursor-pointer">
              <div className="py-8 border-b border-white/10 group-hover:border-primary/50 transition-colors">
                <h3 className="font-headline text-4xl font-black text-white mb-2 group-hover:text-primary transition-colors tracking-tight">
                  {founder.name}
                </h3>
                <p className="font-body text-sm uppercase tracking-widest text-zinc-500 font-semibold">
                  {founder.title}
                </p>
                <div className="h-auto opacity-100 mt-4 lg:h-0 lg:opacity-0 lg:mt-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-4 transition-all duration-500 ease-[0.22,1,0.36,1]">
                  <p className="text-zinc-400 font-body text-sm leading-relaxed">
                    {founder.desc}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </Reveal>

      </div>
    </section>
  );
}

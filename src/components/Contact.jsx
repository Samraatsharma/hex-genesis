import Reveal from './Reveal';

export default function Contact() {
  return (
    <section className="py-32 bg-background relative overflow-hidden" id="contact">
      {/* Background radial primary */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <Reveal 
          className="bg-zinc-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-16 text-center lg:text-left grid lg:grid-cols-2 gap-16 shadow-2xl"
        >
          
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                Let's scale <br/> your <span className="text-gradient">content.</span>
              </h2>
              <p className="text-zinc-400 font-body text-lg mb-12 max-w-md mx-auto lg:mx-0">
                Stop leaving money on the table with poor retention. Partner with us and dominate your niche.
              </p>
            </div>
            
            <div className="hidden lg:block space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-500 mb-2">Email</p>
                <a href="mailto:hello@hexagenisys.com" className="text-xl font-headline font-bold text-white hover:text-primary transition-colors">hello@hexagenisys.com</a>
              </div>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  In
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  Ig
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  Yt
                </a>
              </div>
            </div>
          </div>

          <form className="space-y-6 bg-black/40 p-8 rounded-3xl border border-white/5">
            <div>
              <label className="block text-zinc-400 font-body text-sm font-medium mb-2 pl-2">Name</label>
              <input 
                type="text" 
                className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-6 py-4 text-white font-body focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-600"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-zinc-400 font-body text-sm font-medium mb-2 pl-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-6 py-4 text-white font-body focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-600"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-zinc-400 font-body text-sm font-medium mb-2 pl-2">Message</label>
              <textarea 
                rows="4" 
                className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-6 py-4 text-white font-body focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-600 resize-none"
                placeholder="Tell us about your channels, goals, and current bottlenecks..."
              ></textarea>
            </div>
            <button 
              type="button" 
              className="w-full bg-gradient-primary text-black font-headline font-bold text-lg py-4 rounded-xl hover:shadow-[0_0_20px_rgba(255,83,87,0.4)] transition-all hover:-translate-y-1"
            >
              Submit Inquiry
            </button>
          </form>

        </Reveal>
      </div>
    </section>
  );
}

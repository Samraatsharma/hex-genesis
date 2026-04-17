export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-black border-t border-white/5 z-50 relative mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Hexa Genisys" className="h-6 w-auto object-contain" />
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#contact" className="font-body text-xs uppercase font-bold tracking-widest text-zinc-500 hover:text-white transition-all">Contact</a>
          <a href="#" className="font-body text-xs uppercase font-bold tracking-widest text-zinc-500 hover:text-white transition-all">Twitter</a>
          <a href="#" className="font-body text-xs uppercase font-bold tracking-widest text-zinc-500 hover:text-white transition-all">Instagram</a>
          <a href="#" className="font-body text-xs uppercase font-bold tracking-widest text-zinc-500 hover:text-white transition-all">LinkedIn</a>
        </div>
        
        <div className="flex flex-col md:text-right text-center gap-1">
          <span className="font-body text-[10px] uppercase tracking-widest text-zinc-600 font-semibold">Built by Mayur & Rohan</span>
          <span className="font-body text-xs font-medium text-zinc-700">
            © {new Date().getFullYear()} Hexa Genisys.
          </span>
        </div>
      </div>
    </footer>
  );
}

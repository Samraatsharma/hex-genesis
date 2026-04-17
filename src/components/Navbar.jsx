import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar({ isIntro }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
          scrolled ? 'py-4 glass-panel border-b border-white/5 shadow-2xl bg-zinc-950/70' : 'py-6 bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-10 lg:px-14 max-w-[1400px] mx-auto w-full">
          
          {/* LOGO: Left */}
          <a href="#" className="flex items-center gap-2 group w-32 md:w-48 relative h-10">
            {/* The destination layout layoutId component */}
            <AnimatePresence>
              {!isIntro && (
                <motion.img 
                  layoutId="hexa-logo"
                  src="/logo.png" 
                  alt="Hexa Genisys" 
                  className="absolute left-0 top-0 h-full w-auto object-contain pl-2"
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </AnimatePresence>
          </a>

          {/* NAVIGATION LINKS: Center */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body uppercase tracking-widest text-[0.7rem] font-medium text-zinc-400 hover:text-white transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary-dim transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA: Right */}
          <div className="hidden md:flex justify-end w-32 md:w-48">
            <button className="bg-gradient-primary text-black font-body uppercase tracking-widest text-[0.7rem] font-bold px-6 py-3 rounded-full hover:shadow-[0_0_20px_rgba(255,83,87,0.4)] hover:scale-105 transition-all duration-300">
              Book Call
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-zinc-200 p-2 z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-headline text-3xl font-bold tracking-tight text-zinc-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="mt-8 bg-gradient-primary text-black font-body uppercase tracking-widest text-[0.8rem] font-bold px-10 py-5 rounded-full w-[80%] max-w-sm">
              Book a Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

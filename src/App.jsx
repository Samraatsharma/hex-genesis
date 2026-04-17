import { useState, useEffect } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Founders from './components/Founders'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { MessageCircle } from 'lucide-react'

function App() {
  const [isIntro, setIsIntro] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const hasSeen = sessionStorage.getItem('hasSeenIntro')
    if (!hasSeen) {
      setIsIntro(true)
      sessionStorage.setItem('hasSeenIntro', 'true')
      
      // Auto-handoff after 1.8s
      const timer = setTimeout(() => {
        setIsIntro(false)
      }, 1800)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!mounted) return null; // Avoid SSR flashes if any

  return (
    <div className="w-full min-h-screen bg-background text-zinc-200 font-body relative overflow-x-hidden selection:bg-primary/30 selection:text-primary-dim">
      
      <LayoutGroup>
        
        {/* Intro Overlay Background */}
        <AnimatePresence>
          {isIntro && (
            <motion.div 
              className="fixed inset-0 z-[100] bg-background pointer-events-auto"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
          )}
        </AnimatePresence>

        {/* Intro Centered Logo - MUST BE IN FLEX CONTAINER */}
        <div className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none">
          <AnimatePresence>
            {isIntro && (
              <motion.img
                layoutId="hexa-logo"
                src="/logo.png"
                alt="Hexa Genisys"
                className="w-48 md:w-72 h-auto object-contain drop-shadow-[0_0_30px_rgba(255,83,87,0.4)]"
                initial={{ scale: 0.9, opacity: 0, filter: "brightness(0.5)" }}
                animate={{ scale: 1, opacity: 1, filter: "brightness(1) drop-shadow(0px 0px 40px rgba(255,83,87,0.8))" }}
                exit={{ opacity: 1 }} // Do not destroy opacity on exit, let layoutId handle it
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Main Application Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isIntro ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Navbar isIntro={isIntro} />
          
          <main>
            <Hero />
            <SocialProof />
            <Services />
            <CaseStudies />
            <Founders />
            <WhyChooseUs />
            <Contact />
          </main>

          <Footer />

          {/* Floating WhatsApp Button */}
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-110 hover:shadow-emerald-500/50 transition-all duration-300 pointer-events-auto"
          >
            <MessageCircle size={28} />
          </a>
        </motion.div>

      </LayoutGroup>

    </div>
  )
}

export default App

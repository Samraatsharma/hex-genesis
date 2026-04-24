import { motion } from 'framer-motion';

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full overflow-hidden bg-background">
      {/* Subtle animated grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      ></div>
      
      {/* Soft gradient orb in the center tracking scroll subtly or static */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-[0.05]"
        style={{
          background: 'radial-gradient(circle, rgba(255,83,87,1) 0%, rgba(9,9,11,0) 70%)'
        }}
      ></motion.div>
    </div>
  );
}

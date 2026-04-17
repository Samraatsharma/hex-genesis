import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Video, Rocket, BrainCircuit, LineChart } from 'lucide-react';

const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const rotateYValue = ((mouseX / width) - 0.5) * 15; // Max 15 deg tilt
    const rotateXValue = ((mouseY / height) - 0.5) * -15;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY, transformPerspective: 1000 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={`relative ${className} preserve-3d`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl z-0 pointer-events-none"></div>
      {children}
    </motion.div>
  );
};

export default function Services() {
  const services = [
    {
      title: "High-Retention Editing",
      desc: "Psychologically engineered pacing and visual hooks designed to maximize AVD.",
      icon: <Video size={32} className="text-primary mb-6" />,
      colSpan: "lg:col-span-1 md:col-span-1",
      delay: 0.1
    },
    {
      title: "Viral Reels Architecture",
      desc: "Short-form content systems engineered for the infinite scroll, optimizing for shares and watch time.",
      icon: <Rocket size={32} className="text-blue-400 mb-6" />,
      colSpan: "lg:col-span-1 md:col-span-1",
      delay: 0.2
    },
    {
      title: "AI Ad Generation",
      desc: "Hyper-personalized video advertising at scale, utilizing advanced generative models for rapid creative testing.",
      icon: <BrainCircuit size={32} className="text-purple-400 mb-6" />,
      colSpan: "lg:col-span-1 md:col-span-2",
      delay: 0.3
    },
    {
      title: "Content Strategy",
      desc: "Data-driven roadmaps to position your brand algorithmically above competitors.",
      icon: <LineChart size={32} className="text-emerald-400 mb-6" />,
      colSpan: "lg:col-span-1 md:col-span-2",
      delay: 0.4
    }
  ];

  return (
    <section id="services" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 mb-20 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
              Architectural Video Solutions
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl font-body leading-relaxed">
              We don't just edit. We build retention engines designed for algorithmic dominance using advanced psychology and AI workflows.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: service.delay }}
              className={service.colSpan}
            >
              <TiltCard className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 h-[350px] flex flex-col justify-end group shadow-2xl overflow-hidden cursor-crosshair">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shine_1.5s_ease-in-out] pointer-events-none z-20 transform -skew-x-12"></div>
                
                <div className="relative z-30 transform-gpu translate-z-10 transition-transform duration-300 group-hover:-translate-y-4">
                  {service.icon}
                  <h3 className="font-headline text-2xl font-bold mb-3 text-white group-hover:text-primary-dim transition-colors">{service.title}</h3>
                  <p className="text-zinc-400 text-sm font-body leading-relaxed">{service.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes shine {
          100% { left: 100%; top: 100%; }
        }
        .preserve-3d { transform-style: preserve-3d; }
        .translate-z-10 { transform: translateZ(30px); }
      `}</style>
    </section>
  );
}

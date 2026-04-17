import { motion } from 'framer-motion';
import { Zap, Bot, Target } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Zap size={32} />,
      title: "Hyper-Speed Output",
      desc: "Our optimized AI workflows cut production time by 60%, allowing you to test more angles, faster."
    },
    {
      icon: <Bot size={32} />,
      title: "The AI Advantage",
      desc: "We don't use AI as a gimmick. We use it to analyze data, generate variations, and find the winning formula."
    },
    {
      icon: <Target size={32} />,
      title: "Results-Driven",
      desc: "Aesthetic is useless without conversion. Every frame is optimized for retention and action."
    }
  ];

  return (
    <section className="py-32 bg-zinc-950 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Why Choose Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 font-body text-lg"
          >
            We operate at the intersection of psychology, data, and design.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-primary-dim mb-6 group-hover:bg-primary/10 group-hover:text-primary group-hover:rotate-12 transition-all">
                {reason.icon}
              </div>
              <h3 className="text-white font-headline text-2xl font-bold mb-3">{reason.title}</h3>
              <p className="text-zinc-400 font-body leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1F2B]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1761599821310-da0d6356b4f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGNvZGUlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzIzNzgwODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Geometric Code Background" 
          className="w-full h-full object-cover opacity-20 filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2B]/80 via-[#1A1F2B]/90 to-[#1A1F2B]" />
      </div>

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center">
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#252A36] border border-[#313640] px-4 py-1.5 rounded-full text-[#00D1B2] text-xs font-semibold tracking-wider uppercase mb-8 shadow-sm"
        >
          Yasmine Harroudi
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#E0E6ED] leading-tight mb-6 max-w-4xl"
        >
          Développeuse Full Stack, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1B2] to-[#6366F1]">
            Experte en Droit Privé
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[#A0AEC0] text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-light"
        >
          Rigueur juridique. Agilité technique. Des solutions numériques sur-mesure.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="#projects" 
            className="group relative inline-flex items-center gap-3 bg-[#00D1B2] text-[#1A1F2B] px-8 py-4 rounded-lg font-semibold text-sm tracking-wide overflow-hidden transition-all hover:bg-[#00b59c] hover:shadow-[0_0_20px_rgba(0,209,178,0.3)]"
          >
            <span className="relative z-10">Découvrir mes projets</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-[#A0AEC0]"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}

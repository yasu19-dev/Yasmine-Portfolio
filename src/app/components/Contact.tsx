import { Mail, Linkedin, Github, FileText, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#1A1F2B] text-[#E0E6ED] relative overflow-hidden border-t border-[#313640]">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00D1B2]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#252A36] rounded-full text-[#00D1B2] text-sm font-semibold mb-8 border border-[#313640]">
            <span className="w-2 h-2 rounded-full bg-[#00D1B2] animate-pulse" />
            Disponible pour de nouveaux projets
          </div>

          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-[#E0E6ED]">
            Une Vision ? <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1B2] to-[#6366F1]">Concrétisons-la.</span>
          </h2>
          
          <p className="text-[#A0AEC0] text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Vous cherchez une expertise hybride pour votre projet LegalTech ou une application web performante ? 
            Discutons de vos enjeux et transformons vos idées en solutions numériques.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a 
              href="mailto:yasmineharroudi2020@gmail.com"
              className="group w-full sm:w-auto px-8 py-4 bg-[#00D1B2] text-[#1A1F2B] font-bold rounded-lg hover:bg-[#00b59c] transition-all hover:shadow-[0_0_20px_rgba(0,209,178,0.3)] flex items-center justify-center gap-3"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Me contacter par email</span>
              <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="/CV-Yasmine.pdf" 
              target="_blank"
              className="group w-full sm:w-auto px-8 py-4 bg-[#252A36] text-[#E0E6ED] border border-[#313640] font-bold rounded-lg hover:border-[#00D1B2] hover:text-[#00D1B2] transition-all flex items-center justify-center gap-3"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Télécharger mon CV</span>
            </a>
          </div>

          
        </motion.div>
      </div>
    </section>
  );
}

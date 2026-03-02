import { Code, Scale, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export function Approach() {
  return (
    <section id="approach" className="py-24 bg-[#1A1F2B] text-[#E0E6ED] border-b border-[#313640]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-2 text-[#00D1B2] mb-4">
            <Scale className="w-5 h-5" />
            <span className="font-semibold uppercase tracking-widest text-xs">Méthodologie</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">L'Art de l'Équilibre</h2>
          <p className="text-[#A0AEC0] max-w-2xl">
            Mon approche combine deux mondes souvent opposés pour livrer des produits d'exception.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Column 1: Tech */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 bg-[#252A36] p-8 rounded-xl border-l-4 border-[#00D1B2] relative shadow-lg"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-[#1A1F2B] rounded-lg">
                <Code className="w-8 h-8 text-[#00D1B2]" />
              </div>
              <h3 className="text-2xl font-bold font-serif">Le Code</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00D1B2] mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#E0E6ED]">Agilité & Performance</h4>
                  <p className="text-sm text-[#A0AEC0]">Développement itératif et optimisation continue pour une expérience utilisateur fluide.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00D1B2] mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#E0E6ED]">Architecture Scalable</h4>
                  <p className="text-sm text-[#A0AEC0]">Solutions pensées pour évoluer avec la croissance de votre structure.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00D1B2] mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#E0E6ED]">Stack Moderne</h4>
                  <p className="text-sm text-[#A0AEC0]">Utilisation des dernières technologies (React, Next.js, Node) pour garantir pérennité et maintenabilité.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Column 2: Legal */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 bg-[#252A36] p-8 rounded-xl border-l-4 border-[#6366F1] relative shadow-lg"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-[#1A1F2B] rounded-lg">
                <Scale className="w-8 h-8 text-[#6366F1]" />
              </div>
              <h3 className="text-2xl font-bold font-serif">La Rigueur</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#6366F1] mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#E0E6ED]">Conformité RGPD/Privacy</h4>
                  <p className="text-sm text-[#A0AEC0]">Intégration native des principes de "Privacy by Design" dès la première ligne de code.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#6366F1] mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#E0E6ED]">Précision Juridique</h4>
                  <p className="text-sm text-[#A0AEC0]">Compréhension fine des besoins métiers des professions réglementées.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#6366F1] mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#E0E6ED]">Sécurité Renforcée</h4>
                  <p className="text-sm text-[#A0AEC0]">Protocoles stricts pour la protection des données sensibles et confidentielles.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

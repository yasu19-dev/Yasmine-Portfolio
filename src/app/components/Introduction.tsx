import { Scale, Code, Server, Database } from "lucide-react";
import { motion } from "motion/react";

export function Introduction() {
  return (
    <section id="about" className="py-24 bg-[#1A1F2B] text-[#E0E6ED] border-b border-[#313640]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 text-[#00D1B2]">
            <Scale className="w-5 h-5" />
            <span className="font-semibold uppercase tracking-widest text-xs">Mon Profil</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#E0E6ED] leading-tight"><span className="italic">Une Double Compétence </span><br /><span className="italic"> </span><span className="text-[#00D1B2]"><span className="italic">Unique</span></span></h2>
          <p className="text-[#A0AEC0] text-lg leading-relaxed max-w-xl text-justify">
            Juriste de formation (Master en Droit Privé), j'ai opéré une transition stratégique vers le développement Full Stack. 
            Je ne me contente pas de coder des applications, je comprends les enjeux réglementaires et structurels de vos projets.
          </p>
          <p className="text-[#A0AEC0] text-lg leading-relaxed max-w-xl text-justify">
            Ma maîtrise de React, Laravel et MongoDB, couplée à mon expertise en conformité, me permet de concevoir des outils digitaux robustes, sécurisés et parfaitement adaptés aux besoins des cabinets et directions juridiques.
          </p>
        </motion.div>

        {/* Right: 2x2 Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Card 1: Expertise Juridique */}
          <div className="bg-[#252A36] p-6 rounded-xl border border-[#313640] hover:border-[#00D1B2] transition-colors group">
            <div className="bg-[#1A1F2B] w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00D1B2] transition-colors">
              <Scale className="w-6 h-6 text-[#00D1B2] group-hover:text-[#1A1F2B]" />
            </div>
            <h3 className="font-serif text-lg font-bold mb-2">Expertise Juridique</h3>
            <p className="text-sm text-[#A0AEC0]">Master Droit Privé, Conformité RGPD, Analyse Contractuelle.</p>
          </div>

          {/* Card 2: Front-end */}
          <div className="bg-[#252A36] p-6 rounded-xl border border-[#313640] hover:border-[#6366F1] transition-colors group">
            <div className="bg-[#1A1F2B] w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#6366F1] transition-colors">
              <Code className="w-6 h-6 text-[#6366F1] group-hover:text-[#E0E6ED]" />
            </div>
            <h3 className="font-serif text-lg font-bold mb-2">Front-end</h3>
            <p className="text-sm text-[#A0AEC0]">React.js, Redux, Interface UI/UX.</p>
          </div>

          {/* Card 3: Back-end */}
          <div className="bg-[#252A36] p-6 rounded-xl border border-[#313640] hover:border-[#F24E1E] transition-colors group">
            <div className="bg-[#1A1F2B] w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#F24E1E] transition-colors">
              <Server className="w-6 h-6 text-[#F24E1E] group-hover:text-[#E0E6ED]" />
            </div>
            <h3 className="font-serif text-lg font-bold mb-2">Back-end</h3>
            <p className="text-sm text-[#A0AEC0]">Laravel, Node.js, API REST.</p>
          </div>

          {/* Card 4: Base de Données */}
          <div className="bg-[#252A36] p-6 rounded-xl border border-[#313640] hover:border-[#00D1B2] transition-colors group">
            <div className="bg-[#1A1F2B] w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00D1B2] transition-colors">
              <Database className="w-6 h-6 text-[#00D1B2] group-hover:text-[#1A1F2B]" />
            </div>
            <h3 className="font-serif text-lg font-bold mb-2">Base de Données</h3>
            <p className="text-sm text-[#A0AEC0]">MongoDB, PostgreSQL, Modélisation.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

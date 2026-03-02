import { Github, ExternalLink, Code, Scale, Download, GraduationCap } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Application Cabinet d'Avocats",
    description: "Application de bureau pour la gestion centralisée des dossiers clients, de la facturation et de l'agenda du cabinet. Une solution sur mesure pour optimiser l'organisation interne.",
    tech: ["Python", "Tkinter", "MongoDB"],
    image: "./login.avif",
    github: "https://github.com/yasu19-dev/Projet_Tkinter",
    demo: null,
  },
  {
    id: 2,
    title: "Plateforme Tribunal",
    description: "Plateforme web complète pour la gestion et le suivi des procédures de référés. Digitalisation des flux juridiques pour une meilleure efficacité et transparence.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlfGVufDF8fHx8MTc3MjM3ODA4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    github: "https://github.com/yasu19-dev/Plateforme_Tribunal",
    demo: null,
  },
  {
    id: 3,
    title: "Clone Netflix",
    description: "Reproduction fidèle de l'interface utilisateur de Netflix avec consommation d'API pour l'affichage dynamique des catalogues de films et séries.",
    tech: ["React.js", "API TMDb", "CSS Modules"],
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXRmbGl4fGVufDF8fHx8MTc3MjM3ODA4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    github: "https://github.com/yasu19-dev/projet-react-netflix",
    demo: "https://demo.com",
  },
  {
    id: 4,
    title: "Site Interactif",
    description: "Site web ludique proposant des quiz culturels interactifs avec gestion des scores et animations fluides pour une expérience utilisateur engageante.",
    tech: ["React.js", "Framer Motion", "Context API"],
    image: "./quiz.webp",
    github: "https://github.com/yasu19-dev/amazigh-quiz",
    demo: "https://demo.com",
  },
  {
    id: 5,
    title: "Parapharmacie en Ligne (E-commerce)",
    description: "Plateforme full-stack sécurisée. Gestion dynamique du catalogue (JSON), système de panier avec sessions, et génération automatisée des reçus au format PDF.",
    tech: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
    image: "para.png",
    github: "https://github.com/yasu19-dev/parapharmacie-ecommerce",
    demo: "https://demo.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#1A1F2B] text-[#E0E6ED]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-2 text-[#00D1B2] mb-4">
            <Code className="w-5 h-5" />
            <span className="font-semibold uppercase tracking-widest text-xs">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Réalisations Concrètes</h2>
          <p className="text-[#A0AEC0] max-w-2xl">
            Des projets qui démontrent ma capacité à traduire des besoins juridiques complexes en solutions techniques performantes.
          </p>
        </div>

        {/* Academic Excellence Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Master's Thesis */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#252A36] to-[#1A1F2B] border border-[#00D1B2]/50 rounded-xl p-8 relative overflow-hidden group shadow-[0_0_20px_rgba(0,209,178,0.1)] hover:shadow-[0_0_30px_rgba(0,209,178,0.2)] transition-all flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#00D1B2]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 p-4 bg-[#1A1F2B] rounded-full border border-[#00D1B2] shadow-[0_0_10px_rgba(0,209,178,0.15)] group-hover:scale-105 transition-transform duration-300">
                <Scale className="w-8 h-8 text-[#00D1B2]" />
              </div>
              <div className="inline-block bg-[#00D1B2] text-[#1A1F2B] font-bold px-3 py-1 rounded-full uppercase tracking-wider text-left text-[11px]">
                Excellence Académique
              </div>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#E0E6ED] mb-3">
                Mémoire de Master en Droit Privé
              </h3>
              <p className="text-[#A0AEC0] text-base font-light italic mb-6 border-l-2 border-[#00D1B2] pl-4">
                La dématérialisation des procédures judiciaires et son rôle dans la promotion de l'investissement.
              </p>
            </div>
            
            <div className="mt-auto pt-4">
              <a 
                href="/memoire.pdf" 
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#1A1F2B] text-[#00D1B2] border border-[#00D1B2] rounded-lg font-semibold hover:bg-[#00D1B2] hover:text-[#1A1F2B] transition-all duration-300 w-full justify-center group-hover:shadow-[0_0_15px_rgba(0,209,178,0.2)]"
              >
                <Download className="w-4 h-4" />
                <span className="text-[15px] text-[16px] text-center text-[15px] text-[16px]">Télécharger le mémoire (PDF)</span>
              </a>
            </div>
          </motion.div>

          {/* Card 2: License Project */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#252A36] to-[#1A1F2B] border border-[#313640] rounded-xl p-8 relative overflow-hidden group shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(0,209,178,0.15)] hover:border-[#00D1B2]/30 transition-all flex flex-col h-full"
          >
             <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#00D1B2]/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 p-4 bg-[#1A1F2B] rounded-full border border-[#313640] group-hover:border-[#00D1B2] shadow-[0_0_10px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_10px_rgba(0,209,178,0.15)] transition-all duration-300">
                <GraduationCap className="w-8 h-8 text-[#A0AEC0] group-hover:text-[#00D1B2] transition-colors" />
              </div>
              <div className="inline-block bg-[#252A36] border border-[#313640] text-[#A0AEC0] group-hover:border-[#00D1B2] group-hover:text-[#00D1B2] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider transition-colors">
                Fondations Juridiques
              </div>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#E0E6ED] mb-3">
                Projet de Fin d'Études (Licence)
              </h3>
              <p className="text-[#A0AEC0] text-base font-light italic mb-6 border-l-2 border-[#313640] group-hover:border-[#00D1B2] pl-4 transition-colors">
                L'indemnisation du retard du débiteur dans l'exécution de son obligation - Cas de la Covid-19.
              </p>
            </div>
            
            <div className="mt-auto pt-4">
              <a 
                href="/pfe.pdf" 
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#1A1F2B] text-[#A0AEC0] border border-[#313640] rounded-lg font-semibold hover:bg-[#1A1F2B] hover:text-[#00D1B2] hover:border-[#00D1B2] transition-all duration-300 w-full justify-center"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger le PFE (PDF)</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider & Subtitle */}
        <div className="flex items-center gap-4 py-8 mb-8">
          <div className="h-px bg-[#313640] flex-grow" />
          <span className="text-[#A0AEC0] text-sm uppercase tracking-widest font-semibold">
            Projets Techniques & Développement
          </span>
          <div className="h-px bg-[#313640] flex-grow" />
        </div>

        {/* Projects Grid - 2x2 Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#252A36] rounded-xl overflow-hidden border border-[#313640] hover:border-[#00D1B2] transition-all hover:shadow-[0_0_20px_rgba(0,209,178,0.1)] flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-[#1A1F2B]/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold text-[#E0E6ED] mb-3 group-hover:text-[#00D1B2] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#A0AEC0] mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-3 py-1 text-xs font-medium text-[#00D1B2] bg-[#00D1B2]/10 rounded-full border border-[#00D1B2]/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-[#A0AEC0] hover:text-[#E0E6ED] transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code Source</span>
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-[#00D1B2] hover:text-[#00b59c] transition-colors ml-auto"
                    >
                      <span>Voir le site</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

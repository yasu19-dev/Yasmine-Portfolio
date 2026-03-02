import { motion } from "motion/react";
import { 
  Code2, 
  Layers, 
  Server, 
  Database, 
  Globe, 
  Layout, 
  StickyNote, 
  Figma, 
  Github, 
  Scale, 
  Hexagon 
} from "lucide-react";

const skills = [
  // Ligne 1 : Outils Full Stack
  { name: "React", icon: Code2, color: "#61DAFB" },
  { name: "Redux", icon: Layers, color: "#764ABC" },
  { name: "Node.js", icon: Hexagon, color: "#339933" },
  { name: "Laravel", icon: Server, color: "#FF2D20" },
  { name: "MongoDB", icon: Database, color: "#47A248" },
  
  // Ligne 2 : Méthodologies & CMS
  { name: "Agile/Scrum", icon: Layout, color: "#E0E6ED" },
  { name: "Design Thinking", icon: StickyNote, color: "#F7DF1E" },
  { name: "WordPress", icon: Globe, color: "#21759B" },
  
  // Ligne 3 : Outils de Code/Version
  { name: "Dev Mode / Figma", icon: Figma, color: "#F24E1E" },
  { name: "Git / GitHub", icon: Github, color: "#E0E6ED" },
  
  // Nouveau badge : Conformité
  { name: "Conformité Juridique", icon: Scale, color: "#00D1B2" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#1A1F2B] text-[#E0E6ED] relative overflow-hidden border-t border-[#313640]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D1B2]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Outils & Méthodologies</h2>
          <p className="text-[#A0AEC0] max-w-2xl mx-auto">
            Une boîte à outils complète pour concevoir des applications web robustes et évolutives, enrichie par une expertise juridique.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex items-center gap-3 bg-[#252A36] border border-[#313640] hover:border-[#00D1B2] px-6 py-4 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(0,209,178,0.15)] cursor-default"
            >
              <skill.icon 
                className="w-6 h-6 transition-colors group-hover:text-[#00D1B2]" 
                style={{ color: skill.color }} 
              />
              <span className="font-semibold text-lg text-[#E0E6ED] group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

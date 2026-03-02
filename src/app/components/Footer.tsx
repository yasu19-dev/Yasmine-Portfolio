import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1F2B] border-t border-[#313640] py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-[#A0AEC0]">
        
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xl font-serif text-[#E0E6ED]">
            Y.H. <span className="text-[#00D1B2]">Dev</span>
          </div>
          <p className="text-sm font-light leading-relaxed max-w-xs">
            Fusionnant la rigueur du droit privé avec l'innovation du développement Full Stack.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[#E0E6ED] font-serif font-bold text-lg">Liens Utiles</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#projects" className="hover:text-[#00D1B2] transition-colors">Mes Projets</a></li>
            <li><a href="#about" className="hover:text-[#00D1B2] transition-colors">À Propos</a></li>
            <li><a href="#contact" className="hover:text-[#00D1B2] transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Legal & Social */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[#E0E6ED] font-serif font-bold text-lg">Contact & Social</h4>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/yasmine-harroudi/" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#252A36] rounded-full hover:bg-[#00D1B2] hover:text-[#1A1F2B] transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/yasu19-dev" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#252A36] rounded-full hover:bg-[#00D1B2] hover:text-[#1A1F2B] transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:yasmineharroudi2000@gmail.com" className="p-2 bg-[#252A36] rounded-full hover:bg-[#00D1B2] hover:text-[#1A1F2B] transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs mt-4 opacity-60">
            © {new Date().getFullYear()} Tous droits réservés. Mentions Légales.
          </p>
        </div>
      </div>
    </footer>
  );
}

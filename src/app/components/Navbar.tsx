import { motion } from "motion/react";
import { Scale, Code2, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "À Propos", href: "#about" },
    { name: "Projets", href: "#projects" },
    { name: "Approche", href: "#approach" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1F2B]/90 backdrop-blur-md border-b border-[#313640]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2 text-foreground cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="relative w-8 h-8 flex items-center justify-center bg-primary rounded-lg text-[#1A1F2B]">
              <Scale size={18} className="absolute" />
            </div>
            <span className="font-serif font-bold text-xl tracking-wide">LEGAL<span className="text-primary">TECH</span></span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a href="#" className="bg-primary text-[#1A1F2B] hover:bg-opacity-90 px-4 py-2 rounded-md text-sm font-bold transition-all">
                CV
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-white hover:bg-[#313640] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#1A1F2B] border-b border-[#313640]"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#" className="block w-full text-center bg-primary text-[#1A1F2B] px-4 py-2 rounded-md text-base font-bold mt-4">
              Télécharger CV
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

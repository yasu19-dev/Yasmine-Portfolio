import { useParams, Link, Navigate } from "react-router";
import { Github, ExternalLink, ArrowLeft, PlayCircle } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../data/projects";
import { useEffect } from "react";

export function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  
  // Find the project by ID
  const project = projects.find((p) => p.id.toString() === id);

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const isYoutube = project.demo?.includes('youtu');
  const youtubeId = isYoutube ? project.demo?.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/)?.[1] : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#151923] pt-24 pb-12"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#A0AEC0] hover:text-[#00D1B2] transition-colors mb-12 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour au portfolio</span>
        </Link>

        <div className="bg-[#1A1F2B] border border-[#313640] rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#E0E6ED] mb-6">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-10">
            {project.tech.map((t: string) => (
              <span
                key={t}
                className="px-4 py-1.5 text-sm font-medium text-[#00D1B2] bg-[#00D1B2]/10 rounded-full border border-[#00D1B2]/20 shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="text-[#A0AEC0] mb-12 space-y-6 text-lg leading-relaxed">
            <p className="font-semibold text-[#E0E6ED] text-xl leading-relaxed">{project.description}</p>
            {project.detailedDescription && (
              <div 
                dangerouslySetInnerHTML={{ __html: project.detailedDescription }} 
                className="mt-8 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:list-inside [&>ul]:space-y-3 [&>ul]:mb-8 [&>strong]:text-[#E0E6ED] [&>strong]:font-bold text-[#A0AEC0]" 
              />
            )}
          </div>

          {youtubeId && (
            <div className="mb-12 space-y-8">
              <h2 className="text-3xl font-serif font-bold text-[#E0E6ED] border-b border-[#313640] pb-4">
                Démo Vidéo
              </h2>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#313640] shadow-2xl bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          )}

          {project.screenshots && project.screenshots.length > 0 && (
            <div className="space-y-8 mb-12">
              <h2 className="text-3xl font-serif font-bold text-[#E0E6ED] border-b border-[#313640] pb-4">
                Captures d'écran
              </h2>
              <div className="grid grid-cols-1 gap-8">
                {project.screenshots.map((screen: string, idx: number) => (
                  <img 
                    key={idx} 
                    src={screen} 
                    alt={`Screenshot ${idx + 1}`} 
                    className="w-full h-auto rounded-2xl border border-[#313640] shadow-2xl" 
                  />
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-[#313640]">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-[#00D1B2] text-[#1A1F2B] font-bold rounded-xl hover:bg-[#00b59c] transition-all cursor-pointer shadow-[0_0_20px_rgba(0,209,178,0.3)]"
              >
                {isYoutube ? <PlayCircle className="w-6 h-6" /> : <ExternalLink className="w-6 h-6" />}
                <span>{isYoutube ? "Voir sur YouTube" : "Voir le site"}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

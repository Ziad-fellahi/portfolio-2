import { portfolioData } from '@/data/data';
import ProjectDetail from '@/components/ProjectDetail';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AutoEcolesProjectPage() {
  const project = portfolioData.projects.find(p => p.id === 1);

  if (!project || !project.detailedPresentation) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <p className="text-slate-400">Projet non trouvé</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Navigation de retour */}
      <div className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-lg border-b border-slate-800 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-emerald-600 text-white font-bold py-2.5 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour aux projets</span>
          </Link>
        </div>
      </div>

      {/* Contenu du projet */}
      <ProjectDetail
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        detailedPresentation={project.detailedPresentation}
      />
    </main>
  );
}

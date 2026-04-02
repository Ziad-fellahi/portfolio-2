import { portfolioData } from '@/data/data';
import ProjectDetail from '@/components/ProjectDetail';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type AutoEcolesDetailedPresentation = {
  challenge: { title: string; content: string };
  stack: { title: string; choices: { technology: string; reasons: string[] }[] };
  security: { title: string; features: { name: string; description: string; implementation: string[] }[] };
  challenges: { title: string; items: { challenge: string; problem: string; solution: string; result: string }[] };
  scalability: { title: string; content: string; metrics: string[] };
  technicalHighlights: string[];
};

function isAutoEcolesDetailedPresentation(value: unknown): value is AutoEcolesDetailedPresentation {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.challenge === 'object' &&
    candidate.challenge !== null &&
    typeof candidate.stack === 'object' &&
    candidate.stack !== null &&
    typeof candidate.security === 'object' &&
    candidate.security !== null &&
    typeof candidate.challenges === 'object' &&
    candidate.challenges !== null &&
    typeof candidate.scalability === 'object' &&
    candidate.scalability !== null &&
    Array.isArray(candidate.technicalHighlights)
  );
}

export default function AutoEcolesProjectPage() {
  const project = portfolioData.projects.find(p => p.id === 1);

  if (!project || !isAutoEcolesDetailedPresentation(project.detailedPresentation)) {
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

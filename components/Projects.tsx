"use client";

import { Github, ExternalLink, Folder, ArrowRight, Star, Users } from 'lucide-react';
import Link from 'next/link';

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string | null;
  image: string;
  featured?: boolean;
  teamProject?: boolean;
  teamSize?: number;
  detailedPresentation?: any;
}

interface ProjectsProps {
  projects: ProjectItem[];
}

export default function Projects({ projects }: ProjectsProps) {
  // Fonction pour générer le bon lien selon le projet
  const getProjectLink = (projectId: number) => {
    const links: { [key: number]: string } = {
      1: '/projet-auto-ecoles',
      2: '/projets/gestion-scolaire',
      3: '/projet/govo-glitz',
    };
    return links[projectId] || '#';
  };

  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Mes <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">Projets</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group bg-slate-900 border rounded-lg overflow-hidden hover:border-emerald-500/50 transition-all ${
                project.featured ? 'border-emerald-500/30 ring-2 ring-emerald-500/10' : 'border-slate-800'
              }`}
            >
              {/* En-tête avec icône */}
              <div className="p-6">
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.featured && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                      <Star className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
                      <span className="text-emerald-500 text-xs font-semibold">Projet Phare</span>
                    </div>
                  )}
                  {project.teamProject && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full">
                      <Users className="w-3.5 h-3.5 text-blue-500" />
                      <span className="text-blue-500 text-xs font-semibold">Projet en groupe de {project.teamSize}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg group-hover:border-emerald-500/50 transition-all">
                    <Folder className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-slate-800 rounded-lg transition-all"
                      >
                        <Github className="w-5 h-5 text-slate-400 hover:text-emerald-500" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-slate-800 rounded-lg transition-all"
                      >
                        <ExternalLink className="w-5 h-5 text-slate-400 hover:text-cyan-500" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Titre et description */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-950 border border-slate-800 text-cyan-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bouton vers détails si disponible */}
                {project.detailedPresentation && (
                  <Link 
                    href={getProjectLink(project.id)}
                    className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

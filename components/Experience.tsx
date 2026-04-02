"use client";

import { Briefcase, CheckCircle } from 'lucide-react';

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  missions: string[];
  technologies: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section className="py-20 px-4 bg-slate-900/50" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Expériences <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">Professionnelles</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-slate-950 border border-slate-800 rounded-lg p-6 hover:border-cyan-500/50 transition-all"
            >
              {/* En-tête */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                  <Briefcase className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  <p className="text-cyan-400">{exp.role}</p>
                  <p className="text-slate-500 text-sm mt-1">{exp.period}</p>
                </div>
              </div>

              {/* Missions */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-400 mb-2">Missions réalisées :</h4>
                <ul className="space-y-2">
                  {exp.missions.map((mission, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-slate-400 mb-2">Technologies :</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-900 border border-slate-700 text-emerald-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

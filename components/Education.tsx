"use client";

import { GraduationCap } from 'lucide-react';

interface EducationItem {
  id: number;
  year: string;
  title: string;
  institution: string;
  description: string;
  status: string;
}

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section className="py-20 px-4" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Parcours & <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">Diplômes</span>
        </h2>

        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Point sur la ligne */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 -ml-4 bg-slate-950 border-2 border-emerald-500 rounded-full flex items-center justify-center z-10">
                  <GraduationCap className="w-4 h-4 text-emerald-500" />
                </div>

                {/* Carte */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all">
                    <span className="text-emerald-500 font-semibold text-sm">{item.year}</span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-1">{item.title}</h3>
                    <p className="text-cyan-400 text-sm mb-3">{item.institution}</p>
                    <p className="text-slate-400 text-sm mb-3">{item.description}</p>
                    <span className="inline-block px-3 py-1 bg-slate-800 text-emerald-400 text-xs rounded-full">
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

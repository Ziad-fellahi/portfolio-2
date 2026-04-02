"use client";

import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroSectionProps {
  identity: {
    name: string;
    title: string;
    subtitle: string;
    description: string;
    email: string;
    github: string;
    linkedin: string;
  };
}

export default function HeroSection({ identity }: HeroSectionProps) {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Nom et titre */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
          {identity.name}
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent mb-6">
          {identity.title}
        </h2>
        
        <p className="text-xl text-slate-400 mb-3">
          {identity.subtitle}
        </p>
        
        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
          {identity.description}
        </p>

        {/* Boutons sociaux */}
        <div className="flex gap-4 justify-center mb-12">
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500 rounded-lg transition-all"
          >
            <Github className="w-6 h-6 text-slate-300" />
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500 rounded-lg transition-all"
          >
            <Linkedin className="w-6 h-6 text-slate-300" />
          </a>
          <a
            href={`mailto:${identity.email}`}
            className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500 rounded-lg transition-all"
          >
            <Mail className="w-6 h-6 text-slate-300" />
          </a>
        </div>

        {/* Call to action */}
        <button
          onClick={scrollToProjects}
          className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
        >
          Découvrir mes projets
          <ArrowDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}

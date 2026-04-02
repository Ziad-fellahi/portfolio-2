"use client";

import { Shield, Lock, Code, Cloud, ExternalLink, Rss } from 'lucide-react';

interface ThematiqueItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface SourceItem {
  name: string;
  url: string;
  type: string;
}

interface VeilleProps {
  veille: {
    introduction: string;
    thematiques: ThematiqueItem[];
    sources: SourceItem[];
  };
}

const iconMap: { [key: string]: any } = {
  Shield: Shield,
  Lock: Lock,
  Code: Code,
  Cloud: Cloud,
};

export default function Veille({ veille }: VeilleProps) {
  return (
    <section className="py-20 px-4 bg-slate-900/50" id="veille">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Veille <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">Technologique</span>
        </h2>
        
        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-12">
          {veille.introduction}
        </p>

        {/* Thématiques */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-emerald-500" />
            Thématiques suivies
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {veille.thematiques.map((theme) => {
              const IconComponent = iconMap[theme.icon] || Shield;
              return (
                <div
                  key={theme.id}
                  className="bg-slate-950 border border-slate-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                      <IconComponent className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{theme.title}</h4>
                      <p className="text-slate-400 text-sm">{theme.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sources */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Rss className="w-6 h-6 text-cyan-500" />
            Sources et ressources
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {veille.sources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-950 border border-slate-800 rounded-lg p-4 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {source.name}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-cyan-500 transition-colors" />
                </div>
                <p className="text-slate-500 text-xs">{source.type}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

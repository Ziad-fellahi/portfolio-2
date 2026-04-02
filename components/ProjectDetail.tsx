"use client";

import { Shield, Code, Lock, Database, Zap, CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react';

interface TechChoice {
  technology: string;
  reasons: string[];
}

interface SecurityFeature {
  name: string;
  description: string;
  implementation: string[];
}

interface Challenge {
  challenge: string;
  problem: string;
  solution: string;
  result: string;
}

interface DetailedPresentation {
  challenge: {
    title: string;
    content: string;
  };
  stack: {
    title: string;
    choices: TechChoice[];
  };
  security: {
    title: string;
    features: SecurityFeature[];
  };
  challenges: {
    title: string;
    items: Challenge[];
  };
  scalability: {
    title: string;
    content: string;
    metrics: string[];
  };
  technicalHighlights: string[];
}

interface ProjectDetailProps {
  title: string;
  description: string;
  technologies: string[];
  detailedPresentation: DetailedPresentation;
}

export default function ProjectDetail({ title, description, technologies, detailedPresentation }: ProjectDetailProps) {
  return (
    <div className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* En-tête du projet */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-500 text-sm font-medium">Projet Production-Ready</span>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-900 border border-slate-700 text-cyan-400 text-sm font-medium rounded-lg hover:border-cyan-500/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Défi du Multi-Tenant */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg">
              <AlertCircle className="w-6 h-6 text-red-500" />
            </div>
            <h2 className="text-3xl font-bold text-white">{detailedPresentation.challenge.title}</h2>
          </div>
          
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
            <p className="text-slate-300 leading-relaxed whitespace-pre-line">
              {detailedPresentation.challenge.content}
            </p>
          </div>
        </section>

        {/* Stack Technique */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg">
              <Code className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-3xl font-bold text-white">{detailedPresentation.stack.title}</h2>
          </div>
          
          <div className="space-y-6">
            {detailedPresentation.stack.choices.map((choice, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  {choice.technology}
                </h3>
                <ul className="space-y-3">
                  {choice.reasons.map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Sécurité & RBAC */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-lg">
              <Shield className="w-6 h-6 text-emerald-500" />
            </div>
            <h2 className="text-3xl font-bold text-white">{detailedPresentation.security.title}</h2>
          </div>
          
          <div className="space-y-6">
            {detailedPresentation.security.features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-r from-slate-900/50 to-emerald-900/10 border border-slate-800 hover:border-emerald-500/30 rounded-xl p-6 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-emerald-500" />
                  {feature.name}
                </h3>
                <p className="text-slate-400 mb-4">{feature.description}</p>
                <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-4">
                  <p className="text-xs text-cyan-500 font-semibold mb-2 uppercase tracking-wide">Implémentation</p>
                  <ul className="space-y-2">
                    {feature.implementation.map((impl, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-emerald-500 flex-shrink-0">→</span>
                        <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">{impl}</code>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Défis Techniques */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg">
              <Zap className="w-6 h-6 text-purple-500" />
            </div>
            <h2 className="text-3xl font-bold text-white">{detailedPresentation.challenges.title}</h2>
          </div>
          
          <div className="space-y-6">
            {detailedPresentation.challenges.items.map((item, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-purple-500/30 transition-colors">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-b border-slate-800 px-6 py-4">
                  <h3 className="text-lg font-bold text-white">{item.challenge}</h3>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs text-red-400 font-semibold mb-2 uppercase tracking-wide">Problématique</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.problem}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-cyan-400 font-semibold mb-2 uppercase tracking-wide">Solution</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.solution}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-emerald-400 font-semibold mb-2 uppercase tracking-wide">Résultat</p>
                    <p className="text-emerald-300 text-sm leading-relaxed font-medium">{item.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scalabilité */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg">
              <TrendingUp className="w-6 h-6 text-yellow-500" />
            </div>
            <h2 className="text-3xl font-bold text-white">{detailedPresentation.scalability.title}</h2>
          </div>
          
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-6">
            <p className="text-slate-300 leading-relaxed whitespace-pre-line mb-6">
              {detailedPresentation.scalability.content}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {detailedPresentation.scalability.metrics.map((metric, index) => (
                <div key={index} className="flex items-start gap-3 bg-slate-950/50 border border-slate-800 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{metric}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Points Techniques Clés */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Points Techniques Clés</h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-3">
              {detailedPresentation.technicalHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-300 text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

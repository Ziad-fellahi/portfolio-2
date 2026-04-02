"use client";

import { Users, Target, Code, Database, Shield, Lock, Zap, TrendingUp, CheckCircle2, Calendar, User, Wrench } from 'lucide-react';

interface Sprint {
  sprint: string;
  objectives: string;
  tasks: string[];
}

interface TeamRole {
  role: string;
  responsibilities: string[];
  member: string;
}

interface Tool {
  name: string;
  usage: string;
}

interface StackItem {
  layer: string;
  technology: string;
  version: string;
  features: string[];
}

interface Role {
  role: string;
  permissions: string[];
  restrictions: string[];
  implementation: string;
}

interface RBACExample {
  scenario: string;
  request: string;
  backendLogic: string;
  result: string;
}

interface APIRoute {
  method: string;
  path: string;
  access: string;
  description: string;
  body: string;
  response: string;
}

interface Modification {
  feature: string;
  before: string;
  after: string;
  reason: string;
  implementation: string[];
}

interface SchoolProjectDetailProps {
  project: any;
}

export default function SchoolProjectDetail({ project }: SchoolProjectDetailProps) {
  const detail = project.detailedPresentation;

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="text-blue-500 text-sm font-medium">Projet en équipe de {project.teamSize}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
              <Code className="w-4 h-4 text-purple-500" />
              <span className="text-purple-500 text-sm font-medium">Fullstack</span>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            {project.title}
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-900 border border-slate-700 text-cyan-400 text-sm font-medium rounded-lg hover:border-cyan-500/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Vue d'ensemble */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg">
              <Target className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-3xl font-bold text-white">{detail.overview.title}</h2>
          </div>
          
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 space-y-4">
            <p className="text-slate-300 leading-relaxed">{detail.overview.content}</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-blue-300 text-sm font-medium">📍 {detail.overview.context}</p>
            </div>
          </div>
        </section>

        {/* Méthodologie */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg">
              <Users className="w-6 h-6 text-purple-500" />
            </div>
            <h2 className="text-3xl font-bold text-white">{detail.methodology.title}</h2>
          </div>

          <div className="space-y-6">
            {/* Approche */}
            <div className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-2">Approche : {detail.methodology.approach}</h3>
              <p className="text-slate-300 text-sm">Organisation en sprints de 2 semaines avec réunions quotidiennes et rétrospectives</p>
            </div>

            {/* Sprints */}
            <div className="grid md:grid-cols-2 gap-4">
              {detail.methodology.sprints.map((sprint: Sprint, index: number) => (
                <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-purple-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-purple-500" />
                    <h4 className="font-bold text-white">{sprint.sprint}</h4>
                  </div>
                  <p className="text-cyan-400 text-sm mb-3 font-medium">{sprint.objectives}</p>
                  <ul className="space-y-2">
                    {sprint.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-emerald-500 flex-shrink-0 mt-1">✓</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Rôles d'équipe */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-purple-500" />
                Répartition des Rôles
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {detail.methodology.teamRoles.map((role: TeamRole, index: number) => (
                  <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                    <h4 className="font-bold text-cyan-400 mb-1">{role.role}</h4>
                    <p className="text-xs text-slate-500 mb-3">{role.member}</p>
                    <ul className="space-y-2">
                      {role.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-xs text-slate-400 flex items-start gap-1">
                          <span className="text-purple-500">→</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Outils */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-purple-500" />
                Outils de Collaboration
              </h3>
              <div className="grid md:grid-cols-5 gap-3">
                {detail.methodology.tools.map((tool: Tool, index: number) => (
                  <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-center hover:border-purple-500/30 transition-colors">
                    <p className="font-bold text-white text-sm mb-1">{tool.name}</p>
                    <p className="text-xs text-slate-400">{tool.usage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Backend */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-lg">
              <Database className="w-6 h-6 text-emerald-500" />
            </div>
            <h2 className="text-3xl font-bold text-white">{detail.architecture.title}</h2>
          </div>

          <div className="space-y-6">
            {/* Diagramme */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 overflow-x-auto">
              <pre className="text-xs text-cyan-400 font-mono">{detail.architecture.diagram}</pre>
            </div>

            {/* Stack détaillée */}
            <div className="space-y-4">
              {detail.architecture.stack.map((item: StackItem, index: number) => (
                <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">{item.layer}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-400 font-semibold">{item.technology}</span>
                      <span className="text-xs text-slate-500 bg-slate-950 px-2 py-1 rounded">{item.version}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Sécurité */}
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-500" />
                Mesures de Sécurité
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {detail.architecture.security.map((measure: string, index: number) => (
                  <div key={index} className="flex items-start gap-2 text-sm text-slate-300">
                    <Lock className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{measure}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RBAC */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg">
              <Lock className="w-6 h-6 text-yellow-500" />
            </div>
            <h2 className="text-3xl font-bold text-white">{detail.rbac.title}</h2>
          </div>

          <div className="space-y-6">
            <p className="text-slate-300 leading-relaxed">{detail.rbac.description}</p>

            {/* Rôles */}
            <div className="grid md:grid-cols-2 gap-6">
              {detail.rbac.roles.map((role: Role, index: number) => (
                <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">{role.role}</h3>
                  
                  <div className="mb-4">
                    <p className="text-xs text-emerald-400 font-semibold mb-2 uppercase">Permissions</p>
                    <ul className="space-y-1">
                      {role.permissions.map((perm, idx) => (
                        <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                          <span className="text-emerald-500">✓</span>
                          <span>{perm}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-red-400 font-semibold mb-2 uppercase">Restrictions</p>
                    <ul className="space-y-1">
                      {role.restrictions.map((rest, idx) => (
                        <li key={idx} className="text-sm text-slate-400 flex items-start gap-2">
                          <span className="text-red-500">✗</span>
                          <span>{rest}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-950/50 border border-slate-800 rounded p-3">
                    <p className="text-xs text-cyan-400 font-mono">{role.implementation}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Exemples */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Exemples Concrets</h3>
              <div className="space-y-4">
                {detail.rbac.examples.map((example: RBACExample, index: number) => (
                  <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-b border-slate-800 px-6 py-4">
                      <h4 className="font-bold text-white">{example.scenario}</h4>
                      <code className="text-cyan-400 text-sm">{example.request}</code>
                    </div>
                    <div className="p-6 space-y-3">
                      <div>
                        <p className="text-xs text-purple-400 font-semibold mb-2 uppercase">Logique Backend</p>
                        <pre className="text-xs text-slate-300 bg-slate-950 border border-slate-800 rounded p-3 overflow-x-auto">{example.backendLogic}</pre>
                      </div>
                      <div>
                        <p className="text-xs text-emerald-400 font-semibold mb-2 uppercase">Résultat</p>
                        <p className="text-sm text-emerald-300">{example.result}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tableau des Routes */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg">
              <Zap className="w-6 h-6 text-cyan-500" />
            </div>
            <h2 className="text-3xl font-bold text-white">{detail.apiRoutes.title}</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-900 border border-slate-800">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-cyan-400">Méthode</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-cyan-400">Route</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-cyan-400">Accès</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-cyan-400">Description</th>
                </tr>
              </thead>
              <tbody>
                {detail.apiRoutes.routes.map((route: APIRoute, index: number) => (
                  <tr key={index} className="border border-slate-800 hover:bg-slate-900/50 transition-colors">
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        route.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                        route.method === 'POST' ? 'bg-emerald-500/20 text-emerald-400' :
                        route.method === 'PATCH' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {route.method}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <code className="text-cyan-400 text-sm">{route.path}</code>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs ${
                        route.access.includes('Public') ? 'text-emerald-400' :
                        route.access.includes('ADMIN') ? 'text-red-400' :
                        'text-yellow-400'
                      }`}>
                        {route.access}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-300">{route.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Modifications */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-lg">
              <Wrench className="w-6 h-6 text-pink-500" />
            </div>
            <h2 className="text-3xl font-bold text-white">{detail.modifications.title}</h2>
          </div>

          <div className="space-y-6">
            {detail.modifications.changes.map((change: Modification, index: number) => (
              <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-pink-500/30 transition-colors">
                <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border-b border-slate-800 px-6 py-4">
                  <h3 className="text-lg font-bold text-white">{change.feature}</h3>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-red-400 font-semibold mb-2 uppercase">Avant</p>
                      <p className="text-sm text-slate-400">{change.before}</p>
                    </div>
                    <div>
                      <p className="text-xs text-emerald-400 font-semibold mb-2 uppercase">Après</p>
                      <p className="text-sm text-emerald-300">{change.after}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs text-cyan-400 font-semibold mb-2 uppercase">Justification</p>
                    <p className="text-sm text-slate-300">{change.reason}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-purple-400 font-semibold mb-2 uppercase">Implémentation</p>
                    <ul className="space-y-2">
                      {change.implementation.map((impl, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="text-pink-500">→</span>
                          <code className="bg-slate-950 px-2 py-0.5 rounded text-cyan-400 text-xs">{impl}</code>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Points Techniques & Résultats */}
        <section>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-emerald-500" />
                Points Techniques Clés
              </h2>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-6">
                <div className="space-y-2">
                  {detail.technicalHighlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                      <span className="text-slate-300 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-cyan-500" />
                Résultats & Apprentissages
              </h2>
              <div className="space-y-4">
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">Métriques</h3>
                  <div className="space-y-2">
                    {detail.results.metrics.map((metric: string, index: number) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-purple-400 mb-3">Compétences Acquises</h3>
                  <div className="space-y-2">
                    {detail.results.learnings.map((learning: string, index: number) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-purple-500">→</span>
                        <span>{learning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

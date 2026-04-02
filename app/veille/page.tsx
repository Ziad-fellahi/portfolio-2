"use client";

import { ArrowLeft, Sparkles, Youtube, BookOpen, Globe, Cpu, Rss, Search, Workflow, ShieldCheck, Zap, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const veilleInfo = {
  title: "L'IA dans le Développement Logiciel",
  description: "Ressources essentielles pour suivre les avancées de l'IA et leur intégration dans le développement logiciel.",
  categories: [
    {
      title: "Chaînes YouTube Recommandées",
      description: "Tutoriels, analyses et démonstrations pratiques des outils d'IA.",
      icon: Youtube,
      items: [
        { name: "Underscore_", desc: "Vulgarisation sur l'IA, la cybersécurité et les technos.", url: "https://www.youtube.com/@Underscore_" },
        { name: "Fireship", desc: "Vidéos percutantes pour comprendre les outils d'IA.", url: "https://www.youtube.com/@Fireship" },
        { name: "Grafikart", desc: "Référence francophone sur le dev web et outils avancés.", url: "https://www.youtube.com/@Grafikart" },
        { name: "Leerob", desc: "Expertise sur Next.js et intégration de modèles d'IA.", url: "https://www.youtube.com/@leerob" }
      ]
    },
    {
      title: "Blogs et Newsletters",
      description: "Actualités, recherches et guides pratiques sur l'IA.",
      icon: BookOpen,
      items: [
        { name: "Hugging Face Blog", desc: "Avancées en NLP, Vision et IA générative.", url: "https://huggingface.co/blog" },
        { name: "Ollama Blog", desc: "Exécution de LLM en local et applications.", url: "https://ollama.com/blog" },
        { name: "OpenAI Blog", desc: "Actualités techniques GPT et DALL·E.", url: "https://openai.com/blog" },
        { name: "Google AI Blog", desc: "Explorations des équipes Google sur l'IA.", url: "https://ai.googleblog.com/" },
        { name: "Meta AI Blog", desc: "Articles sur le ML, l'IA et la data science.", url: "https://ai.meta.com/blog/" },
        { name: "The Batch", desc: "Newsletter de DeepLearning.AI par Andrew Ng.", url: "https://www.deeplearning.ai/the-batch/" }
      ]
    },
    {
      title: "Sites Web de Référence",
      description: "Recherches, implémentations et discussions sur l'IA.",
      icon: Globe,
      items: [
        { name: "AI Research Insights", desc: "Recherches et publications de Meta AI.", url: "https://ai.meta.com/research/" },
        { name: "GitHub Trending", desc: "Projets Python/IA tendance sur GitHub.", url: "https://github.com/trending/python" },
        { name: "ML Ops Community", desc: "Déploiement et maintenance des modèles ML.", url: "https://mlops.community/" },
        { name: "Kaggle", desc: "Compétitions, datasets et notebooks ML.", url: "https://www.kaggle.com/" }
      ]
    },
    {
      title: "Outils et Frameworks IA",
      description: "Intégrez l'IA dans vos projets de développement.",
      icon: Cpu,
      items: [
        { name: "LangChain", desc: "Framework pour applications avec LLMs.", url: "https://python.langchain.com/" },
        { name: "GitHub Copilot", desc: "Assistant de programmation IA.", url: "https://github.com/features/copilot" },
        { name: "HF Transformers", desc: "Modèles open-source NLP et vision.", url: "https://huggingface.co/docs/transformers/" },
        { name: "ChatGPT API", desc: "API pour intégrer ChatGPT dans vos applis.", url: "https://platform.openai.com/" },
        { name: "TensorFlow.js", desc: "Exécuter des modèles ML dans le navigateur.", url: "https://www.tensorflow.org/js" },
        { name: "OpenCV", desc: "Vision par ordinateur et traitement d'images.", url: "https://opencv.org/" }
      ]
    },
    {
      title: "Flux RSS à Suivre",
      description: "Restez informé automatiquement des dernières actualités.",
      icon: Rss,
      items: [
        { name: "Flux Builder", desc: "Actualités Builder.io", url: "https://www.builder.io/blog/feed.xml" },
        { name: "Flux Nvidia", desc: "Actualités IA Nvidia", url: "https://blogs.nvidia.com/feed/" },
        { name: "Flux JetBrains", desc: "Actualités JetBrains", url: "https://blog.jetbrains.com/feed/" }
      ]
    }
  ]
};

export default function VeillePage() {
  return (
    <div className="bg-[#F9F9FB] min-h-screen py-10 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Navigation */}
        <div className="mb-12">
          <Link href="/#veille" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Retour au Portfolio
          </Link>
        </div>

        {/* 1. Header & Intro */}
        <section className="bg-white p-10 md:p-14 rounded-3xl border border-[#EDEDF2] shadow-sm mb-12 relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              L'Intelligence Artificielle <br/><span className="text-blue-600">au Service du Développeur</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              Bienvenue sur ma présentation de Veille Technologique. Dans le cadre de mon BTS SIO, j'ai choisi d'étudier l'impact foudroyant de l'Intelligence Artificielle sur notre métier de développeur : du bouleversement des flux de travail (gain de productivité) à l'évolution de nos architectures logicielles !
            </p>
          </div>
          <Sparkles className="absolute -right-10 -top-10 w-64 h-64 text-blue-50 opacity-50 pointer-events-none" />
        </section>

        {/* 2. Méthodologie */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-gray-900 flex items-center gap-3 mb-8">
            <Search className="w-8 h-8 text-indigo-500" />
            Ma Méthodologie de Veille
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-[#EDEDF2] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                Veille Active (Pull)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Je suis acteur de mes recherches. Je consulte régulièrement les documentations techniques officielles (comme celles d'OpenAI ou de LangChain), j'explore la section <strong>GitHub Trending</strong> pour repérer les nouveaux outils IA très demandés par la communauté, et j'expérimente moi-même en clonant et installant des modèles ou des projets de GenAI en local sur mon IDE.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-[#EDEDF2] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                Veille Passive (Push)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                L'information vient à moi de manière automatisée sans effort quotidien. J'utilise des <strong>flux RSS</strong> intégrés dans mon agrégateur (Newsletters Medium, DEV.to), je suis abonné à des newsletters techniques renommées (comme <em>The Batch</em> par l'expert Andrew Ng), et l'algorithme YouTube me pousse intelligemment des analyses poussées de code (Underscore_, Fireship).
              </p>
            </div>
          </div>
        </section>

        {/* 3. Synthèse des Découvertes */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-gray-900 flex items-center gap-3 mb-8">
            <Zap className="w-8 h-8 text-yellow-500" />
            Synthèse de mes Découvertes (Talking Points)
          </h2>
          <div className="space-y-6">
            {/* Découverte 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-6 hover:border-gray-300 transition-colors">
              <div className="flex-shrink-0 p-4 bg-purple-50 rounded-xl h-fit">
                <Cpu className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Les Assistants de Code & "Copilots"</h3>
                <p className="text-gray-600 leading-relaxed">
                  L'arrivée de GitHub Copilot et, plus récemment, d'éditeurs de code "AI-First" ultra récents comme <strong>Cursor</strong>, a drastiquement bouleversé la façon dont on code. Aujourd'hui, on ne tape plus ligne par ligne : on "pilote" l'architecture et on délègue à l'IA l'implémentation algorithmique complexe (expressions régulières, boilerplate, squelettes de tests). Ma conclusion : le développeur junior de demain sera évalué sur sa capacité à <em>relire, critiquer et debugger</em> ce code généré plutôt qu'à l'écrire ex-nihilo.
                </p>
              </div>
            </div>

            {/* Découverte 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-6 hover:border-gray-300 transition-colors">
              <div className="flex-shrink-0 p-4 bg-blue-50 rounded-xl h-fit">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">2. L'Exigence Cybersécurité : L'IA en Local (Ollama)</h3>
                <p className="text-gray-600 leading-relaxed">
                  Je me suis penché sur le risque critique de la fuite de données : envoyer du code métier ou des secrets d'entreprise à l'API d'OpenAI (ChatGPT) pose un énorme risque RGPD et sécurité. J'ai alors découvert et expérimenté des outils DevOps géniaux comme <strong>Ollama</strong>, qui permettent de faire tourner des modèles Open Source très puissants (comme Llama 3 ou Mistral) <em>directement</em> sur le réseau privé de l'entreprise. Ainsi, tout le code audité par l'IA ne sort jamais des locaux.
                </p>
              </div>
            </div>

            {/* Découverte 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-6 hover:border-gray-300 transition-colors">
              <div className="flex-shrink-0 p-4 bg-orange-50 rounded-xl h-fit">
                <Workflow className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Intégration dans des Applicatifs Tiers via LangChain</h3>
                <p className="text-gray-600 leading-relaxed">
                  Au-delà des simples fenêtres de chat, ce qui est novateur c'est l'intégration d'intelligences artificielles (LLMs) connectées en direct aux données vivantes. Grâce à des orchestrateurs comme <strong>LangChain</strong>, il est possible de greffer à un modèle de langage la capacité d'aller piocher lui-même des informations fraîches dans une base de données PostgreSQL ou dans une flotte de PDF. On se dirige lentement vers des applications basées sur des "Agents Multiples" autonomes qui vont exécuter des flux de travail complets pour le client.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Sources et Annuaire */}
        <section>
          <div className="bg-gray-900 text-white rounded-t-3xl p-8 pb-10">
            <h2 className="text-3xl font-black flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-400" />
              L'Annuaire Centralisé de mes Sources
            </h2>
            <p className="text-gray-400 mt-2">Cliquez sur une ressource pour accéder directement au lien original.</p>
          </div>
          <div className="bg-white p-8 rounded-b-3xl border border-gray-200 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {veilleInfo.categories.map((category, idx) => {
                const IconComponent = category.icon;
                return (
                  <div key={idx} className="mb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <IconComponent className="w-5 h-5 text-gray-900" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                    </div>

                    <div className="space-y-3">
                      {category.items.map((item, itemIdx) => (
                        <a
                          key={itemIdx}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block p-4 bg-[#F9F9FB] border border-[#EDEDF2] rounded-xl hover:border-blue-400 hover:shadow-sm hover:-translate-y-0.5 transition-all"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {item.name}
                            </h4>
                            <ExternalLink className="w-4 h-4 text-transparent group-hover:text-blue-600 transition-colors" />
                          </div>
                          <p className="text-sm text-gray-600">
                            {item.desc}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

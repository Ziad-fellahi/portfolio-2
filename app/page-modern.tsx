"use client";

import { GraduationCap, Briefcase, Code, Shield, Rss, Github, Linkedin, Mail, ExternalLink, CheckCircle, Rocket, Lock, Cloud, Terminal, Database, Globe, Menu, X, ChevronDown, Star, Zap, Layers, Youtube, BookOpen, Cpu, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

// ========== DONNÉES DU PORTFOLIO ==========
const PORTFOLIO = {
  identity: {
    name: "Ziad FELLAHI",
    title: "Développeur Full-Stack",
    subtitle: "Étudiant en BTS SIO SLAM",
    tagline: "Je conçois des solutions digitales robustes et sécurisées",
    description: "Passionné par le développement logiciel et la cybersécurité",
    email: "ziad.fellahi@exemple.com",
    github: "https://github.com/Ziad-fellahi",
    linkedin: "https://linkedin.com/in/ziad-fellahi"
  },

  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "PHP", "Java"],
    frameworks: ["React", "Next.js", "Node.js", "NestJS"],
    tools: ["Git", "Docker", "VS Code", "Postman", "GitHub"],
    databases: ["MySQL", "MongoDB"]
  },

  stages: [
    {
      company: "Tech Solutions Inc.",
      role: "Développeur Full-Stack",
      period: "Mai 2025 - Juin 2025",
      description: "Développement d'applications web modernes en environnement Agile",
      missions: [
        "Conception et développement d'une application de gestion avec React et Node.js",
        "Mise en place d'une API RESTful sécurisée avec authentification JWT",
        "Optimisation des performances et amélioration de l'UX"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      icon: Rocket,
      size: "large"
    },
    {
      company: "Digital Agency",
      role: "Développeur Web Junior",
      period: "Janvier 2024",
      description: "Découverte du développement web en agence digitale",
      missions: [
        "Développement et maintenance de sites web clients",
        "Intégration de maquettes UI/UX responsive",
        "Support technique utilisateurs"
      ],
      technologies: ["HTML/CSS", "JavaScript", "WordPress"],
      icon: Terminal,
      size: "small"
    }
  ],

  projets: [
    {
      title: "Dashboard Analytics",
      description: "Application de visualisation de données en temps réel avec graphiques interactifs",
      technologies: ["React", "Chart.js", "Firebase"],
      github: "https://github.com/Ziad-fellahi/dashboard-analytics",
      icon: Database
    },
    {
      title: "E-Commerce Platform",
      description: "Plateforme e-commerce complète avec panier et paiement Stripe",
      technologies: ["Next.js", "Stripe", "MongoDB"],
      github: "https://github.com/Ziad-fellahi/ecommerce-platform",
      icon: Globe
    },
    {
      title: "Task Manager API",
      description: "API RESTful de gestion de tâches avec authentification JWT",
      technologies: ["Node.js", "Express", "PostgreSQL"],
      github: "https://github.com/Ziad-fellahi/task-manager-api",
      icon: Code
    },
    {
      title: "Security Scanner",
      description: "Outil de scan de vulnérabilités pour applications web",
      technologies: ["Python", "Flask", "SQLite"],
      github: "https://github.com/Ziad-fellahi/security-scanner",
      icon: Shield
    }
  ],

  veilleInfo: {
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
  }
};

// ========== NAVBAR STICKY AVEC GLASSMORPHISM ==========
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-slate-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
              <span className="text-white font-black text-lg">ZF</span>
            </div>
            <span className="font-black text-slate-900 text-xl hidden md:block">
              {PORTFOLIO.identity.name}
            </span>
          </button>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {['hero', 'projets', 'competences', 'veille', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors capitalize relative group"
              >
                {section === 'hero' ? 'Accueil' : section === 'competences' ? 'Compétences' : section}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href={PORTFOLIO.identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Github className="w-5 h-5 text-slate-600 hover:text-indigo-600" />
            </a>
            <a 
              href={PORTFOLIO.identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Linkedin className="w-5 h-5 text-slate-600 hover:text-indigo-600" />
            </a>
            <a
              href={`mailto:${PORTFOLIO.identity.email}`}
              className="px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 shadow-lg hover:shadow-xl transition-all"
            >
              Contact
            </a>
          </div>

          {/* Bouton Menu Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden mt-4 p-6 bg-white/95 backdrop-blur-lg rounded-2xl border border-slate-200 shadow-xl">
            <div className="flex flex-col gap-4">
              {['hero', 'projets', 'competences', 'veille', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className="text-left text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors capitalize py-2"
                >
                  {section === 'hero' ? 'Accueil' : section === 'competences' ? 'Compétences' : section}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-200 flex gap-3">
                <a href={PORTFOLIO.identity.github} target="_blank" rel="noopener noreferrer" className="flex-1 p-3 bg-slate-100 rounded-lg text-center hover:bg-slate-200 transition-colors">
                  <Github className="w-5 h-5 mx-auto" />
                </a>
                <a href={PORTFOLIO.identity.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 p-3 bg-slate-100 rounded-lg text-center hover:bg-slate-200 transition-colors">
                  <Linkedin className="w-5 h-5 mx-auto" />
                </a>
                <a href={`mailto:${PORTFOLIO.identity.email}`} className="flex-1 p-3 bg-indigo-600 text-white rounded-lg text-center hover:bg-indigo-700 transition-colors">
                  <Mail className="w-5 h-5 mx-auto" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// ========== HERO SECTION ==========
function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-32 bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100/50 backdrop-blur-sm border border-indigo-200/50 rounded-full mb-8">
          <Star className="w-4 h-4 text-indigo-600" />
          <span className="text-[7px] font-bold text-indigo-700 tracking-wide">
            {PORTFOLIO.identity.subtitle}
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6 leading-none tracking-tight">
          {PORTFOLIO.identity.name}
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8">
          {PORTFOLIO.identity.title}
        </h2>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          {PORTFOLIO.identity.tagline}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2"
          >
            Voir mes projets
            <ChevronDown className="w-5 h-5" />
          </button>
          <a
            href={`mailto:${PORTFOLIO.identity.email}`}
            className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:shadow-xl border-2 border-slate-200 transition-all hover:scale-105 hover:border-indigo-600"
          >
            Me contacter
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-400 mx-auto" />
        </div>
      </div>
    </section>
  );
}

// ========== PROJETS SECTION (GRID OPTIMISÉE) ==========
function Projets() {
  return (
    <section id="projets" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100/50 rounded-full mb-6">
            <Code className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-bold text-indigo-700 uppercase tracking-wide">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
            Mes Projets
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Découvrez mes réalisations récentes et mes compétences techniques
          </p>
        </div>

        {/* Grid CSS optimisée */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {PORTFOLIO.projets.map((projet, index) => {
            const IconComponent = projet.icon;
            
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-2xl p-8 hover:border-indigo-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <a 
                    href={projet.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 hover:bg-indigo-100 rounded-lg transition-colors"
                  >
                    <Github className="w-6 h-6 text-slate-600 group-hover:text-indigo-600 transition-colors" />
                  </a>
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {projet.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {projet.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {projet.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-lg border border-indigo-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ========== COMPÉTENCES BENTO BOX ==========
const SKILL_LOGOS: Record<string, string> = {
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "NestJS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
};

function Competences() {
  return (
    <section id="competences" className="py-32 px-6 bg-gradient-to-br from-slate-50 to-indigo-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100/50 rounded-full mb-6">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-bold text-indigo-700 uppercase tracking-wide">Stack Technique</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
            Mes Compétences
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
          {/* Langages */}
          <div className="md:col-span-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-xl text-white">
            <Code className="w-12 h-12 mb-6 opacity-80" />
            <h3 className="text-2xl font-black mb-4">Langages</h3>
            <div className="flex flex-wrap gap-2">
              {PORTFOLIO.skills.languages.map((lang, idx) => (
                <span key={idx} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg font-bold text-sm flex items-center gap-2">
                  {SKILL_LOGOS[lang] && <img src={SKILL_LOGOS[lang]} alt={lang} className="w-5 h-5" />}
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="md:col-span-2 bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
            <Zap className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-2xl font-black text-slate-900 mb-4">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {PORTFOLIO.skills.frameworks.map((fw, idx) => (
                <span key={idx} className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-bold text-sm border border-indigo-100 flex items-center gap-2">
                  {SKILL_LOGOS[fw] && <img src={SKILL_LOGOS[fw]} alt={fw} className="w-5 h-5" />}
                  {fw}
                </span>
              ))}
            </div>
          </div>

          {/* Outils */}
          <div className="md:col-span-2 md:row-span-1 bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
            <Terminal className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-2xl font-black text-slate-900 mb-4">Outils</h3>
            <div className="flex flex-wrap gap-2">
              {PORTFOLIO.skills.tools.map((tool, idx) => (
                <span key={idx} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-bold text-sm flex items-center gap-2">
                  {SKILL_LOGOS[tool] && <img src={SKILL_LOGOS[tool]} alt={tool} className="w-5 h-5" />}
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Bases de données */}
          <div className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl text-white">
            <Database className="w-12 h-12 mb-6 opacity-80" />
            <h3 className="text-2xl font-black mb-4">Bases de données</h3>
            <div className="flex flex-wrap gap-2">
              {PORTFOLIO.skills.databases.map((db, idx) => (
                <span key={idx} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg font-bold text-sm flex items-center gap-2">
                  {SKILL_LOGOS[db] && <img src={SKILL_LOGOS[db]} alt={db} className="w-5 h-5" />}
                  {db}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========== VEILLE SECTION ==========
function Veille() {
  return (
    <section id="veille" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100/50 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-bold text-indigo-700 uppercase tracking-wide">
              {PORTFOLIO.veilleInfo.title}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            Veille Technologique
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {PORTFOLIO.veilleInfo.description}
          </p>
        </div>

        {/* Categories Loop */}
        <div className="space-y-16">
          {PORTFOLIO.veilleInfo.categories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <div key={idx} className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200/60 shadow-sm relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                  <div className="p-4 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-200 inline-flex">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 mb-2">{category.title}</h3>
                    <p className="text-lg text-slate-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIdx) => (
                    <a
                      key={itemIdx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-600 transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {item.name}
                        </h4>
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed flex-grow">
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
  );
}

// ========== CONTACT / FOOTER ==========
function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto text-center">

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={`mailto:${PORTFOLIO.identity.email}`}
            className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            {PORTFOLIO.identity.email}
          </a>
          <a
            href={PORTFOLIO.identity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href={PORTFOLIO.identity.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>

        <div className="pt-12 border-t border-white/10">
          <p className="text-slate-400">
            © {new Date().getFullYear()} {PORTFOLIO.identity.name} - BTS SIO SLAM
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Développé avec Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}

// ========== PAGE PRINCIPALE ==========
export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projets />
        <Competences />
        <Veille />
        <Contact />
      </main>
    </div>
  );
}

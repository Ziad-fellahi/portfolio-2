"use client";

import { GraduationCap, Briefcase, Code, Github, Linkedin, Mail, ExternalLink, CheckCircle, Rocket, Terminal, Database, Globe, Menu, X, ChevronDown, Zap, Layers, Waves, Heart, Cpu, Award, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArcGalleryHero } from '@/components/ui/arc-gallery-hero-component';

// ========== DONNÉES DU PORTFOLIO ==========
const PORTFOLIO = {
  identity: {
    name: "Ziad FELLAHI",
    title: "Étudiant en BTS SIO SLAM",
    tagline: "Je développe des solutions web modernes, performantes et orientées sécurité.",
    email: "ziad.fellahi@outlook.fr",
    github: "https://github.com/Ziad-fellahi",
    linkedin: "https://linkedin.com/in/ziad-fellahi"
  },

  skills: {
    languages: ["HTML", "CSS", "JavaScript", "Python", "PHP", "Java"],
    frameworks: ["React", "Next.js", "Node.js", "NestJS"],
    tools: ["Git", "Docker", "MongoDB"]
  },

  parcours: [
    {
      year: "2022 - 2024",
      title: "Baccalauréat STI2D (Sciences et Technologies de l'Industrie et du Développement Durable), Spécialité SIN (Systèmes d'Information et Numérique)",
      description: "Acquisition des bases en informatique, électronique et systèmes numériques, avec une première approche concrète de la programmation.",
      icon: Cpu,
      color: "blue"
    },
    {
      year: "2025",
      title: "BNSSA (Brevet National de Sécurité et de Sauvetage Aquatique)",
      description: "Certification permettant d'exercer comme surveillant-sauveteur, notamment en piscines, centres aquatiques ou postes de secours sur les plages, avec de solides compétences en prévention des risques et intervention d'urgence.",
      icon: Waves,
      color: "cyan"
    },
    {
      year: "2025",
      title: "PSE1 (Premier Secours en Équipe de niveau 1)",
      description: "Formation au secourisme opérationnel en équipe, renforçant la communication, la coordination et la réactivité sous pression.",
      icon: Heart,
      color: "rose"
    },
    {
      year: "2024 - 2026",
      title: "BTS SIO (Services Informatiques aux Organisations), option SLAM (Solutions Logicielles et Applications Métiers)",
      description: "Spécialisation en développement d'applications métiers, conception d'API, gestion de bases de données et bonnes pratiques de qualité logicielle.",
      icon: Code,
      color: "indigo"
    },
    {
      year: "Janvier 2026 - Mars 2026 ",
      title: "Stage chez GLITZ (durée : 2 mois)",
      description: "Conception d'un écosystème B2B : développement du back-office d'administration, architecture du backend client et mise en production avec gestionnaire de processus PM2.",
      icon: Sparkles,
      logo: "/LOGOGLITZ.jpg",
      color: "purple"
    }
  ],

  stages: [
    {
      company: "Tech Solutions Inc.",
      role: "Développeur Full-Stack",
      period: "Mai 2025 - Juin 2025",
      description: "Conception et développement de fonctionnalités full-stack dans un cadre Agile, avec une attention forte à la qualité et à la sécurité.",
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
      description: "Première expérience en agence, centrée sur l'intégration web, la maintenance de sites et l'amélioration continue de l'expérience utilisateur.",
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
      title: "GOVO x GLITZ",
      description: "Développement et mise en production d'une plateforme SaaS (Software as a Service) en mode B2B, destinée à digitaliser l'exploitation des auto-écoles. Le service est proposé sous forme d'abonnement, permettant aux gérants de piloter l'intégralité de leur activité via une interface unique.",
      technologies: ["Next.js", "React", "NestJS", "MongoDB"],
      github: "https://github.com/Ziad-fellahi",
      href: "/projet/govo-glitz",
      brandLogos: [
        { src: "https://www.govo.fr/_next/static/media/logo.9d31ccd6.svg?dpl=dpl_Cd3gsQpdYEPU3DkhWiTam2spPX12", alt: "GOVO" },
        { src: "/logo%20glitz%20texte.jpg", alt: "GLITZ" },
      ],
      logos: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg", alt: "NestJS" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
      ],
    }
  ],

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
        ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100' 
        : 'bg-white/70 backdrop-blur-md'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
              <span className="text-white font-black text-base">ZF</span>
            </div>
            <span className="font-bold text-gray-900 text-lg hidden md:block">
              {PORTFOLIO.identity.name}
            </span>
          </button>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {['hero', 'parcours', 'projets', 'competences', 'presentation', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors capitalize"
              >
                {section === 'hero' ? 'Accueil' : section === 'competences' ? 'Compétences' : section === 'presentation' ? 'Présentation' : section}
              </button>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href={PORTFOLIO.identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <Github className="w-5 h-5 text-gray-600 hover:text-gray-900" />
            </a>
            <a 
              href={PORTFOLIO.identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-gray-900" />
            </a>
            <a
              href={`mailto:${PORTFOLIO.identity.email}`}
              className="px-5 py-2 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 shadow-sm transition-all"
            >
              Contact
            </a>
          </div>

          {/* Bouton Menu Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-50 rounded-xl transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden mt-4 p-6 bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-100 shadow-lg">
            <div className="flex flex-col gap-4">
              {['hero', 'parcours', 'projets', 'competences', 'presentation', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className="text-left text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors capitalize py-2"
                >
                  {section === 'hero' ? 'Accueil' : section === 'competences' ? 'Compétences' : section === 'presentation' ? 'Présentation' : section}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100 flex gap-3">
                <a href={PORTFOLIO.identity.github} target="_blank" rel="noopener noreferrer" className="flex-1 p-3 bg-gray-50 rounded-xl text-center hover:bg-gray-100 transition-colors">
                  <Github className="w-5 h-5 mx-auto text-gray-600" />
                </a>
                <a href={PORTFOLIO.identity.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 p-3 bg-gray-50 rounded-xl text-center hover:bg-gray-100 transition-colors">
                  <Linkedin className="w-5 h-5 mx-auto text-gray-600" />
                </a>
                <a href={`mailto:${PORTFOLIO.identity.email}`} className="flex-1 p-3 bg-gray-900 text-white rounded-xl text-center hover:bg-gray-800 transition-colors">
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
  // Programming language logos
  const techImages = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', // HTML5
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', // CSS3
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', // JavaScript
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', // TypeScript
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', // PHP
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', // React
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', // Next.js
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg', // NestJS
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', // Node.js
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', // Tailwind
    '/laragon-logo.ico', // Laragon
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', // MongoDB
  ];

  return (
    <div id="hero" className="relative pt-20">
      <ArcGalleryHero images={techImages}>
        <div className="text-center max-w-2xl px-6 opacity-0 animate-fade-in" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1A1A1A] mb-4">
            {PORTFOLIO.identity.name}
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-6">
            {PORTFOLIO.identity.title}
          </h2>
          
          <p className="text-lg text-[#575757] mb-8 max-w-xl mx-auto">
            {PORTFOLIO.identity.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold flex items-center justify-center gap-2"
            >
              Voir mes projets
              <ChevronDown className="w-5 h-5" />
            </button>
            <a
              href={`mailto:${PORTFOLIO.identity.email}`}
              className="w-full sm:w-auto px-8 py-3 rounded-full border border-[#EDEDF2] hover:bg-white transition-all duration-200 font-semibold"
            >
              Me contacter
            </a>
          </div>
        </div>
      </ArcGalleryHero>
    </div>
  );
}

// ========== MON PARCOURS (TIMELINE DANS CARTE BLANCHE) ==========
function Parcours() {
  const colorStyles = {
    blue: {
      dot: 'border-blue-500',
      iconWrap: 'bg-blue-50 group-hover:bg-blue-100',
      icon: 'text-blue-600',
    },
    cyan: {
      dot: 'border-cyan-500',
      iconWrap: 'bg-cyan-50 group-hover:bg-cyan-100',
      icon: 'text-cyan-600',
    },
    rose: {
      dot: 'border-rose-500',
      iconWrap: 'bg-rose-50 group-hover:bg-rose-100',
      icon: 'text-rose-600',
    },
    indigo: {
      dot: 'border-indigo-500',
      iconWrap: 'bg-indigo-50 group-hover:bg-indigo-100',
      icon: 'text-indigo-600',
    },
    purple: {
      dot: 'border-fuchsia-500',
      iconWrap: 'bg-fuchsia-50 group-hover:bg-fuchsia-100',
      icon: 'text-fuchsia-600',
    },
  } as const;

  return (
    <section id="parcours" className="py-20 px-6 bg-[#F9F9FB]">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white border border-[#EDEDF2] rounded-[20px] p-8 md:p-12 shadow-sm">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-gray-50 rounded-2xl">
                <GraduationCap className="w-6 h-6 text-gray-900" />
              </div>
              <h2 className="text-4xl font-black text-[#1A1A1A]">
                Mon Parcours
              </h2>
            </div>
            <p className="text-base text-[#575757] ml-20">
              Formation et expériences professionnelles
            </p>
          </div>

          {/* Timeline verticale minimaliste */}
          <div className="relative ml-8">
            {/* Ligne verticale */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[#EDEDF2]"></div>

            <div className="space-y-8">
              {PORTFOLIO.parcours.map((item, index) => {
                const IconComponent = item.icon;
                const colorStyle = colorStyles[item.color as keyof typeof colorStyles] ?? colorStyles.blue;

                return (
                  <div key={index} className="relative pl-12">
                    {/* Point de timeline */}
                    <div className="absolute left-0 top-2 -ml-2">
                      <div className={`w-4 h-4 bg-white border-2 rounded-full ${colorStyle.dot}`}></div>
                    </div>

                    {/* Contenu */}
                    <div className="group">
                      <div className="flex items-start gap-4 mb-3">
                        <div className={`p-2 rounded-xl shrink-0 transition-colors ${colorStyle.iconWrap}`}>
                          {item.logo ? (
                            <img
                              src={item.logo}
                              alt="Logo Glitz"
                              className="w-5 h-5 object-contain"
                            />
                          ) : (
                            <IconComponent className={`w-5 h-5 ${colorStyle.icon}`} />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="mb-2">
                            <span className="inline-flex px-2.5 py-1 bg-gray-900 text-white rounded-lg text-xs font-semibold mb-2">
                              {item.year}
                            </span>
                            <h3 className="text-lg font-bold text-[#1A1A1A] leading-snug">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-base text-[#575757] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========== PROJETS SECTION (BENTO GRID) ==========
function Projets() {
  return (
    <section id="projets" className="py-20 px-6 bg-[#F9F9FB]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 bg-white border border-[#EDEDF2] rounded-2xl">
              <Code className="w-6 h-6 text-gray-900" />
            </div>
            <h2 className="text-4xl font-black text-[#1A1A1A]">
              Mes Projets
            </h2>
          </div>
          <p className="text-base text-[#575757] md:ml-20">
            Le projet principal mis en avant sur ce portfolio
          </p>
        </div>

        {/* Carte unique mise en avant */}
        <div className="grid grid-cols-1 gap-6">
          {PORTFOLIO.projets.map((projet, index) => {
            return (
              <div
                key={index}
                className="group bg-white border border-[#EDEDF2] rounded-[28px] p-8 md:p-10 hover:shadow-lg hover:border-gray-300 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                  <div className="pt-2">
                    <div className="flex items-center gap-4 mb-4">
                      {projet.brandLogos?.map((logo, idx) => (
                        <img
                          key={idx}
                          src={logo.src}
                          alt={logo.alt}
                          className="h-10 md:h-12 w-auto object-contain"
                        />
                      ))}
                    </div>
                  </div>
                  <a
                    href={projet.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-colors w-fit"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-semibold">GitHub</span>
                  </a>
                </div>

                <p className="text-base md:text-lg text-[#575757] mb-8 leading-relaxed max-w-3xl">
                  {projet.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {projet.logos?.map((logo, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 border border-[#EDEDF2] rounded-2xl"
                      title={logo.alt}
                      aria-label={logo.alt}
                    >
                      <img src={logo.src} alt={logo.alt} className="w-7 h-7 object-contain" />
                      <span className="text-sm font-semibold text-gray-700">{logo.alt}</span>
                    </div>
                  ))}
                </div>

                {projet.href && (
                  <div>
                    <Link
                      href={projet.href}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Voir le projet
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ========== COMPÉTENCES BENTO BOX ==========
function Competences() {
  const TECH_LOGOS: Record<string, string> = {
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    NestJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  };

  return (
    <section id="competences" className="py-20 px-6 bg-[#F9F9FB]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 bg-white border border-[#EDEDF2] rounded-2xl">
              <Layers className="w-6 h-6 text-gray-900" />
            </div>
            <h2 className="text-4xl font-black text-[#1A1A1A]">
              Mes Compétences
            </h2>
          </div>
        </div>

        {/* Grille épurée style Nicolas Bardot */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Langages */}
          <div className="md:col-span-2 bg-white border border-[#EDEDF2] rounded-[20px] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-5 h-5 text-gray-400" />
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide">Langages</h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {PORTFOLIO.skills.languages.map((lang, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group">
                  {TECH_LOGOS[lang] ? (
                    <img src={TECH_LOGOS[lang]} alt={lang} className="w-6 h-6 object-contain mb-2" />
                  ) : (
                    <Code className="w-6 h-6 text-gray-400 mb-2 group-hover:text-gray-900 transition-colors" />
                  )}
                  <span className="text-xs font-semibold text-gray-700 text-center">
                    {lang}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="md:col-span-2 bg-white border border-[#EDEDF2] rounded-[20px] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-5 h-5 text-gray-400" />
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide">Frameworks</h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {PORTFOLIO.skills.frameworks.map((fw, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group">
                  {TECH_LOGOS[fw] ? (
                    <img src={TECH_LOGOS[fw]} alt={fw} className="w-6 h-6 object-contain mb-2" />
                  ) : (
                    <Zap className="w-6 h-6 text-gray-400 mb-2 group-hover:text-gray-900 transition-colors" />
                  )}
                  <span className="text-xs font-semibold text-gray-700 text-center">
                    {fw}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Outils */}
          <div className="md:col-span-2 bg-white border border-[#EDEDF2] rounded-[20px] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-5 h-5 text-gray-400" />
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide">Outils</h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {PORTFOLIO.skills.tools.map((tool, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group">
                  {TECH_LOGOS[tool] ? (
                    <img src={TECH_LOGOS[tool]} alt={tool} className="w-6 h-6 object-contain mb-2" />
                  ) : (
                    <Terminal className="w-6 h-6 text-gray-400 mb-2 group-hover:text-gray-900 transition-colors" />
                  )}
                  <span className="text-xs font-semibold text-gray-700 text-center">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ========== PRESENTATION PDF SECTION ==========
function PresentationPdfSection() {
  return (
    <section id="presentation" className="py-20 px-6 bg-[#F9F9FB]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-[#EDEDF2] rounded-[24px] p-8 md:p-12 shadow-sm text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-100 mb-5">
            <ExternalLink className="w-6 h-6 text-gray-900" />
          </div>
          <h2 className="text-4xl font-black text-[#1A1A1A] mb-3">Présentation Veille IA</h2>
          
          <div className="flex items-center justify-center">
            <a
              href="/glitz/veille/presentation-ia-outils-code.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors"
            >
              Voir la présentation PDF
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========== CONTACT / FOOTER ==========
function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-[#F9F9FB]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-[#EDEDF2] rounded-[20px] p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-[#1A1A1A] mb-3">
              Travaillons Ensemble
            </h2>
            <p className="text-base text-[#575757]">
              Discutons de vos besoins et de vos projets web.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={`mailto:${PORTFOLIO.identity.email}`}
              className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-2xl hover:bg-gray-800 shadow-sm transition-all flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {PORTFOLIO.identity.email}
            </a>
            <a
              href={PORTFOLIO.identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white border border-[#EDEDF2] text-gray-900 font-semibold rounded-2xl hover:border-gray-300 shadow-sm transition-all flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href={PORTFOLIO.identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white border border-[#EDEDF2] text-gray-900 font-semibold rounded-2xl hover:border-gray-300 shadow-sm transition-all flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>

          <div className="pt-8 border-t border-[#EDEDF2] text-center">
            <p className="text-sm text-[#575757]">
              © {new Date().getFullYear()} {PORTFOLIO.identity.name} - BTS SIO SLAM
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========== PAGE PRINCIPALE ==========
export default function Home() {
  return (
    <div className="bg-[#F9F9FB] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Parcours />
        <Projets />
        <Competences />
        <PresentationPdfSection />
        <Contact />
      </main>
    </div>
  );
}

"use client";

import { ArrowLeft, Sparkles, Layers, Terminal, Database, CheckCircle, ExternalLink, Calendar, User, Code, Shield, Cloud, ChevronLeft, ChevronRight, Image as ImageIcon, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const GALLERY_CATEGORIES = [
  {
    id: "admin",
    name: "Frontend Admin",
    images: [
      "/glitz/Admin/capture-admin-login.png", 
      "/glitz/Admin/dashboard-admin.png", 
      "/glitz/user/users.png", 
      "/glitz/user/ajouteruser.png", 
      "/glitz/Admin/membreduneautoecole.png", 
      "/glitz/paiement/paiements.png", 
      "/glitz/paiement/paiementduneautoecole.png", 
      "/glitz/paiement/historiquepaiement.png", 
      "/glitz/Admin/Journalactivité.png"
    ]
  },
  {
    id: "client",
    name: "Frontend Client",
    images: [
      "/glitz/Client/home-client.png",
      "/glitz/Client/capture-client-inscription.png"
    ]
  },
  {
    id: "methode",
    name: "Conception & Gantt",
    images: [
      "/glitz/capture-tableaux-2.png",
      "/glitz/capture-tableaux-1.png",
      "/glitz/ganttcategorie.jpg",
      "/glitz/gantttableau.jpg",
      "/glitz/Cahierdescharges.pdf"
    ]
  },
  {
    id: "backend",
    name: "Architecture & Déploiement",
    images: [
      "/glitz/Mongodb.jpg",
      "/glitz/verceldeploiement.png",
      "/glitz/pm2backend.png"
    ]
  }
];

export default function ProjetGovoGlitz() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // States pour la Bibliothèque Photo
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeGalleryTab, setActiveGalleryTab] = useState("admin");
  const [galleryImageIndex, setGalleryImageIndex] = useState(0);

  const handleNextGalleryImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const len = GALLERY_CATEGORIES.find(c => c.id === activeGalleryTab)?.images.length || 1;
    setGalleryImageIndex((prev) => (prev + 1) % len);
  };

  const handlePrevGalleryImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const len = GALLERY_CATEGORIES.find(c => c.id === activeGalleryTab)?.images.length || 1;
    setGalleryImageIndex((prev) => (prev - 1 + len) % len);
  };

  const handleTabChange = (categoryId: string) => {
    setActiveGalleryTab(categoryId);
    setGalleryImageIndex(0);
  };

  const activeGalleryItems = GALLERY_CATEGORIES.find(c => c.id === activeGalleryTab)?.images || [];
  const activeGalleryItem = activeGalleryItems[galleryImageIndex] || "";
  const isActiveItemPdf = activeGalleryItem.toLowerCase().endsWith('.pdf');
  const pdfCategory = GALLERY_CATEGORIES.find((category) =>
    category.images.some((item) => item.toLowerCase().endsWith('.pdf'))
  );
  const pdfItemIndex = pdfCategory?.images.findIndex((item) => item.toLowerCase().endsWith('.pdf')) ?? -1;

  const handleShowPdf = () => {
    if (pdfCategory && pdfItemIndex >= 0) {
      setActiveGalleryTab(pdfCategory.id);
      setGalleryImageIndex(pdfItemIndex);
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 font-sans">
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Navigation et Logos */}
        <div className="mb-12">
          <Link href="/#projets" className="text-sm font-semibold text-gray-500 inline-flex items-center gap-2 hover:text-blue-600 transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            Retour aux projets
          </Link>
          
          <div className="flex items-center gap-8">
            <img src="https://www.govo.fr/_next/static/media/logo.9d31ccd6.svg?dpl=dpl_Cd3gsQpdYEPU3DkhWiTam2spPX12" alt="GOVO Logo" className="h-10 md:h-12 object-contain" />
            <span className="text-gray-300 font-light text-4xl">|</span>
            <img src="https://www.glitz.fr/logo.svg?dpl=dpl_Bo7vnJLZX6R4kFK9hBc9Jfmspb2Q" alt="GLITZ Logo" className="h-12 md:h-16 object-contain" />
          </div>
        </div>

        {/* Header du projet */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-semibold text-sm w-fit">
              <Calendar className="w-4 h-4" />
              Projet de Stage
            </div>
            
            <button 
              onClick={() => setIsGalleryOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all w-fit"
            >
              <ImageIcon className="w-5 h-5" />
              Voir la Bibliothèque Photo
            </button>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 leading-tight">
            🚀 Projet : Système de Gestion B2B pour Réseau d'Auto-Écoles
          </h2>
          <p className="text-xl text-[#575757] leading-relaxed mb-8">
            L'objectif était de créer une plateforme centralisée pour un réseau d'auto-écoles. Le projet se divise en deux parties : un Back-Office Admin pour piloter l'activité et un système d'inscription pour les nouveaux clients.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "NestJS (Backend)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
              { name: "React/Next.js (Frontend)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
              { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
              { name: "JWT", icon: Shield },
              { name: "VPS Hetzner", icon: Cloud }
            ].map((tech, idx) => (
              <span key={idx} className="px-4 py-2 bg-white text-gray-700 text-sm font-semibold rounded-xl border border-[#EDEDF2] flex items-center gap-2 shadow-sm">
                {tech.logo ? (
                  <img src={tech.logo} alt={tech.name} className="w-4 h-4 object-contain" />
                ) : tech.icon ? (
                  <tech.icon className="w-4 h-4 text-gray-500" />
                ) : (
                  <Code className="w-4 h-4 text-gray-400" />
                )}
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 px-4 py-8 bg-gray-50 rounded-[24px] border border-[#EDEDF2]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-5 h-5 text-gray-900" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Année</h4>
            <p className="text-gray-600 text-sm">2026</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <User className="w-5 h-5 text-gray-900" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Rôle</h4>
            <p className="text-gray-600 text-sm">Dev Full-Stack</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <ExternalLink className="w-5 h-5 text-gray-900" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Liens du Projet</h4>
            <div className="flex flex-col gap-1.5">
              <a href="https://www.glitz.fr" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 group">
                <span className="text-gray-500 font-medium">Client:</span>
                <span className="text-blue-600 font-semibold group-hover:underline">glitz.fr</span>
              </a>
              <a href="https://glitzmaster.vercel.app/login" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 group">
                <span className="text-gray-500 font-medium">Admin:</span>
                <span className="text-blue-600 font-semibold group-hover:underline">glitzmaster</span>
              </a>
              <a href="/glitz/Cahierdescharges.pdf" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 group">
                <span className="text-gray-500 font-medium">Doc:</span>
                <span className="text-blue-600 font-semibold group-hover:underline">Cahier des charges</span>
              </a>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Layers className="w-5 h-5 text-gray-900" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Équipe</h4>
            <p className="text-gray-600 text-sm">3 stagiaires</p>
          </div>
        </div>

        {/* Détails du projet / Scénario */}
        <div className="space-y-16 mb-16">
          <section className="space-y-12">
            
            {/* --- FRONTEND : L'interface visible --- */}
            
            {/* Section 1 : Un Dashboard Admin Décisionnel */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#EDEDF2] shadow-sm border-l-4 border-l-blue-500">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full mb-4 font-semibold text-xs uppercase tracking-wider">
                1. Frontend Admin • React / Next.js
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <Layers className="w-8 h-8 text-indigo-600 flex-shrink-0" />
                Un Dashboard Admin Décisionnel
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Livrable central de notre projet de fin d'année réalisé en équipe de 3 stagiaires, nous avons conçu de A à Z cette interface d'administration ultra-complète, véritable "cœur du réacteur" pour les gérants du réseau GLITZ. Ce back-office intègre un dashboard financier dynamique qui calcule automatiquement le statut des abonnements (Payé, En attente, En retard). Nous y avons également implémenté la gestion de l'ensemble des modules (agences, utilisateurs, véhicules), en terminant par un moteur de génération automatisée de factures PDF.
              </p>
              <div className="flex flex-col gap-8">
                {/* --- Groupe : Auth & Dashboard --- */}
                <div className="pt-2 pb-1">
                  <h4 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
                    <Layers className="w-6 h-6 text-indigo-500" />
                    Authentification & Dashboard
                  </h4>
                </div>
                <button onClick={() => setSelectedImage("/glitz/Admin/capture-admin-login.png")} className="w-full text-left block relative rounded-2xl overflow-hidden border border-[#EDEDF2] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                  <img
                    src="/glitz/Admin/capture-admin-login.png"
                    alt="Login sécurisé de l'espace Super Admin"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </button>
                <button onClick={() => setSelectedImage("/glitz/Admin/dashboard-admin.png")} className="w-full text-left block relative rounded-2xl overflow-hidden border border-[#EDEDF2] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                  <img
                    src="/glitz/Admin/dashboard-admin.png"
                    alt="Dashboard Administratif Dynamique et Financier"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </button>

                {/* --- Groupe : Utilisateurs --- */}
                <div className="pt-8 pb-1">
                  <h4 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
                    <User className="w-6 h-6 text-indigo-500" />
                    Page Utilisateurs et Auto-écoles
                  </h4>
                </div>
                <button onClick={() => setSelectedImage("/glitz/user/users.png")} className="w-full text-left block relative rounded-2xl overflow-hidden border border-[#EDEDF2] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                  <img
                    src="/glitz/user/users.png"
                    alt="Gestion globale des utilisateurs et auto-écoles"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </button>
                <button onClick={() => setSelectedImage("/glitz/user/ajouteruser.png")} className="w-full text-left block relative rounded-2xl overflow-hidden border border-[#EDEDF2] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                  <img
                    src="/glitz/user/ajouteruser.png"
                    alt="Formulaire d'ajout d'un nouvel utilisateur"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </button>
                <button onClick={() => setSelectedImage("/glitz/Admin/membreduneautoecole.png")} className="w-full text-left block relative rounded-2xl overflow-hidden border border-[#EDEDF2] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                  <img
                    src="/glitz/Admin/membreduneautoecole.png"
                    alt="Vue détaillée des membres d'une auto-école"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </button>

                {/* --- Groupe : Finances --- */}
                <div className="pt-8 pb-1">
                  <h4 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
                    <Database className="w-6 h-6 text-indigo-500" />
                    Page Paiements et Facturation
                  </h4>
                </div>
                <button onClick={() => setSelectedImage("/glitz/paiement/paiements.png")} className="w-full text-left block relative rounded-2xl overflow-hidden border border-[#EDEDF2] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                  <img
                    src="/glitz/paiement/paiements.png"
                    alt="Suivi global des paiements du réseau"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </button>
                <button onClick={() => setSelectedImage("/glitz/paiement/paiementduneautoecole.png")} className="w-full text-left block relative rounded-2xl overflow-hidden border border-[#EDEDF2] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                  <img
                    src="/glitz/paiement/paiementduneautoecole.png"
                    alt="Suivi des paiements pour une auto-école spécifique"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </button>
                <button onClick={() => setSelectedImage("/glitz/paiement/historiquepaiement.png")} className="w-full text-left block relative rounded-2xl overflow-hidden border border-[#EDEDF2] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                  <img
                    src="/glitz/paiement/historiquepaiement.png"
                    alt="Historique détaillé des transactions financières"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </button>

                {/* --- Groupe : Sécurité --- */}
                <div className="pt-8 pb-1">
                  <h4 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-indigo-500" />
                    Traçabilité & Journal d'Activité
                  </h4>
                </div>
                <button onClick={() => setSelectedImage("/glitz/Admin/Journalactivité.png")} className="w-full text-left block relative rounded-2xl overflow-hidden border border-[#EDEDF2] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                  <img
                    src="/glitz/Admin/Journalactivité.png"
                    alt="Journal d'activité et traçabilité des actions"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </button>
              </div>
            </div>

            {/* Section 2 : Une Porte d'Entrée Client Sécurisée */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#EDEDF2] shadow-sm border-l-4 border-l-orange-500">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-700 rounded-full mb-4 font-semibold text-xs uppercase tracking-wider">
                2. Frontend Client • React / Next.js
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <User className="w-8 h-8 text-orange-600 flex-shrink-0" />
                Une Porte d'Entrée Client Sécurisée
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                En parallèle de la zone d'administration, notre équipe a développé le tunnel d'inscription critique destiné aux nouvelles auto-écoles souhaitant rejoindre la franchise. Conscients des enjeux liés à l'exposition publique de ce portail, nous avons verrouillé toutes les interactions en combinant des tokens <strong>JWT</strong> et des <strong>Cookies HTTP-only</strong>. Cette architecture bloque nativement les attaques front-end (XSS) et garantit une expérience client fluide et infaillible.
              </p>
              <div className="flex flex-col gap-8">
                {/* --- Client : Accueil --- */}
                <div className="pt-2 pb-1">
                  <h4 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
                    <ExternalLink className="w-6 h-6 text-orange-500" />
                    Portail d'Accueil GLITZ
                  </h4>
                </div>
                <button onClick={() => setSelectedImage("/glitz/Client/home-client.png")} className="w-full text-left block relative rounded-2xl overflow-hidden border border-[#EDEDF2] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                  <img
                    src="/glitz/Client/home-client.png"
                    alt="Accueil du portail Client GLITZ"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </button>

                {/* --- Client : Formulaire --- */}
                <div className="pt-8 pb-1">
                  <h4 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-orange-500" />
                    Tunnel d'Inscription Sécurisé
                  </h4>
                </div>
                <button onClick={() => setSelectedImage("/glitz/Client/capture-client-inscription.png")} className="w-full text-left block relative rounded-2xl overflow-hidden border border-[#EDEDF2] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 max-w-3xl mx-auto w-full group cursor-pointer">
                  <img
                    src="/glitz/Client/capture-client-inscription.png"
                    alt="Tunnel d'inscription sécurisé pour les auto-écoles"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </button>
              </div>
            </div>

            {/* --- BACKEND & METHODOLOGIE --- */}

            {/* Section 3 : La Méthodologie Avant le Code */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#EDEDF2] shadow-sm mt-12 border-l-4 border-l-indigo-500">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full mb-4 font-semibold text-xs uppercase tracking-wider">
                3. Conception & Méthodologie
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <Database className="w-8 h-8 text-indigo-600 flex-shrink-0" />
                La Méthodologie Avant le Code
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed whitespace-pre-line">
                Pour aboutir aux interfaces complètes présentées ci-dessus, il était impensable pour notre équipe de développer à l'aveugle. Notre premier grand chantier a été l'organisation totale du <strong>Frontend Admin</strong> sur tableur. Ce document analytique listait avec minutie chaque écran, chaque composant, et son statut réel, garantissant qu'aucune brique de l'interface métier n'avait été laissée au hasard.
              </p>

              <div className="flex flex-col gap-8">
                <button onClick={() => setSelectedImage("/glitz/capture-tableaux-2.png")} className="w-full text-left block relative rounded-2xl overflow-hidden border border-[#EDEDF2] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                  <img
                    src="/glitz/capture-tableaux-2.png"
                    alt="Suivi de l'avancement technique sur Google Sheets (Frontend Admin)"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </button>

                <div className="py-2">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5 text-indigo-500" />
                    Une Architecture d'API Sans Faille (Backend)
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                    En miroir du suivi de l'interface visuelle, nous avons exigé la mise en place d'un second tableau spécifiquement dédié à l'infrastructure de la donnée alimentant le <strong>Backend Administration et Client</strong>.{"\n\n"}Plutôt que d'écrire des routes API à la volée, ce document nous a permis de :{"\n"}• <strong>Forger la logique métier</strong> : Spécifier précisément les besoins d'écriture, lecture, et de suppression.{"\n"}• <strong>Sécuriser le périmètre</strong> : Nous assurer que chaque besoin visuel était adossé à une route API solidement documentée et protégée par son badge JWT.
                  </p>
                </div>

                <button onClick={() => setSelectedImage("/glitz/capture-tableaux-1.png")} className="w-full text-left block relative rounded-2xl overflow-hidden border border-[#EDEDF2] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                  <img
                    src="/glitz/capture-tableaux-1.png"
                    alt="Modélisation des routes API sur Google Sheets (Backend Admin & Client)"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </button>
              </div>
            </div>

            {/* Section 4 : Planification Gantt */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#EDEDF2] shadow-sm border-l-4 border-l-teal-500">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-blue-600 flex-shrink-0" />
                Planification Temporelle et Suivi Agile
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Afin de lier nos ambitions architecturales à la réalité des délais de notre stage, nous avons instauré ce diagramme de Gantt exhaustif. Il a été le chef d'orchestre de la coordination de nos 3 développeurs : de la conception de la BDD à l'injection des données Front. Grâce à cet outil visuel, nous avons pu prioriser les dépendances techniques de l'application de façon extrêmement fluide en méthodologie Agile.
              </p>
              <div className="flex flex-col gap-8">
                <button onClick={() => setSelectedImage("/glitz/ganttcategorie.jpg")} className="w-full text-left block relative rounded-2xl overflow-hidden border border-[#EDEDF2] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                  <img
                    src="/glitz/ganttcategorie.jpg"
                    alt="Catégories et organisation du diagramme de Gantt"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </button>
                <button onClick={() => setSelectedImage("/glitz/gantttableau.jpg")} className="w-full text-left block relative rounded-2xl overflow-hidden border border-[#EDEDF2] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                  <img
                    src="/glitz/gantttableau.jpg"
                    alt="Tableau de suivi temporel Gantt"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </button>
              </div>
            </div>

            {/* Section 5 : MongoDB */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#EDEDF2] shadow-sm border-l-4 border-l-green-500">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full mb-4 font-semibold text-xs uppercase tracking-wider">
                4. Backend & Base de Données
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <Database className="w-8 h-8 text-green-600 flex-shrink-0" />
                Architecture de Données Hautement Scalable
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Pour propulser de telles interfaces de back-office, où les gérants manipulent énormément de données clients différentes, l'équipe a conceptualisé l'infrastructure autour de la base de données <strong>MongoDB</strong>. Cette technologie NoSQL, par son approche orientée "documents", offre une vélocité exceptionnelle sur les lourds calculs analytiques de nos dashboards sans risquer l'engorgement des schémas SQL classiques.
              </p>
              <div className="flex flex-col gap-8">
                <button onClick={() => setSelectedImage("/glitz/Mongodb.jpg")} className="w-full text-left block relative rounded-2xl overflow-hidden border border-[#EDEDF2] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                  <img
                    src="/glitz/Mongodb.jpg"
                    alt="Architecture de base de données MongoDB"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </button>
              </div>
            </div>


            {/* Section 6 : Déploiement Continu (CI/CD) & PM2 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#EDEDF2] shadow-sm border-l-4 border-l-blue-400 mt-12 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full mb-4 font-semibold text-xs uppercase tracking-wider">
                5. Déploiement & Hébergement
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <Cloud className="w-8 h-8 text-blue-500 flex-shrink-0" />
                Déploiement Frontend (Vercel) et Backend (PM2)
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Afin d'assurer des livraisons rapides et sans interruption de service, nous avons configuré un pipeline de déploiement continu via <strong>Vercel</strong> pour la partie Frontend. En parallèle, notre API Node.js/NestJS est orchestrée sur un serveur VPS de production grâce à <strong>PM2</strong>. Cette double architecture garantit un cycle de développement fluide, un monitoring en direct et une disponibilité permanente de l'application pour les gérants.
              </p>
              <div className="flex flex-col gap-8">
                {/* --- Groupe : Vercel --- */}
                <div className="pt-2 pb-1">
                  <h4 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
                    <Cloud className="w-6 h-6 text-blue-500" />
                    Déploiement Continu (CI/CD) React
                  </h4>
                </div>
                <button onClick={() => setSelectedImage("/glitz/verceldeploiement.png")} className="w-full text-left block relative rounded-2xl overflow-hidden border border-[#EDEDF2] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:border-blue-400 transition-all duration-500 group cursor-pointer">
                  <img
                    src="/glitz/verceldeploiement.png"
                    alt="Interface de déploiement continu du projet GLITZ sur Vercel"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </button>

                {/* --- Groupe : PM2 --- */}
                <div className="pt-8 pb-1">
                  <h4 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
                    <Terminal className="w-6 h-6 text-blue-500" />
                    Orchestration Serveur & Monitoring PM2
                  </h4>
                </div>
                <button onClick={() => setSelectedImage("/glitz/pm2backend.png")} className="w-full text-left block relative rounded-2xl overflow-hidden border border-[#EDEDF2] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:border-blue-400 transition-all duration-500 group cursor-pointer">
                  <img
                    src="/glitz/pm2backend.png"
                    alt="Dashboard et monitoring PM2 pour l'API Backend"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </button>
              </div>
            </div>
          </section>

          {/* Section Finale : Bilan technique & Déploiement */}
          <section className="bg-[#0A0A0A] text-white p-8 md:p-12 rounded-[32px] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 -mr-16 -mt-16 pointer-events-none"></div>
            <h2 className="text-3xl md:text-4xl font-black mb-8 flex items-center gap-4 relative z-10">
              <Terminal className="w-10 h-10 text-blue-400" />
              Bilan de l'Expérience
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 relative z-10 font-light">
              Ce projet grandeur nature, accompli par une équipe de 3 stagiaires, valide directement mes années d'études de <strong className="text-white font-bold">Développeur Full-Stack</strong> et d'initié <strong className="text-white font-bold">DevOps</strong>. De la conceptualisation théorique UML/Gantt, au développement rigoureux des modules <strong className="text-blue-400">Next.js / React</strong> en Front, l'implémentation de la solide API <strong className="text-green-500">MongoDB / NestJS</strong> en Backend, jusqu'au verrouillage cryptographique et au déploiement CI/CD. GLITZ représente et prouve mon aptitude technique à m'intégrer dans une équipe de développement pour modéliser, réaliser et sécuriser un outil web industriel complet.
            </p>
            <div className="relative z-10">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                M'embaucher pour votre prochain projet
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Bibliothèque Photo Modal (Mode Présentation) */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[110] bg-white flex flex-col animate-in fade-in duration-300">
          {/* Header Modal */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white shadow-sm relative z-20">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <ImageIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 hidden sm:block">Mode Présentation - Galerie</h3>
              <h3 className="text-lg font-bold text-gray-900 sm:hidden">Galerie</h3>
            </div>
            <div className="flex items-center gap-2">
              
              <button 
                onClick={() => setIsGalleryOpen(false)}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-900"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
            {/* Sidebar Tabs */}
            <div className="w-full md:w-64 border-r border-gray-100 bg-gray-50 p-4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto shrink-0 touch-pan-x">
              {GALLERY_CATEGORIES.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleTabChange(category.id)}
                  className={`flex shrink-0 items-center justify-between px-4 py-3 rounded-xl font-medium transition-all ${
                    activeGalleryTab === category.id 
                      ? 'bg-white shadow-md border border-gray-200 text-blue-600 font-bold' 
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                  <span className={`text-xs px-2 py-0.5 rounded-full ${activeGalleryTab === category.id ? 'bg-blue-100 text-blue-700' : 'bg-gray-200 text-gray-600'}`}>
                    {category.images.length}
                  </span>
                </button>
              ))}
            </div>

            {/* Main Viewer Area */}
            <div className="flex-1 bg-gray-900 relative flex items-center justify-center p-4">
              {/* Image d'affichage */}
              <div className="relative w-full h-full flex items-center justify-center">
                {isActiveItemPdf ? (
                  <div className="w-full h-full max-w-5xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-500">
                    <iframe
                      key={galleryImageIndex}
                      src={activeGalleryItem}
                      title="Cahier des charges"
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  <img 
                    key={galleryImageIndex}
                    src={activeGalleryItem}
                    alt="Aperçu Présentation"
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in-95 duration-500"
                  />
                )}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={handlePrevGalleryImage}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 bg-black/40 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-all border border-white/20"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
              </button>
              
              <button 
                onClick={handleNextGalleryImage}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 bg-black/40 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-all border border-white/20"
              >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
              </button>

              {/* Counter Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/60 backdrop-blur-xl text-white rounded-full text-base font-bold border border-white/20 shadow-2xl tracking-widest">
                {galleryImageIndex + 1} / {activeGalleryItems.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal pour les images classiques */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full max-h-[90vh] flex justify-center items-center">
            <img 
              src={selectedImage} 
              alt="Aperçu en plein écran" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl scale-100 animate-in fade-in zoom-in-95 duration-300"
            />
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              className="absolute -top-4 -right-4 md:top-4 md:right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { ArrowLeft, Rss } from 'lucide-react';
import Link from 'next/link';

export default function VeillePage() {
  return (
    <div className="bg-[#F9F9FB] min-h-screen py-10 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Link href="/#veille" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Retour au Portfolio
          </Link>
        </div>

        <section className="bg-white p-10 md:p-14 rounded-3xl border border-[#EDEDF2] shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <Rss className="w-7 h-7 text-gray-900" />
            <h1 className="text-3xl md:text-4xl font-black text-gray-900">Veille Technologique</h1>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Cette section a ete volontairement simplifiee.
            Je maintiens une veille continue pour rester a jour sur l'evolution des outils de developpement,
            notamment l'IA appliquee au code, la securite et les bonnes pratiques d'architecture.
          </p>
        </section>
      </div>
    </div>
  );
}

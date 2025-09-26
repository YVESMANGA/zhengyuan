'use client'

import About from "@/components/About";
import Actualites from "@/components/Actualites";
import Fcontacts from "@/components/Fcontacts";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Image from "next/image";
import { useState } from "react";

export default function Acceuil() {
  const services = [
    {
      image: "/p22.jpg",
      title: "Poudre de calcium ultra (micro) fine",
      description:
        "(CACo3≥98%, taille de particule personnalisable 200-2500 mesh).",
    },
    {
      image: "/p1.jpg",
      title: "Production de poudre de mastic",
      description:
        "Création de poudre de mastic adaptée aux travaux de finition et de construction.",
    },
    {
      image: "/p33.jpg",
      title: "Revêtements liquides",
      description:
        "Solutions de revêtement imperméable pour protéger et durabiliser les surfaces.",
    },
  ];

  // ✅ Correction ici
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  

  const cooperationOptions = [
    {
      id: "agents",
      title: "Agents Régionaux",
      description:
        "Principaux distributeurs ayant des ressources dans l’industrie, agents exclusifs, OEM, marques, co-traitance, soutien aux prix compétitifs.",
    },
    {
      id: "distributeurs",
      title: "Distributeurs Professionnels",
      description:
        "Se concentrer sur des clients spécialisés dans des domaines particuliers, fournir un support technique prioritaire, droits de distribution préférentiels.",
    },
  ];

  return (
    <div className="font-sans antialiased text-gray-800">
      <Hero />
      <About />

      {/* Section Produits */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-700 mb-12 text-center tracking-wide">
            Nos Produits
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="mb-6 relative w-full h-48 rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-center text-gray-800 transition-colors duration-300 hover:text-blue-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <Actualites/>
      <Why/> 
      
      {/* Section Mode de coopération */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-12 tracking-wide">
            Mode de coopération
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {cooperationOptions.map((option) => (
              <div
                key={option.id}
                onClick={() => setSelectedMode(option.id)}
                className={`
                  cursor-pointer p-8 rounded-3xl shadow-md transform transition-all duration-500
                  ${selectedMode === option.id
                    ? "bg-blue-600 text-white scale-105 shadow-2xl"
                    : "bg-white hover:scale-105 hover:shadow-xl"
                  }
                `}
              >
                <h3 className="text-2xl font-semibold mb-3">{option.title}</h3>
                <p className={selectedMode === option.id ? "text-white" : "text-gray-700"}>{option.description}</p>
              </div>
            ))}
          </div>

          {selectedMode && (
            <p className="mt-10 text-lg text-gray-700">
              Vous avez choisi :{" "}
              <strong className="text-blue-700">
                {cooperationOptions.find((o) => o.id === selectedMode)?.title}
              </strong>
            </p>
          )}
        </div>
      </section> 
      <Fcontacts/>
    </div>

    
  );
}

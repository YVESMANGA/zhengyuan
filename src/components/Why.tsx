import React from "react";

export default function Why() {
  const atouts = [
    {
      titre: "Ligne de production entièrement automatique",
      description:
        "Notre usine est équipée d’une ligne de production moderne et automatisée, garantissant efficacité, rapidité et constance dans la qualité.",
    },
    {
      titre: "Contrôle qualité rigoureux",
      description:
        "Nous disposons d’équipements complets pour l’analyse et le contrôle qualité afin d’assurer des produits fiables et conformes aux standards internationaux.",
    },
    {
      titre: "Capacité industrielle élevée",
      description:
        "Avec une production annuelle de 100 000 tonnes, dont 50 000 tonnes de peinture et 35 000 tonnes de poudre, nous répondons aux besoins de nos clients à grande échelle.",
    },
    {
      titre: "Équipe technique qualifiée",
      description:
        "Notre équipe compte 12 techniciens professionnels et 35 employés engagés, apportant savoir-faire et expertise dans chaque étape de la production.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Nos Atouts
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Découvrez ce qui fait la force de Zhengyuan Materials Co., Ltd.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {atouts.map((atout, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-3xl p-8 hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 hover:scale-105 flex flex-col"
          >
            {/* Badge numéro */}
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-xl mb-4 shadow-md">
              {index + 1}
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              {atout.titre}
            </h2>
            <p className="text-gray-600 flex-1 leading-relaxed">{atout.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

import React from "react";

export default function Actualites() {
  const publications = [
    {
        titre: "Discours de l'Ambassadeur Li Zhigang au symposium",
        description:
          "Découvrez le discours de l'Ambassadeur Li Zhigang au symposium organisé par la communauté chinoise d'outre-mer du Sénégal.",
        lien: "https://mp.weixin.qq.com/s/GkyhILWf0NbXkf8C2S8fRw",
        image:
          "chine.jpg", // drapeau chinois
        type: "article",
      },
      
    {
      titre: "Le Sénégal, terre d’investissements",
      description:
        "Découvrez la vidéo officielle sur les opportunités d’investissements au Sénégal, notamment avec les partenaires chinois.",
      lien: "vz1.mp4", // lien vidéo locale
      type: "video",
    },
    {
      titre: "Forum d’investissement des entreprises chinoises",
      description:
        "Retour sur le Forum d’investissement des entreprises chinoises, mettant en lumière les opportunités et collaborations internationales.",
      lien: "https://mp.weixin.qq.com/s/FNnOKj3Y17YZAGVCJQoc9A",
      image:
        "chine.jpg",
      type: "article",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Actualités
        </h2>
        <p className="text-lg text-gray-600">
          Restez informés de nos dernières publications et nouveautés.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-500 transform hover:-translate-y-2 hover:scale-105 flex flex-col overflow-hidden"
          >
            {/* Badge type */}
            <div className="absolute top-4 right-4 bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold text-sm z-10">
              {pub.type === "article" ? "Article" : "Vidéo"}
            </div>

            {pub.type === "article" && (
              <>
                <img
                  src={pub.image}
                  alt={pub.titre}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {pub.titre}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">{pub.description}</p>
                  <a
                    href={pub.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition"
                  >
                    Lire l’article
                  </a>
                </div>
              </>
            )}

            {pub.type === "video" && (
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {pub.titre}
                </h3>
                <p className="text-gray-600 mb-4 flex-1">{pub.description}</p>
                <div className="relative w-full pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-lg">
                  <video
                    src={pub.lien}
                    controls
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

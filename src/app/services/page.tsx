import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";

// Les mêmes produits que sur l’accueil
const products = [
  {
    image: "/p2.jpg",
    title: "Groupe (poudre) de ciment fin",
    description:
      "Fabrication de poudre de calcium lourde de haute qualité pour diverses applications industrielles.",
  },
  {
    image: "/p1.jpg",
    title: "Production de poudre de mastic",
    description:
      "Création de poudre de mastic adaptée aux travaux de finition et de construction.",
  },
  {
    image: "/p3.jpg",
    title: "Revêtements liquides",
    description:
      "Solutions de revêtement imperméable pour protéger et durabiliser les surfaces.",
  },
];

export default function ProductsPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-10 text-center">
        Nos Produits
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain transition-transform duration-700 hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              {product.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

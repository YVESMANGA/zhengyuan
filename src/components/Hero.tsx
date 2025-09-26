import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-20  w-full"
      style={{ backgroundImage: "url('/hero1.jpg')" }}
    >
      <div className="text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Zhengyuan New Materials Co., Ltd
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Spécialistes de la production de la poudre de calcium lourde, de la poudre de mastic et des revêtements imperméables.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Découvrir nos services
          </Link>
          <Link
            href="/contact"
            className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-950 transition"
          >
            Nous contacter
          </Link>
        </div>
      </div>

      {/* Fond sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </section>
  );
}

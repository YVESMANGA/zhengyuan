import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Bloc 1 - Entreprise */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
          Zhengyuan New Materials Co., Ltd
          </h2>
          <p className="text-sm">
            Commerce général, Import & Export, BTP, Immobilier et Services divers.
          </p>
        </div>

        {/* Bloc 2 - Liens rapides */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Liens rapides</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400">Accueil</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">À propos</Link></li>
            <li><Link href="/services" className="hover:text-blue-400">Produits</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Bloc 3 - Contact */}
        <div>

          {/* Ligne chaude pour la coopération commerciale */}
          <div className="mt-4">
            <h4 className="text-md font-semibold text-white mb-2">Coopération commerciale</h4>
            <p className="text-sm">M. Gan : 📞 +221 77 588 3799 / +86 137 8703 5068 (WeChat)</p>
            <p className="text-sm">Mlle Li : 📞 +221 78 462 7479 / +86 135 4867 7766 (WeChat)</p>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="bg-gray-800 text-center text-gray-400 py-4 text-sm">
        © {new Date().getFullYear()} ZYNM-SARL | RCCM SN DKR 2025 B 18501 | NINEA 012101169
      </div>
    </footer>
  );
}

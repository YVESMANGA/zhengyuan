import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Bloc 1 - Entreprise */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            ZY NOUVEL MATERIEL COMPAGNIE LTD - SARL
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
            <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Bloc 3 - Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">Rez-de-chaussée, Immeuble 03 GH02</p>
          <p className="text-sm">Cité de l’émergence pompier, Dakar</p>
          <p className="text-sm">📞 +221 77 398 23 65</p>
          <p className="text-sm">✉️ contact@zynm-sarl.com</p>
        </div>
      </div>

      {/* Bas de page */}
      <div className="bg-gray-800 text-center text-gray-400 py-4 text-sm">
        © {new Date().getFullYear()} ZYNM-SARL | RCCM SN DKR 2025 B 18501 | NINEA 012101169
      </div>
    </footer>
  );
}

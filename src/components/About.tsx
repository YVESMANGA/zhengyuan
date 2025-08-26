export default function AboutPage() {
    return (
      <main className="w-full max-w-6xl mx-auto px-4 py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        
        {/* Section principale */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 bg-white rounded-3xl shadow-xl p-8 md:p-16 transform transition-transform hover:-translate-y-1">
          
          {/* Colonne gauche : logo */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/logo.png" 
              alt="ZY NOUVEL MATERIEL COMPAGNIE LTD - SARL" 
              className="w-72 h-auto object-contain rounded-xl border border-gray-200 shadow-lg transition-transform hover:scale-105"
            />
          </div>
  
          {/* Colonne droite : description */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 leading-tight">
            Zhengyuan
            </h1>
  
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              <strong>ZYNM-SARL</strong> est une société à responsabilité limitée basée à Dakar, Sénégal. 
              Nous intervenons dans le commerce général, l’import & export, le BTP, l’immobilier et divers services, 
              avec une expertise confirmée dans différents secteurs stratégiques.
            </p>
  
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Fondée en 2025, l’entreprise est immatriculée au 
              <strong> Registre de commerce et de crédit mobilier (RCCM) SN DKR 2025 B 18501</strong> 
              avec le numéro <strong>NINEA 012101169</strong>. ZYNM-SARL s’engage à fournir des solutions fiables 
              et innovantes adaptées aux besoins du marché local et international.
            </p>
  
            {/* Badges points forts */}
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium shadow-sm hover:bg-blue-100 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0L15.09 7.36H23.18L17.09 11.82L19.27 19.36L12 14.91L4.73 19.36L6.91 11.82L0.82 7.36H8.91L12 0Z" />
                </svg>
                Qualité & Innovation
              </span>
              <span className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium shadow-sm hover:bg-green-100 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15l6-6-1.41-1.41L13 14.17l-2.59-2.58L9 13l4 4z" />
                </svg>
                Fiabilité
              </span>
              <span className="flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full font-medium shadow-sm hover:bg-yellow-100 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15 8l6 1-4.5 4 1 6-5.5-3-5.5 3 1-6L3 9l6-1z" />
                </svg>
                Expertise sectorielle
              </span>
            </div>
  
          </div>
        </div>
      </main>
    );
  }
  
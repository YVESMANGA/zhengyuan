import ServiceCard from "@/components/ServiceCard";
import { Briefcase, Building2, Truck, Factory, Hammer, Home } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Briefcase size={40} />,
      title: "Commerce général & Import-Export",
      description: "Solutions fiables pour l’achat, la vente et la distribution de biens au Sénégal et à l’international."
    },
    {
      icon: <Factory size={40} />,
      title: "Finance & Industrie",
      description: "Investissements, gestion et développement d’activités industrielles et financières."
    },
    {
      icon: <Truck size={40} />,
      title: "Transport & Transformation",
      description: "Services logistiques et transformation de matières premières pour divers secteurs."
    },
    {
      icon: <Building2 size={40} />,
      title: "Exploitation minière",
      description: "Gestion, exploitation et valorisation de substances minérales avec respect des normes."
    },
    {
      icon: <Hammer size={40} />,
      title: "BTP & Génie civil",
      description: "Construction, aménagement et infrastructures pour accompagner le développement urbain."
    },
    {
      icon: <Home size={40} />,
      title: "Immobilier & Services",
      description: "Projets immobiliers, gestion de biens et divers services liés au secteur."
    },
  ];

  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-10 text-center">Nos Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </main>
  );
}

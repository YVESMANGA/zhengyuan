import About from "@/components/About";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Briefcase, Building2, Truck, Factory, Hammer, Home } from "lucide-react";

export default function Acceuil() {
  const services = [
    {
      icon: <Briefcase size={40} />,
      title: "Commerce général & Import-Export",
      description:
        "Solutions fiables pour l’achat, la vente et la distribution de biens au Sénégal et à l’international.",
    },
    {
      icon: <Factory size={40} />,
      title: "Finance & Industrie",
      description:
        "Investissements, gestion et développement d’activités industrielles et financières.",
    },
    {
      icon: <Truck size={40} />,
      title: "Transport & Transformation",
      description:
        "Services logistiques et transformation de matières premières pour divers secteurs.",
    },
    {
      icon: <Building2 size={40} />,
      title: "Exploitation minière",
      description:
        "Gestion, exploitation et valorisation de substances minérales avec respect des normes.",
    },
    {
      icon: <Hammer size={40} />,
      title: "BTP & Génie civil",
      description:
        "Construction, aménagement et infrastructures pour accompagner le développement urbain.",
    },
    {
      icon: <Home size={40} />,
      title: "Immobilier & Services",
      description: "Projets immobiliers, gestion de biens et divers services liés au secteur.",
    },
  ];

  return (
    <div className="">
      <Hero />
      <About />

      {/* Section Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
            Nos Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

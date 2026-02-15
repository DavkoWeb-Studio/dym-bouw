import React from 'react';
import { Hammer, Home, PenTool, Ruler } from 'lucide-react';

function Services() {
  const services = [
    { 
      icon: <Home className="w-10 h-10 text-primary" />,
      title: "Nieuwbouw & Aanbouw", 
      desc: "Complete realisatie van uitbreidingen, dakkapellen en schuren." 
    },
    { 
      icon: <Hammer className="w-10 h-10 text-primary" />,
      title: "Renovatie", 
      desc: "Vakkundig herstel en modernisering van bestaande woningen en panden." 
    },
    { 
      icon: <PenTool className="w-10 h-10 text-primary" />,
      title: "Onderhoud", 
      desc: "Duurzaam onderhoud van houtwerk, kozijnen en gevels." 
    },
    { 
      icon: <Ruler className="w-10 h-10 text-primary" />,
      title: "Maatwerk", 
      desc: "Unieke oplossingen zoals trappen, kastenwanden en terrassen." 
    },
  ];

  return (
    <section id="diensten" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
            Onze <span className="text-primary">Diensten</span>
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto drop-shadow-md font-medium text-xl md:text-2xl">
            Van kleine reparaties tot complete verbouwingen. Wij leveren kwaliteit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black/70 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 group flex flex-col items-start"
            >
              <div className="bg-white/5 p-5 rounded-2xl inline-block mb-6 group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>
              {/* ZMIANA: text-2xl (duży nagłówek) */}
              <h3 className="text-2xl font-extrabold text-white mb-4">{service.title}</h3>
              {/* ZMIANA: text-lg (duży opis) i text-gray-300 (jaśniejszy) */}
              <p className="text-gray-300 leading-relaxed text-lg font-medium">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
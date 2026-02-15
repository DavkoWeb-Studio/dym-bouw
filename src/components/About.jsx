import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import imgBouw from '../assets/wpracy.png';

function About() {
  const points = [
    "Jarenlange ervaring in Nederland",
    "Eerlijke prijzen, geen verrassingen",
    "Snel en nauwkeurig werken",
    "Eigen gereedschap en vervoer"
  ];

  return (
    <section id="over" className="py-24 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Tekst */}
          <div className="bg-black/50 p-8 md:p-12 rounded-[2.5rem] border border-white/5 backdrop-blur-md">
            <h2 className="text-primary font-bold tracking-widest uppercase mb-4 text-lg">Over DYM Bouw</h2>
            
            {/* ZMIANA: text-5xl */}
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 drop-shadow-md leading-tight">
              Vertrouwen bouw je met daden.
            </h3>
            
            {/* ZMIANA: text-2xl (Bardzo duży tekst) */}
            <p className="text-gray-100 leading-relaxed mb-8 text-xl md:text-2xl font-medium">
              Ik ben een ervaren timmerman voor wie geen uitdaging te groot is.
              Ik voer elk project snel en nauwkeurig uit – van renovaties en nieuwbouw 
              tot modernisering.
            </p>
            
            {/* ZMIANA: text-xl */}
            <p className="text-gray-300 leading-relaxed mb-10 text-lg md:text-xl">
              Mijn doel is simpel: topkwaliteit leveren waar u jarenlang plezier van heeft.
              Ik denk met u mee en zorg voor een resultaat dat aan al uw wensen voldoet.
            </p>

            <div className="grid grid-cols-1 gap-5">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-4 text-white">
                  <CheckCircle2 className="text-primary w-8 h-8 flex-shrink-0" />
                  {/* ZMIANA: text-xl (Duże punkty listy) */}
                  <span className="text-lg md:text-xl font-bold drop-shadow-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Zdjęcie */}
          <div className="relative">
            <div className="aspect-square rounded-[2.5rem] overflow-hidden bg-gray-800 border-2 border-white/10 relative shadow-2xl">
               <img 
                src={imgBouw} 
                alt="Construction work" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                 <p className="text-white font-black text-3xl drop-shadow-lg">Kwaliteit gegarandeerd</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
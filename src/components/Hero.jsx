import React from 'react';
import { ChevronRight, Star } from 'lucide-react';
import logoImg from '../assets/logo.png'; 

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 lg:py-0 overflow-hidden relative">
      
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* --- LEWA STRONA --- */}
        <div className="text-center lg:text-left z-10 order-2 lg:order-1 flex flex-col items-center lg:items-start">
          
          {/* 1. DUŻY TAG */}
          <div className="inline-block px-6 py-2 md:px-8 md:py-3 rounded-full border-2 border-primary/40 bg-black/60 text-primary text-base md:text-xl font-extrabold mb-8 backdrop-blur-md shadow-lg shadow-primary/10 animate-fade-in-up">
            ★ 14 jaar ervaring in de bouw
          </div>
          
          {/* 2. GIGANTYCZNY NAGŁÓWEK */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tighter drop-shadow-2xl">
            Vakmanschap. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-yellow-500 drop-shadow-sm animate-pulse-slow">
              Tot in detail.
            </span>
          </h1>
          
          {/* 3. OPIS */}
          <p className="max-w-2xl mx-auto lg:mx-0 text-gray-200 text-lg md:text-2xl mb-10 leading-relaxed font-medium drop-shadow-md">
            Ervaren timmerman voor nieuwbouw, renovatie en maatwerk. 
            Wij realiseren uw project snel, nauwkeurig en volgens afspraak.
          </p>
          
          {/* 4. SOCIAL PROOF (Bez zdjęć ludzi) */}
          <div className="flex items-center gap-5 mb-10 bg-black/40 p-4 px-6 rounded-2xl border border-white/10 backdrop-blur-md w-fit animate-fade-in-up delay-200 shadow-xl">
            
            {/* Ikona wyróżniająca (Duża gwiazda w kółku) */}
            <div className="bg-yellow-500/20 p-3 rounded-full border border-yellow-500/30">
              <Star className="text-yellow-400 w-8 h-8 fill-yellow-400" />
            </div>
            
            {/* Tekst i małe gwiazdki */}
            <div className="text-left">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white font-bold text-lg leading-none">
                <span className="text-primary font-black text-2xl mr-1">305+</span> 
                tevreden klanten
              </p>
            </div>
          </div>

          {/* 5. PRZYCISKI */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full">
            <a href="#contact" className="bg-primary px-8 py-5 rounded-2xl text-black font-extrabold text-xl hover:bg-orange-500 hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 w-full sm:w-auto">
              Offerte aanvragen <ChevronRight size={24} strokeWidth={3} />
            </a>
            <a href="#diensten" className="border-2 border-white/20 bg-white/5 backdrop-blur-md px-8 py-5 rounded-2xl text-white font-bold text-xl hover:bg-white/10 hover:border-white/40 transition-all w-full sm:w-auto">
              Onze diensten
            </a>
          </div>
        </div>

        {/* --- PRAWA STRONA (Logo) --- */}
        <div className="relative flex justify-center items-center mt-8 lg:mt-0 order-1 lg:order-2">
           <div className="relative w-[280px] h-[280px] lg:w-[480px] lg:h-[480px] flex items-center justify-center animate-[pulse_4s_ease-in-out_infinite]">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-[60px]"></div>
              <div className="absolute inset-0 border-[3px] border-dashed border-primary/50 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="relative w-[240px] h-[240px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-primary/20 bg-black/80 flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-500">
                <img src={logoImg} alt="DYM Bouw Logo" className="w-full h-full object-contain scale-75 p-4" />
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
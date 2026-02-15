import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo i opis */}
        <div>
          <h2 className="text-2xl font-black mb-4">DYM <span className="text-primary">BOUW</span></h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Professionele bouw- en renovatiediensten in heel Nederland. 
            Kwaliteit en vakmanschap staan bij ons centraal.
          </p>
        </div>

        {/* Linki */}
        <div>
          <h4 className="font-bold mb-6 text-primary uppercase text-sm tracking-wider">Navigatie</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#start" className="hover:text-white transition-colors">Start</a></li>
            <li><a href="#diensten" className="hover:text-white transition-colors">Diensten</a></li>
            <li><a href="#over" className="hover:text-white transition-colors">Over ons</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Kontakt w stopce */}
        <div>
          <h4 className="font-bold mb-6 text-primary uppercase text-sm tracking-wider">Contactgegevens</h4>
          <div className="space-y-4 text-sm text-gray-300">
            <a href="tel:+316XXXXXXXX" className="flex items-center gap-3 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-primary" /> +31 6 261 615 44
            </a>
            <a href="mailto:info@dymbouw.nl" className="flex items-center gap-3 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-primary" /> dymbouw@gmail.com
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-primary" /> Nederland
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xs text-gray-500">
          © {currentYear} DYM Bouw. Alle rechten voorbehouden.
        </div>
        <button 
          onClick={scrollToTop}
          className="p-3 rounded-lg bg-gray-800 text-primary hover:bg-gray-700 transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
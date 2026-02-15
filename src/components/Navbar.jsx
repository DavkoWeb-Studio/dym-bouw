import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO - Skaluje się przy przewijaniu */}
        <a href="#" className="flex items-center gap-4 group">
          <img
            src={logoImg}
            alt="DYM Bouw Logo"
            className={`w-auto object-contain transition-all duration-500 ${
              isScrolled ? 'h-16' : 'h-24' 
            }`}
          />
          <span className={`font-black tracking-tighter text-white transition-all duration-500 ${
            isScrolled ? 'text-2xl' : 'text-4xl'
          }`}>
            DYM <span className="text-primary">BOUW</span>
          </span>
        </a>
        
        {/* Desktop Menu - DUŻE CZCIONKI */}
        <div className="hidden md:flex items-center space-x-10">
          <NavLink href="#diensten">Diensten</NavLink>
          <NavLink href="#over">Over ons</NavLink>
          
          {/* Przycisk Contact - Dopasowany do reszty strony */}
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-2xl bg-primary text-black font-extrabold text-lg hover:bg-orange-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-[500px] py-8' : 'max-h-0 py-0'}`}>
        <div className="flex flex-col space-y-6 px-6 text-center">
          <MobileLink onClick={() => setMobileMenuOpen(false)} href="#diensten">Diensten</MobileLink>
          <MobileLink onClick={() => setMobileMenuOpen(false)} href="#over">Over ons</MobileLink>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-primary text-3xl font-black uppercase tracking-wide py-2"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

// Komponent pomocniczy do linków desktopowych (dla czystości kodu)
const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="text-white hover:text-primary text-lg font-bold tracking-wide transition-colors relative group"
  >
    {children}
    <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
  </a>
);

// Komponent pomocniczy do linków mobilnych
const MobileLink = ({ href, onClick, children }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-gray-300 hover:text-white text-2xl font-bold transition-colors"
  >
    {children}
  </a>
);

export default Navbar;
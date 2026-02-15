import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// IMPORTUJEMY ZDJĘCIE TUTAJ
import actionImg from './assets/akcja.jpg';

function App() {
  return (
    <div className="relative min-h-screen text-white font-sans">
      
      {/* --- GLOBALNE TŁO (Cała strona) --- */}
      <div className="fixed inset-0 z-[-1]">
        {/* Zdjęcie */}
        <img 
          src={actionImg} 
          alt="Background" 
          className="w-full h-full object-cover object-top" 
        />
        
        {/* ZMIANA TUTAJ: Zmieniłem bg-black/85 na bg-black/60 */}
        {/* Możesz eksperymentować: /50 (jaśniej) lub /70 (ciemniej) */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* --- TREŚĆ STRONY --- */}
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import GameGrid from './components/GameGrid';
import ContentSection from './components/ContentSection';
import FeaturesTable from './components/FeaturesTable';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-darkBg text-white overflow-hidden">
      <Header />
      <HeroBanner />
      
      <main className="flex-grow">
        <GameGrid />
        <ContentSection />
        
        <div className="bg-brand-darkCard py-12 border-y border-brand-neonCyan/30 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-brand-neonCyan/10 via-transparent to-brand-neonPurple/10 mix-blend-overlay"></div>
           <div className="container mx-auto px-4 text-center relative z-10">
               <h4 className="text-3xl font-black text-white mb-4 drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">What are you waiting for?</h4>
               <p className="text-lg text-gray-300 mb-8">Open and Get Your Online ID today and start winning with Rafello Exch.</p>
               <a href="https://wa.me/917589045547" target="_blank" rel="noreferrer">
                 <button className="bg-brand-darkBg border-2 border-brand-neonCyan text-brand-neonCyan hover:bg-brand-neonCyan hover:text-brand-darkBg font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.8)] transform hover:-translate-y-1 text-xl tracking-widest uppercase relative group">
                   <span className="relative z-10">GET RAFELLO EXCH ID</span>
                   <div className="absolute inset-0 bg-brand-neonCyan opacity-0 group-hover:opacity-20 rounded-full transition-opacity blur"></div>
                 </button>
               </a>
           </div>
        </div>

        <FeaturesTable />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;

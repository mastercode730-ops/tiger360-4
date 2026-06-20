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
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Header />
      <HeroBanner />
      
      <main className="flex-grow">
        <GameGrid />
        <ContentSection />
        
        <div className="bg-gray-100 py-12 border-y border-gray-200">
           <div className="container mx-auto px-4 text-center">
               <h4 className="text-3xl font-black text-gray-900 mb-4">What are you waiting for?</h4>
               <p className="text-lg text-gray-600 mb-8">Open and Get Your Online ID today and start winning with Rafello Exch.</p>
               <a href="https://www.247l.ink/s/Tiger365pro" target="_blank" rel="noreferrer">
                 <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl text-xl">
                   GET RAFELLO EXCH ID
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

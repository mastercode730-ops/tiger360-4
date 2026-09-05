import React from 'react';

const HeroBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-brand-neonCyan via-brand-neonPurple to-brand-neonPink py-8 px-4 shadow-[0_10px_30px_rgba(138,43,226,0.6)] text-center border-b-4 border-brand-neonPink relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      <a href="https://wa.me/918360750829" target="_blank" rel="noreferrer" className="inline-block">
        <button className="relative z-10 bg-brand-darkBg text-white font-black text-xl md:text-4xl py-5 px-10 rounded-full hover:bg-brand-darkCard hover:scale-105 transition-all duration-300 shadow-2xl uppercase tracking-widest border-2 border-brand-neonCyan group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-neonCyan/0 via-brand-neonCyan/40 to-brand-neonCyan/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          <span className="relative z-10 drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]">Get Rafello Exch ID WITH 100% BONUS - CLICK Here</span>
        </button>
      </a>
    </div>
  );
};

export default HeroBanner;

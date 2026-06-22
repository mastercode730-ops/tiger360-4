import React from 'react';

const HeroBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 py-8 px-4 shadow-[0_10px_30px_rgba(234,179,8,0.4)] text-center border-b-4 border-yellow-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
      
      <a href="https://wa.me/917589045547" target="_blank" rel="noreferrer" className="inline-block">
        <button className="relative z-10 bg-gray-900 text-yellow-400 font-black text-xl md:text-4xl py-5 px-10 rounded-full hover:bg-black hover:scale-105 transition-all duration-300 shadow-2xl uppercase tracking-widest border-2 border-yellow-300 group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          Get Rafello Exch ID WITH 100% BONUS - CLICK Here
        </button>
      </a>
    </div>
  );
};

export default HeroBanner;

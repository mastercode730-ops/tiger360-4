import React from 'react';

const Logo = () => {
  const text = "RAFELLO EXCH".split('');
  return (
    <div className="flex gap-1 items-center flex-wrap max-w-full z-10">
      {text.map((char, index) => {
        if (char === ' ') return <div key={index} className="w-2 md:w-4"></div>;
        const rotateClass = index % 2 === 0 ? '-rotate-6' : 'rotate-6';
        return (
          <div key={index} className={`relative flex items-center justify-center w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-brand-darkCard text-white font-black text-sm sm:text-lg md:text-3xl rounded-md shadow-lg transform transition-all duration-300 hover:scale-125 ${rotateClass} border border-brand-neonCyan/30 group hover:border-brand-neonCyan hover:shadow-[0_0_15px_rgba(0,240,255,0.6)]`}>
             <span className="relative z-10 drop-shadow-md group-hover:text-brand-neonCyan transition-colors">{char}</span>
             <div className="absolute top-1 left-1 w-full h-full bg-brand-neonCyan/10 -z-10 rounded-md translate-x-1 translate-y-1"></div>
             <div className="absolute inset-0 bg-brand-neonPurple opacity-0 group-hover:opacity-20 transition-opacity rounded-md"></div>
          </div>
        )
      })}
    </div>
  )
}

const Header = () => {
  return (
    <header className="relative w-full min-h-[600px] flex items-center bg-brand-darkBg overflow-hidden">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://dummyimage.com/1920x1080/0B0F19/00F0FF.png&text=Cyberpunk+City" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darkBg via-brand-darkBg/80 to-transparent"></div>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-brand-darkBg to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-12 flex flex-col lg:flex-row justify-between items-center gap-12">
        
        {/* Left Side Branding */}
        <div className="flex flex-col items-center lg:items-start space-y-6 flex-1 text-center lg:text-left">
          <Logo />
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-tight uppercase tracking-tighter drop-shadow-2xl">
            Betting Website <br/>
            <span className="text-brand-neonCyan text-2xl md:text-4xl lg:text-5xl tracking-widest border-b-4 border-brand-neonCyan pb-2 inline-block mt-4 drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">24X7 Deposit & Withdraw</span>
          </h1>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-neonPurple to-brand-neonPink uppercase tracking-tighter drop-shadow-xl mt-4 opacity-90 animate-pulse-glow">
            RAFELLO EXCH
          </h2>
        </div>

        {/* Right Side Login Box - Glassmorphism */}
        <div className="w-full max-w-md bg-brand-darkCard/60 backdrop-blur-xl p-8 rounded-2xl border border-brand-neonCyan/20 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-brand-neonCyan/50 transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-neonCyan/10 to-brand-neonPurple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl font-bold text-white text-center mb-6 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] tracking-wider">ACCOUNT LOGIN</h3>
            <input 
              type="text" 
              placeholder="User Name" 
              className="w-full p-4 rounded-lg bg-brand-darkBg/80 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-brand-neonCyan focus:ring-2 focus:ring-brand-neonCyan/30 transition-all backdrop-blur-sm"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-4 rounded-lg bg-brand-darkBg/80 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-brand-neonCyan focus:ring-2 focus:ring-brand-neonCyan/30 transition-all backdrop-blur-sm"
            />
            
            <a href="https://wa.me/918360750829" className="block w-full pt-2">
              <button className="w-full bg-gradient-to-r from-brand-neonCyan to-brand-neonPurple hover:from-brand-neonPurple hover:to-brand-neonPink text-white font-bold py-4 px-4 rounded-lg transition-all shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:shadow-[0_0_25px_rgba(138,43,226,0.7)] transform hover:-translate-y-1 uppercase tracking-widest relative overflow-hidden">
                <span className="relative z-10">LOGIN</span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full hover:animate-[shimmer_1s_infinite]"></div>
              </button>
            </a>
            
            <a href="https://wa.me/918360750829" className="block w-full">
              <button className="w-full bg-transparent border border-brand-neonCyan/50 text-brand-neonCyan hover:bg-brand-neonCyan/10 font-semibold py-3 px-4 rounded-lg transition-colors text-sm">
                LOGIN PROBLEM? CONTACT SUPPORT HERE
              </button>
            </a>

            <div className="pt-4 text-center text-sm text-gray-400 space-y-2">
              <div>
                Not registered? <a href="https://wa.me/918360750829" className="text-brand-neonCyan hover:text-brand-neonPurple font-bold underline transition-colors">Create an account</a>
              </div>
              <div>
                <a href="https://wa.me/918360750829" className="text-gray-300 hover:text-brand-neonPink transition-colors">Forgot Password</a>
              </div>
            </div>

            <div className="pt-4 text-xs text-center text-gray-500 border-t border-gray-700 mt-4">
              This site is protected by reCAPTCHA and the <br />
              <a href="https://wa.me/918360750829" className="hover:text-white underline">Google Privacy Policy</a> and{' '}
              <a href="https://wa.me/918360750829" className="hover:text-white underline">Terms of Service</a> apply.
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;

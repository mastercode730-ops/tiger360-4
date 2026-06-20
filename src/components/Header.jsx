import React from 'react';

const Logo = () => {
  const text = "RAFELLO EXCH".split('');
  return (
    <div className="flex gap-1 items-center flex-wrap max-w-full z-10">
      {text.map((char, index) => {
        if (char === ' ') return <div key={index} className="w-2 md:w-4"></div>;
        const rotateClass = index % 2 === 0 ? '-rotate-6' : 'rotate-6';
        return (
          <div key={index} className={`relative flex items-center justify-center w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-gradient-to-br from-white to-gray-300 text-gray-900 font-black text-sm sm:text-lg md:text-3xl rounded-md shadow-2xl transform transition-all duration-300 hover:scale-125 ${rotateClass} border border-gray-400 group`}>
             <span className="relative z-10 drop-shadow-md group-hover:text-yellow-600 transition-colors">{char}</span>
             <div className="absolute top-1 left-1 w-full h-full bg-black/40 -z-10 rounded-md translate-x-1 translate-y-1"></div>
             <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity rounded-md"></div>
          </div>
        )
      })}
    </div>
  )
}

const Header = () => {
  return (
    <header className="relative w-full min-h-[600px] flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://tiger365pro.com/img/desk.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-12 flex flex-col lg:flex-row justify-between items-center gap-12">
        
        {/* Left Side Branding */}
        <div className="flex flex-col items-center lg:items-start space-y-6 flex-1 text-center lg:text-left">
          <Logo />
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-tight uppercase tracking-tighter drop-shadow-2xl">
            Betting Website <br/>
            <span className="text-yellow-500 text-2xl md:text-4xl lg:text-5xl tracking-widest border-b-4 border-yellow-500 pb-2 inline-block mt-4">24X7 Deposit & Withdraw</span>
          </h1>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-red-600 uppercase tracking-tighter drop-shadow-xl mt-4 opacity-90">
            RAFELLO EXCH
          </h2>
        </div>

        {/* Right Side Login Box - Glassmorphism */}
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl font-bold text-white text-center mb-6 drop-shadow-md">ACCOUNT LOGIN</h3>
            <input 
              type="text" 
              placeholder="User Name" 
              className="w-full p-4 rounded-lg bg-gray-900/60 border border-gray-600/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 transition-all backdrop-blur-sm"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-4 rounded-lg bg-gray-900/60 border border-gray-600/50 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 transition-all backdrop-blur-sm"
            />
            
            <a href="https://www.247l.ink/s/Tiger365pro" className="block w-full pt-2">
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 px-4 rounded-lg transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transform hover:-translate-y-1 uppercase tracking-wider">
                LOGIN
              </button>
            </a>
            
            <a href="https://www.247l.ink/s/Tiger365pro" className="block w-full">
              <button className="w-full bg-transparent border border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-4 rounded-lg transition-colors text-sm">
                LOGIN PROBLEM? CONTACT SUPPORT HERE
              </button>
            </a>

            <div className="pt-4 text-center text-sm text-gray-300 space-y-2">
              <div>
                Not registered? <a href="https://www.247l.ink/s/Tiger365pro" className="text-yellow-400 hover:text-yellow-300 font-bold underline transition-colors">Create an account</a>
              </div>
              <div>
                <a href="https://www.247l.ink/s/Tiger365pro" className="text-white hover:text-yellow-400 transition-colors">Forgot Password</a>
              </div>
            </div>

            <div className="pt-4 text-xs text-center text-gray-400 border-t border-white/10 mt-4">
              This site is protected by reCAPTCHA and the <br />
              <a href="https://www.247l.ink/s/Tiger365pro" className="hover:text-white underline">Google Privacy Policy</a> and{' '}
              <a href="https://www.247l.ink/s/Tiger365pro" className="hover:text-white underline">Terms of Service</a> apply.
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 relative border-t-4 border-yellow-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="space-y-4">
            <h4 className="text-2xl font-black text-white">RAFELLO EXCH</h4>
            <p className="text-sm leading-relaxed text-gray-400">
              Rafello Exch platforms offer various bonuses to enhance your betting experience. However, it's essential to understand the "rollover requirement" associated with these bonuses. Play responsibly and within your limits.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Sign Up</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Login</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Betting ID</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Contact</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">About</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Cricket</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Responsible Gambling</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Payment</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">How To Bet</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Casino</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Bonus</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Betting App</li>
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Say Hi!</h4>
              <p className="text-yellow-500 font-medium">support@rafelloexch.com</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Call Us</h4>
              <p className="text-yellow-500 font-medium">Phone: +91-9999999999</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>Copyright © 2026 Rafello Exch. All rights reserved.</p>
        </div>
      </div>

      <a href="https://www.247l.ink/s/Tiger365pro" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors hover:scale-110 transform z-50">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;

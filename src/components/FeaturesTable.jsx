import React from 'react';

const FeaturesTable = () => {
  const features = [
    { label: 'Registration No.', desc: 'CLBC/45014/Rafello-Exch/2026' },
    { label: 'Accepted Currency', desc: 'Indian Rupees' },
    { label: 'Payment Options', desc: 'Net-Banking, E-Wallet payments and UPI Payment, Debit/Credit Card' },
    { label: 'Betting Games Types', desc: 'Cricket Match & Live Casino Games' },
    { label: 'Minimum Legal Age', desc: '18 Years' },
    { label: 'Bonuses', desc: 'Welcome Bonus, Regular Deposit, Free Bets & Referral Bonus' },
    { label: 'Support', desc: 'Email, WhatsApp Live Chat, Telephone – working time 24/7' },
    { label: 'Mobile App', desc: 'Apps for Android & iOS' }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto overflow-hidden bg-gray-900 shadow-2xl rounded-3xl border border-gray-700 relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent pointer-events-none"></div>
        <div className="overflow-x-auto relative z-10">
          <table className="w-full text-left border-collapse min-w-[600px] md:min-w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-800 to-gray-900 text-yellow-500 shadow-md">
                <th className="py-5 px-6 md:py-6 md:px-8 font-black text-lg md:text-xl w-1/3 tracking-widest uppercase border-b border-gray-700">Feature</th>
                <th className="py-5 px-6 md:py-6 md:px-8 font-black text-lg md:text-xl tracking-widest uppercase border-b border-gray-700">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {features.map((item, index) => (
                <tr key={index} className="hover:bg-gray-800/50 transition-colors duration-300">
                  <td className="py-4 px-6 md:py-5 md:px-8 font-bold text-gray-300 bg-gray-800/20">{item.label}</td>
                  <td className="py-4 px-6 md:py-5 md:px-8 text-gray-400 font-light">{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTable;

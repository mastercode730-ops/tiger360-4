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
    <div className="container mx-auto px-4 py-16 relative">
      <div className="absolute inset-0 bg-brand-neonCyan/5 blur-3xl rounded-full z-0 pointer-events-none w-3/4 mx-auto opacity-50"></div>
      <div className="max-w-4xl mx-auto overflow-hidden bg-brand-darkCard/80 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.6)] rounded-3xl border border-brand-neonCyan/30 relative group hover:border-brand-neonCyan/70 transition-colors duration-500 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-neonCyan/10 to-brand-neonPurple/5 pointer-events-none"></div>
        <div className="overflow-x-auto relative z-10">
          <table className="w-full text-left border-collapse min-w-[600px] md:min-w-full">
            <thead>
              <tr className="bg-brand-darkBg/90 text-brand-neonCyan shadow-md">
                <th className="py-5 px-6 md:py-6 md:px-8 font-black text-lg md:text-xl w-1/3 tracking-widest uppercase border-b border-brand-neonCyan/30">Feature</th>
                <th className="py-5 px-6 md:py-6 md:px-8 font-black text-lg md:text-xl tracking-widest uppercase border-b border-brand-neonCyan/30">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {features.map((item, index) => (
                <tr key={index} className="hover:bg-brand-neonCyan/10 transition-colors duration-300 group/row cursor-default">
                  <td className="py-4 px-6 md:py-5 md:px-8 font-bold text-white bg-brand-darkBg/40 group-hover/row:text-brand-neonCyan transition-colors">{item.label}</td>
                  <td className="py-4 px-6 md:py-5 md:px-8 text-gray-300 font-light group-hover/row:text-white transition-colors">{item.desc}</td>
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

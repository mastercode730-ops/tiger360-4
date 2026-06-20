import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "Why Should I Choose Rafello Exch for Betting on Cricket or Other Sports?",
      a: "Rafello Exch is a trusted name, following all the regulatory compliances and providing you the freedom of playing and placing bets against the real players by setting your own odds. You will get instant solutions for any query. They provide Login support through website and app."
    },
    {
      q: "Is It Necessary to Create a Betting Account or Sign-up for Betting on Rafello Exch?",
      a: "Yes, it provides you an identity number (betting ID) that is password protected to keep your personal details, betting account, etc confidential and protected. This will be your identity to manage all transactions."
    },
    {
      q: "What Is the Easiest Way to Register Rafello Exch ID?",
      a: "Simply click on the link received on WhatsApp or “Register Now’ button on the official website, provide personal details, verify the account through OTP, and start placing bets. This entire process will take lesser than a minute."
    },
    {
      q: "Can I Withdraw the Bonuses and Rewards Received at Rafello Exch?",
      a: "You cannot withdraw the bonuses, rewards, and referral points. They are credited into your betting account to redeem or use for betting on sport events or playing casino games. This is the way to create an environment for free betting."
    },
    {
      q: "How to Recover Password or Reset at Rafello Exch (If Required)?",
      a: "Simply click on the forget password or reset button and submit the registered mobile number. Keep in mind, only registered mobile number or email ID are required to send an OTP. Once the details match and the OTP is verified, you will be allowed to change, reset, or recover the password."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-center text-gray-900 mb-12 drop-shadow-sm">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl shadow-lg bg-white overflow-hidden transition-all duration-300 hover:shadow-xl">
              <button 
                className={`w-full text-left px-8 py-6 font-black text-xl flex justify-between items-center focus:outline-none transition-colors duration-300 ${activeIndex === index ? 'bg-gray-900 text-yellow-500' : 'text-gray-900 hover:bg-gray-100'}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.q}</span>
                <span className={`transform transition-transform duration-500 ${activeIndex === index ? 'rotate-180 text-yellow-500' : 'text-gray-400'}`}>
                  ▼
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 py-6 text-gray-700 text-lg leading-relaxed border-t border-gray-100 bg-gray-50">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

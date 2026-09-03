import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "What is Rafello Exech?",
      a: "Rafello Exech is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information."
    },
    {
      q: "How can I access the Rafello Exech website?",
      a: "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site."
    },
    {
      q: "What information is available on Rafello Exech?",
      a: "Refer to Rafello Exech's current website information and terms for the most accurate answer."
    },
    {
      q: "How can I contact the website?",
      a: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
    },
    {
      q: "Where can I find account or access information?",
      a: "Refer to Rafello Exech's current website information and terms for the most accurate answer."
    },
    {
      q: "How can I verify the official website?",
      a: "Refer to Rafello Exech's current website information and terms for the most accurate answer."
    },
    {
      q: "Does Rafello Exech provide support?",
      a: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
    },
    {
      q: "Where can I find the latest updates?",
      a: "Check the website's latest posts, announcements, or relevant information pages for current updates."
    },
    {
      q: "What should I do if a page is unavailable?",
      a: "Refer to Rafello Exech's current website information and terms for the most accurate answer."
    },
    {
      q: "How can I get help with website access?",
      a: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-20 bg-brand-darkBg relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-black text-center text-white mb-12 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-800 rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.5)] bg-brand-darkCard overflow-hidden transition-all duration-300 hover:shadow-[0_5px_20px_rgba(0,240,255,0.2)] hover:border-brand-neonCyan/30">
              <button 
                className={`w-full text-left px-8 py-6 font-black text-xl flex justify-between items-center focus:outline-none transition-colors duration-300 ${activeIndex === index ? 'bg-brand-neonCyan/10 text-brand-neonCyan border-b border-brand-neonCyan/20' : 'text-gray-300 hover:bg-brand-darkBg/50 hover:text-white'}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.q}</span>
                <span className={`transform transition-transform duration-500 ${activeIndex === index ? 'rotate-180 text-brand-neonCyan drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]' : 'text-gray-500'}`}>
                  ▼
                </span>
              </button>
              <div 
                className={`grid transition-all duration-500 ease-in-out ${activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <div className="px-8 py-6 text-gray-400 text-lg leading-relaxed bg-brand-darkCard/50">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-neonPurple/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-brand-neonCyan/10 rounded-full blur-[100px] pointer-events-none"></div>
    </div>
  );
};

export default FAQ;

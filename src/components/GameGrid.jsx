import React from 'react';

const games = [
  { name: '32 Cards', id: 1, image: 'https://tiger365pro.com/img/32_cards.png' },
  { name: 'Amar Akbar Anthony', id: 2, image: 'https://tiger365pro.com/img/aaa.png' },
  { name: 'Andar Bahar', id: 3, image: 'https://tiger365pro.com/img/andarbahar.png' },
  { name: 'Baccarat', id: 4, image: 'https://tiger365pro.com/img/bac.png' },
  { name: 'Bollywood Casino', id: 5, image: 'https://tiger365pro.com/img/bc.png' },
  { name: 'Roulette', id: 6, image: 'https://tiger365pro.com/img/casino.png' },
  { name: 'Cricket', id: 7, image: 'https://tiger365pro.com/img/cricket.png' },
  { name: 'Dragon Tiger', id: 8, image: 'https://tiger365pro.com/img/dragontiger.png' },
  { name: 'Football', id: 9, image: 'https://tiger365pro.com/img/football.png' },
  { name: 'Indian Casino', id: 10, image: 'https://tiger365pro.com/img/indian_casino.png' },
  { name: '7 Up Down', id: 11, image: 'https://tiger365pro.com/img/l7.png' },
  { name: 'Lucky 7', id: 12, image: 'https://tiger365pro.com/img/lucky_7.png' },
  { name: 'Poker', id: 13, image: 'https://tiger365pro.com/img/poker.png' },
  { name: 'Queen Race', id: 14, image: 'https://tiger365pro.com/img/queen.png' },
  { name: 'Teen Patti', id: 15, image: 'https://tiger365pro.com/img/teenpatti.png' },
  { name: 'Tennis', id: 16, image: 'https://tiger365pro.com/img/tennis.png' }
];

const GameGrid = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {games.map((game) => (
          <div key={game.id} className="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-200 cursor-pointer aspect-[4/3] bg-white transform transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(0,0,0,0.15)] hover:-translate-y-2 flex items-center justify-center p-2">
            
            <img 
              src={game.image} 
              alt={game.name} 
              className="w-full h-full object-contain relative z-10 drop-shadow-md transform transition-transform duration-500 group-hover:scale-110"
            />

            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent pointer-events-none z-20"></div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none z-20 mix-blend-overlay"></div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gray-100 rounded-full blur-2xl group-hover:bg-yellow-400/20 transition-colors duration-500 z-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameGrid;

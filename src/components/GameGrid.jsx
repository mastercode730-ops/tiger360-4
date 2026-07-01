import React from 'react';

const games = [
  { name: '32 Cards', id: 1, image: 'https://dummyimage.com/600x400/111827/00F0FF.png&text=32+Cards' },
  { name: 'Amar Akbar Anthony', id: 2, image: 'https://dummyimage.com/600x400/111827/00F0FF.png&text=Amar+Akbar+Anthony' },
  { name: 'Andar Bahar', id: 3, image: 'https://dummyimage.com/600x400/111827/00F0FF.png&text=Andar+Bahar' },
  { name: 'Baccarat', id: 4, image: 'https://dummyimage.com/600x400/111827/00F0FF.png&text=Baccarat' },
  { name: 'Bollywood Casino', id: 5, image: 'https://dummyimage.com/600x400/111827/00F0FF.png&text=Bollywood+Casino' },
  { name: 'Roulette', id: 6, image: 'https://dummyimage.com/600x400/111827/00F0FF.png&text=Roulette' },
  { name: 'Cricket', id: 7, image: 'https://dummyimage.com/600x400/111827/00F0FF.png&text=Cricket' },
  { name: 'Dragon Tiger', id: 8, image: 'https://dummyimage.com/600x400/111827/00F0FF.png&text=Dragon+Tiger' },
  { name: 'Football', id: 9, image: 'https://dummyimage.com/600x400/111827/00F0FF.png&text=Football' },
  { name: 'Indian Casino', id: 10, image: 'https://dummyimage.com/600x400/111827/00F0FF.png&text=Indian+Casino' },
  { name: '7 Up Down', id: 11, image: 'https://dummyimage.com/600x400/111827/00F0FF.png&text=7+Up+Down' },
  { name: 'Lucky 7', id: 12, image: 'https://dummyimage.com/600x400/111827/00F0FF.png&text=Lucky+7' },
  { name: 'Poker', id: 13, image: 'https://dummyimage.com/600x400/111827/00F0FF.png&text=Poker' },
  { name: 'Queen Race', id: 14, image: 'https://dummyimage.com/600x400/111827/00F0FF.png&text=Queen+Race' },
  { name: 'Teen Patti', id: 15, image: 'https://dummyimage.com/600x400/111827/00F0FF.png&text=Teen+Patti' },
  { name: 'Tennis', id: 16, image: 'https://dummyimage.com/600x400/111827/00F0FF.png&text=Tennis' }
];

const GameGrid = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-transparent">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {games.map((game) => (
          <div key={game.id} className="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-800 cursor-pointer aspect-[4/3] bg-brand-darkCard transform transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:border-brand-neonCyan hover:-translate-y-2 flex items-center justify-center p-2">
            
            <img 
              src={game.image} 
              alt={game.name} 
              className="w-full h-full object-contain relative z-10 drop-shadow-md transform transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />

            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-neonCyan/10 to-transparent pointer-events-none z-20"></div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-brand-neonCyan opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none z-20 mix-blend-overlay"></div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-neonPurple/20 rounded-full blur-2xl group-hover:bg-brand-neonCyan/30 transition-colors duration-500 z-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameGrid;

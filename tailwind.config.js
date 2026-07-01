/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkBg: '#0B0F19',
          darkCard: '#111827',
          neonCyan: '#00F0FF',
          neonPurple: '#8A2BE2',
          neonPink: '#FF007F',
        }
      },
      animation: {
        'shimmer': 'shimmer 1.5s infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 15px rgba(0, 240, 255, 0.5)' },
          '50%': { opacity: '.7', boxShadow: '0 0 5px rgba(0, 240, 255, 0.2)' },
        }
      }
    },
  },
  plugins: [],
}

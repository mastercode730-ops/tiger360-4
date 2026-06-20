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
          dark: '#1a1a1a',
          blue: '#113355',
          gold: '#f0b90b',
        }
      }
    },
  },
  plugins: [],
}

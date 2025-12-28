
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        dota: {
          dark: {
            900: '#0a0e27', // Deepest background
            800: '#1a1f3a', // Secondary background
            700: '#252a4a', // Card background
          },
          gold: {
            400: '#ffd700', // Highlight
            500: '#d4af37', // Base gold
            600: '#b8860b', // Dark gold
          },
          crimson: {
            500: '#dc143c', // Bright red
            700: '#8b0000', // Deep red
          },
          blue: {
            400: '#00bfff', // Bright arcane
            600: '#4169e1', // Deep arcane
          },
          silver: {
            100: '#e8e8e8',
            300: '#c0c0c0',
            500: '#a9a9a9',
          }
        }
      },
      fontFamily: {
        hero: ['Cinzel', 'serif'],
        lore: ['Crimson Text', 'serif'],
        ui: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('https://www.transparenttextures.com/patterns/dark-matter.png')", // Subtle texture overlay
      },
      boxShadow: {
        'glow-gold': '0 0 15px rgba(212, 175, 55, 0.3)',
        'glow-crimson': '0 0 15px rgba(220, 20, 60, 0.3)',
        'glow-blue': '0 0 15px rgba(65, 105, 225, 0.3)',
      }
    },
  },
  plugins: [],
}

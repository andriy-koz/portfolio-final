/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          'linear-gradient(to right bottom, rgba(167, 139, 250, 0.8), rgba(91, 33, 182, 0.8)), url("/hero.webp")',
        'features-pattern':
          'linear-gradient(to right bottom, rgba(167, 139, 250, 0.8), rgba(91, 33, 182, 0.8)), url("/bg-features.webp")',
      },
      keyframes: {
        'in-left': {
          '0%': { transform: 'translateX(-100px)', opacity: 0 },
          '80%': { transform: 'translateX(10px)' },
          '100%': { opacity: 1, transform: 'translate(0)' },
        },
        'in-right': {
          '0%': { transform: 'translateX(100px)', opacity: 0 },
          '80%': { transform: 'translateX(-10px)' },
          '100%': { opacity: 1, transform: 'translate(0)' },
        },
        'in-bottom': {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { opacity: 1, transform: 'translate(0)' },
        },
      },
      animation: {
        'in-left': 'in-left 1s ease-out',
        'in-right': 'in-right 1s ease-out',
        'in-bottom': 'in-bottom .5s ease-out .75s',
      },
    },
  },
  plugins: [],
};

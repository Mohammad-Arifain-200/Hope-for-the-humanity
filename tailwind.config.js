/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#0d2a22',
        forest2: '#173f33',
        cream: '#fbf7eb',
        gold: '#f6c900',
        ink: '#16201d',
        mist: '#f5f6f4',
      },
      boxShadow: {
        soft: '0 20px 50px rgba(10, 35, 27, 0.10)',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brandGreen: '#80D2AB',
        softGray: '#f3f4f6',
        accentGreen: '#10b981',
        myRed: '#e11d48',
        deepBlack: '#0f172a',
        skyBlue: '#45D6E2'
      },
    },
  },
  plugins: [],
};

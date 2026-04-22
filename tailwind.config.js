/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1e3a8a',
      },
      fontFamily: {
        share: ['"Share"', 'Arial', 'sans-serif'],
        squada: ['"Squada One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
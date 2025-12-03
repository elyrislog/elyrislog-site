
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bg-900': '#0A0A0F',
        'ely-blue': '#1A4CFF',
        'ely-cyan': '#19E6FF',
        'ely-violet': '#A68CFF'
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "all-azul-1": "#4777B6",
        "all-azul-4": "#f4f9ff",
        "all-azul-5": "#225275",
        "all-azul-6": "#d0f1ff",
        "all-branco-2": "#ffffff",
        "all-preto-3": "#000000",
        "all-cinza-7": "#d9d9d9",
      },
      fontFamily: {
        'padrão': ['Montserrat'],
      },
    },
  },
  plugins: [],
}
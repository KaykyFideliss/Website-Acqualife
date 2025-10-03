/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      fontFamily: {
        zalando: ['"Zalando Sans Expanded"', 'sans-serif'],
      },
      colors: {
        "azul-style": "#0D6DFF", // nome customizado
      },
    },
  },
  plugins: [],
}

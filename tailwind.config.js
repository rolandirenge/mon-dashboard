/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandYellow: "#FFD600", // jaune vif
        brandGray: "#F9F9F9",   // gris clair pour le fond
        brandBlack: "#1A1A1A",  // noir profond pour le texte
      },
    },
  },
  plugins: [],
}

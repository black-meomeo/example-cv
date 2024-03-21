/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F9FAFF",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        dimBg:"#0B0A0C99"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        comfortaa: ["Comfortaa"],
        anta: ["Anta"],
        playfair: ["Playfair Display"]
      },
      backgroundImage:{
        'yellow': 'url("src/assets/yellow-bg.svg")'
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFB400",
        secondary: "#4CAF50",
        background: "#F5F7FA"
      },
      fontFamily: {
        playful: ["Comic Sans MS", "cursive", "sans-serif"],
        friendly: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: []
};
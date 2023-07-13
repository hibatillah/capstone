/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#ed7d2b",
        biru : "#68c4fd",
        kuning : "#fdb765",
        orange : "#ff715a",
        dongker : "#136afc",
        green : "#4cdf94",
      }
    },
  },
  plugins: [],
}
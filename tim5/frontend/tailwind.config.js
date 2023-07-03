/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6F9FFF",
          100: "#F0F5FF",
          200: "#C9DCFF",
          300: "#A1C1FF",
        },
        secondary: "#FF5D5C",
      },
    },
  },
  plugins: [],
};


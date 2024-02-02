/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E75D8F",
        primary_50: "#E75D8F4D",
        primary_35: "#E75D8F59",
        white: "#FFF5F9",
        gray: "#D9D9D9",
        yellow: "#FFBD59",
        blue: "#004AAD",
        red_dark: "#56091F",
        green: "#2AB85B"
      }
    }
  },
  plugins: []
};

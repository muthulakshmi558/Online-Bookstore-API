/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#07435C",  // bike site deep blue
        secondary: "#F5F5F5",
        accent: "#FFAB0D",
      },
    },
  },
  plugins: [],
};

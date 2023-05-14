/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#02030C",
        },
        almostDark: "#080A1A",
      },
    },
  },
  plugins: [],
};

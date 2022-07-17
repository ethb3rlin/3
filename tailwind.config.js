/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Staatliches", ...defaultTheme.fontFamily.sans],
      mono: ["Major Mono Display", ...defaultTheme.fontFamily.mono],
    },
    extend: {},
  },
  plugins: [],
};

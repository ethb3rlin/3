/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      mono: [...defaultTheme.fontFamily.mono],
    },
    extend: {
      fontFamily: {
        ocra: ["OCR-A", ...defaultTheme.fontFamily.mono],
        bundessans: ["BundesSans", ...defaultTheme.fontFamily.mono],
        dotpassport: ["DotPassport", ...defaultTheme.fontFamily.mono],
        dotcapital: ["DotCapital", ...defaultTheme.fontFamily.mono],
        // w95: ["W95FA", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "berlin-yellow": "#FFD200",
        secondary: "#FFD200",
      },
    },
  },
  plugins: [],
};

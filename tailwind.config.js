const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      // sans: ["Staatliches", ...defaultTheme.fontFamily.sans],
      // mono: ["Major Mono Display", ...defaultTheme.fontFamily.mono],
    },
    extend: {},
  },
  plugins: [],
};

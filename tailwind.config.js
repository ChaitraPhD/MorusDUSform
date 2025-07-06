/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4C51BF",
        primaryLight: "#E0E7FF",
        secondary: "#38A169",
        secondaryLight: "#F0FFF4",
        accent: "#D69E2E",
        accentLight: "#FFFAEB"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms")
  ]
};

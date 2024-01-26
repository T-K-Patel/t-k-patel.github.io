/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'xs': "320px"
      },
      colors: {
        primary: "rgb(254 185 1)"
      }
    },
  },
  plugins: [],
}


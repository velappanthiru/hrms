/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");


module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   primary: '#6B45BC', // Replace this hex value with your desired primary color
    // },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '767px',
      // => @media (min-width: 767px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      'xxl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        'themeblue': '#6B45BC',
      }
    },
    fontFamily: {
      'Josefin': ['Josefin Sans', 'sans-serif'],
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

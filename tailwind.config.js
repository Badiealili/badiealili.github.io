/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins'],
        display: ['Pixelify Sans']
      },
      colors: {
        primary: {
          50: colors.green['50'],
          100: colors.green['100'],
          200: colors.green['200'],
          300: colors.green['300'],
          700: colors.green['700'],
          800: colors.green['800'],
          900: colors.green['900'],
        },
        accent: {
          50: colors.lime['50'],
          100: colors.lime['100'],
          200: colors.lime['200'],
          300: colors.lime['300'],
          400: colors.lime['400'],
          700: colors.lime['700'],
          800: colors.lime['800'],
          900: colors.lime['900'],
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 5s linear infinite",
        "scroll-and-back": "scroll-and-back 15s linear infinite"
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "scroll-and-back": {
          "0%": {transform: "translateX(0)"},
          "98%": { transform: "translateX(calc(-100% + 70vw))" },
          "100%": {transform: "translateX(0)"}
        }
      },
      listStyleType: {
        square: 'square'
      },
      rotate: {
        30: '30deg'
      }
    }
  },
  plugins: [],
}


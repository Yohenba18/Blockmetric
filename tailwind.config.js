const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backblue: "#21242E",
        navblack: "#232323",
        pfontgray: "#C4C4C4",
        bordergreen: "#00B13B",
        activepurple: "#9446EF",
        gradientpurple: "#7951A8",
        cardbg :"#0B0C0F",
        dropbg : "#21242E",
        bloglightblue: "#193766",
        purplebg:"#322145"
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

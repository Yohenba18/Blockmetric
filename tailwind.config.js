const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#21242E",
          secondary1: "#193766",
          secondary2: "#7951A8",
          card: "#0B0C0F",
          table: "#1A1A1A",
        },
        navblack: "#232323",
        bordergreen: "#00B13B",
        activepurple: "#9446EF",
        gradientpurple: "#7951A8",
        dropbg: "#21242E",
        bloglightblue: "#193766",
        purplebg: "#322145",
        buttonbg: "#20B2AA",
        text: {
          secondary: "#C4C4C4",
        },
      },
      fontFamily: {
        heading: ["Khand"],
      },
      // backgroundImage: {
      //  'blogcard': "url('/assets/photo/mountains.jpg')"
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

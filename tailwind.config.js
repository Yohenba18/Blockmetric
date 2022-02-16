module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: { 100: "#21242E", 200: "#11011E" },
          black: { 100: "#19062A", 200: "#232323" },
          secondary: {
            100: "#232323",
            200: "#193766",
            300: "#7951A8",
          },
          blue: "#193766",
          green: "#0FAE96",
          card: "#0B0C0F",
          table: "#1A1A1A",
          button: "#20B2AA",
          gradientpurple: "#7951A8",
        },
        shadow: {
          blue: "#326dcd"
        },
        border: {
          green: "#00B13B",
        },
        activepurple: "#9446EF",
        text: {
          secondary: "#C4C4C4",
          green: "#0FAE96",
          purple: "#9446EF",
        },
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        heading: ["Khand"],
      },
    },
  },
  plugins: [],
};

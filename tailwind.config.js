{
  import("tailwindcss").Config;
}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlack: "#0d0c0d",
        red: "  #e50914;",
      },
      keyframes: {
        fadeIn: {
          "0%": {transform: "translateY(-25%)"},
          "100%": {transform: "translateY(0)"},
        },
      },

      animation: {
        fadeIn: "fadeIn 400ms ease-in",
      },

      // keyframes: {
      //   wiggle: {
      //     "0%, 100%": {transform: "rotate(-3deg)"},
      //     "50%": {transform: "rotate(3deg)"},
      //   },
      // },
      // animation: {
      //   wiggle: "wiggle 5s ease-in-out infinite",
      // },
    },
  },
  plugins: [],
};

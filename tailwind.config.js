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
        lightGray: " #a1a1a1",
      },
      keyframes: {
        fadeIn: {
          "0%": {transform: "translateY(-25%)"},
          "100%": {transform: "translateY(0)"},
        },
        itemFadeIn: {
          "0%": {opacity: 0},
          "100%": {opacity: 1},
        },
      },

      gridTemplateColumns: {
        "project-grid": "repeat(auto-fit, minmax(250px,1fr))",
      },

      animation: {
        fadeIn: "fadeIn 400ms ease-in",
        itemFadeIn: "itemFadeIn 5s ease-in forwards",
      },
      variants: {
        animation: ["motion-safe"],
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

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
    },
  },
  plugins: [],
};

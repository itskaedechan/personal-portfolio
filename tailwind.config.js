export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jacques: ['"Jacques Francois"', "serif"],
        cg: ['"Cormorant Garamond"', "serif"],
      },
      spacing: {
        13: "52px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

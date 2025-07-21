export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jacques: ['"Jacques Francois"', "serif"], // Existing font
        cg: ['"Cormorant Garamond"', "serif"], // New short alias
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

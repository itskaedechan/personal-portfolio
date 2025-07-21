export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jacques: ['"Jacques Francois"', "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

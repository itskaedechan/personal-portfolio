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
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "black" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInSlow: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        typing: "typing 3s steps(30, end) forwards",
        blink: "blink 0.7s step-end infinite",
        fadeIn: "fadeIn 1.5s ease-out forwards",
        slideInSlow: "slideInSlow 2s ease-in-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

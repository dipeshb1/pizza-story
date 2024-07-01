/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    keyframes: {
      slideUp: {
        "0%": { transform: "scale(0.75)", opacity: "0" },
        "100%": { transform: "scale(1)", opacity: "1" },
      },
      btnFront: {
        "0%": { transform: "translateY(20%)", opacity: "0" },
        "100%": { transform: "translateY(0%)", opacity: "1" },
      },
      slideFront: {
        "0%": { transform: "translateY(80%)", opacity: "0" },
        "100%": { transform: "translateY(0%)", opacity: "1" },
      },
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      animation: {
        slideUp: "slideUp 0.3s ease-out",
        btnFront: "btnFront 0.3s cubic-bezier(0.65, 0, 0.35, 1)",
        menuLoad: "slideUp 0.3s ease-out",
        slideFront: "slideFront 0.4s ease-out",
      },
    },
  },
  plugins: [],
};

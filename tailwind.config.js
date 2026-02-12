/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto Mono", "monospace"],
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      keyframes: {
        errorShake: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "25%": {
            transform: "translateX(-6px)",
          },
          "75%": { transform: "translateX(4px)" },
        },
      },
      animation: {
        error: "errorShake 0.2s ease-in-out 0s 2",
      },
    },
  },
  plugins: [],
};

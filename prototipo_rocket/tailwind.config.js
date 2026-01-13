/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Cinzel", "serif"],
        sans: ["Inter", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        dark: {
          900: "#09090b",
          800: "#0f0f11",
          700: "#18181b",
        },
        light: {
          50: "#fafafa",
          100: "#f0f0f0",
        },
        gold: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
      },
      fontSize: {
        huge: "14vw",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite",
        reveal: "reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        reveal: {
          to: { transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

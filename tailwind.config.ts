import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    { pattern: /#32CD32/ },
    { pattern: /#FFFFFF/ },
    { pattern: /#f7df1e/ },
    { pattern: /#007acc/ },
    { pattern: /#264de4/ },
    { pattern: /#06b6d4/ },
    { pattern: /#e34c26/ },
    { pattern: /#027DFD/ },
    { pattern: /#0175C2/ },
  ],
  theme: {
    extend: {
      fontFamily: {
        Bebas: ["Bebas Neue", "verdana"],
        Playfair: ["Playfair Display", "serif"],
      },
      screens: {
        xs: "530px",
        "2xs": "220px",
      },
      colors: {
        "#32CD32": "#32CD32",
        "#FFFFFF": "#FFFFFF",
        "#f7df1e": "#f7df1e",
        "#007acc": "#007acc",
        "#264de4": "#264de4",
        "#06b6d4": "#06b6d4",
        "#e34c26": "#e34c26",
        "#027DFD": "#027DFD",
        "#0175C2": "#0175C2",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeIn: {
          "90%": { opacity: "1" },
          "0%": { opacity: "0" },
        },
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in-out 2",
        fadeInOnce: "fadeIn 2s 1",
        slowSpin: "spin 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

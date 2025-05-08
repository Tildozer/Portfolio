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
    { pattern: /#478cbf/ },
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
        "#478cbf": "#478cbf",
        background: "var(--background)",
        foreground: "var(--foreground)",
        macWindowBar: "#e8e8e8",
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
        expandHeight: {
          "0%": {
            height: "0%",
            borderRadius: "0rem",
          },
          "100%": {
            height: "100%",
            borderRadius: "0.375rem",
          },
        },
        expandWindow: {
          "0%": {
            transform: "translate(-50%, -50%) scale(0)",
          },
          "100%": {
            transform: "translate(0%, 0%) scale(1)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in-out 2",
        fadeInOnce: "fadeIn 2s 1",
        slowSpin: "spin 1.5s linear infinite",
        expand: "expandHeight 1.5s ease-in-out 1",
        expandBox: "expandWindow 0.5s 1",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space)", "sans-serif"],
      },
      colors: {
        background: "#020617", // Slate 950 - extremely elegant deep blue/black
        foreground: "#f8fafc", // Slate 50
        primary: "#ffffff",
        secondary: "#94a3b8", // Slate 400
        accent: "#38bdf8", // Sky 400 - Professional and engaging blue
      },
    },
  },
  plugins: [],
};
export default config;

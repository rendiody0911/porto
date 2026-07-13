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
        background: "#050505",
        foreground: "#f3f4f6",
        primary: "#ffffff",
        secondary: "#a1a1aa",
        accent: "#3b82f6", // Nice blue for subtle accents
      },
    },
  },
  plugins: [],
};
export default config;

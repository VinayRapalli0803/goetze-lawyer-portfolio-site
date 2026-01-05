import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./app/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      colors: {
        midnight: "#0b0d12",
        slate: "#10151f"
      },
      boxShadow: {
        glow: "0 20px 60px rgba(59, 130, 246, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;

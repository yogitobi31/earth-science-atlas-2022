import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#050816",
        aurora: "#2bf0c7",
        magma: "#ff7a1a",
        earth: "#4aa8ff"
      },
      boxShadow: {
        glow: "0 0 40px rgba(74, 168, 255, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;

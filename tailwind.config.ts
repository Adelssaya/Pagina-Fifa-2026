import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        redBase: "#E63946",
        greenContrast: "#06D6A0",
        blueBase: "#118AB2",
        orangeContrast: "#FF9E00",
        purpleBase: "#9D4EDD",
        yellowLite: "#FFE066",
        greenBase: "#06D6A0",
        wineContrast: "#8B0000",
        yellowBase: "#FFD166",
        ink: "#222222",
      },
      boxShadow: {
        soft: "0 6px 16px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        lgx: "12px",
      },
    },
  },
  plugins: [],
};

export default config;

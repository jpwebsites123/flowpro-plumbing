import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2545",
          50: "#EAF0F8",
          100: "#CBD9EC",
          200: "#9FBAD9",
          300: "#6E97C4",
          400: "#4A79AE",
          500: "#2C5D93",
          600: "#1D4573",
          700: "#153658",
          800: "#0F2A45",
          900: "#0B2545",
          950: "#071831",
        },
        flow: {
          DEFAULT: "#1E88E5",
          50: "#EAF5FE",
          100: "#CDE7FC",
          200: "#9BCEFA",
          300: "#69B5F7",
          400: "#3E9DF3",
          500: "#1E88E5",
          600: "#166BB8",
          700: "#12548F",
          800: "#0D3E6B",
          900: "#092A49",
        },
        mist: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E7ECF1",
          300: "#D9E1E8",
          400: "#AEB9C4",
          500: "#8894A2",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 8px rgba(11, 37, 69, 0.06), 0 1px 2px rgba(11, 37, 69, 0.04)",
        "card-hover": "0 12px 28px rgba(11, 37, 69, 0.14), 0 4px 10px rgba(11, 37, 69, 0.08)",
        button: "0 4px 14px rgba(30, 136, 229, 0.35)",
      },
      backgroundImage: {
        "flow-line":
          "linear-gradient(90deg, transparent 0%, rgba(30,136,229,0.35) 50%, transparent 100%)",
      },
      keyframes: {
        flow: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "200% 0%" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        flow: "flow 6s linear infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;

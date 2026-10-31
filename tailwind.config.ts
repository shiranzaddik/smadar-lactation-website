import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Fresh, soft maternal-wellness palette: bright cream, calm sage green
        // and a warm dusty-blush rose. Clean and modern — no brown, no gold.
        cream: {
          DEFAULT: "#FBF7F1",
          50: "#FEFCFA",
          100: "#FBF7F1",
          200: "#F4ECE0",
        },
        // Primary brand — calm, soft sage green (buttons, links, accents).
        sage: {
          DEFAULT: "#8EA587",
          50: "#F1F4EF",
          100: "#DCE4D8",
          200: "#BFCDBA",
          300: "#A3B69B",
          400: "#8EA587",
          500: "#73896C",
          600: "#5B6E55",
          700: "#475641",
        },
        // Warm dusty-rose accent (eyebrows, underlines, highlights).
        blush: {
          DEFAULT: "#E7B9B0",
          50: "#FBF1EF",
          100: "#F6E0DB",
          200: "#EFC9C1",
          300: "#E7B9B0",
          400: "#D99B8F",
          500: "#C87C6E",
          600: "#A85F52",
        },
        beige: {
          DEFAULT: "#E9DFD1",
          100: "#F3ECE1",
          200: "#E9DFD1",
          300: "#D9CAB5",
        },
        ink: {
          DEFAULT: "#4A4038",
          light: "#6B5F54",
          muted: "#8C8073",
        },
      },
      fontFamily: {
        sans: ["var(--font-assistant)", "system-ui", "sans-serif"],
        heading: ["var(--font-heebo)", "var(--font-assistant)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -15px rgba(74, 64, 56, 0.18)",
        card: "0 4px 24px -8px rgba(74, 64, 56, 0.14)",
        float: "0 8px 30px -6px rgba(74, 64, 56, 0.28)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.9s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

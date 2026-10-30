import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Warm, elegant palette: chocolate brown + gold + olive on cream.
        cream: {
          DEFAULT: "#F4EEE2",
          50: "#FBF8F1",
          100: "#F4EEE2",
          200: "#EAE0CD",
        },
        // Primary brand — chocolate brown (buttons, strong accents).
        brown: {
          DEFAULT: "#5F3D28",
          50: "#F4ECE5",
          100: "#E7D7C8",
          200: "#D2B49C",
          300: "#B98E6E",
          400: "#996B4C",
          500: "#7A4F34",
          600: "#5F3D28",
          700: "#48301F",
        },
        // Gold / mustard accent (eyebrows, underlines, dots).
        gold: {
          DEFAULT: "#CBA14A",
          50: "#FAF3E2",
          100: "#F3E6C4",
          200: "#E8D094",
          300: "#DBB862",
          400: "#CBA14A",
          500: "#B08832",
          600: "#8E6C26",
        },
        // Olive-green feature sections / footer bar (mapped to the legacy
        // `sage` name so existing green usages adopt the new olive tone).
        sage: {
          DEFAULT: "#77814B",
          50: "#F2F3EA",
          100: "#E2E4CF",
          200: "#CBD0AC",
          300: "#AEB684",
          400: "#929B63",
          500: "#77814B",
          600: "#5E663A",
          700: "#474E2C",
        },
        // Soft warm sand (legacy `blush` name — now a gold-tinted neutral,
        // so former pink accents read as warm cream/gold).
        blush: {
          DEFAULT: "#E7D3A8",
          50: "#FAF3E2",
          100: "#F3E7CC",
          200: "#EBDAB2",
          300: "#E0C78C",
          400: "#D0A95C",
          500: "#B08832",
          600: "#8E6C26",
        },
        beige: {
          DEFAULT: "#E3D6BF",
          100: "#EFE7D6",
          200: "#E3D6BF",
          300: "#CFBC9C",
        },
        ink: {
          DEFAULT: "#3E2F23",
          light: "#5C4A3A",
          muted: "#8A7765",
        },
      },
      fontFamily: {
        sans: ["var(--font-assistant)", "system-ui", "sans-serif"],
        heading: ["var(--font-heebo)", "var(--font-assistant)", "serif"],
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

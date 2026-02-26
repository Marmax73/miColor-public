/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // =========================
      // FUENTES
      // =========================
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        serif: ["var(--font-playfair)", "serif"],
      },

      // =========================
      // COLORES (PALETA GLAMOUR)
      // =========================
      colors: {
        midnight: "rgb(11 15 26)",        // #0B0F1A
        gold: "#C9A24D",
        goldDark: "#9F7C32",
        chalk: "#F4F1EC",
        blush: "#D6B7A9",
        smoke: "#9A9A9F",
      },

      // =========================
      // SOMBRAS SUAVES (LUJO)
      // =========================
      boxShadow: {
        gold: "0 20px 40px rgba(201, 162, 77, 0.15)",
        soft: "0 10px 30px rgba(0, 0, 0, 0.25)",
      },

      // =========================
      // ESPACIADO / ANCHOS
      // =========================
      maxWidth: {
        container: "80rem", // similar a max-w-7xl
      },

      // =========================
      // TRANSICIONES
      // =========================
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },

  plugins: [],
};

export default config;
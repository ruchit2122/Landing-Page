/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        ink: "#0d0d0d",
        body: "#4a4a4a",
        muted: "#8a8a8a",
        gold: "#bf9b47",
        "gold-soft": "#d8bd7a",
        "gold-bright": "#ecd394",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

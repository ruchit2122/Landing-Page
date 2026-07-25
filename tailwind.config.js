/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1c1338",
        body: "#4a4360",
        muted: "#8a83a0",
        gold: "#bd8b3c",
        "gold-soft": "#d8b872",
        "gold-bright": "#e7c983",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Poppins", "sans-serif"],
        serif: ["var(--font-serif)", "Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};

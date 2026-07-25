/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#2a1b5e",
        body: "#574b7a",
        muted: "#9187b3",
        gold: "#f0a92b",
        "gold-soft": "#ffcb5e",
        "gold-bright": "#ffdf7e",
        saffron: "#ff7a3d",
        pink: "#ff5c9d",
        purple: "#8b5cf6",
        teal: "#2dd4bf",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#0D5AB3",
        "secondary": "#6B91BC"
      }
    },
    screens: {
      sm: {max: "1000px"},

      lg: {max: "1024px"},
      // => @media (min-width: 1024px) { ... }
    }
  },
  plugins: [],
}
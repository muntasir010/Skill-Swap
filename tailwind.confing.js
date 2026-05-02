/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1", // Indigo
        secondary: "#10B981", // Emerald
        dark: "#1F2937",
      },
    },
  },
  plugins: [],
}
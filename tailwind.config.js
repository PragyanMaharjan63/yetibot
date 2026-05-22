/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1f2724",
        moss: "#51685c",
        fern: "#7c9a87",
        oat: "#f4f0e8",
        paper: "#fbfaf6",
        clay: "#d9b99b",
        rust: "#b76f47",
        line: "#e7dfd2",
      },
      boxShadow: {
        soft: "0 22px 60px rgba(31, 39, 36, 0.11)",
        tiny: "0 8px 24px rgba(31, 39, 36, 0.08)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

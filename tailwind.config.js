/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      grey: "#333333",
      lightGrey: "#9ca3af",
      header: "#f2f2f2",
      orange: "#f59e0b",
      lightOrange: "#f9c77e",
      white: "#ffffff",
      darkBlue: "#1e40af",
      lightBlue: "#7ea5d8",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};

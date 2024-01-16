/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      grey: "#666666",
      darkGrey: "#3366cc",
      orange: "#f59e0b",
      lightOrange: "#f9c77e",
      white: "#ffffff",
      darkBlue: "#1e40af",
      lightBlue: "#7ea5d8",
    },
    container: {
      center: true,
      // padding: {
      //   DEFAULT: "1rem",
      //   sm: "2rem",
      //   lg: "4rem",
      //   xl: "5rem",
      //   "2xl": "6rem",
      // },
    },
  },
  plugins: [],
};

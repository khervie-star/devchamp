/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      ds: ["'Dancing Script'", "cursive"],
      outfit: ["Outfit", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#96BB7C",
        blue: "#1fb6ff",
        // purple: "#7e5bef",
        // pink: "#ff49db",
        orange: "#ff7849",
        green: "#2F8B3E",
        // yellow: "#ffc82c",
        yellow: "#EAD94C",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        darkBlue: "#042B4E",
        // darkBlue: "#2C3D55",
        red: "#D7263D",
      },
    },
  },
  plugins: [],
};

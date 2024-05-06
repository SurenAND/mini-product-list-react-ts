/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        sh1: "rgba(0, 0, 0, 0.16) 0px 0px 2px",
      },
      fontFamily: {
        "poppins-r": ["Poppins-Regular", "sans-serif"],
        "poppins-b": ["Poppins-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        '80vh': '80vh',
      },
      colors: {
        vividRed: '#ff3811',
      }
    },
  },
  plugins: [require("daisyui")],
}

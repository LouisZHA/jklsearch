/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    colors: {
      'search-bar': "#FEFEFE",
      'search-bar-stroke': "#A7A9AD",
      'result-box': '#FAF8F2',
      'green': '#7abb3a',
    },
    borderWidth: {
      '3': '3px'
    },

    extend: {},
  },
  plugins: [require("daisyui")],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    colors: {
      'search-bar': "#FEFEFE",
      'search-bar-stroke': "#A7A9AD",
      'result-box': '#FAF8F2',
      'green': '#599E2D',
      'search-button-hover':'#cae8f1',
      'title-color':'#5BA9E2',
      'bg':'#FAF8F2'
    },
    borderWidth: {
      '3': '3px'
    },
    fontFamily:{

    },

    extend: {},
  },
  plugins: [require("daisyui")],
}

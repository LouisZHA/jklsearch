/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    colors: {
      'search-bar': "#FEFEFE",
      'search-bar-stroke': "#A7A9AD",
      'result-box': '#FAF8F2',
      'green': '#7abb3a',
      'search-button-hover':'#cae8f1',
      'title-color':'#5BA9E2',
      'bg':'#FFFFFF'
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

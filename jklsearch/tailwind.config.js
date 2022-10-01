/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    colors: {
      'search-box': "#FEFEFE",
      'search-bar-stroke': "#556580",
      'result-box': '#FBFDFB',
      'result-box-decorate': '#3f587f',
      'search-button-hover':'#577aaa',
      'title-color':'#5BA9E2',
      'bg':'#90989F',
      'bar':'#2B4773'

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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        debug: '#D7DADF',
        light:{
          main:'#FAF2E5',
          card:'#F6F7F9',
          text:'#201714',
          subtext: '#665D58'
        },
      },
    },
  },
  plugins: [],
}

// -light'  : '#FAF2E5',
//       'sub-light'   : '#675D58',
//       'shadow-light': '#675D58'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        'none':'0px'
      },
      width:  {
        card:'310px',
        cardExpand:'350px',
      },
      height: {
        'card': '100px',
        'cardExpand': '300px',
      },
      margin: {
        cardSelected: '20px',
        cardNormal:   '40px',
      },
      colors: {
        debug: '#D7DADF',
        light:{
          main:'#FAF2E5',
          card:'#F6F7F9',
          text:'#201714',
          subtext: '#665D58',
          bar:"#7E7976",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
}

// -light'  : '#FAF2E5',
//       'sub-light'   : '#675D58',
//       'shadow-light': '#675D58'
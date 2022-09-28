/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
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
          //=========== OLD COLOR SCHEME (SEPIA)
          //=========== main          :'#FAF2E5',
          //=========== card          :'#F6F7F9',
          //=========== text          :'#201714',
          //=========== subtext       :'#665D58',
          //=========== bar           :"#7E7976",
          // NEW COLOR SCHEME
          main            : '#90989F',
          card            : '#FBFDFB',
          text            : '#201714',
          subtext         : '#665D58',
          bar             : '#2B4773',
          logo            : '#FBFDFB',
          panelLogo_left  : '#FBFDFB',
          panelLogo_right : '#FBFDFB',
          panel_left      : '#2B4773',
          panel_right     : '#2B4773',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
}
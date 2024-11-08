/** @type {import('tailwindcss').Config} */

import scrollbar from 'tailwind-scrollbar'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        red1:"#f42C37",
        red2:"#f42C37",
        yellow1:"#fdc62e",
        green1:"#2dcc6f",
        blue1:"#1376f4",
        white1 :"#eeeeee",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem",
        },
      },
      fontFamily:{
        fontAY:['Playwrite IT Moderna','sans'],
        fontAY2:['Playwrite DE Grund','sans']
      }
    },
  },
  plugins: [
    //...
    scrollbar
  ],
}


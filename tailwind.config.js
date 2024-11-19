/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#131c31',
        tertiary: '#222f43',
        genzTextWhite: '#b9e0f2',
        genzTextDark: '#94A9C9',
        hoverColor: '#1cc2e7!important'
      },
      boxShadow: {
        genz: '0 3px 20px rgba(11,209,209,.2)'
      },
      borderColor: {
        genz: '#0ea5ea'
      },
      width:{
        oneThird: '32%'
      },
      height: {
        tweentyEightREM: '28rem'
      }
    },
    fontFamily: {
      'nunito': ['Nunito'],
      'agbalumo': ['Agbalumo'],
    },
  },
  plugins: [],
}
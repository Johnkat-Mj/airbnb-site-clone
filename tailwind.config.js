/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#FF385C"
      },
      zIndex:{
        80:"80",
        90:"90",
        100:"100"
      }
    },
  },
  plugins: [],
}


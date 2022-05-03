module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] ,
        'soft':['Nunito','sans-serif']
      },
      colors: {
      
      'subtlewhite': '#e5e5e5',
    },
    },
  },
  plugins: [],
}

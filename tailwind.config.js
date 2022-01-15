module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'bgWhite':'#E5E5E5',
        'offWhite':'#FBFBFB',
        'borderColor':'rgba(115, 123, 125, 0.3)',
        'paragraphColor':'#737B7D',
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateY(0rem)" },
      
          "100%": { transform: "translateY(-1.5rem)" }
        }
      },
      animation: {
        wiggle: "wiggle 600ms ease-in-out"
      }
    },
  },
  plugins: [],
}

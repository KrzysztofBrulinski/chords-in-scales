module.exports = {
  content: ['./src/**/*.svelte', './src/**/*.css'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Secular One', ...(require("tailwindcss/defaultTheme")).fontFamily.sans],
      },
      colors: {
        mainColor: "#f99f14",
        mainColorHover: "#f5b553",
        darkModeBackground: "#5d5d5d",
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
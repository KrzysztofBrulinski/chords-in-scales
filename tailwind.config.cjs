module.exports = {
  content: ['./src/**/*.svelte', './src/**/*.css'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Secular One', ...(require("tailwindcss/defaultTheme")).fontFamily.sans],
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
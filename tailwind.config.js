module.exports = {
  content: ["./src/**/*.{html,pug,js}"],
  theme: {
    extend: {
      colors: {
        'font-gray': '#4b4f4e',
        'subtitle-gray': '#757778',
        'main-blue': '#3999c9'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

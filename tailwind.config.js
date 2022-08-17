module.exports = {
  content: ["./src/**/*.{html,pug,js}"],
  theme: {
    extend: {
      colors: {
        "font-gray": "#4b4f4e",
        "gradient-gray": "#ededed",
        "subtitle-gray": "#757778",
        "slider-bg-gray": "#1b1437",
        "menu-grdient-gray": "#ebecea",
        "main-blue": "#3999c9",
        "border-blue": "#75b2df",
        "border-bottom-blue": "#0082ca",
        "main-yellow": "#ddb151",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

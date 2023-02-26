/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./src/components/**/*.js",
    "./src/components/**/*.vue",
    "./src/views/**/*.vue",
  ],
  media: false, // or 'media' or 'class'
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        logoText: ["Itim"],
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};

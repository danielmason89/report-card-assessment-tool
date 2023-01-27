/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/components/**/*.js", "./pages/**/*.js"],
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/components/**/*.js",  "./src/components/**/*.vue","./src/views/**/*.vue"],
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};

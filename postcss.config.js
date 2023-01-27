module.exports = {
  plugins: {
    "postcss-import": {},
    autoprefixer: {},
    tailwindcss: {},
    "postcss-flexbugs-fixes": {},
    "postcss-simple-vars":{},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    },
  },
};

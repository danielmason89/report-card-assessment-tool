module.exports = {
  plugins: {
    "postcss-import": {},
    'tailwindcss/nesting': {},
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

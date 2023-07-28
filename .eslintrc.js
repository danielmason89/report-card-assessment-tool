module.exports = {
  extends: [
    "plugin:vue/vue3-essentials",
    "@vue/eslint-config-prettier",
    "eslint:recommended",
  ],
  overrides: [
    {
      files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"],
      extends: ["plugin: cypress/recommended"],
    },
  ],
  env: {
    node: "true",
  },
  rules: {
    // override/add rules settings here, such as:
    "vue/no-unused-vars": "error",
    "vue/multi-component-names": "off",
    quotes: "error",
  },
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
};

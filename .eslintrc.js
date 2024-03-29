module.exports = {
  extends: ["plugin:vue/vue3-essentials", "@vue/eslint-config-prettier"],
  overrides: [
    {
      files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"],
      extends: ["plugin: cypress/recommended"],
    },
    {
      files: ["src/components/**/*.spec.js"],
      globals: {
        test: "readonly",
        expect: "readonly",
        it: "readonly",
        vi: "readonly",
        describe: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
      },
    },
  ],
  env: {
    node: "true",
  },
  rules: {
    // override/add rules settings here, such as:
    "vue/no-unused-vars":
      process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-component-names": "on",
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

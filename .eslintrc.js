module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential", // Або 'plugin:vue/essential'для Nuxt 2
    "plugin:prettier/recommended", // Додає Prettier і вимикає конфліктуючі правила
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaVersion: 2020,
  },
  rules: {
    // Власні правила
    "vue/multi-word-component-names": "off", // Наприклад, вимкнення обов'язкових багатослівних назв компонентів
    semi: ["error", "always"],
    "semi-style": ["error", "last"],
    "no-extra-semi": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};

module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      ecmaFeatures: {
        project: "./tsconfig.json",
        modules: true,
        experimentalObjectRestSpread: true,
      },
    },
    extends: ["airbnb", "plugin:@typescript-eslint/recommended", "prettier"],
    rules: {
      "import/no-unresolved": [2, { caseSensitive: false }],
      amd: true,
    },
  };
  
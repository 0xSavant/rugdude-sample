module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:@next/next/recommended",
    ],
    overrides: [],
    parserOptions: {
      ecmaFeatures: {
          jsx: "true",
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/no-unknown-property": "warn",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-redeclare": "warn",
      "react/no-unescaped-entities": "off",
      "no-mixed-spaces-and-tabs": "off",
      "no-constant-condition": "off",
      "@next/next/no-html-link-for-pages": "off",
    },
  };
  
import js from "@eslint/js";
import globals from "globals";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    plugins: {
      "react-hook": eslintReactHooks,
      react: eslintReact,
      "react-refresh": eslintReactRefresh,
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ["node_modules", "dist"],
  },
  js.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2024,
      },
      parserOptions: eslintReact.configs.recommended.parserOptions,
    },
  },
  {
    files: ["**/*.{js,jsx}"],

    rules: {
      ...eslintConfigPrettier.rules,
      "no-console": "error",

      "react/function-component-definition": [
        2,
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],

      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      "prettier/prettier": [
        "error",

        {
          endOfLine: "auto",
          singleQuote: false,
          tabWidth: 2,
          trailingComma: "es5",
          bracketSpacing: true,
        },
      ],
    },
  },
];

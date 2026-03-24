// eslint.config.js
import js from "@eslint/js"
import prettier from "eslint-plugin-prettier"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import globals from "globals"
import tseslint from "typescript-eslint"

export default [
  {
    ignores: ["dist", "node_modules"]
  },

  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    },

    plugins: {
      "@typescript-eslint": tseslint.plugin, // ✅ ДОБАВЛЕНО!
      react,
      "react-hooks": reactHooks,
      "simple-import-sort": simpleImportSort,
      prettier
    },

    rules: {
      // JS Recommended
      ...js.configs.recommended.rules,

      // TS Recommended
      ...tseslint.configs.recommended[0].rules,

      // React Recommended
      ...react.configs.recommended.rules,

      // Hooks Recommended
      ...reactHooks.configs.recommended.rules,

      // Prettier
      "prettier/prettier": "error",

      // Sorting imports
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      // Unused vars
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" }
      ],

      // React 17+ — JSX без импорта React
      "react/react-in-jsx-scope": "off"
    },

    settings: {
      react: {
        version: "detect"
      }
    }
  }
]

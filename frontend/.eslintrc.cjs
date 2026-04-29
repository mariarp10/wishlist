module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "react-hooks", "react-refresh"],
  extends: ["airbnb", "airbnb-typescript", "airbnb/hooks", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.ts",
          "**/*.test.tsx",
          "**/*.spec.ts",
          "**/*.spec.tsx",
          "vite.config.ts",
          "*.config.ts",
        ],
      },
    ],
    "react/jsx-props-no-spreading": [
      "error",
      {
        html: "ignore",
        custom: "enforce",
      },
    ],
  },
};

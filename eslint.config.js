module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true, // Supports ES2021 features
  },
  parser: "@typescript-eslint/parser", // Use TypeScript parser
  parserOptions: {
    ecmaVersion: 12, // Enable ES2021 syntax
    sourceType: "module", // Enable ES Modules (import/export)
  },
  plugins: ["@typescript-eslint"], // Use TypeScript plugin
  extends: [
    "eslint:recommended", // Base ESLint rules
    "plugin:@typescript-eslint/recommended", // TypeScript-specific rules
  ],
  rules: {
    // Add custom rules if needed
  },
};

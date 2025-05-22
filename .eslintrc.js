module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:jsx-a11y/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'jsx-a11y',
    'import',
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
    'react-native/react-native': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-native/no-inline-styles': 'off',
    'react-native/sort-styles': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-console': ['error'],
    'no-warning-comments': ['error', {terms: ['console'], location: 'start'}],
  },
};

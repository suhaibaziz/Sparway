/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  // Next’s own rules + turn off style checks via Prettier
  extends: ['next/core-web-vitals', 'plugin:react/recommended', 'prettier'],
  parserOptions: { ecmaVersion: 2023, sourceType: 'module', ecmaFeatures: { jsx: true } },
  plugins: ['react', 'import'],
  rules: {
    // keep what you really care about, turn off noisy style rules
    'react/function-component-definition': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/button-has-type': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'no-restricted-globals': 'off',

    // formatting/style – let Prettier (or nothing) handle it
    'arrow-parens': 'off',
    'operator-linebreak': 'off',
    'comma-dangle': 'off',
    'indent': 'off',
    'semi': 'off',
    'jsx-quotes': 'off',
    'react/self-closing-comp': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-props-no-multi-spaces': 'off',
    'react/jsx-max-props-per-line': 'off',
    'lines-around-directive': 'off',
    'implicit-arrow-linebreak': 'off',
  },
};

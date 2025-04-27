// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'import'],
  rules: {
    // Turn off overly strict formatting rules
    'react/jsx-closing-bracket-location': 0,
    'no-multiple-empty-lines': 0,
    'import/order': 0,
    'import/newline-after-import': 0,
    'quotes': 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-tag-spacing': 0,
    'no-multi-spaces': 0,
    'no-trailing-spaces': 0,

    // Your existing preferred rules
    'arrow-parens': ['error', 'as-needed'],
    'react/no-unescaped-entities': 0,
    'no-console': 0,

    // Other overrides you already had
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/prop-types': 0,
    'linebreak-style': 0,
    'import/extensions': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-alert': 0,
    'consistent-return': 0,
    'no-nested-ternary': 0,
    'max-len': ['error', 1050],
    'no-underscore-dangle': ['error', {
      allow: ['_d','_dh','_h','_id','_m','_n','_t','_text'],
    }],
    'object-curly-newline': 0,
    'react/jsx-no-constructed-context-values': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to','hrefLeft','hrefRight'],
      aspects: ['noHref','invalidHref','preferButton'],
    }],
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
  },
};

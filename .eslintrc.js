module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    jest: true
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  parser: 'babel-eslint',
  rules: {
    "comma-dangle": ["error", {
      "arrays": "only-multiline",
      "objects": "only-multiline",
      "imports": "only-multiline",
      "exports": "only-multiline",
      "functions": "ignore"
    }],
    'no-underscore-dangle': 'off',
    'react/destructuring-assignment': 'off',
    'class-methods-use-this': 0,
    'react/forbid-prop-types': ['off', { forbid: [] }],
    'global-require': 0,
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/anchor-is-valid': ['error', {
      'components': ['Link'],
      'specialLink': ['to']
    }],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/no-unescaped-entities': 0,
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['**/*/__tests__/**/*', '**/*/__mocks__/**/*', '**/webpack.*.js']
    }]
  }
}
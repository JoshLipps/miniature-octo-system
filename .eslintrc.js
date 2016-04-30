/*global module*/
module.exports = {
  rules: {
    indent: [2, 2],
    quotes: [2, 'single'],
    'linebreak-style': [2, 'unix'],
    semi: [2, 'always'],
    'no-extra-semi': 1,            // disallow unnecessary semicolons
    'no-inner-declarations': 2    // disallow function or variable declarations in nested blocks
  },
  extends: [
    'eslint:recommended'
  ],
  root: true
};

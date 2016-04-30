/*global module*/
module.exports = {
  rules: {
    'no-unused-vars': 0,
    'angular/controller-as-route': 0
  },

  env: {
    es6: true,
    browser: true
  },

  globals: {
    _: false
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },

  extends: [
    'angular'
  ]
};

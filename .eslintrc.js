/*
 * @describe: eslint 规则
 * @Author: superDragon
 * @Date: 2019-10-24 15:18:34
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-27 18:32:22
 */
const fabric = require('@umijs/fabric');
module.exports = {
  ...fabric.eslint,
  root: true,
  globals: {
    AMap: true,
    window: true
  },
  rules: {
    ...fabric.eslint.rules,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-return-assign': 0,
    'no-console': 0,
    '@typescript-eslint/array-type': ['error', 'array-simple'],
    'max-len': ['error', { code: 120, ignoreComments: true }],
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }]
  },
  parserOptions: {
    parser: 'babel-eslint',
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": { // 添加ES特性支持，使之能够识别ES6语法
      "jsx": true
    }
  },
};

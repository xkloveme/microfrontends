/*
 * @describe: eslint 规则
 * @Author: superDragon
 * @Date: 2019-10-24 15:18:34
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-26 13:46:46
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    AMap: true,
  },
  rules: {
    'space-before-function-paren': 0,
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

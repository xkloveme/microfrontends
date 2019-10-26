/*
 * @describe: eslint 规则
 * @Author: superDragon
 * @Date: 2019-10-24 15:18:34
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-25 10:59:03
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
  },
};

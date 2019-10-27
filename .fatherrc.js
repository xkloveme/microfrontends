/*
 * @describe: father SET
 * @Author: superDragon
 * @Date: 2019-10-26 14:06:32
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-27 19:49:25
 */
export default {
  target: 'browser',
  entry: 'src/index.ts',
  esm: 'rollup',
  cjs: 'rollup',
  disableTypeCheck: true,
  runtimeHelpers: true,
  extraBabelPlugins: [
    ['babel-plugin-import', {
      libraryName: 'lodash',
      libraryDirectory: '',
      camel2DashComponentName: false,
    }],
  ],
};

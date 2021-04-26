import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import cjs from 'rollup-plugin-commonjs'

const version = process.env.VERSION || require('../package.json').version
const banner =
  '/*!\n' +
  ` * quickapp-deeplink-min.js v${version}\n` +
  ` * (c) 2020-${new Date().getFullYear()}  nicelinks.site\n` +
  ' */'

export default {
  input: 'src/index.js',
  output: {
    banner,
    file: 'dist/quickapp-deeplink-min.js',
    format: 'cjs'
  },
  plugins: [
    resolve({
      mainFields: ['module', 'main']
    }),
    cjs({}),
    getBabelOutputPlugin({
      presets: ['@babel/preset-env']
    }),
    terser()
  ]
}

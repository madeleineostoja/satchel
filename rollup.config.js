import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@wessberg/rollup-plugin-ts';
import { uglify } from 'rollup-plugin-uglify';

const extensions = ['.ts'];

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: '.',
      name: 'satchel',
      format: 'umd'
    },
    plugins: [
      resolve({ extensions, browser: true }),
      commonjs(),
      typescript({
        transpiler: 'babel'
      }),
      uglify()
    ]
  }
];

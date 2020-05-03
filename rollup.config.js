import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import multi from '@rollup/plugin-multi-entry';
import resolve from '@rollup/plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';

const extensions = ['.ts'];

export default [
  {
    input: {
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.test.ts']
    },
    output: {
      file: 'index.js',
      name: 'satchel',
      format: 'iife'
    },
    plugins: [
      multi(),
      babel({ extensions }),
      resolve({ extensions, browser: true }),
      commonjs(),
      uglify()
    ]
  }
];

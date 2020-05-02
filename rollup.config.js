import babel from '@rollup/plugin-babel';
import multi from '@rollup/plugin-multi-entry';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import { readdirSync } from 'fs';

const extensions = ['.ts'];

export default [
  {
    input: readdirSync('src/').map((file) => `src/${file}`),
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

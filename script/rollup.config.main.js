import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import clear from 'rollup-plugin-clear';
import { terser } from 'rollup-plugin-terser';
import getPkgMethodGlobals from './getPkgMethodGlobals';

export default {
    input: 'src/index.js',
    output: [
        // umd
        {
            file: 'dist/rollup2-lib.umd.js',
            format: 'umd',
            name: 'roll2Lib',
            globals: {
                ...getPkgMethodGlobals({ lodash: '_' }),
                mockjs: 'Mock',
            },
        },
        {
            file: 'dist/rollup2-lib.umd.min.js',
            format: 'umd',
            name: 'roll2Lib',
            globals: {
                ...getPkgMethodGlobals({ lodash: '_' }),
                mockjs: 'Mock',
            },
            sourcemap: true,
            plugins: [terser({ sourcemap: true })],
        },
        // es
        {
            file: 'dist/rollup2-lib.es.js',
            format: 'es',
        },
        // cjs
        {
            file: 'dist/rollup2-lib.cjs.js',
            format: 'cjs',
        },
    ],
    // externalize lodash/* and mockjs
    external: id => /(^lodash\/.+$)|(^mockjs$)/.test(id),
    plugins: [
        json(),
        resolve(),
        commonjs(),
        babel({
            // only transpile our source code
            exclude: 'node_modules/**',
        }),
        clear({ targets: ['dist'] }),
    ],
};

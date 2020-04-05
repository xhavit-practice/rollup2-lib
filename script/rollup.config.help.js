import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'script/umdHelp.js',
    output: [
        {
            file: 'dist/rollup2-lib.cmd.help.js',
            format: 'iife',
        },
        {
            file: 'dist/rollup2-lib.cmd.help.min.js',
            format: 'iife',
            plugins: [terser()],
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        babel({
            // only transpile our source code
            exclude: 'node_modules/**',
        }),
    ],
};

import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import typescript from "@rollup/plugin-typescript";

export default [
    {
        input: './src/main.ts',
        output: [
            {
                file: './dist/esm/index.esm.mjs',
                format: 'esm',
            },
            {
                file: './dist/cjs/index.cjs.js',
                format: 'cjs',
            },
            {
                file: './dist/umd/index.umd.js',
                format: 'umd',
                name: 'helper',
            },
        ],
        plugins: [
            nodeResolve(),
            commonjs(),
            babel({ babelHelpers: 'bundled' }),
            typescript()
        ]
    },
]
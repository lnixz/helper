export default [
    {
        input: './src/main.js',
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
        ]
    },
]